import { ExclamationCircleOutlined } from "@ant-design/icons";
import { asyncConfirm } from "./asyncConfirm";

export const showRemoveItemDialog = ({
  t,
  onOk,
}: {
  onOk: () => Promise<void>;
  t: (key: string) => string;
}) => {
  asyncConfirm({
    title: t("removeItems"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: t("confirmRemove"),
    okText: t("yesConfirmRemove"),
    cancelText: t("cancel"),
    onOk,
  });
};
