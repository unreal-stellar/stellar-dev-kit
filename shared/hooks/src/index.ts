import { useCallback, useRef, useState } from "react";

export interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

export function useAsyncAction<T, Args extends unknown[]>(
  fn: (...args: Args) => Promise<T>,
) {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: false,
  });

  const run = useCallback(async (...args: Args) => {
    setState({ data: null, error: null, loading: true });
    try {
      const data = await fnRef.current(...args);
      setState({ data, error: null, loading: false });
      return data;
    } catch (error) {
      const normalized =
        error instanceof Error ? error : new Error("Unknown error");
      setState({ data: null, error: normalized, loading: false });
      throw normalized;
    }
  }, []);

  return { ...state, run };
}
