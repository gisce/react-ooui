import React from "react";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { LoadingOutlined } from "@ant-design/icons";
import { ButtonProps } from "antd";

type Props = ButtonProps & {
  tooltip: string;
  onClick?: any;
  icon: any;
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  type?: string;
};

function ActionButton(props: Props) {
  const {
    onClick,
    disabled = false,
    loading = false,
    tooltip,
    icon,
    label,
    type = "default",
    ...restProps
  } = props;
  const finalIcon = loading ? <LoadingOutlined /> : icon;

  return (
    <ButtonWithTooltip
      type={type as any}
      tooltip={tooltip}
      onClick={onClick}
      disabled={disabled}
      {...restProps}
    >
      {finalIcon}
      {label}
    </ButtonWithTooltip>
  );
}

export const ActionDangerButton = (props: Props) => {
  return <ActionButton {...props} type="primary" danger={true} />;
};

export default ActionButton;
