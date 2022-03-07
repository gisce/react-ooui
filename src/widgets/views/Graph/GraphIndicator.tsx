import React, { useState, useEffect } from "react";
import { Graph, Indicator as IndicatorOoui } from "@gisce/ooui";
import { LoadingOutlined } from "@ant-design/icons";
import { Indicator } from "@/widgets/custom/Indicator";
import ConnectionProvider from "@/ConnectionProvider";
import { Form } from "antd";

export type GraphInidicatorProps = {
  title?: string;
  ooui: Graph;
  model: string;
  domain: any;
  context: any;
};

export const GraphIndicator = (props: GraphInidicatorProps) => {
  const { title, ooui, model, domain, context } = props;
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    fetchData();
  }, [model]);

  async function fetchData() {
    setLoading(true);

    try {
      const retrievedValue = await ConnectionProvider.getHandler().searchCount({
        model,
        params: domain,
        context,
      });

      form.setFields([
        {
          name: "indicator",
          touched: true,
          value: retrievedValue,
        },
      ]);
    } catch (err) {
      console.error(err);
      return <>{JSON.stringify(err)}</>;
    }

    setLoading(false);
  }

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <Form form={form}>
      <Indicator
        ooui={
          new IndicatorOoui({
            name: "indicator",
            string: "",
          })
        }
      />
    </Form>
  );
};
