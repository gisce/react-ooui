import { View } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import deepmerge from "deepmerge";

export interface Action {
  id: number;
  type: string;
  title: string;
}

export interface Tab {
  id: string;
  isLoading?: boolean;
  isClosable?: boolean;
  action: Action;
  availableViews?: View[];
  currentView?: View;
  context?: any;
  domain?: any[];
  model?: string;
  viewOptions?: {
    tree?: {
      expandable?: boolean;
      limit?: number;
    };
    form?: {
      defaultValues?: any;
      forcedValues?: any;
      resourceId?: number;
    };
  };
}

export interface TabState {
  tabs: Tab[];
  activeTabKey: string | null;
}

const initialState: TabState = {
  tabs: [],
  activeTabKey: null,
};

export interface UpdateTabPayload {
  id: string;
  tab: Partial<Tab>;
}

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    addTab: (state: TabState, action: PayloadAction<Omit<Tab, "id">>) => {
      const newTab: Tab = {
        id: nanoid(),
        ...action.payload,
      };
      state.tabs.push(newTab);
      state.activeTabKey = newTab.id;
    },
    closeTab: (state: TabState, action: PayloadAction<string>) => {
      if (state.activeTabKey === action.payload) {
        const currentIndex = state.tabs.findIndex(
          (tab: any) => tab.id === action.payload,
        );

        if (state.tabs[currentIndex - 1]) {
          state.activeTabKey = state.tabs[currentIndex + 1].id;
        }
        if (state.tabs[currentIndex + 1]) {
          state.activeTabKey = null;
        }
      }

      state.tabs = state.tabs.filter((tab: any) => tab.id !== action.payload);
    },
    changeActiveTab: (state: TabState, action: PayloadAction<string>) => {
      state.activeTabKey = action.payload;
    },
    updateTab: (state: TabState, action: PayloadAction<UpdateTabPayload>) => {
      const index = state.tabs.findIndex((tab) => tab.id === action.payload.id);
      if (index !== -1) {
        const updatedData = deepmerge(
          state.tabs[index] || {},
          action.payload.tab || {},
        );
        state.tabs[index] = updatedData;
      }
    },
  },
});

export const { addTab, closeTab, changeActiveTab, updateTab } =
  tabSlice.actions;

export const reducer = tabSlice.reducer;
