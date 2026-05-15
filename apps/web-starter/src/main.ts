import { createSession, validateAccountId } from "@stellar-dev-kit/auth";
import { loadConfig } from "@stellar-dev-kit/config";
import { renderButton } from "@stellar-dev-kit/ui";
import { formatAddress } from "@stellar-dev-kit/utils";

export interface StarterPreview {
  network: string;
  accountPreview: string;
  ctaButton: string;
}

export function buildStarterPreview(
  accountId: string,
  env: Record<string, string | undefined> = {},
): StarterPreview {
  if (!validateAccountId(accountId)) {
    throw new Error("Starter preview requires a valid Stellar account ID");
  }

  const session = createSession(accountId, "freighter");
  const config = loadConfig(env);

  return {
    network: config.network,
    accountPreview: formatAddress(session.accountId),
    ctaButton: renderButton({ label: "Connect Wallet", variant: "primary" }),
  };
}

if (process.env.NODE_ENV !== "test") {
  const sample = buildStarterPreview(
    "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF",
    process.env as Record<string, string | undefined>,
  );
  console.log(sample);
}
