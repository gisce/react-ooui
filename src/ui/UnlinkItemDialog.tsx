import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";

const { confirm } = Modal;

const showDialog = ({ onOk, lang }: { onOk: () => void; lang: string }) => {
  confirm({
    title: tForLang("unlinkItems", lang),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: tForLang("confirmUnlink", lang),
    okText: tForLang("yesConfirmUnlink", lang),
    onOk,
    cancelText: tForLang("cancel", lang),
  });
};

export default showDialog;
