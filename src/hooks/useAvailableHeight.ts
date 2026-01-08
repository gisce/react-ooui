import React, { useState, useEffect, RefObject, useMemo } from "react";

export const useAvailableHeight = <T extends HTMLElement>({
  elementRef,
  offset = 0,
  dependencies = [],
  observedRefs = [],
}: {
  elementRef: RefObject<T>;
  offset?: number;
  dependencies?: React.DependencyList;
  observedRefs?: Array<RefObject<HTMLElement>>;
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

    // Set up ResizeObserver for elements that can affect the available height
    const resizeObservers: ResizeObserver[] = [];

    observedRefs.forEach((ref) => {
      if (ref.current) {
        const observer = new ResizeObserver(() => {
          updateHeight();
        });
        observer.observe(ref.current);
        resizeObservers.push(observer);
      }
    });

    return () => {
      window.removeEventListener("resize", updateHeight);
      resizeObservers.forEach((observer) => observer.disconnect());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementRef, ...dependencies]);

  const memoizedHeight = useMemo(() => availableHeight, [availableHeight]);

  return memoizedHeight - offset;
};
