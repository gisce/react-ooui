import React, { useState, useEffect, useRef } from "react";
import ResizeObserver from "resize-observer-polyfill";
import debounce from "lodash.debounce";

interface Size {
  width: number;
  height: number;
}

interface Props {
  children: (size: Size) => React.ReactNode;
}

export const ResizeAwareComp: React.FC<Props> = ({ children }) => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleResize = debounce(() => {
    if (containerRef.current) {
      setSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, 100); // Debounce the resize event by 100 milliseconds

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver(handleResize);
      observer.observe(containerRef.current);

      // Initial size update
      handleResize();

      return () => {
        observer.disconnect();
        handleResize.cancel(); // Cancel any debounced calls on component unmount
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {children(size)}
    </div>
  );
};
