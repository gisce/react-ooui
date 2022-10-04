import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  useContext,
} from "react";

import { Spin } from "antd";

import { FormView, TreeView, ViewType } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
import Form from "@/widgets/views/Form";
import SearchTree from "@/widgets/views/SearchTree";

import ActionViewProvider from "@/context/ActionViewContext";
import TitleHeader from "@/ui/TitleHeader";
import FormActionBar from "@/actionbar/FormActionBar";
import TreeActionBar from "@/actionbar/TreeActionBar";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { useHotkeys } from "react-hotkeys-hook";
import { GoToResourceModal } from "@/ui/GoToResourceModal";
import showInfo from "@/ui/InfoDialog";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { Dashboard } from "@/index";
import { DashboardProps } from "@/widgets/views/Dashboard/Dashboard.types";
import DashboardActionProvider from "@/context/DashboardActionContext";
import DashboardActionBar from "@/actionbar/DashboardActionBar";

type Props = {
  domain: any;
  context: any;
  model: string;
  views: Array<any>;
  title: string;
  tabKey: string;
  setCanWeClose: (f: any) => void;
  initialView: View;
  formDefaultValues?: any;
  formForcedValues?: any;
  res_id?: number | boolean;
  action_id: number;
  action_type: string;
  treeExpandable?: boolean;
};

