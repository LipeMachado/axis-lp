# Design system — Axis Serviços

Status: implementado na landing page | Base: D-028, D-030, D-019, D-004 | Dark-only por decisão desta entrega

## Mundo

**Instrumento de operação.** A página é um painel de controle visto de perto: um palco escuro, capítulos em degraus de carvão, um campo laranja de decisão e placas técnicas em vez de fotos de banco de imagens. O eixo aparece como linha de método, não como enfeite.

Referência: Linear traduzida. Dark-first, produto em tela, densidade, camadas e um único gesto de cor. Não copiar a Linear: cantos retos, laranja da Axis, sem pessoas, sem clientes.

## Cor

| Papel | Histórico | Canônico (dark) | Uso |
|---|---|---|---|
| Papel | `oklch(0.972 0.003 80)` | `oklch(0.155 0.006 72)` | fundo do documento |
| Superfície | `oklch(0.946 0.005 80)` | `oklch(0.195 0.007 72)` | capítulos e blocos |
| Superfície 2 | `oklch(0.912 0.013 80)` | `oklch(0.235 0.011 70)` | degrau de tom |
| Tinta | `oklch(0.19 0.012 70)` | `oklch(0.945 0.008 85)` | texto, marcas |
| Secundário | `oklch(0.42 0.014 70)` | `oklch(0.73 0.012 82)` | nota, metadado |
| Marca | `#ef7d00` | `#ef7d00` | ação, foco, seleção |
| Texto sobre marca | `#1a140f` | `#1a140f` | rótulo do primário |
| Palco | `#171410` | `#171410` | hero, incidente, contato |
| Palco 2 | `#211a14` | `#211a14` | painéis e linhas de interface |
| Palco 3 | `#2b221a` | `#2b221a` | cabeçalho, estado |
| Sucesso | `#86b276` | — | só estado, com texto |
| Aviso | `#f0b25e` | — | só estado, com texto |
| Erro | `#e76b51` | — | só estado, com texto |
| Erro em papel | `#a83222` | — | validação sobre papel |
| Âmbar | `#ffb45e` | — | brilho e detalhe |

Dark-only: a coluna **Canônico** é a única usada; a coluna **Histórico** não é aplicada.

Regras: laranja é ação e campo de decisão, não decoração. Verde/âmbar/vermelho só com texto. Sem azul, violeta, índigo, navy ou teal. Sem gradiente de texto. Sem vidro.

## Tipografia

- Títulos: **Atkinson Hyperlegible Next Variable**, 600, tracking negativo.
- Texto: **Darker Grotesque Variable**, 500, corpo de 20 px.
- Cinco tamanhos visíveis: 60 / 54 / 29 / 20 / 17 px no desktop; 30 / 28 / 23 / 20 / 17 px no celular.
- Display: `clamp(1.9rem, 1rem + 3.7vw, 3.75rem)`, linha 0.94.
- H2: `clamp(1.75rem, 0.5rem + 2.9vw, 3.5rem)`, linha 1.02.
- Lead: `clamp(1.45rem, 1.2rem + 0.65vw, 1.9rem)`.
- Corpo: 20 px / 1.45.
- Pequeno: 17 px / 1.4.
- Títulos em duas linhas no máximo. Sem eyebrow, sem numeração decorativa, sem mono fora de código.

## Espaço e grade

- Margem externa: `clamp(1.125rem, 2.2vw, 2.5rem)`.
- Grade: 12 colunas desktop, 6 tablet, 4 celular; gutter igual à margem.
- Seção: `clamp(4.5rem, 3rem + 5vw, 8rem)`.
- Medida de leitura: 64ch; medida curta: 46ch.
- Cantos retos em tudo. Separação por tom, não por linha.

## Componentes

- **Botão**: reto, altura 52 px, laranja; ícone em quadrado de 36 px; pressão de 1 px e escala 0.99.
- **Painel de operação**: três cenários (Operação, Diagnóstico, Incidente), lista de estados, gráfico de 14 dias e leitura fato/hipótese/não verificado. Sempre rotulado `Exemplo ilustrativo`.
- **Índice de frentes**: lista tipográfica com preview fixo; hover/focus/click troca o preview; CTA no rodapé do preview.
- **Relatório**: fato, hipótese, não verificado, recomendação, custo e consequência; “Trocar” alterna o exemplo.
- **Perguntas**: `<details>` nativo, pergunta em 29 px, resposta em 20 px.
- **Formulário**: campos com rótulo visível, borda de 1,5 px, erro em vermelho claro, sucesso em superfície elevada. O envio prepara a mensagem e copia; não há backend.
- **Navegação**: barra simples, wordmark, quatro links e uma ação. No celular, popover de tela cheia com foco preso.
- **Painel no celular**: a lista fica visível; a leitura (gráfico e relatório) abre por “Ver leitura”, em disclosure progressivo.

## Movimento

- Assinatura: o painel entra depois do título, com as barras de 14 dias crescendo em stagger; o título sobe de máscaras.
- Seções: partes entram em stagger de 75 ms, 24 px, uma vez, com `IntersectionObserver` via Motion.
- Eixo do método: linha desenha de 0 a 1 ao entrar.
- Feedback: botão pressiona, seta desloca, FAQ gira o sinal.
- Só `transform` e `opacity`; `prefers-reduced-motion` mantém todo o conteúdo.

## Imagens

- Quatro placas vetoriais editoriais geradas com o Muse Spark 1.3 Contributor: mesa de retaguarda + armário de infraestrutura, chaves + pasta, e folha de relatório. Fundo carvão quente, luz laranja, grão.
- Uso: mesa + armário em “Quando nos procuram”; chaves em “Como trabalhamos”; relatório em “Como decidimos”.
- Toda imagem tem `alt` e dimensões. O contexto da seção basta; não há legenda de estudo visual.
- Os `.json` ao lado registram prompt, proveniência e licença.

## Não usar

Pílula, vidro, gradiente decorativo, sombra em repouso fora de painel flutuante, linha fina decorativa, ícone em card, grade de cards iguais, número 01/02/03, rótulo em caixa-alta espaçada, pessoas, logos de cliente, preço, prazo, SLA, e-mail ou telefone.
