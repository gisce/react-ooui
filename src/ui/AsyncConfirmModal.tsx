import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Modal } from "antd";
import { ConfirmConfig } from "./asyncConfirm";

export const AsyncConfirmModal: React.FC<ConfirmConfig> = ({
  title,
  content,
  onOk,
  icon,
  okText,
  cancelText,
  centered,
}) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleOk = async () => {
    setConfirmLoading(true);
    try {
      await onOk();
    } finally {
      setConfirmLoading(false);
      closeModal();
    }
  };

  const handleCancel = () => {
    closeModal();
  };

  const closeModal = () => {
    setVisible(false);
    const container = document.querySelector("#confirm-modal-container");
    if (container) {
      const root = createRoot(container); // Create a root.
      root.unmount(); // Unmount the component.
      container.remove(); // Remove the container from the DOM.
    }
  };

  const modalTitle = (
    <span>
      {icon && <span style={{ marginRight: 8 }}>{icon}</span>}
      {title}
    </span>
  );

  return (
    <Modal
      title={modalTitle}
      open={visible}
      centered={centered || false}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
      okText={okText}
      cancelText={cancelText}
    >
      {content}
    </Modal>
  );
};
