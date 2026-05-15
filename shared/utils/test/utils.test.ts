import { describe, expect, it } from "vitest";
import { formatAddress, retry } from "../src/index";

const VALID_ADDRESS =
  "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF";

describe("utils", () => {
  it("shortens a full Stellar address", () => {
    expect(formatAddress(VALID_ADDRESS)).toBe("GAAAAA...AWHF");
  });

  it("retry resolves on first success", async () => {
    const result = await retry(() => Promise.resolve(42), {
      retries: 2,
      delayMs: 0,
    });
    expect(result).toBe(42);
  });

  it("retry throws after exhausting retries", async () => {
    await expect(
      retry(() => Promise.reject(new Error("fail")), {
        retries: 1,
        delayMs: 0,
      }),
    ).rejects.toThrow("fail");
  });
});
