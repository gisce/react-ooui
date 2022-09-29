import GraphActionBar from "@/actionbar/GraphActionBar";
import TitleHeader from "@/ui/TitleHeader";
import { Graph } from "@/widgets/views/Graph/Graph";
import React, { useContext, useRef } from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { FormView, TreeView } from "@/types";

export type GraphActionViewProps = {
  viewData: any;
  visible: boolean;
  model: string;
  context: any;
  domain: any;
  formView: FormView;
  treeView: TreeView;
};

export const GraphActionView = (props: GraphActionViewProps) => {
  const { viewData, visible, model, context, domain, formView, treeView } =
    props;

  const { searchParams } = useContext(
    ActionViewContext
  ) as ActionViewContextType;

  if (!visible) {
    return null;
  }

  if (!viewData) {
    return null;
  }

  const graphRef = useRef();

  return (
    <>
      <TitleHeader title={viewData.name}>
        <GraphActionBar
          refreshGraph={() => {
            (graphRef.current as any).refresh();
          }}
        />
      </TitleHeader>
      <Graph
        ref={graphRef}
        view_id={viewData.view_id}
        model={model}
        context={context}
        domain={searchParams || domain}
      />
    </>
  );
};
