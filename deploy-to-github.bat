@echo off
setlocal enabledelayedexpansion

echo ========================================================
echo   Pushing Portfolio to GitHub: HexaGhost-09/portfolio
echo ========================================================
echo.

cd /d "%~dp0"

echo [1/4] Initializing Git repository...
git init
git branch -M main

echo.
echo [2/4] Staging and committing files...
git add .
git commit -m "feat: initial release of Rasel cinematic portfolio"

echo.
echo [3/4] Configuring remote origin (HexaGhost-09/portfolio)...
git remote remove origin >nul 2>nul
git remote add origin https://github.com/HexaGhost-09/portfolio.git

echo.
echo [4/4] Pushing to https://github.com/HexaGhost-09/portfolio.git ...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Portfolio is now live on GitHub:
    echo https://github.com/HexaGhost-09/portfolio
    echo ========================================================
    echo.
    echo Next step: Connect it to Vercel at https://vercel.com/new
) else (
    echo.
    echo ========================================================
    echo Push incomplete.
    echo If repository does not exist yet on GitHub:
    echo 1. Go to: https://github.com/new
    echo 2. Repository name: portfolio
    echo 3. Keep it Public and click "Create repository"
    echo 4. Then double-click this file again!
    echo ========================================================
)

echo.
pause
