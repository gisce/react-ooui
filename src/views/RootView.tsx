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
import ActionView, { View } from "./ActionView";
import { parseContext } from "@gisce/ooui";
import LocaleContextProvider from "@/context/LocaleContext";
import { tForLang } from "@/context/LocaleContext";
import { ShortcutApi } from "@/ui/FavouriteButton";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { ViewType } from "@/types";

type RootViewProps = {
  children: React.ReactNode;
  globalValues?: any;
  rootContext?: any;
  lang: string;
};

export type ActionInfo = {
  id: number;
  type: string;
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

  async function retrieveAndOpenAction({
    action,
    values,
    forced_values,
    initialViewType,
    res_id,
  }: {
    action: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
  }) {
    const dataForAction = await ConnectionProvider.getHandler().getActionData({
      action,
      context: rootContext,
    });

    if (dataForAction.type === "ir.actions.wizard") {
      showErrorDialog("Action type not supported");
      return;
    }

    const [action_type, action_id_string] = action.split(",");
    const action_id = parseInt(action_id_string);

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

    const finalViews = [];

    for (const viewArray of views) {
      const [id, viewType] = viewArray;

      if (!id) {
        if (viewType === "dashboard") {
          finalViews.push([undefined, "dashboard"]);
        } else {
          const { view_id } = await ConnectionProvider.getHandler().getView({
            model,
            type: viewType,
            id,
            context: { ...rootContext, ...parsedContext },
          });
          finalViews.push([view_id, viewType]);
        }
      } else {
        finalViews.push(viewArray);
      }
    }

    let initialView;

    if (initialViewType) {
      const [id, type] = finalViews.find(
        ([_, type]) => type === initialViewType
      );
      initialView = { id, type };
    } else {
      const [id, type] = finalViews[0];
      initialView = { id, type };
    }

    openAction({
      domain: parsedDomain,
      context: { ...rootContext, ...parsedContext },
      model,
      views: finalViews,
      title,
      target,
      initialView,
      action_type,
      action_id,
      values,
      forced_values,
      res_id,
    });
  }

  function addNewTab({
    title,
    content,
    key,
    action,
  }: {
    title: string;
    content: any;
    key: string;
    action?: ActionInfo;
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
        action,
      },
    ]);

    setActiveKey(key);
  }

  async function openRelate({
    relateData,
    fields,
    values,
    action_id,
    action_type,
  }: {
    relateData: any;
    fields: any;
    values: any;
    action_id: number;
    action_type: string;
  }) {
    const {
      res_model: model,
      context,
      domain,
      views,
      target,
      string: title,
    } = relateData;

    const [id, type] = views[0];
    const initialView = { id, type };

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
      initialView,
      action_id,
      action_type,
    });
  }

  async function openShortcut(shortcut: ShortcutApi) {
    const { action_id, action_type, res_id, view_id } = shortcut;
    const action = `${action_type},${action_id}`;

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

    const finalViews = [];

    for (const viewArray of views) {
      const [id, viewType] = viewArray;

      if (!id) {
        if (viewType === "dashboard") {
          finalViews.push([undefined, "dashboard"]);
        } else {
          const { view_id } = await ConnectionProvider.getHandler().getView({
            model,
            type: viewType,
            id,
            context: { ...rootContext, ...parsedContext },
          });
          finalViews.push([view_id, viewType]);
        }
      } else {
        finalViews.push(viewArray);
      }
    }

    let id, type;
    if (view_id === undefined || view_id === null) {
      const view = finalViews.find((view: any[]) => {
        return view[0] === undefined;
      });
      id = undefined;
      type = view[1];
    } else {
      [id, type] = finalViews.find((view: any[]) => {
        if (view[0] === undefined) {
          return false;
        }
        return view[0] === view_id;
      });
    }

    const initialView = { id, type };

    openAction({
      domain: parsedDomain,
      context: { ...rootContext, ...parsedContext },
      model,
      views: finalViews,
      title,
      target,
      initialView,
      action_id,
      action_type,
      res_id,
    });
  }

  async function openDefaultActionForModel({
    model,
    values,
    forced_values,
    initialViewType,
    res_id,
  }: {
    model: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
  }) {
    const actionString = await ConnectionProvider.getHandler().getActionStringForModel(
      model
    );
    await retrieveAndOpenAction({
      action: actionString,
      values,
      forced_values,
      initialViewType,
      res_id,
    });
  }

  async function openAction({
    domain,
    context,
    model,
    views,
    title,
    target,
    initialView,
    action_id,
    action_type,
    res_id,
    values,
    forced_values,
  }: {
    domain: any;
    context: any;
    model: string;
    views: Array<any>;
    title: string;
    target: string;
    initialView: View;
    action_id: number;
    action_type: string;
    res_id?: number | boolean;
    values?: any;
    forced_values?: any;
  }) {
    const key = uuidv4();

    if (target !== "current") {
      const formView = (await ConnectionProvider.getHandler().getView({
        model,
        type: "form",
        id: initialView.type === "form" ? initialView.id : undefined,
        context: { ...rootContext, ...context },
      })) as FormView;

      (contentRootProvider.current as any).openActionModal({
        domain,
        model,
        formView,
        context: { ...rootContext, ...context },
        actionData: {
          action_id,
          action_type,
          res_id,
          view_id: formView.view_id,
        },
      });
    } else {
      addNewTab({
        title,
        action: {
          id: action_id,
          type: action_type,
        },
        content: (
          <ActionView
            action_id={action_id}
            action_type={action_type}
            tabKey={key}
            title={title}
            views={views}
            model={model}
            context={{ ...rootContext, ...context }}
            domain={domain}
            setCanWeClose={registerViewCloseFn}
            initialView={initialView}
            res_id={res_id}
            formDefaultValues={values}
            formForcedValues={forced_values}
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
        openDefaultActionForModel={openDefaultActionForModel}
        tabs={tabs}
        activeKey={activeKey}
        onRemoveTab={async (key: string) => {
          const canWeCloseFn = tabViewsCloseFunctions.current.get(
            key as string
          );
          const canWeClose = await canWeCloseFn?.();

          if (canWeClose || activeKey === "welcome") {
            remove(key as string);
          }
        }}
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
