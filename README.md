# Casas Populares - Gestão de Obras

Aplicativo móvel para gestão e acompanhamento de construção de casas populares.

## 🏗️ Funcionalidades

- **Dashboard**: Visão geral de todas as obras em andamento
- **Controle de Custos**: Registro de gastos e materiais
- **Cronograma**: Acompanhamento de etapas da construção
- **Registro Fotográfico**: Galeria de fotos das obras
- **Geração de APK**: Build automático via GitHub Actions

## 🚀 Tecnologias

- Next.js 14 (React)
- TypeScript
- Tailwind CSS
- Capacitor (para Android)
- Lucide Icons
- GitHub Actions (CI/CD)

## 📦 Instalação Local

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto em modo desenvolvimento:
```bash
npm run dev
```

3. Acesse: http://localhost:3000

## 🤖 Gerar APK Automaticamente com GitHub

### Método Rápido (Windows):
1. Execute o script:
```bash
setup-github.bat
```

### Método Manual:
1. Crie o repositório no GitHub: https://github.com/new
   - Nome: `casas-populares`
   - Usuário: `jesusneresberg-ux`

2. Configure e envie o código:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/jesusneresberg-ux/casas-populares.git
git branch -M main
git push -u origin main
```

3. O GitHub Actions vai:
   - ✅ Compilar o Next.js
   - ✅ Gerar o APK automaticamente
   - ✅ Disponibilizar para download

4. Baixe o APK:
   - Vá em: `https://github.com/jesusneresberg-ux/casas-populares/actions`
   - Clique no workflow mais recente
   - Baixe o artifact `casas-populares-debug.apk`
   - Ou acesse as Releases

### Gerar novo APK:
Sempre que fizer mudanças:
```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

O GitHub Actions gera um novo APK automaticamente!

## 📱 Gerar APK Localmente (Android Studio)

1. Faça o build do Next.js:
```bash
npm run build
```

2. Sincronize com Capacitor:
```bash
npx cap sync android
```

3. Abra no Android Studio:
```bash
npx cap open android
```

4. No Android Studio:
   - Build > Build Bundle(s) / APK(s) > Build APK(s)
   - O APK estará em: `android/app/build/outputs/apk/debug/`

## 📱 Instalar APK no Celular

1. Baixe o arquivo `.apk` do GitHub Actions
2. Transfira para o celular Android
3. Abra o arquivo no celular
4. Permita "Instalar de fontes desconhecidas" se solicitado
5. Instale o app

## 📁 Estrutura do Projeto

```
casas-populares/
├── .github/
│   └── workflows/
│       └── android-build.yml  # GitHub Actions
├── app/
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Dashboard
│   └── globals.css            # Estilos globais
├── capacitor.config.ts        # Configuração Capacitor
├── next.config.mjs            # Configuração Next.js
├── tailwind.config.ts         # Configuração Tailwind
├── setup-github.bat           # Script setup Windows
├── DEPLOY.md                  # Guia completo de deploy
└── package.json               # Dependências
```

## 🎯 Próximos Passos

- [ ] Implementar tela de detalhes da obra
- [ ] Adicionar controle de custos completo
- [ ] Implementar cronograma com etapas
- [ ] Integrar câmera para fotos
- [ ] Adicionar geração de relatórios PDF
- [ ] Implementar persistência de dados (LocalStorage/SQLite)

## 📚 Documentação Adicional

- `DEPLOY.md` - Guia completo de deploy e troubleshooting
- GitHub Repo: https://github.com/jesusneresberg-ux/casas-populares
- Actions: https://github.com/jesusneresberg-ux/casas-populares/actions

## 📝 Licença

Projeto livre para uso pessoal e comercial.
