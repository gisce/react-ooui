import { useState, useEffect } from "react";

const MODAL_WIDTH_CONSTANT = 0.7;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    modalWidth: windowDimensions.width * MODAL_WIDTH_CONSTANT,
    modalHeight: windowDimensions.height,
    width: windowDimensions.width,
    height: windowDimensions.height,
  };
}
