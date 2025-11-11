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
import { KanbanBoard } from "./KanbanBoard";
import { KanbanRecord } from "./types";
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
  onCardClick?: (record: KanbanRecord) => void;
  onLoadingChange?: (isLoading: boolean) => void;
  onTotalRowsChange?: (totalRows: number) => void;
};

export type KanbanRef = {
  refreshResults: () => void;
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
    onCardClick,
    onLoadingChange,
    onTotalRowsChange,
  } = props;

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
      )
    ) {
      fields.push(kanbanDef.column_field);
    }

    fields.push("__model");

    return [...new Set(fields)];
  }, [kanbanDef]);

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
  });

  const columnRefs = useRef<Map<string, KanbanColumnRef>>(new Map());
  const [columnCounts, setColumnCounts] = useState<Record<string, number>>({});

  useImperativeHandle(ref, () => ({
    refreshResults: () => {
      // Trigger refresh on all columns
      columnRefs.current.forEach((ref) => {
        ref.refresh();
      });
    },
  }));

  const handleButtonClick = useCallback(
    async (buttonName: string, recordId: number) => {
      // Refresh all columns after button click
      columnRefs.current.forEach((ref) => {
        ref.refresh();
      });
    },
    [],
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

  // Calculate and report total rows
  useEffect(() => {
    const totalRows = Object.values(columnCounts).reduce(
      (sum, count) => sum + count,
      0,
    );
    onTotalRowsChange?.(totalRows);
  }, [columnCounts, onTotalRowsChange]);

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

    if (!kanbanDef || isLoadingColumns) {
      return <Spin size="large" />;
    }

    return (
      <KanbanBoard
        columns={columns}
        columnField={kanbanDef.column_field}
        model={model}
        domain={domain}
        context={context}
        searchParams={searchParams}
        fieldsToRetrieve={fieldsToRetrieve}
        kanbanDef={kanbanDef}
        onCardClick={onCardClick}
        onButtonClick={handleButtonClick}
        setColumnRef={setColumnRef}
        onColumnCountChange={handleColumnCountChange}
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
    fieldsToRetrieve,
    onCardClick,
    handleButtonClick,
    setColumnRef,
    handleColumnCountChange,
    t,
  ]);

  return <>{content}</>;
};

export const KanbanComponent = memo(
  forwardRef<KanbanRef, KanbanProps>(KanbanComponentInner),
);
