import ConnectionProvider from "@/ConnectionProvider";
import { Action as ActionOoui, parseContext } from "@gisce/ooui";
import { v4 as uuidv4 } from "uuid";

export async function fetchAction({
  actionOoui,
  rootContext = {},
  globalValues = {},
}: {
  actionOoui: ActionOoui;
  rootContext?: any;
  globalValues?: any;
}): Promise<any> {
  const actionType = "ir.actions.act_window";
  const actionId = parseInt(actionOoui.name!, 10);
  const action = `${actionType},${actionId}`;

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

  const { res_model: model, views, name: title } = dataForAction;

  const finalViews = [];

  for (const viewArray of views) {
    const [id, viewType] = viewArray;

    if (!id) {
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

  const [id, type] = finalViews[0];
  const initialView = { id, type };

  return {
    parms: actionOoui.parms,
    title,
    actionId,
    actionType,
    key: uuidv4(),
    views,
    model,
    context: { ...rootContext, ...parsedContext },
    domain: parsedDomain,
    initialView,
  };
}
