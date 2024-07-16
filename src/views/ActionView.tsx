import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";

import { Spin } from "antd";

import {
  DashboardView,
  FormView,
  GraphView,
  InitialViewData,
  TreeView,
  View,
  ViewType,
} from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";

import ActionViewProvider from "@/context/ActionViewContext";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { useHotkeys } from "react-hotkeys-hook";
import { GoToResourceModal } from "@/ui/GoToResourceModal";
import showInfo from "@/ui/InfoDialog";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { useLocale } from "@gisce/react-formiga-components";
import { GraphActionView } from "@/views/actionViews/GraphActionView";
import { FormActionView } from "./actionViews/FormActionView";
import { TreeActionView } from "./actionViews/TreeActionView";
import { DashboardActionView } from "./actionViews/DashboardActionView";
import { resolveViewInfoPromises } from "@/helpers/viewHelper";

type Props = {
  domain: any;
  context: any;
  model: string;
  views: Array<[number, ViewType]>;
  title: string;
  tabKey: string;
  setCanWeClose: (f: any) => void;
  initialView: InitialViewData;
  formDefaultValues?: any;
  formForcedValues?: any;
  res_id?: number | boolean;
  action_id: number;
  action_type: string;
  treeExpandable?: boolean;
  limit?: number;
};

