import { Tab, UpdateTabPayload } from "@/redux/slices/tabSlice";
import { InitialViewData, View, ViewType } from "@/types";
import { ShortcutApi } from "@/ui/FavouriteButton";

export type RootContextType = {
  updateTab: ({ id, tab }: UpdateTabPayload) => void;
  processAction: ({
    actionData,
    fields,
    values,
    context,
  }: {
    actionData: any;
    fields: any;
    values: any;
    context?: any;
    onRefreshParentValues?: () => void;
  }) => Promise<any>;
  openAction: ({
    domain,
    context,
    model,
    views,
    title,
    target,
    initialView,
    action_id,
    action_type,
    res_id,
    values,
    forced_values,
  }: {
    domain: any;
    context: any;
    model: string;
    views: any[];
    title: string;
    target: string;
    initialView: InitialViewData;
    action_id: number;
    action_type: string;
    res_id?: number | boolean;
    values?: any;
    forced_values?: any;
  }) => void;
  openRelate: ({
    relateData,
    fields,
    values,
    action_id,
    action_type,
  }: {
    relateData: any;
    fields: any;
    values: any;
    action_id: number;
    action_type: string;
  }) => void;
  openDefaultActionForModel: ({
    model,
    values,
    forced_values,
    initialViewType,
    res_id,
    domain,
  }: {
    model: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
    domain?: any;
  }) => void;
  activeTabKey: string;
  onChangeTab: (key: string) => void;
  onRemoveTab: (key: string) => void;
  openShortcut: (shortcut: ShortcutApi) => void;
  tabs: any[];
  currentTab?: Tab;
  currentView?: View;
  setCurrentView?: (view?: View) => void;
  currentId?: number;
  setCurrentId?: (id?: number) => void;
  goToResourceId?: (ids: number[]) => Promise<void>;
};
