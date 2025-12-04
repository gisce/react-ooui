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
  closestCenter,
  pointerWithin,
  type CollisionDetection,
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
import { useProcessAction } from "@/hooks/useProcessAction";

const customCollisionDetection: CollisionDetection = (args) => {
  // First, try to find collision with pointer directly over elements
  const pointerCollisions = pointerWithin(args);
  if (pointerCollisions.length > 0) {
    return pointerCollisions;
  }

  // Next, try closest center detection for cards
  const centerCollisions = closestCenter(args);
  if (centerCollisions.length > 0) {
    return centerCollisions;
  }

  // Fallback: return column droppables when no card is close enough
  // This ensures columns are detected when hovering in empty space
  const columnCollisions = args.droppableContainers
    .filter((container) => typeof container.id === "string")
    .map((container) => ({
      id: container.id,
      data: container.data,
    }));

  return columnCollisions;
};

export type KanbanBoardRef = {
  refreshAllColumns: () => void;
};

type KanbanBoardProps = {
  columns: ColumnDefinition[];
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  nameSearch?: string;
  fieldsToRetrieve?: string[];
  kanbanDef: Kanban;
  allowSetMaxCards?: boolean;
  onCardClick?: (record: KanbanRecord) => void;
  setColumnRef: (columnId: string, ref: KanbanColumnRef | null) => void;
  onColumnCountChange: (columnId: string, count: number) => void;
  onAddCardClick?: (column: ColumnDefinition) => void;
  onDragSuccess?: (sourceColumnId: string, targetColumnId: string) => void;
  onOpenColumnInNewTab?: (domain: any[]) => void;
};

