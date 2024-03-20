import { UpdateTabPayload } from "@/redux/slices/tabSlice";
import { InitialViewData, View, ViewType } from "@/types";
import {
  ActionTarget,
  Context,
  Domain,
  DomainType,
  Model,
  ValuesType,
} from "@/types/base";
import { Tab } from "@/types/tab";
import { ShortcutApi } from "@/ui/FavouriteButton";

export type RootContextType = {
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
  openShortcut: (shortcut: ShortcutApi) => void;
  currentTab?: Tab;
  updateTab: ({ id, tab }: UpdateTabPayload) => void;
  closeTab: (id: string) => void;
  getTab: (id?: string) => Tab | undefined;
  goToResourceId?: (ids: number[]) => Promise<void>;
};

export type RetrieveAndOpenActionArgs = {
  action: string;
  domain: DomainType;
  values: ValuesType;
  forced_values: ValuesType;
  res_id?: number;
  initialViewType?: ViewType;
};

export type OpenDefaultActionForModelArgs = Omit<
  RetrieveAndOpenActionArgs,
  "action"
> &
  Model;

export type OpenActionArgs = Model &
  Domain &
  Context & {
    values?: ValuesType;
    forced_values?: ValuesType;
    res_id?: number;
    target?: ActionTarget;
    action_id: number;
    action_type: string;
    action_title: string;
    limit?: number;
    tabKey?: string;
    initialView: InitialViewData;
    views: View[];
  };

export type RetrieveAndProcessActionDataArgs = {
  action: string;
  domain: DomainType;
  values?: ValuesType;
  forced_values?: ValuesType;
  res_id?: number;
  initialViewType?: ViewType;
};
