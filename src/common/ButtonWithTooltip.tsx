import React from "react";
import { Button, Tooltip, ButtonProps } from "antd";

export type Props = ButtonProps & {
  tooltip: string;
};

function ButtonWithTooltip(props: Props) {
  const { tooltip, ...restProps } = props;

  return (
    <Tooltip title={tooltip}>
      <Button {...restProps} />
    </Tooltip>
  );
}

export default ButtonWithTooltip;
