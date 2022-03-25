import ConnectionProvider from "@/ConnectionProvider";
import { GraphAxis } from "@gisce/ooui/dist/Graph";
import { useEffect, useState } from "react";

export type GraphCountDataOpts = {
  model: string;
  domain: any;
  context: any;
  x: GraphAxis;
  y: GraphAxis;
};

export default function useGraphCountData(opts: GraphCountDataOpts) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string, any>[]>();
  const [error, setError] = useState<any>();
  const [yLabel, setYLabel] = useState<string>();
  const { model } = opts;

  useEffect(() => {
    (async function () {
      const { domain, context, x, y } = opts;
      let isCount = false;

      try {
        setLoading(true);
        const xField: string = x.name!;
        const yField: string = y.name!;
        const fields = [xField];

        if (yField !== xField) {
          setYLabel(yField);
          fields.push(yField);
        } else {
          setYLabel("count");
          isCount = true;
        }

        const results: any[] = (await ConnectionProvider.getHandler().search({
          params: domain,
          fields,
          context,
          model,
          order: xField,
        })) as any;

        if (isCount) {
          const dataObject: { [key: string]: any } = {};
          const dataArray: Record<string, any>[] = [];

          for (const result of results) {
            if (result[xField] !== undefined && result[xField] !== false) {
              if (dataObject[result[xField]] === undefined) {
                dataObject[result[xField]] = 0;
              }
              dataObject[result[xField]] += 1;
            }
          }

          Object.keys(dataObject).forEach((key) => {
            dataArray.push({
              [xField]: key,
              count: dataObject[key],
            });
          });
          setData(dataArray);
        } else {
          const data = results.map((result) => {
            return {
              [xField]: result[xField],
              [yField]: result[yField],
            };
          });
          setData(data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [model]);

  return { data, error, loading, yLabel };
}
