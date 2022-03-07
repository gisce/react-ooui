import React, { useContext } from "react";
import { FilterOutlined } from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";

type Props = {
  onClick: () => void;
  disabled?: boolean;
  badgeNumber?: number;
};

function ButtonWithBadge(props: Props) {
  const { onClick, disabled = false, badgeNumber = 0 } = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;

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
              background: "#1890FF",
              color: "#fefefe",
            }}
          >
            {badgeNumber}
          </span>
        </div>
      )}
      <ButtonWithTooltip
        tooltip={t("advanced_search")}
        icon={<FilterOutlined />}
        onClick={onClick}
        disabled={disabled}
        style={{ width: 46, zIndex: 0 }}
      ></ButtonWithTooltip>
    </div>
  );
}

export default ButtonWithBadge;
