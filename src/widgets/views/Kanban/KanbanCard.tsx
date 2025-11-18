import { memo, useState, useCallback, MouseEvent, useEffect } from "react";
import { Button, Space, Typography, theme } from "antd";
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
import { StyledCard, ColorBar, StatusDot } from "./KanbanCard.styles";

const { Text } = Typography;
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
  onRefreshAll?: () => void;
  isMoving?: boolean;
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
    onRefreshAll,
    isMoving = false,
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
  });

  const style = {
    opacity: isDragging || isMoving ? 0 : 1,
    cursor: "pointer",
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
    (field: any) => {
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

      if (component && fieldValue) {
        const renderedContent = component({
          value: fieldValue,
          key: fieldName,
          ooui: field,
          context,
        });

        const handleFieldClick = (e: MouseEvent) => {
          if (fieldType === "many2one") {
            e.stopPropagation();
          }
        };

        return (
          <div
            key={fieldName}
            style={{ marginBottom: "4px" }}
            onClick={handleFieldClick}
          >
            {!field.nolabel && (
              <Text type="secondary" style={{ fontSize: "12px" }}>
                {field.label || fieldName}:{" "}
              </Text>
            )}
            <span style={{ fontSize: "12px", fontWeight: 600 }}>
              {renderedContent}
            </span>
          </div>
        );
      }

      return (
        <div key={fieldName} style={{ marginBottom: "4px" }}>
          {!field.nolabel && (
            <Text type="secondary" style={{ fontSize: "12px" }}>
              {field.label || fieldName}:{" "}
            </Text>
          )}
          <Text strong style={{ fontSize: "12px" }}>
            {fieldValue ? fieldValue.toString() : "-"}
          </Text>
        </div>
      );
    },
    [record, context, kanbanDef.fields],
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

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <StyledCard
        size="small"
        onClick={onClick}
        $bgColor={token.colorBgContainer}
        $borderColor={token.colorBorder}
        $primaryColor={token.colorPrimary}
        $color={color}
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
        <div style={{ marginBottom: "8px" }}>
          {visibleFields.map((field: any) => renderField(field))}
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
      </StyledCard>
    </div>
  );
};

export const KanbanCard = memo(KanbanCardComponent);
