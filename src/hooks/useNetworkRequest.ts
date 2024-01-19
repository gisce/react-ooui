import { nanoid } from "nanoid";
import { useCallback, useEffect, useRef } from "react";

export const useNetworkRequest = (
  fn: (payload: any, requestConfig: any) => Promise<any>,
): [(payload: any) => Promise<any>, (requestId?: string) => void] => {
  const abortControllersRef = useRef<Map<string, AbortController>>(new Map());
  const isMountedRef = useRef(false);

  useEffect(() => {
    return () => {
      cancelRequest();
    };
  }, []);

  const fetchData = useCallback(
    async (payload: any, manualRequestId?: string) => {
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
