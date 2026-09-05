# MOEMS Practice App

Static kids practice + bank review for MOEMS Elementary (Division E + mixed practice).

## Files
- `index.html` — practice app (source filters, text/figures modes)
- `review.html` — full bank review (source, **topics multi-select**, difficulty A–E / unset / tier)
- `moemsBank.js` — practice bank (**559 problems**), **exported from schema v2** (`problems.v2.json`)

## Open locally
Put `index.html`, `review.html`, and `moemsBank.js` in the same folder (plus `figures/` if using diagram mode). Open via `file://` or any static server.

## Bank notes
- Source of truth for exports: schema **v2** nested bank.
- Flat fields in `moemsBank.js` include `topics`, `difficulty` / `difficultyLabel` (A–E), `difficultyTier` (1–5 when present), provenance (`sourceType`, `sourceTitle`, `year`, `contest`), and `solution` when available.
- Counts: 559 total · 539 with answers · 20 missing answers · source mix Contests/Tournaments/MAMTS/Samples/Practice/User.
