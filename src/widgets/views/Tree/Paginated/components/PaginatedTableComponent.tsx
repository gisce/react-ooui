import { memo, useCallback, useMemo } from "react";
import { PaginatedTable } from "@gisce/react-formiga-table";
import { PaginatedTableContentProps } from "../SearchTreePaginated.types";
import { SkeletonPill } from "../../components/SkeletonPill";

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
  }: PaginatedTableContentProps) => {
    // Wrap column components to inject loading state
    const columnsWithLoading = useMemo(() => {
      return columns.map((column) => ({
        ...column,
        render: (value: any, record: any) => {
          if (isFieldLoading?.(record, column.key)) {
            return <SkeletonPill />;
          }
          return column.render(
            value,
            column.key,
            column?.ooui,
            column?.context,
          );
        },
      }));
    }, [columns, isFieldLoading]);

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
      />
    );
  },
);

PaginatedTableComponent.displayName = "PaginatedTableComponent";
