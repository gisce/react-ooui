import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { error } = Modal;

const showDialog = (err: string) => {
  const splitted = err.split("\n\n");
  const message = splitted[1];
  const args = splitted[0].split(" ");
  const type = args[0];
  const title = args[2];

  error({
    title: "Error",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: message,
  });
};

export default showDialog;
