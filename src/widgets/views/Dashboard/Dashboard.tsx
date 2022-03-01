import React, { useEffect, useState } from "react";
import { Dashboard as DashboardOoui } from "@gisce/ooui";
import {
  Dashboard as DashboardFmg,
  DashboardItem as DashboardFmgItem,
} from "@gisce/react-formiga-components";
import Title from "antd/lib/typography/Title";
import ActionView from "@/views/ActionView";
import { DashboardProps } from "./Dashboard.types";
import { fetchAction } from "./dashboardHelper";
import "@gisce/react-formiga-components/build/index.css";

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
    <DashboardFmg>
      {actionsData.map((action) => {
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
        } = action;

        let parmsParsed = {};

        try {
          parmsParsed = JSON.parse(action.position.replace(/'/g, '"'));
        } catch (err) {
          // console.error(`Error parsing parms: ${action.position}`);
          parmsParsed = { x: 0, y: 0, w: 4, h: 4 };
        }

        return (
          <DashboardFmgItem
            key={action.action_id}
            id={action.action_id}
            title={action.title}
            parms={parmsParsed}
          >
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
          </DashboardFmgItem>
        );
      })}
    </DashboardFmg>
  );
}
