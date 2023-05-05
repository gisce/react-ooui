import React from "react";
import { Group as GroupOoui } from "@gisce/ooui";
import Container from "./Container";
import Fieldset from "@/ui/Fieldset";
import { Space } from "antd";
import iconMapper from "@/helpers/iconMapper";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
  responsiveBehaviour: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true, responsiveBehaviour } = props;
  const Icon : React.ElementType | undefined = iconMapper(ooui.icon || "");
  const label = (
    <Space>
        {Icon ? <Icon /> : null}
        {ooui.label}
      </Space>
  )

  return (
    <>
      {ooui.label && showLabel ? (
        <Fieldset label={label}>
          <Container
            container={ooui!.container}
            responsiveBehaviour={responsiveBehaviour}
          />
        </Fieldset>
      ) : (
        <Container
          container={ooui!.container}
          responsiveBehaviour={responsiveBehaviour}
        />
      )}
    </>
  );
}

export default Group;
