import React from "react";
import { Alert as AntdAlert, Space } from "antd";
import { WidgetProps } from "@/types";
import { Alert as AlertOoui } from "@gisce/ooui";
import { Interweave } from "interweave";
import iconMapper from "@/helpers/iconMapper";
import { Button } from "@/widgets/base/Button";

type AlertOouiProps = WidgetProps & {
  ooui: AlertOoui;
};

export const Alert = (props: AlertOouiProps) => {
  const { ooui } = props;
  const { title, text, alertType, icon } = ooui;

  function getIcon(icon: string | null): React.JSX.Element | undefined {
    if (icon) {
      const Icon: React.ElementType = iconMapper(icon) as any;
      return Icon && <Icon />;
    }
    return undefined;
  }

  const buttons = ooui.buttons.map((button) => {
    return <Button ooui={button} />;
  });

  return (
    <AntdAlert
      message={<Interweave content={title} />}
      description={<Interweave content={text} />}
      type={alertType}
      showIcon
      action={buttons ? <Space direction="vertical">{buttons}</Space> : null}
      icon={getIcon(icon)}
    />
  );
};
