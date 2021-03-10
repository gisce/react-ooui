import React from "react";
import { Modal } from "antd";
import Form from "@/widgets/views/Form";

type DetailModeProps = {
  visible: boolean;
  model: string;
  id?: number;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
  title?: string;
};

export const FormModal = (props: DetailModeProps) => {
  const {
    visible,
    onCloseModal,
    onSelectValue,
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
      onCancel={onCloseModal}
      footer={null}
    >
      {visible ? (
        <Form
          id={id}
          model={model}
          onCancel={onCloseModal}
          onSubmitSuceed={(updatedObject: any) => {
            onSelectValue(updatedObject);
          }}
        />
      ) : null}
    </Modal>
  );
};
