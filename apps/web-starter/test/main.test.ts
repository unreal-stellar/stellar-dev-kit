import { describe, expect, it } from "vitest";
import { buildStarterPreview } from "../src/main";

const VALID_ACCOUNT =
  "GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF";

describe("web-starter", () => {
  it("builds starter preview with injected env", () => {
    const preview = buildStarterPreview(VALID_ACCOUNT, {});
    expect(preview.network).toBe("TESTNET");
  });

  it("rejects invalid account ID", () => {
    expect(() => buildStarterPreview("bad-id", {})).toThrow();
  });
});
