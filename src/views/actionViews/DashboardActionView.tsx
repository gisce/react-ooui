import DashboardActionBar from "@/actionbar/DashboardActionBar";
import DashboardActionProvider from "@/context/DashboardActionContext";
import TitleHeader from "@/ui/TitleHeader";
import Dashboard from "@/widgets/views/Dashboard/Dashboard";
import { useRef } from "react";
import { DashboardProps } from "@/types";
import { useNavigation } from "@/context/RootContext";

export type DashboardActionViewProps = {
  dashboardData: DashboardProps;
  visible: boolean;
};

export const DashboardActionView = (props: DashboardActionViewProps) => {
  const { dashboardData, visible } = props;
  const dashboardRef = useRef();

  const { openShortcut } = useNavigation();

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
      <TitleHeader title={dashboardData.title!}>
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
