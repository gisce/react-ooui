import React from "react";

type Props = {
  label: string;
  children: any;
};

const Fieldset = (props: Props): React.ReactElement => {
  const { label, children } = props;

  return (
    // TODO: change in-line styles to TailWind classes
    <fieldset className="pl-2 pr-2 border-gray-400 border border-solid  font-sans">
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
        {label}
      </legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
