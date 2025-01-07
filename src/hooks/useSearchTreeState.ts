import { useState } from "react";
import {
  useActionViewContext,
  SearchQueryParams,
  useIsUnderActionViewContext,
} from "@/context/ActionViewContext";
import { ColumnState } from "@gisce/react-formiga-table";

export type SearchTreeState = {
  treeIsLoading: boolean;
  setTreeIsLoading: (value: boolean) => void;
  searchVisible: boolean;
  setSearchVisible: (value: boolean) => void;
  selectedRowItems: any[];
  setSelectedRowItems: (value: any[]) => void;
  treeFirstVisibleRow: number;
  setTreeFirstVisibleRow: (value: number) => void;
  searchParams: any[];
  setSearchParams: (value: any[]) => void;
  searchValues: any;
  setSearchValues: (value: any) => void;
  searchTreeNameSearch?: string;
  setSearchTreeNameSearch: (value?: string) => void;
  results: any[];
  setResults: (value: any[]) => void;
  searchQuery?: SearchQueryParams;
  setSearchQuery: (value: SearchQueryParams) => void;
  totalItems: number;
  setTotalItems: (value: number) => void;
  isActive?: boolean;
  sortState?: ColumnState[];
  setSortState: (value: ColumnState[] | undefined) => void;
};

export function useSearchTreeState({
  useLocalState = false,
}: {
  useLocalState: boolean;
}): SearchTreeState {
  const isUnderActionViewContext =
    useIsUnderActionViewContext() && !useLocalState;
  const actionViewContext = useActionViewContext();

  // If we're not using ActionView context, create local state
  const [localTreeIsLoading, setLocalTreeIsLoading] = useState(false);
  const [localSearchVisible, setLocalSearchVisible] = useState(false);
  const [localSelectedRowItems, setLocalSelectedRowItems] = useState<any[]>([]);
  const [localTreeFirstVisibleRow, setLocalTreeFirstVisibleRow] = useState(0);
  const [localSearchParams, setLocalSearchParams] = useState<any[]>([]);
  const [localSearchValues, setLocalSearchValues] = useState<any>({});
  const [localSearchTreeNameSearch, setLocalSearchTreeNameSearch] =
    useState<string>();
  const [localResults, setLocalResults] = useState<any[]>([]);
  const [localSearchQuery, setLocalSearchQuery] = useState<SearchQueryParams>();
  const [localTotalItems, setLocalTotalItems] = useState(0);
  const [localSortState, setLocalSortState] = useState<
    ColumnState[] | undefined
  >();

  // Return either context values or local state values based on isUnderActionViewContext
  return isUnderActionViewContext
    ? {
        treeIsLoading: actionViewContext.treeIsLoading ?? false,
        setTreeIsLoading: actionViewContext.setTreeIsLoading ?? (() => {}),
        searchVisible: actionViewContext.searchVisible ?? false,
        setSearchVisible: actionViewContext.setSearchVisible ?? (() => {}),
        selectedRowItems: actionViewContext.selectedRowItems || [],
        setSelectedRowItems:
          actionViewContext.setSelectedRowItems ?? (() => {}),
        treeFirstVisibleRow: actionViewContext.treeFirstVisibleRow ?? 0,
        setTreeFirstVisibleRow:
          actionViewContext.setTreeFirstVisibleRow ?? (() => {}),
        searchParams: actionViewContext.searchParams || [],
        setSearchParams: actionViewContext.setSearchParams ?? (() => {}),
        searchValues: actionViewContext.searchValues || {},
        setSearchValues: actionViewContext.setSearchValues ?? (() => {}),
        searchTreeNameSearch: actionViewContext.searchTreeNameSearch,
        setSearchTreeNameSearch:
          actionViewContext.setSearchTreeNameSearch ?? (() => {}),
        results: actionViewContext.results || [],
        setResults: actionViewContext.setResults ?? (() => {}),
        searchQuery: actionViewContext.searchQuery,
        setSearchQuery: actionViewContext.setSearchQuery ?? (() => {}),
        totalItems: actionViewContext.totalItems ?? 0,
        setTotalItems: actionViewContext.setTotalItems ?? (() => {}),
        isActive: actionViewContext.isActive,
        sortState: actionViewContext.sortState,
        setSortState: actionViewContext.setSortState ?? (() => {}),
      }
    : {
        treeIsLoading: localTreeIsLoading,
        setTreeIsLoading: setLocalTreeIsLoading,
        searchVisible: localSearchVisible,
        setSearchVisible: setLocalSearchVisible,
        selectedRowItems: localSelectedRowItems,
        setSelectedRowItems: setLocalSelectedRowItems,
        treeFirstVisibleRow: localTreeFirstVisibleRow,
        setTreeFirstVisibleRow: setLocalTreeFirstVisibleRow,
        searchParams: localSearchParams,
        setSearchParams: setLocalSearchParams,
        searchValues: localSearchValues,
        setSearchValues: setLocalSearchValues,
        searchTreeNameSearch: localSearchTreeNameSearch,
        setSearchTreeNameSearch: setLocalSearchTreeNameSearch,
        results: localResults,
        setResults: setLocalResults,
        searchQuery: localSearchQuery,
        setSearchQuery: setLocalSearchQuery,
        totalItems: localTotalItems,
        setTotalItems: setLocalTotalItems,
        isActive: undefined,
        sortState: localSortState,
        setSortState: setLocalSortState,
      };
}
