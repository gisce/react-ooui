import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

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
