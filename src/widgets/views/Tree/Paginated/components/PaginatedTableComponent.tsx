import { memo, useMemo, useRef, useEffect } from "react";
import { PaginatedTable } from "@gisce/react-formiga-table";
import { PaginatedTableContentProps } from "../SearchTreePaginated.types";
import { CellRenderer } from "../../CellRenderer";
import {
  PlusSquareOutlined,
  MinusSquareOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

export const PaginatedTableComponent = memo(
  ({
    columns,
    treeOoui,
    strings,
    isLoading,
    availableHeight,
    results,
    handleRowDoubleClick,
    onRowHasBeenSelected,
    updateColumnState,
    getColumnState,
    setTreeFirstVisibleRow,
    onGetFirstVisibleRowIndex,
    onGetFirstVisibleColumn,
    setTreeFirstVisibleColumn,
    footerComp,
    statusComp,
    onRowStatus,
    onRowStyle,
    headerCheckboxState,
    onHeaderCheckboxClick,
    refresh,
    actionViewSortState,
    onSortChange,
    tableRef,
    isFieldLoading,
    onChangeTreeType,
    onFetchChildrenForRecord,
    childField,
  }: PaginatedTableContentProps) => {
    // Use a ref to store the last stable columns to prevent unnecessary re-creation
    const stableColumnsRef = useRef<any[]>([]);
    const isFieldLoadingRef = useRef(isFieldLoading);

    // Update isFieldLoading ref
    useEffect(() => {
      isFieldLoadingRef.current = isFieldLoading;
    }, [isFieldLoading]);

    // Create ultra-stable columns that only change when absolutely necessary
    const columnsWithLoading = useMemo(() => {
      if (!columns) return [];

      // Check if we need to recreate columns (only when column structure changes)
      const needsUpdate =
        stableColumnsRef.current.length !== columns.length ||
        columns.some((col, index) => {
          const existing = stableColumnsRef.current[index];
          return (
            !existing ||
            existing.key !== col.key ||
            existing.dataIndex !== col.dataIndex
          );
        });

      if (!needsUpdate && stableColumnsRef.current.length > 0) {
        // Return existing stable columns
        return stableColumnsRef.current;
      }

      // Create new stable columns only when needed
      const newColumns = columns.map((column) => {
        // Create a single stable render function per column that uses the ref
        const stableRender = (value: any, record: any) => (
          <CellRenderer
            value={value}
            record={record}
            column={column}
            isFieldLoading={isFieldLoadingRef.current}
          />
        );

        return {
          ...column,
          render: stableRender,
        };
      });

      // Store the new stable columns
      stableColumnsRef.current = newColumns;
      return newColumns;
    }, [columns]); // Include columns but use internal logic to prevent unnecessary updates

    if (!columns || !treeOoui) return null;

    return (
      <PaginatedTable
        ref={tableRef}
        strings={strings}
        isLoading={isLoading}
        height={availableHeight}
        columns={columnsWithLoading}
        dataSource={results}
        onRowDoubleClick={handleRowDoubleClick}
        onRowSelectionChange={onRowHasBeenSelected}
        onColumnChanged={updateColumnState}
        onGetColumnsState={getColumnState}
        onChangeFirstVisibleRowIndex={setTreeFirstVisibleRow}
        onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
        onGetFirstVisibleColumn={onGetFirstVisibleColumn}
        onChangeFirstVisibleColumn={setTreeFirstVisibleColumn}
        footer={footerComp}
        hasStatusColumn={treeOoui?.status !== null}
        statusComponent={statusComp}
        onRowStatus={onRowStatus}
        onRowStyle={onRowStyle}
        headerCheckboxState={headerCheckboxState}
        onHeaderCheckboxClick={onHeaderCheckboxClick}
        onForceReload={refresh}
        initialSortState={actionViewSortState}
        onSortChange={onSortChange}
        onChangeTableType={onChangeTreeType}
        expandableOpts={
          onFetchChildrenForRecord
            ? {
                expandIcon: PlusSquareOutlined,
                collapseIcon: MinusSquareOutlined,
                loadingIcon: LoadingOutlined,
                onFetchChildrenForRecord,
                childField: childField!,
              }
            : undefined
        }
      />
    );
  },
);

PaginatedTableComponent.displayName = "PaginatedTableComponent";

// Use regular memo with ultra-stable columns
export const StablePaginatedTableComponent = memo(PaginatedTableComponent);
