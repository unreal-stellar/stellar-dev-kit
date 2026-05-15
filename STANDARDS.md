# Standards

Coding principles, TypeScript rules, and security baseline for Stellar Dev Kit.

## TypeScript

- All packages use `strict: true`. No exceptions.
- Prefer `interface` for object shapes that may be extended; `type` for unions and aliases.
- Export every public type alongside its implementation — consumers should never need to re-declare shapes.
- Never use `any`. Use `unknown` at system boundaries and narrow explicitly.
- Avoid non-null assertion (`!`). Prefer explicit null checks or early returns.
- Generic type parameters must be named meaningfully (`T` is acceptable only for single-parameter generics with obvious semantics).

## Module Boundaries

- Each shared package must expose a single `src/index.ts` entry point.
- Packages must not import from sibling packages (e.g., `auth` must not import from `utils`). Cross-cutting helpers belong in `utils`.
- Apps may import from any shared package; shared packages must not import from apps.
- Contracts are isolated — no TypeScript cross-imports from Rust code.

## Naming

- Files: `kebab-case.ts`
- Exported functions: `camelCase`
- Exported types and interfaces: `PascalCase`
- Constants: `UPPER_SNAKE_CASE` for module-level primitives, `camelCase` for config objects

## Testing

- Every exported function must have at least one passing test.
- Tests live in `test/<module>.test.ts` alongside their package.
- Cover the happy path, one error path, and any boundary conditions (empty input, invalid format).
- Do not mock internal implementation details — mock only external I/O (network, wallet adapters).
- Test files use `describe` blocks named after the function under test.

## Commits and PRs

- Commits follow imperative mood: `add retry logic`, `fix account validation regex`.
- PRs must pass lint, typecheck, build, test, and contracts:test before review.
- One logical change per PR. Documentation and code changes may be combined if directly related.

## Security Baseline

- No secrets, private keys, or mnemonics in source or test fixtures.
- RPC URLs must use HTTPS in production (`AppConfig` enforces this).
- Stellar account IDs accepted from external input must be validated with `validateAccountId` before use.
- Dependency additions require explicit justification in the PR description.
- Run `pnpm audit` before merging dependency updates.