const KanbanBoardComponent = (
  props: KanbanBoardProps,
  ref: React.Ref<KanbanBoardRef>,
) => {
  const {
    columns,
    model,
    domain,
    context = {},
    searchParams,
    nameSearch,
    fieldsToRetrieve,
    kanbanDef,
    allowSetMaxCards = false,
    onCardClick,
    setColumnRef,
    onColumnCountChange,
    onAddCardClick,
    onDragSuccess,
    onOpenColumnInNewTab,
  } = props;

  const { t } = useLocale();
  const { showErrorNotification } = useErrorNotification();
  const [activeRecord, setActiveRecord] = useState<KanbanRecord | null>(null);
  const [overColumnId, setOverColumnId] = useState<string | null>(null);
  const [columnLimits, setColumnLimits] = useState<
    Record<string, number | undefined>
  >({});
  const [overId, setOverId] = useState<number | null>(null);
  const [dropPosition, setDropPosition] = useState<"above" | "below" | null>(
    null,
  );
  const lastOverInColumnRef = useRef<{
    [columnId: string]: { recordId: number; position: "above" | "below" };
  }>({});
  const colorsForRecordsRef = useRef<{ [key: number]: string }>({});
  const statusForRecordsRef = useRef<{ [key: number]: string }>({});
  const allRecordsRef = useRef<{ [key: number]: KanbanRecord }>({});
  const columnRefsRef = useRef<{ [columnId: string]: KanbanColumnRef }>({});
  const columnRecordIdsRef = useRef<{ [columnId: string]: number[] }>({});
  const [executeColumnChange, cancelExecuteColumnChange] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );
  const [executeReorderElement, cancelReorderElement] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );

  useEffect(() => {
    return () => {
      cancelExecuteColumnChange();
      cancelReorderElement();
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

    const fullRecord = allRecordsRef.current[recordId];
    if (fullRecord) {
      setActiveRecord(fullRecord);
    } else {
      setActiveRecord({ id: recordId } as KanbanRecord);
    }
  }, []);

  const findColumnByValue = useCallback(
    (value: any): ColumnDefinition | undefined => {
      const columnFieldDef = kanbanDef.fields?.[kanbanDef.column_field];
      if (!columnFieldDef) return undefined;

      const normalizedValue = normalizeColumnValue(value, columnFieldDef, t);
      if (!normalizedValue) return undefined;

      return columns.find((col) => col.id === normalizedValue.id);
    },
    [columns, kanbanDef, t],
  );

  const handleDragOver = useCallback(
    (event: DragOverEvent) => {
      const { over, active } = event;

      if (!over) {
        setOverColumnId(null);
        setOverId(null);
        setDropPosition(null);
        return;
      }

      // Type-safe check: if over.id is a string, it's a column ID
      if (typeof over.id === "string") {
        // Hovering over a column directly (empty space)
        const overColumn = columns.find((col) => col.id === over.id);
        if (overColumn) {
          const lastInColumn = lastOverInColumnRef.current[overColumn.id];
          setOverColumnId(overColumn.id);
          // Persist the last known drop indicator position in this column
          if (lastInColumn) {
            setOverId(lastInColumn.recordId);
            setDropPosition(lastInColumn.position);
          } else {
            setOverId(null);
            setDropPosition(null);
          }
        }
        return;
      }

      // If we get here, over.id is a number, so it's a card ID
      const overRecordId = over.id as number;

      // Get column from dnd-kit data (most reliable)
      const cardColumnId = over.data.current?.columnId as string | undefined;

      if (cardColumnId) {
        setOverColumnId(cardColumnId);
        if (overRecordId !== active.id) {
          setOverId(overRecordId);
          const rect = over.rect;
          if (rect) {
            const midY = rect.top + rect.height / 2;
            const initialY =
              event.activatorEvent && "clientY" in event.activatorEvent
                ? (event.activatorEvent.clientY as number)
                : 0;
            const pointerY = initialY + event.delta.y;
            const position = pointerY < midY ? "above" : "below";
            setDropPosition(position);
            // Store this position so it persists when hovering over empty space
            lastOverInColumnRef.current[cardColumnId] = {
              recordId: overRecordId,
              position,
            };
          }
        } else {
          // Hovering over self - don't show indicator
          setOverId(null);
          setDropPosition(null);
        }
        return;
      }

      // Fallback: try to find column from record cache
      const overRecord = allRecordsRef.current[overRecordId];
      if (overRecord) {
        const recordColumnValue = overRecord[kanbanDef.column_field];
        const recordColumn = findColumnByValue(recordColumnValue);
        if (recordColumn) {
          setOverColumnId(recordColumn.id);
          if (overRecordId !== active.id) {
            setOverId(overRecordId);
            const rect = over.rect;
            if (rect) {
              const midY = rect.top + rect.height / 2;
              const initialY =
                event.activatorEvent && "clientY" in event.activatorEvent
                  ? (event.activatorEvent.clientY as number)
                  : 0;
              const pointerY = initialY + event.delta.y;
              const position = pointerY < midY ? "above" : "below";
              setDropPosition(position);
              // Store this position so it persists when hovering over empty space
              lastOverInColumnRef.current[recordColumn.id] = {
                recordId: overRecordId,
                position,
              };
            }
          } else {
            // Hovering over self - don't show indicator
            setOverId(null);
            setDropPosition(null);
          }
          return;
        }
      }

      // Couldn't determine what we're over - clear states
      setOverColumnId(null);
      setOverId(null);
      setDropPosition(null);
    },
    [columns, kanbanDef.column_field, findColumnByValue],
  );

  const handleDragCancel = useCallback(() => {
    setActiveRecord(null);
    setOverColumnId(null);
    setOverId(null);
    setDropPosition(null);
  }, []);

  const calculatePrevNextIds = useCallback(
    (
      targetColumnId: string,
      targetOverId: number,
      targetDropPosition: "above" | "below",
      draggedRecordId: number,
    ): { prevId: number | null; nextId: number | null } => {
      const columnRecordIds = columnRecordIdsRef.current[targetColumnId] || [];
      const filteredIds = columnRecordIds.filter(
        (id) => id !== draggedRecordId,
      );
      const overIndex = filteredIds.indexOf(targetOverId);

      if (overIndex === -1) {
        return { prevId: null, nextId: null };
      }

      if (targetDropPosition === "above") {
        const prevId = overIndex > 0 ? filteredIds[overIndex - 1] : null;
        const nextId = targetOverId;
        return { prevId, nextId };
      } else {
        const prevId = targetOverId;
        const nextId =
          overIndex < filteredIds.length - 1
            ? filteredIds[overIndex + 1]
            : null;
        return { prevId, nextId };
      }
    },
    [],
  );

  const handleRecordsUpdate = useCallback(
    (
      columnId: string,
      records: KanbanRecord[],
      colors: { [key: number]: string },
      status: { [key: number]: string },
    ) => {
      columnRecordIdsRef.current[columnId] = records.map((r) => r.id);
      records.forEach((record) => {
        allRecordsRef.current[record.id] = record;
        if (colors?.[record.id]) {
          colorsForRecordsRef.current[record.id] = colors[record.id];
        }
        if (status?.[record.id]) {
          statusForRecordsRef.current[record.id] = status[record.id];
        }
      });
    },
    [],
  );

  const refreshAllColumns = useCallback(() => {
    Object.values(columnRefsRef.current).forEach((columnRef) => {
      if (columnRef) {
        columnRef.refresh();
      }
    });
  }, []);

  const refreshSourceAndTarget = useCallback(
    (sourceId: string, targetId: string) => {
      const targetRef = columnRefsRef.current[targetId];
      if (targetRef) {
        targetRef.refresh();
      }
      const sourceRef = columnRefsRef.current[sourceId];
      if (sourceRef) {
        sourceRef.refresh();
      }
    },
    [],
  );

  const handleColumnLimitChange = useCallback(
    (columnId: string, limit: number | undefined) => {
      setColumnLimits((prev) => ({
        ...prev,
        [columnId]: limit,
      }));
      // Future: Call server API here (setVisualizationOptions)
    },
    [],
  );

  const onActionCompleted = useCallback(async () => {
    refreshAllColumns();
  }, [refreshAllColumns]);

  const { runAction } = useProcessAction({
    context,
    onRefreshParentValues: onActionCompleted,
  });

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;

      const currentOverId = overId;
      const currentDropPosition = dropPosition;

      const cleanup = () => {
        setActiveRecord(null);
        setOverColumnId(null);
        setOverId(null);
        setDropPosition(null);
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

      let targetColumn: ColumnDefinition | undefined;

      if (typeof over.id === "string") {
        targetColumn = columns.find((col) => col.id === over.id);
      } else {
        const cardColumnId = over.data.current?.columnId as string | undefined;
        if (cardColumnId) {
          targetColumn = columns.find((col) => col.id === cardColumnId);
        }
      }

      if (!targetColumn) {
        cleanup();
        return;
      }

      const sourceColumnValue = record[kanbanDef.column_field];
      const columnFieldDef = kanbanDef.fields?.[kanbanDef.column_field];
      const sourceColumnNormalized = columnFieldDef
        ? normalizeColumnValue(sourceColumnValue, columnFieldDef, t)
        : null;

      if (!sourceColumnNormalized) {
        cleanup();
        return;
      }

      const isSameColumn = sourceColumnNormalized.id === targetColumn.id;

      let finalOverId = currentOverId;
      let finalDropPosition = currentDropPosition;

      if (!finalOverId && targetColumn) {
        const lastOver = lastOverInColumnRef.current[targetColumn.id];
        if (lastOver) {
          finalOverId = lastOver.recordId;
          finalDropPosition = lastOver.position;
        }
      }

      cleanup();

      try {
        // Same column - just reorder
        if (isSameColumn) {
          if (finalOverId && finalDropPosition) {
            const { prevId, nextId } = calculatePrevNextIds(
              targetColumn.id,
              finalOverId,
              finalDropPosition,
              recordId,
            );

            // Skip reorder if no valid position reference
            if (prevId !== null || nextId !== null) {
              await executeReorderElement({
                model,
                action: "reorder_element",
                payload: [
                  recordId,
                  prevId,
                  nextId,
                  kanbanDef.sort || null,
                  context,
                ],
              });
            }
          }

          const columnRef = columnRefsRef.current[targetColumn.id];
          if (columnRef) {
            columnRef.refresh();
          }
          return;
        }

        // Different column - execute column change first, then reorder
        const fromValue = normalizeColumnValue(
          sourceColumnValue,
          columnFieldDef,
          t,
        );

        const toValue = normalizeColumnValue(
          targetColumn.originalValue,
          columnFieldDef,
          t,
        );

        const methodName =
          kanbanDef.on_change_column?.method || "on_change_column";

        if (
          !fromValue?.id ||
          !toValue?.id ||
          parseInt(fromValue?.id) === parseInt(toValue?.id)
        ) {
          return;
        }

        // Execute column change first
        const result = await executeColumnChange({
          model,
          action: methodName,
          payload: [
            [recordId],
            kanbanDef.column_field,
            fromValue?.id ? parseInt(fromValue?.id) : null,
            toValue?.id ? parseInt(toValue?.id) : null,
            {
              ...context,
              active_id: recordId,
              active_ids: [recordId],
            },
          ],
        });

        if (result && typeof result === "object" && result.type) {
          await runAction({
            actionData: result,
          });
          return;
        }

        // Execute reorder after column change completes
        if (finalOverId && finalDropPosition) {
          const { prevId, nextId } = calculatePrevNextIds(
            targetColumn.id,
            finalOverId,
            finalDropPosition,
            recordId,
          );

          // Skip reorder if no valid position reference
          if (prevId !== null || nextId !== null) {
            await executeReorderElement({
              model,
              action: "reorder_element",
              payload: [
                recordId,
                prevId,
                nextId,
                kanbanDef.sort || null,
                context,
              ],
            });
          }
        }

        refreshSourceAndTarget(sourceColumnNormalized.id, targetColumn.id);
      } catch (err) {
        if (onDragSuccess) {
          onDragSuccess(targetColumn.id, sourceColumnNormalized.id);
        }

        showErrorNotification(err);
      }
    },
    [
      columns,
      model,
      context,
      kanbanDef,
      showErrorNotification,
      onDragSuccess,
      executeColumnChange,
      executeReorderElement,
      calculatePrevNextIds,
      t,
      runAction,
      refreshSourceAndTarget,
      overId,
      dropPosition,
    ],
  );

  useImperativeHandle(
    ref,
    () => ({
      refreshAllColumns,
    }),
    [refreshAllColumns],
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

  const handleOpenColumnInNewTab = useCallback(
    (columnDomain: any[]) => {
      onOpenColumnInNewTab?.(columnDomain);
    },
    [onOpenColumnInNewTab],
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
      collisionDetection={customCollisionDetection}
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
            kanbanDef={kanbanDef}
            column={column}
            model={model}
            domain={domain}
            context={context}
            searchParams={searchParams}
            nameSearch={nameSearch}
            fieldsToRetrieve={fieldsToRetrieve}
            allowSetMaxCards={allowSetMaxCards}
            maxCards={columnLimits[column.id]}
            onMaxCardsChange={handleColumnLimitChange}
            onCardClick={onCardClick}
            onCountChange={onColumnCountChange}
            onRecordsUpdate={handleRecordsUpdate}
            isOver={overColumnId === column.id}
            onAddCardClick={columnAddCardCallbacks[column.id]}
            onRefreshAll={refreshAllColumns}
            onOpenColumnInNewTab={handleOpenColumnInNewTab}
            activeId={activeRecord?.id ?? null}
            overId={overId}
            dropPosition={dropPosition}
          />
        ))}
      </div>

      <DragOverlay dropAnimation={null}>
        {activeRecord && activeRecord.id ? (
          <div
            style={{
              cursor: "grabbing",
              transform: "rotate(5deg)",
              opacity: 0.5,
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
