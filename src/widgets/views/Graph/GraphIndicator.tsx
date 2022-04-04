import React, { useState, useEffect, useCallback } from "react";
import { LoadingOutlined, PieChartFilled } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import Title from "antd/lib/typography/Title";
import Measure from "react-measure";
import iconMapper from "@/helpers/iconMapper";

const fontGrowFactor = 0.7;
const minFontSize = 30;

export type GraphInidicatorProps = {
  model: string;
  domain: any;
  context: any;
  colorCondition?: string | null;
  totalDomain?: string;
  showPercent?: boolean;
  icon?: string;
  suffix?: string;
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
  } = props;
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<number>();
  const [percent, setPercent] = useState<number>();
  const [totalValue, setTotalValue] = useState<number>();
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [color, setColor] = useState<string>();
  const [icon, setIcon] = useState<string>();

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

      if (iconProps) {
        if (iconProps.indexOf(":") !== -1) {
          const iconEval = await ConnectionProvider.getHandler().parseCondition(
            {
              condition: iconProps,
              values: { value: retrievedValue, percent },
              context,
            }
          );
          setIcon(iconEval);
        } else {
          setIcon(iconProps);
        }
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div style={{ padding: "1rem" }}>
        <LoadingOutlined style={{ height: "12px" }} />
      </div>
    );
  }

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setHeight(contentRect.bounds?.height!);
        setWidth(contentRect.bounds?.width!);
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
              width={width}
              color={color}
              icon={icon}
              suffix={suffix}
            />
          );
        } else {
          return (
            <CommonIndicator
              value={value!}
              total={totalValue}
              measureRef={measureRef}
              height={height}
              width={width}
              color={color}
              icon={icon}
              suffix={suffix}
            />
          );
        }
      }}
    </Measure>
  );
};

function getTextWidth(text: string, font: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  context!.font = font || getComputedStyle(document.body).font;
  return context!.measureText(text).width;
}

function CommonIndicator({
  measureRef,
  width,
  height,
  total,
  value,
  color,
  icon,
  suffix,
}: {
  measureRef: any;
  width: number;
  height: number;
  total: number | undefined;
  value: number;
  color: string | undefined;
  icon?: string;
  suffix?: string;
}) {
  let fontSize =
    height * fontGrowFactor < minFontSize
      ? minFontSize
      : height * fontGrowFactor;

  let finalValue = total ? `${value}/${total}` : `${value}`;

  if (suffix) {
    finalValue += " " + suffix;
  }

  let tw = getTextWidth(
    finalValue,
    `bold ${Math.floor(fontSize * 1.03)}px sans-serif`
  );

  if (icon) {
    tw = tw * 2;
  }

  if (tw >= width * 0.85) {
    const maxFontSize = ((width * 0.85) / tw) * fontSize;
    fontSize = maxFontSize;
  }

  const IconElement: any = icon && iconMapper(icon);

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
      <Title style={{ fontSize, margin: 0, color }}>
        {icon && <IconElement style={{ fontSize: fontSize * 0.7 }} />}
        {icon ? ` ${finalValue}` : finalValue}
      </Title>
    </div>
  );
}

function PercentageIndicator({
  measureRef,
  height,
  width,
  percent,
  total,
  value,
  color,
  icon,
  suffix,
}: {
  measureRef: any;
  height: number;
  width: number;
  percent: number;
  total: number;
  value: number;
  color: string | undefined;
  icon?: string;
  suffix?: string;
}) {
  const twoLinesHeight = height * 0.65;
  let fontSize =
    twoLinesHeight * fontGrowFactor < minFontSize
      ? minFontSize
      : twoLinesHeight * fontGrowFactor;

  let finalValue = total ? `${value}/${total}` : `${value}`;

  if (suffix) {
    finalValue += " " + suffix;
  }

  let tw = getTextWidth(
    finalValue,
    `bold ${Math.floor(fontSize * 1.03)}px sans-serif`
  );

  if (icon) {
    tw = tw * 2;
  }

  const IconElement: any = icon && iconMapper(icon);

  if (tw >= width * 0.85 || fontSize * 2 < twoLinesHeight) {
    const maxFontSize = ((width * 0.85) / tw) * fontSize;
    fontSize = maxFontSize;
  }

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
      <Title style={{ fontSize: fontSize * 0.8, margin: 0, color }}>
        {icon && <IconElement style={{ fontSize: fontSize * 0.5 }} />}
        {icon ? ` ${percent}%` : `${percent}%`}
      </Title>
      <Title style={{ fontSize: fontSize * 0.4, margin: 0, color }}>
        {finalValue}
      </Title>
    </div>
  );
}
