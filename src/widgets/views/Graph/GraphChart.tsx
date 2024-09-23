import { useGraphData } from "./useGraphData";
import { Alert } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import useDeepCompareEffect from "use-deep-compare-effect";
import { GraphChartComp } from "./GraphChartComp";
import { CenteredSpinner } from "@/ui/CenteredSpinner";
import { GraphChart as GraphChartOoui } from "@gisce/ooui";

export type GraphChartProps = {
  model: string;
  domain: any;
  context: any;
  ooui: GraphChartOoui;
  limit?: number;
  manualIds?: number[];
  fixedHeight?: boolean;
};

export const GraphChart = ({
  ooui,
  model,
  domain,
  context,
  limit,
  manualIds,
  fixedHeight,
}: GraphChartProps) => {
  const { t } = useLocale();

  const { error, loading, values, type, evaluatedEntries, fetchData } =
    useGraphData({
      model,
      ooui,
      limit,
      domain,
      context,
      uninformedString: t("uninformed"),
      manualIds,
    });

  useDeepCompareEffect(() => {
    fetchData();
  }, [ooui, model, limit, context, domain]);

  if (loading || !values) {
    return <CenteredSpinner />;
  }

  const { data, isGroup, isStack, yAxisOpts } = values;

  if (error) {
    return <Alert message={error} type="error" banner />;
  }

  return (
    <GraphChartComp
      type={type}
      data={data}
      isGroup={isGroup}
      isStack={isStack}
      numItems={evaluatedEntries!.length}
      yAxisOpts={yAxisOpts}
      fixedHeight={fixedHeight}
    />
  );
};
