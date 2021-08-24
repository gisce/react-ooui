import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Tabs } from "antd";
import { ActionView } from "..";
const { TabPane } = Tabs;
import { v4 as uuidv4 } from "uuid";
import Welcome from "./Welcome";
import TabManagerProvider from "@/context/TabManagerContext";
import ActionViewExplicit from "./ActionViewExplicit";

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
    addNewTab({
      title,
      content: <ActionView title={title} action={action} />,
    });
  }

  function addNewTab({ title, content }: { title: string; content: any }) {
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
        content,
      },
    ]);

    setActiveKey(key);
  }

  function openAction({
    domain,
    context,
    model,
    views,
    title,
    target,
  }: {
    domain: any;
    context: any;
    model: string;
    views: Array<any>;
    title: string;
    target: string;
  }) {
    // if (target === "current") {

    // }

    addNewTab({
      title,
      content: (
        <ActionViewExplicit
          title={title}
          views={views}
          model={model}
          context={context}
          domain={domain}
        />
      ),
    });
  }

  return (
    <TabManagerProvider openAction={openAction}>
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
    </TabManagerProvider>
  );
}

export default forwardRef(TabManager);
