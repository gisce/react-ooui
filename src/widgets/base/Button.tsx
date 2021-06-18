import React, { useContext, useState } from "react";
import Field from "@/common/Field";
import { Button as AntButton } from "antd";
import { Button as ButtonOoui } from "ooui";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { FormContext, FormContextType } from "@/context/FormContext";
import { LoadingOutlined } from "@ant-design/icons";
import iconMapper from "@/helpers/iconMapper";

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
  } = ooui;
  const { executeButtonAction } = useContext(FormContext) as FormContextType;
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
      const Icon: React.ElementType = iconMapper(icon);
      return Icon && <Icon />;
    }
    return undefined;
  }

  return (
    <Field ooui={ooui}>
      <AntButton
        className="w-full"
        disabled={!activated}
        onClick={onClick}
        icon={getButtonIcon()}
      >
        {label}
      </AntButton>
    </Field>
  );
};
