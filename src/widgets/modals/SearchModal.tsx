import React, { useState } from "react";
import { Modal, Button } from "antd";
import { CreateModal } from "./CreateModal";
import SearchTree from "@/widgets/views/SearchTree";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
};

export const SearchModal = (props: SearchSelectionProps) => {
  const { visible, onCloseModal, onSelectValue, model } = props;
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
        <SearchTree
          model={model}
          onRowClicked={(event) => {
            console.log(event);
          }}
        />
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
          Create new
        </Button>
        <Button onClick={onCloseModal}>Cancel</Button>
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
