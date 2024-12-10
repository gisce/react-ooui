import { WidgetProps } from "@/types";
import { Spinner as SpinnerOoui } from "@gisce/ooui";
import { Spin } from "antd";
import Container from "@/widgets/containers/Container";

type SpinnerProps = Omit<WidgetProps, "ooui"> & {
  ooui: SpinnerOoui;
  responsiveBehaviour?: boolean;
  tip?: string;
};

export const Spinner = (props: SpinnerProps) => {
  const { ooui, responsiveBehaviour = false, tip } = props;

  return (
    <Spin tip={tip ?? ooui.label} size="large" spinning={ooui.loading}>
      <Container
        container={ooui.container}
        responsiveBehaviour={responsiveBehaviour}
      />
    </Spin>
  );
};
