import {
  memo,
  useState,
  useCallback,
  MouseEvent,
  useEffect,
  createElement,
} from "react";
import { Button, Space, Typography, theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { useSortable } from "@dnd-kit/sortable";
import { useDeepCompareMemo } from "use-deep-compare";
import { KanbanRecord } from "./types";
import {
  Kanban,
  Button as ButtonOoui,
  KanbanCard as OouiKanbanCard,
} from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useProcessAction } from "@/hooks/useProcessAction";
import { KANBAN_COMPONENTS } from "./kanbanComponents";
import { Icon } from "@gisce/react-formiga-components";
import {
  StyledCard,
  ColorBar,
  StatusDot,
  DropIndicator,
} from "./KanbanCard.styles";

const { Text, Link } = Typography;
const { useToken } = theme;

type KanbanCardProps = {
  record: KanbanRecord;
  kanbanDef: Kanban;
  draggable: boolean;
  model: string;
  color?: string;
  status?: string;
  context?: any;
  onClick?: () => void;
  onSelect?: (modifiers: { isCtrlCmd: boolean; isShift: boolean }) => void;
  onRefreshAll?: () => void;
  isMoving?: boolean;
  isDropTarget?: boolean;
  isSelected?: boolean;
  activeId?: number | null;
  columnId?: string;
  dropPosition?: "above" | "below" | null;
};

