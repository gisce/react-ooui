import React, { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import Title from "antd/lib/typography/Title";

export type GraphInidicatorProps = {
  model: string;
  domain: any;
  context: any;
};

export const GraphIndicator = (props: GraphInidicatorProps) => {
  const { model, domain, context } = props;
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<number>();

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

      setValue(retrievedValue);
    } catch (err) {
      console.error(err);
      return <>{JSON.stringify(err)}</>;
    }

    setLoading(false);
  }

  if (loading) {
    return <LoadingOutlined />;
  }

  return <Title>{value}</Title>;
};
