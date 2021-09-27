import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";

const { error } = Modal;

const showDialog = (lang: string) => {
  error({
    title: tForLang("formHasErrors", lang),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: tForLang("fillRequiredFields", lang),
  });
};

export default showDialog;
