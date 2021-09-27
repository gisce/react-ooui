import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { tForLang } from "@/context/LocaleContext";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  onCancel,
  lang,
}: {
  onOk: () => void;
  onCancel?: () => void;
  lang: string;
}) => {
  confirm({
    title: tForLang("unsavedChanges", lang),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: tForLang("confirmRefreshWithoutSave", lang),
    okText: tForLang("discardAndRefresh", lang),
    cancelText: tForLang("cancel", lang),
    onOk,
    onCancel,
  });
};

export default showDialog;
