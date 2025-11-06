import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
  memo,
} from "react";
import { useDeepCompareMemo } from "use-deep-compare";
import { KanbanView } from "@/types";
import { Kanban } from "@gisce/ooui";
import { KanbanBoard } from "./KanbanBoard";
import { useKanbanData, KanbanRecord } from "./useKanbanData";
import { useKanbanAggregates } from "./useKanbanAggregates";
import { Alert, Spin } from "antd";
import { mergeParams } from "@/helpers/searchHelper";
import { useLocale } from "@gisce/react-formiga-components";

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
        (b: any) => b.states !== undefined && b.states !== null,
      )
    ) {
      fields.push("state", "status");
    }

    fields.push("__model");

    return [...new Set(fields)];
  }, [kanbanDef]);

  const {
    columns,
    isLoading: isLoadingData,
    isRefreshing: isRefreshingData,
    error: dataError,
    fetchRecords,
    colorsForRecords,
    totalRows,
  } = useKanbanData({
    model,
    domain,
    context,
    columnField: kanbanDef?.column_field || "",
    columnFieldDefinition: columnFieldDef,
    searchParams,
    fieldsToRetrieve,
    enabled: !!kanbanDef && !!columnFieldDef,
    kanbanDef: kanbanDef || undefined,
    viewId: kanbanView.view_id,
  });

  useImperativeHandle(ref, () => ({
    refreshResults: () => {
      fetchRecords();
    },
  }));

  const columnIds = useMemo(() => columns.map((col) => col.id), [columns]);

  const aggregatedDomain = useMemo(
    () => mergeParams(domain, searchParams),
    [domain, searchParams],
  );

  const {
    aggregatesByColumn,
    isLoading: isLoadingAggregates,
    hasAggregates,
  } = useKanbanAggregates({
    kanbanDef: kanbanDef || undefined,
    model,
    domain: aggregatedDomain,
    context,
    columnField: kanbanDef?.column_field || "",
    columnIds,
    enabled: !!kanbanDef && columns.length > 0,
  });

  useEffect(() => {
    const isLoading = isLoadingData || isRefreshingData || isLoadingAggregates;
    onLoadingChange?.(isLoading);
  }, [isLoadingData, isRefreshingData, isLoadingAggregates, onLoadingChange]);

  useEffect(() => {
    onTotalRowsChange?.(totalRows);
  }, [totalRows, onTotalRowsChange]);

  const handleButtonClick = useCallback(
    async (buttonName: string, recordId: number) => {
      await fetchRecords();
    },
    [fetchRecords],
  );

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

    if (dataError) {
      return (
        <Alert
          message={t("error_loading_kanban_data")}
          description={dataError.message}
          type="error"
          showIcon
        />
      );
    }

    if (!kanbanDef) {
      return <Spin size="large" />;
    }

    return (
      <KanbanBoard
        columns={columns}
        kanbanDef={kanbanDef}
        colorsForRecords={colorsForRecords}
        context={context}
        isLoading={isLoadingData}
        isRefreshing={isRefreshingData}
        aggregatesByColumn={aggregatesByColumn}
        isLoadingAggregates={isLoadingAggregates}
        hasAggregates={hasAggregates}
        onCardClick={onCardClick}
        onButtonClick={handleButtonClick}
      />
    );
  }, [
    parsingError,
    dataError,
    kanbanDef,
    columns,
    colorsForRecords,
    context,
    isLoadingData,
    isRefreshingData,
    aggregatesByColumn,
    isLoadingAggregates,
    hasAggregates,
    onCardClick,
    handleButtonClick,
    t,
  ]);

  return <>{content}</>;
};

export const KanbanComponent = memo(
  forwardRef<KanbanRef, KanbanProps>(KanbanComponentInner),
);
