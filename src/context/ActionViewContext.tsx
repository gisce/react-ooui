import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { View } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

export type ActionViewContextType = {
  title: string;
  availableViews: View[];
  currentView: View;
  setCurrentView: (view: View) => void;
  formIsSaving?: boolean;
  setFormIsSaving?: (value: boolean) => void;
  formHasChanges?: boolean;
  setFormHasChanges?: (value: boolean) => void;
  onFormSave?: () => Promise<{ succeed: boolean; id: number }>;
  formRef?: any;
  searchTreeRef?: any;
  onNewClicked: () => void;
  currentId?: number;
  setCurrentId?: (id?: number) => void;
  currentItemIndex?: number;
  setCurrentItemIndex?: (value?: number) => void;
  results?: any[];
  setResults?: (value: any[]) => void;
  currentModel?: string;
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
  selectedRowItems?: any[];
  setSelectedRowItems?: (value: any[]) => void;
  duplicatingItem?: boolean;
  setDuplicatingItem?: (value: boolean) => void;
  searchParams?: any[];
  setSearchParams?: (value: any[]) => void;
  searchVisible?: boolean;
  setSearchVisible?: (value: boolean) => void;
  sorter: any;
  setSorter: (sorter: any) => void;
  totalItems: number;
  setTotalItems: (totalItems: number) => void;
  searchTreeNameSearch?: string;
  setSearchTreeNameSearch?: (searchString?: string) => void;
  previousView?: View;
  setPreviousView?: (view: View) => void;
  goToResourceId?: (ids: number[], openInSameTab?: boolean) => Promise<void>;
  searchValues?: any;
  setSearchValues?: (value: any) => void;
  limit?: number;
  setLimit?: (value: number) => void;
  setTitle?: (value: string) => void;
  isActive: boolean;
  treeFirstVisibleRow: number;
  setTreeFirstVisibleRow: (totalItems: number) => void;
};

export const ActionViewContext = createContext<ActionViewContextType | null>(
  null,
);

type ActionViewProviderProps = ActionViewContextType & {
  children: React.ReactNode;
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
  } = props;

  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [removingItem, setRemovingItem] = useState<boolean>(false);
  const [formIsLoading, setFormIsLoading] = useState<boolean>(true);
  const [treeIsLoading, setTreeIsLoading] = useState<boolean>(true);
  const [attachments, setAttachments] = useState<any>([]);
  const [duplicatingItem, setDuplicatingItem] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<any[]>([]);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);
  const [graphIsLoading, setGraphIsLoading] = useState<boolean>(true);
  const [previousView, setPreviousView] = useState<View>();
  const [searchValues, setSearchValues] = useState<any>({});
  const [treeFirstVisibleRow, setTreeFirstVisibleRow] = useState<number>(0);

  const [limit, setLimit] = useState<number>(
    limitProps !== undefined ? limitProps : DEFAULT_SEARCH_LIMIT,
  );
  const [title, setTitle] = useState<string>(titleProps);

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
      }}
    >
      {children}
    </ActionViewContext.Provider>
  );
};

export const useActionViewContext = (
  isRoot: boolean,
): ActionViewContextType => {
  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  if (!isRoot) {
    return {} as ActionViewContextType;
  }
  if (!actionViewContext) {
    throw new Error(
      "useActionViewContext must be used within a ActionViewProvider",
    );
  }
  return actionViewContext;
};

export default ActionViewProvider;
