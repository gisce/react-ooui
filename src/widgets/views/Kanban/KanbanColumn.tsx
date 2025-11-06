import { memo, RefObject } from "react";
import { Badge, Button, Space, theme, Typography } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { KanbanCard } from "./KanbanCard";
import {
  KanbanColumn as KanbanColumnType,
  KanbanRecord,
} from "./useKanbanData";
import { Kanban } from "@gisce/ooui";
import { useLocale } from "@gisce/react-formiga-components";
import { KanbanColumnAggregates as KanbanColumnAggregatesType } from "./useKanbanAggregates";

const { Text } = Typography;
const { useToken } = theme;

type KanbanColumnProps = {
  column: KanbanColumnType;
  kanbanDef: Kanban;
  draggable: boolean;
  colorsForRecords?: RefObject<{ [key: number]: string }>;
  sortable: boolean;
  allowSetMaxCards: boolean;
  maxCards?: number;
  context?: any;
  aggregates?: KanbanColumnAggregatesType;
  isLoadingAggregates?: boolean;
  onCardClick?: (record: KanbanRecord) => void;
  onButtonClick?: (buttonName: string, recordId: number) => void;
  onMaxCardsChange?: (colId: string, maxCards: number | undefined) => void;
};

const KanbanColumnComponent = (props: KanbanColumnProps) => {
  const {
    column,
    kanbanDef,
    draggable,
    colorsForRecords,
    sortable,
    maxCards,
    context = {},
    aggregates,
    isLoadingAggregates = false,
    onCardClick,
    onButtonClick,
  } = props;

  const { t } = useLocale();
  const { token } = useToken();

  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  const recordIds = column.records.map((r) => r.id);

  const isOverLimit = maxCards !== undefined && column.count > maxCards;

  const aggregatesSummary =
    aggregates && Object.keys(aggregates).length > 0
      ? Object.values(aggregates)
          .map((agg) => `${agg.label}: ${agg.amount}`)
          .join(", ")
      : null;

  return (
    <div
      style={{
        width: "300px",
        minWidth: "300px",
        height: "100%",
        backgroundColor: isOver ? token.colorPrimaryBg : token.colorBgLayout,
        border: isOver ? `2px solid ${token.colorPrimary}` : "none",
        borderRadius: token.borderRadiusLG,
        transition: "all 0.2s",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: `linear-gradient(to bottom, ${token.colorPrimaryBg} 0%, ${token.colorBgLayout} 90%)`,
          padding: "12px 12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Space>
            <Text strong style={{ color: token.colorTextBase }}>
              {column.label}
            </Text>
            <Badge
              count={column.count}
              style={{
                backgroundColor: isOverLimit
                  ? token.colorError
                  : token.colorPrimary,
              }}
            />
          </Space>
          <Space size={8}>
            {isLoadingAggregates ? (
              <Space size={4}>
                <LoadingOutlined
                  style={{ fontSize: "11px", color: token.colorTextBase }}
                />
                <Text type="secondary" style={{ fontSize: "11px" }}>
                  {t("loading")}
                </Text>
              </Space>
            ) : aggregatesSummary ? (
              <Text
                type="secondary"
                style={{ fontWeight: 300, fontSize: "11px" }}
              >
                {aggregatesSummary}
              </Text>
            ) : null}
          </Space>
        </div>
      </div>

      <div
        ref={setNodeRef}
        style={{
          padding: "6px",
          overflowY: "auto",
          flex: 1,
          backgroundColor: token.colorBgLayout,
        }}
      >
        <SortableContext
          items={recordIds}
          strategy={verticalListSortingStrategy}
          disabled={!sortable}
        >
          {column.records.map((record) => (
            <KanbanCard
              color={colorsForRecords?.current?.[record.id]}
              key={record.id}
              record={record}
              kanbanDef={kanbanDef}
              draggable={draggable}
              context={context}
              onClick={() => onCardClick?.(record)}
              onButtonClick={onButtonClick}
            />
          ))}
        </SortableContext>

        {column.records.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              color: token.colorTextSecondary,
            }}
          >
            <Text type="secondary">{t("no_records")}</Text>
          </div>
        )}
      </div>

      <div
        style={{
          background: token.colorBgLayout,
          padding: "10px 8px",
        }}
      >
        <Button
          type="text"
          icon={<PlusOutlined />}
          style={{
            width: "100%",
            color: token.colorTextBase,
            fontWeight: 400,
          }}
        >
          {t("add_card")}
        </Button>
      </div>
    </div>
  );
};

export const KanbanColumn = memo(KanbanColumnComponent);
