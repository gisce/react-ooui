import React, { useState } from "react";
import { Modal, Button } from "antd";
import { CreateModal } from "./CreateModal";

type SearchSelectionProps = {
  visible: boolean;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
};

export const SearchModal = (props: SearchSelectionProps) => {
  const { visible, onCloseModal, onSelectValue } = props;
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  return (
    <>
      <Modal
        title="Search"
        centered
        width={1000}
        visible={visible && !showCreateModal}
        closable={true}
        onCancel={onCloseModal}
        footer={null}
      >
        <Button
          onClick={() => {
            const random = Math.floor(Math.random() * 100000 + 1);
            onSelectValue([random, "Test value " + random.toString()]);
          }}
        >
          select value
        </Button>
        <Button
          onClick={() => {
            setShowCreateModal(true);
          }}
        >
          new item
        </Button>
        <Button onClick={onCloseModal}>close</Button>
      </Modal>
      <CreateModal
        visible={showCreateModal}
        onSelectValue={(value) => {
          setShowCreateModal(false);
          onCloseModal();
          onSelectValue(value);
        }}
        onCloseModal={() => {
          setShowCreateModal(false);
          onCloseModal();
        }}
      />
    </>
  );
};
