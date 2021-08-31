import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import { Spin } from "antd";

import ConnectionProvider from "@/ConnectionProvider";
import { parseContext, parseDomain } from "ooui";

import ActionViewExplicit from "./ActionViewExplicit";

type Props = {
  action: string;
  title: string;
  tabKey: string;
  setCanWeClose: (f: any) => void;
};

type ActionData = {
  domain: any;
  context: any;
  model: string;
  views: Array<any>;
};

function ActionView(props: Props, ref: any) {
  const { action, title, setCanWeClose, tabKey } = props;
  const [actionData, setActionData] = useState<ActionData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const actionViewExplicit = useRef();

  useImperativeHandle(ref, () => ({
    canWeClose: (actionViewExplicit.current as any).canWeClose,
  }));

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
      ref={actionViewExplicit}
      tabKey={tabKey}
      title={title}
      model={actionData!.model}
      views={actionData!.views}
      context={actionData!.context}
      domain={actionData!.domain}
      setCanWeClose={setCanWeClose}
    />
  );
}

export default forwardRef(ActionView);
