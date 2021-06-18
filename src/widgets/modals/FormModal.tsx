import React from "react";
import { Modal } from "antd";
import Form, { FormProps } from "@/widgets/views/Form";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";

type FormModalProps = FormProps & {
  visible: boolean;
  title?: string;
  noReuse?: boolean;
  buttonModal?: boolean;
};

export const FormModal = (props: FormModalProps) => {
  const {
    visible,
    id,
    title = id ? "Detail" : "New",
    noReuse = false,
    buttonModal = false,
    ...rest
  } = props;

  const { modalWidth } = useModalWidthDimensions();

  const key = noReuse ? Math.random() * 10000 : undefined; // This forces the component to be unique each time if we set noReuse = true

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
        key={key}
        id={id}
        showFooter={true}
        insideButtonModal={buttonModal}
        {...rest}
      />
    </Modal>
  );
};
