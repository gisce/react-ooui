import { useEffect, useRef } from "react";

/**
 * A hook that stores a callback in a ref to prevent unnecessary rerenders.
 * Useful when passing callbacks to child components that don't need to rerender when the callback changes.
 *
 * @param callback The callback function to store in the ref
 * @returns A stable callback that won't cause rerenders when it changes
 */
export const useCallbackRef = <T extends (...args: any[]) => any>(
  callback: T | undefined,
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useRef(((...args: Parameters<T>) => {
    return callbackRef.current?.(...args);
  }) as T).current;
};
