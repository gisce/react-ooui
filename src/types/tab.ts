import { View } from ".";
import { ContextType, DomainType, ValuesType } from "./base";

export interface Action {
  id: number;
  type: string;
  title: string;
}

export interface BaseTab {
  id: string;
  action: Action;
  isClosable: boolean;
}

export interface LoadingTab extends BaseTab {
  isLoading: true;
  availableViews?: never;
  currentView?: never;
  context?: never;
  domain?: never;
  model?: never;
  viewOptions?: never;
}

export interface LoadedTab extends BaseTab {
  isLoading: false;
  availableViews: View[];
  currentView: View;
  context: ContextType;
  domain: DomainType;
  model: string;
  viewOptions?: {
    tree?: {
      limit: number;
    };
    form?: {
      defaultValues?: ValuesType;
      forcedValues?: ValuesType;
      resourceId?: number;
    };
  };
}

export type Tab = LoadingTab | LoadedTab;

export function isLoadingTab(tab: Tab): tab is LoadingTab {
  return tab.isLoading;
}

export function isLoadedTab(tab: Tab): tab is LoadedTab {
  return !tab.isLoading;
}
