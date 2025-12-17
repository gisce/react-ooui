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
  Spinner,
  Carousel,
  ColorPicker,
} from "@/index";
import { Many2oneLazy } from "./base/many2one/Many2oneLazy";
import { Image } from "./base/Image";
import { Icon } from "./base/Icon";
import { FiberGrid } from "./custom/FiberGrid";
import { Timeline } from "./custom/Timeline";
import { Indicator } from "./custom/Indicator";
import { Tags } from "./custom/Tags";
import { ActionButtons } from "./custom/ActionButtons";
import { QRCode } from "./custom/QRCode";
import Card from "./containers/Card";
import { createElement } from "react";
import { Many2one as Many2oneOoui } from "@gisce/ooui";

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
    case "many2one_lazy":
      return Many2oneLazy;
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
    case "icon":
      return Icon;
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
    case "json":
      return CodeEditor;
    case "comments_timeline":
      return CommentsTimelineField;
    case "html_preview":
      return HTMLPreview;
    case "alert":
      return Alert;
    case "spinner":
      return Spinner;
    case "carousel":
      return Carousel;
    case "colorPicker":
      return ColorPicker;
    case "action_buttons":
      return ActionButtons;
    case "qrcode":
      return QRCode;
    case "card":
      return Card;
    default:
      return undefined;
  }
};

const createReactWidget = (props: any) => {
  const { ooui } = props;
  const { type }: { type: string } = ooui;

  let effectiveType = type;
  let effectiveOoui = ooui;

  // When a Selection field has fieldType="many2one", render as Many2oneLazy
  // but we need to create a proper Many2oneOoui with the relation property
  if (type === "selection" && ooui.fieldType === "many2one") {
    effectiveType = "many2one_lazy";
    // Create a proper Many2oneOoui with relation from raw_props
    effectiveOoui = new Many2oneOoui({
      name: ooui._id,
      string: ooui.label,
      relation: ooui.relation || ooui.raw_props?.relation,
      context: ooui.context,
      domain: ooui.domain,
      readOnly: ooui.readOnly,
      required: ooui.required,
    });
    effectiveOoui.parsedWidgetProps = ooui.parsedWidgetProps;
  }

  const widgetClass: any = getWidgetType(effectiveType);

  if (!widgetClass) {
    return null;
  }

  return createElement(widgetClass, { ...props, ooui: effectiveOoui });
};

export { createReactWidget };
