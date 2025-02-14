import { memo } from "react";
import { PaginatedTable } from "@gisce/react-formiga-table";
import { PaginatedTableContentProps } from "../SearchTreePaginated.types";

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
  }: PaginatedTableContentProps) => {
    if (!columns || !treeOoui) return null;

    return (
      <PaginatedTable
        ref={tableRef}
        strings={strings}
        isLoading={isLoading}
        height={availableHeight}
        columns={columns}
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
