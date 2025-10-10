# Quick Reference Card

## 🎯 Next Steps

### 1️⃣ Before You Start
- [ ] Install Ruby and Bundler on your machine
- [ ] Run `bundle install` in this directory
- [ ] Add 3+ slideshow images to `assets/images/`

### 2️⃣ Configuration Checklist

Edit these files with your information:

**[admin/config.yml](admin/config.yml)**
```yaml
repo: YOUR_GITHUB_USERNAME/Website-Source-ES
```

**[.github/workflows/deploy.yml](.github/workflows/deploy.yml)**
```yaml
external_repository: YOUR_GITHUB_USERNAME/YOUR_PUBLIC_REPO_NAME
```

**[_data/settings.yml](_data/settings.yml)**
- Update social media URLs
- Customize site title and tagline

### 3️⃣ GitHub Setup
1. Create a public repository for hosting (e.g., `lmu-entrepreneurship-society`)
2. Generate a GitHub Personal Access Token (Settings → Developer settings → Tokens)
3. Add token as secret `DEPLOY_TOKEN` in this private repo (Settings → Secrets)

### 4️⃣ Enable GitHub Pages
In your **public** repository:
- Settings → Pages
- Source: `gh-pages` branch
- Save

### 5️⃣ Set Up Decap CMS Authentication
- Use Netlify (easiest): Sign up, enable Git Gateway
- Or use self-hosted OAuth server

## 📱 Common Commands

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build site for production
bundle exec jekyll build

# Update dependencies
bundle update
```

## 🌐 URLs After Setup

- **Admin panel**: `https://YOUR_USERNAME.github.io/YOUR_PUBLIC_REPO/admin/`
- **Live site**: `https://YOUR_USERNAME.github.io/YOUR_PUBLIC_REPO/`
- **Local dev**: `http://localhost:4000`

## 🎨 Customization

### Change Colors/Fonts
Edit [assets/css/main.css](assets/css/main.css)

### Modify Layout
Edit [_layouts/default.html](_layouts/default.html)

### Adjust Slideshow Speed
Edit [_data/settings.yml](_data/settings.yml) - value in milliseconds

### Add More Social Icons
Edit [assets/css/main.css](assets/css/main.css) - search for "Social Media Icons"

## 🔒 Security Best Practices

✅ **DO:**
- Store secrets in GitHub repository secrets
- Keep this repo private
- Use strong GitHub passwords
- Review who has access to both repos

❌ **DON'T:**
- Commit API keys or tokens
- Make this source repo public
- Share your personal access token
- Commit `.env` files

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check Actions tab for errors |
| Images broken | Verify paths in `_data/slides.yml` |
| CMS won't load | Check OAuth configuration |
| Changes not live | Wait 2-3 min, check `DEPLOY_TOKEN` |
| Jekyll won't run | Run `bundle install` |

## 📚 Full Documentation

- [SETUP.md](SETUP.md) - Detailed setup guide
- [CONTENT_EDITING_GUIDE.md](CONTENT_EDITING_GUIDE.md) - For content editors
- [README.md](README.md) - Project overview
