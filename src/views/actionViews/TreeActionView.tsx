import TreeActionBar from "@/actionbar/TreeActionBar";
import { FormView, TreeView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { SearchTreeInfinite } from "@/widgets/views/SearchTreeInfinite";
import SearchTree from "@/widgets/views/SearchTree";
import { extractTreeXmlAttribute } from "@/helpers/treeHelper";
import { SearchTreePaginated } from "@/widgets/views/Tree/Paginated/SearchTreePaginated";

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
  } = props;
  const previousVisibleRef = useRef(visible);

  const treeType: TreeType = useMemo(() => {
    if (!treeView?.arch || treeView.isExpandable) {
      return "legacy";
    }
    const tagValue = extractTreeXmlAttribute(treeView.arch, "infinite");
    if (!tagValue) {
      return "legacy";
    }
    if (tagValue === "1") {
      return "infinite";
    }
    if (tagValue === "0") {
      return "paginated";
    }
    return "legacy";
  }, [treeView]);

  const { currentView, setPreviousView, setTreeType, setSelectedRowItems } =
    useContext(ActionViewContext) as ActionViewContextType;

  useEffect(() => {
    setTreeType?.(treeType);
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
          treeExpandable={treeView?.isExpandable || false}
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
