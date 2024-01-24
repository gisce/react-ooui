import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  t,
}: {
  onOk: () => void;
  t: (key: string) => string;
}) => {
  confirm({
    title: t("unlinkItems"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: t("confirmUnlink"),
    okText: t("yesConfirmUnlink"),
    onOk,
    cancelText: t("cancel"),
  });
};

export default showDialog;
