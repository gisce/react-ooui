import React from "react";
import { Modal } from "antd";
import Form from "@/widgets/views/Form";

type FormModalProps = {
  visible: boolean;
  model: string;
  id?: number;
  getDataFromAction?: boolean;
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
    getDataFromAction,
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
        // key={Math.random() * 10000} // This forces the Form component to be unique each time the modal is shown
        id={id}
        model={model}
        getDataFromAction={getDataFromAction}
        onCancel={onCancel}
        onSubmitSucceed={onSubmitSucceed}
        showFooter
      />
    </Modal>
  );
};
