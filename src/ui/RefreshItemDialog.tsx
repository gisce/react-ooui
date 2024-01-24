import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const showDialog = ({
  onOk,
  onCancel,
  t,
}: {
  onOk: () => void;
  onCancel?: () => void;
  t: (key: string) => string;
}) => {
  confirm({
    title: t("unsavedChanges"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: t("confirmRefreshWithoutSave"),
    okText: t("discardAndRefresh"),
    cancelText: t("cancel"),
    onOk,
    onCancel,
  });
};

export default showDialog;
