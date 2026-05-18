# Atacado Cirulli — Landing Page

Vite + React + TypeScript + Tailwind. Pronto para deploy no Vercel.

## Rodar local
```bash
npm install
npm run dev
```

## Build produção
```bash
npm run build
npm run preview
```

## Deploy no Vercel
1. Suba este repositório no GitHub.
2. https://vercel.com/new → importe o repo → **Deploy**. Sem configuração manual.

## Estrutura
- `index.html` (raiz) — meta tags, JSON-LD, fonts, schema
- `src/main.tsx` — entry React
- `src/App.tsx` — landing page completa
- `src/index.css` — Tailwind + design tokens (preto/dourado/Montserrat)
- `vercel.json` — headers de segurança e cache imutável de assets
