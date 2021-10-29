import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { ConnectionProvider, ContentRootProvider, FormView } from "..";
import { v4 as uuidv4 } from "uuid";
import Welcome from "./Welcome";
import TabManagerProvider from "@/context/TabManagerContext";
import ActionView from "./ActionView";
import { parseContext } from "ooui";
import { ViewType } from "@/types";
import LocaleContextProvider from "@/context/LocaleContext";
import { tForLang } from "@/context/LocaleContext";
import { Shortcut } from "@/ui/FavouriteButton";

type RootViewProps = {
  children: React.ReactNode;
  globalValues?: any;
  rootContext?: any;
  lang: string;
};

function RootView(props: RootViewProps, ref: any) {
  const { children, globalValues = {}, rootContext = {}, lang } = props;
  const [activeKey, setActiveKey] = useState<string>("welcome");

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
    openShortcut,
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
    const parsedContext = parseContext({
      context: dataForAction.context,
      values: globalValues,
      fields: {},
    });

    const parsedDomain = dataForAction.domain
      ? await ConnectionProvider.getHandler().evalDomain({
          domain: dataForAction.domain,
          values: globalValues,
          context: { ...rootContext, ...parsedContext },
        })
      : [];

    const { res_model: model, views, name: title, target } = dataForAction;

    const initialViewType = views[0][1];

    openAction({
      domain: parsedDomain,
      context: { ...rootContext, ...parsedContext },
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

  async function openRelate({
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

    const initialViewType = views[0][1];

    const parsedContext = parseContext({
      context,
      values: { ...values, ...globalValues },
      fields,
    });

    const parsedDomain = domain
      ? await ConnectionProvider.getHandler().evalDomain({
          domain: domain,
          values: { ...values, ...globalValues },
          context: { ...rootContext, ...parsedContext },
        })
      : [];

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

  async function openShortcut(shortcut: Shortcut) {
    const { resource, res_id, view_id } = shortcut;

    if (view_id) {
    } else {
      retrieveAndOpenAction(`${resource},${res_id}`);
    }
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
        openShortcut={openShortcut}
        openAction={openAction}
        openRelate={openRelate}
        openSpecificModelTab={openSpecificModelTab}
        tabs={tabs}
        activeKey={activeKey}
        onRemoveTab={remove}
        onChangeTab={(key: string) => {
          setActiveKey(key);
        }}
      >
        <ContentRootProvider
          ref={contentRootProvider}
          globalValues={globalValues}
        >
          {children}
        </ContentRootProvider>
      </TabManagerProvider>
    </LocaleContextProvider>
  );
}

export default forwardRef(RootView);
