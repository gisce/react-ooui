import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Title } = Typography;

interface FloatingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export const FloatingDrawer: React.FC<FloatingDrawerProps> = ({
  isOpen,
  onClose,
  children,
  title,
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 16px",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          {title}
        </Title>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={onClose}
          aria-label="Close drawer"
        />
      </div>
      <div style={{ padding: 16 }}>{children}</div>
    </motion.div>
  );
};
