import { App, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useCallback } from "react";
import { Interweave } from "interweave";

const { error } = Modal;

export const showErrorDialog = (message: string) => {
  error({
    title: "Error",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: <Interweave content={message.replace(/\n/g, "<br />")} />,
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
        content: (
          <Interweave content={messageContent.replace(/\n/g, "<br />")} />
        ),
      });
    },
    [modal],
  );
};
