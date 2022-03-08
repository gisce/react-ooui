import React, { useState, useEffect, useCallback } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import Title from "antd/lib/typography/Title";
import Measure from "react-measure";

const fontGrowFactor = 0.7;
const minFontSize = 30;

export type GraphInidicatorProps = {
  model: string;
  domain: any;
  context: any;
};

export const GraphIndicator = (props: GraphInidicatorProps) => {
  const { model, domain, context } = props;
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<number>();
  const [height, setHeight] = useState<number>(0);

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
      // return <>{JSON.stringify(err)}</>;
    }

    setLoading(false);
  }

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setHeight(contentRect.bounds?.height!);
      }}
    >
      {({ measureRef }) => {
        const fontSize =
          height * fontGrowFactor < minFontSize
            ? minFontSize
            : height * fontGrowFactor;
        return (
          <div
            ref={measureRef}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Title style={{ fontSize, marginBottom: 0 }}>{value}</Title>
          </div>
        );
      }}
    </Measure>
  );
};
