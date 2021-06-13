import React from "react";

import {
  Notebook,
  Group,
  Label,
  Char,
  Text,
  Button,
  Selection,
  Many2one,
  Boolean,
  Integer,
  Float,
  Date,
  DateTime,
  One2many,
  Separator,
  Form,
  Tree,
  Reference,
} from "@/index";

const getWidgetType = (type: string) => {
  switch (type) {
    case "form":
      return Form;
    case "tree":
      return Tree;
    case "notebook":
      return Notebook;
    case "group":
      return Group;
    case "label":
      return Label;
    case "char":
    case "url":
    case "email":
      return Char;
    case "text":
      return Text;
    case "button":
      return Button;
    case "selection":
      return Selection;
    case "many2one":
      return Many2one;
    case "boolean":
      return Boolean;
    case "integer":
      return Integer;
    case "float":
    case "float_time":
    case "progressbar":
      return Float;
    case "date":
      return Date;
    case "datetime":
      return DateTime;
    case "one2many":
    case "one2many_list":
    case "many2many":
      return One2many;
    case "separator":
      return Separator;
    case "reference":
      return Reference;
    default:
      return undefined;
  }
};

const createReactWidget = (props: any) => {
  const { ooui } = props;
  const { type }: { type: string } = ooui;

  const widgetClass: any = getWidgetType(type);

  if (!widgetClass) {
    return null;
  }

  return React.createElement(widgetClass, props);
};

export { createReactWidget };
