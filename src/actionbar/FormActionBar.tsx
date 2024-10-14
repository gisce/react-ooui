import { useContext, useCallback } from "react";
import { Space, Spin } from "antd";
import {
  SaveOutlined,
  RightOutlined,
  LeftOutlined,
  DeleteOutlined,
  ThunderboltOutlined,
  PrinterOutlined,
  EnterOutlined,
  ReloadOutlined,
  CopyOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import ChangeViewButton from "./ChangeViewButton";
import ActionButton from "./ActionButton";
import { useActionViewContext } from "@/context/ActionViewContext";
import NewButton from "./NewButton";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { showErrorDialog } from "@/ui/GenericErrorDialog";
import ConnectionProvider from "@/ConnectionProvider";
import { showLogInfo } from "@/helpers/logInfoHelper";
import { DropdownButton, useLocale } from "@gisce/react-formiga-components";
import { useHotkeys } from "react-hotkeys-hook";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import AttachmentsButton from "./AttachmentsButton";
import { Attachment } from "./AttachmentsButtonWrapper";
import { useNextPrevious } from "./useNextPrevious";

function FormActionBar({ toolbar }: { toolbar: any }) {
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { t } = useLocale();
  const { onNextClick, onPreviousClick } = useNextPrevious();

  const {
    availableViews,
    currentView,
    setCurrentView,
    onFormSave,
    formHasChanges,
    formIsSaving,
    currentId,
    results,
    setCurrentItemIndex,
    currentItemIndex,
    setCurrentId,
    currentModel,
    setRemovingItem,
    removingItem,
    duplicatingItem,
    setDuplicatingItem,
    setResults,
    formIsLoading,
    attachments,
    formRef,
    setFormHasChanges,
    previousView,
    setPreviousView,
    goToResourceId,
    isActive,
  } = useActionViewContext(true);

  const { processAction } = contentRootContext || {};
  const { openRelate, openDefaultActionForModel } = tabManagerContext || {};

  const mustDisableButtons =
    formIsSaving || removingItem || formIsLoading || duplicatingItem;

  const tryAction = useCallback(
    (action: () => void) => {
      if (formHasChanges) {
        showUnsavedChangesDialog({ t, onOk: action });
      } else {
        action();
      }
    },
    [formHasChanges, t],
  );

  const handleRemove = useCallback(async () => {
    try {
      setRemovingItem?.(true);
      await ConnectionProvider.getHandler().deleteObjects({
        model: currentModel!,
        ids: [currentId!],
        context: (formRef.current as any).getContext(),
      });

      const filteredResults = results?.filter(
        (item: any) => item.id !== currentId,
      );
      setResults?.(filteredResults!);

      const newIndex = Math.max(0, (currentItemIndex || 0) - 1);
      if (!filteredResults?.[newIndex]) {
        setCurrentId?.(undefined);
        setCurrentItemIndex?.(undefined);
      } else {
        setCurrentId?.(filteredResults[newIndex].id);
        setCurrentItemIndex?.(newIndex);
      }
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setRemovingItem?.(false);
    }
  }, [
    currentId,
    currentItemIndex,
    currentModel,
    formRef,
    results,
    setCurrentId,
    setCurrentItemIndex,
    setRemovingItem,
    setResults,
  ]);

  const handleDuplicate = useCallback(async () => {
    try {
      setDuplicatingItem?.(true);
      const newId = await ConnectionProvider.getHandler().duplicate({
        id: currentId!,
        model: currentModel!,
        context: (formRef.current as any).getContext(),
      });
      if (newId) {
        await goToResourceId?.([newId]);
      }
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setDuplicatingItem?.(false);
    }
  }, [currentId, currentModel, formRef, goToResourceId, setDuplicatingItem]);

  const runAction = useCallback(
    (actionData: any) => {
      processAction?.({
        actionData,
        values: (formRef.current as any).getValues(),
        fields: (formRef.current as any).getFields(),
        context: (formRef.current as any).getContext(),
        onRefreshParentValues: () => (formRef.current as any).fetchValues(),
      });
    },
    [formRef, processAction],
  );

  useHotkeys(
    "pagedown",
    () => isActive && tryAction(onNextClick),
    { enableOnFormTags: true, preventDefault: true },
    [isActive, tryAction, onNextClick],
  );
  useHotkeys(
    "pageup",
    () => isActive && tryAction(onPreviousClick),
    { enableOnFormTags: true, preventDefault: true },
    [isActive, tryAction, onPreviousClick],
  );
  useHotkeys(
    "ctrl+s,command+s",
    () => isActive && onFormSave?.(),
    { enableOnFormTags: true, preventDefault: true },
    [isActive, onFormSave],
  );
  useHotkeys(
    "ctrl+l,command+l",
    () => {
      if (isActive && previousView) {
        setPreviousView?.(currentView);
        setCurrentView?.(previousView);
      }
    },
    { enableOnFormTags: true, preventDefault: true },
    [isActive, previousView, currentView, setPreviousView, setCurrentView],
  );

  if (!currentView) return null;

  return (
    <Space wrap>
      {formIsLoading && (
        <>
          <Spin />
          {separator()}
          {separator()}
        </>
      )}
      <NewButton disabled={mustDisableButtons} />
      <ActionButton
        icon={<SaveOutlined />}
        tooltip={t("save")}
        disabled={!formHasChanges || mustDisableButtons}
        loading={formIsSaving}
        onClick={onFormSave}
      />
      <ActionButton
        icon={<CopyOutlined />}
        tooltip={t("duplicate")}
        disabled={
          formHasChanges || mustDisableButtons || currentId === undefined
        }
        loading={duplicatingItem}
        onClick={() =>
          showConfirmDialog({
            confirmMessage: t("confirmDuplicate"),
            t,
            onOk: handleDuplicate,
          })
        }
      />
      <ActionButton
        icon={<DeleteOutlined />}
        tooltip={t("delete")}
        disabled={mustDisableButtons || currentId === undefined}
        loading={removingItem}
        onClick={() =>
          showConfirmDialog({
            confirmMessage: t("confirmRemoveItem"),
            t,
            onOk: handleRemove,
          })
        }
      />
      {separator()}
      <ActionButton
        icon={<InfoCircleOutlined />}
        tooltip={t("showLogs")}
        disabled={mustDisableButtons || currentId === undefined}
        onClick={() => showLogInfo(currentModel!, currentId!, t)}
      />
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={mustDisableButtons || currentId === undefined}
        onClick={() => tryAction(() => (formRef.current as any).fetchValues())}
      />
      {separator()}
      <ChangeViewButton
        currentView={currentView}
        previousView={previousView}
        availableViews={availableViews}
        onChangeView={(view: any) => {
          setPreviousView?.(currentView);
          setFormHasChanges?.(false);
          setCurrentView?.(view);
        }}
        disabled={mustDisableButtons}
        formHasChanges={formHasChanges}
      />
      {separator()}
      <Space>
        <ActionButton
          icon={<LeftOutlined />}
          tooltip={t("previous")}
          disabled={mustDisableButtons}
          onClick={() => tryAction(onPreviousClick)}
        />
        <ActionButton
          icon={<RightOutlined />}
          tooltip={t("next")}
          disabled={mustDisableButtons}
          onClick={() => tryAction(onNextClick)}
        />
      </Space>
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        placement="bottomRight"
        disabled={mustDisableButtons}
        onRetrieveData={async () => [
          { label: t("actions"), items: toolbar?.action },
        ]}
        onItemClick={async (action: any) => {
          if (action) {
            const result = await saveDocument({ onFormSave });
            if (result.succeed) runAction(action);
          }
        }}
      />
      <DropdownButton
        icon={<PrinterOutlined />}
        disabled={mustDisableButtons}
        placement="bottomRight"
        onRetrieveData={async () => [
          { label: t("reports"), items: toolbar?.print },
        ]}
        onItemClick={async (report: any) => {
          if (report) {
            const result = await saveDocument({ onFormSave });
            if (result.succeed) {
              runAction({
                ...report,
                datas: {
                  ...(report.datas || {}),
                  ids: [result.currentId as number],
                },
              });
            }
          }
        }}
      />
      <DropdownButton
        icon={<EnterOutlined />}
        disabled={mustDisableButtons}
        placement="bottomRight"
        onRetrieveData={async () => [
          { label: t("related"), items: toolbar?.relate },
        ]}
        onItemClick={async (relate: any) => {
          if (relate) {
            const result = await saveDocument({ onFormSave });
            if (result.succeed) {
              openRelate({
                relateData: relate,
                values: (formRef.current as any).getValues(),
                fields: (formRef.current as any).getFields(),
                action_id: relate.id,
                action_type: relate.type,
              });
            }
          }
        }}
      />
      <AttachmentsButton
        disabled={mustDisableButtons}
        attachments={attachments}
        onAddNewAttachment={async () => {
          const result = await saveDocument({ onFormSave });
          if (result.succeed) {
            openDefaultActionForModel({
              ...getAttachmentActionPayload(
                currentModel as string,
                result.currentId as number,
              ),
              initialViewType: "form",
            });
          }
        }}
        onListAllAttachments={async () => {
          const result = await saveDocument({ onFormSave });
          if (result.succeed) {
            openDefaultActionForModel({
              ...getAttachmentActionPayload(
                currentModel as string,
                result.currentId as number,
              ),
              initialViewType: "tree",
            });
          }
        }}
        onViewAttachmentDetails={async (attachment: Attachment) => {
          const result = await saveDocument({ onFormSave });
          if (result.succeed) {
            openDefaultActionForModel({
              model: "ir.attachment",
              res_id: attachment.id,
              initialViewType: "form",
            });
          }
        }}
      />
    </Space>
  );
}

const separator = () => <div className="inline-block w-2" />;

const saveDocument = async ({
  onFormSave,
}: {
  onFormSave?: () => Promise<{ succeed: boolean; id: number }>;
}): Promise<{ succeed: boolean; currentId?: number }> => {
  const result = await onFormSave?.();
  return result?.succeed
    ? { succeed: true, currentId: result.id }
    : { succeed: false, currentId: undefined };
};

const getAttachmentActionPayload = (res_model: string, res_id: number) => ({
  model: "ir.attachment",
  domain: [
    ["res_model", "=", res_model],
    ["res_id", "=", `${res_id}`],
  ],
  values: { selection_associated_object: `${res_model},${res_id}` },
  forced_values: { res_model, res_id },
});

export default FormActionBar;
