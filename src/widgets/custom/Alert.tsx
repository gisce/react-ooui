import React from "react";
import { Alert as AntdAlert } from "antd";
import { WidgetProps } from "@/types";
import { Alert as AlertOoui } from "@gisce/ooui";
import { Interweave } from "interweave";
import iconMapper from "@/helpers/iconMapper";

export const Alert = (props: WidgetProps) => {
  const { ooui } = props;
  const { title, text, alertType, icon } = ooui as AlertOoui;

  function getIcon(icon: string | null): React.JSX.Element | undefined {
    if (icon) {
      const Icon: React.ElementType = iconMapper(icon) as any;
      return Icon && <Icon />;
    }
    return undefined;
  }

  return (
    <AntdAlert
      message={<Interweave content={title} />}
      description={<Interweave content={text} />}
      type={alertType}
      showIcon
      icon={getIcon(icon)}
    />
  );
};
