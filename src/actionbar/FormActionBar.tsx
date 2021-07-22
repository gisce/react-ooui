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

function FormActionBar() {
  const {
    availableViews,
    currentView,
    setCurrentView,
    onFormSave,
    formHasChanges,
    formIsSaving,
    currentId,
  } = useContext(ActionViewContext) as ActionViewContextType;

  return (
    <Space>
      <NewButton />
      <ActionButton
        icon={<SaveOutlined />}
        tooltip={"Save"}
        disabled={!formHasChanges || formIsSaving}
        loading={formIsSaving}
        onClick={onFormSave}
      />
      <ActionButton
        icon={<DeleteOutlined />}
        tooltip={"Delete"}
        disabled={formIsSaving || currentId === undefined}
        loading={false}
        onClick={() => {}}
      />
      {separator()}
      <ActionButton
        icon={<LeftOutlined />}
        tooltip={"Previous"}
        disabled={formIsSaving}
        loading={false}
        onClick={() => {}}
      />
      <ActionButton
        icon={<RightOutlined />}
        tooltip={"Next"}
        disabled={formIsSaving}
        loading={false}
        onClick={() => {}}
      />
      {separator()}
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={setCurrentView}
        disabled={formIsSaving}
      />
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        disabled={formIsSaving}
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
        disabled={formIsSaving}
        tooltip="Reports"
        items={["Report 1", "Report 2"]}
        onItemClick={() => {}}
      />
      <DropdownButton
        icon={<EnterOutlined />}
        disabled={formIsSaving}
        tooltip="Related"
        items={["Related 1", "Related 2"]}
        onItemClick={() => {}}
      />
      <DropdownButton
        icon={<LinkOutlined />}
        disabled={formIsSaving}
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
