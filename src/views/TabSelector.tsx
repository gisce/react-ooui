import React, { useContext, useState } from "react";

import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import Tab from "./tabs/Tab";

function TabSelector() {
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { activeKey, tabs, onRemoveTab, onChangeTab } = tabManagerContext || {};

  return (
    <>
      {tabs.map((tab: any) => (
        <Tab
          key={tab.key}
          tabKey={tab.key}
          label={tab.title}
          onClose={onRemoveTab}
          isActive={activeKey === tab.key}
          onSelected={onChangeTab}
        />
      ))}
    </>
  );
}

export default TabSelector;
