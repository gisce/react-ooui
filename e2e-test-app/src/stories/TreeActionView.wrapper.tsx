import React, { useState, createContext, useRef } from "react";
import {
  TreeActionView,
  View,
  ActionViewProvider,
  ConfigContextProvider,
  DEFAULT_SEARCH_LIMIT,
} from "@gisce/react-ooui";

type TreeActionViewProps = React.ComponentProps<typeof TreeActionView>;
import { NotificationProvider } from "@gisce/react-formiga-components";
import { mockResults } from "./TreeActionView.mocks";

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

// Wrapper component with context providers and proper dimensions
export const TreeActionViewWrapper = (props: TreeActionViewProps) => {
  const [currentView, setCurrentView] = useState<View>(props.treeView);
  const [currentId, setCurrentId] = useState<number | undefined>(
    props.results && props.results.length > 0 ? props.results[0].id : undefined,
  );
  const [currentItemIndex, setCurrentItemIndex] = useState<number | undefined>(
    props.results && props.results.length > 0 ? 0 : undefined,
  );
  const [results, setResults] = useState(props.results || []);
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<string>(
    props.searchTreeNameSearch || "",
  );
  const [sorter, setSorter] = useState<any>();
  const [totalItems, setTotalItems] = useState<number>(mockResults.length);
  const [selectedRowItems, setSelectedRowItems] = useState<any[]>([]);
  const [refreshCounter, setRefreshCounter] = useState(0);

  // Create proper refs for context
  const formRef = { current: null };
  const searchTreeRef = useRef<any>({
    refreshResults: () => {
      console.log("Refresh triggered in story - simulating data refresh");
      // Simulate refresh by incrementing counter which will trigger a re-render
      setRefreshCounter((prev) => prev + 1);

      // Simulate some dynamic changes to show refresh is working
      const refreshedResults = mockResults.map((result) => ({
        ...result,
        // Update last_login to show refresh effect
        last_login: new Date().toISOString(),
        // Add small random variation to annual_bonus to show change
        annual_bonus:
          (result.annual_bonus || 0) + Math.floor(Math.random() * 100 - 50),
      }));

      setResults(refreshedResults);
      setTotalItems(refreshedResults.length);

      // Show notification that refresh happened
      console.log(`Mock data refreshed (${new Date().toLocaleTimeString()})`);
    },
  });

  console.log("TreeActionViewWrapper rendered with props:", {
    model: props.model,
    visible: props.visible,
    results: props.results?.length,
    treeView: props.treeView?.type,
    refreshCounter,
  });

  const goToResourceId = async (ids: number[], openInSameTab?: boolean) => {
    console.log("goToResourceId called with:", ids, openInSameTab);
    // Mock implementation for story viewer
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
          locale="en_US"
          erpFeatures={{}}
          userFeatures={{ features: {}, canWriteFeatureFlags: false }}
          globalValues={{}}
          rootContext={{}}
          devMode={false}
          title="Story Viewer Demo"
          treeMaxLimit={100}
        >
          <ActionViewProvider
            title="Employee Management"
            currentView={currentView}
            setCurrentView={setCurrentView}
            availableViews={props.availableViews || [props.treeView]}
            formRef={formRef}
            searchTreeRef={searchTreeRef}
            onNewClicked={() => {
              console.log("New button clicked");
            }}
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
              setSearchTreeNameSearch(searchString || "")
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
                    {...props}
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
  );
};
