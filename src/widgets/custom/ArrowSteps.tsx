import React from "react";
import { theme, Space } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import iconMapper from "@/helpers/iconMapper";

type ArrowStepsFieldProps = WidgetProps;

export type ArrowStepsValue = Array<{
  title: string;
  active: boolean;
  icon?: string;
}>;

type ArrowStepsProps = {
  value?: ArrowStepsValue;
};

export const ArrowSteps = (props: ArrowStepsProps) => {
  const {
    token: {
      colorPrimaryBg,
      colorPrimaryText,
      colorFillSecondary,
      colorBgContainer,
      colorText,
      fontFamily,
      fontSize,
    },
  } = theme.useToken();

  const progressStyle: React.CSSProperties = {
    padding: 0,
    listStyleType: "none",
    fontFamily,
    fontSize,
    clear: "both",
    lineHeight: "1em",
    margin: "0 -1px",
    textAlign: "center",
    display: "flex",
  };

  const stepStyle = (isActive: boolean): React.CSSProperties => ({
    position: "relative",
    padding: "10px 30px 10px 40px",
    backgroundColor: isActive ? colorPrimaryText : colorFillSecondary,
    color: isActive ? colorPrimaryBg : colorText,
    borderTop: `1px solid ${colorBgContainer}`,
    borderBottom: `1px solid ${colorBgContainer}`,
    width: "32%",
    margin: "0 1px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const arrowBeforeStyle: React.CSSProperties = {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    borderLeft: `16px solid ${colorBgContainer}`,
    borderTop: "16px solid transparent",
    borderBottom: "16px solid transparent",
  };

  const arrowAfterStyle = (isActive: boolean): React.CSSProperties => ({
    content: "''",
    position: "absolute",
    top: 0,
    left: "100%",
    zIndex: 20,
    borderLeft: `16px solid ${
      isActive ? colorPrimaryText : colorFillSecondary
    }`,
    borderTop: "16px solid transparent",
    borderBottom: "16px solid transparent",
  });

  const getIcon = (icon: string): React.ReactElement => {
    const Icon: React.ElementType = iconMapper(icon) as any;
    return Icon && <Icon />;
  };

  return (
    <ul style={progressStyle}>
      {(props.value || []).map((item, index) => (
        <li key={index} style={stepStyle(item.active)}>
          <Space>
            {item.icon && getIcon(item.icon)} {item.title}
          </Space>
          <div style={arrowBeforeStyle}></div>
          <div style={arrowAfterStyle(item.active)}></div>
        </li>
      ))}
    </ul>
  );
};

export const ArrowStepsField = (props: ArrowStepsFieldProps) => {
  return (
    <Field {...props}>
      <ArrowSteps />
    </Field>
  );
};
