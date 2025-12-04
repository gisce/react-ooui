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
import {
  Badge,
  Button,
  Dropdown,
  MenuProps,
  Space,
  theme,
  Typography,
} from "antd";
import {
  EllipsisOutlined,
  LoadingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useVirtualizer } from "@tanstack/react-virtual";
import { KanbanCard } from "./KanbanCard";
import { KanbanRecord, ColumnDefinition } from "./types";
import { Kanban } from "@gisce/ooui";
import { useLocale, getTablerIcon } from "@gisce/react-formiga-components";
import { useKanbanColumnData } from "./useKanbanColumnData";
import { SetColumnLimitModal } from "./SetColumnLimitModal";

const { Text } = Typography;
const { useToken } = theme;

const IconListNumbers = getTablerIcon("IconListNumbers") as React.FC<any>;
const IconExternalLink = getTablerIcon("IconExternalLink") as React.FC<any>;
const IconArrowLeft = getTablerIcon("IconArrowLeft") as React.FC<any>;
const IconArrowRight = getTablerIcon("IconArrowRight") as React.FC<any>;

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
    columnId: string,
    records: KanbanRecord[],
    colors: { [key: number]: string },
    status: { [key: number]: string },
  ) => void;
  onAddCardClick?: () => void;
  onRefreshAll?: () => void;
  onOpenColumnInNewTab?: (domain: any[]) => void;
  onMoveLeft?: () => void;
  onMoveRight?: () => void;
  isFirstColumn?: boolean;
  isLastColumn?: boolean;
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
    allowSetMaxCards,
    maxCards,
    isOver = false,
    onCardClick,
    onMaxCardsChange,
    onCountChange,
    onRecordsUpdate,
    onAddCardClick,
    onRefreshAll,
    onOpenColumnInNewTab,
    onMoveLeft,
    onMoveRight,
    isFirstColumn = false,
    isLastColumn = false,
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
  const [showLimitModal, setShowLimitModal] = useState(false);

  const {
    records,
    count,
    aggregates,
    colorsForRecords,
    statusForRecords,
    columnDomain,
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

  useEffect(() => {
    onCountChange(columnId, count);
  }, [columnId, count, onCountChange]);

  useDeepCompareEffect(() => {
    if (onRecordsUpdate && records.length > 0) {
      onRecordsUpdate(columnId, records, colorsForRecords, statusForRecords);
    }
  }, [columnId, records, colorsForRecords, statusForRecords, onRecordsUpdate]);

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

  const previousAggregatesSummaryRef = useRef<string | null>(null);

  useEffect(() => {
    if (aggregatesSummary && !isLoading && !isRefreshing) {
      previousAggregatesSummaryRef.current = aggregatesSummary;
    }
  }, [aggregatesSummary, isLoading, isRefreshing]);

  const displayAggregates = useMemo(() => {
    if (aggregatesSummary && !isLoading && !isRefreshing) {
      return aggregatesSummary;
    }
    if (previousAggregatesSummaryRef.current) {
      return previousAggregatesSummaryRef.current;
    }
    if (isLoading && aggregates && Object.keys(aggregates).length > 0) {
      return Object.values(aggregates)
        .map((agg) => `${agg.label}: ...`)
        .join(", ");
    }
    return null;
  }, [aggregatesSummary, aggregates, isLoading, isRefreshing]);

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

  const menuItems: MenuProps["items"] = useMemo(
    () => [
      {
        type: "group" as const,
        label: t("column"),
        children: [
          {
            key: "openInNewTab",
            label: t("open_column_in_new_tab"),
            icon: <IconExternalLink size={16} />,
          },
          {
            key: "setLimit",
            label: t("set_limit"),
            icon: <IconListNumbers size={16} />,
            disabled: !allowSetMaxCards,
          },
        ],
      },
      {
        type: "group" as const,
        label: t("position"),
        children: [
          {
            key: "moveLeft",
            label: t("move_left"),
            icon: <IconArrowLeft size={16} />,
            disabled: isFirstColumn,
          },
          {
            key: "moveRight",
            label: t("move_right"),
            icon: <IconArrowRight size={16} />,
            disabled: isLastColumn,
          },
        ],
      },
    ],
    [t, allowSetMaxCards, isFirstColumn, isLastColumn],
  );

  const handleMenuClick: MenuProps["onClick"] = useCallback(
    ({ key }: { key: string }) => {
      if (key === "openInNewTab") {
        onOpenColumnInNewTab?.(columnDomain);
      } else if (key === "setLimit") {
        setShowLimitModal(true);
      } else if (key === "moveLeft") {
        onMoveLeft?.();
      } else if (key === "moveRight") {
        onMoveRight?.();
      }
    },
    [onOpenColumnInNewTab, columnDomain, onMoveLeft, onMoveRight],
  );

  const handleLimitSave = useCallback(
    (limit: number | undefined) => {
      onMaxCardsChange?.(columnId, limit);
      setShowLimitModal(false);
    },
    [onMaxCardsChange, columnId],
  );

  const handleLimitCancel = useCallback(() => {
    setShowLimitModal(false);
  }, []);

  const badgeContent = useMemo(() => {
    if (maxCards !== undefined && maxCards > 0) {
      return `${count} / ${maxCards}`;
    }
    return count;
  }, [count, maxCards]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const estimatedCardHeight = useMemo(() => {
    const cardPadding = 24;
    const fieldsContainerMargin = 8;
    const fieldHeight = 24;
    const buttonAreaHeight = kanbanDef.buttons.length > 0 ? 40 : 0;

    const numFields = kanbanDef.card_fields.length;
    const totalFieldsHeight = numFields * fieldHeight;

    return (
      cardPadding + fieldsContainerMargin + totalFieldsHeight + buttonAreaHeight
    );
  }, [kanbanDef.card_fields.length, kanbanDef.buttons.length]);

  const virtualizer = useVirtualizer({
    count: records.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: useCallback(() => estimatedCardHeight, [estimatedCardHeight]),
    getItemKey: useCallback(
      (index: number) => records[index]?.id ?? index,
      [records],
    ),
    overscan: 5,
    gap: 8,
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
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div
        style={{
          height: "25px",
          textAlign: "center",
          paddingRight: "4px",
          flexShrink: 0,
        }}
      >
        {displayAggregates && (
          <Text type="secondary" style={{ fontWeight: 300, fontSize: "11px" }}>
            {displayAggregates}
          </Text>
        )}
      </div>
      <div
        ref={setNodeRef}
        style={{
          width: "300px",
          minWidth: "300px",
          flex: 1,
          minHeight: 0,
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
                count={badgeContent}
                overflowCount={999999}
                style={{
                  backgroundColor: isOverLimit
                    ? token.colorError
                    : token.colorPrimary,
                  flexShrink: 0,
                }}
              />
            </div>
            {isLoading || isRefreshing ? (
              <Button
                type="text"
                size="small"
                icon={<LoadingOutlined />}
                style={{ color: token.colorTextSecondary }}
              />
            ) : (
              <Dropdown
                menu={{ items: menuItems, onClick: handleMenuClick }}
                trigger={["click"]}
              >
                <Button
                  type="text"
                  size="small"
                  icon={<EllipsisOutlined />}
                  style={{ color: token.colorTextSecondary }}
                />
              </Dropdown>
            )}
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
                height: `${virtualizer.getTotalSize()}px`,
                width: "100%",
                position: "relative",
              }}
            >
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
                      transform: `translateY(${virtualRow.start}px)`,
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
      <SetColumnLimitModal
        visible={showLimitModal}
        initialLimit={maxCards}
        onSave={handleLimitSave}
        onCancel={handleLimitCancel}
      />
    </div>
  );
};

export const KanbanColumn = memo(
  forwardRef<KanbanColumnRef, KanbanColumnProps>(KanbanColumnComponent),
);
