import ConnectionProvider from "@/ConnectionProvider";
import { GraphAxis, Operator } from "@gisce/ooui/dist/Graph";
import { useEffect, useState } from "react";
import { GraphChart as GraphChartOoui } from "@gisce/ooui";
import GraphDefaults from "./GraphDefaults";

export type GraphDataOpts = {
  model: string;
  domain: any;
  context: any;
  ooui: GraphChartOoui;
  limit?: number;
};

const labelsForOperator = {
  count: "count",
  "+": "sum",
  "-": "subtract",
  "*": "multiply",
  avg: "average",
  min: "min",
  max: "max",
};

type GraphDefaultsType = "default" | "barStacked" | "pie";

export default function useGraphCountData(opts: GraphDataOpts) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [graphProps, setGraphProps] = useState<any>();
  const { model } = opts;

  useEffect(() => {
    (async function () {
      const { domain, context, ooui, limit } = opts;
      const defaultsType: GraphDefaultsType = getGraphDefaultsType({ ooui });

      try {
        setLoading(true);
        const xField: string = ooui.x!.name!;

        const results: any[] = (await ConnectionProvider.getHandler().search({
          params: domain,
          fields: getFieldsToRetrieve({ ooui }),
          context,
          model,
          order: xField,
          limit,
        })) as any;

        const fields = await getFieldsForModel({ model, context });

        const yStackedValues = getYStackedResultsIfNeeded({
          results,
          fields,
          ooui,
          type: defaultsType,
        });

        const { valueLabelRelation, groupedResults } = getRecordsGroupedByX({
          xField,
          yFields: getYFields(ooui!.y!),
          results: yStackedValues,
          fields,
        });

        const appliedOperators = applyOperators({
          results: groupedResults,
          ooui,
        });

        const resultsWithFinalXLabels = replaceLabelsForXIfNeeded({
          results: appliedOperators,
          valueLabelRelation,
          ooui,
          fields,
        });

        const data = createDataObject({
          results: resultsWithFinalXLabels,
          xField,
        });

        setGraphProps(getGraphProps({ type: defaultsType, data, ooui }));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [model]);

  return { error, loading, graphProps };
}

function getValueForOperator({
  operator,
  values,
}: {
  operator: Operator;
  values: any[];
}) {
  switch (operator) {
    case "count": {
      return values.length;
    }
    case "+": {
      return roundNumber(
        values.reduce(function (previousValue: any, currentValue: any) {
          return previousValue + currentValue;
        })
      );
    }
    case "-": {
      return roundNumber(
        values.reduce(function (previousValue: any, currentValue: any) {
          return previousValue - currentValue;
        })
      );
    }
    case "*": {
      return roundNumber(
        values.reduce(function (previousValue: any, currentValue: any) {
          return previousValue * currentValue;
        })
      );
    }
    case "avg": {
      const sum = values.reduce((a: any, b: any) => a + b, 0);
      const avg = sum / values.length || 0;
      return roundNumber(avg);
    }
    case "min": {
      return Math.min(...values);
    }
    case "max": {
      return Math.max(...values);
    }
    default: {
      return values;
    }
  }
}

function roundNumber(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

async function getFieldsForModel({
  model,
  context,
}: {
  model: string;
  context: any;
}) {
  const viewData = await ConnectionProvider.getHandler().getView({
    model,
    context,
    type: "form",
  });
  return viewData.fields;
}

function getValueData({
  fields,
  values,
  fieldName,
}: {
  fields: any;
  values: any;
  fieldName: string;
}) {
  const xFieldData = fields[fieldName];
  const value = values[fieldName];

  if (xFieldData && xFieldData.type === "many2one") {
    return { value: value[0], label: value[1] };
  } else if (xFieldData && xFieldData.type === "selection") {
    const selectionValues: [number, string][] = xFieldData.selection;

    const valuePair = selectionValues.find((selectionPair) => {
      return selectionPair[0] === value;
    });

    if (!valuePair) {
      throw new Error(`Could not find value ${value} in selection`);
    }

    return { value, label: valuePair[1] };
  }

  return { value, label: fieldName };
}

function getYStackedResultsIfNeeded({
  results,
  fields,
  ooui,
  type,
}: {
  results: any[];
  fields: any;
  ooui: GraphChartOoui;
  type: GraphDefaultsType;
}) {
  if (type !== "barStacked") {
    return results;
  }

  const fieldName = ooui!.y![0].label!;

  let finalResults: any[] = [];
  const mapValueLabel: { [key: string]: string } = {};

  results.forEach((result) => {
    const { value, label } = getValueData({
      fields,
      values: result,
      fieldName: fieldName,
    });

    mapValueLabel[value] = label;
    finalResults.push({ ...result, [fieldName]: value });
  });

  finalResults = finalResults.map((result) => {
    return {
      ...result,
      [fieldName]: mapValueLabel[result[fieldName]],
    };
  });

  return finalResults;
}

function getGraphDefaultsType({ ooui }: { ooui: GraphChartOoui }) {
  if (ooui.type === "bar" && ooui.y && ooui.y.length === 1 && ooui.y[0].label) {
    return "barStacked";
  }
  if (ooui.type === "pie") {
    return ooui.type;
  }
  return "default";
}

function getFieldsToRetrieve({ ooui }: { ooui: GraphChartOoui }) {
  const xField: string = ooui.x!.name!;
  const fields = [xField];

  if (!ooui.y) {
    return [];
  }

  ooui.y.forEach((y) => {
    if (y.operator !== "count") {
      fields.push(y.name!);
    }

    if (y.label) {
      fields.push(y.label);
    }
  });

  return fields;
}

function getRecordsGroupedByX({
  results,
  fields,
  xField,
  yFields,
}: {
  results: any[];
  fields: any;
  xField: string;
  yFields: string[];
}) {
  const valueLabelRelation: { [key: string]: any } = {};
  const groupedResults: { [key: string]: any } = {};

  for (const result of results) {
    const { value, label } = getValueData({
      fields,
      values: result,
      fieldName: xField,
    });

    valueLabelRelation[value] = label;

    if (value !== undefined && value !== false) {
      if (groupedResults[value] === undefined) {
        groupedResults[value] = [];
      }

      const yValues: { [key: string]: any } = {};
      yFields.forEach((yField) => {
        yValues[yField] = result[yField];
      });

      groupedResults[value].push(yValues);
    }
  }

  return { valueLabelRelation, groupedResults };
}

function applyOperators({
  results,
  ooui,
}: {
  results: { [key: string]: any };
  ooui: GraphChartOoui;
}) {
  const yAxis = ooui!.y!;
  const resultsWithOperatorsApplied: { [key: string]: any } = {};

  Object.keys(results).forEach((x) => {
    const yValues = results[x];

    yAxis.forEach((y) => {
      const operator = y.operator!;
      const yField = y.name!;

      if (y.label) {
        const groupedYValues = getResultsGroupedBy({
          results: yValues,
          fieldName: y.label,
        });

        Object.keys(groupedYValues).forEach((yLabelKey) => {
          const iYValues = groupedYValues[yLabelKey];
          const valuesForAxis: any[] = getValuesForAxis({
            values: iYValues,
            fieldName: yField,
          });

          const result = getValueForOperator({
            operator,
            values: valuesForAxis,
          });

          if (!resultsWithOperatorsApplied[x]) {
            resultsWithOperatorsApplied[x] = [];
          }

          resultsWithOperatorsApplied[x].push({
            [getYAxisFieldname(y)]: result,
            [y!.label!]: yLabelKey,
          });
        });
      } else {
        const valuesForAxis: any[] = getValuesForAxis({
          values: yValues,
          fieldName: yField,
        });

        const result = getValueForOperator({ operator, values: valuesForAxis });

        if (!resultsWithOperatorsApplied[x]) {
          resultsWithOperatorsApplied[x] = [];
        }

        resultsWithOperatorsApplied[x].push({
          [getYAxisFieldname(y)]: result,
        });
      }
    });
  });

  return resultsWithOperatorsApplied;
}

function replaceLabelsForXIfNeeded({
  results,
  valueLabelRelation,
  ooui,
  fields,
}: {
  results: { [key: string]: any };
  valueLabelRelation: { [key: string]: any };
  ooui: GraphChartOoui;
  fields: any;
}) {
  const resultsWithLabels: { [key: string]: any } = {};
  const mustMapLabel = mustMapXLabel({ ooui, fields });

  if (!mustMapLabel) {
    return results;
  }

  Object.keys(results).forEach((x) => {
    const yValues = results[x];
    resultsWithLabels[valueLabelRelation[x]] = yValues;
  });

  return resultsWithLabels;
}

function createDataObject({
  results,
  xField,
}: {
  xField: string;
  results: { [key: string]: any };
}) {
  const resultsArray: any[] = [];

  Object.keys(results).forEach((x) => {
    const entries = results[x];

    entries.forEach((yValues: any) => {
      resultsArray.push({
        [xField]: x,
        ...yValues,
      });
    });
  });

  return resultsArray;
}

function getGraphProps({
  type,
  data,
  ooui,
}: {
  type: GraphDefaultsType;
  data: any[];
  ooui: GraphChartOoui;
}) {
  let graphProps: any = GraphDefaults[type];
  graphProps.data = data;

  if (type === "pie") {
    graphProps.colorField = ooui.x!.name;
    graphProps.angleField = getYAxisFieldname(ooui!.y![0]);
  } else if (type === "barStacked") {
    graphProps.xField = ooui.x!.name;
    graphProps.yField = getYAxisFieldname(ooui!.y![0]);
    graphProps.seriesField = ooui!.y![0].label;
  } else if (type === "default") {
    graphProps.xField = ooui.x!.name;
    graphProps.yField = getYAxisFieldname(ooui!.y![0]);
  }

  return graphProps;
}

function mustMapXLabel({
  ooui,
  fields,
}: {
  ooui: GraphChartOoui;
  fields: any;
}) {
  const xField: string = ooui!.x!.name!;
  const xFieldData = fields[xField];
  return xFieldData.type === "selection" || xFieldData.type === "many2one";
}

function getYAxisFieldname(y: GraphAxis) {
  if (y.operator) {
    return y.name + "_" + labelsForOperator[y.operator];
  }
  return y.name!;
}

function getYFields(y: GraphAxis[]) {
  const yFields: string[] = [];
  y.forEach((yAxis) => {
    yFields.push(yAxis!.name!);
    if (yAxis!.label) {
      yFields.push(yAxis!.label);
    }
  });
  return yFields;
}

function getResultsGroupedBy({
  results,
  fieldName,
}: {
  results: any[];
  fieldName: string;
}) {
  const groupedResults: { [key: string]: any } = {};

  for (const result of results) {
    const value = result[fieldName];
    if (value !== undefined && value !== false) {
      if (groupedResults[value] === undefined) {
        groupedResults[value] = [];
      }
      groupedResults[value].push(result);
    }
  }

  return groupedResults;
}

function getValuesForAxis({
  values,
  fieldName,
}: {
  values: any[];
  fieldName: string;
}) {
  return values
    .filter((yValue: { [key: string]: any }) => yValue[fieldName] !== undefined)
    .map((yValue: { [key: string]: any }) => {
      return yValue[fieldName];
    });
}
