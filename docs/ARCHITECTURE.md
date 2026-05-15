# Architecture Overview

Stellar Dev Kit is organized around reusable modules and runnable examples.

## Layering

1. Shared packages provide reusable primitives.
2. Apps consume shared packages to demonstrate end-user flows.
3. Contracts provide Soroban examples and deployment-ready patterns.

## Current Baseline

- Shared module interfaces are typed and tested.
- App starter demonstrates cross-module consumption.
- Counter contract provides a minimal, testable Soroban baseline.

## Scaling Path

- add wallet adapters and advanced auth flows,
- add richer frontend components and data hooks,
- add deployment manager and contract tooling workflows.
