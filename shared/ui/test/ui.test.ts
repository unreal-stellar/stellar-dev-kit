import { describe, expect, it } from "vitest";
import { buttonClass } from "../src/index";

describe("ui", () => {
  it("returns classes", () => {
    expect(buttonClass("secondary")).toContain("secondary");
  });
});
