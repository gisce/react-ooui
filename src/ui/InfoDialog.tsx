import { Modal } from "antd";

const { info } = Modal;

const showDialog = (content: any) => {
  info({
    title: "",
    centered: true,
    content,
  });
};

export default showDialog;
