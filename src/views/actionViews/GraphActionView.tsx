import GraphActionBar from "@/actionbar/GraphActionBar";
import TitleHeader from "@/ui/TitleHeader";
import { Graph } from "@/widgets/views/Graph/Graph";
import React, { useContext, useRef } from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { FormView, TreeView } from "@/types";
import { mergeSearchFields } from "@/helpers/formHelper";
import { useSearch } from "@/hooks/useSearch";
import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import { Spin } from "antd";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

export type GraphActionViewProps = {
  viewData: any;
  visible: boolean;
  model: string;
  context: any;
  domain: any;
  formView: FormView;
  treeView: TreeView;
};

export const GraphActionView = (props: GraphActionViewProps) => {
  const { viewData, visible, model, context, domain, formView, treeView } =
    props;
  const graphRef = useRef();

  const actionViewContext = useContext(
    ActionViewContext
  ) as ActionViewContextType;
  const {
    setResults: setResultsActionView = undefined,
    setCurrentItemIndex = undefined,
    currentId = undefined,
    results: resultsActionView = undefined,
    setSelectedRowItems = undefined,
    setSearchParams = undefined,
    searchVisible = true,
    setSearchVisible = undefined,
    sorter = undefined,
    setSorter = undefined,
    setTotalItems: setActionViewTotalItems = undefined,
    setSearchTreeNameSearch = undefined,
    setTreeIsLoading = undefined,
    limit,
    setLimit,
  } = actionViewContext || {};

  const { searchParams, searchValues, setSearchValues } = useContext(
    ActionViewContext
  ) as ActionViewContextType;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const {
    submit,
    clear,
    searchFilterLoading,
    searchError,
    offset,
    tableRefreshing,
  } = useSearch({
    model,
    setSearchTreeNameSearch,
    setSelectedRowItems,
    searchParams,
    setSearchValues,
    setSearchParams,
    setSearchVisible,
    setTreeIsLoading,
    context,
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
  });

  if (!visible) {
    return null;
  }

  if (!viewData) {
    return null;
  }

  return (
    <>
      <TitleHeader title={viewData.name}>
        <GraphActionBar
          refreshGraph={() => {
            (graphRef.current as any).refresh();
          }}
        />
      </TitleHeader>
      <SearchFilter
        fields={{ ...treeView.fields, ...formView.fields }}
        searchFields={mergeSearchFields([
          formView.search_fields,
          treeView.search_fields,
        ])}
        limit={limit!}
        onClear={clear}
        offset={offset}
        isSearching={searchFilterLoading}
        onSubmit={submit}
        searchError={searchError}
        searchVisible={searchVisible}
        searchValues={searchValues}
      />
      {tableRefreshing ? (
        <Spin />
      ) : (
        <>
          <p style={{ textAlign: "right" }}>
            {`${t("totalRegisters")} ${resultsActionView?.length}`}
          </p>
          <Graph
            ref={graphRef}
            view_id={viewData.view_id}
            model={model}
            context={context}
            domain={searchParams || domain}
            limit={limit}
          />
        </>
      )}
    </>
  );
};
