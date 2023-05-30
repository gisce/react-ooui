import React from "react";
import ButtonWithTooltip, {Props as ButtonWithTooltipProps } from "@/common/ButtonWithTooltip";
import { theme } from 'antd';
const { useToken } = theme;

type Props = ButtonWithTooltipProps & {
  badgeNumber?: number;
};

function ButtonWithBadge(props: Props) {
  const { badgeNumber = 0, ...restProps } = props;
  const { token } = useToken();

  return (
    <div style={{ position: "relative" }}>
      {badgeNumber > 0 && (
        <div style={{ position: "absolute", left: -10, top: -10, zIndex: 2 }}>
          <span
            style={{
              display: "inline-block",
              minWidth: "22px",
              padding: "2px",
              borderRadius: "50%",
              fontSize: "12px",
              textAlign: "center",
              background: token.colorPrimaryBg,
              color: "#fefefe",
            }}
          >
            {badgeNumber}
          </span>
        </div>
      )}
      <ButtonWithTooltip
        {...restProps}
        style={{ width: 46, zIndex: 0 }}
      ></ButtonWithTooltip>
    </div>
  );
}

export default ButtonWithBadge;
