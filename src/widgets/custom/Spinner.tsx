import React from "react";
import { WidgetProps } from "@/types";
import { Spinner as SpinnerOoui } from "@gisce/ooui";
import { Spin } from "antd";
import Container from "@/widgets/containers/Container";

type SpinnerProps = WidgetProps & {
  ooui: SpinnerOoui;
};

export const Spinner = (props: SpinnerProps) => {
  const { ooui } = props;

  return (
    <Spin tip={ooui.label} size="large" spinning={ooui.loading}>
      <Container container={ooui.container} responsiveBehaviour={false} />
    </Spin>
  );
};
