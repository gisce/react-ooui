import React from "react";
import * as Widgets from "@/index";

type widgets = {
  [key: string]: any;
};

const widgetTypes = Widgets as widgets;

const createReactWidget = (props: any) => {
  const { ooui } = props;
  const type = ooui.constructor.name;

  // TODO: this is provisional, just to test Many2Many
  if (type === "Many2many") {
    return React.createElement(widgetTypes["One2many"], props);
  }
  
  const widgetClass = widgetTypes[type];
  if (!widgetClass) {
    return null;
  }
  return React.createElement(widgetClass, props);
};

export { createReactWidget };
