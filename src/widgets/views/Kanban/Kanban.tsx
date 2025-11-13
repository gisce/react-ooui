import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
  memo,
  useRef,
} from "react";
import { useDeepCompareMemo } from "use-deep-compare";
import { KanbanView } from "@/types";
import { Kanban } from "@gisce/ooui";
import type { KanbanButton } from "@gisce/ooui/dist/Kanban";
import { KanbanBoard, KanbanBoardRef } from "./KanbanBoard";
import { KanbanRecord, ColumnDefinition } from "./types";
import { useKanbanColumns } from "./useKanbanColumns";
import { Alert, Spin } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { KanbanColumnRef } from "./KanbanColumn";
import { normalizeColumnValue } from "@/helpers/kanbanHelper";

type KanbanProps = {
  kanbanView: KanbanView;
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  nameSearch?: string;
  onCardClick?: (record: KanbanRecord) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onTotalRowsChange?: (totalRows: number) => void;
  onAddCardClick?: (column: ColumnDefinition) => void;
};

export type KanbanRef = {
  refreshResults: () => void;
  refreshColumns: (columnIds: string[]) => void;
  updateRecord: (id: number, updatedValues: Partial<KanbanRecord>) => void;
};

const KanbanComponentInner = (
  props: KanbanProps,
  ref: React.Ref<KanbanRef>,
) => {
  const {
    kanbanView,
    model,
    domain,
    context,
    searchParams = [],
    nameSearch,
    onCardClick,
    onLoadingChange,
    onTotalRowsChange,
    onAddCardClick,
  } = props;

  const prevNameSearch = useRef(nameSearch);

  const { t } = useLocale();
  const [kanbanDef, setKanbanDef] = useState<Kanban | null>(null);
  const [parsingError, setParsingError] = useState<Error | null>(null);

  useEffect(() => {
    if (!kanbanView.arch || !kanbanView.fields) {
      return;
    }

    try {
      const kanban = new Kanban(kanbanView.fields);
      kanban.parse(kanbanView.arch);
      setKanbanDef(kanban);
      setParsingError(null);
    } catch (err: any) {
      console.error("Error parsing kanban definition:", err);
      setParsingError(err);
    }
  }, [kanbanView.arch, kanbanView.fields]);

  const columnFieldDef = useMemo(() => {
    if (!kanbanDef || !kanbanView.fields || !kanbanDef.column_field) {
      return null;
    }

    return kanbanView.fields[kanbanDef.column_field];
  }, [kanbanDef, kanbanView.fields]);

  const fieldsToRetrieve = useMemo(() => {
    if (!kanbanDef) {
      return [];
    }

    const fields: string[] = kanbanDef.card_fields.map((f: any) => f.id);

    if (
      kanbanDef.buttons.some(
        (b: KanbanButton) => b.states !== undefined && b.states !== null,
      ) &&
      kanbanView.fields["state"]
    ) {
      fields.push("state");
    }

    fields.push("__model");

    return [...new Set(fields)];
  }, [kanbanDef, kanbanView.fields]);

  const {
    columns,
    isLoading: isLoadingColumns,
    error: columnsError,
  } = useKanbanColumns({
    model,
    domain,
    context,
    columnField: kanbanDef?.column_field || "",
    columnFieldDefinition: columnFieldDef,
    searchParams,
    enabled: !!kanbanDef && !!columnFieldDef,
    columnDomain: kanbanDef?.column_domain,
  });

  const columnRefs = useRef<Map<string, KanbanColumnRef>>(new Map());
  const boardRef = useRef<KanbanBoardRef>(null);
  const [columnCounts, setColumnCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    const isNameSearchActive = nameSearch && nameSearch.trim().length > 0;
    const wasNameSearchActive =
      prevNameSearch.current &&
      typeof prevNameSearch.current === "string" &&
      prevNameSearch.current.trim().length > 0;

    if (!isNameSearchActive && wasNameSearchActive) {
      columnRefs.current.forEach((ref) => {
        ref.refresh();
      });
    }

    prevNameSearch.current = nameSearch;
  }, [nameSearch]);

  const updateRecord = useCallback(
    (id: number, updatedValues: Partial<KanbanRecord>) => {
      boardRef.current?.updateRecord(id, updatedValues);
    },
    [],
  );

  const refreshColumns = useCallback((columnIds: string[]) => {
    columnIds.forEach((columnId) => {
      const ref = columnRefs.current.get(columnId);
      if (ref) {
        ref.refresh();
      }
    });
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      refreshResults: () => {
        columnRefs.current.forEach((ref) => {
          ref.refresh();
        });
      },
      refreshColumns,
      updateRecord,
    }),
    [refreshColumns, updateRecord],
  );

  const handleButtonClick = useCallback(
    async (
      _buttonName: string,
      _recordId: number,
      oldRecord: KanbanRecord,
      newRecord?: KanbanRecord,
    ) => {
      const columnField = kanbanDef?.column_field;

      if (newRecord && columnField) {
        const oldColumnValue = oldRecord[columnField];
        const newColumnValue = newRecord[columnField];

        if (newColumnValue !== undefined && oldColumnValue !== newColumnValue) {
          const columnFieldDef = kanbanDef?.fields?.[columnField];

          if (columnFieldDef) {
            const oldColumnInfo = normalizeColumnValue(
              oldColumnValue,
              columnFieldDef,
              t,
            );
            const newColumnInfo = normalizeColumnValue(
              newColumnValue,
              columnFieldDef,
              t,
            );

            const oldColumnId = oldColumnInfo?.id ?? null;
            const newColumnId = newColumnInfo?.id ?? null;

            if (oldColumnId && newColumnId) {
              const columnsToRefresh =
                oldColumnId === newColumnId
                  ? [oldColumnId]
                  : [oldColumnId, newColumnId];
              refreshColumns(columnsToRefresh);
              return;
            }
          }
        } else {
          // Column value didn't change, just refresh the current column
          const columnFieldDef = kanbanDef?.fields?.[columnField];
          if (columnFieldDef) {
            const columnInfo = normalizeColumnValue(
              oldColumnValue,
              columnFieldDef,
              t,
            );
            if (columnInfo?.id) {
              refreshColumns([columnInfo.id]);
              return;
            }
          }
        }
      }

      // Fallback: refresh all columns
      columnRefs.current.forEach((ref) => {
        ref.refresh();
      });
    },
    [kanbanDef, t, refreshColumns],
  );

  const setColumnRef = useCallback(
    (columnId: string, ref: KanbanColumnRef | null) => {
      if (ref) {
        columnRefs.current.set(columnId, ref);
      } else {
        columnRefs.current.delete(columnId);
      }
    },
    [],
  );

  const handleColumnCountChange = useCallback(
    (columnId: string, count: number) => {
      setColumnCounts((prev) => ({
        ...prev,
        [columnId]: count,
      }));
    },
    [],
  );

  useEffect(() => {
    const totalRows = Object.values(columnCounts).reduce(
      (sum, count) => sum + count,
      0,
    );
    onTotalRowsChange?.(totalRows);
  }, [columnCounts, onTotalRowsChange]);

  useEffect(() => {
    onLoadingChange?.(isLoadingColumns);
  }, [isLoadingColumns, onLoadingChange]);

  const content = useDeepCompareMemo(() => {
    if (parsingError) {
      return (
        <Alert
          message={t("error_parsing_kanban_view")}
          description={parsingError.message}
          type="error"
          showIcon
        />
      );
    }

    if (columnsError) {
      return (
        <Alert
          message={t("error_loading_kanban_data")}
          description={columnsError.message}
          type="error"
          showIcon
        />
      );
    }

    // Only show spinner on initial load (when no columns yet)
    // Keep board visible with previous columns during refresh
    if (!kanbanDef || (isLoadingColumns && columns.length === 0)) {
      return <Spin size="large" />;
    }

    return (
      <KanbanBoard
        ref={boardRef}
        columns={columns}
        columnField={kanbanDef.column_field}
        model={model}
        domain={domain}
        context={context}
        searchParams={searchParams}
        nameSearch={nameSearch}
        fieldsToRetrieve={fieldsToRetrieve}
        kanbanDef={kanbanDef}
        onCardClick={onCardClick}
        onButtonClick={handleButtonClick}
        setColumnRef={setColumnRef}
        onColumnCountChange={handleColumnCountChange}
        onAddCardClick={onAddCardClick}
      />
    );
  }, [
    parsingError,
    columnsError,
    kanbanDef,
    columns,
    isLoadingColumns,
    model,
    domain,
    context,
    searchParams,
    nameSearch,
    fieldsToRetrieve,
    onCardClick,
    handleButtonClick,
    setColumnRef,
    handleColumnCountChange,
    onAddCardClick,
    t,
  ]);

  return <>{content}</>;
};

export const KanbanComponent = memo(
  forwardRef<KanbanRef, KanbanProps>(KanbanComponentInner),
);
