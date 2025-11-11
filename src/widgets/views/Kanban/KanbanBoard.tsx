import { memo, useState, useCallback, useRef } from "react";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { KanbanColumn, KanbanColumnRef } from "./KanbanColumn";
import { KanbanCard } from "./KanbanCard";
import { KanbanRecord, ColumnDefinition } from "./types";
import { Kanban } from "@gisce/ooui";
import { useLocale } from "@gisce/react-formiga-components";

type KanbanBoardProps = {
  columns: ColumnDefinition[];
  columnField: string;
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  nameSearch?: string;
  fieldsToRetrieve?: string[];
  kanbanDef: Kanban;
  onCardClick?: (record: KanbanRecord) => void;
  onButtonClick?: (buttonName: string, recordId: number) => void;
  setColumnRef: (columnId: string, ref: KanbanColumnRef | null) => void;
  onColumnCountChange: (columnId: string, count: number) => void;
};

const KanbanBoardComponent = (props: KanbanBoardProps) => {
  const {
    columns,
    columnField,
    model,
    domain,
    context = {},
    searchParams,
    nameSearch,
    fieldsToRetrieve,
    kanbanDef,
    onCardClick,
    onButtonClick,
    setColumnRef,
    onColumnCountChange,
  } = props;

  const { t } = useLocale();
  const [activeRecord, setActiveRecord] = useState<KanbanRecord | null>(null);
  const [overColumnId, setOverColumnId] = useState<string | null>(null);
  const colorsForRecordsRef = useRef<{ [key: number]: string }>({});
  const statusForRecordsRef = useRef<{ [key: number]: string }>({});
  const allRecordsRef = useRef<{ [key: number]: KanbanRecord }>({});

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event;
    const recordId = active.id as number;

    // Look up the full record from our records map
    const fullRecord = allRecordsRef.current[recordId];
    if (fullRecord) {
      setActiveRecord(fullRecord);
    } else {
      // Fallback: set just the ID if record not found
      setActiveRecord({ id: recordId } as KanbanRecord);
    }
  }, []);

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

  const handleRecordsUpdate = useCallback(
    (records: KanbanRecord[], colors: any, status: any) => {
      // Update allRecordsRef with the new records
      records.forEach((record) => {
        allRecordsRef.current[record.id] = record;
        if (colors?.current?.[record.id]) {
          colorsForRecordsRef.current[record.id] = colors.current[record.id];
        }
        if (status?.current?.[record.id]) {
          statusForRecordsRef.current[record.id] = status.current[record.id];
        }
      });
    },
    [],
  );

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
            ref={(ref) => setColumnRef(column.id, ref)}
            column={column}
            columnField={columnField}
            model={model}
            domain={domain}
            context={context}
            searchParams={searchParams}
            nameSearch={nameSearch}
            fieldsToRetrieve={fieldsToRetrieve}
            kanbanDef={kanbanDef}
            draggable={kanbanDef.drag}
            allowSetMaxCards={false}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
            onCountChange={onColumnCountChange}
            onRecordsUpdate={handleRecordsUpdate}
            isOver={overColumnId === column.id}
          />
        ))}
      </div>

      <DragOverlay>
        {activeRecord && activeRecord.id ? (
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
              color={colorsForRecordsRef?.current?.[activeRecord.id]}
              status={statusForRecordsRef?.current?.[activeRecord.id]}
              context={context}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export const KanbanBoard = memo(KanbanBoardComponent);
