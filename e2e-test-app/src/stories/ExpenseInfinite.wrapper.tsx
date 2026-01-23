import React, { useState, createContext, useRef, memo, useEffect } from "react";
import {
  TreeActionView,
  View,
  ActionViewProvider,
  ConfigContextProvider,
  DEFAULT_SEARCH_LIMIT,
} from "@gisce/react-ooui";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

type TreeActionViewProps = React.ComponentProps<typeof TreeActionView>;
import { NotificationProvider } from "@gisce/react-formiga-components";
import { mockExpenseResults } from "./ExpenseInfinite.mocks";
import { initializeExpenseMockProvider } from "./ExpenseInfinite.mockProvider";

// Simple wrapper component for story viewer compatibility
const SimpleWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div style={{ width: "100%", height: "100%" }}>{children}</div>;
};

// Create a context for story viewer window dimensions
const StoryDimensionsContext = createContext<{
  width: number;
  height: number;
  modalWidth: number;
  modalHeight: number;
} | null>(null);

// Extended props to support locale
type ExpenseInfiniteWrapperProps = TreeActionViewProps & {
  locale?: string;
};

/**
 * Wrapper component providing necessary context for the ExpenseInfinite story
 *
 * This wraps TreeActionView with:
 * - ConfigContextProvider (locale, features, etc.)
 * - ActionViewProvider (view state management)
 * - NotificationProvider (for toasts/alerts)
 * - ErrorBoundary (to catch and display errors gracefully)
 */
const ExpenseInfiniteWrapperComponent = (
  props: ExpenseInfiniteWrapperProps,
) => {
  // Initialize mock provider only when this component mounts (not at module import time)
  useEffect(() => {
    initializeExpenseMockProvider();
  }, []);

  const { locale = "ca_ES", ...restProps } = props;
  const [currentView, setCurrentView] = useState<View>(props.treeView);
  const [currentId, setCurrentId] = useState<number | undefined>(
    props.results && props.results.length > 0 ? props.results[0].id : undefined,
  );
  const [currentItemIndex, setCurrentItemIndex] = useState<number | undefined>(
    props.results && props.results.length > 0 ? 0 : undefined,
  );
  const [results, setResults] = useState(props.results || []);
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<
    string | undefined
  >(props.searchTreeNameSearch);
  const [sorter, setSorter] = useState<any>();
  const [totalItems, setTotalItems] = useState<number>(
    mockExpenseResults.length,
  );
  const [selectedRowItems, setSelectedRowItems] = useState<any[]>([]);
  const [, setRefreshCounter] = useState(0);

  // Create proper refs for context
  const formRef = { current: null };
  const searchTreeRef = useRef<any>({
    refreshResults: () => {
      setRefreshCounter((prev) => prev + 1);
      const refreshedResults = mockExpenseResults.map((result) => ({
        ...result,
      }));
      setResults(refreshedResults);
      setTotalItems(refreshedResults.length);
    },
  });

  const goToResourceId = async (ids: number[]) => {
    if (ids.length > 0) {
      const foundItem = results.find((item) => item.id === ids[0]);
      if (foundItem) {
        const foundIndex = results.findIndex((item) => item.id === ids[0]);
        setCurrentId(ids[0]);
        setCurrentItemIndex(foundIndex);
      }
    }
  };

  return (
    <ErrorBoundary>
      <StoryDimensionsContext.Provider
        value={{
          width: 1200,
          height: 800,
          modalWidth: 840,
          modalHeight: 800,
        }}
      >
        <NotificationProvider>
          <ConfigContextProvider
            locale={locale}
            erpFeatures={{}}
            userFeatures={{ features: {}, canWriteFeatureFlags: false }}
            globalValues={{}}
            rootContext={{}}
            devMode={false}
            title="Expense Infinite - Bug #2903"
            treeMaxLimit={100}
          >
            <ActionViewProvider
              title="Despeses - Full de despeses"
              currentView={currentView}
              setCurrentView={setCurrentView}
              availableViews={props.availableViews || [props.treeView]}
              formRef={formRef}
              searchTreeRef={searchTreeRef}
              onNewClicked={() => {}}
              currentId={currentId}
              setCurrentId={setCurrentId}
              setCurrentItemIndex={setCurrentItemIndex}
              currentItemIndex={currentItemIndex}
              results={results}
              setResults={setResults}
              currentModel={props.model}
              sorter={sorter}
              setSorter={setSorter}
              totalItems={totalItems}
              setTotalItems={setTotalItems}
              selectedRowItems={selectedRowItems}
              setSelectedRowItems={setSelectedRowItems}
              setSearchTreeNameSearch={(searchString?: string) =>
                setSearchTreeNameSearch(searchString)
              }
              searchTreeNameSearch={searchTreeNameSearch}
              goToResourceId={goToResourceId}
              limit={props.limit || DEFAULT_SEARCH_LIMIT}
              isActive={true}
              initialSearchParams={[]}
              initialCurrentPage={1}
              initialOrder={[]}
              permissions={{
                create: false,
                write: false,
                unlink: false,
                read: true,
              }}
              permissionsLoading={false}
              permissionsError={null}
            >
              <div
                className="tree-action-view-container"
                style={{
                  height: "100vh",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <SimpleWrapper>
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <TreeActionView
                      {...restProps}
                      setCurrentView={setCurrentView}
                      setCurrentId={(id) => {
                        setCurrentId(id);
                        props.setCurrentId?.(id);
                      }}
                      setCurrentItemIndex={(index) => {
                        setCurrentItemIndex(index);
                        props.setCurrentItemIndex?.(index);
                      }}
                    />
                  </div>
                </SimpleWrapper>
              </div>
            </ActionViewProvider>
          </ConfigContextProvider>
        </NotificationProvider>
      </StoryDimensionsContext.Provider>
    </ErrorBoundary>
  );
};

export const ExpenseInfiniteWrapper = memo(ExpenseInfiniteWrapperComponent);
