import { Modal } from "antd";
import { ExclamationCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { parseError } from "@/helpers/errorHelper";
import { Interweave } from "interweave";

const { error, warning } = Modal;

const showDialog = (err: any) => {
  const { message, type, title } = parseError(err);

  const iconComponent =
    type === "error" ? <ExclamationCircleOutlined /> : <WarningOutlined />;

  const modalType = type === "error" ? error : warning;

  modalType({
    title,
    icon: iconComponent,
    centered: true,
    content: <Interweave content={message.replace(/\n/g, "<br />")} />,
  });
};

export default showDialog;
