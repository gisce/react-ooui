import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { error } = Modal;

const showDialog = () => {
  error({
    title: "Form has errors",
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: "Please fill all the required fields",
  });
};

export default showDialog;
