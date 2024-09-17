import { nanoid } from "nanoid";
import { useCallback, useEffect, useRef } from "react";

export const useNetworkRequest = (
  fn: (payload: any, requestConfig: any) => Promise<any>,
): [(payload: any) => Promise<any>, (requestId?: string) => void] => {
  const abortControllersRef = useRef<Map<string, AbortController>>(new Map());

  useEffect(() => {
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelRequest = useCallback((requestId?: string) => {
    if (requestId) {
      abortControllersRef.current.delete(requestId);
      if (process.env.NODE_ENV !== "development") {
        abortControllersRef.current.get(requestId)?.abort();
      }
    } else {
      if (process.env.NODE_ENV !== "development") {
        abortControllersRef.current.forEach((controller) => controller.abort());
      }
      abortControllersRef.current.clear();
    }
  }, []);

  const fetchData = useCallback(
    async (payload: any, manualRequestId?: string) => {
      const requestId = manualRequestId || nanoid();
      if (abortControllersRef.current.has(requestId)) {
        cancelRequest(requestId);
      }

      const abortController = new AbortController();
      abortControllersRef.current.set(requestId, abortController);

      try {
        return await fn(payload, {
          signal: abortController.signal,
        });
      } finally {
        abortControllersRef.current.delete(requestId);
      }
    },
    [cancelRequest, fn],
  );

  return [fetchData, cancelRequest];
};
