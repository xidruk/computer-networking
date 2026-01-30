# Computer Networking - Documentation Website

A clean, modern documentation website for the Computer Networking repository.

## ✨ Features

- **Clean Reading Experience**: Distraction-free interface focused on content
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Live Clock**: Real-time clock display in the header
- **GitHub Integration**: Live star count with direct link to repository
- **Social Links**: Quick access to Twitter, GitHub, and LinkedIn profiles
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Smooth Navigation**: Seamless navigation between documentation files
- **Table of Contents**: Auto-generated TOC for easy navigation within documents
- **Syntax Highlighting**: Beautiful code blocks with syntax highlighting
- **Fast Loading**: Optimized performance with minimal dependencies

## 🚀 Quick Start

### Option 1: GitHub Pages Deployment (Recommended)

1. **Create a new branch** for the website:
   ```bash
   git checkout -b gh-pages
   ```

2. **Copy website files** to the root or create a `docs` folder:
   ```bash
   # If using root directory
   cp -r website/* .
   
   # OR if using docs folder (recommended)
   mkdir -p docs
   cp -r website/* docs/
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add documentation website"
   git push origin gh-pages
   ```

4. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select branch: `gh-pages`
   - Select folder: `/` or `/docs` (depending on where you put the files)
   - Click "Save"

5. **Your site will be live at**: `https://xidruk.github.io/computer-networking/`

### Option 2: Local Development

1. **Start a local server**:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # OR using Node.js
   npx http-server
   ```

2. **Open in browser**: `http://localhost:8000`

## 🔧 Configuration

### Update Social Links

Edit `app.js` and update the `CONFIG` object:

```javascript
const CONFIG = {
    githubRepo: 'xidruk/computer-networking',
    githubBranch: 'main',
    defaultFile: 'readme.md',
    socialLinks: {
        twitter: 'https://twitter.com/YOUR_TWITTER',
        github: 'https://github.com/YOUR_GITHUB',
        linkedin: 'https://linkedin.com/in/YOUR_LINKEDIN'
    }
};
```

### Update Social Links in HTML

Edit `index.html` and update the social links in the header:

```html
<div class="social-links">
    <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener" title="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
</div>
```

## 📁 File Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # All styling (light/dark themes)
├── app.js             # JavaScript functionality
└── README.md          # This file
```

## 🎨 Customization

### Colors

To change the color scheme, edit the CSS variables in `styles.css`:

```css
:root {
    --accent-color: #0969da;      /* Primary accent color */
    --accent-hover: #0550ae;      /* Hover state */
    /* ... other colors ... */
}
```

### Typography

Update font families in `styles.css`:

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...;
}
```

## 🔗 How It Works

1. **Markdown Loading**: The site fetches markdown files directly from your GitHub repository using the raw.githubusercontent.com URL
2. **Rendering**: Uses `marked.js` to convert markdown to HTML
3. **Syntax Highlighting**: `highlight.js` provides code syntax highlighting
4. **Navigation**: Automatically handles links to other markdown files in the repository
5. **Theme**: Uses CSS variables and localStorage to persist theme preference

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Troubleshooting

### Markdown files not loading
- Check that the repository name and branch are correct in `app.js`
- Ensure the repository is public
- Verify file paths are correct

### Styles not applying
- Clear browser cache
- Check that `styles.css` is in the same directory as `index.html`

### Star count not showing
- Check that the GitHub API is accessible
- Verify repository name is correct
- GitHub API has rate limits (60 requests per hour for unauthenticated requests)

## 📄 License

This website template is provided as-is for the Computer Networking documentation project.

## 🤝 Contributing

Feel free to customize this website template for your documentation needs!

---

**Made with ❤️ for learning networking**