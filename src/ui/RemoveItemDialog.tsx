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
    title: t("removeItems"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: t("confirmRemove"),
    okText: t("yesConfirmRemove"),
    onOk,
    cancelText: t("cancel"),
  });
};

export default showDialog;
