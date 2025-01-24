import {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  ReactNode,
} from "react";
import { ConnectionProvider, ContentRootProvider, FormView } from "..";
import Welcome from "./Welcome";
import TabManagerProvider from "@/context/TabManagerContext";
import ActionView from "./ActionView";
import { parseContext } from "@gisce/ooui";
import { ShortcutApi } from "@/ui/FavouriteButton";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { ActionInfo, Tab, ViewType } from "@/types";
import { transformPlainMany2Ones } from "@/helpers/formHelper";
import { nanoid } from "nanoid";
import { useLocale } from "@gisce/react-formiga-components";
import { useConfigContext } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { filterAllowedValues } from "@/helpers/shareUrlHelper";

type RootViewProps = {
  children: ReactNode;
};

function RootView(props: RootViewProps, ref: any) {
  const { children } = props;
  const [activeKey, setActiveKey] = useState<string>("welcome");
  const { t } = useLocale();
  const { globalValues, rootContext } = useConfigContext();

  const [tabs, setTabs] = useState<Tab[]>([
    {
      title: t("welcome"),
      key: "welcome",
      closable: true,
      content: <Welcome />,
      action: null,
    },
  ]);
  const tabViewsCloseFunctions = useRef(new Map<string, any>());
  const contentRootProvider = useRef();

  useImperativeHandle(ref, () => ({
    retrieveAndOpenAction,
    openShortcut,
    handleOpenActionUrl,
    handleOpenActionResourceUrl,
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

  async function handleOpenActionUrl(action: ActionInfo) {
    const { actionRawData, res_id, initialView } = action;

    const fields = await ConnectionProvider.getHandler().getFields({
      model: action.model,
      context: rootContext,
    });

    let values: Record<string, any> = filterAllowedValues(
      actionRawData?.values,
    );

    const finalIdToRead: number | undefined =
      res_id || values.active_id || values.id;

    if (finalIdToRead) {
      const readObjects = await ConnectionProvider.getHandler().readObjects({
        model: action.model,
        context: rootContext,
        ids: [finalIdToRead],
      });
      values = { ...values, ...readObjects[0] };
    }

    let parsedContext;
    if (
      actionRawData?.context &&
      typeof actionRawData.context === "object" &&
      actionRawData.context !== null
    ) {
      parsedContext = actionRawData;
    } else if (actionRawData && actionRawData.context) {
      parsedContext =
        actionRawData &&
        parseContext({
          context: actionRawData.context,
          fields,
          values: { ...globalValues, ...(values || {}) },
        });
    } else {
      parsedContext = {};
    }

    const parsedDomain = await (async () => {
      try {
        if (
          actionRawData?.domain &&
          Array.isArray(actionRawData.domain) &&
          actionRawData.domain.length > 0
        ) {
          return actionRawData.domain;
        } else if (
          actionRawData &&
          actionRawData.domain &&
          !Array.isArray(actionRawData.domain)
        ) {
          return await ConnectionProvider.getHandler().evalDomain({
            domain: actionRawData.domain,
            values: { ...(values || {}), ...globalValues },
            context: { ...rootContext, ...parsedContext },
            fields,
          });
        }
        return [];
      } catch (err) {
        console.error(err);
        return [];
      }
    })();

    openAction({
      ...action,
      context: { ...rootContext, ...parsedContext },
      domain: parsedDomain,
      actionRawData: {
        ...actionRawData,
        values,
        fields,
      },
    });
  }

  async function handleOpenActionResourceUrl({
    model,
    view_id,
    res_id,
  }: {
    model: string;
    res_id: number;
    view_id?: number;
  }) {
    const view = await ConnectionProvider.getHandler().getView({
      model,
      id: view_id || undefined,
      type: "form",
      context: rootContext,
    });

    return await openAction({
      action_id: -1,
      action_type: "ir.actions.act_window",
      model,
      views: [[view.view_id, "form"]],
      context: rootContext,
      domain: [],
      title: view.title || model,
      target: "current",
      initialView: { id: view.view_id, type: "form" },
      res_id,
    });
  }

  async function retrieveAndOpenAction({
    action,
    values,
    forced_values,
    initialViewType,
    res_id,
    domain = [],
  }: {
    action: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
    domain?: any;
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

    const rawContext = dataForAction.context;
    const parsedContext = parseContext({
      context: rawContext,
      values: globalValues,
    });

    const rawDomain = dataForAction.domain;

    const parsedDomain = await (async () => {
      try {
        if (rawDomain) {
          return await ConnectionProvider.getHandler().evalDomain({
            domain: rawDomain,
            values: globalValues,
            context: { ...rootContext, ...parsedContext },
          });
        }
        return [];
      } catch (err) {
        console.error(err);
        return [];
      }
    })();

    const {
      res_model: model,
      views,
      name: title,
      target,
      view_type,
      limit,
    } = dataForAction;

    const treeExpandable = view_type === "tree";

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
        ([_, type]) => type === initialViewType,
      );
      initialView = { id, type };
    } else {
      const [id, type] = finalViews[0];
      initialView = { id, type };
    }

    openAction({
      domain: [...parsedDomain, ...domain],
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
      treeExpandable,
      limit,
      actionRawData: {
        context: rawContext,
        domain: rawDomain,
      },
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
    action: ActionInfo;
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
      limit,
    } = relateData;

    const [id, type] = views[0];
    const initialView = { id, type };
    const rawContext = context;

    const parsedContext = parseContext({
      context: rawContext,
      values: { ...values, ...globalValues },
    });

    const rawDomain = domain;

    const parsedDomain = domain
      ? await ConnectionProvider.getHandler().evalDomain({
          domain,
          values: transformPlainMany2Ones({
            fields,
            values: { ...values, ...globalValues },
          }),
          fields,
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
      limit,
      actionRawData: {
        context: rawContext,
        domain: rawDomain,
        fields,
        values,
      },
    });
  }

  async function openShortcut(shortcut: ShortcutApi) {
    const {
      action_id,
      action_type,
      res_id,
      view_id,
      overrideUnsettedLimit = false,
      values = {},
      domain,
    } = shortcut;
    const action = `${action_type},${action_id}`;

    const dataForAction = await ConnectionProvider.getHandler().getActionData({
      action,
      context: rootContext,
    });

    const rawContext = dataForAction.context;

    const parsedContext = parseContext({
      context: rawContext,
      values: { ...globalValues, ...values },
      fields: {},
    });

    let parsedDomain = [];

    const rawDomain =
      domain && domain.length > 0 ? domain : dataForAction.domain;

    if (domain?.length > 0) {
      parsedDomain = domain;
    } else if (dataForAction.domain) {
      parsedDomain = await ConnectionProvider.getHandler().evalDomain({
        domain: dataForAction.domain,
        values: { ...globalValues, ...values },
        context: { ...rootContext, ...parsedContext },
      });
    }

    const {
      res_model: model,
      views,
      name: title,
      target,
      view_type,
      limit,
    } = dataForAction;
    const treeExpandable = view_type === "tree";

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
      treeExpandable,
      limit:
        overrideUnsettedLimit && (limit === 0 || limit === false)
          ? DEFAULT_SEARCH_LIMIT
          : limit,
      actionRawData: {
        context: rawContext,
        domain: rawDomain,
        values,
      },
    });
  }

  async function openDefaultActionForModel({
    model,
    values,
    forced_values,
    initialViewType,
    res_id,
    domain,
  }: {
    model: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
    domain?: any;
  }) {
    const actionString =
      await ConnectionProvider.getHandler().getActionStringForModel(model);
    await retrieveAndOpenAction({
      action: actionString,
      values,
      forced_values,
      initialViewType,
      res_id,
      domain,
    });
  }

  async function openAction(parms: ActionInfo) {
    const {
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
      treeExpandable = false,
      limit,
      searchParams,
    } = parms;

    const key = nanoid();

    if (target !== "current" && target !== undefined) {
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
      const formattedInitialView =
        initialView && Array.isArray(initialView.id)
          ? { ...initialView, id: initialView.id[0] }
          : initialView;

      addNewTab({
        title,
        content: (
          <ActionView
            action_id={action_id}
            action_type={action_type}
            tabKey={key}
            title={title}
            views={views}
            model={model}
            context={{ ...context, ...rootContext }}
            domain={domain}
            setCanWeClose={registerViewCloseFn}
            initialView={formattedInitialView}
            res_id={res_id}
            formDefaultValues={values}
            formForcedValues={forced_values}
            treeExpandable={treeExpandable}
            limit={limit}
            initialSearchParams={searchParams}
          />
        ),
        key,
        action: parms,
      });
    }
  }

  return (
    <TabManagerProvider
      openShortcut={openShortcut}
      openAction={openAction}
      openRelate={openRelate}
      openDefaultActionForModel={openDefaultActionForModel}
      tabs={tabs}
      activeKey={activeKey}
      onRemoveTab={async (key: string) => {
        const canWeCloseFn = tabViewsCloseFunctions.current.get(key as string);
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
  );
}

export default forwardRef(RootView);
