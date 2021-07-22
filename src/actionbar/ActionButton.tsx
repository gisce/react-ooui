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
};

function ActionButton(props: Props) {
  const { onClick, disabled = false, loading = false, tooltip, icon, label } = props;
  const finalIcon = loading ? <LoadingOutlined /> : icon;

  return (
    <ButtonWithTooltip tooltip={tooltip} onClick={onClick} disabled={disabled}>
      {finalIcon}
      {label}
    </ButtonWithTooltip>
  );
}

export default ActionButton;
