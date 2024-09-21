import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface FloatingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const FloatingDrawer: React.FC<FloatingDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const [showDrawer, setShowDrawer] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowDrawer(true);
    }
  }, [isOpen]);

  const handleAnimationComplete = () => {
    if (!isOpen) {
      setShowDrawer(false);
    }
  };

  if (!showDrawer) return null;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onAnimationComplete={handleAnimationComplete}
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        width: "300px",
        backgroundColor: "white",
        boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        overflowY: "auto",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        &times;
      </button>
      <div style={{ marginTop: "30px", padding: 10 }}>{children}</div>
    </motion.div>
  );
};
