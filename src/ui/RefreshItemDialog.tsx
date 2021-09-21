import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  onCancel,
}: {
  onOk: () => void;
  onCancel?: () => void;
}) => {
  confirm({
    title: "There are unsaved changes",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: "Do you really want to refresh this window without saving?",
    okText: "Discard changes and refresh",
    onOk,
    onCancel,
  });
};

export default showDialog;
