import DashboardActionBar from "@/actionbar/DashboardActionBar";
import DashboardActionProvider from "@/context/DashboardActionContext";
import TitleHeader from "@/ui/TitleHeader";
import Dashboard from "@/widgets/views/Dashboard/Dashboard";
import { useContext, useRef, CSSProperties } from "react";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { DashboardProps } from "@/types";

const CONTENT_CONTAINER_STYLE: CSSProperties = {
  height: "calc(100vh - 80px - 102px)",
  overflow: "auto",
};

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
      <div style={CONTENT_CONTAINER_STYLE}>
        <Dashboard
          ref={dashboardRef}
          model={dashboardData!.model}
          id={dashboardData!.id}
          context={dashboardData?.context}
          configAction={dashboardData?.configAction}
        />
      </div>
    </DashboardActionProvider>
  );
};
