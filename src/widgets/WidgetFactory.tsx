import {
  Notebook,
  Group,
  Label,
  Char,
  Text,
  Button,
  ButtonGroup,
  Selection,
  Many2one,
  Boolean,
  Integer,
  Float,
  Date,
  DateTime,
  Time,
  One2many,
  Separator,
  Form,
  Tree,
  Reference,
  Binary,
  Url,
  Email,
  FloatTime,
  ProgressBar,
  MultiCheckbox,
  Markdown,
  Radio,
  Switch,
  Steps,
  ArrowStepsField,
  Tag,
  CodeEditor,
  CommentsTimelineField,
  HTMLPreview,
  Alert,
} from "@/index";
import { Image } from "./base/Image";
import { FiberGrid } from "./custom/FiberGrid";
import { Timeline } from "./custom/Timeline";
import { Indicator } from "./custom/Indicator";
import { Tags } from "./custom/Tags";
import { createElement } from "react";

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
      return Char;
    case "text":
      return Text;
    case "button":
      return Button;
    case "buttonGroup":
      return ButtonGroup;
    case "selection":
      return Selection;
    case "many2one":
      return Many2one;
    case "boolean":
      return Boolean;
    case "integer":
      return Integer;
    case "float":
      return Float;
    case "progressbar":
      return ProgressBar;
    case "date":
      return Date;
    case "datetime":
      return DateTime;
    case "time":
      return Time;
    case "one2many":
    case "one2many_list":
    case "many2many":
      return One2many;
    case "separator":
      return Separator;
    case "reference":
      return Reference;
    case "binary":
      return Binary;
    case "image":
      return Image;
    case "url":
      return Url;
    case "email":
      return Email;
    case "float_time":
      return FloatTime;
    case "fiber_grid":
      return FiberGrid;
    case "timeline":
      return Timeline;
    case "indicator":
      return Indicator;
    case "tags":
      return Tags;
    case "tag":
      return Tag;
    case "multicheckbox":
      return MultiCheckbox;
    case "markdown":
      return Markdown;
    case "radio":
      return Radio;
    case "switch":
      return Switch;
    case "steps":
      return Steps;
    case "arrow_steps":
      return ArrowStepsField;
    case "codeeditor":
      return CodeEditor;
    case "comments_timeline":
      return CommentsTimelineField;
    case "html_preview":
      return HTMLPreview;
    case "alert":
      return Alert;
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

  return createElement(widgetClass, props);
};

export { createReactWidget };
