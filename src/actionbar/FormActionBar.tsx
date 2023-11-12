import React, { useContext, useEffect, useRef } from "react";
import { Space, Spin, message } from "antd";
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
import DropdownButton from "./DropdownButton";
import ActionButton from "./ActionButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import NewButton from "./NewButton";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import showConfirmDialog from "@/ui/ConfirmDialog";
import showErrorDialog from "@/ui/GenericErrorDialog";
import ConnectionProvider from "@/ConnectionProvider";
import refreshChangesDialog from "@/ui/RefreshItemDialog";
import { showLogInfo } from "@/helpers/logInfoHelper";

import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";

import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import AttachmentsButton from "./AttachmentsButton";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { Attachment } from "./AttachmentsButtonWrapper";

function FormActionBar({ toolbar }: { toolbar: any }) {
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
  } = useContext(ActionViewContext) as ActionViewContextType;
  const { t, lang } = useContext(LocaleContext) as LocaleContextType;

  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { openRelate, openDefaultActionForModel } = tabManagerContext || {};

  function tryRefresh(callback: any) {
    if (formHasChanges) {
      refreshChangesDialog({
        lang,
        onOk: () => {
          callback();
        },
      });
      return;
    }

    callback();
  }

  function tryNavigate(callback: any) {
    if (formHasChanges) {
      showUnsavedChangesDialog({
        lang,
        onOk: () => {
          callback();
        },
      });
      return;
    }

    callback();
  }

  function onNextClick() {
    if (results && results.length > currentItemIndex! + 1) {
      setCurrentItemIndex?.(currentItemIndex! + 1);
      setCurrentId?.(results[currentItemIndex! + 1].id);
    } else if (results && currentItemIndex! + 1 === results.length) {
      setCurrentItemIndex?.(0);
      setCurrentId?.(results[0].id);
    }
  }

  function onPreviousClick() {
    if (results && currentItemIndex! > 0) {
      setCurrentItemIndex?.(currentItemIndex! - 1);
      setCurrentId?.(results[currentItemIndex! - 1].id);
    } else if (results && currentItemIndex === 0) {
      setCurrentItemIndex?.(results.length - 1);
      setCurrentId?.(results[results.length - 1].id);
    }
  }

  function tryDelete() {
    showConfirmDialog({
      confirmMessage: t("confirmRemoveItem"),
      lang,
      onOk: () => {
        remove();
      },
    });
  }

  async function remove() {
    try {
      setRemovingItem?.(true);

      await ConnectionProvider.getHandler().delete({
        model: currentModel!,
        ids: [currentId!],
      });

      const filteredResults = results?.filter((item: any) => {
        return item.id !== currentId;
      });
      setResults?.(filteredResults!);

      let newIndex = 0;

      if (currentItemIndex! > 0 && currentItemIndex! <= results!.length - 1) {
        newIndex = currentItemIndex! - 1;
      }

      if (!filteredResults?.[newIndex]) {
        setCurrentId?.(undefined);
        setCurrentItemIndex?.(undefined);
      } else {
        setCurrentId?.(filteredResults?.[newIndex].id);
        setCurrentItemIndex?.(newIndex);
      }
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setRemovingItem?.(false);
    }
  }

  async function duplicate() {
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
  }

  const mustDisableButtons =
    formIsSaving || removingItem || formIsLoading || duplicatingItem;

  function runAction(actionData: any) {
    processAction?.({
      actionData,
      values: (formRef.current as any).getValues(),
      fields: (formRef.current as any).getFields(),
      context: (formRef.current as any).getContext(),
      onRefreshParentValues: () => {
        (formRef.current as any).fetchValues();
      },
    });
  }

  if (!currentView) {
    return null;
  }

  return (
    <Space wrap={true}>
      {formIsLoading && (
        <>
          <Spin />
          {separator()}
          {separator()}
        </>
      )}
      <NewButton
        disabled={
          formIsSaving || formIsLoading || removingItem || duplicatingItem
        }
      />
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
          formHasChanges ||
          formIsSaving ||
          currentId === undefined ||
          duplicatingItem ||
          formIsLoading
        }
        loading={duplicatingItem}
        onClick={duplicate}
      />
      <ActionButton
        icon={<DeleteOutlined />}
        tooltip={t("delete")}
        disabled={
          formIsSaving ||
          currentId === undefined ||
          removingItem ||
          duplicatingItem ||
          formIsLoading
        }
        loading={removingItem}
        onClick={tryDelete}
      />
      {separator()}
      <ActionButton
        icon={<InfoCircleOutlined />}
        tooltip={t("showLogs")}
        disabled={
          formIsSaving ||
          currentId === undefined ||
          removingItem ||
          duplicatingItem ||
          formIsLoading
        }
        loading={false}
        onClick={() => {
          showLogInfo(currentModel!, currentId!, t);
        }}
      />
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={
          formIsSaving ||
          currentId === undefined ||
          removingItem ||
          duplicatingItem ||
          formIsLoading
        }
        loading={false}
        onClick={() => {
          tryRefresh(() => {
            (formRef.current as any).fetchValues();
          });
        }}
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
          loading={false}
          onClick={() => {
            tryNavigate(onPreviousClick);
          }}
        />
        <ActionButton
          icon={<RightOutlined />}
          tooltip={t("next")}
          disabled={mustDisableButtons}
          loading={false}
          onClick={() => {
            tryNavigate(onNextClick);
          }}
        />
      </Space>
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        disabled={mustDisableButtons}
        tooltip={t("actions")}
        items={toolbar?.action}
        onItemClick={async (action: any) => {
          if (!action) {
            return;
          }

          const result = await saveDocument({
            onFormSave,
          });

          if (!result.succeed) {
            return;
          }

          runAction(action);
        }}
      />
      <DropdownButton
        icon={<PrinterOutlined />}
        disabled={mustDisableButtons}
        tooltip={t("reports")}
        items={toolbar?.print}
        onItemClick={async (report: any) => {
          if (!report) {
            return;
          }
          const result = await saveDocument({
            onFormSave,
          });

          if (!result.succeed) {
            return;
          }

          runAction({
            ...report,
            datas: {
              ...(report.datas || {}),
              ids: [result.currentId as number],
            },
          });
        }}
      />
      <DropdownButton
        icon={<EnterOutlined />}
        disabled={mustDisableButtons}
        tooltip={t("related")}
        items={toolbar?.relate}
        onItemClick={async (relate: any) => {
          if (!relate) {
            return;
          }

          const result = await saveDocument({
            onFormSave,
          });

          if (!result.succeed) {
            return;
          }

          openRelate({
            relateData: relate,
            values: (formRef.current as any).getValues(),
            fields: (formRef.current as any).getFields(),
            action_id: relate.id,
            action_type: relate.type,
          });
        }}
      />
      <AttachmentsButton
        disabled={mustDisableButtons}
        attachments={attachments}
        onAddNewAttachment={async () => {
          const result = await saveDocument({
            onFormSave,
          });

          if (!result.succeed) {
            return;
          }

          const res_id = result.currentId as number;
          const res_model = currentModel as string;
          openDefaultActionForModel({
            model: "ir.attachment",
            values: {
              selection_associated_object: `${res_model},${res_id}`,
            },
            forced_values: {
              res_model,
              res_id,
            },
            initialViewType: "form",
          });
        }}
        onListAllAttachments={async () => {
          const result = await saveDocument({
            onFormSave,
          });

          if (!result.succeed) {
            return;
          }

          const res_id = result.currentId as number;
          const res_model = currentModel as string;
          openDefaultActionForModel({
            model: "ir.attachment",
            domain: [
              ["res_model", "=", `${res_model}`],
              ["res_id", "=", `${res_id}`],
            ],
            initialViewType: "tree",
          });
        }}
        onViewAttachmentDetails={async (attachment: Attachment) => {
          const result = await saveDocument({
            onFormSave,
          });

          if (!result.succeed) {
            return;
          }

          openDefaultActionForModel({
            model: "ir.attachment",
            res_id: attachment.id,
            initialViewType: "form",
          });
        }}
      />
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

async function saveDocument({
  onFormSave,
}: {
  onFormSave?: () => Promise<{ succeed: boolean; id: number }>;
}): Promise<{ succeed: boolean; currentId?: number }> {
  const result = await onFormSave?.();
  if (result?.succeed) {
    return { succeed: true, currentId: result.id };
  } else {
    return { succeed: false, currentId: undefined };
  }
}

export default FormActionBar;
