import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Alert, Spin } from "antd";

import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import Tree from "@/widgets/views/Tree";
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
import { DEFAULT_SEARCH_LIMIT, useSearch } from "@/hooks/useSearch";

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

type Props = {
  action?: string;
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
    action,
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
  const internalLimit = useRef(80);

  const [currentModel, setCurrentModel] = useState<string>();
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();

  const [limitFromAction, setLimitFromAction] = useState<number>();
  const [limit, setLimit] = useState<number>(DEFAULT_SEARCH_LIMIT);

  const [initialError, setInitialError] = useState<string>();

  const actionDomain = useRef<any>([]);
  const [searchFilterHeight, setSearchFilterHeight] = useState<number>(200);

  const expandableClickActionData = useRef<any>();

  const { height } = useWindowDimensions();

  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  const actionViewContext = useContext(
    ActionViewContext
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
  } = (rootTree ? actionViewContext : {}) || {};

  const {
    submit,
    clear,
    fetchResults,
    tableRefreshing,
    searchFilterLoading,
    searchError,
    page,
    offset,
    getResults,
    requestPageChange,
    changeSort,
    fetchChildrenForRecord,
    colorsForResults,
    totalItems,
  } = useSearch({
    model: currentModel!,
    setSearchTreeNameSearch,
    setSelectedRowItems,
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
    limitFromAction,
    setLimit,
    limit,
  });

  useImperativeHandle(ref, () => ({
    refreshResults: () => {
      searchNameGetDoneRef.current = false;
      fetchResults();
    },
  }));

  useEffect(() => {
    if (!initialFetchDone) {
      return;
    }

    if (visible) {
      searchNameGetDoneRef.current = false;
      fetchResults();
    }
  }, [page, limit, offset, initialFetchDone, visible, nameSearch]);

  const fetchData = async (type: "action" | "model") => {
    setInitialFetchDone(false);
    setIsLoading(true);
    setInitialError(undefined);
    setTreeIsLoading?.(true);

    try {
      if (type === "action") {
        await fetchActionData();
      } else {
        await fetchModelData();
      }
      setInitialFetchDone(true);
    } catch (error) {
      setInitialError(error);
    } finally {
      setIsLoading(false);
      setTreeIsLoading?.(false);
    }
  };

  const fetchActionData = async () => {
    const dataForAction =
      await ConnectionProvider.getHandler().getViewsForAction({
        action: action!,
        context: parentContext,
      });
    actionDomain.current = dataForAction.domain;
    setFormView(dataForAction.views.get("form"));
    setTreeView(dataForAction.views.get("tree"));
    setCurrentModel(dataForAction.model);
    setLimitFromAction(dataForAction.limit);
    setLimit(dataForAction.limit);
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
    setLimitFromAction(undefined);
    setLimit(DEFAULT_SEARCH_LIMIT);
  };

  useEffect(() => {
    if (action) {
      fetchData("action");
    } else if (model) {
      fetchData("model");
    }
  }, [action, model]);

  const onSearchTreeLimitChange = (newLimit: number) => {
    internalLimit.current = newLimit;
  };

  const treeButOpen = async (record: any) => {
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
  };

  const onRowClickedHandler = async (record: any) => {
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
  };

  function changeSelectedRowKeys(selectedRowKeys: any[]) {
    const selectedRowItems = getResults().filter((entry: any) =>
      selectedRowKeys.includes(entry.id)
    );
    setSelectedRowItems?.(selectedRowItems);
    onChangeSelectedRowKeys?.(selectedRowKeys);
  }

  function calculateTableHeight() {
    if (treeView?.isExpandable) {
      return height - 160;
    }
    return height - (searchFilterHeight + 210);
  }

  const content = () => {
    if (!treeView || !formView) {
      return null;
    }

    return (
      <>
        <SearchFilter
          fields={{ ...treeView.fields, ...formView.fields }}
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
          total={totalItems}
          limit={limit}
          page={page}
          treeView={treeView}
          results={getResults()}
          onRequestPageChange={requestPageChange}
          loading={tableRefreshing}
          onRowClicked={onRowClickedHandler}
          scrollY={treeScrollY || calculateTableHeight()}
          colorsForResults={colorsForResults}
          rowSelection={{
            selectedRowKeys: selectedRowItems?.map((item) => item.id),
            onChange: changeSelectedRowKeys,
          }}
          sorter={sorter}
          onChangeSort={changeSort}
          onFetchChildrenForRecord={
            treeView.isExpandable ? fetchChildrenForRecord : undefined
          }
          childField={treeView.field_parent}
        />
      </>
    );
  };

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
