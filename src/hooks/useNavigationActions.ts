import { useCallback } from "react";
import { ConnectionProvider, FormView } from "..";
import { ShortcutApi } from "@/ui/FavouriteButton";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { nanoid } from "nanoid";
import { useConfigContext } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { View, ViewType } from "@/types";
import {
  getAllViews,
  parseAndEvalContextDomain,
} from "@/helpers/navigationActionsHelper";
import { Tab, UpdateTabPayload } from "@/redux/slices/tabSlice";

export const useNavigationActions = ({
  openActionModal,
  addTab,
  updateTab,
}: {
  openActionModal: (payload: any) => void;
  addTab: (payload: Tab) => void;
  updateTab: ({ id, tab }: UpdateTabPayload) => void;
}) => {
  const { globalValues, rootContext } = useConfigContext();

  const openAction = useCallback(
    async ({
      domain,
      context,
      model,
      views,
      target,
      initialView,
      action_id,
      action_type,
      res_id,
      values,
      forced_values,
      treeExpandable = false,
      limit,
      action_title,
      tabKey,
    }: any) => {
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
        const key = nanoid();

        const formattedInitialView = {
          ...initialView,
          id: Array.isArray(initialView.id)
            ? initialView.id[0]
            : initialView.id,
        };

        if (tabKey) {
          updateTab({
            id: tabKey,
            tab: {
              isLoading: false,
              model,
              currentView: views.find(
                (view: View) => view.view_id === formattedInitialView.id,
              ),
              availableViews: views,
              context: formattedContext,
              domain,
              viewOptions: {
                form: {
                  defaultValues: values,
                  forcedValues: forced_values,
                  resourceId: res_id,
                },
                tree: {
                  expandable: treeExpandable,
                  limit,
                },
              },
            },
          });
        } else {
          addTab({
            id: key,
            action: {
              id: action_id,
              type: action_type,
              title: action_title,
            },
            model,
            currentView: views.find(
              (view: View) => view.view_id === formattedInitialView.id,
            ),
            availableViews: views,
            context: formattedContext,
            domain,
            viewOptions: {
              form: {
                defaultValues: values,
                forcedValues: forced_values,
                resourceId: res_id,
              },
              tree: {
                expandable: treeExpandable,
                limit,
              },
            },
          });
        }
      }
    },
    [addTab, openActionModal, rootContext, updateTab],
  );

  const retrieveAndProcessActionData = useCallback(
    async ({
      action,
      initialViewType,
      domain = [],
      values,
      forced_values,
      res_id,
    }: any) => {
      const dataForAction = await ConnectionProvider.getHandler().getActionData(
        { action, context: rootContext },
      );
      if (dataForAction.type === "ir.actions.wizard") {
        showErrorDialog("Action type not supported");
        return;
      }
      let tabKey;
      if (dataForAction.target === "current") {
        tabKey = nanoid();
        addTab({
          id: tabKey,
          isLoading: true,
          action: {
            id: dataForAction.id,
            type: dataForAction.type,
            title: dataForAction.name,
          },
        });
      }

      const { parsedContext, parsedDomain } = await parseAndEvalContextDomain({
        context: dataForAction.context,
        values: globalValues,
        fields: {},
        domain: dataForAction.domain,
        rootContext,
      });

      const finalViews = await getAllViews({
        action: {
          id: dataForAction.id,
          type: dataForAction.type,
          title: dataForAction.name,
        },
        views: dataForAction.views,
        model: dataForAction.res_model,
        context: { ...rootContext, ...parsedContext },
        treeIsExpandable: dataForAction.view_type === "tree", // This is the way that the backend has to set a tree in expandable mode
      });

      let initialView;
      if (initialViewType) {
        initialView = finalViews.find((view) => view.type === initialViewType);
      } else {
        initialView = finalViews[0];
      }

      return {
        ...dataForAction,
        action_title: dataForAction.name,
        action_id: dataForAction.id,
        action_type: dataForAction.type,
        target: dataForAction.target,
        model: dataForAction.res_model,
        domain: [...parsedDomain, ...domain],
        context: { ...rootContext, ...parsedContext },
        initialView: { id: initialView?.view_id, type: initialView?.type },
        views: finalViews,
        tabKey,
        res_id,
        values,
        forced_values,
      };
    },
    [addTab, globalValues, rootContext],
  );

  const openRelate = useCallback(
    async ({ relateData, fields, values, action_id, action_type }: any) => {
      let tabKey;
      if (relateData.target === "current") {
        tabKey = nanoid();
        addTab({
          id: tabKey,
          action: {
            id: action_id,
            type: action_type,
            title: relateData.string,
          },
          isLoading: true,
        });
      }
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

      const finalViews = await getAllViews({
        action: {
          id: action_id,
          type: action_type,
          title: relateData.string,
        },
        views: relateData.views,
        model: relateData.res_model,
        context: { ...rootContext, ...parsedContext },
        treeIsExpandable: relateData.view_type === "tree", // This is the way that the backend has to set a tree in expandable mode
      });

      openAction({
        domain: parsedDomain,
        context: parsedContext,
        model: relateData.res_model,
        views: finalViews,
        title: relateData.string,
        target: relateData.target,
        initialView,
        action_id,
        action_type,
        limit: relateData.limit,
        tabKey,
      });
    },
    [addTab, globalValues, openAction, rootContext],
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

      // ...dataForAction,
      // action_title: dataForAction.name,
      // action_id: dataForAction.id,
      // action_type: dataForAction.type,
      // target: dataForAction.target,
      // model: dataForAction.res_model,
      // domain: [...parsedDomain, ...domain],
      // context: { ...rootContext, ...parsedContext },
      // initialView: { id: initialView?.view_id, type: initialView?.type },
      // views: finalViews,
      // tabKey,

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
