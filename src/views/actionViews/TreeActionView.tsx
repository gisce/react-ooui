import TreeActionBar from "@/actionbar/TreeActionBar";
import { FormView, TreeView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import { Fragment, useCallback, useContext, useEffect, useMemo } from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { SearchTreeInfinite } from "@/widgets/views/SearchTreeInfinite";
import SearchTree from "@/widgets/views/SearchTree";
import { extractTreeXmlAttribute } from "@/helpers/treeHelper";

export type TreeActionViewProps = {
  formView?: FormView;
  treeView?: TreeView;
  visible: boolean;
  searchTreeRef: any;
  model: string;
  domain: any;
  context: any;
  results: any[];
  setCurrentItemIndex: (value?: number) => void;
  setCurrentId: (id?: number) => void;
  setCurrentView: (view: View) => void;
  availableViews: View[];
  searchTreeNameSearch?: string;
  limit?: number;
};

export const TreeActionView = (props: TreeActionViewProps) => {
  const {
    visible,
    searchTreeRef,
    model,
    context,
    formView,
    treeView,
    domain,
    setCurrentItemIndex,
    results,
    setCurrentId,
    setCurrentView,
    availableViews,
    searchTreeNameSearch,
  } = props;

  const isInfiniteTree = useMemo(() => {
    if (!treeView?.arch) {
      return false;
    }
    const tagValue = extractTreeXmlAttribute(treeView?.arch, "infinite");
    return tagValue === "1";
  }, [treeView]);

  useEffect(() => {
    setIsInfiniteTree?.(isInfiniteTree);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInfiniteTree]);

  const { currentView, setPreviousView, setIsInfiniteTree } = useContext(
    ActionViewContext,
  ) as ActionViewContextType;

  const onRowClicked = useCallback(
    (event: any) => {
      const { id } = event;
      setCurrentId(id);
      const itemIndex = results.findIndex((item: any) => {
        return item.id === id;
      });
      setPreviousView?.(currentView);
      setCurrentItemIndex(itemIndex);
      const formView = availableViews.find(
        (v) => v.type === "form",
      ) as FormView;
      setCurrentView(formView);
    },
    [
      availableViews,
      currentView,
      results,
      setCurrentId,
      setCurrentItemIndex,
      setCurrentView,
      setPreviousView,
    ],
  );

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <TitleHeader showSummary={!isInfiniteTree}>
        <TreeActionBar
          toolbar={treeView?.toolbar}
          parentContext={context}
          treeExpandable={treeView?.isExpandable || false}
        />
      </TitleHeader>
      {isInfiniteTree && (
        <SearchTreeInfinite
          ref={searchTreeRef}
          rootTree={true}
          model={model}
          parentContext={context}
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={onRowClicked}
        />
      )}
      {!isInfiniteTree && (
        <SearchTree
          ref={searchTreeRef}
          rootTree={true}
          model={model}
          parentContext={context}
          nameSearch={searchTreeNameSearch}
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={onRowClicked}
        />
      )}
    </Fragment>
  );
};
