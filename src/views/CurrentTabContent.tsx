import React, { useContext } from "react";

import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import TabContent from "./TabContent";

function CurrentTabContent() {
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { tabs } = tabManagerContext || {};

  const tabsToRender =
    tabs?.map((tab) => <TabContent key={tab.key} tab={tab} />) || null;

  return <>{tabsToRender}</>;
}

export default CurrentTabContent;
