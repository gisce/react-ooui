import {
  memo,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { Badge, Button, Space, theme, Typography } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { KanbanCard } from "./KanbanCard";
import { KanbanRecord, ColumnDefinition } from "./types";
import { Kanban } from "@gisce/ooui";
import { useLocale } from "@gisce/react-formiga-components";
import { useKanbanColumnData } from "./useKanbanColumnData";

const { Text } = Typography;
const { useToken } = theme;

export type KanbanColumnRef = {
  refresh: () => void;
};

type KanbanColumnProps = {
  column: ColumnDefinition;
  columnField: string;
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  fieldsToRetrieve?: string[];
  kanbanDef: Kanban;
  draggable: boolean;
  allowSetMaxCards: boolean;
  maxCards?: number;
  isOver?: boolean;
  onCardClick?: (record: KanbanRecord) => void;
  onButtonClick?: (buttonName: string, recordId: number) => void;
  onMaxCardsChange?: (colId: string, maxCards: number | undefined) => void;
  onCountChange: (columnId: string, count: number) => void;
};

const KanbanColumnComponent = (
  props: KanbanColumnProps,
  ref: React.Ref<KanbanColumnRef>,
) => {
  const {
    column,
    columnField,
    model,
    domain,
    context = {},
    searchParams,
    fieldsToRetrieve,
    kanbanDef,
    draggable,
    maxCards,
    isOver = false,
    onCardClick,
    onButtonClick,
    onCountChange,
  } = props;

  const {
    id: columnId,
    label: columnLabel,
    originalValue: columnOriginalValue,
  } = column;

  const { t } = useLocale();
  const { token } = useToken();

  const {
    records,
    count,
    aggregates,
    colorsForRecords,
    statusForRecords,
    isLoading,
    refresh,
  } = useKanbanColumnData({
    model,
    domain,
    context,
    columnField,
    columnValue: columnOriginalValue,
    searchParams,
    fieldsToRetrieve,
    enabled: true,
    kanbanDef,
  });

  useImperativeHandle(ref, () => ({
    refresh,
  }));

  // Report count changes to parent
  useEffect(() => {
    onCountChange(columnId, count);
  }, [columnId, count, onCountChange]);

  const { setNodeRef } = useDroppable({
    id: columnId,
  });

  const recordIds = useMemo(() => records.map((r) => r.id), [records]);

  const isOverLimit = maxCards !== undefined && count > maxCards;

  const aggregatesSummary = useMemo(() => {
    return aggregates && Object.keys(aggregates).length > 0
      ? Object.values(aggregates)
          .map((agg) => `${agg.label}: ${agg.amount}`)
          .join(", ")
      : null;
  }, [aggregates]);

  const cardClickHandlers = useMemo(() => {
    if (!onCardClick) return {};
    return records.reduce<Record<number, () => void>>((acc, record) => {
      acc[record.id] = () => onCardClick(record);
      return acc;
    }, {});
  }, [records, onCardClick]);

  const hasStatusRibbon = useMemo(() => {
    return records.some((record) => statusForRecords?.current?.[record.id]);
  }, [records, statusForRecords]);

  return (
    <div
      ref={setNodeRef}
      style={{
        width: "300px",
        minWidth: "300px",
        height: "100%",
        backgroundColor: isOver ? token.colorPrimaryBg : token.colorBgLayout,
        outlineOffset: "-3px",
        outline: isOver ? `3px solid ${token.colorPrimary}` : "none",
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
            gap: "8px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              flex: 1,
              minWidth: 0,
            }}
          >
            <Text
              strong
              style={{
                color: token.colorTextBase,
                minWidth: 0,
                wordBreak: "break-word",
              }}
            >
              {columnLabel}
            </Text>
            <Badge
              count={count}
              style={{
                backgroundColor: isOverLimit
                  ? token.colorError
                  : token.colorPrimary,
                flexShrink: 0,
              }}
            />
          </div>
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
            }}
          >
            {isLoading ? (
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
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "6px",
          paddingRight: hasStatusRibbon ? "10px" : "6px",
          overflowY: "auto",
          flex: 1,
          backgroundColor: token.colorBgLayout,
        }}
      >
        <SortableContext
          items={recordIds}
          strategy={verticalListSortingStrategy}
          disabled={true}
        >
          {records.map((record) => (
            <KanbanCard
              color={colorsForRecords?.current?.[record.id]}
              status={statusForRecords?.current?.[record.id]}
              key={record.id}
              record={record}
              kanbanDef={kanbanDef}
              draggable={draggable}
              context={context}
              onClick={cardClickHandlers[record.id]}
              onButtonClick={onButtonClick}
            />
          ))}
        </SortableContext>

        {records.length === 0 && (
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

export const KanbanColumn = memo(
  forwardRef<KanbanColumnRef, KanbanColumnProps>(KanbanColumnComponent),
);
