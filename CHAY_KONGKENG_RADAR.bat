@echo off
chcp 65001 >nul
title KONGKENG RADAR - Web Server (Port 8888)
cls
echo ===============================================================================
echo     KONGKENG RADAR - NEN TANG PHAN TICH CHUNG KHOAN THE HE MOI
echo ===============================================================================
echo.
echo   [+] Dang khoi dong may chu web tai: http://localhost:8888/#market
echo   [+] Trinh duyet cua ban se tu dong mo len sau 2 giay...
echo.
echo   (De dong ung dung, chi can tat cua so console nay)
echo ===============================================================================
echo.

cd /d "%~dp0"
start "" "http://localhost:8888/#market"
python -m http.server 8888
pause
