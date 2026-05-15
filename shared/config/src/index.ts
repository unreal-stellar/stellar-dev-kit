export type NetworkPassphrase = "PUBLIC" | "TESTNET" | "FUTURENET";

const VALID_NETWORKS: NetworkPassphrase[] = ["PUBLIC", "TESTNET", "FUTURENET"];

export interface AppConfig {
  network: NetworkPassphrase;
  rpcUrl: string;
}

export function loadConfig(env: Record<string, string | undefined>): AppConfig {
  const rawNetwork = env.STELLAR_NETWORK ?? "TESTNET";

  if (!VALID_NETWORKS.includes(rawNetwork as NetworkPassphrase)) {
    throw new Error(
      `STELLAR_NETWORK must be one of ${VALID_NETWORKS.join(", ")}`,
    );
  }

  const network = rawNetwork as NetworkPassphrase;
  const rpcUrl = env.SOROBAN_RPC_URL ?? "https://soroban-testnet.stellar.org";

  if (!rpcUrl.startsWith("https://")) {
    throw new Error("SOROBAN_RPC_URL must be https");
  }

  return {
    network,
    rpcUrl,
  };
}
