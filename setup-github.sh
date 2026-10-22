#!/bin/bash

# Script para configurar o repositório GitHub
# Execute: bash setup-github.sh

echo "🚀 Configurando repositório Casas Populares no GitHub"
echo ""

# Verificar se já tem git inicializado
if [ -d .git ]; then
    echo "✅ Git já inicializado"
else
    echo "📦 Inicializando Git..."
    git init
fi

# Adicionar todos os arquivos
echo "📝 Adicionando arquivos..."
git add .

# Fazer commit inicial
echo "💾 Criando commit inicial..."
git commit -m "Initial commit - Casas Populares App" 2>/dev/null || echo "⚠️ Nada para commitar ou commit já existe"

# Configurar remote
echo "🔗 Configurando remote do GitHub..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/jesusneresberg-ux/casas-populares.git

# Renomear branch para main
echo "🌿 Configurando branch main..."
git branch -M main

# Fazer push
echo "⬆️ Enviando código para o GitHub..."
echo ""
echo "ATENÇÃO: Você precisará fazer login no GitHub quando solicitado"
echo ""
git push -u origin main

echo ""
echo "✅ CONCLUÍDO!"
echo ""
echo "🎯 Próximos passos:"
echo "1. Acesse: https://github.com/jesusneresberg-ux/casas-populares/actions"
echo "2. Aguarde o build terminar (5-10 minutos)"
echo "3. Baixe o APK em Actions > Artifacts ou em Releases"
echo ""
echo "📱 Para instalar no celular:"
echo "- Transfira o APK para o Android"
echo "- Abra e instale (permita fontes desconhecidas se necessário)"
