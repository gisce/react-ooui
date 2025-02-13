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

import { FormView, TreeView } from "@/types/index";
import { Tree as TreeOoui } from "@gisce/ooui";
import { PaginatedTableRef, PaginatedTable } from "@gisce/react-formiga-table";

import { Badge, Spin } from "antd";
import { useLocale, PaginationHeader } from "@gisce/react-formiga-components";
import { SideSearchFilter } from "../../searchFilter/SideSearchFilter";
import SearchFilter from "../../searchFilter/SearchFilter";
import { AggregatesFooter } from "../../../base/one2many/AggregatesFooter";

import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { useDeepCompareMemo } from "use-deep-compare";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { useTreeAggregates } from "../../../base/one2many/useTreeAggregates";
import { useAutorefreshableTreeFields } from "@/hooks/useAutorefreshableTreeFields";
import {
  DEFAULT_PAGE_SIZE,
  usePaginatedSearch,
} from "@/hooks/usePaginatedSearch";

import { getTableColumns, getTree } from "@/helpers/treeHelper";
import { mergeSearchFields } from "@/helpers/formHelper";
import { COLUMN_COMPONENTS } from "../treeComponents";

export const HEIGHT_OFFSET = 10;

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

export type SearchTreePaginatedProps = {
  model: string;
  formView: FormView;
  treeView: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
  nameSearch?: string;
  domain?: any;
  visible?: boolean;
  rootTree?: boolean;
  parentContext?: any;
  filterType?: "side" | "top";
};

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

  // Basic hooks
  const { t } = useLocale();

  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  // Data fetching and state management
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

  // Column management
  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) return;
    return getTableColumns(
      treeOoui,
      { ...COLUMN_COMPONENTS },
      parentContext,
      "paginated",
    );
  }, [treeOoui, parentContext]);

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
    setOrder: setActionViewSortState,
    setTreeFirstVisibleColumn,
    onGetFirstVisibleColumn,
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

  const strings = useMemo(
    () => ({
      resetTableViewLabel: t("resetTableView"),
    }),
    [t],
  );

  const containerStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${availableHeight}px`,
      ...(visible ? {} : { display: "none" }),
    }),
    [availableHeight, visible],
  );

  // Search filter configuration
  const searchFilterProps = useMemo(
    () => ({
      fields: { ...formView?.fields, ...treeView?.fields },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
      ]),
      showLimitOptions: false,
      limit: 0,
      offset: 0,
      isSearching: false,
      searchValues,
      searchVisible: true,
    }),
    [
      formView?.fields,
      formView?.search_fields,
      treeView?.fields,
      treeView?.search_fields,
      searchValues,
    ],
  );

  const sideSearchFilterProps = useMemo(
    () => ({
      isOpen: searchVisible,
      fields: { ...formView?.fields, ...treeView?.fields },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
      ]),
      searchValues,
    }),
    [
      searchVisible,
      formView?.fields,
      formView?.search_fields,
      treeView?.fields,
      treeView?.search_fields,
      searchValues,
    ],
  );

  // Main table content
  const content = useMemo(() => {
    if (!columns || !treeOoui) return null;

    return (
      <PaginatedTable
        ref={tableRef}
        strings={strings}
        loading={treeIsLoading || getColumnStateInProgress}
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
        onSortChange={setActionViewSortState}
      />
    );
  }, [
    columns,
    treeOoui,
    strings,
    treeIsLoading,
    getColumnStateInProgress,
    availableHeight,
    results,
    handleRowDoubleClick,
    onRowHasBeenSelected,
    updateColumnState,
    getColumnState,
    setTreeFirstVisibleRow,
    onGetFirstVisibleRowIndex,
    setTreeFirstVisibleColumn,
    onGetFirstVisibleColumn,
    footerComp,
    statusComp,
    onRowStatus,
    onRowStyle,
    headerCheckboxState,
    onHeaderCheckboxClick,
    refresh,
    actionViewSortState,
    setActionViewSortState,
  ]);

  // Render
  return (
    <Fragment>
      {filterType === "top" && (
        <SearchFilter
          {...searchFilterProps}
          onClear={onSearchFilterClear}
          onSubmit={onSearchFilterSubmit}
        />
      )}
      {filterType === "side" && (
        <SideSearchFilter
          {...sideSearchFilterProps}
          onClose={onSideSearchFilterClose}
          onSubmit={onSideSearchFilterSubmit}
        />
      )}
      <PaginationHeader
        total={totalRows || 0}
        totalRowsLoading={totalRowsLoading}
        initialPage={currentPage || 1}
        initialPageSize={limit || DEFAULT_PAGE_SIZE}
        currentPageSelectedCount={selectedRowKeys.length}
        onRequestPageChange={onRequestPageChange}
        totalSelectedCount={selectedRowKeys.length}
        onSelectAllGlobalRecords={selectAllRecords}
      />
      <div ref={containerRef} style={containerStyle}>
        {loading ? <Spin /> : content}
      </div>
    </Fragment>
  );
}

export const SearchTreePaginated = forwardRef(SearchTreePaginatedComp);
