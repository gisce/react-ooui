import { memo, useMemo, useState, MouseEvent, useCallback } from "react";
import { Card as AntCard, Badge, Button, Space, Typography, theme } from "antd";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styled from "styled-components";
import { KanbanRecord } from "./useKanbanData";
import { Kanban } from "@gisce/ooui";
import type { KanbanButton } from "@gisce/ooui/dist/Kanban";
import ConnectionProvider from "@/ConnectionProvider";
import { KANBAN_COMPONENTS } from "./kanbanComponents";
import { Icon } from "@gisce/react-formiga-components";

const { Text } = Typography;
const { useToken } = theme;

const CardWrapper = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledCard = styled(AntCard)<{
  $bgColor: string;
  $borderColor: string;
  $primaryColor: string;
  $color?: string;
}>`
  position: relative;
  background-color: ${(props) => props.$bgColor};
  border: 1px solid ${(props) => props.$borderColor};
  outline: none;
  outline-offset: -1px;

  &:hover {
    outline: 3px solid ${(props) => props.$color || props.$primaryColor};
  }
`;

const ColorBar = styled.div<{ $color: string }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: ${(props) => props.$color};
  border-radius: 7px 0 0 7px;
`;

type KanbanCardProps = {
  record: KanbanRecord;
  kanbanDef: Kanban;
  draggable: boolean;
  color?: string;
  status?: string;
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
    status,
    context = {},
    onClick,
    onButtonClick,
  } = props;
  const { token } = useToken();
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

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
      let fieldValue = record[fieldName];
      const fieldType = field.type as string;

      if (
        fieldType === "many2one" &&
        Array.isArray(fieldValue) &&
        fieldValue.length === 2
      ) {
        fieldValue = {
          id: fieldValue[0],
          value: fieldValue[1],
          model: field.relation,
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
    [record, context],
  );

  const visibleButtons = useMemo(() => {
    return kanbanDef.buttons.filter((button: KanbanButton) => {
      if (!button.states) {
        return true;
      }

      const currentState = record[kanbanDef.column_field];
      if (!currentState) {
        return true;
      }

      const allowedStates = button.states
        .split(",")
        .map((s: string) => s.trim());
      return allowedStates.includes(currentState);
    });
  }, [kanbanDef.buttons, kanbanDef.column_field, record]);

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

  const buttonClickHandlers = useMemo(() => {
    return visibleButtons.reduce<Record<string, (e: MouseEvent) => void>>(
      (acc, button) => {
        acc[button.id] = (e: MouseEvent) => handleButtonClick(e, button);
        return acc;
      },
      {},
    );
  }, [visibleButtons, handleButtonClick]);

  const cardContent = (
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
          paddingRight: status ? "16px" : "12px",
        },
      }}
    >
      {color && <ColorBar $color={color} />}
      <div style={{ marginBottom: "8px" }}>
        {kanbanDef.card_fields.map((field: any) => renderField(field))}
      </div>

      {visibleButtons.length > 0 && (
        <Space size="small" wrap>
          {visibleButtons.map((button: KanbanButton) => (
            <Button
              key={button.id}
              size="small"
              type={button.primary ? "primary" : "default"}
              danger={button.danger}
              loading={loadingButton === button.id}
              onClick={buttonClickHandlers[button.id]}
            >
              {button.caption || button.id}
            </Button>
          ))}
        </Space>
      )}
    </StyledCard>
  );

  return (
    <CardWrapper>
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        {status ? (
          <Badge.Ribbon text={"●"} color={status}>
            {cardContent}
          </Badge.Ribbon>
        ) : (
          cardContent
        )}
      </div>
    </CardWrapper>
  );
};

export const KanbanCard = memo(KanbanCardComponent);
