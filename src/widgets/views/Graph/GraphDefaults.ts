import dayjs from "@/helpers/dayjs";

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
    autoFit: true,
    axis: {
      x: {
        tickCount: 5,
        labelFormatter: axisFormatter,
      },
      y: {
        labelFormatter: axisFormatter,
      },
    },
    legend: {
      color: {
        maxWidth: 0.5,
        itemWidth: 1000,
      },
    },
    tooltip: {
      items: [
        {
          channel: "y",
          valueFormatter: (value: any) => {
            if (isNumber(value)) {
              return value.toLocaleString("es-ES", { useGrouping: true });
            }
            return value;
          },
        },
      ],
    },
  },
  pie: {
    autoFit: true,
    inset: 10,
    radius: 0.9,
    label: false,
    legend: {
      color: {
        position: "right",
        // Simplified config - pagination doesn't work in @ant-design/plots v2
        // Just constrain width to prevent 2-column layout
        maxWidth: 280,
        rowPadding: 4,
        itemMarkerSize: 8,
      },
    },
    tooltip: {
      title: (d: any) => d.x, // Show category name as tooltip title
      items: [
        {
          channel: "y",
          valueFormatter: (value: any) => {
            if (isNumber(value)) {
              return value.toLocaleString("es-ES", { useGrouping: true });
            }
            return value;
          },
        },
      ],
    },
    interaction: {
      elementHighlight: true,
    },
  },
  barGrouped: {
    group: true,
    legend: {
      color: {
        maxWidth: 0.5,
        itemWidth: 1000,
      },
    },
    tooltip: {
      items: [
        {
          channel: "y",
          valueFormatter: (value: any) => {
            if (isNumber(value)) {
              return value.toLocaleString("es-ES", { useGrouping: true });
            }
            return value;
          },
        },
      ],
    },
    axis: {
      x: {
        labelFormatter: axisFormatter,
      },
      y: {
        labelFormatter: axisFormatter,
      },
    },
    label: {
      position: "inside",
      transform: [
        {
          type: "overlapDodgeY",
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
      position: "inside",
      style: {
        fontSize: 12,
        textAlign: "center",
      },
    },
  },
  spider: {
    label: {
      position: "spider",
      transform: [{ type: "overlapDodgeY" }],
    },
  },
};

export const calculateAdjustedPiePercentages = (items: any[]) => {
  const total = items.reduce((acc, item) => acc + item.value, 0);
  // Calculate raw percentages with higher precision
  const rawPercentages = items.map((item) => (item.value / total) * 100);

  // Round to 2 decimal places
  const roundedPercentages = rawPercentages.map(
    (p) => Math.round(p * 100) / 100,
  );

  // Check if adjustment is needed
  const sum = roundedPercentages.reduce((a, b) => a + b, 0);

  // If sum is already 100 (allowing for tiny floating point differences), return as is
  if (Math.abs(sum - 100) < 0.001) {
    return items.map((item, index) => ({
      x: item.x,
      percent: roundedPercentages[index],
    }));
  }

  // If adjustment is needed, distribute the difference
  const diff = 100 - sum;
  const adjustment = diff / roundedPercentages.length;

  // Apply the adjustment evenly and round to 2 decimals
  const adjustedPercentages = roundedPercentages.map(
    (p) => Math.round((p + adjustment) * 100) / 100,
  );

  return items.map((item, index) => ({
    x: item.x,
    percent: adjustedPercentages[index],
  }));
};

export default DefaultGraphOptions;
