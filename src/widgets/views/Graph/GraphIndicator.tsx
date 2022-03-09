import React, { useState, useEffect, useCallback } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import Title from "antd/lib/typography/Title";
import Measure from "react-measure";

const fontGrowFactor = 0.7;
const minFontSize = 30;

export type GraphInidicatorProps = {
  model: string;
  domain: any;
  context: any;
  colorCondition?: string | null;
  totalDomain?: string;
  showPercent?: boolean;
};

export const GraphIndicator = (props: GraphInidicatorProps) => {
  const {
    model,
    domain,
    context,
    colorCondition,
    totalDomain,
    showPercent = false,
  } = props;
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<number>();
  const [percent, setPercent] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();
  const [height, setHeight] = useState<number>(0);
  const [color, setColor] = useState<string>();

  useEffect(() => {
    fetchData();
  }, [model, colorCondition]);

  async function fetchData() {
    setLoading(true);
    let totalRetrievedValue;
    let percent;

    try {
      const retrievedValue = await ConnectionProvider.getHandler().searchCount({
        model,
        params: domain,
        context,
      });

      setValue(retrievedValue);

      if (totalDomain) {
        const parsedDomain = await ConnectionProvider.getHandler().evalDomain({
          domain: totalDomain,
          values: {},
          context,
        });
        totalRetrievedValue = await ConnectionProvider.getHandler().searchCount(
          {
            model,
            params: parsedDomain,
            context,
          }
        );

        setTotalValue(totalRetrievedValue);
      }

      if (totalRetrievedValue) {
        percent =
          Math.round((retrievedValue / totalRetrievedValue) * 100 * 100) / 100;
        setPercent(percent);
      }

      if (colorCondition) {
        const conditionEval = await ConnectionProvider.getHandler().parseCondition(
          {
            condition: colorCondition,
            values: { value: retrievedValue, percent },
            context,
          }
        );
        setColor(conditionEval);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setHeight(contentRect.bounds?.height!);
      }}
    >
      {({ measureRef }) => {
        if (showPercent) {
          return (
            <PercentageIndicator
              value={value!}
              total={totalValue!}
              percent={percent!}
              measureRef={measureRef}
              height={height}
              color={color}
            />
          );
        } else {
          return (
            <CommonIndicator
              value={value!}
              total={totalValue}
              measureRef={measureRef}
              height={height}
              color={color}
            />
          );
        }
      }}
    </Measure>
  );
};

function CommonIndicator({
  measureRef,
  height,
  total,
  value,
  color,
}: {
  measureRef: any;
  height: number;
  total: number | undefined;
  value: number;
  color: string | undefined;
}) {
  const fontSize =
    height * fontGrowFactor < minFontSize
      ? minFontSize
      : height * fontGrowFactor;
  const finalValue = total ? `${value}/${total}` : `${value}`;

  return (
    <div
      ref={measureRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Title style={{ fontSize, margin: 0, color }}>{finalValue}</Title>
    </div>
  );
}

function PercentageIndicator({
  measureRef,
  height,
  percent,
  total,
  value,
  color,
}: {
  measureRef: any;
  height: number;
  percent: number;
  total: number;
  value: number;
  color: string | undefined;
}) {
  const fontSize =
    height * fontGrowFactor < minFontSize
      ? minFontSize
      : height * fontGrowFactor;
  const finalValue = total ? `${value}/${total}` : `${value}`;

  return (
    <div
      ref={measureRef}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flexDirection: "column",
        padding: "0.2rem",
      }}
    >
      <Title
        style={{ fontSize: fontSize * 0.5, margin: 0, color }}
      >{`${percent}%`}</Title>
      <Title style={{ fontSize: fontSize * 0.2, margin: 0, color }}>
        {finalValue}
      </Title>
    </div>
  );
}
