import { useEffect, useState, useRef, forwardRef, useContext } from "react";

import {
  DashboardView,
  FormView,
  GraphView,
  InitialViewData,
  TreeView,
  View,
} from "@/types/index";

import ActionViewProvider from "@/context/ActionViewContext";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { GraphActionView } from "@/views/actionViews/GraphActionView";
import { FormActionView } from "./actionViews/FormActionView";
import { TreeActionView } from "./actionViews/TreeActionView";
import { DashboardActionView } from "./actionViews/DashboardActionView";
import { useNavigation } from "@/context/RootContext";
import { determineFirstView } from "@/helpers/viewHelper";

type Props = {
  domain: any;
  context: any;
  model: string;
  availableViews: View[];
  title: string;
  tabKey: string;
  initialView: InitialViewData;
  formDefaultValues?: any;
  formForcedValues?: any;
  res_id?: number | boolean;
  action_id: number;
  action_type: string;
  limit?: number;
};

function ActionView(props: Props, ref: any) {
  const {
    domain,
    model,
    context,
    title,
    tabKey,
    initialView,
    formDefaultValues,
    formForcedValues = {},
    res_id = false,
    action_id,
    action_type,
    limit,
    availableViews,
  } = props;
  const [currentView, setCurrentViewInternal] = useState<View>();

  const res_id_parsed: number | undefined = res_id
    ? (res_id as number)
    : undefined;

  const [currentId, setCurrentIdInternal] = useState<number | undefined>(
    res_id_parsed,
  );
  const [selectedRowItems, setSelectedRowItems] = useState<any[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>();
  const [results, setResults] = useState<any>([]);
  const [sorter, setSorter] = useState<any>();
  const [totalItems, setTotalItems] = useState<number>(0);
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<string>();

  const formRef = useRef();
  const searchTreeRef = useRef();

  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const {
    setCurrentView: setCurrentViewTabContext,
    setCurrentId: setCurrentIdTabContext,
  } = tabManagerContext || {};

  const { tabs, activeTabKey, onRemoveTab } = useNavigation();

  function setCurrentId(id?: number) {
    setCurrentIdInternal(id);
    setCurrentIdTabContext?.(id);
  }

  function setCurrentView(view?: View) {
    setCurrentViewInternal(view);
    const extra = { action_id, action_type };
    setCurrentViewTabContext?.({ ...view, extra } as any);
  }

  const fetchData = async () => {
    const firstView = determineFirstView({
      availableViews,
      initialView,
    });

    if (!firstView) {
      showErrorDialog(
        `Error determining the first view to show for model ${model}.\nPlease, make sure the view ids on the fields_view_get responses are the same as the ones defined in the action`,
      );
      onRemoveTab?.(tabKey);
    }

    setCurrentView(firstView);
  };

  useEffect(() => {
    if (!res_id) {
      setCurrentId(undefined);
      setCurrentItemIndex(undefined);
    } else {
      setCurrentIdTabContext?.(res_id_parsed);
    }
    fetchData();
  }, [model, availableViews, res_id]);

  useEffect(() => {
    if (activeTabKey === tabKey) {
      setCurrentIdTabContext?.(currentId);
      const extra = { action_id, action_type };
      setCurrentViewTabContext?.({ ...currentView, extra } as any);
    }
  }, [tabs, activeTabKey]);

  function content() {
    // eslint-disable-next-line array-callback-return
    return availableViews.map((view) => {
      switch (view.type) {
        case "form": {
          return (
            <FormActionView
              key={`${view.type}-${view.view_id}`}
              formRef={formRef}
              currentId={currentId}
              visible={
                currentView!.type === view.type &&
                currentView!.view_id === view.view_id
              }
              formView={view as FormView}
              model={model}
              context={context}
              domain={domain}
              defaultValues={formDefaultValues}
              forcedValues={formForcedValues}
              results={results}
              setResults={setResults}
              setCurrentItemIndex={setCurrentItemIndex}
            />
          );
        }
        case "tree": {
          return (
            <TreeActionView
              key={`${view.type}-${view.view_id}`}
              visible={
                currentView!.type === view.type &&
                currentView!.view_id === view.view_id
              }
              limit={limit}
              model={model}
              context={context}
              domain={domain}
              formView={
                availableViews.find((v) => v.type === "form") as FormView
              }
              treeView={view as TreeView}
              searchTreeRef={searchTreeRef}
              searchTreeNameSearch={searchTreeNameSearch}
              availableViews={availableViews}
              results={results}
              setCurrentItemIndex={setCurrentItemIndex}
              setCurrentId={setCurrentId}
              setCurrentView={setCurrentView}
            />
          );
        }
        case "graph": {
          return (
            <GraphActionView
              key={`${view.type}-${view.view_id}`}
              visible={
                currentView!.type === view.type &&
                currentView!.view_id === view.view_id
              }
              viewData={view as GraphView}
              model={model}
              context={context}
              domain={domain}
              treeView={
                availableViews.find((v) => v.type === "tree") as TreeView
              }
              formView={
                availableViews.find((v) => v.type === "form") as FormView
              }
            />
          );
        }
        case "dashboard": {
          return (
            <DashboardActionView
              key={`${view.type}-${view.view_id}`}
              dashboardData={view as DashboardView}
              visible={
                currentView!.type === view.type &&
                currentView!.view_id === view.view_id
              }
            />
          );
        }
      }
    });
  }

  function onNewClicked() {
    if (currentId === undefined && currentView!.type === "form") {
      (formRef.current as any).clearAndReload();
    } else {
      setCurrentId(undefined);
      const formView: FormView = availableViews.find(
        (v) => v.type === "form",
      ) as FormView;
      setCurrentView(formView);
    }
  }

  if (!currentView) {
    return null;
  }

  return (
    <ActionViewProvider
      title={title}
      currentView={currentView}
      setCurrentView={setCurrentView}
      availableViews={availableViews}
      formRef={formRef}
      searchTreeRef={searchTreeRef}
      onNewClicked={onNewClicked}
      currentId={currentId}
      setCurrentId={setCurrentId}
      setCurrentItemIndex={setCurrentItemIndex}
      currentItemIndex={currentItemIndex}
      results={results}
      setResults={setResults}
      currentModel={model}
      sorter={sorter}
      setSorter={setSorter}
      totalItems={totalItems}
      setTotalItems={setTotalItems}
      selectedRowItems={selectedRowItems}
      setSelectedRowItems={setSelectedRowItems}
      setSearchTreeNameSearch={setSearchTreeNameSearch}
      searchTreeNameSearch={searchTreeNameSearch}
      limit={limit}
      tabKey={tabKey}
    >
      {content()}
    </ActionViewProvider>
  );
}

export default forwardRef(ActionView);
