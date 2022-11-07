import TreeActionBar from "@/actionbar/TreeActionBar";
import { FormView, TreeView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import SearchTree from "@/widgets/views/SearchTree";
import React from "react";

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

  if (!visible) {
    return null;
  }

  return (
    <>
      <TitleHeader>
        <TreeActionBar
          toolbar={treeView?.toolbar}
          parentContext={context}
          treeExpandable={treeView?.isExpandable || false}
        />
      </TitleHeader>
      <SearchTree
        ref={searchTreeRef}
        rootTree={true}
        model={model}
        parentContext={context}
        nameSearch={searchTreeNameSearch}
        formView={formView}
        treeView={treeView}
        domain={domain}
        onRowClicked={(event: any) => {
          const { id } = event;
          setCurrentId(id);
          const itemIndex = results.findIndex((item: any) => {
            return item.id === id;
          });
          setCurrentItemIndex(itemIndex);
          const formView = availableViews.find(
            (v) => v.type === "form"
          ) as FormView;
          setCurrentView(formView);
        }}
      />
    </>
  );
};
