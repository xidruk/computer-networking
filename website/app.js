// ============================================
// Configuration
// ============================================
const CONFIG = {
    githubRepo: 'xidruk/computer-networking',
    githubBranch: 'main',
    defaultFile: 'readme.md',
    localMode: window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1',
    socialLinks: {
        twitter: 'https://twitter.com/yourusername',
        github: 'https://github.com/xidruk',
        linkedin: 'https://linkedin.com/in/yourusername'
    }
};

// ============================================
// Search Functionality
// ============================================
class SearchManager {
    constructor(markdownLoader) {
        this.markdownLoader = markdownLoader;
        this.modal = document.getElementById('searchModal');
        this.input = document.getElementById('searchInput');
        this.results = document.getElementById('searchResults');
        this.searchToggle = document.getElementById('searchToggle');
        this.searchClose = document.getElementById('searchClose');
        this.searchIndex = [];
        this.init();
    }

    init() {
        // Open search modal
        this.searchToggle.addEventListener('click', () => this.open());
        
        // Close search modal
        this.searchClose.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl+K or Cmd+K to open
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.open();
            }
            // Escape to close
            if (e.key === 'Escape') {
                this.close();
            }
        });
        
        // Search input handler
        this.input.addEventListener('input', (e) => this.handleSearch(e.target.value));
        
        // Build search index
        this.buildSearchIndex();
    }

    open() {
        this.modal.classList.add('active');
        this.input.focus();
    }

    close() {
        this.modal.classList.remove('active');
        this.input.value = '';
        this.results.innerHTML = '<p class="search-placeholder">Start typing to search...</p>';
    }

    async buildSearchIndex() {
        // This builds an index from the main README
        // In a full implementation, you'd index all markdown files
        try {
            const response = await fetch(this.getFileURL('readme.md'));
            const text = await response.text();
            this.indexContent('readme.md', 'Main Documentation', text);
        } catch (error) {
            console.error('Failed to build search index:', error);
        }
    }

    getFileURL(file) {
        if (CONFIG.localMode) {
            return `../${file}`;
        }
        return `https://raw.githubusercontent.com/${CONFIG.githubRepo}/${CONFIG.githubBranch}/${file}`;
    }

    indexContent(file, title, content) {
        const lines = content.split('\n');
        lines.forEach((line, index) => {
            if (line.trim().length > 20) {
                this.searchIndex.push({
                    file,
                    title,
                    line: index + 1,
                    content: line.trim()
                });
            }
        });
    }

    handleSearch(query) {
        if (!query || query.length < 2) {
            this.results.innerHTML = '<p class="search-placeholder">Start typing to search...</p>';
            return;
        }

        const results = this.searchIndex.filter(item => 
            item.content.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 10);

        if (results.length === 0) {
            this.results.innerHTML = '<p class="search-placeholder">No results found</p>';
            return;
        }

        const html = results.map(result => {
            const highlighted = this.highlightMatch(result.content, query);
            return `
                <div class="search-result-item" data-file="${result.file}">
                    <div class="search-result-title">${result.title}</div>
                    <div class="search-result-path">${result.file} : Line ${result.line}</div>
                    <div class="search-result-content">${highlighted}</div>
                </div>
            `;
        }).join('');

        this.results.innerHTML = html;

        // Add click handlers
        this.results.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const file = item.getAttribute('data-file');
                this.close();
                this.markdownLoader.loadMarkdown(file);
            });
        });
    }

    highlightMatch(text, query) {
        const index = text.toLowerCase().indexOf(query.toLowerCase());
        if (index === -1) return text;

        const start = Math.max(0, index - 50);
        const end = Math.min(text.length, index + query.length + 50);
        let snippet = text.substring(start, end);
        
        if (start > 0) snippet = '...' + snippet;
        if (end < text.length) snippet = snippet + '...';

        const regex = new RegExp(`(${query})`, 'gi');
        return snippet.replace(regex, '<span class="search-highlight">$1</span>');
    }
}

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
// Home/Refresh Button
// ============================================
class HomeButton {
    constructor(markdownLoader) {
        this.markdownLoader = markdownLoader;
        this.init();
    }

    init() {
        // Home button functionality
        const homeButton = document.getElementById('homeButton');
        if (homeButton) {
            homeButton.addEventListener('click', () => this.goHome());
        }

        // Make site title clickable
        const siteTitle = document.getElementById('siteTitle');
        if (siteTitle) {
            siteTitle.addEventListener('click', () => this.goHome());
        }
    }

