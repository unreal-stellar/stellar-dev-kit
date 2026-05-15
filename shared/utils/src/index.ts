export interface RetryOptions {
  retries: number;
  delayMs: number;
}

export async function retry<T>(fn: () => Promise<T>, options: RetryOptions): Promise<T> {
  let error: unknown;

  for (let index = 0; index <= options.retries; index += 1) {
    try {
      return await fn();
    } catch (caught) {
      error = caught;
      if (index < options.retries) {
        await new Promise((resolve) => setTimeout(resolve, options.delayMs));
      }
    }
  }

  throw error;
}

export function formatAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}
