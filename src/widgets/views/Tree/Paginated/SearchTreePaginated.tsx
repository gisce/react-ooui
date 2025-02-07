import {
  Fragment,
  RefObject,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { FormView, TreeView } from "@/types/index";
import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { Badge, Spin } from "antd";
import { getTableColumns, getTree } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "../treeComponents";
import { useDeepCompareMemo } from "use-deep-compare";
import { InfiniteTableRef, PaginatedTable } from "@gisce/react-formiga-table";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { mergeSearchFields } from "@/helpers/formHelper";
import { useTreeColumnStorageFetch } from "../../../base/one2many/useTreeColumnStorageFetch";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { useTreeAggregates } from "../../../base/one2many/useTreeAggregates";
import { AggregatesFooter } from "../../../base/one2many/AggregatesFooter";
import { useLocale, PaginationHeader } from "@gisce/react-formiga-components";
import { SideSearchFilter } from "../../searchFilter/SideSearchFilter";
import SearchFilter from "../../searchFilter/SearchFilter";
import { Tree as TreeOoui } from "@gisce/ooui";
import { useAutorefreshableTreeFields } from "@/hooks/useAutorefreshableTreeFields";
import {
  DEFAULT_PAGE_SIZE,
  usePaginatedSearch,
} from "@/hooks/usePaginatedSearch";

// Constants
export const HEIGHT_OFFSET = 10;

// Types
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
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
  filterType?: "side" | "top";
};

function SearchTreePaginatedComp(props: SearchTreePaginatedProps, ref: any) {
  // Props destructuring
  const {
    model,
    formView: formViewProps,
    treeView: treeViewProps,
    onRowClicked,
    domain = [],
    visible = true,
    rootTree = false,
    parentContext = {},
    onChangeSelectedRowKeys: onChangeSelectedRowKeysProps,
    nameSearch: nameSearchProps,
    filterType = "side",
  } = props;

  // Refs
  const tableRef: RefObject<InfiniteTableRef> = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Hooks
  const { t } = useLocale();
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  // Data fetching
  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  // Tree setup
  const treeOoui: TreeOoui | undefined = useMemo(() => {
    if (!treeView) {
      return;
    }
    return getTree(treeView);
  }, [treeView]);

  // Column setup
  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) {
      return;
    }
    return getTableColumns(
      treeOoui,
      {
        ...COLUMN_COMPONENTS,
      },
      parentContext,
    );
  }, [treeOoui, parentContext]);

  const columnStateKey = useMemo(() => {
    if (loading) {
      return undefined;
    }
    return getKey({
      treeViewId: treeView?.view_id,
      model,
    });
  }, [model, treeView?.view_id, loading]);

  const {
    loading: getColumnStateInProgress,
    getColumnState,
    updateColumnState,
  } = useTreeColumnStorageFetch(columnStateKey);

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
    onChangeSelectedRowKeys,
    onSearchFilterClear,
    onSearchFilterSubmit,
    onSideSearchFilterClose,
    onSideSearchFilterSubmit,
    totalRowsLoading,
    totalRows,
    onRowStyle,
    results,
    onPageSizeChange,
    onRequestPageChange,
  } = usePaginatedSearch({
    treeOoui,
    treeView,
    model,
    rootTree,
    nameSearchProps,
    tableRef,
    domain,
    onChangeSelectedRowKeys: onChangeSelectedRowKeysProps,
    filterType,
  });

  // Aggregates
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

  // Autorefresh setup
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

  // Imperative handle for external control
  useImperativeHandle(ref, () => ({
    refreshResults: refresh,
    getFields: () => treeView?.fields,
    getDomain: () => domain,
  }));

  // UI Components
  const footerComp = useMemo(() => {
    if (!hasAggregates) {
      return null;
    }
    return (
      <AggregatesFooter aggregates={aggregates} isLoading={loadingAggregates} />
    );
  }, [aggregates, loadingAggregates, hasAggregates]);

  const statusComp = useCallback((status: any) => {
    return <Badge color={status} style={{ marginLeft: 7 }} />;
  }, []);

  const strings = useMemo(
    () => ({
      resetTableViewLabel: t("resetTableView"),
    }),
    [t],
  );

  // Style
  const containerStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${availableHeight}px`,
      ...(visible ? {} : { display: "none" }),
    }),
    [availableHeight, visible],
  );

  // Search filter props
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

  // Table content
  const content = useMemo(() => {
    if (!columns || !treeOoui) {
      return null;
    }

    return (
      <PaginatedTable
        ref={tableRef}
        strings={strings}
        loading={false}
        height={availableHeight}
        columns={columns}
        dataSource={results}
        initialSelectionRowKeys={selectedRowKeys}
        onRowDoubleClick={onRowClicked}
        onRowSelectionChange={onChangeSelectedRowKeys}
        onColumnChanged={updateColumnState}
        onGetColumnsState={getColumnState}
        onChangeFirstVisibleRowIndex={setTreeFirstVisibleRow}
        onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
        footer={footerComp}
        hasStatusColumn={treeOoui?.status !== null}
        statusComponent={statusComp}
        onRowStatus={onRowStatus}
        onRowStyle={onRowStyle}
      />
    );
  }, [
    columns,
    treeOoui,
    strings,
    availableHeight,
    results,
    selectedRowKeys,
    onRowClicked,
    onChangeSelectedRowKeys,
    updateColumnState,
    getColumnState,
    setTreeFirstVisibleRow,
    onGetFirstVisibleRowIndex,
    footerComp,
    statusComp,
    onRowStatus,
    onRowStyle,
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
        initialPage={1}
        initialPageSize={DEFAULT_PAGE_SIZE}
        currentPageSelectedCount={selectedRowKeys.length}
        onPageSizeChange={onPageSizeChange}
        onRequestPageChange={onRequestPageChange}
        totalSelectedCount={selectedRowKeys.length}
      />
      <div ref={containerRef} style={containerStyle}>
        {loading || getColumnStateInProgress || totalRowsLoading ? (
          <Spin />
        ) : (
          content
        )}
      </div>
    </Fragment>
  );
}

export const SearchTreePaginated = forwardRef(SearchTreePaginatedComp);
