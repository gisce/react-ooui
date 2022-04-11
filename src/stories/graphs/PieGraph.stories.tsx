import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie, G2 } from "@ant-design/plots";

const { registerTheme } = G2;
registerTheme("custom-theme", {
  maxColumnWidth: 500,
});

const DemoPie = () => {
  const data = [
    {
      type: "1PASS_THROUGH_2022V1_M1_V2",
      value: 27,
    },
    {
      type: "2PASS_THROUGH_2022V1_M1_V2",
      value: 25,
    },
    {
      type: "3PASS_THROUGH_2022V1_M1_V2",
      value: 18,
    },
    {
      type: "4PASS_THROUGH_2022V1_M1_V2",
      value: 15,
    },
    {
      type: "5PASS_THROUGH_2022V1_M1_V2",
      value: 10,
    },
    {
      type: "6PASS_THROUGH_2022V1_M1_V2",
      value: 5,
    },
  ];
  const Compo = Pie as any;

  const config = {
    // theme: "custom-theme",
    // appendPadding: 10,
    // autoFit: false,
    // width: 1100,
    // height: 100,
    padding: "auto",
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    legend: {
      maxWidthRatio: 0.5,
      maxItemWidth: 1000,
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Compo {...config} />;
};

export default {
  title: "Components/Widgets/Graphs/PieGraph",
};

export const Default = (): React.ReactElement => {
  return <DemoPie />;
};
