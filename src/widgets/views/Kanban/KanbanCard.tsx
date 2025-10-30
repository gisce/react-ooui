import { memo, useMemo, useState, MouseEvent, useCallback } from "react";
import { Card as AntCard, Button, Space, Typography, theme } from "antd";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { KanbanRecord } from "./useKanbanData";
import { Kanban, Button as KanbanButton } from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { COLUMN_COMPONENTS } from "../Tree/treeComponents";

const { Text } = Typography;
const { useToken } = theme;

type KanbanCardProps = {
  record: KanbanRecord;
  kanbanDef: Kanban;
  draggable: boolean;
  color?: string;
  context?: any;
  onClick?: () => void;
  onButtonClick?: (buttonName: string, recordId: number) => void;
};

const KanbanCardComponent = (props: KanbanCardProps) => {
  const {
    record,
    kanbanDef,
    draggable,
    color,
    context = {},
    onClick,
    onButtonClick,
  } = props;
  const { token } = useToken();
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: record.id,
    disabled: !draggable,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "pointer",
  };

  const renderField = useCallback(
    (field: any) => {
      const fieldName = field.id;
      const fieldValue = record[fieldName];
      const fieldType = field.type as string;

      const component = (COLUMN_COMPONENTS as any)?.[fieldType];

      if (component) {
        const renderedContent = component({
          value: fieldValue,
          key: fieldName,
          ooui: field,
          context,
        });

        return (
          <div key={fieldName} style={{ marginBottom: "4px" }}>
            <Text strong style={{ fontSize: "12px" }}>
              {field.label || fieldName}:{" "}
            </Text>
            <span style={{ fontSize: "12px" }}>{renderedContent}</span>
          </div>
        );
      }

      return (
        <div key={fieldName} style={{ marginBottom: "4px" }}>
          <Text strong style={{ fontSize: "12px" }}>
            {field.label || fieldName}:{" "}
          </Text>
          <Text style={{ fontSize: "12px" }}>
            {fieldValue?.toString() || "-"}
          </Text>
        </div>
      );
    },
    [record, context],
  );

  const visibleButtons = useMemo(() => {
    return kanbanDef.buttons.filter((button: any) => {
      if (!button.states) {
        return true;
      }

      const currentState = record.state || record.status;
      if (!currentState) {
        return true;
      }

      const allowedStates = button.states
        .split(",")
        .map((s: string) => s.trim());
      return allowedStates.includes(currentState);
    });
  }, [kanbanDef.buttons, record]);

  const handleButtonClick = useCallback(
    async (e: MouseEvent, button: KanbanButton) => {
      e.stopPropagation();

      if (loadingButton) {
        return;
      }

      setLoadingButton(button.id);

      try {
        if (button.buttonType === "object") {
          await ConnectionProvider.getHandler().execute({
            model: record.__model || "",
            method: button.id,
            args: [[record.id]],
          } as any);

          if (onButtonClick) {
            onButtonClick(button.id, record.id);
          }
        }
      } catch (err) {
        console.error("Error executing button action:", err);
      } finally {
        setLoadingButton(null);
      }
    },
    [loadingButton, record, onButtonClick],
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <AntCard
        size="small"
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          marginBottom: "8px",
          backgroundColor: token.colorBgContainer,
          border: `1px solid ${token.colorBorder}`,
          outline: isHovered ? `2px solid ${token.colorPrimary}` : "none",
          outlineOffset: "-1px",
        }}
        styles={{
          body: {
            padding: "12px",
          },
        }}
      >
        {color && (
          <div
            style={{
              width: "40px",
              height: "8px",
              backgroundColor: color,
              borderRadius: "4px",
              marginBottom: "8px",
            }}
          />
        )}
        <div style={{ marginBottom: "8px" }}>
          {kanbanDef.card_fields.map((field: any) => renderField(field))}
        </div>

        {visibleButtons.length > 0 && (
          <Space size="small" wrap>
            {visibleButtons.map((button: any) => (
              <Button
                key={button.id}
                size="small"
                type={button.primary ? "primary" : "default"}
                danger={button.danger}
                loading={loadingButton === button.id}
                onClick={(e) => handleButtonClick(e, button)}
              >
                {button.caption || button.id}
              </Button>
            ))}
          </Space>
        )}
      </AntCard>
    </div>
  );
};

export const KanbanCard = memo(KanbanCardComponent);
