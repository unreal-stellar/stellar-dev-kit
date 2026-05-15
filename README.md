# Stellar Dev Kit

Stellar Dev Kit is a contributor-first pnpm monorepo for building production-ready [Stellar](https://stellar.org) and [Soroban](https://soroban.stellar.org) applications. It provides a curated set of reusable TypeScript packages, a wired-up starter app, and a Soroban smart contract example — all in a single, consistently typed and tested workspace.

It is designed for:

- teams who want a pre-wired starting point for Stellar frontend and contract work,
- first-time Stellar contributors who need clear examples and onboarding paths,
- open-source maintainers who want ecosystem-quality standards out of the box.

## What's Inside

### Shared packages (`shared/`)

| Package | Description |
| --- | --- |
| `@stellar-dev-kit/auth` | Wallet session types, Stellar account ID validation, and the `AuthAdapter` interface for Freighter, Albedo, and Ledger |
| `@stellar-dev-kit/config` | Environment-driven `AppConfig` loader with validated network passphrase and HTTPS-enforced RPC URL |
| `@stellar-dev-kit/hooks` | `useAsyncAction` React hook — wraps any async function with `data`, `error`, and `loading` state |
| `@stellar-dev-kit/ui` | Headless button class helpers and `renderButton` primitive for bootstrapping SDK-based interfaces |
| `@stellar-dev-kit/utils` | `retry(fn, options)` with configurable attempts and delay; `formatAddress` for truncating Stellar addresses |

### Apps (`apps/`)

| App | Description |
| --- | --- |
| `web-starter` | Assembles all shared packages into a wallet-connected preview flow — validates an account, loads config, and renders a connect-wallet button |

### Contracts (`contracts/`)

| Contract | Description |
| --- | --- |
| `counter` | Minimal Soroban (Rust) smart contract with persistent counter storage, increment logic, and on-chain event emission |

## Project Structure

```text
stellar-dev-kit/
├── apps/
│   └── web-starter/          # Starter app consuming all shared packages
│       ├── src/main.ts
│       ├── test/main.test.ts
│       ├── tsconfig.json
│       └── vitest.config.ts
├── contracts/
│   ├── README.md
│   └── counter/              # Soroban counter contract (Rust)
│       ├── Cargo.toml
│       └── src/lib.rs
├── docs/
│   ├── ARCHITECTURE.md       # Layering decisions and scaling path
│   └── DRIPS_WAVE_READINESS.md
├── shared/
│   ├── auth/                 # @stellar-dev-kit/auth
│   ├── config/               # @stellar-dev-kit/config
│   ├── hooks/                # @stellar-dev-kit/hooks
│   ├── ui/                   # @stellar-dev-kit/ui
│   └── utils/                # @stellar-dev-kit/utils
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── CONTRIBUTING.md
├── ROADMAP.md
├── STANDARDS.md
└── SECURITY.md
```

## Quick Start

**Prerequisites:** Node.js >= 20, pnpm >= 9, Rust (for contracts)

```bash
git clone https://github.com/org/stellar-dev-kit.git
cd stellar-dev-kit
pnpm install
pnpm run build
pnpm run test
```

To run only the Soroban contract tests:

```bash
pnpm run contracts:test
```

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm run build` | Compile all TypeScript packages |
| `pnpm run test` | Run Vitest suites across all packages |
| `pnpm run typecheck` | Type-check all packages without emitting |
| `pnpm run lint` | Lint all packages |
| `pnpm run contracts:test` | Run Rust tests for the counter contract |

## Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md) — contributor workflow, branch strategy, and review expectations
- [STANDARDS.md](STANDARDS.md) — coding principles, TypeScript rules, and security baseline
- [ROADMAP.md](ROADMAP.md) — phased delivery targets
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — layering decisions and scaling path

## Contributing

We welcome first-time contributors and ecosystem maintainers alike.
Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or PR.

## License

See [LICENSE.md](LICENSE.md).
