import React from "react";
import * as AntIcons from "@ant-design/icons";
import * as TablerIcons from "@tabler/icons-react";
import Icon from "@ant-design/icons";

type TablerKey = keyof typeof TablerIcons;
type AntKey = keyof typeof AntIcons;

const iconMapping: { [key: string]: string } = {
  "terp-purchase": "ShoppingCart",
  "terp-graph": "PieChart",
  "terp-crm": "Contacts",
  "terp-hr": "Friends",
  "terp-account": "BuildingBank",
  "terp-project": "Checklist",
  "terp-administration": "Adjustments",
  "terp-partner": "Team",
  "terp-mrp": "Build",
  "terp-product": "Shopping",
  STOCK_JUSTIFY_FILL: "UnorderedList",
  STOCK_INDENT: "IndentIncrease",
  STOCK_HELP: "Question",
  STOCK_GO_UP: "ArrowUp",
  STOCK_SORT_DESCENDING: "SortDescending",
  STOCK_ADD: "Plus",
  STOCK_GOTO_LAST: "FastForward",
  STOCK_FIND: "Search",
  STOCK_PROPERTIES: "Control",
  STOCK_DIALOG_INFO: "Info",
  STOCK_FLOPPY: "Usb",
  STOCK_JUSTIFY_CENTER: "AlignCenter",
  STOCK_GO_BACK: "ArrowLeft",
  STOCK_UNDERLINE: "Underline",
  STOCK_BOLD: "Bold",
  STOCK_APPLY: "Check",
  STOCK_ZOOM_OUT: "ZoomOut",
  STOCK_STRIKETHROUGH: "Strikethrough",
  STOCK_MEDIA_REWIND: "Backward",
  STOCK_PRINT: "Printer",
  STOCK_NO: "Close",
  STOCK_GOTO_FIRST: "FastBackward",
  STOCK_CLOSE: "Close",
  STOCK_REMOVE: "Minus",
  STOCK_CUT: "Scissor",
  STOCK_DIALOG_AUTHENTICATION: "Safety",
  STOCK_ZOOM_FIT: "Expand",
  STOCK_JUMP_TO: "Select",
  STOCK_HARDDISK: "Hdd",
  STOCK_SAVE_AS: "Save",
  STOCK_UNDO: "Undo",
  STOCK_JUSTIFY_RIGHT: "AlignRight",
  STOCK_DIALOG_ERROR: "CloseCircle",
  STOCK_INDEX: "Profile",
  STOCK_GOTO_BOTTOM: "VerticalAlignBottom",
  STOCK_MEDIA_NEXT: "StepForward",
  STOCK_REDO: "Redo",
  STOCK_COPY: "Copy",
  STOCK_MEDIA_PAUSE: "Pause",
  STOCK_GO_FORWARD: "ArrowRight",
  STOCK_UNDELETE: "Undo",
  STOCK_EXECUTE: "Setting",
  STOCK_SAVE: "Save",
  STOCK_DIALOG_QUESTION: "QuestionCircle",
  STOCK_SORT_ASCENDING: "SortAscending",
  STOCK_REFRESH: "Reload",
  STOCK_MEDIA_FORWARD: "Forward",
  STOCK_STOP: "Border",
  STOCK_PRINT_PREVIEW: "Printer",
  STOCK_HOME: "Home",
  STOCK_PASTE: "CarryOut",
  STOCK_ZOOM_100: "ZoomIn",
  STOCK_FIND_AND_REPLACE: "FileSearch",
  STOCK_DIALOG_WARNING: "Warning",
  STOCK_ZOOM_IN: "ZoomIn",
  STOCK_CONVERT: "Export",
  STOCK_ITALIC: "Italic",
  STOCK_YES: "Check",
  STOCK_MEDIA_PLAY: "PlayCircle",
  STOCK_MEDIA_RECORD: "VideoCamera",
  STOCK_MEDIA_PREVIOUS: "StepBackward",
  STOCK_NEW: "FileAdd",
  STOCK_CANCEL: "Close",
  STOCK_DISCONNECT: "Api",
  STOCK_JUSTIFY_LEFT: "AlignLeft",
  STOCK_FILE: "File",
  STOCK_QUIT: "Logout",
  STOCK_EDIT: "Edit",
  STOCK_CONNECT: "Api",
  STOCK_GO_DOWN: "CaretDown",
  STOCK_NETWORK: "Apartment",
  STOCK_OK: "Check",
  STOCK_GOTO_TOP: "VerticalAlignTop",
  STOCK_ABOUT: "Star",
  STOCK_COLOR_PICKER: "Aim",
  STOCK_SELECT_FONT: "FontSize",
  STOCK_DELETE: "Delete",
  STOCK_DND: "FileText",
  STOCK_CLEAR: "CloseSquare",
  STOCK_UNINDENT: "AlignLeft",
  STOCK_PREFERENCES: "Setting",
};

export default (key: string) => {
  if (key.indexOf("gtk-") !== -1) {
    const rootIcon = key.replace("gtk-", "").replace(/\-/g, "_");
    key = `STOCK_${rootIcon.toUpperCase()}`;
  }

  if (iconMapping.hasOwnProperty(key)) {
    return getIconForKey(iconMapping[key]);
  }

  return getIconForKey(key);
};

function toCamelCase(key: string) : string  {
  return `${key
    .split("-")
    .map((word) =>
      word.replace(
        /\w\S*/g,
        (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
      )
    )
    .join("")}`;
}

function getIconForKey(IconCamelCase: string) {
  if (IconCamelCase.indexOf("-") !== -1) {
    IconCamelCase = toCamelCase(IconCamelCase);
  }

  const antKey: AntKey = `${IconCamelCase}Outlined` as any;
  if (AntIcons[antKey]) {
    return AntIcons[antKey];
  }

  const tablerKey: TablerKey = `Icon${IconCamelCase}` as any;
  if (TablerIcons[tablerKey]) {
    const TablerIcon = () =>
      React.createElement(TablerIcons[tablerKey] as any, {
        fill: "transparent",
        height: 17,
        width: 17,
      });
    const CustomIcon = () =>
      React.createElement(Icon, {
        component: TablerIcon,
      });
    return CustomIcon;
  }

  return undefined;
}
