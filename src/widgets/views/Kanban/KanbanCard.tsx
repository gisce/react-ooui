import { memo, useMemo, useState, MouseEvent, useCallback } from "react";
import { Card as AntCard, Button, Space, Typography, theme } from "antd";
import { useSortable } from "@dnd-kit/sortable";
import styled from "styled-components";
import { KanbanRecord } from "./types";
import { Kanban } from "@gisce/ooui";
import type { KanbanButton } from "@gisce/ooui/dist/Kanban";
import ConnectionProvider from "@/ConnectionProvider";
import { KANBAN_COMPONENTS } from "./kanbanComponents";
import { useErrorNotification } from "@/hooks/useErrorNotification";

const { Text } = Typography;
const { useToken } = theme;

const CardWrapper = styled.div``;

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
  overflow: visible;

  .ant-card-body {
    overflow: visible;
  }

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

const StatusDot = styled.div<{ $color: string }>`
  position: absolute;
  right: 8px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
`;

type KanbanCardProps = {
  record: KanbanRecord;
  kanbanDef: Kanban;
  draggable: boolean;
  model: string;
  color?: string;
  status?: string;
  context?: any;
  onClick?: () => void;
  onButtonClick?: (
    buttonName: string,
    recordId: number,
    oldRecord: KanbanRecord,
    newRecord?: KanbanRecord,
  ) => void;
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
    onButtonClick,
  } = props;
  const { token } = useToken();
  const [loadingButton, setLoadingButton] = useState<string | null>(null);
  const { showErrorNotification } = useErrorNotification();

  const { attributes, listeners, setNodeRef, isDragging } = useSortable({
    id: record.id,
    disabled: !draggable,
  });

  const style = {
    opacity: isDragging ? 0 : 1,
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
            model,
            action: button.id,
            payload: [record.id],
            context: {
              ...context,
              active_id: record.id,
              active_ids: [record.id],
            },
          });

          let newRecord: KanbanRecord | undefined;

          try {
            const fieldsObject = kanbanDef?.fields
              ? Object.keys(kanbanDef.fields).reduce(
                  (acc: any, fieldName: string) => {
                    acc[fieldName] = kanbanDef.fields[fieldName];
                    return acc;
                  },
                  {},
                )
              : {};

            const updatedRecords =
              await ConnectionProvider.getHandler().readObjects({
                model,
                ids: [record.id],
                fields: fieldsObject,
                context,
              });

            if (updatedRecords && updatedRecords.length > 0) {
              newRecord = updatedRecords[0];
            }
          } catch (readErr) {
            console.warn("Failed to fetch updated record:", readErr);
          }

          if (onButtonClick) {
            onButtonClick(button.id, record.id, record, newRecord);
          }
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
      onButtonClick,
      showErrorNotification,
      kanbanDef,
    ],
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

  return (
    <CardWrapper>
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
      </div>
    </CardWrapper>
  );
};

export const KanbanCard = memo(KanbanCardComponent);
