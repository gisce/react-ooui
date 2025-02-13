import { useState } from "react";
import {
  useActionViewContext,
  SearchQueryParams,
  useIsUnderActionViewContext,
} from "@/context/ActionViewContext";
import { ColumnState } from "@gisce/react-formiga-table";
import { DEFAULT_PAGE_SIZE } from "@/hooks/usePaginatedSearch";
import {
  DEFAULT_TREE_TYPE,
  TreeType,
} from "@/views/actionViews/TreeActionView";

export type SearchTreeState = {
  treeIsLoading: boolean;
  setTreeIsLoading: (value: boolean) => void;
  searchVisible: boolean;
  setSearchVisible: (value: boolean) => void;
  selectedRowItems: any[];
  setSelectedRowItems: (value: any[] | ((prevValue: any[]) => any[])) => void;
  treeFirstVisibleRow: number;
  setTreeFirstVisibleRow: (value: number) => void;
  treeFirstVisibleColumn: string | undefined;
  setTreeFirstVisibleColumn: (value: string | undefined) => void;
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
  pageSize: number;
  setPageSize: (value: number) => void;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  treeType: TreeType;
  setTreeType: (value: TreeType) => void;
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
  const [localTreeFirstVisibleColumn, setLocalTreeFirstVisibleColumn] =
    useState<string | undefined>(undefined);
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
  const [localPageSize, setLocalPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [localCurrentPage, setLocalCurrentPage] = useState<number>(1);
  const [localTreeType, setLocalTreeType] =
    useState<TreeType>(DEFAULT_TREE_TYPE);

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
        treeFirstVisibleColumn: actionViewContext.treeFirstVisibleColumn,
        setTreeFirstVisibleColumn:
          actionViewContext.setTreeFirstVisibleColumn ?? (() => {}),
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
        pageSize: actionViewContext.pageSize ?? DEFAULT_PAGE_SIZE,
        setPageSize: actionViewContext.setPageSize ?? (() => {}),
        currentPage: actionViewContext.currentPage ?? 1,
        setCurrentPage: actionViewContext.setCurrentPage ?? (() => {}),
        treeType: actionViewContext.treeType ?? DEFAULT_TREE_TYPE,
        setTreeType: actionViewContext.setTreeType ?? (() => {}),
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
        treeFirstVisibleColumn: localTreeFirstVisibleColumn,
        setTreeFirstVisibleColumn: setLocalTreeFirstVisibleColumn,
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
        pageSize: localPageSize,
        setPageSize: setLocalPageSize,
        currentPage: localCurrentPage,
        setCurrentPage: setLocalCurrentPage,
        treeType: localTreeType,
        setTreeType: setLocalTreeType,
      };
}
