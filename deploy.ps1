# Automatic deployment script for Annora Global
Write-Host "Starting automatic deployment..." -ForegroundColor Green

# Add all changes to git
Write-Host "Adding all changes to git..." -ForegroundColor Yellow
git add .

# Check if there are any changes to commit
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}

# Get commit message from user
$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update website files"
}

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Yellow
git commit -m $commitMessage

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
try {
    git push origin master
    Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "Your changes will be automatically deployed via GitHub Actions." -ForegroundColor Cyan
} catch {
    Write-Host "Error pushing to GitHub. Please check your authentication." -ForegroundColor Red
    Write-Host "You may need to run: git push origin master manually" -ForegroundColor Yellow
}

Write-Host "Deployment script completed!" -ForegroundColor Green
Read-Host "Press Enter to exit"