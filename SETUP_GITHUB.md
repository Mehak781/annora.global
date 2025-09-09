# GitHub Authentication Setup Guide

## Option 1: Using Personal Access Token (Recommended)

### Step 1: Create a Personal Access Token
1. Go to GitHub.com and sign in to your account
2. Click your profile picture → Settings
3. Scroll down and click "Developer settings" (left sidebar)
4. Click "Personal access tokens" → "Tokens (classic)"
5. Click "Generate new token" → "Generate new token (classic)"
6. Give it a name like "Annora Global Deployment"
7. Select expiration (recommend 90 days or No expiration)
8. Select these scopes:
   - ✅ repo (Full control of private repositories)
   - ✅ workflow (Update GitHub Action workflows)
9. Click "Generate token"
10. **IMPORTANT**: Copy the token immediately (you won't see it again!)

### Step 2: Configure Git with Token
Run these commands in your terminal:

```bash
# Set your GitHub username
git config --global user.name "Mehak781"

# Set your GitHub email
git config --global user.email "your-email@example.com"

# When you push, use your username and the token as password
git push -u origin master
# Username: Mehak781
# Password: [paste your personal access token here]
```

## Option 2: Using GitHub CLI (Alternative)

### Install GitHub CLI
1. Download from: https://cli.github.com/
2. Install and restart your terminal
3. Run: `gh auth login`
4. Follow the prompts to authenticate

### Push with GitHub CLI
```bash
gh repo create Mehak781/annora.global --public --source=. --remote=origin --push
```

## Option 3: SSH Key Setup (Advanced)

### Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

### Add SSH Key to GitHub
1. Copy the public key: `cat ~/.ssh/id_ed25519.pub`
2. Go to GitHub Settings → SSH and GPG keys
3. Click "New SSH key" and paste the key

### Configure Git for SSH
```bash
git remote set-url origin git@github.com:Mehak781/annora.global.git
git push -u origin master
```

## After Authentication

Once you've set up authentication, you can:

1. **Push your current code**:
   ```bash
   git push -u origin master
   ```

2. **Use the deployment scripts**:
   ```bash
   # Windows Command Prompt
   deploy.bat
   
   # PowerShell
   .\deploy.ps1
   ```

3. **Set up automatic deployment**:
   - Your code will automatically deploy to Vercel when pushed to GitHub
   - GitHub Actions workflow is already configured

## Troubleshooting

- **403 Permission denied**: Your token doesn't have the right permissions
- **Authentication failed**: Token might be expired or incorrect
- **Repository not found**: Make sure the repository exists on GitHub

## Next Steps

1. Complete GitHub authentication using one of the methods above
2. Push your code: `git push -u origin master`
3. Set up Vercel deployment (see README.md)
4. Your website will be live and automatically update with every push!