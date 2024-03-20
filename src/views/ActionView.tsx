import { forwardRef } from "react";

import { FormView, InitialViewData, TreeView, View } from "@/types/index";

import ActionViewProvider from "@/context/ActionViewContext";
import { FormActionView } from "./actionViews/FormActionView";
import { TreeActionView } from "./actionViews/TreeActionView";
import { useNavigation } from "@/context/RootContext";

type Props = {
  domain: any;
  context: any;
  model: string;
  availableViews: View[];
  title: string;
  tabKey: string;
  initialView: InitialViewData;
  formDefaultValues?: any;
  formForcedValues?: any;
  res_id?: number | boolean;
  action_id: number;
  action_type: string;
  limit?: number;
};

function ActionView(props: Props, ref: any) {
  const { tabKey } = props;
  const { getTab } = useNavigation();
  const tab = getTab(tabKey);

  function content() {
    const availableViews = tab?.availableViews;
    return availableViews?.map((view) => {
      switch (view.type) {
        case "form": {
          return (
            <FormActionView
              key={`${view.type}-${view.view_id}`}
              formView={view as FormView}
            />
          );
        }
        case "tree": {
          return (
            <TreeActionView
              key={`${view.type}-${view.view_id}`}
              formView={
                availableViews.find((v) => v.type === "form") as FormView
              }
              treeView={view as TreeView}
            />
          );
        }
        // case "graph": {
        //   return (
        //     <GraphActionView
        //       key={`${view.type}-${view.view_id}`}
        //       viewData={view as GraphView}
        //       treeView={
        //         availableViews.find((v) => v.type === "tree") as TreeView
        //       }
        //       formView={
        //         availableViews.find((v) => v.type === "form") as FormView
        //       }
        //     />
        //   );
        // }
        // case "dashboard": {
        //   return (
        //     <DashboardActionView
        //       key={`${view.type}-${view.view_id}`}
        //       dashboardData={view as DashboardView}
        //     />
        //   );
        // }
        default: {
          return null;
        }
      }
    });
  }

  if (!tab) {
    return null;
  }

  return <ActionViewProvider tab={tab}>{content()}</ActionViewProvider>;
}

export default forwardRef(ActionView);
