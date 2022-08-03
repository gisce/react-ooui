import * as Icons from "@ant-design/icons";

const iconMapping: { [key: string]: React.ElementType } = {
  STOCK_HELP: Icons.QuestionOutlined,
  STOCK_GO_UP: Icons.ArrowUpOutlined,
  STOCK_SORT_DESCENDING: Icons.SortDescendingOutlined,
  STOCK_ADD: Icons.PlusOutlined,
  STOCK_GOTO_LAST: Icons.FastForwardOutlined,
  STOCK_FIND: Icons.SearchOutlined,
  STOCK_PROPERTIES: Icons.ControlOutlined,
  STOCK_DIALOG_INFO: Icons.InfoOutlined,
  STOCK_FLOPPY: Icons.UsbOutlined,
  STOCK_JUSTIFY_CENTER: Icons.AlignCenterOutlined,
  STOCK_GO_BACK: Icons.ArrowLeftOutlined,
  STOCK_UNDERLINE: Icons.UnderlineOutlined,
  STOCK_BOLD: Icons.BoldOutlined,
  STOCK_APPLY: Icons.CheckOutlined,
  STOCK_ZOOM_OUT: Icons.ZoomOutOutlined,
  "terp-graph": Icons.PieChartOutlined,
  "terp-crm": Icons.ContactsOutlined,
  STOCK_STRIKETHROUGH: Icons.StrikethroughOutlined,
  STOCK_MEDIA_REWIND: Icons.BackwardOutlined,
  "terp-partner": Icons.TeamOutlined,
  STOCK_PRINT: Icons.PrinterOutlined,
  STOCK_NO: Icons.CloseOutlined,
  "terp-mrp": Icons.BuildOutlined,
  "terp-product": Icons.ShoppingOutlined,
  STOCK_GOTO_FIRST: Icons.FastBackwardOutlined,
  STOCK_CLOSE: Icons.CloseOutlined,
  STOCK_REMOVE: Icons.MinusOutlined,
  STOCK_CUT: Icons.ScissorOutlined,
  STOCK_DIALOG_AUTHENTICATION: Icons.SafetyOutlined,
  STOCK_ZOOM_FIT: Icons.ExpandOutlined,
  STOCK_JUMP_TO: Icons.SelectOutlined,
  STOCK_HARDDISK: Icons.HddOutlined,
  STOCK_SAVE_AS: Icons.SaveOutlined,
  STOCK_UNDO: Icons.UndoOutlined,
  STOCK_JUSTIFY_RIGHT: Icons.AlignRightOutlined,
  STOCK_DIALOG_ERROR: Icons.CloseCircleOutlined,
  STOCK_INDEX: Icons.ProfileOutlined,
  STOCK_GOTO_BOTTOM: Icons.VerticalAlignBottomOutlined,
  STOCK_MEDIA_NEXT: Icons.StepForwardOutlined,
  STOCK_REDO: Icons.RedoOutlined,
  STOCK_COPY: Icons.CopyOutlined,
  STOCK_MEDIA_PAUSE: Icons.PauseOutlined,
  STOCK_GO_FORWARD: Icons.ArrowRightOutlined,
  STOCK_UNDELETE: Icons.UndoOutlined,
  STOCK_EXECUTE: Icons.SettingOutlined,
  STOCK_SAVE: Icons.SaveOutlined,
  STOCK_DIALOG_QUESTION: Icons.QuestionCircleOutlined,
  STOCK_SORT_ASCENDING: Icons.SortAscendingOutlined,
  STOCK_REFRESH: Icons.ReloadOutlined,
  STOCK_MEDIA_FORWARD: Icons.ForwardOutlined,
  STOCK_STOP: Icons.BorderOutlined,
  STOCK_PRINT_PREVIEW: Icons.PrinterOutlined,
  STOCK_HOME: Icons.HomeOutlined,
  STOCK_PASTE: Icons.CarryOutOutlined,
  STOCK_ZOOM_100: Icons.ZoomInOutlined,
  STOCK_FIND_AND_REPLACE: Icons.FileSearchOutlined,
  STOCK_DIALOG_WARNING: Icons.WarningOutlined,
  STOCK_ZOOM_IN: Icons.ZoomInOutlined,
  STOCK_CONVERT: Icons.ExportOutlined,
  STOCK_ITALIC: Icons.ItalicOutlined,
  STOCK_YES: Icons.CheckOutlined,
  STOCK_MEDIA_PLAY: Icons.PlayCircleOutlined,
  STOCK_MEDIA_RECORD: Icons.VideoCameraOutlined,
  STOCK_MEDIA_PREVIOUS: Icons.StepBackwardOutlined,
  STOCK_NEW: Icons.FileAddOutlined,
  STOCK_CANCEL: Icons.CloseOutlined,
  STOCK_DISCONNECT: Icons.ApiOutlined,
  STOCK_JUSTIFY_LEFT: Icons.AlignLeftOutlined,
  STOCK_FILE: Icons.FileOutlined,
  STOCK_QUIT: Icons.LogoutOutlined,
  STOCK_EDIT: Icons.EditOutlined,
  STOCK_CONNECT: Icons.ApiOutlined,
  STOCK_GO_DOWN: Icons.CaretDownOutlined,
  STOCK_NETWORK: Icons.ApartmentOutlined,
  STOCK_OK: Icons.CheckOutlined,
  STOCK_GOTO_TOP: Icons.VerticalAlignTopOutlined,
  STOCK_ABOUT: Icons.StarOutlined,
  STOCK_COLOR_PICKER: Icons.AimOutlined,
  STOCK_SELECT_FONT: Icons.FontSizeOutlined,
  "terp-purchase": Icons.ShoppingCartOutlined,
  STOCK_DELETE: Icons.DeleteOutlined,
  STOCK_DND: Icons.FileTextOutlined,
  STOCK_CLEAR: Icons.CloseSquareOutlined,
  STOCK_UNINDENT: Icons.AlignLeftOutlined,
  STOCK_PREFERENCES: Icons.SettingOutlined,
};

export default (key: string): React.ElementType => {
  if (key.indexOf("gtk-") !== -1) {
    const rootIcon = key.replace("gtk-", "").replace("-", "_");
    const newKey = `STOCK_${rootIcon.toUpperCase()}`;
    return iconMapping[newKey];
  }
  if (iconMapping.hasOwnProperty(key)) {
    return iconMapping[key];
  } else {
    const antKey = `${key.split("-").map((word) => (
      word.replace(/\w\S*/g, (w) => (w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())))
    ).join("")}Outlined`
    // @ts-ignore
    return Icons[antKey];
  }


};
