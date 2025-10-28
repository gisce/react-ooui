import React from "react";
import { Card as CardOoui } from "@gisce/ooui";
import { Spinner } from "@/widgets/custom/Spinner";
import { Card as AntCard } from "antd";
import { useLocale, iconMapper } from "@gisce/react-formiga-components";

type Props = {
  ooui: CardOoui;
  responsiveBehaviour: boolean;
};

function Card(props: Props): React.ReactElement {
  const { ooui, responsiveBehaviour } = props;
  const icon: React.ElementType | undefined = iconMapper(ooui.icon || "");
  const { t } = useLocale();

  const title = ooui.title ? (
    <span>
      {icon && (
        <span style={{ marginRight: "8px" }}>{React.createElement(icon)}</span>
      )}
      {ooui.title}
    </span>
  ) : undefined;

  return (
    <AntCard
      title={title}
      style={{
        height: ooui.height ? ooui.height + "px" : "100%",
      }}
    >
      <Spinner
        tip={t("loading")}
        ooui={ooui}
        responsiveBehaviour={responsiveBehaviour}
      />
    </AntCard>
  );
}

export default Card;
