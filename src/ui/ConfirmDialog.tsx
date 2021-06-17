import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  confirmMessage,
}: {
  onOk: () => void;
  confirmMessage: string;
}) => {
  confirm({
    title: "Confirmation",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: confirmMessage,
    okText: "OK",
    onOk,
  });
};

export default showDialog;
