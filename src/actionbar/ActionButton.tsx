import React from "react";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { LoadingOutlined } from "@ant-design/icons";

type Props = {
  tooltip: string;
  onClick: any;
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
  } = props;
  const finalIcon = loading ? <LoadingOutlined /> : icon;

  return (
    <ButtonWithTooltip
      type={type as any}
      tooltip={tooltip}
      onClick={onClick}
      disabled={disabled}
    >
      {finalIcon}
      {label}
    </ButtonWithTooltip>
  );
}

export default ActionButton;
