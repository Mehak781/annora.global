@echo off
echo Starting automatic deployment...

echo Adding all changes to git...
git add .

echo Committing changes...
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message=Update website files

git commit -m "%commit_message%"

echo Pushing to GitHub...
git push origin master

echo Deployment script completed!
echo Your changes will be automatically deployed via GitHub Actions.
pause