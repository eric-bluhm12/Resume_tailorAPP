# 🚀 Render.com Deployment Guide

This guide will help you deploy the Resume Tailor application to Render.com smoothly.

## Prerequisites

1. A Render.com account (sign up at https://render.com)
2. Your Anthropic API key
3. A GitHub/GitLab/Bitbucket repository with your code

## Deployment Steps

### 1. Prepare Your Repository

Ensure all your code is committed and pushed to your repository:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Create a New Web Service on Render

1. Log in to your Render dashboard
2. Click "New +" → "Web Service"
3. Connect your repository
4. Render will automatically detect the `render.yaml` file

### 3. Configure Environment Variables

In the Render dashboard, go to your service → Environment tab and add:

- **ANTHROPIC_API_KEY**: Your Anthropic API key (mark as "Secret")
- **ANTHROPIC_MODEL**: `claude-3-5-haiku-20241022` (already in render.yaml)
- **NODE_ENV**: `production` (already in render.yaml)

**Note**: The `PORT` environment variable is automatically set by Render - do not override it.

### 4. Deploy

Render will automatically:
- Install dependencies (`npm install`)
- Build the application (`npm run build`)
- Start the service (`npm start`)

The deployment should complete in 5-10 minutes.

## Configuration Files

### `render.yaml`
This file contains the Render service configuration:
- Service type: Web Service
- Node.js environment
- Build and start commands
- Environment variables

### `next.config.js`
Optimized for production with:
- Proper API route configuration
- Webpack externals for Puppeteer/Chromium compatibility

### `package.json`
- Start script uses Next.js default port handling (automatically uses Render's PORT env var)

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Verify Node.js version matches (20.x)
- Check build logs for specific errors

### Service Won't Start
- Verify `ANTHROPIC_API_KEY` is set correctly
- Check that the PORT environment variable is not manually set (Render sets it automatically)
- Review service logs in Render dashboard

### PDF Generation Fails
- Ensure `@sparticuz/chromium` is properly installed
- Check that the production environment is correctly detected
- Review API logs for Puppeteer errors

### Timeout Issues
- Render free tier has request timeout limits
- Consider upgrading to a paid plan for longer-running operations
- The PDF generation typically takes 30-45 seconds

## Post-Deployment

1. **Test the Application**
   - Visit your Render service URL
   - Test the resume generation flow
   - Verify PDF downloads work correctly

2. **Monitor Logs**
   - Check Render dashboard logs regularly
   - Monitor API usage and costs

3. **Set Up Custom Domain** (Optional)
   - In Render dashboard → Settings → Custom Domains
   - Add your domain and configure DNS

## Important Notes

- **File Storage**: The `resumes/` and `templates/` directories are part of the repository and will be deployed with your code
- **Environment Variables**: Never commit API keys to the repository
- **Scaling**: For production use, consider upgrading to a paid Render plan for better performance and reliability
- **Cold Starts**: Free tier services may experience cold starts after inactivity

## Support

If you encounter issues:
1. Check Render service logs
2. Verify all environment variables are set
3. Ensure your Anthropic API key is valid and has sufficient credits
4. Review the application logs for specific error messages

