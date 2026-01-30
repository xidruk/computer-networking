// ============================================
// Configuration
// ============================================
const CONFIG = {
    githubRepo: 'xidruk/computer-networking',
    githubBranch: 'main',
    defaultFile: 'readme.md',
    socialLinks: {
        twitter: 'https://twitter.com/yourusername',
        github: 'https://github.com/xidruk',
        linkedin: 'https://linkedin.com/in/yourusername'
    }
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
        icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    toggle() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.theme);
        this.applyTheme();
    }
}

// ============================================
// Clock
// ============================================
class Clock {
    constructor() {
        this.element = document.getElementById('clock');
        this.start();
    }

    start() {
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        this.element.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

// ============================================
// GitHub Integration
// ============================================
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
        } catch (error) {
            console.error('Failed to fetch star count:', error);
        }
    }
}

// ============================================
// Markdown Loader & Renderer
// ============================================
class MarkdownLoader {
    constructor() {
        this.contentElement = document.getElementById('content');
        this.loadingElement = document.getElementById('loading');
        this.errorElement = document.getElementById('error');
        this.configureMarked();
    }

    configureMarked() {
        // Configure marked.js options
        marked.setOptions({
            highlight: function(code, lang) {
                if (lang && hljs.getLanguage(lang)) {
                    return hljs.highlight(code, { language: lang }).value;
                }
                return hljs.highlightAuto(code).value;
            },
            breaks: true,
            gfm: true
        });
    }

    async loadMarkdown(file = CONFIG.defaultFile) {
        this.showLoading();
        
        try {
            // Construct the raw GitHub URL
            const url = `https://raw.githubusercontent.com/${CONFIG.githubRepo}/${CONFIG.githubBranch}/${file}`;
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch markdown');
            
            const markdown = await response.text();
            this.renderMarkdown(markdown);
            
        } catch (error) {
            console.error('Error loading markdown:', error);
            this.showError();
        }
    }

    renderMarkdown(markdown) {
        // Convert markdown to HTML
        const html = marked.parse(markdown);
        
        // Update content
        this.contentElement.innerHTML = html;
        
        // Process links to work with the viewer
        this.processLinks();
        
        // Generate table of contents
        this.generateTOC();
        
        // Hide loading, show content
        this.hideLoading();
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    processLinks() {
        const links = this.contentElement.querySelectorAll('a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            
            // Handle relative markdown links
            if (href && href.endsWith('.md')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Extract file path
                    let filePath = href;
                    
                    // Handle relative paths
                    if (href.startsWith('/')) {
                        filePath = href.substring(1);
                    } else if (href.startsWith('./')) {
                        filePath = 'docs/' + href.substring(2);
                    } else if (!href.startsWith('http')) {
                        filePath = 'docs/' + href;
                    }
                    
                    this.loadMarkdown(filePath);
                });
            } else if (href && !href.startsWith('#')) {
                // External links open in new tab
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    generateTOC() {
        const toc = document.getElementById('toc');
        const headings = this.contentElement.querySelectorAll('h2, h3');
        
        if (headings.length === 0) {
            toc.innerHTML = '<p style="color: var(--text-secondary); font-size: 0.9rem;">No sections available</p>';
            return;
        }
        
        let tocHTML = '<ul>';
        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;
            
            const level = heading.tagName === 'H2' ? 0 : 1;
            const indent = level * 1;
            
            tocHTML += `
                <li style="margin-left: ${indent}rem;">
                    <a href="#${id}">${heading.textContent}</a>
                </li>
            `;
        });
        tocHTML += '</ul>';
        
        toc.innerHTML = tocHTML;
    }

    showLoading() {
        this.loadingElement.style.display = 'flex';
        this.contentElement.style.display = 'none';
        this.errorElement.style.display = 'none';
    }

    hideLoading() {
        this.loadingElement.style.display = 'none';
        this.contentElement.style.display = 'block';
        this.errorElement.style.display = 'none';
    }

    showError() {
        this.loadingElement.style.display = 'none';
        this.contentElement.style.display = 'none';
        this.errorElement.style.display = 'block';
    }
}

// ============================================
// Table of Contents Toggle
// ============================================
class TOCManager {
    constructor() {
        this.wrapper = document.getElementById('tocWrapper');
        this.toggle = document.getElementById('tocToggle');
        this.init();
    }

    init() {
        // Start expanded
        this.wrapper.classList.add('expanded');
        
        this.toggle.addEventListener('click', () => {
            this.wrapper.classList.toggle('expanded');
        });
    }
}

// ============================================
// URL Parameter Handler
// ============================================
class URLHandler {
    constructor(markdownLoader) {
        this.markdownLoader = markdownLoader;
        this.init();
    }

    init() {
        // Check for file parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const file = urlParams.get('file');
        
        if (file) {
            this.markdownLoader.loadMarkdown(file);
        } else {
            this.markdownLoader.loadMarkdown();
        }
        
        // Handle back/forward navigation
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.file) {
                this.markdownLoader.loadMarkdown(e.state.file);
            }
        });
    }

    updateURL(file) {
        const newURL = `${window.location.pathname}?file=${file}`;
        window.history.pushState({ file }, '', newURL);
    }
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const id = e.target.getAttribute('href').substring(1);
            const element = document.getElementById(id);
            if (element) {
                const headerOffset = 90;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// ============================================
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    const themeManager = new ThemeManager();
    const clock = new Clock();
    const githubIntegration = new GitHubIntegration();
    const markdownLoader = new MarkdownLoader();
    const tocManager = new TOCManager();
    const urlHandler = new URLHandler(markdownLoader);
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Console message
    console.log('%c📚 Computer Networking Documentation', 'color: #0969da; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to the learning platform!', 'color: #57606a; font-size: 14px;');
    console.log('%cGitHub: https://github.com/' + CONFIG.githubRepo, 'color: #57606a; font-size: 12px;');
});

// ============================================
// Service Worker (Optional - for offline support)
// ============================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js');
    });
}