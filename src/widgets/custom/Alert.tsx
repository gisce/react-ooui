import React, { useContext } from "react";
import { Alert as AntdAlert, Space } from "antd";
import { WidgetProps } from "@/types";
import { Alert as AlertOoui, Button as ButtonOoui } from "@gisce/ooui";
import { Interweave } from "interweave";
import iconMapper from "@/helpers/iconMapper";
import { Button } from "@/widgets/base/Button";
import { FormContext, FormContextType } from "@/context/FormContext";

type AlertOouiProps = WidgetProps & {
  ooui: AlertOoui;
};

export const Alert = (props: AlertOouiProps) => {
  const { ooui } = props;
  const formContext = useContext(FormContext) as FormContextType;
  let { title, text, alertType, icon, buttons } = ooui;
  if (ooui.fieldType && ooui.id) {
    const values = formContext.getFieldValue(ooui.id);
    if (typeof values === "object") {
      ({
        title = ooui.title,
        text = ooui.text,
        alertType = ooui.alertType,
        icon = ooui.icon,
        buttons = [],
      } = values);
      if (buttons) {
        buttons = buttons.map(
          (button: any) =>
            new ButtonOoui({ ...button, ...{ readonly: ooui.readOnly } }),
        );
      }
      if (ooui.buttons) {
        buttons = [...ooui.buttons, ...buttons];
      }
    } else {
      console.log(`field value for ${ooui.id} is not an object`);
    }
  }

  function getIcon(icon: string | null): React.JSX.Element | undefined {
    if (icon) {
      const Icon: React.ElementType = iconMapper(icon) as any;
      return Icon && <Icon />;
    }
    return undefined;
  }

  const buttonsComponents = buttons.map((button: ButtonOoui) => {
    return <Button key={button.id} ooui={button} />;
  });

  return (
    <AntdAlert
      message={<Interweave content={title} />}
      description={<Interweave content={text} />}
      type={alertType}
      showIcon
      action={
        buttonsComponents ? (
          <Space direction="vertical">{buttonsComponents}</Space>
        ) : null
      }
      icon={getIcon(icon)}
    />
  );
};
