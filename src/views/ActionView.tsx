import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
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

type Props = {
  domain: any;
  context: any;
  model: string;
  views: Array<any>;
  title: string;
  tabKey: string;
  setCanWeClose: (f: any) => void;
  initialViewType?: ViewType;
  formDefaultValues?: any;
  formForcedValues?: any;
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
    initialViewType = "tree",
    formDefaultValues,
    formForcedValues = {},
  } = props;
  const [currentView, setCurrentView] = useState<ViewType>(initialViewType);
  const [availableViews, setAvailableViews] = useState<ViewType[]>([]);

  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentId, setCurrentId] = useState<number>();
  const [currentItemIndex, setCurrentItemIndex] = useState<number>();
  const [results, setResults] = useState<any>([]);
  const [toolbar, setToolbar] = useState<any>();

  const formRef = useRef();
  const searchTreeRef = useRef();

  useImperativeHandle(ref, () => ({
    canWeClose,
  }));

  const fetchData = async () => {
    setIsLoading(true);

    const availableViews = [];

    for (const viewArray of views) {
      const [, viewType] = viewArray;

      try {
        const viewData = await ConnectionProvider.getHandler().getView({
          model,
          type: viewType,
          context,
        });

        if (viewType === "tree") {
          setTreeView(viewData);
        }
        if (viewType === "form") {
          setFormView(viewData);
          setToolbar((viewData as any)?.toolbar);
        }
        availableViews.push(viewType);
      } catch (err) {
        console.error(
          `${model} - ${viewType} - ${JSON.stringify(err, null, 2)}`
        );
      }
    }

    // TODO: We will have to improve this when more views are supported
    if (!initialViewType && availableViews.includes("tree")) {
      setCurrentView("tree");
    } else if (!initialViewType) {
      setCurrentView("form");
    }

    setAvailableViews(availableViews);
    setIsLoading(false);
  };

  setCanWeClose({ tabKey, canWeClose });

  useEffect(() => {
    setCurrentView(initialViewType || "tree");
    setCurrentId(undefined);
    setCurrentItemIndex(undefined);
    fetchData();
  }, [model, views]);

  async function canWeClose() {
    if (currentView === "form") {
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
          visible={currentView === "form"}
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
          visible={currentView === "tree"}
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
            setCurrentView("form");
          }}
        />
      </>
    );
  }

  function onNewClicked() {
    if (currentId === undefined && currentView === "form") {
      (formRef.current as any).clearAndReload();
    } else {
      setCurrentId(undefined);
      setCurrentView("form");
    }
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
    >
      <TitleHeader>
        {currentView === "form" ? (
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
