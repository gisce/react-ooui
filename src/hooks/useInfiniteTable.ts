import React, { useCallback, useRef, useMemo } from "react";
import { ColumnState, InfiniteTableRef } from "@gisce/react-formiga-table";
import { Tree as TreeOoui } from "@gisce/ooui";
import { Badge } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { useTreeColumnStorageFetch } from "@/widgets/base/one2many/useTreeColumnStorageFetch";
import { useTableConfiguration } from "./useTableConfiguration";

export interface SharedTableColors {
  [key: number]: string;
}

export interface SharedTableStatus {
  [key: number]: string;
}

export interface UseInfiniteTableProps {
  treeOoui: TreeOoui | undefined;
  parentContext: Record<string, unknown>;
  columnStateKey?: string;
  selectedRowKeys?: number[];
  hasStatusColumn?: boolean;
}

export interface UseInfiniteTableReturn {
  columns: any[] | undefined;
  strings: Record<string, string>;
  colorsForResults: React.MutableRefObject<SharedTableColors>;
  statusForResults: React.MutableRefObject<SharedTableStatus>;
  onRowStyle: (record: any) => React.CSSProperties | undefined;
  statusComponent: (status: any) => React.ReactNode;
  onRowStatus: (record: any) => string | undefined;
  getColumnState: () => ColumnState[] | undefined;
  updateColumnState: (state: ColumnState[]) => void;
  isColumnStateLoading: boolean;
}

export const useInfiniteTable = ({
  treeOoui,
  parentContext,
  columnStateKey,
  selectedRowKeys = [],
  hasStatusColumn = false,
}: UseInfiniteTableProps): UseInfiniteTableReturn => {
  const { t } = useLocale();
  const colorsForResults = useRef<SharedTableColors>({});
  const statusForResults = useRef<SharedTableStatus>({});

  // Get table configuration (columns and strings)
  const { columns, strings } = useTableConfiguration(treeOoui, parentContext);

  // Column state management
  const {
    loading: isColumnStateLoading,
    getColumnState,
    updateColumnState,
  } = useTreeColumnStorageFetch({ key: columnStateKey });

  // Row styling based on colors
  const onRowStyle = useCallback((record: any) => {
    if (colorsForResults.current[record.node?.data?.id]) {
      return { color: colorsForResults.current[record.node?.data?.id] };
    }
    return undefined;
  }, []);

  // Status component renderer
  const statusComponent = useCallback(
    (status: any) =>
      React.createElement(Badge, { color: status, style: { marginLeft: 7 } }),
    [],
  );

  // Row status getter
  const onRowStatus = useCallback(
    (record: any) => statusForResults.current?.[record.id],
    [],
  );

  // Enhanced strings with additional table-specific translations
  const enhancedStrings = useMemo(
    () => ({
      ...strings,
      resetTableViewLabel: t("resetTableView"),
      changeToInfiniteLabel: t("changeToInfinite"),
      changeToPaginatedLabel: t("changeToPaginated"),
      noResultsLabel: t("no_results"),
    }),
    [strings, t],
  );

  return {
    columns,
    strings: enhancedStrings,
    colorsForResults,
    statusForResults,
    onRowStyle,
    statusComponent,
    onRowStatus,
    getColumnState,
    updateColumnState,
    isColumnStateLoading,
  };
};
