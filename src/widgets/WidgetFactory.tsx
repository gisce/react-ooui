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
  if (!widgetClass) {
    // TODO: Implement pending types, i.e: NewLine arrives as Widget
    return null;
  }
  return React.createElement(widgetClass, { ooui: widgetOoui });
};

export { createReactWidget };