const KanbanCardComponent = (props: KanbanCardProps) => {
  const {
    record,
    kanbanDef,
    draggable,
    model,
    color,
    status,
    context = {},
    onClick,
    onSelect,
    onRefreshAll,
    isMoving = false,
    columnId,
    isDropTarget = false,
    isSelected = false,
    activeId = null,
    dropPosition = null,
  } = props;
  const { token } = useToken();
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const { showErrorNotification } = useErrorNotification();

  const [executeButton, cancelExecuteButton] = useNetworkRequest(
    ConnectionProvider.getHandler().execute,
  );

  useEffect(() => {
    return () => {
      cancelExecuteButton();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onActionCompleted = useCallback(async () => {
    onRefreshAll?.();
  }, [onRefreshAll]);

  const { runAction } = useProcessAction({
    context,
    onRefreshParentValues: onActionCompleted,
  });

  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: record.id,
    disabled: !draggable,
    data: { columnId },
  });

  const style = {
    opacity: isDragging || isMoving ? 0 : 1,
    cursor: "grab",
  };

  const { visibleButtons, widgetMap } = useDeepCompareMemo(() => {
    const kanbanCard = new OouiKanbanCard(kanbanDef);
    const container = kanbanCard.parse(record);
    const allWidgets = container.rows.flat();
    const buttons = allWidgets.filter(
      (w: any) => w instanceof ButtonOoui && !w.invisible,
    ) as ButtonOoui[];
    const map = new Map();
    allWidgets.forEach((w: any) => {
      if (w.id) {
        map.set(w.id, w);
      }
    });
    return {
      visibleButtons: buttons,
      widgetMap: map,
    };
  }, [kanbanDef, record]);

  const visibleFields = useDeepCompareMemo(() => {
    return kanbanDef.card_fields.filter((field: any) => {
      const widget = widgetMap.get(field.id);
      return !widget || !widget.invisible;
    });
  }, [kanbanDef.card_fields, widgetMap]);

  const renderField = useCallback(
    (field: any, isFirstField: boolean) => {
      const fieldName = field.id;
      if (!fieldName || !kanbanDef.fields[fieldName]) {
        return null;
      }

      let fieldValue = record[fieldName];
      const fieldType = field.type as string;
      const fieldDef = kanbanDef.fields[fieldName];

      if (
        fieldType === "many2one" &&
        Array.isArray(fieldValue) &&
        fieldValue.length === 2
      ) {
        fieldValue = {
          id: fieldValue[0],
          value: fieldValue[1],
          model: fieldDef?.relation,
        };
      }

      const component = (KANBAN_COMPONENTS as any)?.[fieldType];

      const handleFieldClick = (e: MouseEvent) => {
        if (fieldType === "many2one") {
          e.stopPropagation();
        }
      };

      const handleLinkClick = (e: MouseEvent) => {
        e.stopPropagation();
        onClick?.();
      };

      const renderLabel = () =>
        !field.nolabel ? (
          <Text type="secondary" style={{ fontSize: "12px" }}>
            {field.label || fieldName}:{" "}
          </Text>
        ) : null;

      if (component && fieldValue) {
        const renderedContent = createElement(component, {
          value: fieldValue,
          key: fieldName,
          ooui: field,
          context,
        });

        const fieldContent = (
          <>
            {renderLabel()}
            <span style={{ fontSize: "12px", fontWeight: 600 }}>
              {renderedContent}
            </span>
          </>
        );

        if (isFirstField && onClick) {
          return (
            <div key={fieldName} style={{ marginBottom: "4px" }}>
              <Link onClick={handleLinkClick}>{fieldContent}</Link>
            </div>
          );
        }

        return (
          <div
            key={fieldName}
            style={{ marginBottom: "4px" }}
            onClick={handleFieldClick}
          >
            {fieldContent}
          </div>
        );
      }

      const simpleFieldContent = (
        <>
          {renderLabel()}
          <Text strong style={{ fontSize: "12px" }}>
            {fieldValue ? fieldValue.toString() : "-"}
          </Text>
        </>
      );

      if (isFirstField && onClick) {
        return (
          <div key={fieldName} style={{ marginBottom: "4px" }}>
            <Link onClick={handleLinkClick}>{simpleFieldContent}</Link>
          </div>
        );
      }

      return (
        <div key={fieldName} style={{ marginBottom: "4px" }}>
          {simpleFieldContent}
        </div>
      );
    },
    [record, context, kanbanDef.fields, onClick],
  );

  const handleButtonClick = useCallback(
    async (e: MouseEvent, button: ButtonOoui) => {
      e.stopPropagation();

      if (loadingButton) {
        return;
      }

      setLoadingButton(button.id);

      try {
        if (button.buttonType === "object") {
          const result = await executeButton({
            model,
            action: button.id,
            payload: [record.id],
            context: {
              ...context,
              active_id: record.id,
              active_ids: [record.id],
            },
          });

          if (result && typeof result === "object" && result.type) {
            await runAction({
              actionData: result,
            });
            return;
          }

          onRefreshAll?.();
        }
      } catch (err) {
        showErrorNotification(err);
      } finally {
        setLoadingButton(null);
      }
    },
    [
      loadingButton,
      model,
      record,
      context,
      executeButton,
      runAction,
      onRefreshAll,
      showErrorNotification,
    ],
  );

  const buttonClickHandlers = useDeepCompareMemo(() => {
    return visibleButtons.reduce<Record<string, (e: MouseEvent) => void>>(
      (acc, button) => {
        acc[button.id] = (e: MouseEvent) => handleButtonClick(e, button);
        return acc;
      },
      {},
    );
  }, [visibleButtons, handleButtonClick]);

  const handleCardClick = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) {
        return;
      }
      e.stopPropagation();
      onSelect?.({
        isCtrlCmd: e.metaKey || e.ctrlKey,
        isShift: e.shiftKey,
      });
    },
    [onSelect],
  );

  const showDropIndicator =
    isDropTarget && activeId !== null && dropPosition !== null;

  return (
    <div
      ref={setNodeRef}
      style={{ ...style, position: "relative" }}
      {...attributes}
      {...listeners}
    >
      {showDropIndicator && (
        <DropIndicator $color={token.colorPrimary} $position={dropPosition} />
      )}
      <StyledCard
        size="small"
        onClick={handleCardClick}
        $bgColor={token.colorBgContainer}
        $borderColor={token.colorBorder}
        $primaryColor={token.colorPrimary}
        $color={color}
        $isDraggingActive={activeId !== null}
        $isSelected={isSelected}
        $selectedBgColor={token.colorPrimaryBg}
        styles={{
          body: {
            padding: "12px",
            paddingLeft: "20px",
            paddingTop: "12px",
            paddingRight: status ? "20px" : "12px",
          },
        }}
      >
        {color && <ColorBar $color={color} />}
        {status && <StatusDot $color={status} />}
        <ErrorBoundary>
          <div style={{ marginBottom: "8px" }}>
            {visibleFields.map((field: any, index: number) =>
              renderField(field, index === 0),
            )}
          </div>

          {visibleButtons.length > 0 && (
            <Space size={[8, 8]} wrap>
              {visibleButtons.map((button: ButtonOoui) => (
                <Button
                  key={button.id}
                  size="small"
                  type={button.primary ? "primary" : "default"}
                  danger={button.danger}
                  loading={loadingButton === button.id}
                  onClick={buttonClickHandlers[button.id]}
                  icon={button.icon ? <Icon icon={button.icon} /> : undefined}
                >
                  {button.caption || button.label || button.id}
                </Button>
              ))}
            </Space>
          )}
        </ErrorBoundary>
      </StyledCard>
    </div>
  );
};

export const KanbanCard = memo(KanbanCardComponent);
