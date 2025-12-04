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
  onOpenColumnInNewTab?: (domain: any[]) => void;
};

export type KanbanRef = {
  refreshResults: () => void;
  refreshColumns: (columnIds: string[]) => void;
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
    onOpenColumnInNewTab,
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
  const columnCountsRef = useRef<Record<string, number>>({});

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
    }),
    [refreshColumns],
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
      columnCountsRef.current = {
        ...columnCountsRef.current,
        [columnId]: count,
      };
      const totalRows = Object.values(columnCountsRef.current).reduce(
        (sum, c) => sum + c,
        0,
      );
      onTotalRowsChange?.(totalRows);
    },
    [onTotalRowsChange],
  );

  const handleDragSuccess = useCallback(
    (sourceColumnId: string, targetColumnId: string) => {
      refreshColumns([sourceColumnId, targetColumnId]);
    },
    [refreshColumns],
  );

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

    if (!kanbanDef || (isLoadingColumns && columns.length === 0)) {
      return <Spin size="large" />;
    }

    return (
      <KanbanBoard
        ref={boardRef}
        kanbanDef={kanbanDef}
        columns={columns}
        model={model}
        viewId={kanbanView.view_id}
        domain={domain}
        context={context}
        searchParams={searchParams}
        nameSearch={nameSearch}
        fieldsToRetrieve={fieldsToRetrieve}
        allowSetMaxCards={kanbanDef.set_max_cards === true}
        onCardClick={onCardClick}
        setColumnRef={setColumnRef}
        onColumnCountChange={handleColumnCountChange}
        onAddCardClick={onAddCardClick}
        onDragSuccess={handleDragSuccess}
        onOpenColumnInNewTab={onOpenColumnInNewTab}
      />
    );
  }, [
    parsingError,
    columnsError,
    kanbanDef,
    columns,
    isLoadingColumns,
    model,
    kanbanView.view_id,
    domain,
    context,
    searchParams,
    nameSearch,
    fieldsToRetrieve,
    kanbanDef?.set_max_cards,
    onCardClick,
    setColumnRef,
    handleColumnCountChange,
    onAddCardClick,
    handleDragSuccess,
    onOpenColumnInNewTab,
    t,
  ]);

  return <>{content}</>;
};

export const KanbanComponent = memo(
  forwardRef<KanbanRef, KanbanProps>(KanbanComponentInner),
);
