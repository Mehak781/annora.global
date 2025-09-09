# Deploy Annora Global to Google Platforms

This guide covers multiple options for deploying your website to Google's platforms.

## Option 1: Google Cloud Platform (Recommended for Production)

### Prerequisites
- Google Cloud account
- Google Cloud CLI installed
- Project billing enabled

### Steps:

1. **Install Google Cloud CLI**
   ```bash
   # Download from: https://cloud.google.com/sdk/docs/install
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy to App Engine**
   - Create `app.yaml` in project root:
   ```yaml
   runtime: nodejs18
   
   handlers:
   - url: /_next/static
     static_dir: .next/static
   
   - url: /(.*\.(gif|png|jpg|ico|svg|js|css|txt|xml))
     static_files: public/\1
     upload: public/.*\.(gif|png|jpg|ico|svg|js|css|txt|xml)
   
   - url: /.*
     script: auto
   ```
   
   - Deploy:
   ```bash
   gcloud app deploy
   ```

4. **Deploy to Cloud Run (Alternative)**
   - Create `Dockerfile`:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```
   
   - Deploy:
   ```bash
   gcloud run deploy annora-global --source .
   ```

## Option 2: Firebase Hosting (Easy & Free)

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   # Select: Use an existing project or create new
   # Public directory: out
   # Single-page app: Yes
   # Overwrite index.html: No
   ```

3. **Update next.config.js for static export**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. **Build and deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## Option 3: Google Sites (Simple but Limited)

### Note: 
Google Sites doesn't support custom React/Next.js applications directly. You would need to:

1. Export your site as static HTML/CSS/JS
2. Upload files manually
3. Limited customization options

**Not recommended for this project due to functionality limitations.**

## Option 4: Google Drive + GitHub Pages

1. **Export static site**
   ```bash
   npm run build
   npm run export  # if configured
   ```

2. **Upload to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

3. **Enable GitHub Pages in repository settings**

## Recommended Approach: Firebase Hosting

**Why Firebase Hosting?**
- ✅ Free tier available
- ✅ Global CDN
- ✅ SSL certificates included
- ✅ Easy deployment
- ✅ Custom domain support
- ✅ Perfect for static sites

## Quick Deploy Commands

```bash
# For Firebase (Recommended)
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy

# For Google Cloud App Engine
gcloud app deploy

# For Google Cloud Run
gcloud run deploy annora-global --source .
```

## Custom Domain Setup

### Firebase Hosting:
1. Go to Firebase Console > Hosting
2. Click "Add custom domain"
3. Follow DNS configuration steps

### Google Cloud:
1. Go to Cloud Console > App Engine > Settings > Custom Domains
2. Add your domain and verify ownership
3. Update DNS records as instructed

## Environment Variables

For production deployment, ensure you set:
- `NODE_ENV=production`
- Any API keys or secrets in the platform's environment variables section

## Monitoring & Analytics

- **Firebase**: Built-in analytics and performance monitoring
- **Google Cloud**: Cloud Monitoring and Cloud Logging
- **Google Analytics**: Add tracking code to your site

## Cost Considerations

- **Firebase Hosting**: Free tier (10GB storage, 1GB transfer/month)
- **App Engine**: Pay-per-use (free tier available)
- **Cloud Run**: Pay-per-request (free tier available)

## Next Steps

1. Choose your preferred Google platform
2. Follow the specific deployment steps
3. Configure custom domain (optional)
4. Set up monitoring and analytics
5. Test your live website

Your Annora Global website will be live and accessible worldwide! 🚀