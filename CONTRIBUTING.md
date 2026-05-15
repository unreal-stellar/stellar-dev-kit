# Contributing Guide

Thank you for contributing to Stellar Dev Kit.

## Prerequisites

- Node.js >= 20
- pnpm >= 9
- Docker
- Rust (for contracts)

## Principles

- Build for maintainability first, then convenience.
- Keep modules reusable across projects.
- Prefer explicit types and predictable APIs.
- Add or update tests for behavior changes.
- Document non-obvious architectural decisions.

## Getting Started

```bash
git clone https://github.com/org/stellar-dev-kit.git
cd stellar-dev-kit
pnpm install
pnpm run build
pnpm run test
```

## Branch and PR Workflow

- Create a branch from `main` with a descriptive name.
- Keep PRs focused; separate refactors from features.
- Link issues and describe user-facing impact.
- Ensure lint, typecheck, build, and test scripts pass locally.

## Commit Guidance

- Use small, scoped commits.
- Prefer clear imperative messages.
- Include context in commit body when changing architecture.

## Review Expectations

- Review for correctness, security, and maintainability.
- Request changes when API contracts are ambiguous.
- Block merges if required checks fail.

## First Contribution Path

1. Pick an issue labeled `good first issue` or `onboarding`.
2. Confirm scope in issue comments.
3. Open a draft PR early.
4. Iterate with maintainer feedback.

## Need Help?

Open a discussion or issue with the template that matches your request.