import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Tabs } from "antd";
import { ActionView } from "..";
const { TabPane } = Tabs;
import { v4 as uuidv4 } from "uuid";
import Welcome from "./Welcome";

function TabManager(props: any, ref: any) {
  const [activeKey, setActiveKey] = useState<string>();
  const [tabs, setTabs] = useState<any>([
    {
      title: "Welcome",
      key: "welcome",
      closable: true,
      content: <Welcome />,
    },
  ]);

  useImperativeHandle(ref, () => ({
    openNewTab,
  }));

  function remove(key: string) {
    if (key === activeKey) {
      const currentIndex = tabs.findIndex((tab: any) => tab.key === key);

      if (tabs[currentIndex - 1]) {
        setActiveKey(tabs[currentIndex - 1].key);
      }
      if (tabs[currentIndex + 1]) {
        setActiveKey(tabs[currentIndex + 1].key);
      }
    }

    setTabs(tabs.filter((tab: any) => tab.key !== key));
  }

  function openNewTab({ title, action }: { title: string; action: string }) {
    let newTabs = [...tabs];

    if (tabs.length === 1 && tabs[0].key === "welcome") {
      newTabs = [...tabs.filter((tab: any) => tab.key !== "welcome")];
    }

    const key = uuidv4();

    setTabs([
      ...newTabs,
      {
        title,
        key,
        closable: true,
        content: <ActionView title={title} action={action} />,
      },
    ]);

    setActiveKey(key);
  }

  return (
    <Tabs
      activeKey={activeKey}
      hideAdd
      type="editable-card"
      onChange={(activeKey) => {
        setActiveKey(activeKey);
      }}
      onEdit={(targetKey, action) => {
        if (action === "remove") {
          remove(targetKey as string);
        }
      }}
    >
      {tabs.map((tab: any) => {
        return (
          <TabPane key={tab.key} closable={tab.closable} tab={tab.title}>
            {tab.content}
          </TabPane>
        );
      })}
    </Tabs>
  );
}

export default forwardRef(TabManager);
