import DashboardActionBar from "@/actionbar/DashboardActionBar";
import DashboardActionProvider from "@/context/DashboardActionContext";
import TitleHeader from "@/ui/TitleHeader";
import Dashboard from "@/widgets/views/Dashboard/Dashboard";
import React, { useContext, useRef } from "react";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { DashboardProps } from "@/types";

export type DashboardActionViewProps = {
  dashboardData: DashboardProps;
  visible: boolean;
};

export const DashboardActionView = (props: DashboardActionViewProps) => {
  const { dashboardData, visible } = props;
  const dashboardRef = useRef();
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { openShortcut } = tabManagerContext || {};

  if (!dashboardData) {
    return null;
  }

  if (!visible) {
    return null;
  }

  return (
    <DashboardActionProvider
      dashboardRef={dashboardRef}
      openAction={(action) => {
        openShortcut(action!);
      }}
    >
      <TitleHeader>
        <DashboardActionBar />
      </TitleHeader>
      <Dashboard
        ref={dashboardRef}
        model={dashboardData!.model}
        id={dashboardData!.id}
        context={dashboardData?.context}
        configAction={dashboardData?.configAction}
      />
    </DashboardActionProvider>
  );
};
