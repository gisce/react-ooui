import React from "react";
import { Widget } from "ooui";

const createReactWidget = (widget: Widget) => {
  const type = widget.constructor.name;

  if (Object.keys(widget).indexOf("_container") !== -1) {
    return <div>{type} with container</div>;
  }

  return <div>{type}</div>;
};

export { createReactWidget };
