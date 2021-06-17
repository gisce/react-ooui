import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { error } = Modal;

const showDialog = (message: string) => {
  error({
    title: "Error",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: message,
  });
};

export default showDialog;
