import {
  memo,
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useDeepCompareMemo } from "use-deep-compare";
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

export type KanbanBoardRef = {
  updateRecord: (id: number, updatedValues: Partial<KanbanRecord>) => void;
};

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
  onButtonClick?: (
    buttonName: string,
    recordId: number,
    oldRecord: KanbanRecord,
    newRecord?: KanbanRecord,
  ) => void;
  setColumnRef: (columnId: string, ref: KanbanColumnRef | null) => void;
  onColumnCountChange: (columnId: string, count: number) => void;
  onAddCardClick?: (column: ColumnDefinition) => void;
};

const KanbanBoardComponent = (
  props: KanbanBoardProps,
  ref: React.Ref<KanbanBoardRef>,
) => {
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
    onAddCardClick,
  } = props;

  const { t } = useLocale();
  const [activeRecord, setActiveRecord] = useState<KanbanRecord | null>(null);
  const [overColumnId, setOverColumnId] = useState<string | null>(null);
  const colorsForRecordsRef = useRef<{ [key: number]: string }>({});
  const statusForRecordsRef = useRef<{ [key: number]: string }>({});
  const allRecordsRef = useRef<{ [key: number]: KanbanRecord }>({});
  const columnRefsRef = useRef<{ [columnId: string]: KanbanColumnRef }>({});

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

  const updateRecord = useCallback(
    (id: number, updatedValues: Partial<KanbanRecord>) => {
      allRecordsRef.current[id] = {
        ...allRecordsRef.current[id],
        ...updatedValues,
      };

      let updated = false;
      Object.values(columnRefsRef.current).forEach((columnRef) => {
        if (columnRef) {
          columnRef.updateRecord(id, updatedValues);
          updated = true;
        }
      });

      if (!updated) {
        console.warn(
          `Could not find column containing record ${id} for update. Consider refreshing the view.`,
        );
      }
    },
    [],
  );

  useImperativeHandle(
    ref,
    () => ({
      updateRecord,
    }),
    [updateRecord],
  );

  const handleColumnRef = useCallback(
    (columnId: string, columnRef: KanbanColumnRef | null) => {
      if (columnRef) {
        columnRefsRef.current[columnId] = columnRef;
      } else {
        delete columnRefsRef.current[columnId];
      }
      setColumnRef(columnId, columnRef);
    },
    [setColumnRef],
  );

  const columnRefCallbacks = useDeepCompareMemo(() => {
    const callbacks: Record<string, (ref: KanbanColumnRef | null) => void> = {};
    columns.forEach((column) => {
      callbacks[column.id] = (ref: KanbanColumnRef | null) => {
        handleColumnRef(column.id, ref);
      };
    });
    return callbacks;
  }, [columns, handleColumnRef]);

  const columnAddCardCallbacks = useDeepCompareMemo(() => {
    if (!onAddCardClick) return {};
    const callbacks: Record<string, () => void> = {};
    columns.forEach((column) => {
      callbacks[column.id] = () => onAddCardClick(column);
    });
    return callbacks;
  }, [columns, onAddCardClick]);

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
            ref={columnRefCallbacks[column.id]}
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
            onAddCardClick={columnAddCardCallbacks[column.id]}
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
              model={model}
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

export const KanbanBoard = memo(
  forwardRef<KanbanBoardRef, KanbanBoardProps>(KanbanBoardComponent),
);
