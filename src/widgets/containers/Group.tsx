import React from "react";
import { Group as GroupOoui } from "ooui";
import Container from "./Container";
import Fieldset from "@/ui/Fieldset";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
  responsiveBehaviour: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true, responsiveBehaviour } = props;

  return (
    <>
      {ooui.label && showLabel ? (
        <Fieldset label={ooui.label}>
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
