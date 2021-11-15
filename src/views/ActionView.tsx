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
  } = props;
  const [currentView, setCurrentViewInternal] = useState<View>();
  const [availableViews, setAvailableViews] = useState<View[]>([]);

  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const res_id_parsed: number | undefined = res_id
    ? (res_id as number)
    : undefined;

  const [currentId, setCurrentIdInternal] = useState<number | undefined>(
    res_id_parsed
  );
  const [currentItemIndex, setCurrentItemIndex] = useState<number>();
  const [results, setResults] = useState<any>([]);
  const [toolbar, setToolbar] = useState<any>();
  const [sorter, setSorter] = useState<any>();
  const [totalItems, setTotalItems] = useState<number>(0);

  const formRef = useRef();
  const searchTreeRef = useRef();

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const {
    setCurrentView: setCurrentViewTabContext,
    setCurrentId: setCurrentIdTabContext,
    tabs,
    activeKey,
  } = tabManagerContext || {};

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
        const viewData = await ConnectionProvider.getHandler().getView({
          model,
          type: viewType,
          id,
          context,
        });

        if (viewType === "tree") {
          setTreeView(viewData);
        }
        if (viewType === "form") {
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
          onSubmitSucceed={(id) => {
            const itemIndex = results!.findIndex((item: any) => {
              return item === id;
            });
            if (itemIndex === -1) {
              results!.push(id);
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
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={(event: any) => {
            const { id } = event;
            setCurrentId(id);
            const itemIndex = results.findIndex((item: any) => {
              return item === id;
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
    >
      <TitleHeader>
        {currentView!.type === "form" ? (
          <FormActionBar />
        ) : (
          <TreeActionBar parentContext={context} />
        )}
      </TitleHeader>
      {content()}
    </ActionViewProvider>
  );
}

export default forwardRef(ActionView);
