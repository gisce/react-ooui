import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { error } = Modal;

const showDialog = (t: (key: string) => string) => {
  error({
    title: t("formHasErrors"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: t("fillRequiredFields"),
  });
};

export default showDialog;
