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
import { SearchTreePaginatedProps } from "./SearchTreePaginated.types";
import { useTableConfiguration } from "../../../../hooks/useTableConfiguration";
import { PaginatedSearchControls } from "./components/PaginatedSearchControls";
import { PaginatedTableComponent } from "./components/PaginatedTableComponent";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { NameSearchWarning } from "../NameSearchWarning";
import { useCallbackRef } from "@/hooks/useCallbackRef";
import { useConfigContext } from "@/context/ConfigContext";

export const HEIGHT_OFFSET = 10;

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
  } = props;

  // Refs
  const tableRef: RefObject<PaginatedTableRef> = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRowDoubleClick = useCallbackRef(onRowClicked);
  const { treeMaxLimit } = useConfigContext();

  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  // Views data fetching
  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  const treeOoui: TreeOoui | undefined = useMemo(() => {
    if (!treeView) return;
    return getTree(treeView);
  }, [treeView]);

  const { columns, strings } = useTableConfiguration(treeOoui, parentContext);

  // Ensure columns is never undefined
  const safeColumns = useMemo(() => columns || [], [columns]);

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
    getColumnStateInProgress,
    getColumnState,
    updateColumnState,
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

  const isExpandable = treeView?.isExpandable;

  // Render
  return (
    <Fragment>
      {!isExpandable && (
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
        />
      )}
      {!isExpandable && (
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
            columns={safeColumns}
            treeOoui={treeOoui!}
            strings={strings}
            isLoading={treeIsLoading || getColumnStateInProgress}
            availableHeight={availableHeight}
            results={results}
            handleRowDoubleClick={handleRowDoubleClick}
            onRowHasBeenSelected={onRowHasBeenSelected}
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
            headerCheckboxState={headerCheckboxState}
            onHeaderCheckboxClick={onHeaderCheckboxClick}
            refresh={refreshCallbackRef}
            actionViewSortState={actionViewSortState}
            onSortChange={onSortChange}
            tableRef={tableRef}
            isFieldLoading={isFieldLoading}
            onChangeTreeType={!isExpandable ? onChangeTreeType : undefined}
            onFetchChildrenForRecord={
              treeView?.isExpandable ? fetchChildrenForRecord : undefined
            }
            childField={treeView?.field_parent}
          />
        )}
      </div>
    </Fragment>
  );
}

export const SearchTreePaginated = forwardRef(SearchTreePaginatedComp);
