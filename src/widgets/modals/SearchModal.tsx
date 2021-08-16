import React, { useState, useContext, useRef, useEffect } from "react";
import { Modal, Button, Divider, Row, Space } from "antd";
import { FormModal } from "./FormModal";
import SearchTree from "@/widgets/views/SearchTree";
import { FileAddOutlined, CloseOutlined } from "@ant-design/icons";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  nameSearch?: string;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
  domain?: any;
};

export const SearchModal = (props: SearchSelectionProps) => {
  const {
    visible,
    onCloseModal: onCloseModalProps,
    onSelectValue,
    model,
    nameSearch,
    domain,
  } = props;
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  const { modalWidth, modalHeight } = useModalWidthDimensions();

  const onCloseModal = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5));
    onCloseModalProps();
  };

  const onRowClicked = async (event: any) => {
    const { id } = event;
    onSelectValue(id);
  };

  const content = () => {
    return (
      <>
        <SearchTree
          model={model}
          nameSearch={nameSearch}
          onRowClicked={onRowClicked}
          treeScrollY={modalHeight * 0.3}
          domain={domain}
        />
        <Divider />
        <Row justify="end">
          <Space>
            <Button
              icon={<FileAddOutlined />}
              onClick={() => {
                setShowCreateModal(true);
              }}
            >
              New
            </Button>
            <Button icon={<CloseOutlined />} onClick={onCloseModal}>
              Cancel
            </Button>
          </Space>
        </Row>
      </>
    );
  };

  return (
    <>
      <Modal
        title="Search"
        centered
        width={modalWidth}
        visible={visible && !showCreateModal}
        closable={true}
        onCancel={onCloseModal}
        footer={null}
        destroyOnClose
      >
        {content()}
      </Modal>
      <FormModal
        model={model}
        visible={showCreateModal}
        onSubmitSucceed={(id?: number) => {
          setShowCreateModal(false);
          onCloseModal();
          onSelectValue(id);
        }}
        onCancel={() => {
          setShowCreateModal(false);
          onCloseModal();
        }}
      />
    </>
  );
};
