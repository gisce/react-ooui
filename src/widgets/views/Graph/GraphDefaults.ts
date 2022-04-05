const DefaultGraphOptions = {
  default: {
    padding: "auto",
    xAxis: {
      tickCount: 5,
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
    interactions: [
      {
        type: "element-active",
      },
    ],
  },
  barStacked: {
    padding: "auto",
    xAxis: {
      tickCount: 5,
    },
    isStacked: true,
  },
};

export default DefaultGraphOptions;
