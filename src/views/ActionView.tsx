import React, { useEffect, useState } from "react";

import { Spin } from "antd";

import ConnectionProvider from "@/ConnectionProvider";
import { parseContext, parseDomain } from "ooui";

import ActionViewExplicit from "./ActionViewExplicit";

type Props = {
  action: string;
  title: string;
};

type ActionData = {
  domain: any;
  context: any;
  model: string;
  views: Array<any>;
};

function ActionView(props: Props) {
  const { action, title } = props;
  const [actionData, setActionData] = useState<ActionData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);

    const dataForAction = await ConnectionProvider.getHandler().getActionData(
      action
    );
    const parsedDomain = dataForAction.domain
      ? parseDomain({
          domainValue: dataForAction.domain,
          values: {},
          fields: {},
        })
      : [];

    const parsedContext = parseContext({
      context: dataForAction.context,
      values: {},
      fields: {},
    });

    const { res_model: model, views } = dataForAction;

    setActionData({
      model,
      views,
      context: parsedContext,
      domain: parsedDomain,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [action]);

  if (isLoading) {
    return <Spin />;
  }

  return (
    <ActionViewExplicit
      title={title}
      model={actionData!.model}
      views={actionData!.views}
      context={actionData!.context}
      domain={actionData!.domain}
    />
  );
}

export default ActionView;
