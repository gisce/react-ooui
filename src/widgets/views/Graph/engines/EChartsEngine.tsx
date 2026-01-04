import { useMemo, useRef, useEffect } from "react";
import * as echarts from "echarts";
import { ChartEngineProps } from "./types";

const formatNumber = (value: number) =>
  value.toLocaleString("es-ES", { useGrouping: true });

export const EChartsEngine = ({
  type,
  data,
  isGroup,
  isStack,
  yAxisOpts,
  fixedHeight,
  piePercents,
}: ChartEngineProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  const option = useMemo(() => {
    return getEChartsOption({
      type,
      data,
      isGroup,
      isStack,
      yAxisOpts,
      piePercents,
    });
  }, [type, data, isGroup, isStack, yAxisOpts, piePercents]);

  useEffect(() => {
    if (!chartRef.current) return;

    // Initialize chart
    if (!chartInstance.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    // Set option
    chartInstance.current.setOption(option, true);

    // Handle resize
    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    // Use ResizeObserver for container resize
    const resizeObserver = new ResizeObserver(() => {
      chartInstance.current?.resize();
    });
    resizeObserver.observe(chartRef.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [option]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, []);

  return (
    <div
      ref={chartRef}
      style={{
        width: "100%",
        height: fixedHeight || "100%",
        minHeight: fixedHeight || 300,
      }}
    />
  );
};

type GetEChartsOptionParams = {
  type: ChartEngineProps["type"];
  data: ChartEngineProps["data"];
  isGroup: boolean;
  isStack: boolean;
  yAxisOpts?: ChartEngineProps["yAxisOpts"];
  piePercents?: Array<{ x: string; percent: number }>;
};

function getEChartsOption(params: GetEChartsOptionParams): echarts.EChartsOption {
  const { type, data, isGroup, isStack, yAxisOpts, piePercents } = params;

  if (type === "pie") {
    return getPieOption(data, piePercents);
  }

  if (type === "line") {
    return getLineOption(data, yAxisOpts);
  }

  if (type === "bar") {
    return getBarOption(data, isGroup, isStack);
  }

  // Default fallback
  return getBarOption(data, isGroup, isStack);
}

function getPieOption(
  data: ChartEngineProps["data"],
  piePercents?: Array<{ x: string; percent: number }>,
): echarts.EChartsOption {
  const pieData = data.map((item) => ({
    name: item.x,
    value: item.value,
  }));

  const getPercentForX = (x: string) => {
    if (!piePercents) return "";
    const found = piePercents.find((p) => p.x === x);
    return found ? `${found.percent}%` : "";
  };

  return {
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        const percent = getPercentForX(params.name);
        return `${params.name}<br/>${formatNumber(params.value)} ${percent ? `(${percent})` : ""}`;
      },
    },
    legend: {
      type: "scroll",
      orient: "vertical",
      right: 10,
      top: 20,
      bottom: 20,
      formatter: (name: string) => {
        const percent = getPercentForX(name);
        return percent ? `${name} ${percent}` : name;
      },
    },
    series: [
      {
        type: "pie",
        radius: ["0%", "70%"],
        center: ["40%", "50%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 4,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inside",
          formatter: (params: any) => {
            const total = data.reduce((acc, obj) => acc + obj.value, 0);
            const percent = total > 0 ? params.value / total : 0;
            if (percent < 0.07) return "";
            return getPercentForX(params.name);
          },
          fontSize: 12,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data: pieData,
      },
    ],
  };
}

function getLineOption(
  data: ChartEngineProps["data"],
  yAxisOpts?: ChartEngineProps["yAxisOpts"],
): echarts.EChartsOption {
  // Group data by type for multiple series
  const seriesMap = new Map<string, { x: string; value: number }[]>();
  const xAxisData = new Set<string>();

  data.forEach((item) => {
    const seriesKey = item.type || "value";
    if (!seriesMap.has(seriesKey)) {
      seriesMap.set(seriesKey, []);
    }
    seriesMap.get(seriesKey)!.push({ x: item.x, value: item.value });
    xAxisData.add(item.x);
  });

  const xAxisArray = Array.from(xAxisData);

  const series: echarts.LineSeriesOption[] = Array.from(seriesMap.entries()).map(
    ([name, seriesData]) => {
      // Create a map for quick lookup
      const dataMap = new Map(seriesData.map((d) => [d.x, d.value]));
      return {
        name,
        type: "line",
        smooth: true,
        data: xAxisArray.map((x) => dataMap.get(x) ?? 0),
        emphasis: {
          focus: "series",
        },
      };
    },
  );

  const yAxisConfig: echarts.YAXisComponentOption = {
    type: "value",
    axisLabel: {
      formatter: (value: number) => formatNumber(value),
    },
  };

  if (yAxisOpts?.mode === "auto" && yAxisOpts.valueOpts) {
    yAxisConfig.min = yAxisOpts.valueOpts.min;
    yAxisConfig.max = yAxisOpts.valueOpts.max;
  }

  return {
    tooltip: {
      trigger: "axis",
      valueFormatter: (value: any) =>
        typeof value === "number" ? formatNumber(value) : value,
    },
    legend: {
      type: "scroll",
      top: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: xAxisArray,
    },
    yAxis: yAxisConfig,
    series,
  };
}

function getBarOption(
  data: ChartEngineProps["data"],
  isGroup: boolean,
  isStack: boolean,
): echarts.EChartsOption {
  // Group data by type for multiple series
  const seriesMap = new Map<string, { x: string; value: number }[]>();
  const xAxisData = new Set<string>();

  data.forEach((item) => {
    const seriesKey = item.type || "value";
    if (!seriesMap.has(seriesKey)) {
      seriesMap.set(seriesKey, []);
    }
    seriesMap.get(seriesKey)!.push({ x: item.x, value: item.value });
    xAxisData.add(item.x);
  });

  const xAxisArray = Array.from(xAxisData);

  const series: echarts.BarSeriesOption[] = Array.from(seriesMap.entries()).map(
    ([name, seriesData]) => {
      // Create a map for quick lookup
      const dataMap = new Map(seriesData.map((d) => [d.x, d.value]));
      const seriesOption: echarts.BarSeriesOption = {
        name,
        type: "bar",
        data: xAxisArray.map((x) => dataMap.get(x) ?? 0),
        emphasis: {
          focus: "series",
        },
      };

      if (isStack) {
        seriesOption.stack = "total";
      }

      return seriesOption;
    },
  );

  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      valueFormatter: (value: any) =>
        typeof value === "number" ? formatNumber(value) : value,
      formatter: isStack
        ? (params: any) => {
            if (!Array.isArray(params) || params.length === 0) return "";
            const title = params[0].axisValue;
            let total = 0;
            const items = params
              .map((p: any) => {
                total += p.value || 0;
                return `<div style="display: flex; justify-content: space-between; gap: 8px;">
                  <span>${p.marker} ${p.seriesName}</span>
                  <span>${formatNumber(p.value || 0)}</span>
                </div>`;
              })
              .join("");

            return `<div style="padding: 4px;">
              <div style="font-weight: bold; margin-bottom: 8px;">${title}</div>
              ${items}
              <div style="border-top: 1px solid #ccc; margin-top: 8px; padding-top: 8px; display: flex; justify-content: space-between;">
                <span>Total</span>
                <span>${formatNumber(total)}</span>
              </div>
            </div>`;
          }
        : undefined,
    },
    legend: {
      type: "scroll",
      top: 0,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAxisArray,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: number) => formatNumber(value),
      },
    },
    series,
  };
}
