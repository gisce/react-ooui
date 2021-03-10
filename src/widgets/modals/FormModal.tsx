import React from "react";
import { Modal } from "antd";
import Form from "@/widgets/views/Form";

type FormModalProps = {
  visible: boolean;
  model: string;
  id?: number;
  onCancel?: () => void;
  onSubmitSuceed?: (updatedObject: any) => void;
  title?: string;
};

export const FormModal = (props: FormModalProps) => {
  const {
    visible,
    onCancel,
    onSubmitSuceed,
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
      {visible ? (
        <Form
          id={id}
          model={model}
          onCancel={onCancel}
          onSubmitSuceed={(updatedObject?: any) => {
            onSubmitSuceed && onSubmitSuceed(updatedObject);
          }}
        />
      ) : null}
    </Modal>
  );
};
