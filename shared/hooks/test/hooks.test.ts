import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useAsyncAction } from "../src/index";

describe("useAsyncAction", () => {
  it("starts with idle state", () => {
    const { result } = renderHook(() =>
      useAsyncAction(async () => "value"),
    );
    expect(result.current.data).toBeNull();
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it("sets loading true while the async function is pending", async () => {
    let resolve!: (v: string) => void;
    const fn = () => new Promise<string>((r) => { resolve = r; });
    const { result } = renderHook(() => useAsyncAction(fn));

    act(() => { result.current.run(); });
    expect(result.current.loading).toBe(true);

    await act(async () => { resolve("done"); });
    expect(result.current.loading).toBe(false);
  });

  it("stores resolved data on success", async () => {
    const fn = vi.fn().mockResolvedValue(42);
    const { result } = renderHook(() => useAsyncAction(fn));

    await act(async () => { await result.current.run(); });

    expect(result.current.data).toBe(42);
    expect(result.current.error).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  it("stores a normalized Error on rejection", async () => {
    const fn = vi.fn().mockRejectedValue(new Error("boom"));
    const { result } = renderHook(() => useAsyncAction(fn));

    await act(async () => {
      await result.current.run().catch(() => {});
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe("boom");
    expect(result.current.data).toBeNull();
  });

  it("wraps a non-Error rejection in an Error", async () => {
    const fn = vi.fn().mockRejectedValue("raw string");
    const { result } = renderHook(() => useAsyncAction(fn));

    await act(async () => {
      await result.current.run().catch(() => {});
    });

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe("Unknown error");
  });

  it("passes arguments through to the wrapped function", async () => {
    const fn = vi.fn().mockImplementation(async (a: number, b: number) => a + b);
    const { result } = renderHook(() => useAsyncAction(fn));

    const returnValue = await act(async () => result.current.run(3, 4));

    expect(fn).toHaveBeenCalledWith(3, 4);
    expect(returnValue).toBe(7);
  });

  it("resets data and error on each new run", async () => {
    const fn = vi.fn()
      .mockResolvedValueOnce("first")
      .mockRejectedValueOnce(new Error("second"));

    const { result } = renderHook(() => useAsyncAction(fn));

    await act(async () => { await result.current.run(); });
    expect(result.current.data).toBe("first");

    await act(async () => { await result.current.run().catch(() => {}); });
    expect(result.current.data).toBeNull();
    expect(result.current.error?.message).toBe("second");
  });
});
