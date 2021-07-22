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

  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);

  const formRef = useRef();

  const saveItem = () => {
    setFormIsSaving(true);
    (formRef.current as any).submitForm();
  };

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
    setFormView(dataForAction.views.get("form"));
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
    fetchData();
  }, [action]);

  function content() {
    if (isLoading) {
      return <Spin />;
    }

    if (currentView === "form") {
      return (
        <Form
          ref={formRef}
          model={currentModel!}
          arch={formView?.arch}
          fields={formView?.fields}
          id={currentId}
        />
      );
    } else {
      return (
        <SearchTree
          model={currentModel!}
          domain={domain}
          onRowClicked={(event: any) => {
            const { id } = event;
            setCurrentId(id);
            setCurrentView("form");
          }}
        />
      );
    }
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
    >
      <TitleHeader>
        {currentView === "form" ? (
          <FormActionBar key={Math.random() * 10000} />
        ) : (
          <TreeActionBar />
        )}
      </TitleHeader>
      {content()}
    </ActionViewProvider>
  );
}

export default ActionView;
