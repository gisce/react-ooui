import React, { useContext, useState } from "react";
import Field from "@/common/Field";
import { DownOutlined, LoadingOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { Button } from "@/widgets/base/Button";
import {
  ButtonGroup as ButtonGroupOoui,
  Button as ButtonOoui,
  Field as FieldOoui,
} from "@gisce/ooui";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { FormContext, FormContextType } from "@/context/FormContext";
import iconMapper from "@/helpers/iconMapper";
import { WidgetProps } from "@/types";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type ButtonGroupProps = {
  ooui: ButtonGroupOoui;
};

type ItemsProps = {
  ooui: ButtonOoui[];
  executeButtonAction: any;
  lang: string;
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
  if (ooui.buttons.length === 0) {
    return null;
  } else if (ooui.buttons.length > 1) {
    return (
      <Field ooui={new FieldOoui({ ...{ ooui } })}>
        <Dropdown.Button
          disabled={!activated || readOnly}
          onClick={onClick}
          icon={<DownOutlined />}
          type={primary ? "primary" : undefined}
          // danger={danger ? true : undefined} This works but typescript
          // doesn't accept
          overlay={
            <Items
              ooui={secondaryButtons}
              executeButtonAction={executeButtonAction}
              lang={lang}
            />
          }
        >
          {getButtonIcon()}
          {caption}
        </Dropdown.Button>
      </Field>
    );
  } else if (defaultButton) {
    return <Button ooui={defaultButton} />;
  }
};

const Items = (props: ItemsProps) => {
  const { ooui, executeButtonAction, lang } = props;
  if (!ooui) {
    return null;
  }
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
    const [isRunning, setIsRunning] = useState<boolean>(false);

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
