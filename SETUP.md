# LMU Entrepreneurship Society Website - Setup Guide

This is the **private development repository** for the LMU Entrepreneurship Society website. The built site is automatically deployed to a separate public repository for GitHub Pages hosting.

## 🏗️ Architecture

- **This repo (private)**: Source code, configurations, development
- **Public repo**: Only contains built HTML/CSS/JS files for hosting
- **Decap CMS**: Web interface for content editing (no coding required)
- **GitHub Actions**: Automatically builds and deploys on every commit

## 🚀 Initial Setup

### 1. Install Dependencies

First, make sure you have Ruby installed. Then install Jekyll:

```bash
cd Website-Source-ES
bundle install
```

### 2. Add Placeholder Images

Create some placeholder images for the slideshow:

```bash
mkdir -p assets/images
```

Add at least 3 images to `assets/images/` named:
- `slide1.jpg`
- `slide2.jpg`
- `slide3.jpg`

(Or update the filenames in `_data/slides.yml`)

### 3. Test Locally

Run the development server:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site!

### 4. Create Public Repository

1. Go to GitHub and create a **new public repository** (e.g., `lmu-entrepreneurship-society`)
2. **Do not** add any files to it (leave it empty)
3. Copy the repository name

### 5. Configure GitHub Action

Edit [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

```yaml
external_repository: YOUR_GITHUB_USERNAME/YOUR_PUBLIC_REPO_NAME
```

Replace with your actual GitHub username and public repo name.

### 6. Create GitHub Personal Access Token

This token allows the private repo to push to the public repo.

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it: `Website Deploy Token`
4. Set expiration: No expiration (or 1 year)
5. Select scopes:
   - ✅ `repo` (all repo permissions)
   - ✅ `workflow`
6. Click "Generate token"
7. **Copy the token** (you won't see it again!)

### 7. Add Token to Repository Secrets

1. Go to your **private** repo: Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `DEPLOY_TOKEN`
4. Value: Paste the token you copied
5. Click "Add secret"

### 8. Set Up Decap CMS Authentication

Decap CMS needs GitHub OAuth to allow users to log in and edit content.

**Option A: Use Netlify (Easiest, Free)**

1. Sign up at [netlify.com](https://netlify.com) (free)
2. Create a new site (you can use a dummy site or the same repo)
3. Go to Site settings → Identity → Enable Identity
4. Under Identity → External providers → Enable GitHub
5. Add your GitHub repo in the Git Gateway settings

**Option B: Self-hosted OAuth (More Complex)**

Follow Decap CMS documentation for self-hosted OAuth server.

### 9. Update Decap CMS Config

Edit [admin/config.yml](admin/config.yml):

```yaml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/Website-Source-ES
  branch: main
```

Replace with your actual GitHub username and private repo name.

### 10. Commit and Push

```bash
git add .
git commit -m "Initial Jekyll + Decap CMS setup"
git push origin main
```

The GitHub Action will automatically build and deploy to your public repo!

### 11. Enable GitHub Pages on Public Repo

1. Go to your **public** repository
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: `gh-pages` / `/ (root)`
5. Save

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_PUBLIC_REPO_NAME/`

## 📝 Editing Content

### For Non-Technical Users

1. Visit `https://YOUR_USERNAME.github.io/YOUR_PUBLIC_REPO_NAME/admin/`
2. Click "Login with GitHub"
3. Authorize the application
4. Edit content through the visual interface
5. Save and publish

Changes will automatically deploy in ~2-3 minutes!

### For Developers

Edit files directly:
- Site settings: `_data/settings.yml`
- Slideshow images: `_data/slides.yml`
- Styles: `assets/css/main.css`
- Layout: `_layouts/default.html`

Test locally with `bundle exec jekyll serve`, then commit and push.

## 🔒 Security Features

- ✅ Private source code repository
- ✅ API keys and secrets stored in GitHub Secrets (not in code)
- ✅ Only built files are public
- ✅ GitHub OAuth for authenticated CMS access
- ✅ No database or server to maintain

## 📁 Project Structure

```
Website-Source-ES/
├── _data/
│   ├── settings.yml       # Site title, tagline, social links
│   └── slides.yml         # Slideshow images
├── _layouts/
│   └── default.html       # Main page template
├── admin/
│   ├── index.html         # Decap CMS admin interface
│   └── config.yml         # CMS configuration
├── assets/
│   ├── css/
│   │   └── main.css       # All styles
│   ├── js/
│   │   └── slideshow.js   # Slideshow functionality
│   └── images/            # Upload images here
├── .github/
│   └── workflows/
│       └── deploy.yml     # Auto-deploy action
├── _config.yml            # Jekyll configuration
├── Gemfile                # Ruby dependencies
├── index.html             # Homepage
└── README.md              # This file
```

## 🆘 Troubleshooting

**Build fails**: Check the Actions tab in GitHub for error details

**Images not showing**: Make sure images are in `assets/images/` and paths match in `_data/slides.yml`

**CMS not loading**: Check that OAuth is properly configured

**Changes not deploying**: Verify `DEPLOY_TOKEN` secret is set correctly

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
