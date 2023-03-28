import React, { useContext, useState } from "react";
import Field from "@/common/Field";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import {
  ButtonGroup as ButtonGroupOoui,
  Button as ButtonOoui,
  Field as FieldOoui,
} from "@gisce/ooui";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { FormContext, FormContextType } from "@/context/FormContext";
import { LoadingOutlined } from "@ant-design/icons";
import iconMapper from "@/helpers/iconMapper";
import { WidgetProps } from "@/types";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type ButtonGroupProps = {
  ooui: ButtonGroupOoui;
};

type ItemsProps = {
  ooui: ButtonOoui[];
};

export const ButtonGroup = (props: ButtonGroupProps) => {
  const { ooui } = props;
  const { defaultButton, secondaryButtons } = ooui;
  const {
    id,
    caption,
    activated,
    buttonType,
    confirmMessage,
    icon,
    primary,
    danger,
    context,
    readOnly,
  } = defaultButton || {};
  const formContext = useContext(FormContext) as FormContextType;
  const { executeButtonAction } = formContext || {};
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const { lang } = useContext(LocaleContext) as LocaleContextType;

  function getButtonIcon() {
    if (isRunning) return <LoadingOutlined />;
    if (icon) {
      const Icon: React.ElementType = iconMapper(icon) as any;
      return Icon && <Icon />;
    }
    return undefined;
  }

  async function onClick_confirm() {
    if (buttonType && id) {
      setIsRunning(true);
      await executeButtonAction({ type: buttonType, action: id, context });
      setIsRunning(false);
    }
  }

  function onClick() {
    if (confirmMessage) {
      showConfirmDialog({
        confirmMessage,
        lang,
        onOk: () => {
          onClick_confirm();
        },
      });
      return;
    }

    onClick_confirm();
  }

  return (
    <Field ooui={new FieldOoui({ ...{ ooui } })}>
      <Dropdown.Button
        disabled={!activated || readOnly}
        onClick={onClick}
        icon={<DownOutlined />}
        type={primary ? "primary" : undefined}
        //danger={danger ? true : undefined} This works but typescript
        // doesn't accept
        overlay={Items({ooui: secondaryButtons})}
      >
        {getButtonIcon()}
        {caption}
      </Dropdown.Button>
    </Field>
  );
};

const Items = (props: ItemsProps) => {
  const { ooui } = props;
  const items = ooui.map((button) => {
    const {
      id,
      caption,
      activated,
      buttonType,
      confirmMessage,
      icon,
      context,
      readOnly,
      danger,
    } = button;
    const formContext = useContext(FormContext) as FormContextType;
    const { executeButtonAction } = formContext || {};
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const { lang } = useContext(LocaleContext) as LocaleContextType;

    async function onClick_confirm() {
      setIsRunning(true);
      await executeButtonAction({ type: buttonType, action: id, context });
      setIsRunning(false);
    }

    function onClick() {
      if (confirmMessage) {
        showConfirmDialog({
          confirmMessage,
          lang,
          onOk: () => {
            onClick_confirm();
          },
        });
        return;
      }

      onClick_confirm();
    }

    function getButtonIcon() {
      if (isRunning) return <LoadingOutlined />;
      if (icon) {
        const Icon: React.ElementType = iconMapper(icon) as any;
        return Icon && <Icon />;
      }
      return undefined;
    }

    return (
      <Menu.Item
        disabled={!activated || readOnly}
        onClick={onClick}
        icon={getButtonIcon()}
        danger={danger}
      >
        {caption}
      </Menu.Item>
    );
  });
  return <Menu>{items}</Menu>;
};
