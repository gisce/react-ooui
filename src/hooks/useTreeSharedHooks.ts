import { useCallback, useMemo } from "react";
import { useTreeFunctionFieldsRead } from "./useTreeFunctionFieldsRead";
import { useAutorefreshableTreeFields } from "./useAutorefreshableTreeFields";
import { TreeView } from "@/types";
import { Tree as TreeOoui } from "@gisce/ooui";
import {
  InfiniteTableRef,
  PaginatedTableRef,
} from "@gisce/react-formiga-table";

export type UseTreeSharedHooksProps = {
  model: string;
  treeView?: TreeView;
  tableRef: React.RefObject<InfiniteTableRef | PaginatedTableRef | null>;
  context?: any;
  isActive?: boolean;
  treeOoui?: TreeOoui;
  updateAttributes?: (attrsEvaluated: any[], treeOoui: TreeOoui) => void;
  results?: any[];
  onResultsUpdated?: (updatedResults: any[]) => void;
  autoRefresh?: number;
};

/**
 * Shared hook that consolidates common tree functionality
 * for use across SearchTreeInfinite, usePaginatedSearch, and One2manyTree
 */
export const useTreeSharedHooks = ({
  model,
  treeView,
  tableRef,
  context = {},
  isActive = true,
  treeOoui,
  updateAttributes,
  results = [],
  onResultsUpdated,
  autoRefresh,
}: UseTreeSharedHooksProps) => {
  // Centralized logic for determining if function fields should be deferred
  const shouldMakeDeferredFunctionRead =
    treeView?.fields_in_conditions !== undefined && !autoRefresh;

  // Function fields hook - still active but won't be used for deferred loading when autoRefresh is true
  const {
    isFieldLoading,
    refresh: refreshFunctionFields,
    addRecordsToCheckFunctionFields,
    onHasFunctionFieldsToParseConditions,
    syncExternalRecordUpdates,
  } = useTreeFunctionFieldsRead({
    model,
    treeView,
    tableRef,
    context,
    isActive,
    onResultsUpdated,
    treeOoui,
    updateAttributes,
    results,
    skipFunctionFieldsHandling: Boolean(autoRefresh),
  });

  // Auto-refreshable fields hook - disabled when autoRefresh is true
  const { clear: clearAutorefreshableFields } = useAutorefreshableTreeFields({
    model,
    tableRef,
    autorefreshableFields: autoRefresh
      ? undefined
      : treeOoui?.autorefreshableFields,
    treeView,
    context,
    isActive: autoRefresh ? false : isActive,
    treeOoui,
    updateAttributes,
    results,
    onRecordsUpdated: syncExternalRecordUpdates,
  });

  // Consolidated refresh function
  const refreshEnhancedFields = useCallback(() => {
    refreshFunctionFields();
    clearAutorefreshableFields();
  }, [refreshFunctionFields, clearAutorefreshableFields]);

  // Consolidated clear function
  const clearEnhancedFields = useCallback(() => {
    clearAutorefreshableFields();
  }, [clearAutorefreshableFields]);

  return useMemo(
    () => ({
      isFieldLoading,
      refreshEnhancedFields,
      clearEnhancedFields,
      addRecordsToCheckFunctionFields,
      onHasFunctionFieldsToParseConditions,
      syncExternalRecordUpdates,
      // Individual functions for backward compatibility
      refreshFunctionFields,
      clearAutorefreshableFields,
      shouldMakeDeferredFunctionRead,
    }),
    [
      isFieldLoading,
      refreshEnhancedFields,
      clearEnhancedFields,
      addRecordsToCheckFunctionFields,
      onHasFunctionFieldsToParseConditions,
      syncExternalRecordUpdates,
      refreshFunctionFields,
      clearAutorefreshableFields,
      shouldMakeDeferredFunctionRead,
    ],
  );
};
