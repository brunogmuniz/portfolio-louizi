# Audit fixes — execução concluída

Escopo: P1 e P2 do `$impeccable audit`. O P3 estético (kickers/eyebrow, serif itálica, viúvas) fica para um passe de design.

## P1
- [x] Contraste: logo visível, vinho sobre preto (`--color-wine-soft`) e descrição da hero
- [x] Imagens: payload reduzido de 109,2 MB para 13,4 MB
- [x] `lang="pt-BR"` + meta description/OG/theme-color
- [x] CTA "Vamos conversar" funcional (prop `onContact` → rota Contato)
- [x] Instagram da sidebar com handle real (`@tmwthv`)

## P2
- [x] Tokens `--color-gray` e `--color-wine-soft`
- [x] Foco/trap de Tab/scroll lock/restauração no lightbox
- [x] `prefers-reduced-motion` intencional (sem matar feedback de cor)
- [x] h1 duplicado removido e `<main>` aninhado corrigido
- [x] Rotas por hash (`#/`, `#/portfolio`, `#/sobre`, `#/contato`)
- [x] Fontes: um único `<link>` com preconnect, sem `@import`
- [x] Piso de 11px para texto funcional (copyright em 12px)
- [x] `width`/`height` reais em Home, Sobre e Portfólio
- [x] Dependência `yet-another-react-lightbox` e `src/App.css` removidos
- [x] Tipografia global consolidada em DM Sans

## Resultados medidos
- Imagens: **109,2 MB → 13,4 MB** (71 arquivos; maior 0,42 MB)
- `dist/`: **109,5 MB → 13,7 MB**
- Chrome headless: rotas `#/sobre`, `#/contato`, `#/portfolio` OK; CTA OK; lightbox abre com foco no fechar, trava scroll, Esc fecha e restaura o foco na foto
- `npm run build`: `tsc -b && vite build` passam (exit 0)

### Detector final (após as correções)

| Rota | 1280×800 | 390×844 | Fora do P3 |
|------|----------|---------|------------|
| Home | 5 | 4 | 0 |
| Sobre | 5 | 4 | 0 |
| Portfólio | 0 | 0 | 0 |
| Contato | 1 | 1 | 0 |

Todos os achados remanescentes são P3: `kicker-above-heading`, `hero-eyebrow-chip`, `italic-serif-display` e `straggler`. Nenhum `low-contrast`, `tiny-text` ou `overused-font` restante.

## P3 pendente (passe de design)
- Kicker/eyebrow acima de títulos
- Serif itálica como display (Playfair)
- Viúvas de 1–2 palavras em parágrafos do Sobre
- Possível evolução: AVIF/WebP + `srcset`/`sizes` (hoje só JPEG reotimizado)
