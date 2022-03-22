import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import { GraphLine as GraphLineOoui } from "@gisce/ooui";
import { Line } from "@ant-design/plots";

export type GraphInidicatorProps = {
  model: string;
  domain: any;
  context: any;
  ooui: GraphLineOoui;
};

export const GraphLine = (props: GraphInidicatorProps) => {
  const { model, domain, context, ooui } = props;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Record<string, any>[]>();

  useEffect(() => {
    fetchData();
  }, [model]);

  async function fetchData() {
    setLoading(true);

    try {
      const xField: string = ooui.x!.name!;
      const fields = [xField];

      if (ooui.y!.name !== ooui.x!.name) {
        fields.push(ooui.y!.name!);
      }

      const results: any[] = (await ConnectionProvider.getHandler().search({
        params: domain,
        fields,
        context,
        model,
      })) as any;

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
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  if (loading) {
    return (
      <div style={{ padding: "1rem" }}>
        <LoadingOutlined style={{ height: "12px" }} />
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <Line
        data={data!}
        padding="auto"
        xField={ooui.x!.name}
        yField="count"
        xAxis={{ tickCount: 5 }}
      />
    </div>
  );
};
