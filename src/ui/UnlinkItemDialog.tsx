import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const showDialog = ({ onOk }: { onOk: () => void }) => {
  confirm({
    title: "Unlink item/s",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: "Are you sure you want to unlink the selected item/s?",
    okText: "Yes, unlink",
    onOk,
  });
};

export default showDialog;
