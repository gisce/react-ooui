import GraphActionBar from "@/actionbar/GraphActionBar";
import TitleHeader from "@/ui/TitleHeader";
import { Graph } from "@/widgets/views/Graph/Graph";
import React from "react";

export type GraphActionViewProps = {
  viewData: any;
  visible: boolean;
  model: string;
  context: any;
  domain: any;
};

export const GraphActionView = (props: GraphActionViewProps) => {
  const { viewData, visible, model, context, domain } = props;
  if (!viewData) {
    return null;
  }

  return (
    <div style={!visible ? { display: "none" } : {}}>
      <TitleHeader title={viewData.name}>
        <GraphActionBar />
      </TitleHeader>

      <Graph
        view_id={viewData.view_id}
        model={model}
        context={context}
        domain={domain}
      />
    </div>
  );
};
