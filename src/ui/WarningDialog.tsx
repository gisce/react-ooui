import React from "react";
import { Modal } from "antd";
import { WarningOutlined } from "@ant-design/icons";

const { warning } = Modal;

const showDialog = (title: string, message: string, onOk?: () => void) => {
  warning({
    title,
    icon: <WarningOutlined />,
    centered: true,
    content: message,
    onOk,
  });
};

export default showDialog;
