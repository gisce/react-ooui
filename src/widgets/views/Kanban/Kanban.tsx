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
import { KanbanBoard } from "./KanbanBoard";
import { useKanbanData, KanbanRecord } from "./useKanbanData";
import { useKanbanAggregates } from "./useKanbanAggregates";
import { Alert, Spin } from "antd";
import { mergeParams } from "@/helpers/searchHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";

const HEIGHT_OFFSET = 10;

type KanbanProps = {
  kanbanView: KanbanView;
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  onCardClick?: (record: KanbanRecord) => void;
  onLoadingChange?: (isLoading: boolean) => void;
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
  } = props;

  const { t } = useLocale();
  const [kanbanDef, setKanbanDef] = useState<Kanban | null>(null);
  const [parsingError, setParsingError] = useState<Error | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

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

  const handleButtonClick = useCallback(
    async (buttonName: string, recordId: number) => {
      await fetchRecords();
    },
    [fetchRecords],
  );

  const containerStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${availableHeight}px`,
    }),
    [availableHeight],
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
    availableHeight,
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

  return (
    <div ref={containerRef} style={containerStyle}>
      {content}
    </div>
  );
};

export const KanbanComponent = memo(
  forwardRef<KanbanRef, KanbanProps>(KanbanComponentInner),
);
