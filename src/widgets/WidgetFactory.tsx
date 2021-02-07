import React from "react";
import { Widget as WidgetOoui } from "ooui";
import * as Widgets from "..";

type widgets = {
  [key: string]: any;
};

const widgetTypes = Widgets as widgets;

const createReactWidget = (widgetOoui: WidgetOoui) => {
  const type = widgetOoui.constructor.name;
  const widgetClass = widgetTypes[type];
  return React.createElement(widgetClass, { ooui: widgetOoui });
};

export { createReactWidget };
