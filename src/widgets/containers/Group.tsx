import React from "react";
import { Group as GroupOoui } from "@gisce/ooui";
import Container from "./Container";
import { FieldSet } from "@gisce/react-formiga-components";
import { Space } from "antd";
import iconMapper from "@/helpers/iconMapper";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
  responsiveBehaviour: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true, responsiveBehaviour } = props;
  const icon: React.ElementType | undefined = iconMapper(ooui.icon || "");

  return (
    <>
      {ooui.label && showLabel ? (
        <FieldSet label={ooui.label} icon={icon}>
          <Container
            container={ooui!.container}
            responsiveBehaviour={responsiveBehaviour}
          />
        </FieldSet>
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
