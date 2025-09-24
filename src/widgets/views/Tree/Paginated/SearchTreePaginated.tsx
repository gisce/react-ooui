import {
  Fragment,
  RefObject,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

import { Tree as TreeOoui } from "@gisce/ooui";
import { PaginatedTableRef } from "@gisce/react-formiga-table";

import { Badge, Spin } from "antd";
import { PaginationHeader } from "@gisce/react-formiga-components";
import { AggregatesFooter } from "../../../base/one2many/AggregatesFooter";

import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { useTreeAggregates } from "../../../base/one2many/useTreeAggregates";
import {
  DEFAULT_PAGE_SIZE,
  usePaginatedSearch,
} from "@/widgets/views/Tree/Paginated/hooks/usePaginatedSearch";

import { getTree } from "@/helpers/treeHelper";
import {
  OnRowClickedData,
  SearchTreePaginatedProps,
} from "./SearchTreePaginated.types";
import { useTableCore } from "../../../../hooks/useTableCore";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { PaginatedSearchControls } from "./components/PaginatedSearchControls";
import { PaginatedTableComponent } from "./components/PaginatedTableComponent";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { NameSearchWarning } from "../NameSearchWarning";
import { useCallbackRef } from "@/hooks/useCallbackRef";
import { useConfigContext } from "@/context/ConfigContext";
import { useExpandableTreeDoubleClick } from "@/hooks/useExpandableTreeDoubleClick";
import { CellRenderer } from "../CellRenderer";

export const HEIGHT_OFFSET = 10;
export const EXPANDABLE_HEIGHT_OFFSET = -30;

function SearchTreePaginatedComp(props: SearchTreePaginatedProps, ref: any) {
  const {
    model,
    formView: formViewProps,
    treeView: treeViewProps,
    onRowClicked,
    domain = [],
    visible = true,
    rootTree = false,
    parentContext = {},
    nameSearch: nameSearchProps,
    filterType = "side",
    onChangeTreeType,
    hideHeaders = false,
    hideSelectionColumn = false,
    fixedHeight,
    autoRefresh,
  } = props;

  // Refs
  const tableRef: RefObject<PaginatedTableRef> = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onRowClickedRef = useCallbackRef(onRowClicked);
  const { treeMaxLimit } = useConfigContext();

  // Views data fetching
  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  const calculatedHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: treeView?.isExpandable ? EXPANDABLE_HEIGHT_OFFSET : HEIGHT_OFFSET,
  });
  const availableHeight =
    fixedHeight !== undefined ? fixedHeight : calculatedHeight;

  const treeOoui: TreeOoui | undefined = useMemo(() => {
    if (!treeView) return;
    return getTree(treeView);
  }, [treeView]);

  const {
    columns,
    strings,
    getColumnState,
    updateColumnState,
    isColumnStateLoading,
    updateAttributes,
    clearAttributes,
    colorsForResults,
    statusForResults,
  } = useTableCore({
    treeOoui,
    parentContext,
    columnStateKey: treeView
      ? getKey({
          treeViewId: treeView.view_id,
          model,
        })
      : undefined,
    tableRef,
  });

  // Ensure columns is never undefined
  const safeColumns = useMemo(() => columns || [], [columns]);
  const isExpandable = treeView?.isExpandable;

  // Pagination and search state
  const {
    searchVisible,
    searchValues,
    selectedRowKeys,
    refresh,
    onRowStatus,
    onGetFirstVisibleRowIndex,
    setTreeFirstVisibleRow,
    onRowHasBeenSelected,
    onSearchFilterClear,
    onSearchFilterSubmit,
    onSideSearchFilterClose,
    onSideSearchFilterSubmit,
    totalRowsLoading,
    totalRows,
    onRowStyle,
    results,
    onRequestPageChange,
    treeIsLoading,
    selectAllRecords,
    onHeaderCheckboxClick,
    headerCheckboxState,
    currentPage,
    limit,
    order: actionViewSortState,
    setTreeFirstVisibleColumn,
    onGetFirstVisibleColumn,
    onSortChange,
    isFieldLoading,
    setSearchVisible,
    nameSearchFetchCompleted,
    nameSearch,
    fetchChildrenForRecord,
  } = usePaginatedSearch({
    treeViewFetching: loading,
    treeOoui,
    treeView,
    model,
    rootTree,
    nameSearchProps,
    tableRef,
    domain,
    filterType,
    context: parentContext,
    onChangeTreeType,
    updateAttributes,
    clearAttributes,
    colorsForResults,
    statusForResults,
    disablePagination: hideHeaders || isExpandable,
    autoRefresh,
  });

  const paginatedColumns = useMemo(() => {
    const shouldDisableSorting = nameSearch !== undefined;
    return safeColumns.map((column) => ({
      ...column,
      isSortable: shouldDisableSorting ? false : column.isSortable,
      render: (value: any, record: any) => (
        <CellRenderer
          value={value}
          record={record}
          column={column}
          isFieldLoading={isFieldLoading}
        />
      ),
    }));
  }, [isFieldLoading, safeColumns, nameSearch]);

  const { handleExpandableRowDoubleClick } = useExpandableTreeDoubleClick({
    treeView,
    currentModel: model,
    parentContext,
  });

  const handleRowDoubleClick = useCallbackRef((data: OnRowClickedData) => {
    if (isExpandable) {
      handleExpandableRowDoubleClick(data);
    } else {
      onRowClickedRef(data);
    }
  });

  const refreshCallbackRef = useCallbackRef(refresh);

  // Aggregates handling
  const [loadingAggregates, aggregates, hasAggregates] = useTreeAggregates({
    ooui: treeOoui,
    model,
    showEmptyValues: true,
    domain:
      selectedRowKeys?.length > 0
        ? // eslint-disable-next-line @typescript-eslint/require-array-sort-compare
          [["id", "in", selectedRowKeys.sort()]]
        : undefined,
  });

  // External control
  useImperativeHandle(ref, () => ({
    refreshResults: refresh,
    getFields: () => treeView?.fields,
  }));

  // UI Components and Styles
  const footerComp = useMemo(() => {
    if (!hasAggregates) return null;
    return (
      <AggregatesFooter aggregates={aggregates} isLoading={loadingAggregates} />
    );
  }, [aggregates, loadingAggregates, hasAggregates]);

  const statusComp = useCallback(
    (status: any) => <Badge color={status} style={{ marginLeft: 7 }} />,
    [],
  );

  const containerStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${availableHeight}px`,
      ...(visible ? {} : { display: "none" }),
    }),
    [availableHeight, visible],
  );

  const shouldShowSimpleSummary =
    nameSearch !== undefined && nameSearchFetchCompleted;
  const shouldShowNameSearchWarning =
    shouldShowSimpleSummary &&
    totalRows !== undefined &&
    totalRows !== null &&
    totalRows === DEFAULT_SEARCH_LIMIT;

  const totalRowsAdjusted = useMemo(() => {
    // This is for the custom searches trees, that return -1 as totalRows and then
    // All the results are in the same page.
    if (typeof totalRows !== "number" || isNaN(totalRows) || totalRows < 0) {
      return results?.length || 0;
    }
    return totalRows || 0;
  }, [totalRows, results]);

  const pageSizeAdjusted = useMemo(() => {
    // This is for the custom searches trees, that return -1 as totalRows and then
    // All the results are in the same page.
    if (
      results?.length > 0 &&
      (typeof totalRows !== "number" || isNaN(totalRows) || totalRows < 0)
    ) {
      return results?.length;
    }
    return nameSearchProps ? DEFAULT_SEARCH_LIMIT : limit || DEFAULT_PAGE_SIZE;
  }, [results?.length, totalRows, nameSearchProps, limit]);

  // Render
  return (
    <Fragment>
      {!isExpandable && !hideHeaders && (
        <PaginatedSearchControls
          filterType={filterType}
          formView={formView}
          treeView={treeView}
          searchVisible={searchVisible}
          searchValues={searchValues}
          onSearchFilterClear={onSearchFilterClear}
          onSearchFilterSubmit={onSearchFilterSubmit}
          onSideSearchFilterClose={onSideSearchFilterClose}
          onSideSearchFilterSubmit={onSideSearchFilterSubmit}
          currentModel={model}
          context={parentContext}
        />
      )}
      {!isExpandable && !hideHeaders && (
        <PaginationHeader
          total={totalRowsAdjusted}
          totalRowsLoading={totalRowsLoading}
          page={nameSearchProps ? 1 : currentPage || 1}
          pageSize={pageSizeAdjusted}
          maxPageSize={treeMaxLimit}
          currentPageSelectedCount={selectedRowKeys.length}
          onRequestPageChange={onRequestPageChange}
          totalSelectedCount={selectedRowKeys.length}
          onSelectAllGlobalRecords={selectAllRecords}
          simpleSummary={shouldShowSimpleSummary}
          showAllOptionInPageSizeOptions={onChangeTreeType !== undefined}
          customMiddleComponent={
            shouldShowNameSearchWarning && (
              <NameSearchWarning
                onFilterSearchClick={() => setSearchVisible(true)}
              />
            )
          }
        />
      )}
      <div ref={containerRef} style={containerStyle}>
        {loading ? (
          <Spin />
        ) : (
          <PaginatedTableComponent
            columns={paginatedColumns}
            treeOoui={treeOoui!}
            strings={strings}
            isLoading={
              autoRefresh ? false : treeIsLoading || isColumnStateLoading
            }
            availableHeight={availableHeight}
            results={results}
            handleRowDoubleClick={handleRowDoubleClick}
            onRowHasBeenSelected={
              hideSelectionColumn ? undefined : onRowHasBeenSelected
            }
            updateColumnState={updateColumnState}
            getColumnState={getColumnState}
            setTreeFirstVisibleRow={setTreeFirstVisibleRow}
            onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
            onGetFirstVisibleColumn={onGetFirstVisibleColumn}
            setTreeFirstVisibleColumn={setTreeFirstVisibleColumn}
            footerComp={footerComp}
            statusComp={statusComp}
            onRowStatus={onRowStatus}
            onRowStyle={onRowStyle}
            headerCheckboxState={
              hideSelectionColumn ? "unchecked" : headerCheckboxState
            }
            onHeaderCheckboxClick={
              hideSelectionColumn ? () => {} : onHeaderCheckboxClick
            }
            refresh={refreshCallbackRef}
            actionViewSortState={actionViewSortState}
            onSortChange={onSortChange}
            tableRef={tableRef}
            onChangeTreeType={!isExpandable ? onChangeTreeType : undefined}
            onFetchChildrenForRecord={
              treeView?.isExpandable ? fetchChildrenForRecord : undefined
            }
            childField={treeView?.field_parent}
            autoRefresh={autoRefresh}
          />
        )}
      </div>
    </Fragment>
  );
}

export const SearchTreePaginated = forwardRef(SearchTreePaginatedComp);
