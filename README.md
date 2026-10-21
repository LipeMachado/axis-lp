# Axis Serviços — landing page

Landing page demonstrativa da Axis Serviços, feita com Astro, Tailwind CSS v4, Motion (motion.dev) e @lucide/astro.

## Rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:4321`.

```bash
npm run build
npm run preview
```

## Conteúdo

- Copy canônica em `../docs/site/copy.md`.
- Decisões de marca em `../docs/decisoes/registro.md`.
- Design system em `DESIGN.md`.
- Produto e restrições em `../PRODUCT.md`.

## Imagens

As placas em `public/images/muse/` foram geradas com **Muse Spark 1.3 Contributor** via OpenCode, com prompt, proveniência e licença em um `.json` ao lado de cada arquivo. São ilustrações de método, nunca prova de cliente, escritório, equipe ou trabalho da Axis.

## Formulário

O formulário é provisório por decisão de projeto: valida os campos, monta a mensagem e permite copiar. Não envia dados a nenhum serviço. O backend e o canal definitivo dependem de decisão do humano.

## Deploy na Vercel

Duas opções:

1. **Recomendado:** conectar o repositório com **Root Directory = `axis-lp`**. A Vercel usa `axis-lp/vercel.json` e o build padrão `npm run build`.
2. **Sem Root Directory:** usar o `vercel.json` da raiz, que instala e constrói `axis-lp/` e publica `axis-lp/dist`.

O `vercel.json` já define:

- `cleanUrls: true`
- `trailingSlash: false`
- cache longo para `/_astro/*`
- cache de uma semana para imagens e Open Graph
- headers básicos de segurança

A rota `/404` é gerada como `axis-lp/dist/404.html`; a Vercel a usa automaticamente para endereços inexistentes. Não há rewrite de SPA, porque o site é estático.

## Acessibilidade

Contraste AA, foco visível, navegação por teclado, menu popover nativo, `prefers-reduced-motion` preservando o conteúdo e formulário com erros ligados por `aria-describedby`.
