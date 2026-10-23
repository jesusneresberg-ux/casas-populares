# 🌐 Guia de Deploy - Casas Populares PWA

## ✅ Opção 1: Deploy Rápido (Vercel)

### Passo a passo:

1. **Criar conta no Vercel** (grátis): https://vercel.com

2. **Instalar Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

3. **Fazer deploy**:
   ```bash
   cd casas-populares
   vercel
   ```

4. **Seguir instruções** no terminal e pronto! 🚀

Seu app estará disponível em: `https://casas-populares-xxx.vercel.app`

---

## ✅ Opção 2: Deploy Manual (Netlify)

1. **Criar conta no Netlify** (grátis): https://netlify.com

2. **Build local**:
   ```bash
   cd casas-populares
   npm install
   npm run build
   ```

3. **Fazer upload**:
   - Arraste a pasta `.next` para o Netlify
   - OU use Netlify CLI:
     ```bash
     npm install -g netlify-cli
     netlify deploy --prod
     ```

---

## ✅ Opção 3: GitHub + Vercel (Automático)

### Mais fácil e recomendado!

1. **Subir para GitHub**:
   ```bash
   cd casas-populares
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/casas-populares.git
   git push -u origin main
   ```

2. **Conectar no Vercel**:
   - Acesse https://vercel.com
   - Click em "Import Project"
   - Selecione seu repositório do GitHub
   - Click em "Deploy"
   - Pronto! ✅

Cada push no GitHub vai atualizar automaticamente o site!

---

## 📱 Após o Deploy

1. **Testar PWA**:
   - Abra o site no celular
   - Chrome: Menu → "Adicionar à tela inicial"
   - Safari: Compartilhar → "Adicionar à Tela de Início"

2. **URL do app**:
   - Vai ficar algo como: `https://casas-populares.vercel.app`
   - Você pode adicionar domínio personalizado depois

3. **Funcionalidades offline**:
   - Na primeira visita, o app baixa tudo
   - Depois funciona offline!
   - Fotos ficam salvas localmente

---

## 🔧 Problemas Comuns

### Erro no build?
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### PWA não instala?
- Precisa ser HTTPS (Vercel/Netlify já são)
- Precisa ter ícones e manifest.json (já tem!)
- Precisa ter Service Worker (já tem!)

---

## 🎯 Próximos Passos

Depois do deploy, você pode:

1. **Customizar domínio**: `casas-populares.com.br`
2. **Adicionar analytics**: Google Analytics
3. **Adicionar banco de dados**: Firebase, Supabase
4. **Adicionar autenticação**: NextAuth.js
5. **Adicionar notificações push**: Firebase Cloud Messaging

---

## 💡 Dica Pro

Use o **Vercel + GitHub** porque:
- ✅ Deploy automático em cada commit
- ✅ Preview de cada branch
- ✅ Rollback fácil
- ✅ SSL grátis
- ✅ CDN global
- ✅ Analytics incluído

**Comando único**:
```bash
vercel --prod
```

E seu app está no ar! 🚀
