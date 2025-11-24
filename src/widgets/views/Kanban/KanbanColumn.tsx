import {
  memo,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useDeepCompareEffect } from "use-deep-compare";
import { Badge, Button, Space, theme, Typography } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useVirtualizer } from "@tanstack/react-virtual";
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
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  nameSearch?: string;
  fieldsToRetrieve?: string[];
  kanbanDef: Kanban;
  allowSetMaxCards: boolean;
  maxCards?: number;
  isOver?: boolean;
  onCardClick?: (record: KanbanRecord) => void;
  onMaxCardsChange?: (colId: string, maxCards: number | undefined) => void;
  onCountChange: (columnId: string, count: number) => void;
  onRecordsUpdate?: (
    records: KanbanRecord[],
    colors: { [key: number]: string },
    status: { [key: number]: string },
  ) => void;
  onAddCardClick?: () => void;
  onRefreshAll?: () => void;
  activeId?: number | null;
  overId?: number | null;
  dropPosition?: "above" | "below" | null;
};

const KanbanColumnComponent = (
  props: KanbanColumnProps,
  ref: React.Ref<KanbanColumnRef>,
) => {
  const {
    column,
    model,
    domain,
    context = {},
    searchParams,
    nameSearch,
    fieldsToRetrieve,
    kanbanDef,
    maxCards,
    isOver = false,
    onCardClick,
    onCountChange,
    onRecordsUpdate,
    onAddCardClick,
    onRefreshAll,
    activeId = null,
    overId = null,
    dropPosition = null,
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
    isLoadingMore,
    isRefreshing,
    hasMore,
    refresh,
    fetchNextPage,
  } = useKanbanColumnData({
    model,
    domain,
    context,
    columnValue: columnOriginalValue,
    searchParams,
    nameSearch,
    fieldsToRetrieve,
    enabled: true,
    kanbanDef,
  });

  useImperativeHandle(
    ref,
    () => ({
      refresh,
    }),
    [refresh],
  );

  // Report count changes to parent
  useEffect(() => {
    onCountChange(columnId, count);
  }, [columnId, count, onCountChange]);

  // Report records updates to parent (for drag overlay)
  useDeepCompareEffect(() => {
    if (onRecordsUpdate && records.length > 0) {
      onRecordsUpdate(records, colorsForRecords, statusForRecords);
    }
  }, [records, colorsForRecords, statusForRecords, onRecordsUpdate]);

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
    return records.some((record) => statusForRecords?.[record.id]);
  }, [records, statusForRecords]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const estimatedCardHeight = useMemo(() => {
    const cardPadding = 24;
    const fieldsContainerMargin = 8;
    const cardWrapperMargin = 8;
    const fieldHeight = 24;
    const buttonAreaHeight = kanbanDef.buttons.length > 0 ? 40 : 0;

    const numFields = kanbanDef.card_fields.length;
    const totalFieldsHeight = numFields * fieldHeight;

    return (
      cardPadding +
      fieldsContainerMargin +
      totalFieldsHeight +
      buttonAreaHeight +
      cardWrapperMargin
    );
  }, [kanbanDef.card_fields.length, kanbanDef.buttons.length]);

  const virtualizer = useVirtualizer({
    count: records.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: useCallback(() => estimatedCardHeight, [estimatedCardHeight]),
    overscan: 5,
  });

  const virtualItems = virtualizer.getVirtualItems();

  useEffect(() => {
    const [lastItem] = [...virtualItems].reverse();

    if (!lastItem) {
      return;
    }

    if (lastItem.index >= records.length - 5 && hasMore && !isLoadingMore) {
      fetchNextPage();
    }
  }, [virtualItems, records.length, hasMore, isLoadingMore, fetchNextPage]);

  if (count === 0 && !kanbanDef.drag) {
    return null;
  }

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
            {isLoading || isRefreshing ? (
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
        ref={scrollContainerRef}
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
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize() + 16}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {/* Spacer for drop indicator above first card */}
            <div style={{ height: "8px" }} />

            {virtualItems.map((virtualRow) => {
              const record = records[virtualRow.index];
              return (
                <div
                  key={record.id}
                  data-index={virtualRow.index}
                  ref={virtualizer.measureElement}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    transform: `translateY(${virtualRow.start + 8}px)`,
                    paddingBottom: "8px",
                  }}
                >
                  <KanbanCard
                    color={colorsForRecords?.[record.id]}
                    status={statusForRecords?.[record.id]}
                    record={record}
                    kanbanDef={kanbanDef}
                    draggable={kanbanDef.drag}
                    context={context}
                    model={model}
                    onClick={cardClickHandlers[record.id]}
                    onRefreshAll={onRefreshAll}
                    columnId={columnId}
                    isDropTarget={overId === record.id}
                    activeId={activeId}
                    dropPosition={dropPosition}
                  />
                </div>
              );
            })}

            {/* Spacer for drop indicator below last card */}
            <div style={{ height: "8px" }} />
          </div>
        </SortableContext>

        {isLoadingMore && (
          <div
            style={{
              textAlign: "center",
              padding: "12px",
            }}
          >
            <Space size={4}>
              <LoadingOutlined
                style={{ fontSize: "11px", color: token.colorTextBase }}
              />
              <Text type="secondary" style={{ fontSize: "11px" }}>
                {t("loading")}
              </Text>
            </Space>
          </div>
        )}

        {records.length === 0 && !isLoading && (
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
          onClick={onAddCardClick}
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
