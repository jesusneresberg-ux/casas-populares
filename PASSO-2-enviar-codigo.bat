@echo off
chcp 65001 >nul
cls
echo.
echo ═════════════════════════════════════════════════════════════
echo    📤 PASSO 2: Enviar Código para o GitHub
echo ═════════════════════════════════════════════════════════════
echo.
echo Este script vai:
echo   ✅ Configurar o repositório remoto
echo   ✅ Renomear branch para 'main'
echo   ✅ Enviar todo o código para o GitHub
echo.
echo ⚠️  ATENÇÃO: Você DEVE ter criado o repositório primeiro!
echo.
pause
echo.

echo 🌿 Renomeando branch para 'main'...
git branch -M main
if errorlevel 1 (
    echo ❌ Erro ao renomear branch
    pause
    exit /b 1
)
echo ✅ Branch renomeada

echo.
echo 🔗 Configurando repositório remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/jesusneresberg-ux/casas-populares.git
if errorlevel 1 (
    echo ❌ Erro ao adicionar remote
    pause
    exit /b 1
)
echo ✅ Remote configurado

echo.
echo ═════════════════════════════════════════════════════════════
echo    ⬆️  ENVIANDO CÓDIGO PARA O GITHUB...
echo ═════════════════════════════════════════════════════════════
echo.
echo ⚠️  Você pode precisar fazer login no GitHub agora
echo.

git push -u origin main

if errorlevel 1 (
    echo.
    echo ═════════════════════════════════════════════════════════════
    echo    ❌ ERRO AO ENVIAR CÓDIGO
    echo ═════════════════════════════════════════════════════════════
    echo.
    echo Possíveis causas:
    echo   1. Você não criou o repositório no GitHub ainda
    echo   2. Falha na autenticação
    echo   3. Problemas de conexão
    echo.
    echo 💡 Solução:
    echo   1. Execute PASSO-1-criar-repositorio.html primeiro
    echo   2. Verifique suas credenciais do GitHub
    echo   3. Tente novamente
    echo.
    pause
    exit /b 1
)

echo.
echo ═════════════════════════════════════════════════════════════
echo    ✅ SUCESSO! CÓDIGO ENVIADO PARA O GITHUB
echo ═════════════════════════════════════════════════════════════
echo.
echo 🎯 Próximos passos:
echo.
echo   1. O GitHub Actions está compilando o APK agora
echo   2. Isso vai demorar 5-10 minutos
echo   3. Execute PASSO-3-baixar-apk.html para ver o progresso
echo.
echo 🔗 Links úteis:
echo   • Ver progresso: https://github.com/jesusneresberg-ux/casas-populares/actions
echo   • Baixar APK: https://github.com/jesusneresberg-ux/casas-populares/releases
echo.
pause
