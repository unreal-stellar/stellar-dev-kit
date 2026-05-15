export type WalletProvider = "freighter" | "albedo" | "ledger";

export interface AuthSession {
  accountId: string;
  wallet: WalletProvider;
  issuedAt: number;
}

export interface AuthAdapter {
  provider: WalletProvider;
  connect(): Promise<{ accountId: string }>;
  signMessage(message: string): Promise<string>;
}

export function createSession(accountId: string, wallet: WalletProvider): AuthSession {
  return {
    accountId,
    wallet,
    issuedAt: Date.now()
  };
}

export function validateAccountId(accountId: string): boolean {
  return /^G[A-Z2-7]{55}$/.test(accountId);
}

export function requireValidSession(session: AuthSession): AuthSession {
  if (!validateAccountId(session.accountId)) {
    throw new Error("Invalid Stellar account ID");
  }

  return session;
}
