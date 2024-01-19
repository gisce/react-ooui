import { useConfigContext } from "@/context/ConfigContext";
import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useEffectOnceOnChange = (
  effectFn: EffectCallback,
  deps: DependencyList,
): void => {
  const lastInvocationTimeRef = useRef<number>(0);
  const isStrictModeRef = useRef<boolean | null>(null);
  const cleanupFunctionRef = useRef<ReturnType<EffectCallback>>();
  const debounceDelay = 100; // milliseconds
  const { devMode } = useConfigContext();

  useEffect(() => {
    if (!devMode) {
      const cleanupFunction = effectFn();
      return () => {
        if (cleanupFunction) {
          cleanupFunction();
        }
      };
    }

    if (isStrictModeRef.current === null) {
      // First render, set the flag to false
      isStrictModeRef.current = false;
      // Schedule a timeout to set the flag to true
      const timeoutId = setTimeout(() => {
        isStrictModeRef.current = true;
      }, debounceDelay);
      return () => {
        clearTimeout(timeoutId);
      };
    }

    const now = Date.now();
    if (
      isStrictModeRef.current &&
      now - lastInvocationTimeRef.current < debounceDelay
    ) {
      // Skip if the effect is called again too quickly (likely due to StrictMode)
      return;
    }

    lastInvocationTimeRef.current = now;
    if (cleanupFunctionRef.current) {
      cleanupFunctionRef.current();
    }
    cleanupFunctionRef.current = effectFn();

    return () => {
      if (cleanupFunctionRef.current) {
        cleanupFunctionRef.current();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
