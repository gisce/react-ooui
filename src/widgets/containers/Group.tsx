import React from "react";
import { Group as GroupOoui } from "ooui";
import Container from "./Container";
import Fieldset from "@/ui/Fieldset";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true } = props;

  return (
    <>
      {ooui.label && showLabel ? (
        <Fieldset label={ooui.label}>
          <Container container={ooui!.container} />
        </Fieldset>
      ) : (
        <Container container={ooui!.container} />
      )}
    </>
  );
}

export default Group;
