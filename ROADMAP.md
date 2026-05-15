# Roadmap

This document tracks the phased delivery targets for Stellar Dev Kit.

## Phase 1 — Foundation (current)

Goal: establish a stable, contributor-ready monorepo baseline.

- [x] Monorepo setup with pnpm workspaces
- [x] Shared packages: `auth`, `config`, `hooks`, `ui`, `utils`
- [x] Web starter app wiring all packages together
- [x] Soroban counter contract scaffold
- [x] Contributor documentation and issue/PR templates
- [x] TypeScript strict mode across all packages
- [ ] ESLint configuration
- [ ] GitHub Actions CI (lint, typecheck, test, cargo test)
- [ ] All documentation files present and linked

## Phase 2 — Integration (next)

Goal: connect to real Stellar infrastructure and validate end-to-end flows.

- [ ] Freighter wallet adapter implementing `AuthAdapter`
- [ ] Albedo wallet adapter implementing `AuthAdapter`
- [ ] Integration tests against Stellar testnet RPC
- [ ] `useAsyncAction` tested with real async wallet flows
- [ ] `AppConfig` validated against live network passphrases
- [ ] Expanded counter contract: reset, owner-gated increment

## Phase 3 — Release Readiness

Goal: publishable packages and reproducible contributor onboarding.

- [ ] Semantic versioning and changelog automation (Changesets)
- [ ] npm package publication workflow
- [ ] Storybook or equivalent for `@stellar-dev-kit/ui` components
- [ ] Contract deployment script to testnet via Soroban CLI
- [ ] Pinned dependency audit and security scan in CI

## Phase 4 — Ecosystem Quality

Goal: production-grade standards for long-term maintenance.

- [ ] Mainnet-validated RPC configuration and passphrase enforcement
- [ ] Contract upgrade path and migration documentation
- [ ] Performance benchmarks for retry and formatAddress utilities
- [ ] Accessibility audit for rendered button primitives
- [ ] Contributor leaderboard and issue triage automation
