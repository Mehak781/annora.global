@echo off
echo ========================================
echo   Annora Global - Google Deployment
echo ========================================
echo.

echo Choose your Google deployment option:
echo 1. Firebase Hosting (Recommended)
echo 2. Google Cloud App Engine
echo 3. Google Cloud Run
echo 4. Build for manual upload
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto firebase
if "%choice%"=="2" goto appengine
if "%choice%"=="3" goto cloudrun
if "%choice%"=="4" goto build
goto invalid

:firebase
echo.
echo ========================================
echo   Deploying to Firebase Hosting
echo ========================================
echo.
echo Installing Firebase CLI (if not installed)...
npm install -g firebase-tools
echo.
echo Building project for static export...
npm run build
echo.
echo Initializing Firebase (follow prompts)...
firebase init hosting
echo.
echo Deploying to Firebase...
firebase deploy
echo.
echo ✅ Deployment complete! Check Firebase console for your URL.
goto end

:appengine
echo.
echo ========================================
echo   Deploying to Google App Engine
echo ========================================
echo.
echo Building project...
npm run build
echo.
echo Make sure you have gcloud CLI installed and authenticated.
echo Run: gcloud auth login
echo Then: gcloud config set project YOUR_PROJECT_ID
echo.
echo Creating app.yaml...
echo runtime: nodejs18 > app.yaml
echo. >> app.yaml
echo handlers: >> app.yaml
echo - url: /_next/static >> app.yaml
echo   static_dir: .next/static >> app.yaml
echo. >> app.yaml
echo - url: /.*\.(gif^|png^|jpg^|ico^|svg^|js^|css^|txt^|xml^) >> app.yaml
echo   static_files: public/\1 >> app.yaml
echo   upload: public/.*\.(gif^|png^|jpg^|ico^|svg^|js^|css^|txt^|xml^) >> app.yaml
echo. >> app.yaml
echo - url: /.* >> app.yaml
echo   script: auto >> app.yaml
echo.
echo Now run: gcloud app deploy
echo.
echo ✅ app.yaml created! Run 'gcloud app deploy' to deploy.
goto end

:cloudrun
echo.
echo ========================================
echo   Deploying to Google Cloud Run
echo ========================================
echo.
echo Building project...
npm run build
echo.
echo Creating Dockerfile...
echo FROM node:18-alpine > Dockerfile
echo WORKDIR /app >> Dockerfile
echo COPY package*.json ./ >> Dockerfile
echo RUN npm ci --only=production >> Dockerfile
echo COPY . . >> Dockerfile
echo RUN npm run build >> Dockerfile
echo EXPOSE 3000 >> Dockerfile
echo CMD ["npm", "start"] >> Dockerfile
echo.
echo Make sure you have gcloud CLI installed and authenticated.
echo Then run: gcloud run deploy annora-global --source .
echo.
echo ✅ Dockerfile created! Run the gcloud command above to deploy.
goto end

:build
echo.
echo ========================================
echo   Building for Manual Upload
echo ========================================
echo.
echo Building static export...
npm run build
echo.
echo ✅ Build complete! Files are in the 'out' folder.
echo You can now manually upload these files to any hosting service.
goto end

:invalid
echo.
echo ❌ Invalid choice. Please run the script again and choose 1-4.
goto end

:end
echo.
echo Press any key to exit...
pause >nul