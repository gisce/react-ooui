import TreeActionBar from "@/actionbar/TreeActionBar";
import { FormView, TreeView } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import SearchTree from "@/widgets/views/SearchTree";
import { useActionViewContext } from "@/context/ActionViewContext";
import { LoadedTab } from "@/types/tab";

export type TreeActionViewProps = {
  formView?: FormView;
  treeView?: TreeView;
};

export const TreeActionView = (props: TreeActionViewProps) => {
  const { formView, treeView } = props;

  const {
    currentView,
    searchTreeRef,
    tab,
    searchTreeNameSearch,
    setCurrentId,
    setCurrentItemIndex,
    treeResults,
    setPreviousView,
    setCurrentView,
  } = useActionViewContext();
  const { availableViews } = tab as LoadedTab;

  const visible =
    currentView!.type === treeView?.type &&
    currentView!.view_id === treeView.view_id;

  if (!visible || !tab) {
    return null;
  }

  const { model, domain, context } = tab;

  return (
    <>
      <TitleHeader title={treeView.title!}>
        <TreeActionBar
          toolbar={treeView?.toolbar}
          parentContext={context}
          treeExpandable={treeView?.isExpandable || false}
          onGetDomain={() => searchTreeRef?.current?.getDomain()}
          onRefreshResults={() => searchTreeRef?.current?.refreshResults()}
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
          if (!availableViews || !currentView) {
            return;
          }
          const { id } = event;
          setCurrentId(id);
          const itemIndex = treeResults.findIndex((item: any) => {
            return item.id === id;
          });
          setPreviousView?.(currentView);
          setCurrentItemIndex?.(itemIndex);
          const formView = availableViews.find(
            (v) => v.type === "form",
          ) as FormView;
          setCurrentView(formView);
        }}
      />
    </>
  );
};