export type View = {
  id: number;
  type: ViewType;
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
  } = props;
  const [currentView, setCurrentViewInternal] = useState<View>();
  const [availableViews, setAvailableViews] = useState<View[]>([]);

  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();
  const [dashboardData, setDashboardData] = useState<DashboardProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const res_id_parsed: number | undefined = res_id
    ? (res_id as number)
    : undefined;

  const [currentId, setCurrentIdInternal] = useState<number | undefined>(
    res_id_parsed
  );
  const [selectedRowItems, setSelectedRowItems] = useState<any[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = useState<number>();
  const [results, setResults] = useState<any>([]);
  const [toolbar, setToolbar] = useState<any>();
  const [sorter, setSorter] = useState<any>();
  const [totalItems, setTotalItems] = useState<number>(0);
  const [gtResourceModalVisible, setGtResourceModalVisible] = useState<boolean>(
    false
  );
  const [searchingForResourceId, setSearchingForResourceId] = useState<boolean>(
    false
  );
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<string>();

  const { t } = useContext(LocaleContext) as LocaleContextType;

  const formRef = useRef();
  const searchTreeRef = useRef();
  const dashboardRef = useRef();

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const {
    openShortcut,
    setCurrentView: setCurrentViewTabContext,
    setCurrentId: setCurrentIdTabContext,
    tabs,
    activeKey,
    openAction,
  } = tabManagerContext || {};

  useHotkeys(
    "ctrl+g,command+g",
    (event) => {
      event.preventDefault();
      handleGoToRecordShortcut();
    },
    [activeKey, tabs, currentView, currentItemIndex, results]
  );

  function setCurrentId(id?: number) {
    setCurrentIdInternal(id);
    setCurrentIdTabContext?.(id);
  }

  function setCurrentView(view?: View) {
    setCurrentViewInternal(view);
    setCurrentViewTabContext?.(view);
  }

  useImperativeHandle(ref, () => ({
    canWeClose,
  }));

  const fetchData = async () => {
    setIsLoading(true);

    const availableViews = [];

    for (const viewArray of views) {
      const [id, viewType] = viewArray;

      try {
        if (viewType === "dashboard") {
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

          setDashboardData({
            id: context["active_id"],
            model,
            context,
            configAction,
          });
          availableViews.push({ id, type: viewType });
        }

        const viewData = await ConnectionProvider.getHandler().getView({
          model,
          type: viewType,
          id,
          context,
        });

        if (viewType === "tree") {
          setTreeView({ ...viewData, isExpandable: treeExpandable });
        } else if (viewType === "form") {
          setFormView(viewData);
          setToolbar((viewData as any)?.toolbar);
        }

        availableViews.push({ id, type: viewType });
      } catch (err) {
        console.error(
          `${model} - ${viewType} - ${JSON.stringify(err, null, 2)}`
        );
      }
    }

    // TODO: We will have to improve this when more views are supported
    if (!initialView && availableViews.find((v) => v.type === "tree")) {
      setCurrentView(availableViews.find((v) => v.type === "tree"));
    } else if (!initialView) {
      setCurrentView(availableViews.find((v) => v.type === "form"));
    } else {
      setCurrentView(initialView);
    }

    setAvailableViews(availableViews);
    setIsLoading(false);
  };

  setCanWeClose({ tabKey, canWeClose });

  useEffect(() => {
    setCurrentView(
      initialView || availableViews.find((v) => v.type === "tree")
    );
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
      setCurrentViewTabContext?.(currentView);
    }
  }, [tabs, activeKey]);

  async function canWeClose() {
    if (currentView!.type === "form") {
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

  async function goToResourceId(id: number) {
    setSearchingForResourceId(true);

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

    setSearchingForResourceId(false);
    setGtResourceModalVisible(false);

    const viewForm = views.find((v) => v[1] === "form");

    openAction({
      domain: [],
      context,
      model,
      views,
      title,
      target: "current",
      initialView: { id: viewForm[0], type: "form" },
      action_id,
      action_type,
      res_id: id,
    });
  }

  function content() {
    if (isLoading) {
      return <Spin />;
    }

    return (
      <>
        <Form
          rootForm={true}
          visible={currentView!.type === "form"}
          ref={formRef}
          model={model}
          defaultValues={formDefaultValues}
          forcedValues={formForcedValues}
          formView={formView}
          actionDomain={domain}
          id={currentId}
          parentContext={context}
          onSubmitSucceed={(id, values) => {
            const itemIndex = results!.findIndex((item: any) => {
              return item.id === id;
            });
            if (itemIndex === -1) {
              results!.push(values);
              setResults(results);
              setCurrentItemIndex(results!.length - 1);
            }
          }}
        />
        <SearchTree
          visible={currentView!.type === "tree"}
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
            setCurrentView(availableViews.find((v) => v.type === "form"));
          }}
        />
      </>
    );
  }

  function onNewClicked() {
    if (currentId === undefined && currentView!.type === "form") {
      (formRef.current as any).clearAndReload();
    } else {
      setCurrentId(undefined);
      setCurrentView(availableViews.find((v) => v.type === "form"));
    }
  }

  if (!currentView) {
    return null;
  }

  function viewContent() {
    if (currentView!.type === "dashboard") {
      if (!dashboardData) {
        return null;
      }

      return (
        <DashboardActionProvider
          dashboardRef={dashboardRef}
          openAction={(action) => {
            openShortcut(action!);
          }}
        >
          <TitleHeader>
            <DashboardActionBar />
          </TitleHeader>
          <Dashboard
            ref={dashboardRef}
            model={dashboardData!.model}
            id={dashboardData!.id}
            context={dashboardData?.context}
            configAction={dashboardData?.configAction}
          />
        </DashboardActionProvider>
      );
    }

    return (
      <>
        <TitleHeader>
          {currentView!.type === "form" ? (
            <FormActionBar />
          ) : (
            <TreeActionBar
              parentContext={context}
              treeExpandable={treeView?.isExpandable || false}
            />
          )}
        </TitleHeader>
        {content()}
        <GoToResourceModal
          visible={gtResourceModalVisible}
          onIdSubmitted={goToResourceId}
          isSearching={searchingForResourceId}
          onCancel={() => {
            setGtResourceModalVisible(false);
          }}
        />
      </>
    );
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
      toolbar={toolbar}
      setToolbar={setToolbar}
      sorter={sorter}
      setSorter={setSorter}
      totalItems={totalItems}
      setTotalItems={setTotalItems}
      selectedRowItems={selectedRowItems}
      setSelectedRowItems={setSelectedRowItems}
      setSearchTreeNameSearch={setSearchTreeNameSearch}
      searchTreeNameSearch={searchTreeNameSearch}
      goToResourceId={goToResourceId}
    >
      {viewContent()}
    </ActionViewProvider>
  );
}

export default forwardRef(ActionView);
