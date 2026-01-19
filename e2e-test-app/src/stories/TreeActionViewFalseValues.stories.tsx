import React, { useState, useRef, useEffect } from "react";
import {
  TreeActionView,
  View,
  ActionViewProvider,
  ConfigContextProvider,
  DEFAULT_SEARCH_LIMIT,
} from "@gisce/react-ooui";
import { NotificationProvider } from "@gisce/react-formiga-components";
import {
  mockTreeViewWithFloats,
  mockResultsWithFalseValues,
  initializeFalseValuesMockProvider,
} from "./TreeActionViewFalseValues.mockProvider";

type TreeActionViewProps = React.ComponentProps<typeof TreeActionView>;

const FalseValuesWrapper = () => {
  const [isReady, setIsReady] = useState(false);
  const [currentView, setCurrentView] = useState<View>(mockTreeViewWithFloats);
  const [currentId, setCurrentId] = useState<number | undefined>(1);
  const [currentItemIndex, setCurrentItemIndex] = useState<number | undefined>(0);
  const [results, setResults] = useState(mockResultsWithFalseValues);
  const [sorter, setSorter] = useState<any>();
  const [totalItems, setTotalItems] = useState<number>(mockResultsWithFalseValues.length);
  const [selectedRowItems, setSelectedRowItems] = useState<any[]>([]);

  const formRef = { current: null };
  const searchTreeRef = useRef<any>({ refreshResults: () => {} });

  useEffect(() => {
    initializeFalseValuesMockProvider();
    setIsReady(true);
  }, []);

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

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <NotificationProvider>
      <ConfigContextProvider
        locale="en_US"
        erpFeatures={{}}
        userFeatures={{ features: {}, canWriteFeatureFlags: false }}
        globalValues={{}}
        rootContext={{}}
        devMode={false}
        title="False Values Test"
        treeMaxLimit={100}
      >
        <ActionViewProvider
          title="False Values Test"
          currentView={currentView}
          setCurrentView={setCurrentView}
          availableViews={[mockTreeViewWithFloats]}
          formRef={formRef}
          searchTreeRef={searchTreeRef}
          onNewClicked={() => {}}
          currentId={currentId}
          setCurrentId={setCurrentId}
          setCurrentItemIndex={setCurrentItemIndex}
          currentItemIndex={currentItemIndex}
          results={results}
          setResults={setResults}
          currentModel="demo.model"
          sorter={sorter}
          setSorter={setSorter}
          totalItems={totalItems}
          setTotalItems={setTotalItems}
          selectedRowItems={selectedRowItems}
          setSelectedRowItems={setSelectedRowItems}
          setSearchTreeNameSearch={() => {}}
          goToResourceId={goToResourceId}
          limit={DEFAULT_SEARCH_LIMIT}
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
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div style={{ height: "100%", width: "100%", position: "relative" }}>
              <TreeActionView
                treeView={mockTreeViewWithFloats}
                visible={true}
                searchTreeRef={searchTreeRef}
                model="demo.model"
                domain={[]}
                context={{}}
                results={results}
                availableViews={[mockTreeViewWithFloats]}
                setCurrentItemIndex={setCurrentItemIndex}
                setCurrentId={setCurrentId}
                setCurrentView={setCurrentView}
                limit={0}
              />
            </div>
          </div>
        </ActionViewProvider>
      </ConfigContextProvider>
    </NotificationProvider>
  );
};

export const FalseValuesInfinite: React.FC = () => {
  return <FalseValuesWrapper />;
};

export const meta = {
  title: "Views/TreeActionViewFalseValues",
  component: TreeActionView,
};

export default meta;
