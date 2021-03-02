import React from "react";
import { Modal, Button } from "antd";

type SearchSelectionProps = {
  visible: boolean;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
};

export const CreateModal = (props: SearchSelectionProps) => {
  const { visible, onCloseModal, onSelectValue } = props;

  return (
    <Modal
      title="Create"
      centered
      width={1000}
      visible={visible}
      closable={true}
      onCancel={onCloseModal}
      footer={null}
    >
      <Button
        onClick={() => {
          const random = Math.floor((Math.random() * 100000) + 1);
          onSelectValue([random, "New created item " + random.toString()]);
        }}
      >
        save & select value
      </Button>
      <Button onClick={onCloseModal}>close</Button>
    </Modal>
  );
};
