import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined, WarningOutlined } from "@ant-design/icons";

const { error, warning } = Modal;

const showDialog = (err: string) => {
  let message;
  let type;
  let title;

  if (err.indexOf(" -- ") !== -1 && err.indexOf("\n\n") !== -1) {
    const splitted = err.split("\n\n");
    message = splitted[1];
    const args = splitted[0].split(" ");
    type = args[0];
    title = args[2];
  } else {
    message = err;
    type = "error";
    title = "Error";
  }

  const icon =
    type === "error" ? <ExclamationCircleOutlined /> : <WarningOutlined />;

  const modalType = type === "error" ? error : warning;

  modalType({
    title,
    icon,
    centered: true,
    content: message,
  });
};

export default showDialog;
