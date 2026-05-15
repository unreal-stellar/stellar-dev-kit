import { describe, expect, it } from "vitest";
import { loadConfig } from "../src/index";

describe("config", () => {
  it("loads defaults", () => {
    const config = loadConfig({});
    expect(config.network).toBe("TESTNET");
  });

  it("rejects insecure rpc urls", () => {
    expect(() =>
      loadConfig({ SOROBAN_RPC_URL: "http://example.com" }),
    ).toThrow();
  });

  it("rejects invalid network values", () => {
    expect(() => loadConfig({ STELLAR_NETWORK: "MAINNET" })).toThrow();
  });
});
