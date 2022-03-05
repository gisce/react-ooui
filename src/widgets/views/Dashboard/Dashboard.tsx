import React, { useEffect, useState } from "react";
import { Dashboard as DashboardOoui } from "@gisce/ooui";
import ActionView from "@/views/ActionView";
import { DashboardProps } from "./Dashboard.types";
import { fetchAction } from "./dashboardHelper";
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";
import { Graph } from "../Graph/Graph";
import { DashboardGrid, DashboardGridItem } from "../DashboardGrid";

export function Dashboard(props: DashboardProps) {
  const { arch, context = {} } = props;
  const [dashboardOoui, setDashboardOoui] = useState<DashboardOoui>();
  const [actionsData, setActionsData] = useState<any[]>([]);

  async function fetchData() {
    const fetchedActionsPromises = [];
    for (const actionOoui of dashboardOoui!.items) {
      fetchedActionsPromises.push(fetchAction({ actionOoui }));
    }
    const fetchedActions = await Promise.all(fetchedActionsPromises);
    setActionsData(fetchedActions);
  }

  useEffect(() => {
    // We parse the XML and create the dashboard ooui object
    const parsedDashboardOoui = new DashboardOoui(arch);
    setDashboardOoui(parsedDashboardOoui);
  }, [arch]);

  useEffect(() => {
    if (dashboardOoui) {
      // We should retrieve every action data
      fetchData();
    }
  }, [dashboardOoui]);

  return (
    <DashboardGrid>
      {actionsData.map((action, idx) => {
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
        } = action as any;

        let parmsParsed = {};

        try {
          parmsParsed = JSON.parse((action as any).position.replace(/'/g, '"'));
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
