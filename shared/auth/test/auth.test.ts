import { describe, expect, it } from "vitest";
import { createSession, validateAccountId } from "../src/index";

describe("auth", () => {
  it("creates a session", () => {
    const session = createSession("GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWHF", "freighter");
    expect(session.wallet).toBe("freighter");
  });

  it("validates account IDs", () => {
    expect(validateAccountId("bad")).toBe(false);
  });
});
