import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const showDialog = ({ onOk }: { onOk: () => void }) => {
  confirm({
    title: "Remove item",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: "Are you sure you want to remove this item?",
    okText: "Yes, remove it",
    onOk,
  });
};

export default showDialog;
