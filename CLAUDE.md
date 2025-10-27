# LMU Entrepreneurship Society Website - Claude Code Context

## 🎯 Project Overview

**What This Is:**
The official website for Loyola Marymount University's Entrepreneurship Society - a modern, dynamic landing page with snappy animations and professional design.

**Primary Goals:**
- Showcase the organization with visual impact
- Provide easy navigation to key resources and events
- Maintain professional, app-like user experience
- Enable non-technical content management through CMS

## 🏗️ Technical Stack

**Core Technologies:**
- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting and deployment
- **Sveltia CMS** - Content management (successor to Netlify CMS)
- **Cloudflare Workers** - OAuth authentication for CMS
- **Font Awesome 6** - Icons throughout the interface

**Languages:**
- **HTML/Liquid** - Jekyll templating
- **CSS3** - Modern styling with animations
- **JavaScript ES6** - Interactive functionality
- **YAML** - Configuration and content data

## 🎨 Design Philosophy

**Visual Style:**
- **Modern glass-morphism** effects with backdrop blur
- **Snappy animations** - All transitions ≤0.15s for responsiveness
- **Mobile-first responsive** design
- **Professional gradient** backgrounds and subtle shadows

**User Experience:**
- **Android-inspired** navigation with smooth scaling
- **Scroll-triggered animations** for dynamic feel
- **Desktop/mobile optimized** experiences
- **Accessibility-ready** link semantics

## 🧩 Key Features Implemented

### Dynamic Navigation Bar
- **Retractable design** - Starts as small left corner, expands on scroll
- **Smooth animations** - 0.15s transitions with cubic-bezier easing
- **Logo scaling** - 40px→80px on expansion (30px→50px mobile)
- **Title transition** - Typewriter effect in hero, smooth appear in nav
- **Mobile hidden** - Navigation completely removed on mobile to prevent conflicts

### Interactive Button System
- **Scroll-triggered animations** - Individual buttons slide in at 30% visibility
- **Hover preview images** - 800x800px square previews on desktop
- **Font Awesome icons** - Professional iconography
- **CMS-editable** - All content manageable through Sveltia
- **Mobile optimized** - Full-width with side padding, no previews

### Background Slideshow
- **Smooth transitions** - CSS-only 1.5s fade with scale effect
- **Mobile image support** - Optional mobile-specific images via CMS
- **Responsive scaling** - Images adapt to viewport size

## 📂 File Structure

```
/
├── _config.yml           # Jekyll configuration
├── _data/
│   ├── settings.yml      # Site settings, buttons, social links
│   └── slides.yml        # Slideshow images
├── _layouts/
│   └── default.html      # Main template with navigation & structure
├── admin/
│   ├── config.yml        # Sveltia CMS configuration
│   └── index.html        # CMS admin interface
├── assets/
│   ├── css/main.css      # All styling and animations
│   ├── js/
│   │   ├── slideshow.js  # Background slideshow controller
│   │   └── menu.js       # Navigation & button interactions
│   └── images/
│       ├── logo-transparent.png  # Main logo
│       ├── slide1.jpg    # Desktop slideshow images
│       ├── slide2.jpg
│       └── mobile/       # Mobile-optimized images (optional)
├── oauth-worker/         # Cloudflare Workers OAuth for CMS
├── index.html           # Homepage content
└── preview.html         # Static preview for development
```

## ✏️ Content Management

### Sveltia CMS Access
- **URL**: `https://lmu-entrepreneurship-society.github.io/admin/`
- **Authentication**: GitHub OAuth via Cloudflare Workers
- **Permissions**: Write access to repository required

### Editable Content

**Site Settings** (`_data/settings.yml`):
- Site title and tagline
- Slideshow transition speed
- Social media links with custom icons
- Action buttons (title, URL, icon, preview image)

**Slideshow Images** (`_data/slides.yml`):
- Desktop images (required)
- Mobile images (optional - falls back to desktop)
- Alt text for accessibility

### Quick Content Updates

**Add New Button:**
1. Access Sveltia CMS → Site Settings → Action Buttons
2. Add new item with title, URL, icon, and preview image
3. Save and publish

**Update Social Links:**
1. Access Site Settings → Social Links
2. Modify URLs, add custom icons, adjust sizing
3. Supports both Font Awesome icons and custom images

**Change Slideshow:**
1. Access Slideshow Images
2. Upload new desktop images (mobile optional)
3. Images automatically resize and optimize

## 🚀 Development Workflow

### Local Development
```bash
# Serve locally (if Jekyll installed)
bundle exec jekyll serve --host 0.0.0.0 --port 4000

# Or use simple Python server for preview
python3 -m http.server 8000
# Then view: http://localhost:8000/preview.html
```

### Deployment
- **Automatic**: Push to `main` branch triggers GitHub Pages build
- **Timeline**: 2-5 minutes for changes to appear live
- **Monitor**: Check GitHub Actions tab for build status

### Testing Commands
```bash
# Lint and typecheck (if available)
npm run lint
npm run typecheck

# Build verification
jekyll build --verbose
```

## 🎯 Animation Specifications

### Performance Targets
- **Button hover**: 0.08s (ultra-snappy)
- **Navigation expansion**: 0.15s (smooth but fast)
- **Preview fade**: 0.1s (instant feedback)
- **Scroll animations**: 30% visibility threshold

### Responsive Breakpoints
- **Desktop**: >768px - Full feature set
- **Mobile**: ≤768px - Simplified layout, hidden navigation

## 🔧 Common Maintenance Tasks

### Performance Optimization
- Images should be optimized before upload
- Mobile images should be portrait-oriented and smaller file size
- Test animations on various devices for smoothness

### Content Guidelines
- Button titles should be concise (2-4 words)
- Preview images work best as square format
- Social icons maintain consistent sizing (16-64px range)

### Troubleshooting
- **Jekyll build failures**: Check YAML syntax in data files
- **Missing animations**: Verify JavaScript files are loading
- **Layout issues**: Clear browser cache with hard refresh (Ctrl+F5)

## 🎨 Design Tokens

### Colors
- **Background**: rgba(39, 39, 39, 0.8)
- **Text**: #fff
- **Buttons**: Glass-morphism with rgba(255, 255, 255, 0.1)
- **Hover**: rgba(255, 255, 255, 0.2)

### Typography
- **Font Stack**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- **Title Size**: clamp(2.5rem, 8vw, 5rem)
- **Button Text**: 1.2rem (1.1rem mobile)

### Animations
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)
- **Duration**: 0.08s-0.15s for optimal snappiness
- **Typewriter**: 3.5s typing, 0.75s cursor blink

## 📱 Mobile Optimizations

### Key Differences
- Navigation bar completely hidden
- Buttons stack vertically with side padding
- Preview images disabled for performance
- Title text wraps naturally
- Reduced content padding for better space usage

### Testing
- Test on actual devices for touch interactions
- Verify text wrapping at various screen sizes
- Ensure animations remain smooth on lower-end devices

---

*Last Updated: 2025-10-27*  
*For questions about this codebase, reference this document and the commit history for context.*