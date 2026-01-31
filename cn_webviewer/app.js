// ============================================
// Configuration
// ============================================
const CONFIG = {
    githubRepo: 'xidruk/computer-networking',
    githubBranch: 'main',
    defaultFile: 'readme.md',
    localMode: window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
};

// ============================================
// Theme Management
// ============================================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    init() {
        this.applyTheme();
        document.getElementById('themeToggle').addEventListener('click', () => this.toggle());
    }
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        const icon = document.querySelector('#themeToggle i');
        if (icon) icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }
}

// ============================================
// Menu Manager (Primary Navigation)
// ============================================
class MenuManager {
    constructor() {
        this.leftSidebar = document.getElementById('leftSidebar');
        this.menuToggle = document.getElementById('menuToggle');
        this.container = document.querySelector('main.container');
        this.isVisible = true; 
        this.init();
    }
    init() {
        this.menuToggle?.addEventListener('click', () => this.toggle());
        if (window.innerWidth <= 1024) this.hide();
    }
    toggle() { this.isVisible ? this.hide() : this.show(); }
    hide() {
        this.leftSidebar?.classList.add('hidden');
        this.container?.classList.add('sidebar-hidden');
        this.isVisible = false;
    }
    show() {
        this.leftSidebar?.classList.remove('hidden');
        this.container?.classList.remove('sidebar-hidden');
        this.isVisible = true;
    }
    populateNavigation(tocData) {
        const nav = document.getElementById('mainNav');
        if (!nav || !tocData) return;
        nav.innerHTML = tocData;
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.endsWith('.md')) {
                    e.preventDefault();
                    window.markdownLoader.loadMarkdown(href);
                    if (window.innerWidth <= 1024) this.hide();
                }
            });
        });
    }
}

// ============================================
// Home & GitHub Integration
// ============================================
class HomeButton {
    constructor() {
        this.init();
    }
    init() {
        // Site Title and Home Button both refresh the page
        document.getElementById('homeButton')?.addEventListener('click', () => window.location.reload());
        document.getElementById('siteTitle')?.addEventListener('click', () => window.location.reload());
    }
}

class GitHubIntegration {
    constructor() {
        this.fetchStarCount();
    }
    async fetchStarCount() {
        try {
            const response = await fetch(`https://api.github.com/repos/${CONFIG.githubRepo}`);
            if (response.ok) {
                const data = await response.json();
                document.getElementById('starCount').textContent = data.stargazers_count;
            }
        } catch (error) {}
    }
}

// ============================================
// Markdown Loader
// ============================================
class MarkdownLoader {
    constructor() {
        this.contentElement = document.getElementById('content');
        this.loadingElement = document.getElementById('loading');
        this.errorElement = document.getElementById('error');
    }

    async loadMarkdown(file = CONFIG.defaultFile) {
        this.showLoading();
        try {
            const url = CONFIG.localMode 
                ? (file.includes('/') ? `../${file}` : `../docs/${file}`)
                : `https://raw.githubusercontent.com/${CONFIG.githubRepo}/${CONFIG.githubBranch}/${file}`;
            
            const response = await fetch(url);
            if (!response.ok) throw new Error();
            const markdown = await response.text();
            this.renderMarkdown(markdown, file);
            
            window.history.pushState({ file }, '', `${window.location.pathname}?file=${file}`);
        } catch (e) { this.showError(); }
    }

    renderMarkdown(markdown, currentFile) {
        markdown = this.fixImagePaths(markdown); // Apply image fix
        this.contentElement.innerHTML = marked.parse(markdown);
        this.addHeadingIds();
        this.processLinks();
        if (currentFile.toLowerCase() === 'readme.md') this.extractNavigation();
        this.hideLoading();
        window.scrollTo(0, 0);
    }

    extractNavigation() {
        const mainTOC = this.contentElement.querySelector('h2[id*="table-of-content"], h2:has(+ ol), h2:has(+ ul)');
        if (!mainTOC) return;
        let list = mainTOC.nextElementSibling;
        while (list && list.tagName !== 'OL' && list.tagName !== 'UL') list = list.nextElementSibling;
        if (list && window.menuManager) window.menuManager.populateNavigation(list.cloneNode(true).outerHTML);
    }

    addHeadingIds() {
        this.contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
            if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        });
    }

    // Fix image paths for GitHub Pages
    fixImagePaths(md) {
        const baseUrl = CONFIG.localMode ? './' : `https://raw.githubusercontent.com/${CONFIG.githubRepo}/${CONFIG.githubBranch}/`;
        return md.replace(/!\[([^\]]*)\]\((?!http)([^)]+)\)/g, (match, alt, path) => {
            const clean = path.replace(/^\.\//, '');
            return `![${alt}](${baseUrl}${clean})`;
        });
    }

    processLinks() {
        this.contentElement.querySelectorAll('a').forEach(link => {
            const href = link.getAttribute('href');
            if (href?.endsWith('.md')) {
                link.onclick = (e) => {
                    e.preventDefault();
                    this.loadMarkdown(href.includes('docs/') ? href : 'docs/' + href);
                };
            } else if (href?.startsWith('http')) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
        });
    }

    showLoading() { this.loadingElement.style.display = 'flex'; this.contentElement.style.display = 'none'; }
    hideLoading() { this.loadingElement.style.display = 'none'; this.contentElement.style.display = 'block'; }
    showError() { this.loadingElement.style.display = 'none'; this.errorElement.style.display = 'block'; }
}

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    window.menuManager = new MenuManager(); 
    new GitHubIntegration();
    window.markdownLoader = new MarkdownLoader();
    new HomeButton();
    
    const file = new URLSearchParams(window.location.search).get('file') || CONFIG.defaultFile;
    window.markdownLoader.loadMarkdown(file);

    window.onpopstate = (e) => { if (e.state?.file) window.markdownLoader.loadMarkdown(e.state.file); };
});