import { memo, RefObject } from "react";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { useLocale, DropdownButton } from "@gisce/react-formiga-components";
import {
  FileAddOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  SearchOutlined,
  ApiOutlined,
  ThunderboltOutlined,
  PrinterOutlined,
  EnterOutlined,
} from "@ant-design/icons";
import { ViewType } from "@/types";
import { theme, Badge } from "antd";
import { useFormToolbarButtons } from "@/hooks/useFormToolbarButtons";
import { useTreeToolbarButtons } from "@/hooks/useTreeToolbarButtons";
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
  toolbar?: any;
  context?: any;
  formRef: RefObject<any>;
  onRefreshParentValues?: () => void;
};

function One2manyTopBarComponent(props: One2manyTopBarProps) {
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
    toolbar,
    context,
    formRef,
    onRefreshParentValues,
  } = props;

  const { token } = useToken();
  const { t } = useLocale();

  const { actionButtonProps, printButtonProps, relateButtonProps } =
    useFormToolbarButtons({
      toolbar,
      mustDisableButtons: readOnly,
      formRef,
      onRefreshParentValues,
    });

  const {
    actionButtonProps: treeActionButtonProps,
    printButtonProps: treePrintButtonProps,
  } = useTreeToolbarButtons({
    toolbar,
    disabled: readOnly,
    parentContext: context,
    selectedRowItems: selectedRowKeys.map((key) => ({ id: key })),
    onRefreshParentValues,
  });

  return (
    <div className="flex mb-2 pt-3">
      <Title title={titleString} token={token} />
      <div className="flex-none h-8 pl-2">
        {mode !== "graph" && showCreateButton && (
          <ButtonWithTooltip
            tooltip={t("createNewItem")}
            icon={<FileAddOutlined />}
            disabled={readOnly}
            onClick={onCreateItem}
          />
        )}
        {isMany2Many && showCreateButton && (
          <>
            <Separator />
            <ButtonWithTooltip
              tooltip={t("searchExistingItem")}
              icon={<SearchOutlined />}
              disabled={readOnly}
              onClick={onSearchItem}
            />
          </>
        )}
        {mode !== "graph" && <Separator />}
        {mode !== "graph" && (
          <DeleteButton
            isMany2Many={isMany2Many}
            totalItems={totalItems}
            readOnly={readOnly}
            mode={mode}
            selectedRowKeys={selectedRowKeys}
            onDelete={onDelete}
          />
        )}
        {mode === "form" && (
          <ItemBrowser
            currentItemIndex={currentItemIndex}
            totalItems={totalItems}
            onPreviousItem={onPreviousItem}
            onNextItem={onNextItem}
          />
        )}
        <Separator />
        {showToggleButton && (
          <ButtonWithTooltip
            tooltip={t("toggleViewMode")}
            icon={<AlignLeftOutlined />}
            onClick={onToggleViewMode}
          />
        )}
        {toolbar && (
          <>
            <Separator />
            <DropdownButton
              icon={<ThunderboltOutlined />}
              {...(mode === "form" ? actionButtonProps : treeActionButtonProps)}
            />
            <Separator />
            <DropdownButton
              icon={<PrinterOutlined />}
              {...(mode === "form" ? printButtonProps : treePrintButtonProps)}
            />
            {mode === "form" && (
              <>
                <Separator />
                <DropdownButton
                  icon={<EnterOutlined />}
                  {...relateButtonProps}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const Title = memo(({ title, token }: { title: string; token: any }) => (
  <div
    className="flex flex-grow h-8 text-white"
    style={{
      borderRadius: token.borderRadius,
      backgroundColor: token.colorPrimaryActive,
    }}
  >
    <div className="flex flex-col items-center justify-center h-full">
      <span className="pl-2 font-bold">{title}</span>
    </div>
  </div>
));
Title.displayName = "Title";

const Separator = memo(() => <div className="inline-block w-3" />);
Separator.displayName = "Separator";

const ItemIndex = memo(
  ({
    currentItemIndex,
    totalItems,
  }: {
    currentItemIndex: number;
    totalItems: number;
  }) => {
    const itemToShow =
      totalItems === 0 ? "_" : (currentItemIndex + 1).toString();
    return (
      <span className="pl-1 pr-1">
        ({itemToShow}/{totalItems})
      </span>
    );
  },
);
ItemIndex.displayName = "ItemIndex";

const ItemBrowser = memo(
  ({
    currentItemIndex,
    totalItems,
    onPreviousItem,
    onNextItem,
  }: {
    currentItemIndex: number;
    totalItems: number;
    onPreviousItem: () => void;
    onNextItem: () => void;
  }) => {
    const { t } = useLocale();
    return (
      <>
        <Separator />
        <ButtonWithTooltip
          tooltip={t("previousItem")}
          icon={<LeftOutlined />}
          onClick={onPreviousItem}
        />
        <ItemIndex
          currentItemIndex={currentItemIndex}
          totalItems={totalItems}
        />
        <ButtonWithTooltip
          tooltip={t("nextItem")}
          icon={<RightOutlined />}
          onClick={onNextItem}
        />
      </>
    );
  },
);
ItemBrowser.displayName = "ItemBrowser";

const DeleteButton = memo(
  ({
    isMany2Many,
    totalItems,
    readOnly,
    mode,
    selectedRowKeys,
    onDelete,
  }: {
    isMany2Many: boolean;
    totalItems: number;
    readOnly: boolean;
    mode: ViewType;
    selectedRowKeys: string[];
    onDelete: () => void;
  }) => {
    const { t } = useLocale();
    return (
      <Badge count={selectedRowKeys.length}>
        <ButtonWithTooltip
          tooltip={isMany2Many ? t("unlink") : t("delete")}
          icon={isMany2Many ? <ApiOutlined /> : <DeleteOutlined />}
          onClick={onDelete}
          danger={!isMany2Many}
          type={isMany2Many ? "default" : "primary"}
          disabled={
            totalItems === 0 ||
            readOnly ||
            (mode !== "form" && selectedRowKeys.length === 0)
          }
        />
      </Badge>
    );
  },
);
DeleteButton.displayName = "DeleteButton";

export const One2manyTopBar = memo(One2manyTopBarComponent);
