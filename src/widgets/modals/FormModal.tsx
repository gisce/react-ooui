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
  readOnly?: boolean;
  mustClearAfterSave?: boolean;
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
    readOnly = false,
    mustClearAfterSave = false,
  } = props;

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
      <Form
        id={id}
        model={model}
        getDataFromAction={getDataFromAction}
        onCancel={onCancel}
        onSubmitSucceed={onSubmitSucceed}
        showFooter
        readOnly={readOnly}
        mustClearAfterSave={mustClearAfterSave}
      />
    </Modal>
  );
};
