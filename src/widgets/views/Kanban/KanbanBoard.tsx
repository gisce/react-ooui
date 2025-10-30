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
  const [isDragging, setIsDragging] = useState(false);

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
          setIsDragging(true);
          break;
        }
      }
    },
    [columns],
  );

  const handleDragOver = useCallback((_event: DragOverEvent) => {}, []);

  const handleDragEnd = useCallback(async () => {
    setIsDragging(false);
    setActiveRecord(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setIsDragging(false);
    setActiveRecord(null);
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
          paddingTop: "16px",
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
            sortable={kanbanDef.sort}
            allowSetMaxCards={false}
            context={context}
            aggregates={
              hasAggregates ? aggregatesByColumn?.[column.id] : undefined
            }
            isLoadingAggregates={isLoadingAggregates}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
          />
        ))}
      </div>

      <DragOverlay>
        {activeRecord ? (
          <div
            style={{
              opacity: 0.8,
              cursor: "grabbing",
              transform: "rotate(5deg)",
            }}
          >
            <KanbanCard
              record={activeRecord}
              kanbanDef={kanbanDef}
              draggable={false}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export const KanbanBoard = memo(KanbanBoardComponent);
