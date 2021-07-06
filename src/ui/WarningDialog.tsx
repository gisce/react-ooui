import React from "react";
import { Modal } from "antd";
import { WarningOutlined } from "@ant-design/icons";

const { warning } = Modal;

const showDialog = (title: string, message: string) => {
  warning({
    title,
    icon: <WarningOutlined />,
    centered: true,
    content: message,
  });
};

export default showDialog;
