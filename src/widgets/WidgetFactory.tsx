import React from "react";
import { Widget as WidgetOoui } from "ooui";
import * as Widgets from "@/index";

type widgets = {
  [key: string]: any;
};

const widgetTypes = Widgets as widgets;

const createReactWidget = (widgetOoui: WidgetOoui, key?: string) => {
  const type = widgetOoui.constructor.name;
  const widgetClass = widgetTypes[type];
  if (!widgetClass) {
    return null;
  }
  return React.createElement(widgetClass, { ooui: widgetOoui, key });
};

export { createReactWidget };
