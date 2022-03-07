import React, { useEffect, useState } from "react";
import ActionView from "@/views/ActionView";
import { DashboardProps } from "./Dashboard.types";
import { fetchAction } from "./dashboardHelper";
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import { Graph } from "../Graph/Graph";
import { DashboardGrid, DashboardGridItem } from "../DashboardGrid";
import ConnectionProvider from "@/ConnectionProvider";
import { FormView } from "@/types";
import { One2manyItem } from "@/index";
import { readObjectValues } from "@/helpers/one2manyHelper";

export function Dashboard(props: DashboardProps) {
  const { model, context = {}, id } = props;
  const [dashboardItems, setDashboardItems] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, [model, id, context]);

  async function fetchData() {
    const view = await fetchView();
    const values = await fetchValues(view);
    const model = view.fields["line_ids"].relation;
    const items: One2manyItem[] = values["line_ids"].items;

    const dashboardItems: One2manyItem[] = await fetchDashboardItems({
      items,
      model,
      context,
    });

    fetchActions(dashboardItems);
  }

  async function fetchView() {
    return await ConnectionProvider.getHandler().getView({
      model,
      type: "form",
      context,
    });
  }

  async function fetchDashboardItems({
    items,
    model,
    context,
  }: {
    items: One2manyItem[];
    model: string;
    context: any;
  }) {
    const modelFields = (
      await ConnectionProvider.getHandler().getView({
        model,
        type: "form",
        context,
      })
    ).fields;

    return await readObjectValues({
      treeFields: modelFields,
      formFields: modelFields,
      model,
      items,
      context,
    });
  }

  async function fetchValues(view: FormView) {
    return (
      await ConnectionProvider.getHandler().readObjects({
        arch: view.arch,
        model,
        ids: [id],
        fields: view.fields,
        context,
      })
    )[0];
  }

  async function fetchActions(items: One2manyItem[]) {
    const itemsWithActions = [];

    for (const dashboardItem of items) {
      const { values } = dashboardItem;
      if (values.action_id && values.action_id.length > 0) {
        const actionId = parseInt(values.action_id[0], 10);
        const actionData = await fetchAction({
          actionId,
          rootContext: context,
        });
        itemsWithActions.push({ ...dashboardItem.values, actionData });
      }
    }
    setDashboardItems(itemsWithActions);
  }

  return (
    <DashboardGrid>
      {dashboardItems.map((item, idx) => {
        const { actionData, position } = item;

        const {
          actionId,
          actionType,
          key,
          title,
          views,
          model,
          context,
          domain,
          initialView,
        } = actionData as any;

        let parmsParsed = {};

        try {
          parmsParsed = JSON.parse(position.replace(/'/g, '"'));
        } catch (err) {
          // console.error(`Error parsing parms: ${action.position}`);
          parmsParsed = { x: idx * 2, y: 0, w: 2, h: 3 };
        }

        let childContent = null;

        if (initialView?.type === "graph") {
          childContent = (
            <Graph
              title={title}
              view_id={
                views.filter(
                  (view: [number, string]) => view[1] === "graph"
                )[0][0]
              }
              model={model}
              context={context}
              domain={domain}
            />
          );
        } else if (initialView !== undefined) {
          childContent = (
            <ActionView
              action_id={actionId}
              action_type={actionType}
              tabKey={key}
              title={title}
              views={views}
              model={model}
              context={context}
              domain={domain}
              setCanWeClose={() => {}}
              initialView={initialView}
            />
          );
        }

        return (
          <DashboardGridItem
            key={actionId}
            id={actionId}
            title={title}
            parms={parmsParsed}
          >
            {childContent}
          </DashboardGridItem>
        );
      })}
    </DashboardGrid>
  );
}
