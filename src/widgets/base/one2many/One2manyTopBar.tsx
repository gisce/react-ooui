import React from "react";
import { Button } from "antd";
import {
  FileAddOutlined,
  SaveOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

type One2manyTopBarProps = {
  title: string;
  mode: "tree" | "form";
  isMany2Many: boolean;
  readOnly: boolean;
  formIsSaving: boolean;
  formHasChanges: boolean;
  onToggleViewMode: () => void;
  onCreateItem: () => void;
  onSaveItem: () => void;
  onDelete: () => void;
  totalItems: number;
  currentItemIndex: number;
  onPreviousItem: () => void;
  onNextItem: () => void;
};

export const One2manyTopBar = (props: One2manyTopBarProps) => {
  const {
    title: titleString,
    readOnly,
    onCreateItem,
    onToggleViewMode,
    mode,
    formIsSaving,
    onSaveItem,
    formHasChanges,
    onDelete,
    totalItems,
    currentItemIndex,
    onPreviousItem,
    onNextItem,
  } = props;

  function separator() {
    return <div className="inline-block w-3" />;
  }

  function title() {
    return (
      <div className="h-8 flex flex-grow bg-gray-700 text-gray-200">
        <div className="h-full flex flex-col justify-center items-center">
          <span className="pl-2 font-bold">{titleString}</span>
        </div>
      </div>
    );
  }

  function saveButton() {
    return (
      <Button
        icon={formIsSaving ? <LoadingOutlined /> : <SaveOutlined />}
        onClick={onSaveItem}
        disabled={!formHasChanges || formIsSaving || readOnly}
      />
    );
  }

  function deleteButton() {
    return (
      <Button
        icon={<DeleteOutlined />}
        onClick={onDelete}
        disabled={totalItems === 0 || readOnly}
      />
    );
  }

  function index() {
    let itemToShow = "_";
    if (totalItems === 0) {
      itemToShow = "_";
    } else {
      itemToShow = (currentItemIndex + 1).toString();
    }
    return (
      <span className="pl-1 pr-1">
        ({itemToShow}/{totalItems})
      </span>
    );
  }

  function itemBrowser() {
    return (
      <>
        {separator()}
        <Button icon={<LeftOutlined />} onClick={onPreviousItem} />
        {index()}
        <Button icon={<RightOutlined />} onClick={onNextItem} />
      </>
    );
  }

  return (
    <div className="flex mb-2">
      {title()}
      <div className="h-8 flex-none pl-2">
        <Button
          icon={<FileAddOutlined />}
          disabled={readOnly}
          onClick={onCreateItem}
        />
        {separator()}
        {mode === "form" && saveButton()}
        {deleteButton()}
        {mode === "form" && itemBrowser()}
        {separator()}
        <Button icon={<AlignLeftOutlined />} onClick={onToggleViewMode} />
      </div>
    </div>
  );
};
