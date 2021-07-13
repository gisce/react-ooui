import React, { useEffect, useState, useRef } from "react";

import { Divider, Spin, Typography } from "antd";

import { FormView, TreeView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";
import ActionBar from "@/actionbar/ActionBar";
import Form from "@/widgets/views/Form";
import SearchTree from "@/widgets/views/SearchTree";
import { parseDomain } from "ooui";

const { Title } = Typography;

type Props = {
  action: string;
  title: string;
};

function ActionView(props: Props) {
  const { action, title } = props;
  const [currentView, setCurrentView] = useState<"form" | "tree">("tree");
  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>();
  const [currentModel, setCurrentModel] = useState<string>();
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();
  const [domain, setDomain] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>();

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
    setLimit(dataForAction.limit);
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
          onSubmitSucceed={() => {
            setFormIsSaving(false);
            setFormHasChanges(false);
          }}
          onSubmitError={() => {
            setFormIsSaving(false);
          }}
          onCancel={() => {
            setFormIsSaving(false);
          }}
          onFieldsChange={() => {
            setFormHasChanges(true);
          }}
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

  function toggleView() {
    if (currentView === "form") {
      setCurrentView("tree");
    } else {
      setCurrentView("form");
    }
  }

  return (
    <>
      <Title level={3}>{title}</Title>
      <Divider />
      <ActionBar
        saveButtonHidden={currentView !== "form"}
        saveButtonCallback={saveItem}
        saveButtonLoading={formIsSaving}
        saveButtonDisabled={!formHasChanges || formIsSaving}
        showFormButtonCallback={toggleView}
        showTreeButtonCallback={toggleView}
        showFormButtonHidden={currentView === "form"}
        showTreeButtonHidden={currentView === "tree"}
      />
      <Divider />
      {content()}
    </>
  );
}

export default ActionView;
