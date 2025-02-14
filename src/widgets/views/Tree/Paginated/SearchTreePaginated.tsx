import {
  Fragment,
  RefObject,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useEffect,
} from "react";

import { Tree as TreeOoui } from "@gisce/ooui";
import { PaginatedTableRef } from "@gisce/react-formiga-table";

import { Badge, Spin } from "antd";
import { PaginationHeader } from "@gisce/react-formiga-components";
import { AggregatesFooter } from "../../../base/one2many/AggregatesFooter";

import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { useTreeAggregates } from "../../../base/one2many/useTreeAggregates";
import { useAutorefreshableTreeFields } from "@/hooks/useAutorefreshableTreeFields";
import {
  DEFAULT_PAGE_SIZE,
  usePaginatedSearch,
} from "@/widgets/views/Tree/Paginated/hooks/usePaginatedSearch";

import { getTree } from "@/helpers/treeHelper";
import {
  SearchTreePaginatedProps,
  OnRowClickedData,
} from "./SearchTreePaginated.types";
import { useTableConfiguration } from "../../../../hooks/useTableConfiguration";
import { PaginatedSearchControls } from "./components/PaginatedSearchControls";
import { PaginatedTableComponent } from "./components/PaginatedTableComponent";

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
  } = props;

  // Refs
  const tableRef: RefObject<PaginatedTableRef> = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const onRowClickedRef = useRef(onRowClicked);

  // Update ref when onRowClicked changes
  useEffect(() => {
    onRowClickedRef.current = onRowClicked;
  }, [onRowClicked]);

  // Callback that uses the ref
  const handleRowDoubleClick = useCallback((data: OnRowClickedData) => {
    onRowClickedRef.current?.(data);
  }, []);

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
    isActive,
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
  });

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

  // Auto-refresh setup
  useAutorefreshableTreeFields({
    model,
    tableRef,
    autorefreshableFields: treeOoui?.autorefreshableFields,
    fieldDefs: treeView?.field_parent
      ? { ...treeView?.fields, [treeView?.field_parent]: {} }
      : treeView?.fields,
    context: parentContext,
    isActive,
  });

  // External control
  useImperativeHandle(ref, () => ({
    refreshResults: refresh,
    getFields: () => treeView?.fields,
    getDomain: () => domain,
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

  // Render
  return (
    <Fragment>
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
      <PaginationHeader
        total={totalRows || 0}
        totalRowsLoading={totalRowsLoading}
        page={currentPage || 1}
        pageSize={limit || DEFAULT_PAGE_SIZE}
        currentPageSelectedCount={selectedRowKeys.length}
        onRequestPageChange={onRequestPageChange}
        totalSelectedCount={selectedRowKeys.length}
        onSelectAllGlobalRecords={selectAllRecords}
      />
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
            refresh={refresh}
            actionViewSortState={actionViewSortState}
            onSortChange={onSortChange}
            tableRef={tableRef}
          />
        )}
      </div>
    </Fragment>
  );
}

export const SearchTreePaginated = forwardRef(SearchTreePaginatedComp);
