import React, { useState, useContext } from "react";
import { Modal, Button, Divider, Row, Space } from "antd";
import { FormModal } from "./FormModal";
import SearchTree from "@/widgets/views/SearchTree";
import { FileAddOutlined, CloseOutlined } from "@ant-design/icons";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";
import { FormContext, FormContextType } from "@/context/FormContext";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  nameSearch?: string;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
};

export const SearchModal = (props: SearchSelectionProps) => {
  const { visible, onCloseModal, onSelectValue, model, nameSearch } = props;
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  const { modalWidth, modalHeight } = useModalWidthDimensions();

  const { domain } = useContext(FormContext) as FormContextType;

  const onRowClicked = async (event: any) => {
    const { id } = event;
    onSelectValue(id);
  };

  const content = () => {
    return (
      <>
        {visible && (
          <SearchTree
            key={Math.random() * 10000} // This forces the component to be unique each time
            model={model}
            nameSearch={nameSearch}
            onRowClicked={onRowClicked}
            treeScrollY={modalHeight * 0.3}
            domain={domain}
          />
        )}
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
      >
        {content()}
      </Modal>
      <FormModal
        noReuse={true}
        model={model}
        visible={showCreateModal}
        onSubmitSucceed={(id: number) => {
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
