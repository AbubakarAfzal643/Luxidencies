# Deployment Guide for Luxidency

This guide walks you through deploying your Luxidency project to Vercel.

## Prerequisites

- A GitHub account (with your project pushed to a repository)
- A Vercel account (free at https://vercel.com)
- Node.js and npm installed locally

## Step 1: Prepare Your Git Repository

### 1.1 Initialize Git (if not already done)
```bash
cd "D:\My Projects\Luxidency"
git init
git add .
git commit -m "Initial commit: Luxidency project setup"
```

### 1.2 Create a GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (e.g., `luxidency`)
3. Do NOT initialize with README, .gitignore, or license (since we already have them)

### 1.3 Push Your Code to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/luxidency.git
git branch -M main
git push -u origin main
```

## Step 2: Set Up Vercel Deployment

### 2.1 Create a Vercel Account
1. Go to https://vercel.com/signup
2. Sign up with GitHub (recommended for seamless integration)
3. Authorize Vercel to access your GitHub repositories

### 2.2 Import Your Project to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste your GitHub repository URL: `https://github.com/YOUR_USERNAME/luxidency`
4. Click "Continue"

### 2.3 Configure Your Project Settings
- **Project Name**: `luxidency` (or your preferred name)
- **Framework Preset**: Select `Vite` (or `Other` if Vite is not listed)
- **Root Directory**: `./` (default - leave as is)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 2.4 Set Environment Variables (if needed)
If you have environment variables to use on Vercel:

1. In Vercel project settings, go to **Settings** → **Environment Variables**
2. Add your variables (e.g., `VITE_API_URL`)
3. Set values for Production, Preview, and Development environments as needed

**Example Environment Variables:**
```
VITE_API_URL=https://your-api.com/api
VITE_APP_ENV=production
```

### 2.5 Deploy Your Project
1. Click **Deploy** button
2. Vercel will automatically build and deploy your project
3. You'll see a deployment progress screen
4. Once complete, you'll get a unique Vercel URL (e.g., `https://luxidency-xyz.vercel.app`)

## Step 3: Configure Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain (e.g., `luxidency.com`)
3. Update your domain registrar's DNS records according to Vercel's instructions
4. Vercel will provide the DNS records to add

## Step 4: Set Up Automatic Deployments

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to the `main` branch (Production)
- Create Preview deployments for pull requests
- Show deployment status in your GitHub repository

## Step 5: Monitor and Maintain

### View Deployment Logs
1. Go to your Vercel project dashboard
2. Click **Deployments** to see all deployment history
3. Click any deployment to view build logs and details

### Rollback to Previous Deployment
1. Go to **Deployments** tab
2. Click the three-dot menu on a previous deployment
3. Select **Promote to Production**

## Common Issues & Solutions

### Build Fails with "dist not found"
- Ensure your `vite.config.js` is correctly configured
- Check that your build output is set to `dist` folder
- Run `npm run build` locally to test

### Environment Variables Not Working
- Ensure variables start with `VITE_` prefix (required for Vite)
- Redeploy after adding/updating environment variables
- Check variable names match exactly (case-sensitive)

### Deployment Still Uses Old Code
- Clear Vercel cache: Go to **Settings** → **Git** → **Deploy Hooks** and manually trigger rebuild
- Or click **Redeploy** on any previous deployment

## Local Testing Before Deployment

Test your production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` to test before deploying to Vercel.

## Project Structure Notes

Your Vite + React project structure:
```
luxidency/
├── src/
│   ├── pages/
│   ├── components/
│   ├── layouts/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .env.example
├── .env.local (local only - not committed)
└── .gitignore
```

## Useful Vercel CLI Commands (Optional)

Install Vercel CLI for local deployments:

```bash
npm install -g vercel
vercel login
vercel
```

This allows you to deploy directly from your terminal without GitHub integration.

---

**Questions?** Check Vercel's official documentation at https://vercel.com/docs
