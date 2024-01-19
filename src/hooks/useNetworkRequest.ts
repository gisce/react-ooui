import { nanoid } from "nanoid";
import { useCallback, useEffect, useRef } from "react";
import { useEffectOnceOnChange } from "./useEffectOnceOnChange";

export const useNetworkRequest = (
  fn: (payload: any, requestConfig: any) => Promise<any>,
): [(payload: any) => Promise<any>, (requestId?: string) => void] => {
  const abortControllersRef = useRef<Map<string, AbortController>>(new Map());
  const isMountedRef = useRef(false);

  useEffectOnceOnChange(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      cancelRequest();
    };
  }, []);

  const fetchData = useCallback(
    async (payload: any, manualRequestId?: string) => {
      if (!isMountedRef.current) {
        return Promise.reject(new Error("Component is not mounted"));
      }

      const requestId = manualRequestId || nanoid();
      if (abortControllersRef.current.has(requestId)) {
        abortControllersRef.current.get(requestId)?.abort();
      }
      const abortController = new AbortController();
      abortControllersRef.current.set(requestId, abortController);

      try {
        return await fn(payload, {
          signal: abortController.signal,
        });
      } finally {
        if (isMountedRef.current) {
          abortControllersRef.current.delete(requestId);
        }
      }
    },
    [fn],
  );

  const cancelRequest = useCallback((requestId?: string) => {
    if (requestId) {
      abortControllersRef.current.get(requestId)?.abort();
      abortControllersRef.current.delete(requestId);
    } else {
      abortControllersRef.current.forEach((controller) => controller.abort());
      abortControllersRef.current.clear();
    }
  }, []);

  return [fetchData, cancelRequest];
};
