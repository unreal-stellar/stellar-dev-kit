# Drips Wave Readiness

This repository is structured for contributor-focused ecosystem participation.

## Readiness Checklist

- [x] Contributor documentation and standards
- [x] Issue and PR templates
- [x] Reusable module boundaries
- [x] Runnable app starter
- [x] Soroban contract scaffold
- [x] All documentation files present and linked (ROADMAP, STANDARDS, SECURITY)
- [x] ESLint configuration with typescript-eslint
- [x] Vitest configs for all shared packages
- [x] Meaningful test coverage for hooks and ui packages
- [x] CI workflow publication (lint, typecheck, test, cargo test)
- [ ] Release automation (Changesets)
- [ ] Integration tests against public testnet RPC
- [ ] Wallet adapter implementations (Freighter, Albedo)
- [ ] npm package publication workflow

## Suggested Next Milestones

1. Implement Freighter and Albedo `AuthAdapter` in `@stellar-dev-kit/auth`.
2. Add integration tests against Stellar testnet RPC.
3. Publish package versioning and changelog workflow (Changesets).
