import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Tabs } from "antd";
import { ActionView, ContentRootProvider } from "..";
const { TabPane } = Tabs;
import { v4 as uuidv4 } from "uuid";
import Welcome from "./Welcome";
import TabManagerProvider from "@/context/TabManagerContext";
import ActionViewExplicit from "./ActionViewExplicit";
import { parseContext, parseDomain } from "ooui";

type TabManagerProps = {
  children: React.ReactNode;
};

function TabManager(props: TabManagerProps, ref: any) {
  const { children } = props;
  const [activeKey, setActiveKey] = useState<string>();
  const [tabs, setTabs] = useState<any>([
    {
      title: "Welcome",
      key: "welcome",
      closable: true,
      content: <Welcome />,
    },
  ]);
  const tabViewsCloseFunctions = useRef(new Map<string, any>());

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
    tabViewsCloseFunctions.current.delete(key);
  }

  function registerViewCloseFn({
    tabKey,
    canWeClose,
  }: {
    tabKey: string;
    canWeClose: any;
  }) {
    tabViewsCloseFunctions.current.set(tabKey, canWeClose);
  }

  function openNewTab({ title, action }: { title: string; action: string }) {
    const key = uuidv4();

    addNewTab({
      title,
      content: (
        <ActionView
          title={title}
          action={action}
          setCanWeClose={registerViewCloseFn}
          tabKey={key}
        />
      ),
      key,
    });
  }

  function addNewTab({
    title,
    content,
    key,
  }: {
    title: string;
    content: any;
    key: string;
  }) {
    let newTabs = [...tabs];

    if (tabs.length === 1 && tabs[0].key === "welcome") {
      newTabs = [...tabs.filter((tab: any) => tab.key !== "welcome")];
    }

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

  function openRelate({
    relateData,
    fields,
    values,
  }: {
    relateData: any;
    fields: any;
    values: any;
  }) {
    const {
      res_model: model,
      context,
      domain,
      views,
      target,
      string: title,
    } = relateData;

    const parsedDomain = domain
      ? parseDomain({
          domainValue: domain,
          values,
          fields,
        })
      : [];

    const parsedContext = parseContext({
      context: context,
      values,
      fields,
    });

    openAction({
      model,
      target,
      views,
      context: parsedContext,
      domain: parsedDomain,
      title,
    });
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
    const key = uuidv4();

    addNewTab({
      title,
      content: (
        <ActionViewExplicit
          tabKey={key}
          title={title}
          views={views}
          model={model}
          context={context}
          domain={domain}
          setCanWeClose={registerViewCloseFn}
        />
      ),
      key,
    });
  }

  return (
    <TabManagerProvider openAction={openAction} openRelate={openRelate}>
      <ContentRootProvider>
        <Tabs
          activeKey={activeKey}
          hideAdd
          type="editable-card"
          onChange={(activeKey) => {
            setActiveKey(activeKey);
          }}
          onEdit={async (targetKey, action) => {
            if (action === "remove") {
              const canWeCloseFn = tabViewsCloseFunctions.current.get(
                targetKey as string
              );
              const canWeClose = await canWeCloseFn?.();

              if (canWeClose || targetKey === "welcome") {
                remove(targetKey as string);
              }
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
        {children}
      </ContentRootProvider>
    </TabManagerProvider>
  );
}

export default forwardRef(TabManager);
