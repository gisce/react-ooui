import { useGraphData } from "./useGraphData";
import { Alert, Spin } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import useDeepCompareEffect from "use-deep-compare-effect";
import { GraphChartComp } from "./GraphChartComp";

export type GraphChartProps = {
  model: string;
  domain: any;
  context: any;
  xml: string;
  limit?: number;
  manualIds?: number[];
};

export const GraphChart = (props: GraphChartProps) => {
  const { model, domain, context, xml, limit, manualIds } = props;
  const { t } = useLocale();

  const { error, loading, values, type, evaluatedEntries, fetchData } =
    useGraphData({
      model,
      xml,
      limit,
      domain,
      context,
      uninformedString: t("uninformed"),
      manualIds,
    });

  useDeepCompareEffect(() => {
    fetchData();
  }, [xml, model, limit, context, domain]);

  if (loading || !values) {
    return <Spin />;
  }

  const { data, isGroup, isStack } = values;

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
    />
  );
};
