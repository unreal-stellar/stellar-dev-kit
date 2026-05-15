import { describe, expect, it } from "vitest";
import { useAsyncAction } from "../src/index";

describe("useAsyncAction", () => {
  it("exports useAsyncAction as a function", () => {
    expect(typeof useAsyncAction).toBe("function");
  });
});
