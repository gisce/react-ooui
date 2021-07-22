import React, { useContext } from "react";
import { Space } from "antd";
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
  } = useContext(ActionViewContext) as ActionViewContextType;

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

  function tryDelete(callback: any) {
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

      let newIndex = currentItemIndex!;
      const itemIndex = results!.findIndex((item: any) => {
        return item === currentId;
      });

      if (itemIndex > results!.length - 1) {
        newIndex = results!.length - 1;
      }

      const filteredResults = results?.filter((item: any) => {
        return item !== currentId;
      });

      setResults?.(filteredResults!);
      setCurrentItemIndex?.(newIndex);
      setCurrentId?.(filteredResults![newIndex]);
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setRemovingItem?.(false);
    }
  }

  return (
    <Space>
      <NewButton />
      <ActionButton
        icon={<SaveOutlined />}
        tooltip={"Save"}
        disabled={!formHasChanges || formIsSaving || removingItem}
        loading={formIsSaving}
        onClick={onFormSave}
      />
      <ActionButton
        icon={<DeleteOutlined />}
        tooltip={"Delete"}
        disabled={formIsSaving || currentId === undefined || removingItem}
        loading={removingItem}
        onClick={tryDelete}
      />
      {separator()}
      <ActionButton
        icon={<LeftOutlined />}
        tooltip={"Previous"}
        disabled={formIsSaving || removingItem}
        loading={false}
        onClick={() => {
          tryNavigate(onPreviousClick);
        }}
      />
      <ActionButton
        icon={<RightOutlined />}
        tooltip={"Next"}
        disabled={formIsSaving || removingItem}
        loading={false}
        onClick={() => {
          tryNavigate(onNextClick);
        }}
      />
      {separator()}
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={setCurrentView}
        disabled={formIsSaving || removingItem}
      />
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        disabled={formIsSaving || removingItem}
        tooltip="Actions"
        items={[
          "Test action 1",
          "Test action 2",
          "Test action 3",
          "Test action 4",
        ]}
        onItemClick={() => {}}
      />
      <DropdownButton
        icon={<PrinterOutlined />}
        disabled={formIsSaving || removingItem}
        tooltip="Reports"
        items={["Report 1", "Report 2"]}
        onItemClick={() => {}}
      />
      <DropdownButton
        icon={<EnterOutlined />}
        disabled={formIsSaving || removingItem}
        tooltip="Related"
        items={["Related 1", "Related 2"]}
        onItemClick={() => {}}
      />
      <DropdownButton
        icon={<LinkOutlined />}
        disabled={formIsSaving || removingItem}
        label={"(2)"}
        tooltip="Attachments"
        items={["Attachment 1", "Attachment 2"]}
        onItemClick={() => {}}
      />
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default FormActionBar;
