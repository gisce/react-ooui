import React, { useContext } from "react";
import { theme } from "antd";

import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import Tab from "./tabs/Tab";

function TabSelector() {
  const { token } = theme.useToken();
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const {
    activeKey,
    tabs = [],
    onRemoveTab,
    onChangeTab,
  } = tabManagerContext || {};

  return (
    <div
      style={{
        flex: 1,
        maxWidth: "100%",
        marginRight: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          position: "relative",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
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
      </div>
    </div>
  );
}

export default TabSelector;
