import { useCallback, useEffect, useMemo, useState } from "react";
import { Modal, Button, Divider, Row, Space } from "antd";
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
import { SearchTreePaginated } from "../views/Tree/Paginated/SearchTreePaginated";
import { TreeType } from "@/views/actionViews/TreeActionView";

type SearchSelectionProps = {
  visible: boolean;
  model: string;
  nameSearch?: string;
  onSelectValues: (values: number[]) => Promise<void>;
  onCloseModal: () => void;
  domain?: unknown;
  context?: Record<string, unknown>;
  canCreate?: boolean;
};

interface RowClickEvent {
  id: number;
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
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);
  const [operationInProgress, setOperationInProgress] = useState(false);

  const { modalWidth, modalHeight } = useWindowDimensions();
  const { t } = useLocale();
  const { showErrorNotification } = useErrorNotification();
  const [treeType, setTreeType] = useState<TreeType | undefined>(undefined);

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

  useEffect(() => {
    if (!treeView?.arch) {
      setTreeType("legacy");
      return;
    }
    const infinite = extractTreeXmlAttribute(treeView.arch, "infinite");
    if (infinite === "1") {
      setTreeType("infinite");
    } else if (infinite === "0") {
      setTreeType("paginated");
    }
  }, [treeView?.arch]);

  const onChangeTreeType = useCallback((type: TreeType) => {
    setTreeType(type);
  }, []);

  const handleSelectValues = useCallback(
    async (keys: number[]) => {
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

  const SearchTreeComp = useMemo(() => {
    if (fetchingViewsInfo) {
      return null;
    }

    const commonProps = {
      formView: formView!,
      treeView: treeView!,
      model,
      nameSearch,
      onRowClicked: handleRowClicked,
      domain: domain as any[],
      parentContext: context,
      filterType: "top" as const,
      onChangeTreeType,
    };

    if (treeType === "infinite") {
      // SearchTreeInfinite supports both treeScrollY and onChangeSelectedRowKeys
      return (
        <SearchTreeInfinite
          {...commonProps}
          treeScrollY={modalHeight * 0.3}
          onChangeSelectedRowKeys={setSelectedRowKeys}
          onChangeTreeType={onChangeTreeType}
        />
      );
    } else if (treeType === "paginated") {
      // SearchTreePaginated supports onChangeSelectedRowKeys but not treeScrollY
      return (
        <SearchTreePaginated
          {...commonProps}
          onChangeSelectedRowKeys={setSelectedRowKeys}
          onChangeTreeType={onChangeTreeType}
        />
      );
    } else {
      // SearchTree (legacy) supports treeScrollY but not onChangeSelectedRowKeys
      return <SearchTree {...commonProps} treeScrollY={modalHeight * 0.3} />;
    }
  }, [
    fetchingViewsInfo,
    treeType,
    formView,
    treeView,
    model,
    nameSearch,
    handleRowClicked,
    domain,
    context,
    onChangeTreeType,
    modalHeight,
    setSelectedRowKeys,
  ]);

  const handleShowCreateModal = useCallback(() => {
    setShowCreateModal(true);
  }, []);

  const handleHideCreateModal = useCallback(() => {
    setShowCreateModal(false);
    handleCloseModal();
  }, [handleCloseModal]);

  const handleCreateModalSuccess = useCallback(
    (id?: number) => {
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
        {SearchTreeComp}
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
