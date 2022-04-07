import React from "react";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { ViewModes } from "@/widgets/base/one2many/One2many";

import {
  FileAddOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  SearchOutlined,
  ApiOutlined,
} from "@ant-design/icons";

type One2manyTopBarProps = {
  title: string;
  mode: ViewModes;
  isMany2Many: boolean;
  readOnly: boolean;
  formHasChanges: boolean;
  onToggleViewMode: () => void;
  onCreateItem: () => void;
  onDelete: () => void;
  totalItems: number;
  currentItemIndex: number;
  onPreviousItem: () => void;
  onNextItem: () => void;
  onSearchItem: () => void;
  selectedRowKeys: string[];
};

export const One2manyTopBar = (props: One2manyTopBarProps) => {
  const {
    title: titleString,
    readOnly,
    onCreateItem,
    onToggleViewMode,
    mode,
    onDelete,
    totalItems,
    currentItemIndex,
    onPreviousItem,
    onNextItem,
    isMany2Many,
    onSearchItem,
    selectedRowKeys,
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

  function deleteButton() {
    return (
      <ButtonWithTooltip
        tooltip={isMany2Many ? "Unlink" : "Delete"}
        icon={isMany2Many ? <ApiOutlined /> : <DeleteOutlined />}
        onClick={onDelete}
        disabled={
          totalItems === 0 ||
          readOnly ||
          (mode !== "form" && selectedRowKeys.length === 0)
        }
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
        <ButtonWithTooltip
          tooltip={"Previous item"}
          icon={<LeftOutlined />}
          onClick={onPreviousItem}
        />
        {index()}
        <ButtonWithTooltip
          tooltip={"Next item"}
          icon={<RightOutlined />}
          onClick={onNextItem}
        />
      </>
    );
  }

  return (
    <div className="flex mb-2">
      {title()}
      <div className="h-8 flex-none pl-2">
        <ButtonWithTooltip
          tooltip={"Create new item"}
          icon={<FileAddOutlined />}
          disabled={readOnly}
          onClick={onCreateItem}
        />
        {isMany2Many && (
          <ButtonWithTooltip
            tooltip={"Search existing item"}
            icon={<SearchOutlined />}
            disabled={readOnly}
            onClick={onSearchItem}
          />
        )}
        {separator()}
        {deleteButton()}
        {mode === "form" && itemBrowser()}
        {separator()}
        <ButtonWithTooltip
          tooltip={"Toggle view mode"}
          icon={<AlignLeftOutlined />}
          onClick={onToggleViewMode}
        />
      </div>
    </div>
  );
};
