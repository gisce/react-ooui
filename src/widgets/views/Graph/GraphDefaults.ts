import dayjs from "@/helpers/dayjs";

const formatter = (graphType: "pie" | "default" | "barGrouped") => {
  return (object: any) => {
    const formattedValue = object.value.toLocaleString("es-ES", {
      useGrouping: true,
    });
    const name = graphType === "pie" ? object.x : object.type;
    return { name, value: formattedValue };
  };
};

const axisFormatter = (value: any) => {
  if (typeof value === "string" && stringIsValidNumeric(value)) {
    return parseFloat(value).toLocaleString("es-ES", {
      useGrouping: true,
    });
  } else if (isNumber(value)) {
    return value.toLocaleString("es-ES", {
      useGrouping: true,
    });
  } else if (isValidDateString(value)) {
    const dateType = getDateType(value);
    if (dateType === null) {
      return value;
    }
    return dayjs(value, (dateFormats.input as any)[dateType]).format(
      (dateFormats.output as any)[dateType],
    );
  } else {
    return value;
  }
};

const stringIsValidNumeric = (value: string) => {
  const regex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
  return regex.test(value);
};

export const isNumber = (value: any) => {
  return typeof value === "number" && !isNaN(value);
};

const DefaultGraphOptions = {
  default: {
    padding: "auto",
    xAxis: {
      tickCount: 5,
      label: {
        formatter: axisFormatter,
      },
    },
    yAxis: {
      label: {
        formatter: axisFormatter,
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
    autoFit: true,
    appendPadding: 10,
    radius: 0.9,
    label: null,
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
    xAxis: {
      label: {
        formatter: axisFormatter,
      },
    },
    yAxis: {
      label: {
        formatter: axisFormatter,
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

function isValidDateString(variable: any): boolean {
  // Check if the variable is defined and is a string
  if (typeof variable !== "string" || variable === undefined) {
    return false;
  }

  // Check if the string is a valid date
  const date = new Date(variable);
  return date.toString() !== "Invalid Date";
}

const dateFormats = {
  input: {
    hours: "YYYY-MM-DD HH:mm",
    days: "YYYY-MM-DD",
    weeks: "YYYY-[W]WW",
    months: "YYYY-MM",
    years: "YYYY",
  },
  output: {
    hours: "DD/MM/YYYY HH:mm",
    days: "DD/MM/YYYY",
    weeks: "[W]WW/YYYY",
    months: "MM/YYYY",
    years: "YYYY",
  },
};

function getDateType(dateString: string): string | null {
  for (const format in dateFormats.input) {
    const isValidFormat = dayjs(
      dateString,
      (dateFormats.input as any)[format],
      true,
    ).isValid();
    if (isValidFormat) {
      return format;
    }
  }

  return null;
}

export const PieLabelOptions = {
  inner: {
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }: { percent: number }) => {
        if (percent < 0.07) {
          return "";
        }
        return `${(percent * 100).toFixed(0)}%`;
      },
      style: {
        fontSize: 12,
        textAlign: "center",
      },
    },
  },
  spider: {
    label: {
      type: "spider",
      labelHeight: 28,
      content: ({ percent }: { percent: number }) =>
        `${(percent * 100).toFixed(0)}%`,
    },
  },
};

export const calculateAdjustedPiePercentages = (items: any[]) => {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  const rawPercentages = items.map((item) => (item.value / total) * 100);
  const roundedPercentages = rawPercentages.map((p) => Math.round(p));
  const sumOfRounded = roundedPercentages.reduce((acc, num) => acc + num, 0);
  const error = 100 - sumOfRounded;

  for (let i = 0; i < Math.abs(error); i++) {
    if (error > 0) {
      roundedPercentages[i % roundedPercentages.length]++;
    } else {
      roundedPercentages[i % roundedPercentages.length]--;
    }
  }

  return items.map((item, index) => ({
    x: item.x,
    percent: roundedPercentages[index],
  }));
};

export default DefaultGraphOptions;
