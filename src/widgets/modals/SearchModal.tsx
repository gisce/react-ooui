import React, { useState, useContext, useRef, useEffect } from "react";
import { Modal, Button, Divider, Row, Space } from "antd";
import { FormModal } from "./FormModal";
import SearchTree from "@/widgets/views/SearchTree";
import { FileAddOutlined, CloseOutlined } from "@ant-design/icons";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  nameSearch?: string;
  onSelectValue: (value: any) => void;
  onCloseModal: () => void;
  domain?: any;
  context?: any;
};

export const SearchModal = (props: SearchSelectionProps) => {
  const {
    visible,
    onCloseModal: onCloseModalProps,
    onSelectValue,
    model,
    nameSearch,
    domain,
    context = {},
  } = props;
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  const { modalWidth, modalHeight } = useWindowDimensions();
  const { t } = useContext(LocaleContext) as LocaleContextType;

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
          parentContext={context}
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
              {t("new")}
            </Button>
            <Button icon={<CloseOutlined />} onClick={onCloseModal}>
              {t("cancel")}
            </Button>
          </Space>
        </Row>
      </>
    );
  };

  return (
    <>
      <Modal
        title={t("search")}
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
        parentContext={context}
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
