import React, { useContext, useState } from "react";
import Field from "@/common/Field";
import { Button as AntButton } from "antd";
import { Button as ButtonOoui } from "@gisce/ooui";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { FormContext, FormContextType } from "@/context/FormContext";
import { LoadingOutlined } from "@ant-design/icons";
import iconMapper from "@/helpers/iconMapper";
import { useLocale } from "@gisce/react-formiga-components";

type Props = {
  ooui: ButtonOoui;
};

export const Button = (props: Props) => {
  const { ooui } = props;
  const {
    id,
    label,
    activated,
    buttonType,
    confirmMessage,
    icon,
    context,
    readOnly,
  } = ooui;
  const formContext = useContext(FormContext) as FormContextType;
  const { executeButtonAction } = formContext || {};
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const { t } = useLocale();

  async function onClick_confirm() {
    setIsRunning(true);
    await executeButtonAction({ type: buttonType, action: id, context });
    setIsRunning(false);
  }

  function onClick() {
    if (confirmMessage) {
      showConfirmDialog({
        confirmMessage,
        t,
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
    <Field ooui={ooui}>
      <AntButton
        block
        disabled={!activated || readOnly || isRunning}
        onClick={onClick}
        icon={getButtonIcon()}
        type={ooui.primary ? "primary" : "default"}
        danger={ooui.danger}
        style={{ whiteSpace: "normal", height: "auto" }}
      >
        {label}
      </AntButton>
    </Field>
  );
};
