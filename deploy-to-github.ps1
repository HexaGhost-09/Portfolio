Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "   Pushing Portfolio to HexaGhost-09/portfolio" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan

Set-Location $PSScriptRoot

# 1. Initialize Git
Write-Host "`n[1/4] Initializing Git repository..." -ForegroundColor Yellow
git init
git branch -M main

# 2. Stage and commit files
Write-Host "`n[2/4] Staging and committing files..." -ForegroundColor Yellow
git add .
git commit -m "feat: initial release of Rasel cinematic portfolio"

# 3. Configure Remote
Write-Host "`n[3/4] Configuring remote for HexaGhost-09/portfolio..." -ForegroundColor Yellow
git remote remove origin 2>$null
git remote add origin https://github.com/HexaGhost-09/portfolio.git

# 4. Push to GitHub
Write-Host "`n[4/4] Pushing to https://github.com/HexaGhost-09/portfolio.git..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[SUCCESS] Successfully pushed to https://github.com/HexaGhost-09/portfolio" -ForegroundColor Green
    Write-Host "You can now connect it directly to Vercel at https://vercel.com/new" -ForegroundColor Cyan
} else {
    Write-Host "`n[NOTE] If the push failed, create the repository first at https://github.com/new with name 'portfolio', then run this again!" -ForegroundColor Yellow
}
