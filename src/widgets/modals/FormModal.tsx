import React from "react";
import { Modal } from "antd";
import Form from "@/widgets/views/Form";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";

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

  const { modalWidth } = useModalWidthDimensions();

  return (
    <Modal
      title={title}
      centered
      width={modalWidth}
      visible={visible}
      closable={false}
      onCancel={onCancel}
      footer={null}
    >
      <Form
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
