# Vercel Deployment Setup Guide

## Prerequisites
- GitHub repository with your code (complete GitHub authentication first)
- Vercel account (free tier available)

## Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. **Important**: Sign up with your GitHub account for seamless integration
4. Authorize Vercel to access your GitHub repositories

## Step 2: Import Your Project

### Method 1: Through Vercel Dashboard
1. After signing in, click "New Project"
2. Import from GitHub
3. Find and select `Mehak781/annora.global`
4. Click "Import"

### Method 2: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: annora-global
# - Directory: ./
# - Override settings? N
```

## Step 3: Configure Project Settings

Vercel will automatically detect your Next.js project, but verify these settings:

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

### Environment Variables (if needed)
If you have any environment variables:
1. Go to Project Settings → Environment Variables
2. Add variables like:
   - `NEXT_PUBLIC_GOOGLE_FORM_CONSUMER_EN`
   - `NEXT_PUBLIC_GOOGLE_FORM_PRODUCER_EN`
   - etc.

## Step 4: Configure Automatic Deployments

### GitHub Integration (Recommended)
1. In your Vercel project dashboard
2. Go to Settings → Git
3. Ensure GitHub integration is connected
4. Configure deployment branches:
   - **Production Branch**: `master` (or `main`)
   - **Preview Branches**: All branches

### Deployment Triggers
Your site will automatically deploy when:
- ✅ You push to the `master` branch (production)
- ✅ You create a pull request (preview deployment)
- ✅ GitHub Actions workflow completes successfully

## Step 5: Custom Domain (Optional)

### Add Custom Domain
1. Go to Project Settings → Domains
2. Add your domain: `annora.global`
3. Configure DNS records as instructed by Vercel
4. Vercel will automatically provision SSL certificates

### DNS Configuration
Add these records to your domain provider:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Step 6: Verify Deployment

### Check Deployment Status
1. Go to your Vercel dashboard
2. Click on your project
3. View deployment history and logs
4. Your site will be available at: `https://annora-global.vercel.app`

### Test Automatic Updates
1. Make a small change to your code locally
2. Run your deployment script:
   ```bash
   # Windows
   deploy.bat
   
   # PowerShell
   .\deploy.ps1
   ```
3. Watch the deployment in Vercel dashboard
4. Verify changes are live

## Step 7: Configure GitHub Actions Integration

### Add Vercel Token to GitHub Secrets (Optional)
For advanced CI/CD integration:

1. Get Vercel token:
   - Go to Vercel Account Settings → Tokens
   - Create new token

2. Add to GitHub repository:
   - Go to GitHub repository → Settings → Secrets and variables → Actions
   - Add new secret: `VERCEL_TOKEN`

3. Your GitHub Actions workflow is already configured to work with Vercel

## Deployment URLs

After setup, you'll have:
- **Production**: `https://annora-global.vercel.app`
- **Custom Domain**: `https://annora.global` (if configured)
- **Preview**: Unique URL for each pull request

## Monitoring and Analytics

### Vercel Analytics
1. Go to your project dashboard
2. Click "Analytics" tab
3. View traffic, performance, and user data

### Performance Monitoring
- Automatic Core Web Vitals tracking
- Real-time performance insights
- Error tracking and logging

## Troubleshooting

### Common Issues

**Build Failures**:
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

**Environment Variables**:
- Make sure all required env vars are set in Vercel
- Use `NEXT_PUBLIC_` prefix for client-side variables

**Domain Issues**:
- DNS propagation can take up to 48 hours
- Use DNS checker tools to verify records

**GitHub Integration**:
- Ensure Vercel has access to your repository
- Check webhook settings in GitHub repository

## Success Checklist

- ✅ Vercel account created and linked to GitHub
- ✅ Project imported and deployed
- ✅ Automatic deployments configured
- ✅ Custom domain added (optional)
- ✅ GitHub Actions integration working
- ✅ Test deployment successful

## Next Steps

1. Complete this Vercel setup
2. Test the full deployment pipeline
3. Share your live website URL
4. Monitor performance and analytics
5. Set up custom domain if desired

Your Annora Global website will now automatically update every time you push changes to GitHub!