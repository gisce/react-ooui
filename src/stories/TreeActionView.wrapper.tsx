import { useState, createContext } from "react";
import {
  TreeActionView,
  TreeActionViewProps,
} from "../views/actionViews/TreeActionView";
import { View } from "@/types";
import ActionViewProvider from "@/context/ActionViewContext";
import { ConfigContextProvider } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { StorybookTitleHeaderWrapper } from "../../.storybook/StorybookTitleHeaderWrapper";
import { mockResults } from "./TreeActionView.mocks";

// Create a context for Storybook window dimensions
const StorybookDimensionsContext = createContext<{
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

  // Mock refs for proper context
  const formRef = { current: null };
  const searchTreeRef = { current: null };

  console.log("TreeActionViewWrapper rendered with props:", {
    model: props.model,
    visible: props.visible,
    results: props.results?.length,
    treeView: props.treeView?.type,
  });

  const goToResourceId = async (ids: number[], openInSameTab?: boolean) => {
    console.log("goToResourceId called with:", ids, openInSameTab);
    // Mock implementation for storybook
    if (ids.length > 0) {
      const foundItem = mockResults.find((item) => item.id === ids[0]);
      if (foundItem) {
        const foundIndex = mockResults.findIndex((item) => item.id === ids[0]);
        setCurrentId(ids[0]);
        setCurrentItemIndex(foundIndex);
      }
    }
  };

  return (
    <StorybookDimensionsContext.Provider
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
          title="Storybook Demo"
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
              <StorybookTitleHeaderWrapper>
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
              </StorybookTitleHeaderWrapper>
            </div>
          </ActionViewProvider>
        </ConfigContextProvider>
      </NotificationProvider>
    </StorybookDimensionsContext.Provider>
  );
};
