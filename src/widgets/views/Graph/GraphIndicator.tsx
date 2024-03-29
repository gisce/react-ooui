import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import Title from "antd/lib/typography/Title";
import Measure from "react-measure";
import iconMapper from "@/helpers/iconMapper";
import { Alert, Col, Row } from "antd";
import { Operator, graphProcessor } from "@gisce/ooui";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";

const { getValueForOperator } = graphProcessor;

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
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
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
    return (
      <div style={{ padding: "1rem" }}>
        <LoadingOutlined style={{ height: "12px" }} />
      </div>
    );
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
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

  const localeValue = value?.toLocaleString("es-ES", {
    useGrouping: true,
  });

  let finalValue = total ? `${localeValue}/${total}` : `${localeValue}`;

  if (suffix) {
    finalValue += " " + suffix;
  }

  let tw = getTextWidth(
    finalValue,
    `bold ${Math.floor(fontSize * 1.03)}px sans-serif`,
  );

  if (icon) {
    tw = tw * 2;
  }

  if (tw >= width * 0.85) {
    const maxFontSize = ((width * 0.85) / tw) * fontSize;
    fontSize = maxFontSize;
  }

  const IconElement: any =
    icon && iconMapper(icon, { style: { fontSize: fontSize * 0.7 } });

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
        {IconElement && <IconElement style={{ fontSize: fontSize * 0.7 }} />}
        {IconElement ? ` ${finalValue}` : finalValue}
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

  const localeValue = value?.toLocaleString("es-ES", {
    useGrouping: true,
  });

  let finalValue = total
    ? `${localeValue}/${total?.toLocaleString("es-ES", {
        useGrouping: true,
      })}`
    : `${localeValue}`;

  if (suffix) {
    finalValue += " " + suffix;
  }

  const percentValue = `${percent?.toLocaleString("es-ES", {
    useGrouping: true,
  })}%`;

  let tw = getTextWidth(
    percentValue,
    `bold ${Math.floor(fontSize * 1.03)}px sans-serif`,
  );

  if (icon) {
    tw = tw * 1.5;
  }

  if (tw >= width * 0.85 || fontSize * 2 < twoLinesHeight) {
    const maxFontSize = ((width * 0.85) / tw) * fontSize;
    fontSize = maxFontSize;
  }

  const IconElement: any = icon && iconMapper(icon, { style: { fontSize } });

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
      <Row align={"middle"}>
        {IconElement && (
          <Col style={{ fontSize: fontSize * 1, color, paddingRight: "10px" }}>
            <IconElement />
          </Col>
        )}
        <Col>
          <Title style={{ fontSize: fontSize * 0.8, margin: 0, color }}>
            {IconElement ? ` ${percent}%` : `${percent}%`}
          </Title>
          <Title
            style={{
              fontSize: fontSize * 0.4,
              margin: 0,
              color,
              textAlign: "center",
            }}
          >
            {finalValue}
          </Title>
        </Col>
      </Row>
    </div>
  );
}
