import TreeActionBar from "@/actionbar/TreeActionBar";
import { FormView, TreeView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  ActionViewContext,
  ActionViewContextType,
  useActionViewContext,
} from "@/context/ActionViewContext";
import { SearchTreeInfinite } from "@/widgets/views/SearchTreeInfinite";
import SearchTree from "@/widgets/views/SearchTree";
import { SearchTreePaginated } from "@/widgets/views/Tree/Paginated/SearchTreePaginated";
import { useDeepCompareEffect } from "use-deep-compare";
import { useConfigContext } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { determineTreeType, isTreeExpandable } from "@/helpers/treeHelper";

export type TreeActionViewProps = {
  formView: FormView;
  treeView: TreeView;
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

export type TreeType = "infinite" | "paginated" | "legacy";
export const DEFAULT_TREE_TYPE: TreeType = "legacy";

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
    limit,
  } = props;
  const previousVisibleRef = useRef(visible);

  const [treeType, setTreeType] = useState<TreeType>(DEFAULT_TREE_TYPE);
  const { treeMaxLimit } = useConfigContext();

  const { setLimit } = useActionViewContext();

  useDeepCompareEffect(() => {
    const newTreeType = determineTreeType({
      treeView,
      limit,
      treeMaxLimit,
    });

    setTreeType(newTreeType);
  }, [treeView, limit, treeMaxLimit]);

  const {
    currentView,
    setPreviousView,
    setTreeType: setContextTreeType,
    setSelectedRowItems,
  } = useContext(ActionViewContext) as ActionViewContextType;

  useEffect(() => {
    setContextTreeType?.(treeType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeType]);

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

  useEffect(() => {
    if (previousVisibleRef.current && !visible && treeType === "infinite") {
      setSelectedRowItems?.([]);
    }
    previousVisibleRef.current = visible;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, treeType]);

  const handleTreeTypeChange = useCallback(
    (newType: TreeType) => {
      setTreeType(newType);
      if (newType === "paginated") {
        setLimit?.(limit || DEFAULT_SEARCH_LIMIT);
      }
      if (newType === "infinite") {
        setLimit?.(0);
      }
    },
    [limit, setLimit],
  );

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <TitleHeader showSummary={treeType !== "infinite"}>
        <TreeActionBar
          domain={domain}
          toolbar={treeView?.toolbar}
          parentContext={context}
          treeExpandable={isTreeExpandable(treeView)}
        />
      </TitleHeader>
      {treeType === "infinite" && (
        <SearchTreeInfinite
          ref={searchTreeRef}
          rootTree={true}
          model={model}
          parentContext={context}
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={onRowClicked}
          onChangeTreeType={handleTreeTypeChange}
        />
      )}
      {treeType === "paginated" && (
        <SearchTreePaginated
          ref={searchTreeRef}
          rootTree={true}
          model={model}
          parentContext={context}
          nameSearch={searchTreeNameSearch}
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={onRowClicked}
          onChangeTreeType={handleTreeTypeChange}
        />
      )}
      {treeType === "legacy" && (
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
