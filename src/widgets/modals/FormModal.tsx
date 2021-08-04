import React, { useState } from "react";
import { Modal } from "antd";
import Form, { FormProps } from "@/widgets/views/Form";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";
import FormModalProvider from "@/context/FormModalContext";

type FormModalProps = FormProps & {
  visible: boolean;
  title?: string;
  buttonModal?: boolean;
};

export const FormModal = (props: FormModalProps) => {
  const { visible, id, title, buttonModal = false, ...rest } = props;

  const { modalWidth } = useModalWidthDimensions();
  const [formTitle, setFormTitle] = useState<string>(title!);

  function onTitleChange(newTitle: string) {
    setFormTitle(newTitle);
  }

  return (
    <FormModalProvider setTitle={onTitleChange}>
      <Modal
        title={formTitle}
        centered
        width={modalWidth}
        visible={visible}
        closable={false}
        footer={null}
        destroyOnClose
      >
        <Form
          id={id}
          showFooter={true}
          insideButtonModal={buttonModal}
          {...rest}
        />
      </Modal>
    </FormModalProvider>
  );
};
