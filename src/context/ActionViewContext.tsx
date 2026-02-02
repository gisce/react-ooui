import { convertParamsToValues } from "@/helpers/searchHelper";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { View } from "@/types";
import {
  DEFAULT_TREE_TYPE,
  TreeType,
} from "@/views/actionViews/TreeActionView";
import { ColumnState } from "@gisce/react-formiga-table";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { PermissionsMap } from "@/hooks/usePermissions";

type ActionViewProviderProps = {
  title: string;
  currentView: View;
  setCurrentView: (view: View) => void;
  availableViews: View[];
  formRef: any;
  viewRef: any;
  onNewClicked: () => void;
  currentId?: number | string;
  setCurrentId: (id?: number | string) => void;
  setCurrentItemIndex: (value?: number) => void;
  currentItemIndex?: number;
  results?: any[];
  setResults: (value: any[]) => void;
  currentModel: string;
  sorter: any;
  setSorter: (sorter: any) => void;
  totalItems?: number;
  setTotalItems: (
    totalItems:
      | number
      | undefined
      | ((prev: number | undefined) => number | undefined),
  ) => void;
  selectedRowItems?: any[];
  setSelectedRowItems: (value: any[] | ((prevValue: any[]) => any[])) => void;
  setSearchNameSearch: (searchString?: string) => void;
  searchNameSearch?: string;
  goToResourceId: (
    ids: Array<number | string>,
    openInSameTab?: boolean,
  ) => Promise<void>;
  limit?: number;
  isActive: boolean;
  children: React.ReactNode;
  initialSearchParams?: any[];
  initialCurrentPage?: number;
  initialOrder?: any[];
  permissions?: PermissionsMap | null;
  permissionsLoading?: boolean;
  permissionsError?: Error | null;
  initialOpenComments?: boolean;
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
  viewIsLoading?: boolean;
  setViewIsLoading?: (value: boolean) => void;
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
  setTreeFirstVisibleRow: (value: number) => void;
  treeFirstVisibleColumn: string | undefined;
  setTreeFirstVisibleColumn: (value: string | undefined) => void;
  searchQuery?: SearchQueryParams;
  setSearchQuery?: (value: SearchQueryParams) => void;
  treeType?: TreeType;
  setTreeType?: (value: TreeType) => void;
  order?: ColumnState[];
  setOrder?: (value: ColumnState[] | undefined) => void;
  currentPage?: number;
  setCurrentPage?: (value: number) => void;
  currentSavedSearch?: any;
  setCurrentSavedSearch?: (value: any) => void;
  savedSearches?: any[];
  setSavedSearches?: (value: any[]) => void;
  commentsPanelVisible?: boolean;
  setCommentsPanelVisible?: (value: boolean) => void;
  commentCount?: number;
  setCommentCount?: (value: number) => void;
  refreshComments?: () => Promise<void>;
  setRefreshComments?: (fn: (() => Promise<void>) | undefined) => void;
  objectProps?: {
    without_attachments?: boolean;
    without_comments?: boolean;
  };
  setObjectProps?: (value: {
    without_attachments?: boolean;
    without_comments?: boolean;
  }) => void;
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
    viewRef: searchTreeRef,
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
    searchNameSearch: searchTreeNameSearch,
    setSearchNameSearch: setSearchTreeNameSearch,
    goToResourceId,
    limit: limitProps,
    isActive,
    initialSearchParams,
    initialCurrentPage,
    initialOrder,
    permissions,
    permissionsLoading,
    permissionsError,
    initialOpenComments,
  } = props;

  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [removingItem, setRemovingItem] = useState<boolean>(false);
  const [formIsLoading, setFormIsLoading] = useState<boolean>(true);
  const [viewIsLoading, setViewIsLoading] = useState<boolean>(true);
  const [attachments, setAttachments] = useState<any>([]);
  const [duplicatingItem, setDuplicatingItem] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<any[]>(
    initialSearchParams || [],
  );
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [graphIsLoading, setGraphIsLoading] = useState<boolean>(true);
  const [previousView, setPreviousView] = useState<View>();

  const wrappedOnNewClicked = useCallback(() => {
    setPreviousView(currentView);
    onNewClicked();
  }, [currentView, onNewClicked, setPreviousView]);

  // Memoized merged fields from all available views
  const allViewFields = useMemo(() => {
    if (!availableViews || availableViews.length === 0) {
      return (currentView as any)?.fields || {};
    }
    return availableViews.reduce((mergedFields: any, view: any) => {
      return { ...mergedFields, ...(view.fields || {}) };
    }, {});
  }, [availableViews, currentView]);

  const [searchValues, setSearchValues] = useState<any>(
    convertParamsToValues(initialSearchParams || [], allViewFields),
  );
  const [treeFirstVisibleRow, setTreeFirstVisibleRow] = useState<number>(0);
  const [treeFirstVisibleColumn, setTreeFirstVisibleColumn] = useState<
    string | undefined
  >(undefined);
  const [searchQuery, setSearchQuery] = useState<SearchQueryParams>();
  const [treeType, setTreeType] = useState<TreeType>(DEFAULT_TREE_TYPE);
  const [order, setOrder] = useState<ColumnState[] | undefined>(
    initialOrder as ColumnState[] | [],
  );

  const [limit, setLimit] = useState<number>(
    limitProps !== undefined ? limitProps : DEFAULT_SEARCH_LIMIT,
  );
  const [title, setTitle] = useState<string>(titleProps);

  const [currentPage, setCurrentPage] = useState<number>(
    initialCurrentPage || 1,
  );
  const [currentSavedSearch, setCurrentSavedSearch] = useState<any>(null);
  const [savedSearches, setSavedSearches] = useState<any[]>([]);
  const [commentsPanelVisible, setCommentsPanelVisible] = useState<boolean>(
    initialOpenComments ?? false,
  );
  const [commentCount, setCommentCount] = useState<number>(0);
  const [objectProps, setObjectProps] = useState<{
    without_attachments?: boolean;
    without_comments?: boolean;
  }>({});
  const [refreshComments, setRefreshCommentsState] = useState<{
    fn: (() => Promise<void>) | undefined;
  }>({ fn: undefined });
  const setRefreshComments = useCallback(
    (fn: (() => Promise<void>) | undefined) => {
      setRefreshCommentsState({ fn });
    },
    [],
  );

  useEffect(() => {
    if (results && results.length > 0 && !currentItemIndex) {
      setCurrentItemIndex?.(0);
      setCurrentId?.(results[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        viewRef: searchTreeRef,
        onFormSave: callOnFormSave,
        onNewClicked: wrappedOnNewClicked,
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
        viewIsLoading,
        setViewIsLoading,
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
        searchNameSearch: searchTreeNameSearch,
        setSearchNameSearch: setSearchTreeNameSearch,
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
        treeFirstVisibleColumn,
        setTreeFirstVisibleColumn,
        searchQuery,
        setSearchQuery,
        treeType,
        setTreeType,
        order,
        setOrder,
        currentPage,
        setCurrentPage,
        currentSavedSearch,
        setCurrentSavedSearch,
        savedSearches,
        setSavedSearches,
        commentsPanelVisible,
        setCommentsPanelVisible,
        commentCount,
        setCommentCount,
        refreshComments: refreshComments.fn,
        setRefreshComments,
        objectProps,
        setObjectProps,
        permissions,
        permissionsLoading,
        permissionsError,
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
      viewRef: { current: null },
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
      totalItems: undefined,
      setTotalItems: () => {},
      selectedRowItems: [],
      setSelectedRowItems: () => {},
      setSearchNameSearch: () => {},
      searchNameSearch: undefined,
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
      viewIsLoading: false,
      setViewIsLoading: () => {},
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
      treeFirstVisibleColumn: undefined,
      setTreeFirstVisibleColumn: () => {},
      searchQuery: undefined,
      setSearchQuery: () => {},
      treeType: DEFAULT_TREE_TYPE,
      setTreeType: () => {},
      order: undefined,
      setOrder: () => {},
      currentPage: 1,
      setCurrentPage: () => {},
      currentSavedSearch: null,
      setCurrentSavedSearch: () => {},
      savedSearches: [],
      setSavedSearches: () => {},
      commentsPanelVisible: false,
      setCommentsPanelVisible: () => {},
      commentCount: 0,
      setCommentCount: () => {},
      refreshComments: undefined,
      setRefreshComments: () => {},
      objectProps: {},
      setObjectProps: () => {},
      permissions: null,
      permissionsLoading: false,
      permissionsError: null,
    };
  }

  return context;
};

export default ActionViewProvider;
