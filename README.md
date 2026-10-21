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

## Deploy na Cloudflare Pages

O site é estático, sem adapter/SSR. Este repositório já é a raiz do site; no Cloudflare Pages, deixe o **Root Directory** vazio (`/`).

No dashboard da Cloudflare Pages:

- **Framework preset:** Astro
- **Build command:** `npm ci && npm run build`
- **Build output directory:** `dist`
- **Node:** `22.22.0` (definido em `.nvmrc`; também pode usar a env `NODE_VERSION=22.22.0`)

O `wrangler.jsonc` aponta o build para `./dist` e serve para deploy direto/CLI:

```bash
npx wrangler pages deploy dist --project-name axis-servicos
```

O `public/_headers` é copiado para `dist/_headers` e define:

- headers básicos de segurança
- cache imutável para `/_astro/*`
- cache de 7 dias para imagens, Open Graph e favicon

A rota `/404` vira `dist/404.html`; a Cloudflare Pages usa esse arquivo automaticamente para endereços inexistentes. Não há rewrite de SPA, porque o site é estático.

Depois do primeiro deploy, adicione o domínio `axisservicos.com.br` em **Custom domains** no projeto Pages.

## Acessibilidade

Contraste AA, foco visível, navegação por teclado, menu popover nativo, `prefers-reduced-motion` preservando o conteúdo e formulário com erros ligados por `aria-describedby`.
