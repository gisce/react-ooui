import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { Tabs } from "antd";
import { ConnectionProvider, ContentRootProvider, FormView } from "..";
const { TabPane } = Tabs;
import { v4 as uuidv4 } from "uuid";
import Welcome from "./Welcome";
import TabManagerProvider from "@/context/TabManagerContext";
import ActionView from "./ActionView";
import { parseContext, parseDomain } from "ooui";
import { ViewType } from "@/types";
import LocaleContextProvider from "@/context/LocaleContext";
import { tForLang } from "@/context/LocaleContext";

type TabManagerProps = {
  children: React.ReactNode;
  globalValues?: any;
  rootContext?: any;
  lang: string;
};

function TabManager(props: TabManagerProps, ref: any) {
  const { children, globalValues = {}, rootContext = {}, lang } = props;
  const [activeKey, setActiveKey] = useState<string>();

  const [tabs, setTabs] = useState<any>([
    {
      title: tForLang("welcome", lang),
      key: "welcome",
      closable: true,
      content: <Welcome />,
    },
  ]);
  const tabViewsCloseFunctions = useRef(new Map<string, any>());
  const contentRootProvider = useRef();

  useImperativeHandle(ref, () => ({
    retrieveAndOpenAction,
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

  async function retrieveAndOpenAction(action: string) {
    const dataForAction = await ConnectionProvider.getHandler().getActionData({
      action,
      context: rootContext,
    });
    const parsedDomain = dataForAction.domain
      ? parseDomain({
          domainValue: dataForAction.domain,
          values: globalValues,
          fields: {},
        })
      : [];

    const parsedContext = parseContext({
      context: { ...rootContext, ...dataForAction.context },
      values: globalValues,
      fields: {},
    });

    const { res_model: model, views, name: title, target } = dataForAction;

    const initialViewType = views[0][1];

    openAction({
      domain: parsedDomain,
      context: parsedContext,
      model,
      views,
      title,
      target,
      initialViewType,
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
          values: { ...values, ...globalValues },
          fields,
        })
      : [];

    const initialViewType = views[0][1];

    const parsedContext = parseContext({
      context: context,
      values: { ...values, ...globalValues },
      fields,
    });

    openAction({
      model,
      target,
      views,
      context: { ...rootContext, ...parsedContext },
      domain: parsedDomain,
      title,
      initialViewType,
    });
  }

  async function openSpecificModelTab({
    model,
    values,
    forcedValues,
    title,
    initialViewType,
  }: {
    model: string;
    values?: any;
    forcedValues?: any;
    title: string;
    initialViewType?: ViewType;
  }) {
    const key = uuidv4();

    addNewTab({
      title,
      content: (
        <ActionView
          tabKey={key}
          title={title}
          views={[
            [, "form"],
            [, "tree"],
          ]}
          formDefaultValues={values}
          formForcedValues={forcedValues}
          model={model}
          context={rootContext}
          domain={{}}
          setCanWeClose={registerViewCloseFn}
          initialViewType={initialViewType}
        />
      ),
      key,
    });
  }

  async function openAction({
    domain,
    context,
    model,
    views,
    title,
    target,
    initialViewType,
  }: {
    domain: any;
    context: any;
    model: string;
    views: Array<any>;
    title: string;
    target: string;
    initialViewType?: ViewType;
  }) {
    const key = uuidv4();

    if (target !== "current") {
      const formView = (await ConnectionProvider.getHandler().getView({
        model,
        type: "form",
        context: { ...rootContext, ...context },
      })) as FormView;

      (contentRootProvider.current as any).openActionModal({
        domain,
        model,
        formView,
        context: { ...rootContext, ...context },
      });
    } else {
      addNewTab({
        title,
        content: (
          <ActionView
            tabKey={key}
            title={title}
            views={views}
            model={model}
            context={{ ...rootContext, ...context }}
            domain={domain}
            setCanWeClose={registerViewCloseFn}
            initialViewType={initialViewType}
          />
        ),
        key,
      });
    }
  }

  return (
    <LocaleContextProvider lang={lang}>
      <TabManagerProvider
        openAction={openAction}
        openRelate={openRelate}
        openSpecificModelTab={openSpecificModelTab}
      >
        <ContentRootProvider
          ref={contentRootProvider}
          globalValues={globalValues}
        >
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
    </LocaleContextProvider>
  );
}

export default forwardRef(TabManager);
