import { useState } from "react";
import Measure from "react-measure";
import Title from "antd/lib/typography/Title";
import iconMapper from "@/helpers/iconMapper";
import { Col, Row } from "antd";

const fontGrowFactor = 0.7;
const minFontSize = 30;

export type GraphIndicatorCompProps = {
  value: number;
  totalValue?: number;
  percent?: number;
  color?: string;
  icon?: string;
  suffix?: string;
  showPercent?: boolean;
};

export const GraphIndicatorComp = (props: GraphIndicatorCompProps) => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const { value, totalValue, percent, color, icon, suffix, showPercent } =
    props;

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

  const totalValue = total?.toLocaleString("es-ES", {
    useGrouping: true,
  });

  let finalValue = total ? `${localeValue}/${totalValue}` : `${localeValue}`;

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
