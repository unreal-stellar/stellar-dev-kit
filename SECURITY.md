# Security Policy

## Supported Versions

Only the latest release on the `main` branch receives security fixes.
Older versions are not backported.

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

Report vulnerabilities by emailing the maintainers directly. Include:

- A clear description of the vulnerability and its impact
- Steps to reproduce (proof-of-concept code if applicable)
- The package(s) and version(s) affected
- Any suggested mitigations you are aware of

You will receive an acknowledgement within 3 business days.

## Disclosure Timeline

| Stage | Target |
| --- | --- |
| Acknowledgement | 3 business days after report |
| Triage and severity assessment | 7 business days |
| Fix and internal review | 14 business days (critical), 30 days (moderate) |
| Public disclosure | After fix is released |

If a fix cannot be shipped within the target window, we will notify the reporter and agree on a revised timeline.

## Scope

The following are in scope:

- All packages under `shared/` (`auth`, `config`, `hooks`, `ui`, `utils`)
- The `apps/web-starter` application
- The `contracts/counter` Soroban contract

The following are out of scope:

- Vulnerabilities in dependencies not introduced by this project
- Findings from automated scanners without a demonstrated exploit path
- Social engineering, phishing, or physical attacks

## Security Practices

- All RPC URLs are validated to require HTTPS at runtime (`AppConfig`).
- Stellar account IDs are validated by regex before use (`validateAccountId`).
- No secrets or private keys are present in source code or test fixtures.
- Dependencies are audited with `pnpm audit` before each release.
