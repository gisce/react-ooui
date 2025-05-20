import React from "react";
import { Group as GroupOoui } from "@gisce/ooui";
import { Spinner } from "@/widgets/custom/Spinner";
import tinycolor from "tinycolor2";
import {
  FieldSet,
  useLocale,
  iconMapper,
} from "@gisce/react-formiga-components";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
  responsiveBehaviour: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true, responsiveBehaviour } = props;
  const icon: React.ElementType | undefined = iconMapper(ooui.icon || "");
  const { t } = useLocale();
  const backgroundColor = ooui.backgroundColor;
  const borderColor = backgroundColor
    ? tinycolor(backgroundColor).darken(30).toString()
    : undefined;
  const shouldShowFieldSet = ooui.label || (icon && showLabel);

  return (
    <div
      style={{
        height: ooui.height ? ooui.height + "px" : "100%",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor: shouldShowFieldSet ? "transparent" : backgroundColor,
      }}
    >
      {shouldShowFieldSet ? (
        <FieldSet
          label={ooui.label}
          icon={icon}
          backgroundColor={backgroundColor}
          borderColor={borderColor}
        >
          <Spinner
            tip={t("loading")}
            ooui={ooui}
            responsiveBehaviour={responsiveBehaviour}
          />
        </FieldSet>
      ) : (
        <Spinner
          tip={t("loading")}
          ooui={ooui}
          responsiveBehaviour={responsiveBehaviour}
        />
      )}
    </div>
  );
}

export default Group;
