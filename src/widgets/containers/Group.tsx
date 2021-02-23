import React from "react";
import { Group as GroupOoui } from "ooui";
import Container from "./Container";

type Props = {
  ooui: GroupOoui;
  showLabel?: boolean;
};

function Group(props: Props): React.ReactElement {
  const { ooui, showLabel = true } = props;

  return (
    <>
      {ooui.label && showLabel ? (
        // TODO: change in-line styles to TailWind classes
        <fieldset
          style={{
            border: "1px solid #ccc",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
          }}
        >
          <legend
            style={{
              all: "initial",
              marginLeft: "1em",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
              fontFamily:
                "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
            }}
          >
            {ooui.label}
          </legend>
          <Container container={ooui!.container} />
        </fieldset>
      ) : (
        <Container container={ooui!.container} />
      )}
    </>
  );
}

export default Group;
