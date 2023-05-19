import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { parseError } from "@/helpers/errorHelper";

const { error, warning } = Modal;

const showDialog = (err: string) => {
  const { message, type, title } = parseError(err);

  const iconComponent =
    type === "error" ? <ExclamationCircleOutlined /> : <WarningOutlined />;

  const modalType = type === "error" ? error : warning;

  modalType({
    title,
    icon: iconComponent,
    centered: true,
    content: message,
  });
};

export default showDialog;
