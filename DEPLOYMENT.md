# GitHub Pages Deployment Guide

## Automatic Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Steps:

1. **Enable GitHub Pages** in your repository:
   - Go to: https://github.com/awanraf-lgtm/innovation/settings/pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

2. **The deployment will automatically trigger** when you push to the main branch

### Your Public URL

Once deployed, your website will be available at:
**https://awanraf-lgtm.github.io/innovation/**

### Manual Deployment (Optional)

If you want to deploy manually or test the build locally:

```bash
# Build for GitHub Pages
npm run build-pages

# Preview the built site locally
npm run preview
```

### Build Configuration

- **Base URL**: `/innovation/` (matches your repository name)
- **Output Directory**: `./dist`
- **Assets Directory**: `./dist/assets`

### Deployment Status

You can check the deployment status in the "Actions" tab of your GitHub repository:
https://github.com/awanraf-lgtm/innovation/actions

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Enable HTTPS in repository settings