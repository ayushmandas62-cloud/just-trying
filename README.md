# Ayushman Personal Website

A modern, minimal, fast personal website built with Astro and Tailwind CSS. Perfect for a portfolio, content hub, and base for future expansion.

## Features

- **Astro 4.x** - Latest version with excellent performance
- **Tailwind CSS** - Utility-first CSS framework
- **Markdown Support** - Content written in Markdown
- **Dark Theme** - Clean, minimal dark UI
- **SEO Friendly** - Meta tags, Open Graph, Twitter cards
- **Responsive** - Mobile-first design
- **Fast** - Static site generation

## Pages

- **Home** (`/`) - Intro + featured projects
- **Projects** (`/projects`) - List of all projects
- **Content** (`/content`) - Blog/notes using Markdown
- **About** (`/about`) - Bio, skills, experience
- **Contact** (`/contact`) - Social links + contact form

## Project Structure

```
ayushman-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ContentCard.astro    # Blog post card
│   │   ├── Footer.astro         # Site footer
│   │   ├── Navbar.astro         # Navigation bar
│   │   └── ProjectCard.astro   # Project card
│   ├── layouts/
│   │   └── Layout.astro         # Base layout
│   ├── pages/
│   │   ├── 404.astro            # 404 page
│   │   ├── about.astro          # About page
│   │   ├── contact.astro        # Contact page
│   │   ├── content/
│   │   │   ├── index.astro     # Content list
│   │   │   └── [slug].astro     # Content detail
│   │   ├── index.astro          # Home page
│   │   └── projects.astro       # Projects page
│   ├── styles/
│   │   └── global.css           # Global styles
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Installation

### Prerequisites

- Node.js (v18.14.1 or higher)
- npm or pnpm

### Steps

1. **Install dependencies**

```bash
npm install
```

2. **Update site URL in `astro.config.mjs`**

```javascript
site: 'https://yourusername.github.io',  // Your GitHub Pages URL
```

## Running Locally

### Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploy to GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create a new repository on GitHub**

2. **Push your code to GitHub**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/ayushman-site.git
git push -u origin main
```

3. **Create GitHub Actions workflow**

Create file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          user_name: 'github-actions[bot]'
          user_email: 'github-actions[bot]@users.noreply.github.com'
```

4. **Enable GitHub Pages**

- Go to repository **Settings** > **Pages**
- Under "Source", select **GitHub Actions**

5. **Push to trigger deployment**

```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push
```

6. **Check deployment**

- Go to repository **Actions** tab
- You should see the workflow running
- Once complete, your site will be at `https://yourusername.github.io/ayushman-site/`

### Option 2: Manual Deploy

1. **Build the site**

```bash
npm run build
```

2. **Install gh-pages**

```bash
npm install -D gh-pages
```

3. **Add deploy script to package.json**

```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Deploy**

```bash
npm run deploy
```

## Push Code to GitHub - Step by Step

### First Time Setup

1. **Initialize git (if not already)**

```bash
git init
```

2. **Add all files**

```bash
git add .
```

3. **Create initial commit**

```bash
git commit -m "Initial commit - Ayushman personal website"
```

4. **Go to GitHub and create a new repository**

- Visit [github.com/new](https://github.com/new)
- Name it `ayushman-site` (or your choice)
- Don't initialize with README

5. **Connect local repo to GitHub**

```bash
git remote add origin https://github.com/yourusername/ayushman-site.git
```

6. **Push to GitHub**

```bash
git branch -M main
git push -u origin main
```

### Regular Push (After making changes)

```bash
git add .
git commit -m "Your commit message"
git push
```

## Customization

### Update Personal Info

Edit these files to customize:

- `src/pages/index.astro` - Home page intro
- `src/pages/about.astro` - Bio, skills, experience
- `src/pages/contact.astro` - Social links
- `src/components/Footer.astro` - Footer links
- `src/components/Navbar.astro` - Navigation links

### Update Projects

Edit the `projects` array in:
- `src/pages/index.astro` - Featured projects
- `src/pages/projects.astro` - All projects

### Update Content

Edit the `allContent` array in:
- `src/pages/content/index.astro` - Content list
- `src/pages/content/[slug].astro` - Content detail pages

### Update Colors

Edit `tailwind.config.mjs`:

```javascript
colors: {
  background: '#0a0a0a',  // Change to your preferred dark background
  surface: '#141414',
  border: '#262626',
  text: '#fafafa',
  muted: '#a1a1a1',
}
```

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI |

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Astro + Tailwind Integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

## License

MIT - Feel free to use this template for your own personal website!
