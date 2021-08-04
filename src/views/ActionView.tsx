import React, { useEffect, useState, useRef } from "react";

import { Spin } from "antd";

import { FormView, TreeView, ViewType } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
import Form from "@/widgets/views/Form";
import SearchTree from "@/widgets/views/SearchTree";
import { parseDomain } from "ooui";

import ActionViewProvider from "@/context/ActionViewContext";
import TitleHeader from "@/ui/TitleHeader";
import FormActionBar from "@/actionbar/FormActionBar";
import TreeActionBar from "@/actionbar/TreeActionBar";

type Props = {
  action: string;
  title: string;
};

function ActionView(props: Props) {
  const { action, title } = props;
  const [currentView, setCurrentView] = useState<ViewType>("tree");
  const [availableViews, setAvailableViews] = useState<ViewType[]>([]);

  const [currentModel, setCurrentModel] = useState<string>();
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();
  const [domain, setDomain] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>();
  const [currentItemIndex, setCurrentItemIndex] = useState<number>();
  const [results, setResults] = useState<any>([]);
  const [toolbar, setToolbar] = useState<any>();

  const formRef = useRef();

  const fetchActionData = async () => {
    const dataForAction = await ConnectionProvider.getHandler().getViewsForAction(
      {
        action: action!,
      }
    );
    const parsedDomain = parseDomain({
      domainValue: dataForAction.domain,
      values: {},
      fields: {},
    });
    setDomain(parsedDomain);
    const formView = dataForAction.views.get("form");
    setFormView(formView);
    setToolbar(formView?.toolbar);
    setTreeView(dataForAction.views.get("tree"));
    setCurrentModel(dataForAction.model);
    return dataForAction;
  };

  async function fetchData() {
    setIsLoading(true);
    const actionData = await fetchActionData();

    if (actionData.views.has("tree")) {
      setCurrentView("tree");
    } else {
      setCurrentView("form");
    }

    setAvailableViews(Array.from(actionData.views.keys()) as ViewType[]);
    setIsLoading(false);
  }

  useEffect(() => {
    setCurrentId(undefined);
    setCurrentItemIndex(undefined);
    fetchData();
  }, [action]);

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
          model={currentModel!}
          formView={formView}
          id={currentId}
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
          rootTree={true}
          model={currentModel!}
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
    setCurrentId(undefined);
    setCurrentView("form");
  }

  return (
    <ActionViewProvider
      title={title}
      currentView={currentView}
      setCurrentView={setCurrentView}
      availableViews={availableViews}
      formRef={formRef}
      onNewClicked={onNewClicked}
      currentId={currentId}
      setCurrentId={setCurrentId}
      setCurrentItemIndex={setCurrentItemIndex}
      currentItemIndex={currentItemIndex}
      results={results}
      setResults={setResults}
      currentModel={currentModel}
      toolbar={toolbar}
      setToolbar={setToolbar}
    >
      <TitleHeader>
        {currentView === "form" ? <FormActionBar /> : <TreeActionBar />}
      </TitleHeader>
      {content()}
    </ActionViewProvider>
  );
}

export default ActionView;
