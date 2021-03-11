import React from "react";
import { Modal } from "antd";
import Form from "@/widgets/views/Form";

type FormModalProps = {
  visible: boolean;
  model: string;
  id?: number;
  onCancel?: () => void;
  onSubmitSucceed?: (updatedObject: any) => void;
  title?: string;
};

export const FormModal = (props: FormModalProps) => {
  const {
    visible,
    onCancel,
    onSubmitSucceed,
    id,
    model,
    title = id ? "Detail" : "New",
  } = props;

  return (
    <Modal
      title={title}
      centered
      width={1000}
      visible={visible}
      closable={false}
      onCancel={onCancel}
      footer={null}
    >
      <Form
        id={visible ? id : undefined}
        model={model}
        onCancel={onCancel}
        onSubmitSucceed={(updatedObject?: any) => {
          if (onSubmitSucceed) onSubmitSucceed(updatedObject);
        }}
        showFooter
      />
    </Modal>
  );
};
