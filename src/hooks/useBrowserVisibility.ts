import { useState, useEffect } from "react";

export const useBrowserVisibility = (): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = (): void => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return (): void => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return isVisible;
};
