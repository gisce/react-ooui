import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { View } from "@/types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigation } from "./RootContext";

export type ActionViewContextType = {
  tabKey?: string;
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
  goToResourceId?: (ids: number[]) => Promise<void>;
  searchValues?: any;
  setSearchValues?: (value: any) => void;
  limit?: number;
  setLimit?: (value: number) => void;
  setTitle?: (value: string) => void;
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
    title: titleProps,
    availableViews,
    formRef,
    searchTreeRef,
    onNewClicked,
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
    tabKey,
  } = props;
  const [currentId, setCurrentId] = useState<number>();
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
  const [limit, setLimit] = useState<number>(
    limitProps !== undefined ? limitProps : DEFAULT_SEARCH_LIMIT,
  );
  const [title, setTitle] = useState<string>(titleProps);

  const { updateTab, tabs } = useNavigation();
  const tab = tabs?.find((tab) => tab.id === tabKey);

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

  const currentView = tab
    ? availableViews?.find((view) => view.view_id === tab.view_id)
    : undefined;

  const setCurrentView = useCallback(
    (view: View) => {
      updateTab({
        id: tabKey!,
        tabData: {
          view_id: view.view_id,
          view_type: view.type,
        },
      });
    },
    [tabKey, updateTab],
  );

  useEffect(() => {
    if (availableViews.length === 1) {
      setPreviousView(availableViews[0]);
    } else if (availableViews.length > 1) {
      setPreviousView(
        availableViews.filter(
          (view) => view.view_id !== currentView?.view_id,
        )[0],
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availableViews]);

  useEffect(() => {
    if (
      previousView?.view_id === currentView?.view_id &&
      availableViews.length > 1
    ) {
      setPreviousView(
        availableViews.filter(
          (view) => view.view_id !== currentView?.view_id,
        )[0],
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentView]);

  useEffect(() => {
    updateTab({
      id: tabKey!,
      tabData: {
        isClosable: !formHasChanges,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formHasChanges]);

  useEffect(() => {
    updateTab({
      id: tabKey!,
      tabData: {
        res_id: currentId,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  const callOnFormSave = async () => {
    return await (formRef.current as any)?.submitForm();
  };

  return (
    <ActionViewContext.Provider
      value={{
        currentView: currentView!,
        setCurrentView,
        title,
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
      }}
    >
      {children}
    </ActionViewContext.Provider>
  );
};

export default ActionViewProvider;

export const useActionViewContext = (): ActionViewContextType => {
  const context = useContext<ActionViewContextType | null>(ActionViewContext);

  if (!context) {
    throw new Error(
      "ActionViewProvider context is undefined, please verify you are calling useActionViewContext() as child of a <ActionViewProvider> component.",
    );
  }

  return context;
};
