🚀 Portfólio Pessoal - React + TypeScript + Vite
Este é o repositório do meu portfólio desenvolvido com React, TypeScript e Vite, utilizando Hot Module Replacement (HMR) para uma experiência de desenvolvimento mais rápida e moderna. Além disso, o projeto segue boas práticas com ESLint configurado.

📦 Tecnologias Utilizadas
⚛️ React – Biblioteca para construção de interfaces modernas

💡 TypeScript – Tipagem estática para maior segurança e escalabilidade

⚡ Vite – Empacotador leve e ultra-rápido

✅ ESLint – Padronização e qualidade de código

🔧 Configuração do Projeto
Este projeto utiliza dois plugins oficiais para integração com React:

@vitejs/plugin-react (usa Babel para Fast Refresh)

@vitejs/plugin-react-swc (usa SWC para Fast Refresh)

🧠 Regras de Linting Avançadas
Para aplicações em produção, é recomendável utilizar regras de lint com verificação de tipos:

ts
Copiar
Editar
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
🎯 Plugins Recomendados
Para regras específicas do React:

ts
Copiar
Editar
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
💻 Como Rodar o Projeto
bash
Copiar
Editar
# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
✨ Objetivo do Projeto
Este portfólio tem como objetivo apresentar meus projetos, habilidades e experiências como desenvolvedor front-end. Cada seção foi pensada para mostrar minha evolução e domínio das tecnologias modernas do ecossistema web.