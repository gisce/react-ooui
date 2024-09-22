import {
  useEffect,
  useState,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useCallback,
} from "react";
import { Alert, Spin } from "antd";

import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import { Tree } from "@/widgets/views/Tree";
import { FormView, TreeView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";

import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { mergeSearchFields } from "@/helpers/formHelper";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { useSearch } from "@/hooks/useSearch";
import { TableRef } from "@gisce/react-formiga-table";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

type Props = {
  model?: string;
  formView?: FormView;
  treeView?: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
  nameSearch?: string;
  treeScrollY?: number;
  domain?: any;
  visible?: boolean;
  rootTree?: boolean;
  parentContext?: any;
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
};

function SearchTree(props: Props, ref: any) {
  const {
    model,
    formView: formViewProps,
    treeView: treeViewProps,
    onRowClicked,
    nameSearch,
    treeScrollY,
    domain = [],
    visible = true,
    rootTree = false,
    parentContext = {},
    onChangeSelectedRowKeys,
  } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [initialFetchDone, setInitialFetchDone] = useState<boolean>(false);

  const searchNameGetDoneRef = useRef(false);
  const tableRef = useRef<TableRef>(null);

  const [currentModel, setCurrentModel] = useState<string>();
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();

  const [initialError, setInitialError] = useState<string>();

  const [searchFilterHeight, setSearchFilterHeight] = useState<number>(200);

  const expandableClickActionData = useRef<any>();

  const { height } = useWindowDimensions();

  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  const {
    setResults: setResultsActionView = undefined,
    setCurrentItemIndex = undefined,
    currentId = undefined,
    results: resultsActionView = undefined,
    selectedRowItems = undefined,
    setSelectedRowItems = undefined,
    searchParams = [],
    setSearchParams = undefined,
    searchVisible = true,
    setSearchVisible = undefined,
    sorter = undefined,
    setSorter = undefined,
    setTotalItems: setActionViewTotalItems = undefined,
    setSearchTreeNameSearch = undefined,
    setTreeIsLoading = undefined,
    searchValues = {},
    setSearchValues = undefined,
    limit = DEFAULT_SEARCH_LIMIT,
    setLimit = undefined,
  } = (rootTree ? actionViewContext : {}) || {};

  const changeSelectedRowKeys = useCallback(
    (newSelectedRowKeys: any[]) => {
      setSelectedRowItems?.(newSelectedRowKeys.map((id: number) => ({ id })));
      onChangeSelectedRowKeys?.(newSelectedRowKeys);
    },
    [onChangeSelectedRowKeys, setSelectedRowItems],
  );

  const {
    submit,
    clear,
    fetchResults,
    tableRefreshing,
    searchFilterLoading,
    searchError,
    page,
    limit: limitUsedInSearch,
    offset,
    getResults,
    requestPageChange,
    changeSort,
    fetchChildrenForRecord,
    colorsForResults,
    statusForResults,
    totalItems,
    getAllIds,
  } = useSearch({
    model: currentModel!,
    setSearchTreeNameSearch,
    setSelectedRowItems: changeSelectedRowKeys,
    setSearchParams,
    setSearchValues,
    searchParams,
    setSearchVisible,
    setTreeIsLoading,
    nameSearch,
    searchNameGetDoneRef,
    context: parentContext,
    formView: formView!,
    treeView: treeView!,
    sorter,
    setSorter,
    setCurrentItemIndex,
    setResultsActionView,
    resultsActionView,
    domain,
    currentId,
    setActionViewTotalItems,
    limit,
    setLimit,
    clearSelection: tableRef.current?.unselectAll,
  });

  useImperativeHandle(ref, () => ({
    refreshResults: () => {
      searchNameGetDoneRef.current = false;
      fetchResults();
    },
    getFields: () => treeView?.fields,
    getDomain: () => domain,
  }));

  useEffect(() => {
    if (!initialFetchDone) {
      return;
    }

    if (visible && treeView) {
      searchNameGetDoneRef.current = false;
      fetchResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, offset, initialFetchDone, visible, nameSearch, treeView]);

  const fetchData = async () => {
    setInitialFetchDone(false);
    setIsLoading(true);
    setInitialError(undefined);
    setTreeIsLoading?.(true);

    try {
      await fetchModelData();
      setInitialFetchDone(true);
    } catch (error) {
      setInitialError(error);
      setTreeIsLoading?.(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchModelData = async () => {
    setCurrentModel(model);

    let _formView = formViewProps;

    if (!formViewProps) {
      _formView = (await ConnectionProvider.getHandler().getView({
        model: model!,
        type: "form",
        context: parentContext,
      })) as FormView;
    }

    let _treeView = treeViewProps;

    if (!treeViewProps) {
      _treeView = (await ConnectionProvider.getHandler().getView({
        model: model!,
        type: "tree",
        context: parentContext,
      })) as TreeView;
    }

    setFormView(_formView as FormView);
    setTreeView(_treeView as TreeView);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  const onSearchTreeLimitChange = useCallback(
    (newLimit: number) => {
      setLimit?.(newLimit);
    },
    [setLimit],
  );

  const treeButOpen = useCallback(
    async (record: any) => {
      const { id } = record;

      if (!expandableClickActionData.current) {
        expandableClickActionData.current =
          await ConnectionProvider.getHandler().treeButOpen({
            id: treeView!.view_id,
            model: currentModel!,
            context: parentContext,
          });
      }

      const actionData: any = expandableClickActionData.current[0][2];

      await processAction?.({
        actionData,
        fields: treeView!.fields,
        values: {
          active_id: id,
          ...record,
        },
        context: parentContext,
      });
    },
    [currentModel, parentContext, processAction, treeView],
  );

  const onRowClickedHandler = useCallback(
    async (record: any) => {
      const { id } = record;

      if (treeView?.isExpandable) {
        try {
          await treeButOpen(record);
        } catch (err) {
          showErrorDialog(err);
        }
        return;
      }

      onRowClicked({
        id,
        model: currentModel!,
        formView: formView!,
        treeView: treeView!,
      });
    },
    [currentModel, formView, onRowClicked, treeButOpen, treeView],
  );

  const selectAllRecords = useCallback(async () => {
    const allIds = await getAllIds();
    setSelectedRowItems?.(allIds.map((id: number) => ({ id })));
    onChangeSelectedRowKeys?.(allIds);
  }, [getAllIds, onChangeSelectedRowKeys, setSelectedRowItems]);

  const calculatedTableHeight = useMemo(() => {
    if (treeView?.isExpandable) {
      return height - 160;
    }
    return height - (searchFilterHeight + 240);
  }, [height, searchFilterHeight, treeView?.isExpandable]);

  const selectedRowKeys = useMemo(
    () => selectedRowItems?.map((item) => item.id),
    [selectedRowItems],
  );

  const content = useCallback(() => {
    if (!treeView || !formView) {
      return null;
    }

    return (
      <>
        <SearchFilter
          fields={{ ...formView.fields, ...treeView.fields }}
          searchFields={mergeSearchFields([
            formView.search_fields,
            treeView.search_fields,
          ])}
          onClear={clear}
          limit={limit}
          offset={offset}
          isSearching={searchFilterLoading}
          onSubmit={submit}
          onLimitChange={onSearchTreeLimitChange}
          setSearchFilterHeight={setSearchFilterHeight}
          searchError={searchError}
          searchVisible={searchVisible}
          searchValues={searchValues}
        />
        <Tree
          ref={tableRef}
          context={parentContext}
          total={totalItems}
          limit={limitUsedInSearch}
          page={page}
          treeView={treeView}
          results={getResults()}
          onRequestPageChange={requestPageChange}
          loading={tableRefreshing}
          onRowClicked={onRowClickedHandler}
          scrollY={treeScrollY || calculatedTableHeight}
          colorsForResults={colorsForResults}
          statusForResults={statusForResults}
          selectedRowKeys={selectedRowKeys}
          onRowSelectionChange={changeSelectedRowKeys}
          sorter={sorter}
          onChangeSort={changeSort}
          onFetchChildrenForRecord={
            treeView.isExpandable ? fetchChildrenForRecord : undefined
          }
          childField={treeView.field_parent}
          rootTree={rootTree}
          onSelectAllRecords={selectAllRecords}
        />
      </>
    );
  }, [
    calculatedTableHeight,
    changeSelectedRowKeys,
    changeSort,
    clear,
    colorsForResults,
    fetchChildrenForRecord,
    formView,
    getResults,
    limit,
    limitUsedInSearch,
    offset,
    onRowClickedHandler,
    onSearchTreeLimitChange,
    page,
    parentContext,
    requestPageChange,
    rootTree,
    searchError,
    earchFilterLoading,
    searchValues,
    searchVisible,
    selectAllRecords,
    selectedRowKeys,
    sorter,
    statusForResults,
    submit,
    tableRefreshing,
    totalItems,
    treeScrollY,
    treeView,
  ]);

  const error = initialError || searchError;

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  return (
    <div style={!visible ? { display: "none" } : {}}>
      {isLoading ? <Spin /> : content()}
    </div>
  );
}

export default forwardRef(SearchTree);
