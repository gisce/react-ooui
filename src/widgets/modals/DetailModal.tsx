import React from "react";
import { Modal, Button } from "antd";

type SearchSelectionProps = {
  visible: boolean;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
};

export const DetailModal = (props: SearchSelectionProps) => {
  const { visible, onCloseModal, onSelectValue } = props;

  return (
    <Modal
      title="Detail"
      centered
      width={1000}
      visible={visible}
      closable={true}
      onCancel={onCloseModal}
      footer={null}
    >
      <Button onClick={onCloseModal}>cancel</Button>
      <Button
        onClick={() => {
          onSelectValue([1, "Updated value"]);
        }}
      >
        ok
      </Button>
    </Modal>
  );
};
