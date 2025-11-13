import {
  memo,
  useMemo,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
  useCallback,
  useState,
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
  updateRecord: (id: number, updatedValues: Partial<KanbanRecord>) => void;
};

type KanbanColumnProps = {
  column: ColumnDefinition;
  columnField: string;
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  nameSearch?: string;
  fieldsToRetrieve?: string[];
  kanbanDef: Kanban;
  draggable: boolean;
  allowSetMaxCards: boolean;
  maxCards?: number;
  isOver?: boolean;
  onCardClick?: (record: KanbanRecord) => void;
  onButtonClick?: (
    buttonName: string,
    recordId: number,
    oldRecord: KanbanRecord,
    newRecord?: KanbanRecord,
  ) => void;
  onMaxCardsChange?: (colId: string, maxCards: number | undefined) => void;
  onCountChange: (columnId: string, count: number) => void;
  onRecordsUpdate?: (records: KanbanRecord[], colors: any, status: any) => void;
  onAddCardClick?: () => void;
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
    nameSearch,
    fieldsToRetrieve,
    kanbanDef,
    draggable,
    maxCards,
    isOver = false,
    onCardClick,
    onButtonClick,
    onCountChange,
    onRecordsUpdate,
    onAddCardClick,
  } = props;

  const {
    id: columnId,
    label: columnLabel,
    originalValue: columnOriginalValue,
  } = column;

  const { t } = useLocale();
  const { token } = useToken();

  const {
    records: hookRecords,
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
    columnField,
    columnValue: columnOriginalValue,
    searchParams,
    nameSearch,
    fieldsToRetrieve,
    enabled: true,
    kanbanDef,
  });

  const [localRecords, setLocalRecords] = useState<KanbanRecord[]>(hookRecords);

  useDeepCompareEffect(() => {
    setLocalRecords(hookRecords);
  }, [hookRecords]);

  const updateRecord = useCallback(
    (id: number, updatedValues: Partial<KanbanRecord>) => {
      setLocalRecords((prevRecords) => {
        const existingIndex = prevRecords.findIndex((r) => r.id === id);
        const existingRecord = prevRecords[existingIndex];

        const updatedRecord = existingRecord
          ? { ...existingRecord, ...updatedValues }
          : ({ id, ...updatedValues } as KanbanRecord);

        const recordColumnValue = updatedRecord[columnField];

        const shouldBeInThisColumn = (() => {
          if (
            Array.isArray(columnOriginalValue) &&
            columnOriginalValue.length === 2
          ) {
            if (
              Array.isArray(recordColumnValue) &&
              recordColumnValue.length === 2
            ) {
              return recordColumnValue[0] === columnOriginalValue[0];
            }
            return recordColumnValue === columnOriginalValue[0];
          }

          if (
            Array.isArray(recordColumnValue) &&
            recordColumnValue.length === 2
          ) {
            return recordColumnValue[0] === columnOriginalValue;
          }

          return recordColumnValue === columnOriginalValue;
        })();

        if (shouldBeInThisColumn) {
          if (existingRecord) {
            const updated = [...prevRecords];
            updated[existingIndex] = updatedRecord;
            return updated;
          } else {
            return [updatedRecord, ...prevRecords];
          }
        } else {
          return prevRecords.filter((r) => r.id !== id);
        }
      });
    },
    [columnField, columnOriginalValue],
  );

  useImperativeHandle(
    ref,
    () => ({
      refresh,
      updateRecord,
    }),
    [refresh, updateRecord],
  );

  // Report count changes to parent
  useEffect(() => {
    onCountChange(columnId, count);
  }, [columnId, count, onCountChange]);

  // Report records updates to parent (for drag overlay)
  useDeepCompareEffect(() => {
    if (onRecordsUpdate && localRecords.length > 0) {
      onRecordsUpdate(localRecords, colorsForRecords, statusForRecords);
    }
  }, [localRecords, colorsForRecords, statusForRecords, onRecordsUpdate]);

  const { setNodeRef } = useDroppable({
    id: columnId,
  });

  const recordIds = useMemo(
    () => localRecords.map((r) => r.id),
    [localRecords],
  );

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
    return localRecords.reduce<Record<number, () => void>>((acc, record) => {
      acc[record.id] = () => onCardClick(record);
      return acc;
    }, {});
  }, [localRecords, onCardClick]);

  const hasStatusRibbon = useMemo(() => {
    return localRecords.some(
      (record) => statusForRecords?.current?.[record.id],
    );
  }, [localRecords, statusForRecords]);

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
    count: localRecords.length,
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

    if (
      lastItem.index >= localRecords.length - 5 &&
      hasMore &&
      !isLoadingMore
    ) {
      fetchNextPage();
    }
  }, [
    virtualItems,
    localRecords.length,
    hasMore,
    isLoadingMore,
    fetchNextPage,
  ]);

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
          disabled={true}
        >
          <div
            style={{
              height: `${virtualizer.getTotalSize()}px`,
              width: "100%",
              position: "relative",
            }}
          >
            {virtualItems.map((virtualRow) => {
              const record = localRecords[virtualRow.index];
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
                    transform: `translateY(${virtualRow.start}px)`,
                    paddingBottom: "8px",
                  }}
                >
                  <KanbanCard
                    color={colorsForRecords?.current?.[record.id]}
                    status={statusForRecords?.current?.[record.id]}
                    record={record}
                    kanbanDef={kanbanDef}
                    draggable={draggable}
                    context={context}
                    model={model}
                    onClick={cardClickHandlers[record.id]}
                    onButtonClick={onButtonClick}
                  />
                </div>
              );
            })}
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

        {localRecords.length === 0 && !isLoading && (
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
