const formatter = (graphType: "pie" | "default" | "barGrouped") => {
  return (object: any) => {
    const formattedValue = object.value.toLocaleString("es-ES", {
      useGrouping: true,
    });
    const name = graphType === "pie" ? object.x : object.type;
    return { name, value: formattedValue };
  };
};

const DefaultGraphOptions = {
  default: {
    padding: "auto",
    xAxis: {
      tickCount: 5,
    },
    yAxis: {
      label: {
        formatter: (value: number) => {
          return value.toLocaleString("es-ES", {
            useGrouping: true,
          });
        },
      },
    },
    legend: {
      maxWidthRatio: 0.5,
      maxItemWidth: 1000,
    },
    tooltip: {
      formatter: formatter("default"),
    },
  },
  pie: {
    appendPadding: 10,
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    legend: {
      maxWidthRatio: 0.5,
      maxItemWidth: 1000,
    },
    tooltip: {
      formatter: formatter("pie"),
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  },
  barGrouped: {
    isGroup: true,
    legend: {
      maxWidthRatio: 0.5,
      maxItemWidth: 1000,
    },
    tooltip: {
      formatter: formatter("barGrouped"),
    },
    yAxis: {
      label: {
        formatter: (value: number) => {
          return value.toLocaleString("es-ES", {
            useGrouping: true,
          });
        },
      },
    },
    label: {
      position: "middle",
      layout: [
        {
          type: "interval-adjust-position",
        },
        {
          type: "interval-hide-overlap",
        },
        {
          type: "adjust-color",
        },
      ],
    },
  },
};

export default DefaultGraphOptions;
