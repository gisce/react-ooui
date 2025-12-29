import React, { useCallback, useMemo } from "react";
import { ColumnState } from "@gisce/react-formiga-table";
import { Tree as TreeOoui } from "@gisce/ooui";
import { Badge } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { useTreeColumnStorageFetch } from "@/widgets/base/one2many/useTreeColumnStorageFetch";
import { useDeepCompareMemo } from "use-deep-compare";
import { getTableColumns } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "../widgets/views/Tree/treeComponents";
import {
  useFeatureIsEnabled,
  useUserFeatureIsEnabled,
} from "@/context/ConfigContext";
import { ErpFeatureKeys, UserFeatureKeys } from "..";
import { useTreeAttributesState } from "./useTreeAttributesState";

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
  tableRef?: React.RefObject<any>;
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
  updateAttributes: (attrsEvaluated: any[], treeOoui: TreeOoui) => void;
  clearAttributes: () => void;
}

export const useTableCore = ({
  treeOoui,
  parentContext,
  columnStateKey,
  enableColumnState = true,
  tableRef,
}: UseTableCoreProps): UseTableCoreReturn => {
  const { t } = useLocale();

  // Use attribute state management for dynamic row colors and status
  const {
    colorsForResults,
    statusForResults,
    updateAttributes,
    clearAttributes,
  } = useTreeAttributesState({
    tableRef,
  });

  // Feature flags
  const many2oneSortEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_MANY2ONE_SORT,
  );
  const selectionToLazy = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_SELECTION_TO_LAZY,
  );

  // Get table columns
  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) return undefined;
    return getTableColumns(
      treeOoui,
      { ...COLUMN_COMPONENTS },
      parentContext,
      many2oneSortEnabled,
      selectionToLazy,
    );
  }, [treeOoui, parentContext, many2oneSortEnabled, selectionToLazy]);

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
  const onRowStyle = useCallback(
    (record: any) => {
      if (colorsForResults.current[record.node?.data?.id]) {
        return { color: colorsForResults.current[record.node?.data?.id] };
      }
      return undefined;
    },
    [colorsForResults],
  );

  // Status component renderer
  const statusComponent = useCallback(
    (status: any) =>
      React.createElement(Badge, { color: status, style: { marginLeft: 7 } }),
    [],
  );

  // Row status getter
  const onRowStatus = useCallback(
    (record: any) => statusForResults.current?.[record.id],
    [statusForResults],
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
    updateAttributes,
    clearAttributes,
  };
};
