@echo off
TITLE IhsansGate Server
cd /d "%~dp0"
echo ========================================
echo    IhsansGate Sunucusu Başlatılıyor...
echo ========================================
echo.
echo Sunucu acildiginda tarayici otomatik acilacaktir.
echo Calismaya devam etmek icin bu pencereyi kapatmayin.
echo.
npm run dev
pause
