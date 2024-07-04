import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  confirmMessage,
  okText,
  cancelText,
  t,
}: {
  onOk: () => void;
  confirmMessage: string;
  okText?: string;
  cancelText?: string;
  t: (key: string) => string;
}) => {
  confirm({
    title: t("confirmation"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: confirmMessage,
    okText: okText || t("ok"),
    cancelText: cancelText || t("cancel"),
    onOk,
  });
};

export default showDialog;
