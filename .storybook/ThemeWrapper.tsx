import { ConfigProvider, Layout, theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { useMemo } from "react";
import tinycolor from "tinycolor2";

export const ThemeWrapper = ({ children }: { children: any }) => {
  // Hardcoded values for Storybook
  const themeMode = "compact";
  const primaryColor = "#1890ff"; // Blue hex color

  const lighterColor = useMemo(() => {
    const color = tinycolor(primaryColor);
    return color.getBrightness() > 80
      ? color.lighten(10).toHexString()
      : color.lighten(30).toHexString();
  }, [primaryColor]);

  return (
    <ConfigProvider
      theme={{
        algorithm: themeMode === "compact" ? theme.compactAlgorithm : undefined,
        token: {
          colorPrimary: lighterColor,
          colorPrimaryActive: primaryColor,
        },
        components: {
          Input: {
            colorTextDisabled: "#000000",
          },
          Select: {
            colorTextDisabled: "#000000",
          },
          DatePicker: {
            colorTextDisabled: "#000000",
          },
          InputNumber: {
            colorTextDisabled: "#000000",
          },
        },
      }}
    >
      <Layout
        className="bg-white"
        style={{
          minHeight: "100vh",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Content
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            padding: 25,
          }}
        >
          <ErrorBoundary>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {children}
            </div>
          </ErrorBoundary>
        </Content>
      </Layout>
    </ConfigProvider>
  );
};
