# 🚀 Deploy e Geração de APK com GitHub Actions

Este guia explica como configurar o repositório no GitHub para gerar o APK automaticamente.

## 📋 Pré-requisitos

- Conta no GitHub (usuário: jesusneresberg-ux)
- Git instalado no computador
- Node.js instalado

## 🔧 Passo a Passo

### 1. Inicializar Git no projeto

Abra o terminal na pasta do projeto e execute:

```bash
cd casas-populares
git init
git add .
git commit -m "Initial commit - Casas Populares App"
```

### 2. Criar repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `casas-populares`
3. Deixe como **público** ou **privado**
4. **NÃO** adicione README, .gitignore ou licença (já temos)
5. Clique em "Create repository"

### 3. Conectar e enviar código

Copie e execute os comandos que o GitHub mostrar, ou use:

```bash
git remote add origin https://github.com/jesusneresberg-ux/casas-populares.git
git branch -M main
git push -u origin main
```

### 4. GitHub Actions vai começar automaticamente

Após o push, o GitHub Actions:
- ✅ Instala dependências
- ✅ Faz build do Next.js
- ✅ Configura Android SDK
- ✅ Gera o APK
- ✅ Cria release automática

### 5. Baixar o APK

**Opção 1 - Via Actions:**
1. Vá em: `https://github.com/jesusneresberg-ux/casas-populares/actions`
2. Clique no workflow mais recente
3. Role até "Artifacts"
4. Baixe `casas-populares-debug.apk`

**Opção 2 - Via Releases:**
1. Vá em: `https://github.com/jesusneresberg-ux/casas-populares/releases`
2. Baixe o APK da release mais recente

## 🔄 Gerar novo APK

Sempre que você fizer um novo commit no branch `main`:

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Actions vai gerar um novo APK automaticamente!

## 🎯 Instalar APK no celular

1. Baixe o arquivo `.apk`
2. Transfira para o celular Android
3. Abra o arquivo no celular
4. Permita "Instalar de fontes desconhecidas" se solicitado
5. Instale o app

## 🐛 Solução de Problemas

**Se o build falhar:**
1. Vá em Actions no GitHub
2. Clique no workflow que falhou
3. Veja os logs para identificar o erro

**Erros comuns:**
- Falta de permissão: Configure Actions em Settings > Actions > General
- Build timeout: O build pode demorar 5-10 minutos na primeira vez

## 📱 Testando localmente antes do GitHub

```bash
npm install
npm run build
npx cap sync android
npx cap open android
```

No Android Studio:
- Build > Build Bundle(s) / APK(s) > Build APK(s)

---

**Dúvidas?** Verifique os logs no GitHub Actions para diagnosticar problemas.
