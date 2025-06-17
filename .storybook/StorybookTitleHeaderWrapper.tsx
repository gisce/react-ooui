import React, { useEffect, useRef } from "react";

export const StorybookTitleHeaderWrapper: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Override any sticky positioning in TitleHeader components
    const overrideStickyPositioning = () => {
      if (containerRef.current) {
        const stickyElements = containerRef.current.querySelectorAll(
          'div[style*="position: sticky"]',
        );
        stickyElements.forEach((element) => {
          const htmlElement = element as HTMLElement;
          if (htmlElement.style.position === "sticky") {
            htmlElement.style.position = "static";
            htmlElement.style.top = "auto";
          }
        });
      }
    };

    // Run immediately
    overrideStickyPositioning();

    // Also run after a short delay to catch any dynamically created elements
    const timer = setTimeout(overrideStickyPositioning, 100);

    // Set up a mutation observer to catch any future changes
    const observer = new MutationObserver(overrideStickyPositioning);
    if (containerRef.current) {
      observer.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style"],
      });
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};
