import ConnectionProvider from "@/ConnectionProvider";
import { GraphAxis, Operator } from "@gisce/ooui/dist/Graph";
import { useEffect, useState } from "react";

export type GraphDataOpts = {
  model: string;
  domain: any;
  context: any;
  x: GraphAxis;
  y: GraphAxis;
  limit: number,
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

export default function useGraphCountData(opts: GraphDataOpts) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string, any>[]>();
  const [error, setError] = useState<any>();
  const [yLabel, setYLabel] = useState<string>();
  const [xLabel, setXLabel] = useState<string>();
  const { model } = opts;

  useEffect(() => {
    (async function () {
      const { domain, context, x, y, limit } = opts;

      try {
        setLoading(true);
        const xField: string = x.name!;
        const yField: string = y.name!;
        const fields = [xField];

        if (y.operator !== "count") {
          fields.push(yField);
        }

        const yLabel = labelsForOperator[y.operator!] || "value";
        setYLabel(yLabel);

        const results: any[] = (await ConnectionProvider.getHandler().search({
          params: domain,
          fields,
          context,
          model,
          order: xField,
          limit,
        })) as any;

        const fieldsForModel = await getFieldsForModel({ model, context });
        const xFieldData = fieldsForModel[xField];
        const mustMapLabel =
          xFieldData.type === "selection" || xFieldData.type === "many2one";

        const dataObject: { [key: string]: any } = {};
        const valueLabelRelation: { [key: string]: any } = {};

        // Group by x
        for (const result of results) {
          const { value, label } = getValueData({
            fields: fieldsForModel,
            values: result,
            fieldName: xField,
          });

          valueLabelRelation[value] = label;

          if (value !== undefined && value !== false) {
            if (dataObject[value] === undefined) {
              dataObject[value] = [];
            }
            dataObject[value].push(result[yField]);
          }
        }

        let dataLabelObject: { [key: string]: any } = {};

        if (mustMapLabel) {
          // Translate x values to labels
          Object.keys(dataObject).forEach((x) => {
            const y = dataObject[x];
            const labelForX = valueLabelRelation[x];
            dataLabelObject[labelForX] = y;
          });
        }

        const valuesForOperator = getValuesForOperator({
          operator: y.operator!,
          groupedValues: mustMapLabel ? dataLabelObject : dataObject,
          xField,
          yLabel,
        });

        setData(valuesForOperator);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [model]);

  return { data, error, loading, yLabel };
}

function getValuesForOperator({
  operator,
  groupedValues,
  xField,
  yLabel,
}: {
  operator: Operator;
  groupedValues: { [key: string]: any };
  xField: string;
  yLabel: string;
}) {
  const values: any[] = [];

  Object.keys(groupedValues).forEach((x) => {
    const y = groupedValues[x];

    switch (operator) {
      case "count": {
        const count = y.length;
        values.push({ [xField]: x, [yLabel]: count });
        break;
      }
      case "+": {
        const sum = y.reduce(function (previousValue: any, currentValue: any) {
          return previousValue + currentValue;
        });

        values.push({ [xField]: x, [yLabel]: roundNumber(sum) });
        break;
      }
      case "-": {
        const substract = y.reduce(function (
          previousValue: any,
          currentValue: any
        ) {
          return previousValue - currentValue;
        });
        values.push({ [xField]: x, [yLabel]: roundNumber(substract) });
        break;
      }
      case "*": {
        const mult = y.reduce(function (previousValue: any, currentValue: any) {
          return previousValue * currentValue;
        });
        values.push({ [xField]: x, [yLabel]: roundNumber(mult) });
        break;
      }
      case "avg": {
        const sum = y.reduce((a: any, b: any) => a + b, 0);
        const avg = sum / y.length || 0;
        values.push({ [xField]: x, [yLabel]: roundNumber(avg) });
        break;
      }
      case "min": {
        values.push({ [xField]: x, [yLabel]: Math.min(...y) });
        break;
      }
      case "max": {
        values.push({ [xField]: x, [yLabel]: Math.max(...y) });
        break;
      }
      default: {
        values.push({ [xField]: x, [yLabel]: y });
      }
    }
  });

  return values;
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
