import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

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
    return dayjs.utc(value, (dateFormats.input as any)[dateType]).format(
      (dateFormats.output as any)[dateType]
    );
  } else {
    return value;
  }
};

const stringIsValidNumeric = (value: string) => {
  const regex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
  return regex.test(value);
};

const isNumber = (value: any) => {
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
      true
    ).isValid();
    if (isValidFormat) {
      return format;
    }
  }

  return null;
}

export default DefaultGraphOptions;
