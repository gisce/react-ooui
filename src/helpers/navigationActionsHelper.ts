import { ViewType } from "@/types";
import { ConnectionProvider } from "..";
import { parseContext } from "@gisce/ooui";

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

export const finalizeViews = async (
  views: any,
  model: string,
  parsedContext: any,
  rootContext: any,
) => {
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
};
