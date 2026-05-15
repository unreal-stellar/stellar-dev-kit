import { describe, expect, it } from "vitest";
import { buttonClass, renderButton } from "../src/index";

describe("buttonClass", () => {
  it("includes the variant class for primary", () => {
    expect(buttonClass("primary")).toContain("sdk-btn-primary");
  });

  it("includes the variant class for secondary", () => {
    expect(buttonClass("secondary")).toContain("sdk-btn-secondary");
  });

  it("includes the variant class for danger", () => {
    expect(buttonClass("danger")).toContain("sdk-btn-danger");
  });

  it("defaults to primary when no variant is given", () => {
    expect(buttonClass()).toContain("sdk-btn-primary");
  });

  it("appends sdk-btn-disabled when disabled is true", () => {
    expect(buttonClass("primary", true)).toContain("sdk-btn-disabled");
  });

  it("does not include sdk-btn-disabled when disabled is false", () => {
    expect(buttonClass("primary", false)).not.toContain("sdk-btn-disabled");
  });

  it("always includes the base sdk-btn class", () => {
    expect(buttonClass("secondary", true)).toContain("sdk-btn");
  });
});

describe("renderButton", () => {
  it("includes the label in the output", () => {
    expect(renderButton({ label: "Connect" })).toContain("Connect");
  });

  it("sets the disabled attribute when disabled is true", () => {
    expect(renderButton({ label: "X", disabled: true })).toContain("disabled");
  });

  it("does not include disabled attribute when disabled is false", () => {
    const html = renderButton({ label: "X", disabled: false });
    expect(html).not.toMatch(/\bdisabled\b/);
  });

  it("applies the correct variant class", () => {
    expect(renderButton({ label: "X", variant: "danger" })).toContain("sdk-btn-danger");
  });

  it("wraps output in a button element", () => {
    const html = renderButton({ label: "Y" });
    expect(html).toMatch(/^<button /);
    expect(html).toContain("</button>");
  });
});
