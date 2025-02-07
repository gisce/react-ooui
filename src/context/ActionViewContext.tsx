import { convertParamsToValues } from "@/helpers/searchHelper";
import { DEFAULT_PAGE_SIZE } from "@/hooks/usePaginatedSearch";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { TreeView, View } from "@/types";
import {
  DEFAULT_TREE_TYPE,
  TreeType,
} from "@/views/actionViews/TreeActionView";
import { ColumnState } from "@gisce/react-formiga-table";
import { createContext, useContext, useEffect, useState } from "react";

type ActionViewProviderProps = {
  title: string;
  currentView: View;
  setCurrentView: (view: View) => void;
  availableViews: View[];
  formRef: any;
  searchTreeRef: any;
  onNewClicked: () => void;
  currentId?: number;
  setCurrentId: (id?: number) => void;
  setCurrentItemIndex: (value?: number) => void;
  currentItemIndex?: number;
  results?: any[];
  setResults: (value: any[]) => void;
  currentModel: string;
  sorter: any;
  setSorter: (sorter: any) => void;
  totalItems: number;
  setTotalItems: (totalItems: number) => void;
  selectedRowItems?: any[];
  setSelectedRowItems: (value: any[] | ((prevValue: any[]) => any[])) => void;
  setSearchTreeNameSearch: (searchString?: string) => void;
  searchTreeNameSearch?: string;
  goToResourceId: (ids: number[], openInSameTab?: boolean) => Promise<void>;
  limit?: number;
  isActive: boolean;
  children: React.ReactNode;
  initialSearchParams?: any[];
};

export type ActionViewContextType = Omit<
  ActionViewProviderProps,
  "children"
> & {
  formIsSaving?: boolean;
  setFormIsSaving?: (value: boolean) => void;
  formHasChanges?: boolean;
  setFormHasChanges?: (value: boolean) => void;
  onFormSave?: () => Promise<{ succeed: boolean; id: number }>;
  removingItem?: boolean;
  setRemovingItem?: (value: boolean) => void;
  formIsLoading?: boolean;
  setFormIsLoading?: (value: boolean) => void;
  treeIsLoading?: boolean;
  setTreeIsLoading?: (value: boolean) => void;
  graphIsLoading?: boolean;
  setGraphIsLoading?: (value: boolean) => void;
  attachments?: any;
  setAttachments?: (value: any) => void;
  duplicatingItem?: boolean;
  setDuplicatingItem?: (value: boolean) => void;
  searchParams?: any[];
  setSearchParams?: (value: any[]) => void;
  searchVisible?: boolean;
  setSearchVisible?: (value: boolean) => void;
  previousView?: View;
  setPreviousView?: (view: View) => void;
  searchValues?: any;
  setSearchValues?: (value: any) => void;
  setLimit?: (value: number) => void;
  setTitle?: (value: string) => void;
  treeFirstVisibleRow: number;
  setTreeFirstVisibleRow: (totalItems: number) => void;
  searchQuery?: SearchQueryParams;
  setSearchQuery?: (value: SearchQueryParams) => void;
  treeType?: TreeType;
  setTreeType?: (value: TreeType) => void;
  sortState?: ColumnState[];
  setSortState?: (value: ColumnState[] | undefined) => void;
  pageSize: number;
  setPageSize?: (value: number) => void;
  currentPage?: number;
  setCurrentPage?: (value: number) => void;
};

export const ActionViewContext = createContext<ActionViewContextType | null>(
  null,
);

export type SearchQueryParams = {
  model: string;
  params: any[];
  name_search?: string;
  context?: any;
  order?: string;
};

