import React from "react";
import { Group as GroupOoui } from "@gisce/ooui";
import { Spinner } from "@/widgets/custom/Spinner";
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

  return (
    <div
      style={{
        height: ooui.height ? ooui.height + "px" : "100%",
        overflowX: "hidden",
        overflowY: "auto",
        backgroundColor,
      }}
    >
      {(ooui.label || icon) && showLabel ? (
        <FieldSet label={ooui.label} icon={icon}>
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
