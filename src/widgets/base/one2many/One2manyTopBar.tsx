import ButtonWithTooltip from "@/common/ButtonWithTooltip";

import {
  FileAddOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  SearchOutlined,
  ApiOutlined,
} from "@ant-design/icons";
import { ViewType } from "@/types";
import { theme } from "antd";
const { useToken } = theme;

type One2manyTopBarProps = {
  title: string;
  mode: ViewType;
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
  showToggleButton: boolean;
  showCreateButton: boolean;
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
    showCreateButton,
    showToggleButton,
  } = props;
  const { token } = useToken();

  function separator() {
    return <div className="inline-block w-3" />;
  }

  function title() {
    return (
      <div
        className="flex flex-grow h-8 text-white"
        style={{
          borderRadius: token.borderRadius,
          backgroundColor: token.colorPrimaryActive,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full">
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
      <div className="flex-none h-8 pl-2">
        {mode !== "graph" && showCreateButton && (
          <ButtonWithTooltip
            tooltip={"Create new item"}
            icon={<FileAddOutlined />}
            disabled={readOnly}
            onClick={onCreateItem}
          />
        )}
        {isMany2Many && showCreateButton && (
          <>
            {separator()}
            <ButtonWithTooltip
              tooltip={"Search existing item"}
              icon={<SearchOutlined />}
              disabled={readOnly}
              onClick={onSearchItem}
            />
          </>
        )}
        {mode !== "graph" && separator()}
        {mode !== "graph" && deleteButton()}
        {mode === "form" && itemBrowser()}
        {separator()}
        {showToggleButton && (
          <ButtonWithTooltip
            tooltip={"Toggle view mode"}
            icon={<AlignLeftOutlined />}
            onClick={onToggleViewMode}
          />
        )}
      </div>
    </div>
  );
};
