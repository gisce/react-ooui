import React, { useCallback, useRef, useMemo } from "react";
import { ColumnState } from "@gisce/react-formiga-table";
import { Tree as TreeOoui } from "@gisce/ooui";
import { Badge } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { useTreeColumnStorageFetch } from "@/widgets/base/one2many/useTreeColumnStorageFetch";
import { useDeepCompareMemo } from "use-deep-compare";
import { getTableColumns } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "../widgets/views/Tree/treeComponents";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "..";

export interface SharedTableColors {
  [key: number]: string;
}

export interface SharedTableStatus {
  [key: number]: string;
}

export interface UseTableCoreProps {
  treeOoui: TreeOoui | undefined;
  parentContext: Record<string, unknown>;
  columnStateKey?: string;
  enableColumnState?: boolean;
}

export interface UseTableCoreReturn {
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

export const useTableCore = ({
  treeOoui,
  parentContext,
  columnStateKey,
  enableColumnState = true,
}: UseTableCoreProps): UseTableCoreReturn => {
  const { t } = useLocale();
  const colorsForResults = useRef<SharedTableColors>({});
  const statusForResults = useRef<SharedTableStatus>({});

  // Feature flags
  const many2oneSortEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_MANY2ONE_SORT,
  );

  // Get table columns
  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) return undefined;
    return getTableColumns(
      treeOoui,
      { ...COLUMN_COMPONENTS },
      parentContext,
      many2oneSortEnabled,
    );
  }, [treeOoui, parentContext, many2oneSortEnabled]);

  // Column state management (optional)
  const columnStateResult = useTreeColumnStorageFetch({
    key: enableColumnState ? columnStateKey : undefined,
  });

  const {
    loading: isColumnStateLoading,
    getColumnState,
    updateColumnState,
  } = enableColumnState
    ? columnStateResult
    : {
        loading: false,
        getColumnState: () => undefined,
        updateColumnState: () => {},
      };

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

  // Table-specific translations
  const strings = useMemo(
    () => ({
      resetTableViewLabel: t("resetTableView"),
      changeToInfiniteLabel: t("changeToInfinite"),
      changeToPaginatedLabel: t("changeToPaginated"),
      noResultsLabel: t("no_results"),
    }),
    [t],
  );

  return {
    columns,
    strings,
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
