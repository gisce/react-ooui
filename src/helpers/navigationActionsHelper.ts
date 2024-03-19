import { View, ViewType } from "@/types";
import { ConnectionProvider } from "..";
import { parseContext } from "@gisce/ooui";
import { Action } from "@/types/tab";

export async function getViewsAndInitialView({
  views,
  view_mode,
  model,
  context,
  view_id,
}: {
  views: any[];
  view_mode: string;
  model: string;
  context: any;
  view_id?: number;
}) {
  const retriedViewData = [];
  let initialView;

  if (views) {
    for (const view of views) {
      const viewData = await ConnectionProvider.getHandler().getView({
        model,
        type: view[1],
        id: view[0],
        context,
      });
      retriedViewData.push([viewData.view_id, view[1]]);
    }
  } else {
    const viewTypes = view_mode.split(",");
    for (const viewType of viewTypes) {
      const viewData = await ConnectionProvider.getHandler().getView({
        model,
        type: viewType as ViewType,
        context,
      });
      retriedViewData.push([viewData.view_id, viewType]);
    }
  }
  if (views && views.length > 0) {
    const [id, type] = views[0];
    initialView = {
      id,
      type,
    };
  } else if (!view_id) {
    const type = view_mode.split(",")[0];
    const [retrievedViewId] = retriedViewData.find(
      ([_, viewType]) => viewType === type,
    )!;
    initialView = { id: retrievedViewId, type };
  } else {
    initialView = {
      id: view_id,
      type: view_mode.split(",")[0],
    };
  }

  return { views: retriedViewData, initialView };
}

export const parseAndEvalContextDomain = async ({
  context,
  values,
  fields,
  domain,
  rootContext,
}: any) => {
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
};

const adjustViewsInfo = ({
  views,
  model,
  context,
  treeIsExpandable,
  action,
}: {
  views: View[];
  model: string;
  context: any;
  treeIsExpandable: boolean;
  action: Action;
}): View[] => {
  const formView = views.find((view) => {
    return view.type === "form";
  });

  return views.map((view) => {
    if (view.type === "dashboard") {
      return {
        type: "dashboard",
        id: context["active_id"],
        model,
        context,
        configAction: {
          action_id: action.id,
          action_type: action.type,
          name: action.title,
          res_id: context["active_id"],
          res_model: model!,
          view_id: formView?.view_id!,
          view_type: formView?.type!,
        },
      };
    } else if (view.type === "tree") {
      return {
        ...view,
        isExpandable: treeIsExpandable,
      };
    }
    return view;
  });
};

export const getAllViews = async ({
  views,
  model,
  context,
  treeIsExpandable,
  action,
}: {
  views: any;
  model: string;
  context: any;
  treeIsExpandable: boolean;
  action: Action;
}): Promise<View[]> => {
  const viewPromises = views.map(([id, type]: [number, ViewType]) => {
    if (type === "dashboard") {
      return Promise.resolve({
        success: true,
        view: { type: "dashboard", view_id: undefined },
      });
    } else {
      return ConnectionProvider.getHandler()
        .getView({
          model,
          type,
          id,
          context,
        })
        .then((view) => ({ success: true, view }))
        .catch((error) => ({ success: false, error }));
    }
  });

  const availableViewsResults = await Promise.all(viewPromises);

  const availableViews = availableViewsResults
    .filter((result) => result.success)
    .map((result) => result.view);

  return adjustViewsInfo({
    views: availableViews,
    model,
    context,
    treeIsExpandable,
    action,
  });
};
