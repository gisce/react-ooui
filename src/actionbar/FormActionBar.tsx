import React, { useContext } from "react";
import { Space, Spin } from "antd";
import {
  SaveOutlined,
  RightOutlined,
  LeftOutlined,
  DeleteOutlined,
  ThunderboltOutlined,
  LinkOutlined,
  PrinterOutlined,
  EnterOutlined,
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

import { getMimeType, openBase64InNewTab } from "@/helpers/filesHelper";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";

import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";

function FormActionBar() {
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
    setResults,
    formIsLoading,
    toolbar,
    attachments,
    formRef,
  } = useContext(ActionViewContext) as ActionViewContextType;

  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext;

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { openRelate } = tabManagerContext || {};

  function tryNavigate(callback: any) {
    if (formHasChanges) {
      showUnsavedChangesDialog({
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
      setCurrentId?.(results[currentItemIndex! + 1]);
    }
  }

  function onPreviousClick() {
    if (results && currentItemIndex! > 0) {
      setCurrentItemIndex?.(currentItemIndex! - 1);
      setCurrentId?.(results[currentItemIndex! - 1]);
    }
  }

  function tryDelete() {
    showConfirmDialog({
      confirmMessage: "Are you sure to remove this item?",
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
        return item !== currentId;
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
        setCurrentId?.(filteredResults?.[newIndex]);
        setCurrentItemIndex?.(newIndex);
      }
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setRemovingItem?.(false);
    }
  }

  const mustDisableButtons = formIsSaving || removingItem || formIsLoading;

  return (
    <Space wrap={true}>
      {formIsLoading && (
        <>
          <Spin />
          {separator()}
          {separator()}
        </>
      )}
      <NewButton disabled={formIsSaving || formIsLoading || removingItem} />
      <ActionButton
        icon={<SaveOutlined />}
        tooltip={"Save"}
        disabled={!formHasChanges || mustDisableButtons}
        loading={formIsSaving}
        onClick={onFormSave}
      />
      <ActionButton
        icon={<DeleteOutlined />}
        tooltip={"Delete"}
        disabled={
          formIsSaving ||
          currentId === undefined ||
          removingItem ||
          formIsLoading
        }
        loading={removingItem}
        onClick={tryDelete}
      />
      {separator()}
      <Space>
        <ActionButton
          icon={<LeftOutlined />}
          tooltip={"Previous"}
          disabled={mustDisableButtons}
          loading={false}
          onClick={() => {
            tryNavigate(onPreviousClick);
          }}
        />
        <ActionButton
          icon={<RightOutlined />}
          tooltip={"Next"}
          disabled={mustDisableButtons}
          loading={false}
          onClick={() => {
            tryNavigate(onNextClick);
          }}
        />
      </Space>
      {separator()}
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={setCurrentView}
        disabled={mustDisableButtons}
      />
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        disabled={mustDisableButtons}
        tooltip="Actions"
        items={toolbar?.action}
        onItemClick={(action: any) => {
          if (!action) {
            return;
          }

          processAction({
            actionData: action,
            values: (formRef.current as any).getValues(),
            fields: (formRef.current as any).getFields(),
            context: (formRef.current as any).getContext(),
          });
        }}
      />
      <DropdownButton
        icon={<PrinterOutlined />}
        disabled={mustDisableButtons}
        tooltip="Reports"
        items={toolbar?.print}
        onItemClick={(report: any) => {
          if (!report) {
            return;
          }

          processAction({
            actionData: {
              ...report,
              datas: { ...(report.datas || {}), ids: [currentId as number] },
            },
            values: (formRef.current as any).getValues(),
            fields: (formRef.current as any).getFields(),
            context: (formRef.current as any).getContext(),
          });
        }}
      />
      <DropdownButton
        icon={<EnterOutlined />}
        disabled={mustDisableButtons}
        tooltip="Related"
        items={toolbar?.relate}
        onItemClick={async (relate: any) => {
          if (!relate) {
            return;
          }

          openRelate({
            relateData: relate,
            values: (formRef.current as any).getValues(),
            fields: (formRef.current as any).getFields(),
          });
        }}
      />
      <DropdownButton
        icon={<LinkOutlined />}
        disabled={mustDisableButtons}
        label={`(${attachments.length})`}
        tooltip="Attachments"
        items={attachments}
        onItemClick={async (attachment: any) => {
          if (!attachment) {
            return;
          }

          const fileType: any = await getMimeType(attachment.datas!);
          openBase64InNewTab(attachment.datas, fileType.mime);
        }}
      />
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default FormActionBar;
