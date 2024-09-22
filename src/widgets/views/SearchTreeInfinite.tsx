import {
  Fragment,
  RefObject,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { FormView, TreeView } from "@/types/index";

import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { Badge, Spin } from "antd";
import {
  getOrderFromSortFields,
  getTableColumns,
  getTableItems,
  getTree,
} from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "./Tree/treeComponents";
import { useDeepCompareMemo } from "use-deep-compare";
import {
  InfiniteTable,
  InfiniteTableRef,
  SortDirection,
} from "@gisce/react-formiga-table";
import ConnectionProvider from "@/ConnectionProvider";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { showErrorDialog } from "@/ui/GenericErrorDialog";
import { useActionViewContext } from "@/context/ActionViewContext";
import { FloatingDrawer } from "@/ui/FloatingDrawer";
import { mergeSearchFields } from "@/helpers/formHelper";
import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import { useTreeColumnStorageFetch } from "../base/one2many/useTreeColumnStorageFetch";
import { getKey } from "@/helpers/tree-columnStorageHelper";
import { useTreeAggregates } from "../base/one2many/useTreeAggregates";
import { AggregatesFooter } from "../base/one2many/AggregatesFooter";
import { SearchTreeHeader } from "./SearchTreeHeader";
import { useLocale } from "@gisce/react-formiga-components";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { SideSearchFilter } from "./searchFilter/SideSearchFilter";

export const HEIGHT_OFFSET = 10;
export const MAX_ROWS_TO_SELECT = 200;

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

type SearchTreeInfiniteProps = {
  model: string;
  formView?: FormView;
  treeView?: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
  // nameSearch?: string; // TODO: pending to implement when we have resolved https://github.com/gisce/webclient/issues/171
  treeScrollY?: number;
  domain?: any;
  visible?: boolean;
  rootTree?: boolean;
  parentContext?: any;
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
};

function SearchTreeInfiniteComp(props: SearchTreeInfiniteProps, ref: any) {
  const {
    model,
    formView: formViewProps,
    treeView: treeViewProps,
    onRowClicked,
    domain = [],
    visible = true,
    rootTree = false,
    parentContext = {},
    onChangeSelectedRowKeys,
  } = props;
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();
  const tableRef: RefObject<InfiniteTableRef> = useRef(null);
  const [isSearching, setIsSearching] = useState(false);

  const [totalRows, setTotalRows] = useState<number>();

  const { t } = useLocale();

  useImperativeHandle(ref, () => ({
    refreshResults: () => {
      tableRef?.current?.refresh();
    },
    getFields: () => treeView?.fields,
    getDomain: () => domain,
  }));

  const containerRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  const {
    setTreeIsLoading,
    searchVisible = false,
    setSearchVisible,
    setSelectedRowItems,
    setTreeFirstVisibleRow,
    treeFirstVisibleRow,
    selectedRowItems,
  } = useActionViewContext(rootTree);

  const treeOoui = useMemo(() => {
    if (!treeView) {
      return;
    }
    return getTree(treeView);
  }, [treeView]);

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
    return getKey({
      treeViewId: treeView?.view_id,
      model,
    });
  }, [model, treeView?.view_id]);

  const {
    loading: getColumnStateInProgress,
    getColumnState,
    updateColumnState,
  } = useTreeColumnStorageFetch(columnStateKey);

  const fetchResults = useCallback(
    async ({
      startRow,
      endRow,
      sortFields,
    }: {
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      setTreeIsLoading?.(true);
      if (!treeOoui) {
        return [];
      }

      const attrs: any = {};
      if (treeOoui.colors) {
        attrs.colors = treeOoui.colors;
      }
      if (treeOoui.status) {
        attrs.status = treeOoui.status;
      }

      const {
        totalItems: totalItemsPromise,
        results,
        attrsEvaluated,
      } = await ConnectionProvider.getHandler().searchForTree({
        params: domain,
        limit: endRow - startRow,
        offset: startRow,
        model,
        fields: treeView!.field_parent
          ? { ...treeView!.fields, [treeView!.field_parent]: {} }
          : treeView!.fields,
        context: parentContext,
        attrs,
        order: getOrderFromSortFields(sortFields),
      });

      // TODO: maybe we could improve this somehow
      Promise.resolve().then(async () => {
        totalItemsPromise.then((totalItems) => {
          setTotalRows(totalItems);
        });
      });

      const preparedResults = getTableItems(treeOoui, results);

      colorsForResults.current = {
        ...colorsForResults.current,
        ...attrsEvaluated.colors,
      };

      if (!statusForResults.current && treeOoui.status) {
        statusForResults.current = {};
      }
      if (treeOoui.status) {
        statusForResults.current = {
          ...statusForResults.current,
          ...attrsEvaluated.colors,
        };
      }
      setTreeIsLoading?.(false);
      return preparedResults;
    },
    [domain, model, parentContext, setTreeIsLoading, treeOoui, treeView],
  );

  const changeSelectedRowKeys = useCallback(
    (newSelectedRowKeys: any[]) => {
      setSelectedRowItems?.(newSelectedRowKeys.map((id: number) => ({ id })));
      onChangeSelectedRowKeys?.(newSelectedRowKeys);
    },
    [onChangeSelectedRowKeys, setSelectedRowItems],
  );

  const onRequestData = useCallback(
    async ({
      startRow,
      endRow,
      sortFields,
    }: {
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      try {
        setIsSearching(true);
        return await fetchResults({
          startRow,
          endRow,
          sortFields,
        });
      } catch (error) {
        console.error(error);
        showErrorDialog(error);
      } finally {
        setIsSearching(false);
      }
    },
    [fetchResults],
  );

  const onRowStyle = useCallback((record: any) => {
    if (colorsForResults.current[record.node?.data?.id]) {
      return { color: colorsForResults.current[record.node?.data?.id] };
    }
    return undefined;
  }, []);

  const aggregates = useTreeAggregates({
    ooui: treeOoui,
    model,
  });

  const onSelectionCheckboxClicked = useCallback(async () => {
    let mustSelectAll = false;
    if (selectedRowItems?.length === 0) {
      mustSelectAll = true;
    } else {
      mustSelectAll = false;
    }

    const selectAllPromise = async () => {
      const allRowsResults = await ConnectionProvider.getHandler().search({
        params: domain,
        limit: 0,
        offset: 0,
        model,
        fields: treeView!.field_parent
          ? { ...treeView!.fields, [treeView!.field_parent]: {} }
          : treeView!.fields,
        context: parentContext,
        fieldsToRetrieve: ["id"],
      });
      setSelectedRowItems?.(allRowsResults);
    };

    if (mustSelectAll) {
      if (totalRows && totalRows > MAX_ROWS_TO_SELECT) {
        showConfirmDialog({
          confirmMessage: t("confirmSelectAllRegisters").replace(
            "{totalRecords}",
            totalRows.toString(),
          ),
          t,
          onOk: selectAllPromise,
        });
      } else {
        selectAllPromise();
      }
    } else {
      setSelectedRowItems?.([]);
    }
  }, [
    domain,
    model,
    parentContext,
    selectedRowItems?.length,
    setSelectedRowItems,
    t,
    totalRows,
    treeView,
  ]);

  const selectedRowKeys = useMemo(() => {
    return selectedRowItems?.map((item) => item.id) || [];
  }, [selectedRowItems]);

  console.log({ selectedRowKeys });

  const content = useMemo(() => {
    if (!columns || !treeOoui) {
      return null;
    }

    return (
      <InfiniteTable
        readonly={false}
        ref={tableRef}
        height={availableHeight}
        columns={columns}
        onRequestData={onRequestData}
        onRowDoubleClick={onRowClicked}
        onRowStyle={onRowStyle}
        onRowSelectionChange={changeSelectedRowKeys}
        onColumnChanged={updateColumnState}
        onGetColumnsState={getColumnState}
        onChangeFirstVisibleRowIndex={setTreeFirstVisibleRow}
        onGetFirstVisibleRowIndex={() => treeFirstVisibleRow}
        selectedRowKeys={selectedRowKeys}
        onSelectionCheckboxClicked={onSelectionCheckboxClicked}
        totalRows={totalRows || 99999}
        footer={aggregates && <AggregatesFooter aggregates={aggregates} />}
        hasStatusColumn={treeOoui.status !== null}
        statusComponent={(status: any) => <Badge color={status} />}
        onRowStatus={(record: any) => statusForResults.current?.[record.id]}
      />
    );
  }, [
    aggregates,
    availableHeight,
    changeSelectedRowKeys,
    columns,
    getColumnState,
    onRequestData,
    onRowClicked,
    onRowStyle,
    onSelectionCheckboxClicked,
    selectedRowKeys,
    setTreeFirstVisibleRow,
    totalRows,
    treeFirstVisibleRow,
    treeOoui,
    updateColumnState,
  ]);

  return (
    <Fragment>
      <SearchTreeHeader
        selectedRowKeys={selectedRowKeys}
        allRowSelectedMode={false}
        totalRows={totalRows}
      />
      <div
        ref={containerRef}
        style={{
          overflow: "hidden",
          height: `${availableHeight}px`,
          ...(visible ? {} : { display: "none" }),
        }}
      >
        {loading || getColumnStateInProgress ? (
          <Spin />
        ) : (
          <Fragment>
            {content}
            <SideSearchFilter
              isOpen={searchVisible}
              onClose={() => setSearchVisible?.(false)}
              fields={{ ...formView?.fields, ...treeView?.fields }}
              searchFields={mergeSearchFields([
                formView?.search_fields,
                treeView?.search_fields,
              ])}
              onClear={() => {}}
              isSearching={isSearching}
              onSubmit={() => {}}
              searchError={undefined}
              searchValues={{}}
            />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}

export const SearchTreeInfinite = forwardRef(SearchTreeInfiniteComp);
