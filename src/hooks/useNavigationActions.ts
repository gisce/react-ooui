import { createElement, useCallback } from "react";
import { ActionView, ConnectionProvider, FormView } from "..";
import { parseContext } from "@gisce/ooui";
import { ShortcutApi } from "@/ui/FavouriteButton";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { nanoid } from "nanoid";
import { useConfigContext } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { ViewType } from "@/types";

export const useNavigationActions = ({
  openActionModal,
}: {
  openActionModal: (payload: any) => void;
}) => {
  const { globalValues, rootContext, addTab } = useConfigContext();

  const parseAndEvalContextDomain = useCallback(
    async ({ context, values, fields, domain }: any) => {
      const parsedContext = parseContext({ context, values, fields });
      const parsedDomain = domain
        ? await ConnectionProvider.getHandler().evalDomain({
            domain,
            values,
            fields,
            context: { ...rootContext, ...parsedContext },
          })
        : [];

      return { parsedContext, parsedDomain };
    },
    [rootContext],
  );

  const finalizeViews = useCallback(
    async (views: any, model: string, parsedContext?: any) => {
      const finalViews = [];
      for (const viewArray of views) {
        const [id, viewType] = viewArray;
        if (!id && viewType !== "dashboard") {
          const { view_id } = await ConnectionProvider.getHandler().getView({
            model,
            type: viewType,
            id,
            context: { ...rootContext, ...parsedContext },
          });
          finalViews.push([view_id, viewType]);
        } else {
          finalViews.push(viewArray);
        }
      }
      return finalViews;
    },
    [rootContext],
  );

  const openAction = useCallback(
    async ({
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
    }: any) => {
      const key = nanoid();
      const formattedContext = { ...rootContext, ...context };

      if (target !== "current") {
        const formView = (await ConnectionProvider.getHandler().getView({
          model,
          type: "form",
          id: initialView.type === "form" ? initialView.id : undefined,
          context: formattedContext,
        })) as FormView;

        openActionModal({
          domain,
          model,
          formView,
          context: formattedContext,
          actionData: {
            action_id,
            action_type,
            res_id,
            view_id: formView.view_id,
          },
        });
      } else {
        const formattedInitialView = {
          ...initialView,
          id: Array.isArray(initialView.id)
            ? initialView.id[0]
            : initialView.id,
        };

        addTab({
          data: {
            id: key,
            title,
            action_id,
            action_type,
            view_id: formattedInitialView.id,
            res_id,
          },
          content: createElement(ActionView, {
            action_id,
            action_type,
            tabKey: key,
            title,
            views,
            model,
            context: formattedContext,
            domain,
            initialView: formattedInitialView,
            res_id,
            formDefaultValues: values,
            formForcedValues: forced_values,
            treeExpandable,
            limit,
          }),
        });
      }
    },
    [addTab, openActionModal, rootContext],
  );

  const retrieveAndProcessActionData = useCallback(
    async ({ action, initialViewType, domain = [] }: any) => {
      const dataForAction = await ConnectionProvider.getHandler().getActionData(
        { action, context: rootContext },
      );
      if (dataForAction.type === "ir.actions.wizard") {
        showErrorDialog("Action type not supported");
        return;
      }

      const { parsedContext, parsedDomain } = await parseAndEvalContextDomain({
        context: dataForAction.context,
        values: globalValues,
        fields: {},
        domain: dataForAction.domain,
      });

      const finalViews = await finalizeViews(
        dataForAction.views,
        dataForAction.res_model,
        parsedContext,
      );

      let initialView;
      if (initialViewType) {
        initialView = finalViews.find(([_, type]) => type === initialViewType);
      } else {
        initialView = finalViews[0];
      }

      return {
        ...dataForAction,
        domain: [...parsedDomain, ...domain],
        context: { ...rootContext, ...parsedContext },
        initialView: { id: initialView[0], type: initialView[1] },
        finalViews,
      };
    },
    [globalValues, parseAndEvalContextDomain, finalizeViews, rootContext],
  );

  const openRelate = useCallback(
    async ({ relateData, fields, values, action_id, action_type }: any) => {
      const { parsedContext, parsedDomain } = await parseAndEvalContextDomain({
        context: relateData.context,
        values: { ...values, ...globalValues },
        fields,
        domain: relateData.domain,
      });

      const initialView = {
        id: relateData.views[0][0],
        type: relateData.views[0][1],
      };

      openAction({
        domain: parsedDomain,
        context: parsedContext,
        model: relateData.res_model,
        views: relateData.views,
        title: relateData.string,
        target: relateData.target,
        initialView,
        action_id,
        action_type,
        limit: relateData.limit,
      });
    },
    [parseAndEvalContextDomain, globalValues, openAction],
  );

  const openShortcut = useCallback(
    async (shortcut: ShortcutApi) => {
      const action = `${shortcut.action_type},${shortcut.action_id}`;
      const { domain, context, initialView, finalViews, ...rest } =
        await retrieveAndProcessActionData({
          action,
          values: globalValues,
          res_id: shortcut.res_id,
          domain: [],
        });

      openAction({
        domain,
        context,
        initialView,
        views: finalViews,
        limit:
          shortcut.overrideUnsettedLimit && !rest.limit
            ? DEFAULT_SEARCH_LIMIT
            : rest.limit,
        ...rest,
      });
    },
    [retrieveAndProcessActionData, globalValues, openAction],
  );

  const retrieveAndOpenAction = useCallback(
    async ({
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
    }) => {
      await retrieveAndProcessActionData({
        action,
        values,
        forced_values,
        initialViewType,
        res_id,
        domain,
      }).then(openAction);
    },
    [retrieveAndProcessActionData, openAction],
  );

  const openDefaultActionForModel = useCallback(
    async ({
      model,
      values,
      forced_values,
      initialViewType,
      res_id,
      domain,
    }: any) => {
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
    },
    [retrieveAndOpenAction],
  );

  return {
    retrieveAndOpenAction,
    openRelate,
    openShortcut,
    openAction,
    openDefaultActionForModel,
  };
};
