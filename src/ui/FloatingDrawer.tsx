import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typography, Button, Layout } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

interface FloatingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
}

export const FloatingDrawer: React.FC<FloatingDrawerProps> = ({
  isOpen,
  onClose,
  children,
  title,
  footer,
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
        width: "500px",
        backgroundColor: "white",
        boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header
        style={{
          background: "#fff",
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Title level={3} style={{ margin: 0, paddingLeft: 10 }}>
          {title}
        </Title>
        <Button
          type="text"
          icon={<CloseOutlined />}
          onClick={onClose}
          aria-label="Close"
        />
      </Header>
      <Content
        style={{
          flex: 1,
          overflowY: "auto",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        {children}
      </Content>
      {footer && (
        <Footer
          style={{
            padding: "10px 10px",
            background: "#fff",
            borderTop: "1px solid #f0f0f0",
          }}
        >
          {footer}
        </Footer>
      )}
    </motion.div>
  );
};
