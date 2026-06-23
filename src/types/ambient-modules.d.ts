/**
 * Ambient module declarations for the leaked Claude Code source.
 *
 * Why this file exists
 * --------------------
 * The real Claude Code build installs ~60 npm dependencies (react, zod,
 * @anthropic-ai/sdk, lodash-es, ...). This repo ships source-only — by choice
 * we do NOT run `npm install`, so those bare imports are unresolved.
 *
 * `declare module '*'` makes every unresolved bare specifier resolve to `any`,
 * so tsserver doesn't flag the ~160 distinct external specifiers used across the
 * codebase. This is a *navigation* config, not a type-checking one: the leaked
 * source has many real type mismatches of its own, and this repo is not meant to
 * type-check cleanly anyway.
 *
 * Crucially, the wildcard does NOT shadow project-internal imports:
 *   - `src/...`  resolves via tsconfig `paths`         → real .ts/.tsx files
 *   - `./...` and `../...` resolve relatively          → real .ts/.tsx files
 *   - `bun:bundle` resolves via tsconfig `paths`       → src/types/bun-bundle.ts
 * So go-to-definition / find-references across the project work in full fidelity;
 * only the external packages degrade to `any`.
 *
 * If you later `npm install` the real deps, DELETE this file and let the real
 * `.d.ts` shipped with each package take over.
 */
declare module '*'
