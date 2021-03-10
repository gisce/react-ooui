import React, { useState } from "react";
import { Modal, Button, Divider, Alert, Spin, Row, Space } from "antd";
import { FormModal } from "./FormModal";
import SearchTree from "@/widgets/views/SearchTree";
import ConnectionProvider from "@/ConnectionProvider";
import { FileAddOutlined, CloseOutlined } from "@ant-design/icons";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
};

export const SearchModal = (props: SearchSelectionProps) => {
  const { visible, onCloseModal, onSelectValue, model } = props;
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

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
        {visible && <SearchTree model={model} onRowClicked={onRowClicked} />}
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
        width={1400}
        visible={visible && !showCreateModal}
        closable={true}
        onCancel={onCloseModal}
        footer={null}
      >
        {loading ? <Spin /> : content()}
      </Modal>
      <FormModal
        model={model}
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
