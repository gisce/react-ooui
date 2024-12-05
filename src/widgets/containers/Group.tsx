import React from "react";
import { Group as GroupOoui } from "@gisce/ooui";
import { Spinner } from "@/widgets/custom/Spinner";
import { FieldSet, useLocale } from "@gisce/react-formiga-components";
import iconMapper from "@/helpers/iconMapper";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
  responsiveBehaviour: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true, responsiveBehaviour } = props;
  const icon: React.ElementType | undefined = iconMapper(ooui.icon || "");
  const { t } = useLocale();
  return (
    <>
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
    </>
  );
}

export default Group;
