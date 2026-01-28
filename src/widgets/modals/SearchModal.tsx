import { useCallback, useMemo, useState } from "react";
import { Modal, Button, Divider, Row, Space } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { FormModal } from "./FormModal";
import { SearchTreeInfinite } from "@/widgets/views/SearchTreeInfinite";
import {
  FileAddOutlined,
  CloseOutlined,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { useLocale } from "@gisce/react-formiga-components";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { extractTreeXmlAttribute } from "@/helpers/treeHelper";
import SearchTree from "../views/SearchTree";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  nameSearch?: string;
  onSelectValues: (values: Array<number | string>) => Promise<void>;
  onCloseModal: () => void;
  domain?: unknown;
  context?: Record<string, unknown>;
  canCreate?: boolean;
};

interface RowClickEvent {
  id: number | string;
}

export const SearchModal = ({
  visible,
  onCloseModal: onCloseModalProps,
  onSelectValues: onSelectValuesProps,
  model,
  nameSearch,
  domain,
  context = {},
  canCreate = true,
}: SearchSelectionProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<
    Array<number | string>
  >([]);
  const [operationInProgress, setOperationInProgress] = useState(false);

  const { modalWidth, modalHeight } = useWindowDimensions();
  const { t } = useLocale();
  const { showErrorNotification } = useErrorNotification();

  const {
    treeView,
    formView,
    loading: fetchingViewsInfo,
  } = useFetchTreeViews({
    model,
    formViewProps: undefined,
    treeViewProps: undefined,
    context,
    enabled: visible,
  });

  const shouldShowInfiniteTree = useMemo(() => {
    if (!treeView?.arch) return false;
    return extractTreeXmlAttribute(treeView.arch, "infinite") === "1";
  }, [treeView?.arch]);

  const handleSelectValues = useCallback(
    async (keys: Array<number | string>) => {
      setOperationInProgress(true);
      try {
        await onSelectValuesProps(keys);
      } catch (err) {
        showErrorNotification(err);
      } finally {
        setOperationInProgress(false);
      }
    },
    [onSelectValuesProps, showErrorNotification],
  );

  const handleCloseModal = useCallback(() => {
    onCloseModalProps();
  }, [onCloseModalProps]);

  const handleRowClicked = useCallback(
    ({ id }: RowClickEvent) => {
      handleSelectValues([id]);
    },
    [handleSelectValues],
  );

  const handleSubmit = useCallback(() => {
    if (selectedRowKeys.length === 0) {
      handleCloseModal();
      return;
    }
    void handleSelectValues(selectedRowKeys);
  }, [selectedRowKeys, handleCloseModal, handleSelectValues]);

  const SearchTreeComp = useMemo(
    () => (shouldShowInfiniteTree ? SearchTreeInfinite : SearchTree),
    [shouldShowInfiniteTree],
  );

  const handleShowCreateModal = useCallback(() => {
    setShowCreateModal(true);
  }, []);

  const handleHideCreateModal = useCallback(() => {
    setShowCreateModal(false);
    handleCloseModal();
  }, [handleCloseModal]);

  const handleCreateModalSuccess = useCallback(
    (id?: number | string) => {
      setShowCreateModal(false);
      handleCloseModal();
      if (id) void handleSelectValues([id]);
    },
    [handleCloseModal, handleSelectValues],
  );

  return (
    <>
      <Modal
        title={t("search")}
        centered
        width={modalWidth}
        open={visible && !showCreateModal}
        closable
        onCancel={handleCloseModal}
        footer={null}
        destroyOnClose
        maskClosable={false}
      >
        {!fetchingViewsInfo && (
          <ErrorBoundary>
            <SearchTreeComp
              formView={formView!}
              treeView={treeView!}
              model={model}
              nameSearch={nameSearch}
              onRowClicked={handleRowClicked}
              treeScrollY={modalHeight * 0.3}
              domain={domain}
              parentContext={context}
              onChangeSelectedRowKeys={setSelectedRowKeys}
              filterType={"top"}
            />
          </ErrorBoundary>
        )}
        <Divider />
        <Row justify="end">
          <Space>
            <Button
              disabled={operationInProgress || !canCreate}
              icon={<FileAddOutlined />}
              onClick={handleShowCreateModal}
            >
              {t("new")}
            </Button>
            <Button
              disabled={operationInProgress}
              icon={
                operationInProgress ? <LoadingOutlined /> : <CheckOutlined />
              }
              onClick={handleSubmit}
              type="primary"
            >
              {t("ok")}
            </Button>
            <Button icon={<CloseOutlined />} onClick={handleCloseModal}>
              {t("cancel")}
            </Button>
          </Space>
        </Row>
      </Modal>
      <FormModal
        model={model}
        visible={showCreateModal}
        parentContext={context}
        onSubmitSucceed={handleCreateModalSuccess}
        onCancel={handleHideCreateModal}
      />
    </>
  );
};
