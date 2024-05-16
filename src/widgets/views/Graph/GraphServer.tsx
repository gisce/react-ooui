import { useEffect, useContext, forwardRef, useImperativeHandle } from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { Alert } from "antd";
import {
  GraphResponseChart,
  GraphResponseIndicator,
  useServerGraphData,
} from "./useServerGraphData";
import { GraphIndicatorComp } from "./GraphIndicatorComp";
import { isNumber } from "./GraphDefaults";
import { GraphChartComp } from "./GraphChartComp";
import { CenteredSpinner } from "@/ui/CenteredSpinner";

export type GraphProps = {
  view_id: number;
  model: string;
  domain: any;
  context: any;
  manualIds?: number[];
};

const GraphComp = (props: GraphProps, ref: any) => {
  const { view_id, model, context, domain, manualIds } = props;
  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  const { setGraphIsLoading = undefined } = actionViewContext || {};

  const { error, loading, graphData, fetchData } = useServerGraphData({
    view_id,
    model,
    domain,
    context,
    manualIds,
  });

  useEffect(() => {
    setGraphIsLoading?.(loading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useImperativeHandle(ref, () => ({
    refresh: () => {
      fetchData();
    },
  }));

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view_id]);

  if (loading || !graphData) {
    return <CenteredSpinner />;
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  switch (graphData.type) {
    case "indicatorField":
    case "indicator": {
      const { value, total, percent, icon, color, suffix } =
        graphData as GraphResponseIndicator;

      return (
        <GraphIndicatorComp
          value={value}
          totalValue={total}
          percent={percent}
          color={color}
          icon={icon}
          suffix={suffix}
          showPercent={isNumber(percent)}
        />
      );
    }
    case "line":
    case "bar":
    case "pie": {
      const chart = graphData as GraphResponseChart;
      return (
        <GraphChartComp
          type={chart.type}
          data={chart.data}
          isGroup={chart.isGroup}
          isStack={chart.isStack}
          numItems={chart.num_items}
        />
      );
    }
    default: {
      return <>{`Graph ${graphData.type} not implemented`}</>;
    }
  }
};

export const GraphServer = forwardRef(GraphComp);
