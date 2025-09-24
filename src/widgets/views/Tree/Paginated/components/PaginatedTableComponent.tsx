import { memo } from "react";
import { PaginatedTable } from "@gisce/react-formiga-table";
import { PaginatedTableContentProps } from "../SearchTreePaginated.types";
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
    onChangeTreeType,
    onFetchChildrenForRecord,
    childField,
    autoRefresh,
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
        onChangeTableType={onChangeTreeType}
        autoRefresh={autoRefresh}
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
