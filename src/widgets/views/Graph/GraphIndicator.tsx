import { useState, useEffect } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { Alert } from "antd";
import { Operator, graphProcessor } from "@gisce/ooui";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { GraphIndicatorComp } from "./GraphIndicatorComp";
import { CenteredSpinner } from "@/ui/CenteredSpinner";

const { getValueForOperator } = graphProcessor;

export type GraphInidicatorProps = {
  model: string;
  domain: any;
  context: any;
  colorCondition?: string | null;
  totalDomain?: string;
  showPercent?: boolean;
  icon?: string;
  suffix?: string;
  field?: string;
  operator?: Operator;
  manualIds?: number[];
};

export const GraphIndicator = (props: GraphInidicatorProps) => {
  const {
    model,
    domain,
    context,
    colorCondition,
    totalDomain,
    showPercent = false,
    icon: iconProps,
    suffix,
    field,
    operator,
    manualIds,
  } = props;
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<number>();
  const [percent, setPercent] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();
  const [color, setColor] = useState<string>();
  const [icon, setIcon] = useState<string>();
  const [error, setError] = useState<string>();

  const [searchAllIds] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );
  const [readObjects] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );
  const [searchCount] = useNetworkRequest(
    ConnectionProvider.getHandler().searchCount,
  );
  const [evalDomain] = useNetworkRequest(
    ConnectionProvider.getHandler().evalDomain,
  );
  const [parseCondition] = useNetworkRequest(
    ConnectionProvider.getHandler().parseCondition,
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model, colorCondition]);

  async function fetchValue({
    domain,
    isTotal,
  }: {
    domain: any;
    isTotal: boolean;
  }) {
    if (isTotal) {
      return await fetchTotalValue({ domain });
    }

    if (field && operator) {
      const resultIds =
        manualIds ||
        (await searchAllIds({
          params: domain,
          model,
          context,
        }));

      const results = await readObjects({
        model,
        ids: resultIds,
        fieldsToRetrieve: [field],
        context,
      });

      return getValueForOperator({
        values: results.map((r: any) => r[field]),
        operator,
      });
    } else {
      return manualIds
        ? manualIds.length
        : await searchCount({
            model,
            params: domain,
            context,
          });
    }
  }

  async function fetchTotalValue({ domain }: { domain: any }) {
    if (field && operator) {
      const resultIds = await searchAllIds({
        params: domain,
        model,
        context,
      });

      const results = await readObjects({
        model,
        ids: resultIds,
        fieldsToRetrieve: [field],
        context,
      });

      return getValueForOperator({
        values: results.map((r: any) => r[field]),
        operator,
      });
    } else {
      return await searchCount({
        model,
        params: domain,
        context,
      });
    }
  }
  async function fetchData() {
    setLoading(true);
    setError(undefined);
    let totalRetrievedValue;
    let percent;

    try {
      const retrievedValue = await fetchValue({ domain, isTotal: false });

      setValue(retrievedValue);

      if (totalDomain) {
        const parsedDomain = await evalDomain({
          domain: totalDomain,
          values: {},
          context,
        });
        totalRetrievedValue = await fetchValue({
          domain: parsedDomain,
          isTotal: true,
        });

        setTotalValue(totalRetrievedValue);
      }

      if (totalRetrievedValue) {
        percent =
          Math.round((retrievedValue / totalRetrievedValue) * 100 * 100) / 100;
        setPercent(percent);
      } else {
        setPercent(0);
      }

      if (colorCondition) {
        const conditionEval = await parseCondition({
          condition: colorCondition,
          values: { value: retrievedValue, percent },
          context,
        });
        setColor(conditionEval);
      }

      if (iconProps) {
        if (iconProps.indexOf(":") !== -1) {
          const iconEval = await parseCondition({
            condition: iconProps,
            values: { value: retrievedValue, percent },
            context,
          });
          setIcon(iconEval);
        } else {
          setIcon(iconProps);
        }
      }
      setError(undefined);
    } catch (err) {
      setError(JSON.stringify(err));
    }

    setLoading(false);
  }

  if (loading) {
    return <CenteredSpinner />;
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  return (
    <GraphIndicatorComp
      value={value!}
      totalValue={totalValue!}
      percent={percent!}
      color={color}
      icon={icon}
      suffix={suffix}
      showPercent={showPercent}
    />
  );
};
