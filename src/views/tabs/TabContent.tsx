import { RootState } from "@/redux/state";
import { ReactNode, createElement, memo, useRef } from "react";
import { useSelector } from "react-redux";
import ActionView from "../ActionView";
import { Spin } from "antd";
import { Tab } from "@/types/tab";

const TabContent = () => {
  const { tabs, activeTabKey } = useSelector((state: RootState) => state.tabs);

  const tabComponents = useRef<Record<string, ReactNode>>({});

  const hiddenStyle: any = {
    display: "none",
  };

  const getTabElement = (tab: Tab) => {
    const tabComponent = tabComponents.current[tab.id];

    if (tab.isLoading) {
      return <Spin />;
    } else if (!tabComponent && !tab.isLoading) {
      tabComponents.current[tab.id] = createElement(ActionView, {
        action_id: tab.action.id,
        action_type: tab.action.type,
        tabKey: tab.id,
        title: tab.action.title,
        availableViews: tab.availableViews!,
        initialView: {
          id: tab.currentView!.view_id!,
          type: tab.currentView!.type,
        },
        model: tab.model!,
        context: tab.context,
        domain: tab.domain,
        res_id: tab.viewOptions?.form?.resourceId,
        formDefaultValues: tab.viewOptions?.form?.defaultValues,
        formForcedValues: tab.viewOptions?.form?.forcedValues,
        limit: tab.viewOptions?.tree?.limit,
      });
      return tabComponents.current[tab.id];
    }
    return tabComponent;
  };

  const tabsToRender =
    tabs?.map((tab) => (
      <div
        key={tab.id}
        style={tab.id !== activeTabKey ? hiddenStyle : undefined}
      >
        {getTabElement(tab)}
      </div>
    )) || null;

  return <>{tabsToRender}</>;
};

export default memo(TabContent, () => true);
