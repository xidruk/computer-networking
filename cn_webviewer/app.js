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
// Search Functionality - REMOVED
// ============================================
// Search has been removed from the interface

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
// Menu Manager (Left Sidebar Toggle)
// ============================================
class MenuManager {
    constructor() {
        this.leftSidebar = document.getElementById('leftSidebar');
        this.menuToggle = document.getElementById('menuToggle');
        this.container = document.querySelector('main.container');
        this.isVisible = true; // Start visible on desktop
        this.init();
    }

    init() {
        // Toggle menu on button click
        this.menuToggle.addEventListener('click', () => this.toggle());
        
        // On mobile, start hidden
        if (window.innerWidth <= 1024) {
            this.hide();
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1024 && this.isVisible) {
                // Don't auto-hide on mobile, let user control
            }
        });
    }

    toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    hide() {
        this.leftSidebar.classList.add('hidden');
        this.container.classList.add('sidebar-hidden');
        this.isVisible = false;
    }

    show() {
        this.leftSidebar.classList.remove('hidden');
        this.container.classList.remove('sidebar-hidden');
        this.isVisible = true;
    }

    populateNavigation(tocData) {
        const nav = document.getElementById('mainNav');
        if (!nav || !tocData) return;
        
        nav.innerHTML = tocData;
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
// Clock - REMOVED
// ============================================
// Clock functionality has been removed

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
        
        // Generate table of contents for right sidebar
        this.generateTOC();
        
        // Extract and populate left navigation (only from main readme)
        if (currentFile === 'readme.md' || !currentFile) {
            this.extractAndPopulateNavigation();
        }
        
        // Hide loading, show content
        this.hideLoading();
        
        // Scroll to top
        window.scrollTo(0, 0);
    }

    extractAndPopulateNavigation() {
        // Find the table of contents in the main content
        const mainTOC = this.contentElement.querySelector('h2[id*="table-of-content"], h2:has(+ ol), h2:has(+ ul)');
        if (!mainTOC) return;
        
        // Get the list after the TOC heading
        let tocList = mainTOC.nextElementSibling;
        while (tocList && tocList.tagName !== 'OL' && tocList.tagName !== 'UL') {
            tocList = tocList.nextElementSibling;
        }
        
        if (tocList && window.menuManager) {
            // Clone and populate the left sidebar
            const clonedList = tocList.cloneNode(true);
            window.menuManager.populateNavigation(clonedList.outerHTML);
        }
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
        console.log(`Processing ${links.length} links in content`);
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            
            // Skip if no href
            if (!href) return;
            
            // Handle anchor links (same page) - these should scroll
            if (href.startsWith('#')) {
                // Remove any existing click handlers
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                
                newLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const targetId = href.substring(1);
                    console.log('Clicking anchor link:', targetId);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const headerOffset = 90;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Highlight the target briefly
                        targetElement.style.backgroundColor = 'var(--accent-color)';
                        targetElement.style.color = 'white';
                        targetElement.style.padding = '0.5rem';
                        targetElement.style.borderRadius = '4px';
                        targetElement.style.transition = 'all 0.3s ease';
                        
                        setTimeout(() => {
                            targetElement.style.backgroundColor = '';
                            targetElement.style.color = '';
                            targetElement.style.padding = '';
                        }, 1000);
                    } else {
                        console.warn('Target element not found:', targetId);
                    }
                }, { passive: false });
                
                // Also make it look clickable
                newLink.style.cursor = 'pointer';
                return;
            }
            
            // Handle relative markdown links
            if (href.endsWith('.md')) {
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
                return;
            }
            
            // All other links (external, http, https, etc.) open in new tab
            // This ensures external links work properly
            if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('www.')) {
                link.setAttribute('target', '_blank');
                link.setAttribute('rel', 'noopener noreferrer');
                // Don't add any click handlers - let the browser handle these naturally
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
    window.menuManager = new MenuManager(); // Make it global so MarkdownLoader can access it
    const githubIntegration = new GitHubIntegration();
    const markdownLoader = new MarkdownLoader();
    const homeButton = new HomeButton(markdownLoader);
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
