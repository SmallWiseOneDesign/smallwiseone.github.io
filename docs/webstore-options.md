# Webstore options (Printful) — issue #21

**Overnight recommendation: keep marketplaces for now.** No Printful API enrollment or spend in this sprint.

## Options

| Option | What it is | Needs from Mark | Overnight? |
|--------|------------|-----------------|------------|
| A. Marketplaces only | Etsy / etc. as today | Nothing new | Yes — status quo |
| B. Link-out shop page | Static `/shop` page with buttons to Printful storefront or marketplace URLs | Real storefront URLs | Yes (URLs TBD) |
| C. Printful API custom store | Server or serverless talking to Printful | Printful API token + ongoing maintenance | No — not without secrets + hosting decisions |

Tutorial Mark found (UltimateWB) targets hosts with PHP/server plugins — **not** a fit for pure GitHub Pages without a separate backend.

## Recommendation

Ship **A** until there is steady direct-demand; then **B** with real URLs; only then consider **C** with a paid backend and Mark-supplied token.

No API keys in this repo.
