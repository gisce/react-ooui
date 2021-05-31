import React from "react";
import { Modal } from "antd";
import Form, { FormProps } from "@/widgets/views/Form";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";

type FormModalProps = FormProps & {
  visible: boolean;
  title?: string;
};

export const FormModal = (props: FormModalProps) => {
  const { visible, id, title = id ? "Detail" : "New", ...rest } = props;

  const { modalWidth } = useModalWidthDimensions();

  return (
    <Modal
      title={title}
      centered
      width={modalWidth}
      visible={visible}
      closable={false}
      footer={null}
    >
      <Form id={id} showFooter={true} {...rest} />
    </Modal>
  );
};
