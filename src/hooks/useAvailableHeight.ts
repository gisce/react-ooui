import React, { useState, useEffect, RefObject, useMemo } from "react";

export const useAvailableHeight = <T extends HTMLElement>({
  elementRef,
  offset = 0,
  dependencies = [],
}: {
  elementRef: RefObject<T>;
  offset?: number;
  dependencies?: React.DependencyList;
}): number => {
  const [availableHeight, setAvailableHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      if (elementRef.current) {
        const windowHeight = window.innerHeight;
        const boundingRect = elementRef.current.getBoundingClientRect();
        const availableHeight = windowHeight - boundingRect.top;
        setAvailableHeight(availableHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, ...dependencies]);

  const memoizedHeight = useMemo(() => availableHeight, [availableHeight]);

  return memoizedHeight - offset;
};
