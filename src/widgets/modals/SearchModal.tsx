import React, { useState } from "react";
import { Modal, Button, Divider, Alert, Spin, Row, Space } from "antd";
import { FormModal } from "./FormModal";
import SearchTree from "@/widgets/views/SearchTree";
import ConnectionProvider from "@/ConnectionProvider";
import { FileAddOutlined, CloseOutlined } from "@ant-design/icons";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const { modalWidth } = useModalWidthDimensions();

  const onRowClicked = async (event: any) => {
    setLoading(true);
    setError(undefined);
    try {
      const { id, model } = event;
      const value = await ConnectionProvider.getHandler().execute({
        action: "name_get",
        payload: [id],
        model,
      });
      onSelectValue(value[0]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const content = () => {
    return (
      <>
        {error && (
          <Alert className="mt-10" message={error} type="error" banner />
        )}
        {visible && (
          <SearchTree
            key={Math.random() * 10000} // This forces the component to be unique each time
            model={model}
            nameSearch={nameSearch}
            onRowClicked={onRowClicked}
          />
        )}
        <Divider />
        <Row justify="end">
          <Space>
            <Button
              disabled={loading}
              icon={<FileAddOutlined />}
              onClick={() => {
                setShowCreateModal(true);
              }}
            >
              New
            </Button>
            <Button
              disabled={loading}
              icon={<CloseOutlined />}
              onClick={onCloseModal}
            >
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
        <div>{loading ? <Spin /> : content()}</div>
      </Modal>
      <FormModal
        model={model}
        visible={showCreateModal}
        onSubmitSucceed={(value) => {
          setShowCreateModal(false);
          onCloseModal();
          onSelectValue(value);
        }}
        onCancel={() => {
          setShowCreateModal(false);
          onCloseModal();
        }}
      />
    </>
  );
};
