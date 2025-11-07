import { memo, useState, RefObject, useCallback } from "react";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { Spin } from "antd";
import { KanbanColumn } from "./KanbanColumn";
import { KanbanCard } from "./KanbanCard";
import {
  KanbanColumn as KanbanColumnType,
  KanbanRecord,
} from "./useKanbanData";
import { Kanban } from "@gisce/ooui";
import { useLocale } from "@gisce/react-formiga-components";
import { KanbanAggregatesByColumn } from "./useKanbanAggregates";

type KanbanBoardProps = {
  colorsForRecords?: RefObject<{ [key: number]: string }>;
  statusForRecords?: RefObject<{ [key: number]: string }>;
  columns: KanbanColumnType[];
  kanbanDef: Kanban;
  context?: any;
  isLoading?: boolean;
  isRefreshing?: boolean;
  aggregatesByColumn?: KanbanAggregatesByColumn;
  isLoadingAggregates?: boolean;
  hasAggregates?: boolean;
  onCardClick?: (record: KanbanRecord) => void;
  onButtonClick?: (buttonName: string, recordId: number) => void;
};

const KanbanBoardComponent = (props: KanbanBoardProps) => {
  const {
    colorsForRecords,
    statusForRecords,
    columns,
    kanbanDef,
    context = {},
    isLoading = false,
    isRefreshing = false,
    aggregatesByColumn,
    isLoadingAggregates = false,
    hasAggregates = false,
    onCardClick,
    onButtonClick,
  } = props;

  const { t } = useLocale();
  const [activeRecord, setActiveRecord] = useState<KanbanRecord | null>(null);
  const [overColumnId, setOverColumnId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const { active } = event;
      const recordId = active.id as number;

      for (const column of columns) {
        const record = column.records.find((r) => r.id === recordId);
        if (record) {
          setActiveRecord(record);
          break;
        }
      }
    },
    [columns],
  );

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      const { over } = event;
      if (!over) {
        setOverColumnId(null);
        return;
      }

      // Check if we're over a column directly
      const overColumn = columns.find((col) => col.id === over.id);
      if (overColumn) {
        setOverColumnId(overColumn.id);
        return;
      }

      // Check if we're over a card - find which column it belongs to
      for (const column of columns) {
        const isOverCard = column.records.some(
          (record) => record.id === over.id,
        );
        if (isOverCard) {
          setOverColumnId(column.id);
          return;
        }
      }

      setOverColumnId(null);
    },
    [columns],
  );

  const handleDragEnd = useCallback(async () => {
    setActiveRecord(null);
    setOverColumnId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveRecord(null);
    setOverColumnId(null);
  }, []);

  if (isLoading && !isRefreshing) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  if (columns.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "400px",
          fontSize: "16px",
          color: "#999",
        }}
      >
        {t("no_data")}
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div
        style={{
          display: "flex",
          gap: "16px",
          paddingBottom: "16px",
          overflowX: "auto",
          height: "100%",
        }}
      >
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            column={column}
            kanbanDef={kanbanDef}
            draggable={kanbanDef.drag}
            colorsForRecords={colorsForRecords}
            statusForRecords={statusForRecords}
            allowSetMaxCards={false}
            context={context}
            aggregates={
              hasAggregates ? aggregatesByColumn?.[column.id] : undefined
            }
            isLoadingAggregates={isLoadingAggregates}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
            isOver={overColumnId === column.id}
          />
        ))}
      </div>

      <DragOverlay>
        {activeRecord ? (
          <div
            style={{
              cursor: "grabbing",
              transform: "rotate(5deg)",
            }}
          >
            <KanbanCard
              record={activeRecord}
              kanbanDef={kanbanDef}
              draggable={false}
              color={colorsForRecords?.current?.[activeRecord.id]}
              status={statusForRecords?.current?.[activeRecord.id]}
              context={context}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export const KanbanBoard = memo(KanbanBoardComponent);
