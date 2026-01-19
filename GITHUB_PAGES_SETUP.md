# GitHub Pages Setup Instructions

## Quick Fix for 404 Error

If `https://llomj.github.io/python-exercises-learn/` shows a 404 or redirects to GitHub:

### Step 1: Go to Repository Settings
1. Visit: https://github.com/llomj/python-exercises-learn
2. Click the **"Settings"** tab (top menu, after "Issues" and "Pull requests")
3. **Note**: You must be signed in as the repository owner

### Step 2: Configure GitHub Pages
1. In the left sidebar, scroll down and click **"Pages"**
2. Under **"Build and deployment"**:
   - **Source**: Select **"GitHub Actions"** (NOT "Deploy from a branch")
3. Click **"Save"**

### Step 3: Verify Deployment
1. Go to **"Actions"** tab: https://github.com/llomj/python-exercises-learn/actions
2. Wait for the **"Deploy to GitHub Pages"** workflow to complete (green checkmark)
3. It should take 2-3 minutes after you save the settings

### Step 4: Access Your App
After deployment completes:
- **App URL**: https://llomj.github.io/python-exercises-learn/

## Troubleshooting

### If the Actions workflow is failing:
1. Check the Actions tab for error messages
2. Ensure `package.json` exists with all dependencies
3. Verify `.github/workflows/deploy.yml` exists

### If you still get 404:
1. Wait 5-10 minutes after saving settings (GitHub Pages needs time to propagate)
2. Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
3. Clear browser cache
4. Check that the workflow shows a green checkmark in Actions

## Current Configuration

- ✅ Base path configured: `/python-exercises-learn/`
- ✅ Vite build configured correctly
- ✅ Service worker path updated
- ✅ 404.html for routing
- ✅ Deployment workflow exists

**All you need to do is enable GitHub Pages with "GitHub Actions" as the source!**
