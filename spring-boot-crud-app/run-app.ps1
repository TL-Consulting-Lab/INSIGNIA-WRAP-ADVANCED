# PowerShell script to run Spring Boot application
# Usage: .\run-app.ps1

Write-Host "Starting Spring Boot Application..." -ForegroundColor Green

# Change to script directory
Set-Location $PSScriptRoot

# Run Maven wrapper through cmd for compatibility
& cmd /c "mvnw.cmd spring-boot:run"