const ActionViewProvider = (props: ActionViewProviderProps): any => {
  const {
    children,
    currentView,
    title: titleProps,
    setCurrentView,
    availableViews,
    formRef,
    searchTreeRef,
    onNewClicked,
    currentId,
    setCurrentId,
    setResults,
    results,
    currentItemIndex,
    setCurrentItemIndex,
    currentModel,
    sorter,
    setSorter,
    totalItems,
    setTotalItems,
    setSelectedRowItems,
    selectedRowItems,
    searchTreeNameSearch,
    setSearchTreeNameSearch,
    goToResourceId,
    limit: limitProps,
    isActive,
    initialSearchParams,
  } = props;

  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [removingItem, setRemovingItem] = useState<boolean>(false);
  const [formIsLoading, setFormIsLoading] = useState<boolean>(true);
  const [treeIsLoading, setTreeIsLoading] = useState<boolean>(true);
  const [attachments, setAttachments] = useState<any>([]);
  const [duplicatingItem, setDuplicatingItem] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<any[]>(
    initialSearchParams || [],
  );
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [graphIsLoading, setGraphIsLoading] = useState<boolean>(true);
  const [previousView, setPreviousView] = useState<View>();
  const [searchValues, setSearchValues] = useState<any>(
    convertParamsToValues(
      initialSearchParams || [],
      (currentView as TreeView).fields,
    ),
  );
  const [treeFirstVisibleRow, setTreeFirstVisibleRow] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<SearchQueryParams>();
  const [treeType, setTreeType] = useState<TreeType>(DEFAULT_TREE_TYPE);
  const [sortState, setSortState] = useState<ColumnState[]>();

  const [limit, setLimit] = useState<number>(
    limitProps !== undefined ? limitProps : DEFAULT_SEARCH_LIMIT,
  );
  const [title, setTitle] = useState<string>(titleProps);

  const [pageSize, setPageSize] = useState<number>(DEFAULT_PAGE_SIZE);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    if (results && results.length > 0 && !currentItemIndex) {
      setCurrentItemIndex?.(0);
      setCurrentId?.(results[0].id);
    }
  }, [results]);

  useEffect(() => {
    setLimit(limitProps !== undefined ? limitProps : DEFAULT_SEARCH_LIMIT);
  }, [limitProps]);

  useEffect(() => {
    if (availableViews.length === 1) {
      setPreviousView(availableViews[0]);
    } else if (availableViews.length > 1) {
      setPreviousView(
        availableViews.filter(
          (view) => view.view_id !== currentView.view_id,
        )[0],
      );
    }
  }, [availableViews]);

  useEffect(() => {
    if (
      previousView?.view_id === currentView.view_id &&
      availableViews.length > 1
    ) {
      setPreviousView(
        availableViews.filter(
          (view) => view.view_id !== currentView.view_id,
        )[0],
      );
    }
  }, [currentView]);

  const callOnFormSave = async () => {
    return await (formRef.current as any)?.submitForm();
  };

  return (
    <ActionViewContext.Provider
      value={{
        title,
        currentView,
        setCurrentView,
        availableViews,
        formIsSaving,
        setFormIsSaving,
        formHasChanges,
        setFormHasChanges,
        formRef,
        searchTreeRef,
        onFormSave: callOnFormSave,
        onNewClicked,
        currentId,
        setCurrentId,
        currentItemIndex,
        setCurrentItemIndex,
        results,
        setResults,
        currentModel,
        removingItem,
        setRemovingItem,
        formIsLoading,
        setFormIsLoading,
        treeIsLoading,
        setTreeIsLoading,
        attachments,
        setAttachments,
        selectedRowItems,
        setSelectedRowItems,
        duplicatingItem,
        setDuplicatingItem,
        setSearchParams,
        searchParams,
        searchVisible,
        setSearchVisible,
        sorter,
        setSorter,
        totalItems,
        setTotalItems,
        searchTreeNameSearch,
        setSearchTreeNameSearch,
        setGraphIsLoading,
        graphIsLoading,
        previousView,
        setPreviousView,
        goToResourceId,
        searchValues,
        setSearchValues,
        limit,
        setLimit,
        setTitle,
        isActive,
        setTreeFirstVisibleRow,
        treeFirstVisibleRow,
        searchQuery,
        setSearchQuery,
        treeType,
        setTreeType,
        sortState,
        setSortState,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </ActionViewContext.Provider>
  );
};

export const useIsUnderActionViewContext = () => {
  const context = useContext(ActionViewContext);
  return !!context;
};

export const useActionViewContext = () => {
  const context = useContext(ActionViewContext);

  // If no context, return empty functions and default values
  if (!context) {
    return {
      title: "",
      currentView: {} as View,
      setCurrentView: () => {},
      availableViews: [],
      formRef: { current: null },
      searchTreeRef: { current: null },
      onNewClicked: () => {},
      currentId: undefined,
      setCurrentId: () => {},
      setCurrentItemIndex: () => {},
      currentItemIndex: undefined,
      results: [],
      setResults: () => {},
      currentModel: "",
      sorter: undefined,
      setSorter: () => {},
      totalItems: 0,
      setTotalItems: () => {},
      selectedRowItems: [],
      setSelectedRowItems: () => {},
      setSearchTreeNameSearch: () => {},
      searchTreeNameSearch: undefined,
      goToResourceId: async () => {},
      limit: DEFAULT_SEARCH_LIMIT,
      isActive: undefined,
      formIsSaving: false,
      setFormIsSaving: () => {},
      formHasChanges: false,
      setFormHasChanges: () => {},
      onFormSave: async () => ({ succeed: false, id: 0 }),
      removingItem: false,
      setRemovingItem: () => {},
      formIsLoading: false,
      setFormIsLoading: () => {},
      treeIsLoading: false,
      setTreeIsLoading: () => {},
      graphIsLoading: false,
      setGraphIsLoading: () => {},
      attachments: [],
      setAttachments: () => {},
      duplicatingItem: false,
      setDuplicatingItem: () => {},
      searchParams: [],
      setSearchParams: () => {},
      searchVisible: false,
      setSearchVisible: () => {},
      previousView: undefined,
      setPreviousView: () => {},
      searchValues: {},
      setSearchValues: () => {},
      setLimit: () => {},
      setTitle: () => {},
      treeFirstVisibleRow: 0,
      setTreeFirstVisibleRow: () => {},
      searchQuery: undefined,
      setSearchQuery: () => {},
      treeType: DEFAULT_TREE_TYPE,
      setTreeType: () => {},
      sortState: undefined,
      setSortState: () => {},
      pageSize: DEFAULT_PAGE_SIZE,
      setPageSize: () => {},
      currentPage: 1,
      setCurrentPage: () => {},
    };
  }

  return context;
};

export default ActionViewProvider;