    goHome() {
        // Load the main README
        this.markdownLoader.loadMarkdown(CONFIG.defaultFile);
        // Update URL
        window.history.pushState({ file: CONFIG.defaultFile }, '', window.location.pathname);
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
            let url;
            
            // Handle different path scenarios
            if (CONFIG.localMode) {
                // Local development mode
                url = `../${file}`;
            } else {
                // GitHub hosted mode
                url = `https://raw.githubusercontent.com/${CONFIG.githubRepo}/${CONFIG.githubBranch}/${file}`;
            }
            
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch markdown');
            
            const markdown = await response.text();
            this.renderMarkdown(markdown, file);
            
        } catch (error) {
            console.error('Error loading markdown:', error);
            this.showError();
        }
    }

    renderMarkdown(markdown, currentFile) {
        // Fix image paths before parsing
        markdown = this.fixImagePaths(markdown);
        
        // Convert markdown to HTML
        const html = marked.parse(markdown);
        
        // Update content
        this.contentElement.innerHTML = html;
        
        // Add IDs to all headings FIRST (so anchor links work)
        this.addHeadingIds();
        
        // Process links to work with the viewer
        this.processLinks(currentFile);
        
        // Generate table of contents
        this.generateTOC();
        
        // Hide loading, show content
        this.hideLoading();
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    addHeadingIds() {
        // Add IDs to ALL headings (h1-h6) so anchor links work
        const allHeadings = this.contentElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
        allHeadings.forEach((heading, index) => {
            if (!heading.id) {
                // Create ID from heading text
                const text = heading.textContent.trim();
                const id = text
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '');
                heading.id = id || `heading-${index}`;
            }
        });
    }

    fixImagePaths(markdown) {
        // Fix relative image paths
        if (CONFIG.localMode) {
            // In local mode, fix paths to go up one directory
            markdown = markdown.replace(/!\[([^\]]*)\]\((?!http)([^)]+)\)/g, (match, alt, path) => {
                if (path.startsWith('/')) {
                    return `![${alt}](..${path})`;
                } else if (path.startsWith('./')) {
                    return `![${alt}](../${path.substring(2)})`;
                } else {
                    return `![${alt}](../${path})`;
                }
            });
        } else {
            // In GitHub mode, use raw.githubusercontent.com URLs
            markdown = markdown.replace(/!\[([^\]]*)\]\((?!http)([^)]+)\)/g, (match, alt, path) => {
                if (path.startsWith('/')) {
                    path = path.substring(1);
                } else if (path.startsWith('./')) {
                    path = path.substring(2);
                }
                return `![${alt}](https://raw.githubusercontent.com/${CONFIG.githubRepo}/${CONFIG.githubBranch}/${path})`;
            });
        }
        return markdown;
    }

    processLinks(currentFile) {
        const links = this.contentElement.querySelectorAll('a');
        links.forEach(link => {
            const href = link.getAttribute('href');
            
            // Handle anchor links (same page) - these should scroll
            if (href && href.startsWith('#')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        const headerOffset = 90;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
                return;
            }
            
            // Handle relative markdown links
            if (href && href.endsWith('.md')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    
                    // Extract file path
                    let filePath = href;
                    
                    // Handle different path formats
                    if (href.startsWith('/')) {
                        filePath = href.substring(1);
                    } else if (href.startsWith('./')) {
                        filePath = href.substring(2);
                    } else if (href.startsWith('../')) {
                        filePath = href.substring(3);
                    }
                    
                    // If the link starts with 'docs/', keep it
                    // Otherwise, assume it's in docs/
                    if (!filePath.startsWith('docs/') && !filePath.startsWith('readme')) {
                        filePath = 'docs/' + filePath;
                    }
                    
                    this.loadMarkdown(filePath);
                    
                    // Update URL
                    window.history.pushState({ file: filePath }, '', `?file=${filePath}`);
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
        headings.forEach((heading) => {
            // Use the ID that was already set by addHeadingIds()
            const id = heading.id;
            const level = heading.tagName === 'H2' ? 0 : 1;
            const indent = level * 1;
            
            tocHTML += `
                <li style="margin-left: ${indent}rem;">
                    <a href="#${id}" class="toc-link">${heading.textContent}</a>
                </li>
            `;
        });
        tocHTML += '</ul>';
        
        toc.innerHTML = tocHTML;
        
        // Add smooth scroll behavior to TOC links
        toc.querySelectorAll('.toc-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerOffset = 90;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
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
// Initialize Everything
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    const themeManager = new ThemeManager();
    const clock = new Clock();
    const githubIntegration = new GitHubIntegration();
    const markdownLoader = new MarkdownLoader();
    const homeButton = new HomeButton(markdownLoader);
    const searchManager = new SearchManager(markdownLoader);
    const tocManager = new TOCManager();
    const urlHandler = new URLHandler(markdownLoader);
    
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