import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Button, Layout, theme } from "antd";
import { CloseOutlined } from "@ant-design/icons";

const { useToken } = theme;
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
  const drawerRef = useRef<HTMLDivElement>(null);
  const { token } = useToken();

  const handleOverlayClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();
      onClose();
    },
    [onClose],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      setShowDrawer(true);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKeyDown]);

  const handleAnimationComplete = () => {
    if (!isOpen) {
      setShowDrawer(false);
    }
  };

  if (!showDrawer) return null;

  const headerFooterStyle: React.CSSProperties = {
    height: "64px", // Fixed height for header and footer
    display: "flex",
    alignItems: "center", // Vertically center content
    background: token.colorPrimaryBg,
    padding: "0 16px",
    borderBottom: "1px solid #f0f0f0",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
            }}
            onClick={handleOverlayClick}
          />
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
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
            <Header style={headerFooterStyle}>
              <Title level={3} style={{ margin: 0, flex: 1 }}>
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
                padding: "8px",
              }}
            >
              {children}
            </Content>
            {footer && (
              <Footer
                style={{
                  ...headerFooterStyle,
                  borderTop: "1px solid #f0f0f0",
                  borderBottom: "none",
                  height: "72px",
                }}
              >
                {footer}
              </Footer>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
