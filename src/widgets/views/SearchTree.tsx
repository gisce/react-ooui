import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
  useCallback,
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
import { getColorMap, getTree, sortResults } from "@/helpers/treeHelper";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Measure from "react-measure";
import { mergeSearchFields } from "@/helpers/formHelper";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import { parseContext } from "@gisce/ooui";

const DEFAULT_SEARCH_LIMIT = 80;

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

  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(DEFAULT_SEARCH_LIMIT);
  const [limitFromAction, setLimitFromAction] = useState<number>();

  const paramsRef = useRef<Array<any>>([]);

  const [totalItems, setTotalItems] = useState<number>(0);
  const [resultsInternal, setResultsInternal] = useState<any>([]);
  const [colorsForResults, setColorsForResults] = useState<any>(undefined);

  const [searchFilterLoading, setSearchFilterLoading] = useState<boolean>(
    false
  );
  const [searchError, setSearchError] = useState<string>();
  const [initialError, setInitialError] = useState<string>();

  const [tableRefreshing, setTableRefreshing] = useState<boolean>(false);

  const actionDomain = useRef<any>([]);
  const [searchFilterHeight, setSearchFilterHeight] = useState<number>(200);

  const originalResults = useRef<any[]>([]);

  const { height } = useWindowDimensions();

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
    setSearchParams = undefined,
    searchVisible = true,
    setSearchVisible = undefined,
    sorter = undefined,
    setSorter = undefined,
    setTotalItems: setActionViewTotalItems = undefined,
    setSearchTreeNameSearch = undefined,
    setTreeIsLoading = undefined,
  } = (rootTree ? actionViewContext : {}) || {};

  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  useImperativeHandle(ref, () => ({
    refreshResults: () => {
      searchNameGetDoneRef.current = false;
      fetchResults();
    },
  }));

  const onRequestPageChange = (page: number) => {
    setTableRefreshing(true);
    setPage(page);
    setOffset((page - 1) * limit!);
  };

  function setResults(results: any) {
    setResultsActionView?.([...results]);
    setResultsInternal([...results]);
  }

  const getResults = useCallback(() => {
    if (!resultsActionView) {
      return resultsInternal;
    }
    return resultsActionView;
  }, [resultsActionView, resultsInternal]);

  const searchByNameSearch = async () => {
    const searchResults = await ConnectionProvider.getHandler().nameSearch({
      model: currentModel!,
      payload: nameSearch,
      limit: internalLimit.current,
      attrs: actionDomain.current.length > 0 ? actionDomain.current : domain,
      context: parentContext,
    });

    setTotalItems(searchResults.length);
    setActionViewTotalItems?.(searchResults.length);

    if (searchResults.length > 0) {
      const resultsIds = searchResults.map((item: any) => {
        return item?.[0];
      });

      const { colors } = getTree(treeView!);

      const resultsWithData = await ConnectionProvider.getHandler().readEvalUiObjects(
        {
          model: currentModel!,
          ids: resultsIds,
          arch: treeView?.arch!,
          fields: treeView!.field_parent
            ? [...Object.keys(treeView!.fields), treeView!.field_parent]
            : treeView!.fields,
          context: parentContext,
          attrs: colors && {
            colors,
          },
        }
      );
      const resultsData = resultsWithData[0];

      originalResults.current = [...resultsData];

      setColorsForResults(getColorMap(resultsWithData[1]));

      const newResultIds = resultsData.map((item: any) => item.id);

      const resultsSorted =
        sorter !== undefined
          ? sortResults({
              resultsToSort: resultsData,
              sorter,
              fields: { ...treeView!.fields, ...formView!.fields },
            })
          : [...originalResults.current];

      setResults(resultsSorted);

      if (newResultIds.length > 0) {
        setCurrentItemIndex?.(0);
      } else {
        setCurrentItemIndex?.(undefined);
      }
    } else {
      setResults([]);
      setCurrentItemIndex?.(undefined);
    }

    searchNameGetDoneRef.current = true;
  };

  const getUniqueFieldsForParams = (params: any[]) => {
    const uniqueFields: any = {};

    params.forEach((param) => {
      if (Array.isArray(param) && param[0]) {
        uniqueFields[param[0]] = true;
      } else {
        uniqueFields[param] = true;
      }
    });

    return Object.keys(uniqueFields);
  };

  const mergeParams = (searchParams: any[], domainParams: any[]) => {
    const finalParams = searchParams;
    const uniqueParams = getUniqueFieldsForParams(searchParams);

    domainParams.forEach((element) => {
      if (Array.isArray(element) && element[0]) {
        if (!uniqueParams.includes(element[0])) {
          finalParams.push(element);
        }
      } else if (!uniqueParams.includes(element)) {
        finalParams.push(element);
      }
    });

    return finalParams;
  };

  const searchResults = async () => {
    const domainParams =
      actionDomain.current.length > 0 ? actionDomain.current : domain;

    const searchParams = mergeParams(paramsRef.current, domainParams);
    const { colors } = getTree(treeView!);

    const {
      totalItems,
      results,
      attrsEvaluated,
    } = await ConnectionProvider.getHandler().searchForTree({
      params: searchParams,
      limit,
      offset,
      model: currentModel!,
      fields: treeView!.field_parent
        ? [...Object.keys(treeView!.fields), treeView!.field_parent]
        : treeView!.fields,
      context: parentContext,
      attrs: colors && { colors },
    });
    setTotalItems(totalItems);
    setActionViewTotalItems?.(totalItems);
    setColorsForResults(getColorMap(attrsEvaluated));

    originalResults.current = [...results];

    const resultsSorted =
      sorter !== undefined
        ? sortResults({
            resultsToSort: results,
            sorter: sorter,
            fields: { ...treeView!.fields, ...formView!.fields },
          })
        : [...originalResults.current];

    setResults(resultsSorted);

    if (resultsActionView && resultsSorted.length > 0) {
      const newCurrentItemIndex = resultsSorted.findIndex(
        (item) => currentId === item.id
      );

      if (newCurrentItemIndex === -1) {
        setCurrentItemIndex?.(0);
      } else {
        setCurrentItemIndex?.(newCurrentItemIndex);
      }
    } else {
      setCurrentItemIndex?.(undefined);
    }
  };

  const fetchResults = async () => {
    try {
      setTableRefreshing(true);
      setTreeIsLoading?.(true);
      if (nameSearch && !searchNameGetDoneRef.current) {
        await searchByNameSearch();
      } else {
        await searchResults();
      }
    } catch (error) {
      setSearchError(error);
    } finally {
      setTableRefreshing(false);
      setSearchFilterLoading(false);
      setTreeIsLoading?.(false);
    }
  };

  async function onFetchChildrenForRecord(record: any) {
    const child_id = record[treeView?.field_parent || "child_id"];

    return await ConnectionProvider.getHandler().readObjects({
      model: currentModel!,
      ids: child_id,
      fields: treeView!.field_parent
        ? [...Object.keys(treeView!.fields), treeView!.field_parent]
        : treeView!.fields,
      context: parentContext,
    });
  }

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
    const dataForAction = await ConnectionProvider.getHandler().getViewsForAction(
      {
        action: action!,
        context: parentContext,
      }
    );
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

  const onClear = () => {
    if (tableRefreshing) return;
    setSearchTreeNameSearch?.(undefined);
    paramsRef.current = [];
    setSearchParams?.([]);
    setSearchError(undefined);
    setOffset(0);
    setPage(1);
    setLimit(limitFromAction || DEFAULT_SEARCH_LIMIT);
  };

  const onSubmit = ({
    params: newParams,
    limit: newLimit,
    offset: newOffset,
  }: {
    params: any;
    limit: number;
    offset: number;
  }) => {
    if (tableRefreshing) return;
    paramsRef.current = newParams;
    setSearchTreeNameSearch?.(undefined);
    setSelectedRowItems?.([]);
    setSearchParams?.(newParams);
    setSearchVisible?.(false);
    setSearchFilterLoading(true);
    setSearchError(undefined);
    setPage(1);
    if (newLimit) setLimit(newLimit);
    if (newOffset) setOffset(newOffset);
    fetchResults();
  };

  const onSearchTreeLimitChange = (newLimit: number) => {
    internalLimit.current = newLimit;
  };

  const onRowClickedHandler = async (record: any) => {
    const { id } = record;

    if (treeView?.isExpandable) {
      // TODO: store treebutdataaction in a useRef and only call if we don't have it.
      const treeButData = await ConnectionProvider.getHandler().treeButOpen({
        id: treeView.view_id,
        model: currentModel!,
        context: parentContext,
      });
      const actionData: any = treeButData[0][2];

      await processAction?.({
        actionData,
        fields: treeView.fields,
        values: {
          active_id: id,
          ...record,
        },
        context: parentContext,
      });
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
    return height - (searchFilterHeight + 210);
  }

  const content = () => {
    if (!treeView || !formView) {
      return null;
    }

    return (
      <>
        <Measure
          bounds
          onResize={(contentRect) => {
            setSearchFilterHeight(contentRect.bounds?.height!);
          }}
        >
          {({ measureRef }) => (
            <div ref={measureRef}>
              <div style={{ display: searchVisible ? "block" : "none" }}>
                <SearchFilter
                  fields={{ ...treeView.fields, ...formView.fields }}
                  searchFields={mergeSearchFields([
                    formView.search_fields,
                    treeView.search_fields,
                  ])}
                  onClear={onClear}
                  limit={limit}
                  offset={offset}
                  isSearching={searchFilterLoading}
                  onSubmit={onSubmit}
                  onLimitChange={onSearchTreeLimitChange}
                />
                {searchError && (
                  <Alert
                    className="mt-10"
                    message={searchError}
                    type="error"
                    banner
                  />
                )}
                <div className="pb-5" />
              </div>
            </div>
          )}
        </Measure>
        <Tree
          total={totalItems}
          limit={limit}
          page={page}
          treeView={treeView}
          results={getResults()}
          onRequestPageChange={onRequestPageChange}
          loading={tableRefreshing}
          onRowClicked={onRowClickedHandler}
          scrollY={treeScrollY || calculateTableHeight()}
          colorsForResults={colorsForResults}
          rowSelection={{
            selectedRowKeys: selectedRowItems?.map((item) => item.id),
            onChange: changeSelectedRowKeys,
          }}
          sorter={sorter}
          onChangeSort={(newSorter) => {
            setSorter?.(newSorter);
            const sortedResults =
              newSorter !== undefined
                ? sortResults({
                    resultsToSort: getResults(),
                    sorter: newSorter,
                    fields: { ...treeView.fields, ...formView.fields },
                  })
                : [...originalResults.current];
            setResults(sortedResults);
          }}
          onFetchChildrenForRecord={
            treeView.isExpandable ? onFetchChildrenForRecord : undefined
          }
          childField={treeView.field_parent}
        />
      </>
    );
  };

  if (initialError) {
    return (
      <Alert className="mt-10" message={initialError} type="error" banner />
    );
  }

  return (
    <div style={!visible ? { display: "none" } : {}}>
      {isLoading ? <Spin /> : content()}
    </div>
  );
}

export default forwardRef(SearchTree);
