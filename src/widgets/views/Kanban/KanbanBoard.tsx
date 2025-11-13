import {
  memo,
  useState,
  useCallback,
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { useDeepCompareMemo } from "use-deep-compare";
import {
  DndContext,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { KanbanColumn, KanbanColumnRef } from "./KanbanColumn";
import { KanbanCard } from "./KanbanCard";
import { KanbanRecord, ColumnDefinition } from "./types";
import { Kanban } from "@gisce/ooui";
import { useLocale } from "@gisce/react-formiga-components";
import ConnectionProvider from "@/ConnectionProvider";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { normalizeColumnValue } from "@/helpers/kanbanHelper";

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
  onDragSuccess?: (sourceColumnId: string, targetColumnId: string) => void;
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
    onDragSuccess,
  } = props;

  const { t } = useLocale();
  const { showErrorNotification } = useErrorNotification();
  const [activeRecord, setActiveRecord] = useState<KanbanRecord | null>(null);
  const [overColumnId, setOverColumnId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const colorsForRecordsRef = useRef<{ [key: number]: string }>({});
  const statusForRecordsRef = useRef<{ [key: number]: string }>({});
  const allRecordsRef = useRef<{ [key: number]: KanbanRecord }>({});
  const columnRefsRef = useRef<{ [columnId: string]: KanbanColumnRef }>({});

  const [executeColumnChange, cancelExecuteColumnChange] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );

  useEffect(() => {
    return () => {
      cancelExecuteColumnChange();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

    setIsDragging(true);

    const fullRecord = allRecordsRef.current[recordId];
    if (fullRecord) {
      setActiveRecord(fullRecord);
    } else {
      setActiveRecord({ id: recordId } as KanbanRecord);
    }
  }, []);

  const findColumnByValue = useCallback(
    (value: any): ColumnDefinition | undefined => {
      const columnFieldDef = kanbanDef.fields?.[columnField];
      if (!columnFieldDef) return undefined;

      const normalizedValue = normalizeColumnValue(value, columnFieldDef, t);
      if (!normalizedValue) return undefined;

      return columns.find((col) => col.id === normalizedValue.id);
    },
    [columns, columnField, kanbanDef, t],
  );

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      const { over } = event;
      if (!over) {
        setOverColumnId(null);
        return;
      }

      const overColumn = columns.find((col) => col.id === over.id);
      if (overColumn) {
        setOverColumnId(overColumn.id);
        return;
      }

      const overRecordId = over.id as number;
      const overRecord = allRecordsRef.current[overRecordId];
      if (overRecord) {
        const recordColumnValue = overRecord[columnField];
        const recordColumn = findColumnByValue(recordColumnValue);
        if (recordColumn) {
          setOverColumnId(recordColumn.id);
          return;
        }
      }

      setOverColumnId(null);
    },
    [columns, columnField, findColumnByValue],
  );

  const handleDragCancel = useCallback(() => {
    setActiveRecord(null);
    setOverColumnId(null);
    setIsDragging(false);
  }, []);

  const handleRecordsUpdate = useCallback(
    (records: KanbanRecord[], colors: any, status: any) => {
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

      Object.values(columnRefsRef.current).forEach((columnRef) => {
        if (columnRef) {
          columnRef.updateRecord(id, updatedValues);
        }
      });
    },
    [],
  );

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;

      const cleanup = () => {
        setActiveRecord(null);
        setOverColumnId(null);
        setIsDragging(false);
      };

      if (!over) {
        cleanup();
        return;
      }

      const recordId = active.id as number;
      const record = allRecordsRef.current[recordId];

      if (!record) {
        cleanup();
        return;
      }

      const sourceColumnValue = record[columnField];
      const columnFieldDef = kanbanDef.fields?.[columnField];
      const sourceColumnNormalized = columnFieldDef
        ? normalizeColumnValue(sourceColumnValue, columnFieldDef, t)
        : null;

      if (!sourceColumnNormalized) {
        cleanup();
        return;
      }

      let targetColumn = columns.find((col) => col.id === over.id);

      if (!targetColumn) {
        const overRecordId = over.id as number;
        const overRecord = allRecordsRef.current[overRecordId];
        if (overRecord) {
          const overRecordColumnValue = overRecord[columnField];
          targetColumn = findColumnByValue(overRecordColumnValue);
        }
      }

      if (!targetColumn) {
        cleanup();
        return;
      }

      if (sourceColumnNormalized.id === targetColumn.id) {
        cleanup();
        return;
      }

      const getBackendValue = (value: any) => {
        if (Array.isArray(value) && value.length === 2) {
          return value[0];
        }
        return value;
      };

      const fromValue = getBackendValue(sourceColumnValue);
      const toValue = getBackendValue(targetColumn.originalValue);
      const originalRecord = { ...record };

      updateRecord(recordId, {
        ...record,
        [columnField]: targetColumn.originalValue,
      });

      cleanup();

      try {
        const methodName =
          kanbanDef.on_change_column?.method || "on_change_column";

        await executeColumnChange({
          model,
          action: methodName,
          payload: [
            [recordId],
            columnField,
            fromValue,
            toValue,
            {
              ...context,
              active_id: recordId,
              active_ids: [recordId],
            },
          ],
        });

        const targetColumnRef = columnRefsRef.current[targetColumn.id];
        if (targetColumnRef) {
          targetColumnRef.refresh();
        }
      } catch (err) {
        updateRecord(recordId, originalRecord);

        if (onDragSuccess) {
          onDragSuccess(targetColumn.id, sourceColumnNormalized.id);
        }

        showErrorNotification(err);
      }
    },
    [
      columns,
      columnField,
      model,
      context,
      kanbanDef,
      showErrorNotification,
      onDragSuccess,
      executeColumnChange,
      findColumnByValue,
      updateRecord,
      t,
    ],
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
            draggable={!isDragging}
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

      <DragOverlay dropAnimation={null}>
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
