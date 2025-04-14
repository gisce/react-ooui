import { App, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useCallback } from "react";

const { error } = Modal;

export const showErrorDialog = (message: string) => {
  error({
    title: "Error",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: message,
  });
};

export const showErrorExceptionDialog = (error: any) => {
  const messageContent = error.message
    ? JSON.stringify(error.message)
    : JSON.stringify(error);
  showErrorDialog(messageContent);
};

export const useShowErrorDialog = () => {
  const { modal } = App.useApp();
  return useCallback(
    (error: any) => {
      const messageContent = error.message
        ? JSON.stringify(error.message)
        : JSON.stringify(error);
      modal.error({
        title: "Error",
        icon: <ExclamationCircleOutlined />,
        centered: true,
        content: messageContent,
      });
    },
    [modal],
  );
};
