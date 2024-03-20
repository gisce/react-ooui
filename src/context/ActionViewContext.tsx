import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { FormView, View } from "@/types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigation } from "./RootContext";
import { Tab } from "@/types/tab";

export type ActionViewContextType = {
  tabKey?: string;
  currentView?: View;
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
  setCurrentId: (id?: number) => void;
  currentItemIndex?: number;
  setCurrentItemIndex?: (value?: number) => void;
  treeResults: any[];
  setTreeResults: (value: any[]) => void;
  currentModel?: string;
  removingItem?: boolean;
  setRemovingItem: (value: boolean) => void;
  formIsLoading?: boolean;
  setFormIsLoading: (value: boolean) => void;
  treeIsLoading?: boolean;
  setTreeIsLoading: (value: boolean) => void;
  graphIsLoading?: boolean;
  setGraphIsLoading: (value: boolean) => void;
  attachments?: any;
  setAttachments: (value: any) => void;
  selectedRowItems?: any[];
  setSelectedRowItems: (value: any[]) => void;
  duplicatingItem?: boolean;
  setDuplicatingItem: (value: boolean) => void;
  searchParams?: any[];
  setSearchParams: (value: any[]) => void;
  searchVisible?: boolean;
  setSearchVisible: (value: boolean) => void;
  sorter: any;
  setSorter: (sorter: any) => void;
  totalItems: number;
  setTotalItems: (totalItems: number) => void;
  searchTreeNameSearch?: string;
  setSearchTreeNameSearch: (searchString?: string) => void;
  previousView?: View;
  setPreviousView: (view: View) => void;
  searchValues?: any;
  setSearchValues: (value: any) => void;
  limit?: number;
  setLimit: (value: number) => void;
  tab: Tab;
};

export const ActionViewContext = createContext<ActionViewContextType | null>(
  null,
);
type ActionViewProviderProps = {
  children: React.ReactNode;
  tab: Tab;
};

const ActionViewProvider = (props: ActionViewProviderProps): any => {
  const { children, tab } = props;
  const formRef = useRef();
  const searchTreeRef = useRef();

  const [currentItemIndex, setCurrentItemIndex] = useState<number>();
  const [selectedRowItems, setSelectedRowItems] = useState<any[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [sorter, setSorter] = useState<any>();
  const [treeResults, setTreeResults] = useState<any>([]);
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<string>();
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

  const { updateTab } = useNavigation();
  const availableViews = tab.availableViews || [];
  const [currentView, setCurrentView] = useState<View | undefined>(
    tab?.availableViews?.find(
      (view) => view.view_id === tab.currentView?.view_id,
    ),
  );

  const [limit, setLimit] = useState<number>(
    tab?.viewOptions?.tree?.limit !== undefined
      ? tab?.viewOptions?.tree?.limit
      : DEFAULT_SEARCH_LIMIT,
  );

  useEffect(() => {
    if (treeResults && treeResults.length > 0 && !currentItemIndex) {
      setCurrentItemIndex?.(0);
      setCurrentId?.(treeResults[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeResults]);

  useEffect(() => {
    setLimit(
      tab?.viewOptions?.tree?.limit !== undefined
        ? tab?.viewOptions?.tree?.limit
        : DEFAULT_SEARCH_LIMIT,
    );
  }, [tab?.viewOptions?.tree?.limit]);

  const setCurrentViewCallback = useCallback(
    (view: View) => {
      setCurrentView(view);
      updateTab({
        id: tab.id,
        tab: {
          currentView: view,
        },
      });
    },
    [setCurrentView, tab.id, updateTab],
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
      id: tab.id,
      tab: {
        isClosable: !formHasChanges,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formHasChanges]);

  useEffect(() => {
    updateTab({
      id: tab.id,
      tab: {
        viewOptions: {
          form: {
            resourceId: currentId,
          },
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  const callOnFormSave = async () => {
    return await (formRef.current as any)?.submitForm();
  };

  function onNewClicked() {
    if (currentId === undefined && currentView!.type === "form") {
      (formRef.current as any).clearAndReload();
    } else {
      setCurrentId(undefined);
      const formView: FormView = availableViews.find(
        (v) => v.type === "form",
      ) as FormView;
      setCurrentView(formView);
    }
  }
  return (
    <ActionViewContext.Provider
      value={{
        currentView,
        setCurrentView: setCurrentViewCallback,
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
        treeResults,
        setTreeResults,
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
        searchValues,
        setSearchValues,
        limit,
        setLimit,
        tab,
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