function ActionView(props: Props, ref: any) {
  const {
    domain,
    model,
    context,
    views,
    title,
    setCanWeClose,
    tabKey,
    initialView,
    formDefaultValues,
    formForcedValues = {},
    res_id = false,
    action_id,
    action_type,
    treeExpandable = false,
    limit,
  } = props;
  const [currentView, setCurrentViewInternal] = useState<View>();

  const [availableViews, setAvailableViews] = useState<View[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);
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
  const [gtResourceModalVisible, setGtResourceModalVisible] =
    useState<boolean>(false);
  const [searchingForResourceId, setSearchingForResourceId] =
    useState<boolean>(false);
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<string>();

  const { t } = useLocale();

  const formRef = useRef();
  const searchTreeRef = useRef();

  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const {
    setCurrentView: setCurrentViewTabContext,
    setCurrentId: setCurrentIdTabContext,
    tabs,
    activeKey,
    openAction,
    onRemoveTab,
  } = tabManagerContext || {};

  useHotkeys(
    "ctrl+g,command+g",
    () => {
      handleGoToRecordShortcut();
    },
    { enableOnFormTags: true, preventDefault: true },
    [activeKey, tabs, currentView, currentItemIndex, results],
  );

  function setCurrentId(id?: number) {
    setCurrentIdInternal(id);
    setCurrentIdTabContext?.(id);
  }

  function setCurrentView(view?: View) {
    setCurrentViewInternal(view);
    const extra = { action_id, action_type };
    setCurrentViewTabContext?.({ ...view, extra } as any);
  }

  useImperativeHandle(ref, () => ({
    canWeClose,
  }));

  const fetchData = async () => {
    setIsLoading(true);

    const viewDataRetrieved: View[] = [];

    const getViewsPromises = [];

    for (const viewArray of views) {
      const [id, viewType] = viewArray;
      if (viewType !== "dashboard") {
        getViewsPromises.push({
          viewTuple: viewArray,
          promise: ConnectionProvider.getHandler().getView({
            model,
            type: viewType,
            id,
            context,
          }),
        });
      } else {
        getViewsPromises.push({
          viewTuple: viewArray,
        });
      }
    }

    const viewsRetrieved = await resolveViewInfoPromises(getViewsPromises);

    for (const view of viewsRetrieved) {
      if (!view) {
        continue;
      }

      const [, viewType] = view.viewTuple;

      const viewInfo = view.info;

      switch (viewType) {
        case "dashboard": {
          const formView = views.find((view: any[]) => {
            const [, type] = view;
            return type === "form";
          });

          let configAction;

          if (formView) {
            configAction = {
              action_id,
              action_type,
              name: title,
              res_id: context["active_id"],
              res_model: model,
              view_id: formView[0],
              view_type: formView[1],
            };
          }

          viewDataRetrieved.push({
            type: "dashboard",
            id: context["active_id"],
            model,
            context,
            configAction,
          });
          break;
        }
        case "form": {
          viewDataRetrieved.push({
            ...(viewInfo as FormView),
            type: viewType,
          });
          break;
        }
        case "tree": {
          viewDataRetrieved.push({
            ...(viewInfo as TreeView),
            isExpandable: treeExpandable,
            type: viewType,
          });
          break;
        }
        case "graph": {
          viewDataRetrieved.push({
            ...(viewInfo as GraphView),
            type: viewType,
          });
          break;
        }
        default:
          break;
      }
    }
    let currentViewToAssign;

    if (!initialView && viewDataRetrieved.find((v) => v.type === "tree")) {
      const treeView: TreeView = viewDataRetrieved.find(
        (v) => v.type === "tree",
      ) as TreeView;
      currentViewToAssign = treeView;
    } else if (!initialView) {
      const formView: TreeView = viewDataRetrieved.find(
        (v) => v.type === "form",
      ) as TreeView;
      currentViewToAssign = formView;
    } else {
      const view = viewDataRetrieved.find((v) => {
        if (!initialView.id) {
          return v.type === initialView.type;
        } else {
          return v.type === initialView.type && v.view_id === initialView.id;
        }
      });
      currentViewToAssign = view;
    }

    if (!currentViewToAssign) {
      showErrorDialog(
        `Error determining the first view to show for model ${model}.\nPlease, make sure the view ids on the fields_view_get responses are the same as the ones defined in the action`,
      );
      onRemoveTab?.(tabKey);
    }

    setCurrentView(currentViewToAssign);
    setAvailableViews(viewDataRetrieved);
    setIsLoading(false);
  };

  setCanWeClose({ tabKey, canWeClose });

  useEffect(() => {
    const treeView = availableViews.find((v) => v.type === "tree") as TreeView;
    const initialViewWithData: View = availableViews.find((v) => {
      if (!initialView.id) {
        return v.type === initialView.type;
      } else {
        return v.type === initialView.type && v.view_id === initialView.id;
      }
    }) as View;

    setCurrentView(initialViewWithData || treeView);
    if (!res_id) {
      setCurrentId(undefined);
      setCurrentItemIndex(undefined);
    } else {
      setCurrentIdTabContext?.(res_id_parsed);
    }
    fetchData();
  }, [model, views, res_id]);

  useEffect(() => {
    if (activeKey === tabKey) {
      setCurrentIdTabContext?.(currentId);
      const extra = { action_id, action_type };
      setCurrentViewTabContext?.({ ...currentView, extra } as any);
    }
  }, [tabs, activeKey]);

  async function canWeClose() {
    if (!currentView) {
      return true;
    } else if (currentView!.type === "form") {
      return await (formRef.current as any).cancelUnsavedChanges();
    } else {
      return true;
    }
  }

  async function handleGoToRecordShortcut() {
    if (activeKey !== tabKey) {
      return;
    }

    if (currentView!.type === "form") {
      const canWeClose = await (formRef.current as any).cancelUnsavedChanges();

      if (!canWeClose) {
        return;
      }
    }

    setGtResourceModalVisible(true);
  }

  async function goToResourceId(ids: number[], openInSameTab?: boolean) {
    setSearchingForResourceId(true);

    let mode: ViewType;
    let domain: any[];
    if (ids.length === 1) {
      mode = "form";
      domain = [];
      const id = ids[0];
      const itemIndex = results!.findIndex((item: any) => {
        return item.id === id;
      });
      let resource;

      if (itemIndex === -1) {
        try {
          resource = (
            await ConnectionProvider.getHandler().readObjects({
              model,
              ids: [id],
              context,
            })
          )?.[0];
        } catch (err) {}

        if (!resource) {
          setSearchingForResourceId(false);
          setGtResourceModalVisible(false);
          showInfo(t("idNotFound"));
          return;
        }
      } else {
        resource = results[itemIndex];
      }
    } else {
      mode = "tree";
      domain = [["id", "in", ids]];
    }

    setSearchingForResourceId(false);
    setGtResourceModalVisible(false);

    if (openInSameTab && mode === "form") {
      setCurrentId(ids[0]);
      const formView: FormView = availableViews.find(
        (v) => v.type === "form",
      ) as FormView;
      setCurrentView(formView);
    } else {
      const viewForm = views.find((v) => v[1] === mode);
      openAction({
        domain,
        context,
        model,
        views,
        title,
        target: "current",
        initialView: { id: viewForm?.[0]!, type: mode },
        action_id,
        action_type,
        res_id: ids[0],
      });
    }
  }

  function content() {
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

  if (isLoading) {
    return <Spin />;
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
      goToResourceId={goToResourceId}
      limit={limit}
    >
      {content()}
      <GoToResourceModal
        visible={gtResourceModalVisible}
        onIdSubmitted={goToResourceId}
        isSearching={searchingForResourceId}
        onCancel={() => {
          setGtResourceModalVisible(false);
        }}
      />
    </ActionViewProvider>
  );
}

export default forwardRef(ActionView);
