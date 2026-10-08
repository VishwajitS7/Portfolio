# Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## Prerequisites

1. Build the project first (see instructions below)
2. Have accounts ready for your chosen platform
3. Environment variables configured (EmailJS)

---

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Steps:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Add Environment Variables** in Vercel Dashboard:
   - Go to your project → Settings → Environment Variables
   - Add:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`

5. **Update Domain** in `index.html`:
   - Replace `https://vishwajitsutar.dev/` with your Vercel URL
   - Or configure custom domain in Vercel dashboard

**OR** Deploy via GitHub:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy
6. Add environment variables in dashboard

---

## Option 2: Deploy to Netlify

### Steps:

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy**:
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

4. **Add Environment Variables** in Netlify Dashboard:
   - Go to Site settings → Environment variables
   - Add your EmailJS variables

**OR** Deploy via GitHub:
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables

---

## Option 3: Deploy to GitHub Pages

### Steps:

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json** scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Update vite.config.js**:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/' // Replace 'portfolio' with your repo name
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository → Settings → Pages
   - Source: `gh-pages` branch
   - Save

---

## Building the Project

If PowerShell execution policy is blocking npm:

### Method 1: Use Command Prompt (cmd)
1. Open Command Prompt (not PowerShell)
2. Navigate to project: `cd C:\Users\ACER\portfolio`
3. Run: `npm run build`

### Method 2: Change PowerShell Execution Policy
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy RemoteSigned`
3. Then run: `npm run build`

### Method 3: Use Git Bash
1. Open Git Bash
2. Navigate to project
3. Run: `npm run build`

---

## Post-Deployment Checklist

- [ ] Test the website on deployed URL
- [ ] Verify all links work
- [ ] Test contact form (EmailJS)
- [ ] Check mobile responsiveness
- [ ] Update domain in `index.html` meta tags
- [ ] Test resume download
- [ ] Verify SEO meta tags
- [ ] Check loading performance

---

## Troubleshooting

### Build Errors
- Make sure all dependencies are installed: `npm install`
- Check for linting errors: `npm run lint`
- Verify Node.js version (should be 18+)

### Environment Variables Not Working
- Make sure variables start with `VITE_` prefix
- Restart dev server after adding variables
- Check platform-specific environment variable settings

### 404 Errors on Routes
- Ensure redirect rules are configured (already in vercel.json and netlify.toml)
- For GitHub Pages, check base path in vite.config.js

---

## Quick Deploy Commands

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
npm run build && netlify deploy --prod --dir=dist
```

**GitHub Pages:**
```bash
npm run deploy
```

---

Need help? Check the platform documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/pages)


