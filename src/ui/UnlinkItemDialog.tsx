import { ExclamationCircleOutlined } from "@ant-design/icons";
import { asyncConfirm } from "./asyncConfirm";

export const showUnlinkItemDialog = ({
  t,
  onOk,
}: {
  onOk: () => Promise<void>;
  t: (key: string) => string;
}) => {
  asyncConfirm({
    title: t("unlinkItems"),
    icon: <ExclamationCircleOutlined />,
    centered: true,
    content: t("confirmUnlink"),
    okText: t("yesConfirmUnlink"),
    onOk,
    cancelText: t("cancel"),
  });
};
