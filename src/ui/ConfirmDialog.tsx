import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  confirmMessage,
  lang
}: {
  onOk: () => void;
  confirmMessage: string;
  lang: string;
}) => {
  confirm({
    title: tForLang("confirmation", lang),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: confirmMessage,
    okText: tForLang("ok", lang),
    cancelText: tForLang("cancel", lang),
    onOk,
  });
};

export default showDialog;
