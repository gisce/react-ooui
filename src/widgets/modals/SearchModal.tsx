import { useCallback, useState } from "react";
import { Modal, Button, Divider, Row, Space } from "antd";
import { FormModal } from "./FormModal";
import SearchTree from "@/widgets/views/SearchTree";
import {
  FileAddOutlined,
  CloseOutlined,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useLocale } from "@gisce/react-formiga-components";
import { showErrorDialog } from "@/ui/GenericErrorDialog";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  nameSearch?: string;
  onSelectValues: (values: number[]) => Promise<void>;
  onCloseModal: () => void;
  domain?: any;
  context?: any;
};

export const SearchModal = (props: SearchSelectionProps) => {
  const {
    visible,
    onCloseModal: onCloseModalProps,
    onSelectValues: onSelectValuesProps,
    model,
    nameSearch,
    domain,
    context = {},
  } = props;
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  const { modalWidth, modalHeight } = useWindowDimensions();
  const { t } = useLocale();
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [operationInProgress, setOperationInProgress] =
    useState<boolean>(false);

  const onSelectValues = useCallback(
    async (keys: any[]) => {
      setOperationInProgress(true);
      try {
        await onSelectValuesProps(keys);
      } catch (err) {
        showErrorDialog(err);
      }
      setOperationInProgress(false);
    },
    [onSelectValuesProps],
  );

  const onCloseModal = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5));
    onCloseModalProps();
  };

  const onRowClicked = async (event: any) => {
    const { id } = event;
    onSelectValues([id]);
  };

  function submit() {
    if (selectedRowKeys.length === 0) {
      onCloseModal();
      return;
    }

    void onSelectValues(selectedRowKeys);
  }

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
          onChangeSelectedRowKeys={setSelectedRowKeys}
        />
        <Divider />
        <Row justify="end">
          <Space>
            <Button
              disabled={operationInProgress}
              icon={<FileAddOutlined />}
              onClick={() => {
                setShowCreateModal(true);
              }}
            >
              {t("new")}
            </Button>
            <Button
              disabled={operationInProgress}
              icon={
                operationInProgress ? <LoadingOutlined /> : <CheckOutlined />
              }
              onClick={() => {
                submit();
              }}
              type="primary"
            >
              {t("ok")}
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
        open={visible && !showCreateModal}
        closable={true}
        onCancel={onCloseModal}
        footer={null}
        destroyOnClose
        maskClosable={false}
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
          onSelectValues([id!]);
        }}
        onCancel={() => {
          setShowCreateModal(false);
          onCloseModal();
        }}
      />
    </>
  );
};
