import { useEffect, useState, useRef, forwardRef, useContext } from "react";

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
import { useNavigation } from "@/context/RootContext";

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
  treeExpandable?: boolean;
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
    treeExpandable = false,
    limit,
    availableViews,
  } = props;
  const [currentView, setCurrentViewInternal] = useState<View>();

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
  } = tabManagerContext || {};

  const { tabs, activeTabKey, openAction, onRemoveTab } = useNavigation();

  useHotkeys(
    "ctrl+g,command+g",
    (event) => {
      event.preventDefault();
      handleGoToRecordShortcut();
    },
    [activeTabKey, tabs, currentView, currentItemIndex, results],
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

  const fetchData = async () => {
    setIsLoading(true);

    // for (const view of viewsRetrieved) {
    //   if (!view) {
    //     continue;
    //   }

    //   const [, viewType] = view.viewTuple;

    //   const viewInfo = view.info;

    //   switch (viewType) {
    //     case "dashboard": {
    //       const formView = availableViews.find((view) => {
    //         return view.type === "form";
    //       });

    //       let configAction;

    //       if (formView) {
    //         configAction = {
    //           action_id,
    //           action_type,
    //           name: title,
    //           res_id: context["active_id"],
    //           res_model: model,
    //           view_id: formView[0],
    //           view_type: formView[1],
    //         };
    //       }

    //       viewDataRetrieved.push({
    //         type: "dashboard",
    //         id: context["active_id"],
    //         model,
    //         context,
    //         configAction,
    //       });
    //       break;
    //     }
    //     case "form": {
    //       viewDataRetrieved.push({
    //         ...(viewInfo as FormView),
    //         type: viewType,
    //       });
    //       break;
    //     }
    //     case "tree": {
    //       viewDataRetrieved.push({
    //         ...(viewInfo as TreeView),
    //         isExpandable: treeExpandable,
    //         type: viewType,
    //       });
    //       break;
    //     }
    //     case "graph": {
    //       viewDataRetrieved.push({
    //         ...(viewInfo as GraphView),
    //         type: viewType,
    //       });
    //       break;
    //     }
    //     default:
    //       break;
    //   }
    // }
    let currentViewToAssign;

    if (!initialView && availableViews.find((v) => v.type === "tree")) {
      const treeView: TreeView = availableViews.find(
        (v) => v.type === "tree",
      ) as TreeView;
      currentViewToAssign = treeView;
    } else if (!initialView) {
      const formView: TreeView = availableViews.find(
        (v) => v.type === "form",
      ) as TreeView;
      currentViewToAssign = formView;
    } else {
      const view = availableViews.find((v) => {
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
    setIsLoading(false);
  };

  // setCanWeClose({ tabKey, canWeClose });

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
  }, [model, availableViews, res_id]);

  useEffect(() => {
    if (activeTabKey === tabKey) {
      setCurrentIdTabContext?.(currentId);
      const extra = { action_id, action_type };
      setCurrentViewTabContext?.({ ...currentView, extra } as any);
    }
  }, [tabs, activeTabKey]);

  // async function canWeClose() {
  //   if (!currentView) {
  //     return true;
  //   } else if (currentView!.type === "form") {
  //     return await (formRef.current as any).cancelUnsavedChanges();
  //   } else {
  //     return true;
  //   }
  // }

  async function handleGoToRecordShortcut() {
    if (activeTabKey !== tabKey) {
      return;
    }

    // if (currentView!.type === "form") {
    //   const canWeClose = await (formRef.current as any).cancelUnsavedChanges();

    //   if (!canWeClose) {
    //     return;
    //   }
    // }

    setGtResourceModalVisible(true);
  }

  async function goToResourceId(ids: number[]) {
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
    const viewForm = availableViews.find((v) => v.type === mode)!;
    openAction({
      domain,
      context,
      model,
      views: availableViews,
      title,
      target: "current",
      initialView: { id: viewForm.view_id!, type: mode },
      action_id,
      action_type,
      res_id: ids[0],
    });
  }

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
      tabKey={tabKey}
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
