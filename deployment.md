db3f5997-1f1f-4471-a541-41611b070be3# Deployment Guide

This document outlines the steps required to deploy **Python Exercises Learn** to GitHub Pages with automated updates.

## 1. Initial Repository Setup
1. Create a new repository on [GitHub](https://github.com/new).
2. Initialize your local project and push to the remote:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Python Evolution"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/python-exercises-learn.git
   git push -u origin main
   ```

## 2. Configure API Secrets
The application requires the Google Gemini API to function.
1. Go to your repository on GitHub.
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click **New repository secret**.
4. Name: `API_KEY`
5. Value: *Paste your Google AI Studio API Key here*.
6. Click **Add secret**.

## 3. Enable GitHub Pages
1. Go to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.

## 4. Automated Deployment
This project includes a `.github/workflows/deploy.yml` file. Every time you push to the `main` branch, GitHub will:
1. Transpile the `.tsx` files into browser-ready JavaScript.
2. Inject your `API_KEY` into the environment.
3. Deploy the PWA assets (`index.html`, `manifest.json`, `sw.js`) to GitHub Pages.

## 5. Mobile Installation (iPhone)
Once deployed:
1. Open the deployment URL in **Safari** on your iPhone.
2. Tap the **Share** button (box with upward arrow).
3. Select **Add to Home Screen**.
4. The app will now appear on your home screen as **Python Exercises Learn** with offline support.

## 6. Troubleshooting
- If the app shows a blank screen, check the **Actions** tab in GitHub to ensure the build succeeded.
- Ensure the `API_KEY` is correctly set in secrets; the app will use static questions without it.