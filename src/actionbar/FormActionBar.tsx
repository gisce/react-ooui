import { useContext, useCallback, memo, useMemo } from "react";
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
import ActionButton, { ActionDangerButton } from "./ActionButton";
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
import AttachmentsButton from "./AttachmentsButton";
import { Attachment } from "./AttachmentsButtonWrapper";
import { useNextPrevious } from "./useNextPrevious";
import {
  saveDocument,
  useFormToolbarButtons,
} from "@/hooks/useFormToolbarButtons";
import { ActionBarSeparator } from "./ActionBarSeparator";

function FormActionBarComponent({ toolbar }: { toolbar: any }) {
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
  } = useActionViewContext();

  const { openDefaultActionForModel } = tabManagerContext || {};

  const mustDisableButtons = useMemo(
    () => formIsSaving || removingItem || formIsLoading || duplicatingItem,
    [formIsSaving, removingItem, formIsLoading, duplicatingItem],
  );

  const { actionButtonProps, printButtonProps, relateButtonProps } =
    useFormToolbarButtons({
      toolbar,
      mustDisableButtons,
      formRef,
    });

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

  const handleChangeView = useCallback(
    (view: any) => {
      setPreviousView?.(currentView);
      setFormHasChanges?.(false);
      setCurrentView?.(view);
    },
    [currentView, setPreviousView, setFormHasChanges, setCurrentView],
  );

  const handleRefresh = useCallback(() => {
    tryAction(() => (formRef.current as any).fetchValues());
  }, [tryAction, formRef]);

  const handleAddNewAttachment = useCallback(async () => {
    const result = await saveDocument({ onFormSave });
    if (result.succeed) {
      openDefaultActionForModel?.({
        ...getAttachmentActionPayload(
          currentModel as string,
          result.currentId as number,
        ),
        initialViewType: "form",
      });
    }
  }, [currentModel, onFormSave, openDefaultActionForModel]);

  const handleListAllAttachments = useCallback(async () => {
    const result = await saveDocument({ onFormSave });
    if (result.succeed) {
      openDefaultActionForModel?.({
        ...getAttachmentActionPayload(
          currentModel as string,
          result.currentId as number,
        ),
        initialViewType: "tree",
      });
    }
  }, [currentModel, onFormSave, openDefaultActionForModel]);

  const handleViewAttachmentDetails = useCallback(
    async (attachment: Attachment) => {
      const result = await saveDocument({ onFormSave });
      if (result.succeed) {
        openDefaultActionForModel?.({
          model: "ir.attachment",
          res_id: attachment.id,
          initialViewType: "form",
        });
      }
    },
    [onFormSave, openDefaultActionForModel],
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
          <ActionBarSeparator />
          <ActionBarSeparator />
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
      <ActionDangerButton
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
      <ActionBarSeparator />
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
        onClick={handleRefresh}
      />
      <ActionBarSeparator />
      <ChangeViewButton
        currentView={currentView}
        previousView={previousView}
        availableViews={availableViews}
        onChangeView={handleChangeView}
        disabled={mustDisableButtons}
        formHasChanges={formHasChanges}
      />
      <ActionBarSeparator />
      <NavigationButtons
        disabled={mustDisableButtons || false}
        onPreviousClick={onPreviousClick}
        onNextClick={onNextClick}
        tryAction={tryAction}
      />
      <ActionBarSeparator />
      <DropdownButton icon={<ThunderboltOutlined />} {...actionButtonProps} />
      <DropdownButton icon={<PrinterOutlined />} {...printButtonProps} />
      <DropdownButton icon={<EnterOutlined />} {...relateButtonProps} />
      <AttachmentsButton
        disabled={mustDisableButtons}
        attachments={attachments}
        onAddNewAttachment={handleAddNewAttachment}
        onListAllAttachments={handleListAllAttachments}
        onViewAttachmentDetails={handleViewAttachmentDetails}
      />
    </Space>
  );
}

const FormActionBar = memo(FormActionBarComponent);

const NavigationButtons = memo(
  ({
    disabled,
    onPreviousClick,
    onNextClick,
    tryAction,
  }: {
    disabled: boolean;
    onPreviousClick: () => void;
    onNextClick: () => void;
    tryAction: (action: () => void) => void;
  }) => {
    const { t } = useLocale();
    return (
      <Space>
        <ActionButton
          icon={<LeftOutlined />}
          tooltip={t("previous")}
          disabled={disabled}
          onClick={() => tryAction(onPreviousClick)}
        />
        <ActionButton
          icon={<RightOutlined />}
          tooltip={t("next")}
          disabled={disabled}
          onClick={() => tryAction(onNextClick)}
        />
      </Space>
    );
  },
);
NavigationButtons.displayName = "NavigationButtons";

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
