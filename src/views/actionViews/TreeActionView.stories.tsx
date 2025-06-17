import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect, createContext, useContext } from "react";
import { TreeActionView, TreeActionViewProps } from "./TreeActionView";
import {
  FormView,
  TreeView,
  View,
  ConnectionProviderType,
  ViewData,
  SearchResponse,
} from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import ActionViewProvider from "@/context/ActionViewContext";
import { ConfigContextProvider } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { StorybookTitleHeaderWrapper } from "../../../.storybook/StorybookTitleHeaderWrapper";

// Create a context for Storybook window dimensions
const StorybookDimensionsContext = createContext<{
  width: number;
  height: number;
  modalWidth: number;
  modalHeight: number;
} | null>(null);

// Mock data
const mockFormView: FormView = {
  view_id: 1,
  type: "form",
  arch: '<form><field name="name"/><field name="email"/></form>',
  fields: {
    name: { type: "char", string: "Name" },
    email: { type: "char", string: "Email" },
    id: { type: "integer", string: "ID" },
  },
  search_fields: {
    primary: ["name"],
    secondary: ["email"],
  },
};

const mockTreeView: TreeView = {
  view_id: 2,
  type: "tree",
  arch: '<tree><field name="name"/><field name="email"/></tree>',
  fields: {
    name: { type: "char", string: "Name" },
    email: { type: "char", string: "Email" },
    id: { type: "integer", string: "ID" },
  },
  search_fields: {
    primary: ["name"],
    secondary: ["email"],
  },
  isExpandable: false,
};

const mockTreeViewExpandable: TreeView = {
  ...mockTreeView,
  isExpandable: true,
  field_parent: "parent_id",
};

const mockTreeViewInfinite: TreeView = {
  ...mockTreeView,
  arch: '<tree infinite="1"><field name="name"/><field name="email"/></tree>',
};

const mockTreeViewPaginated: TreeView = {
  ...mockTreeView,
  arch: '<tree infinite="0"><field name="name"/><field name="email"/></tree>',
};

const mockResults = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  { id: 4, name: "Alice Brown", email: "alice@example.com" },
  { id: 5, name: "Charlie Wilson", email: "charlie@example.com" },
];

const mockAvailableViews: View[] = [mockFormView, mockTreeView];

// Mock ConnectionProvider
const mockConnectionProvider: Partial<ConnectionProviderType> = {
  getActionStringForModel: async () => "mock_action",
  getViewsForAction: async (): Promise<ViewData> => ({
    views: new Map([
      ["tree", [2, "tree"]],
      ["form", [1, "form"]],
    ]),
    limit: 80,
    model: "demo.model",
    domain: [],
    context: {},
  }),
  getView: async () => mockFormView,
  getFields: async () => ({}),
  searchAllIds: async () => [1, 2, 3, 4, 5],
  searchCount: async (params) => {
    console.log("searchCount called with params:", params);
    return 5;
  },
  search: async () => mockResults,
  searchForTree: async (params): Promise<SearchResponse> => {
    console.log("searchForTree called with params:", params);
    return {
      results: mockResults,
      totalItems: () => Promise.resolve(5),
      attrsEvaluated: mockResults.map((result) => ({
        id: result.id,
        colors: undefined,
        status: undefined,
      })),
    };
  },
  update: async () => ({}),
  create: async () => ({}),
  deleteObjects: async () => ({}),
  execute: async () => ({}),
  readObjects: async () => [],
  readEvalUiObjects: async () => [
    mockResults,
    mockResults.map((result) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    })),
  ],
  parseConditions: async () =>
    mockResults.map((result) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    })),
  parseCondition: async () => ({}),
  executeWorkflow: async () => ({}),
  createReport: async () => ({}),
  getReport: async () => ({}),
  executeOnChange: async () => ({}),
  // Add all other required methods as no-ops
  defaultGet: async () => ({}),
  getActionData: async () => ({}),
  nameSearch: async (params) => {
    console.log("nameSearch called with params:", params);
    return mockResults.map((result) => [result.id, result.name]);
  },
  duplicate: async () => ({}),
  evalDomain: async () => [],
  getLogInfo: async () => [],
  isShortcutFavorite: async () => false,
  removeFavourite: async () => {},
  addFavourite: async () => {},
  treeButOpen: async () => [],
  exportData: async () => "",
  readForView: async () => ({}),
  readAggregates: async () => ({}),
  saveUserViewPrefs: async () => ({}),
  readUserViewPrefs: async () => ({}),
  processSearchResults: async () => ({ results: [], attrsEvaluated: {} }),
  getToolbar: async () => ({}),
  logAction: async () => ({}),
  checkPermission: async () => true,
};

// Initialize the mock connection provider
ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);

// Wrapper component with context providers and proper dimensions
const TreeActionViewWrapper = (props: TreeActionViewProps) => {
  const [currentView, setCurrentView] = useState<View>(props.treeView);
  const [currentId, setCurrentId] = useState<number | undefined>();
  const [currentItemIndex, setCurrentItemIndex] = useState<
    number | undefined
  >();
  const [results, setResults] = useState(props.results);
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<string>();

  console.log("TreeActionViewWrapper rendered with props:", {
    model: props.model,
    visible: props.visible,
    results: props.results?.length,
    treeView: props.treeView?.type,
  });

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
            title="Demo Action View"
            currentView={currentView}
            setCurrentView={setCurrentView}
            availableViews={props.availableViews}
            formRef={{ current: null }}
            searchTreeRef={{ current: null }}
            onNewClicked={() => {}}
            currentId={currentId}
            setCurrentId={setCurrentId}
            setCurrentItemIndex={setCurrentItemIndex}
            currentItemIndex={currentItemIndex}
            results={results}
            setResults={setResults}
            currentModel={props.model}
            sorter={undefined}
            setSorter={() => {}}
            totalItems={results.length}
            setTotalItems={() => {}}
            selectedRowItems={[]}
            setSelectedRowItems={() => {}}
            setSearchTreeNameSearch={setSearchTreeNameSearch}
            searchTreeNameSearch={searchTreeNameSearch}
            goToResourceId={async () => {}}
            limit={DEFAULT_SEARCH_LIMIT}
            isActive={true}
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

const meta: Meta<typeof TreeActionView> = {
  title: "Views/TreeActionView",
  component: TreeActionView,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
    docs: {
      description: {
        component: `
The TreeActionView component displays data in a tree format with three different rendering modes:
- **Legacy**: Traditional tree view
- **Infinite**: Infinite scroll tree view
- **Paginated**: Paginated tree view

The component automatically determines the tree type based on the view configuration and supports expandable trees, filtering, and various toolbar actions.

**Note**: This component requires full viewport height to function properly with sticky headers and scroll behavior.
        `,
      },
    },
  },
  argTypes: {
    visible: {
      control: "boolean",
      description: "Whether the tree view is visible",
    },
    model: {
      control: "text",
      description: "The model name for the tree data",
    },
    limit: {
      control: "number",
      description: "Number of records to display per page/batch",
    },
    searchTreeNameSearch: {
      control: "text",
      description: "Search string for filtering records",
    },
  },
  render: (args) => <TreeActionViewWrapper {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: Partial<TreeActionViewProps> = {
  formView: mockFormView,
  treeView: mockTreeView,
  visible: true,
  searchTreeRef: { current: null },
  model: "demo.model",
  domain: [],
  context: {},
  results: mockResults,
  availableViews: mockAvailableViews,
  setCurrentItemIndex: () => {},
  setCurrentId: () => {},
  setCurrentView: () => {},
  limit: DEFAULT_SEARCH_LIMIT,
};

export const Legacy: Story = {
  args: {
    ...defaultArgs,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The legacy tree view provides a traditional table-like interface with basic functionality.",
      },
    },
  },
};

export const Infinite: Story = {
  args: {
    ...defaultArgs,
    treeView: mockTreeViewInfinite,
    limit: 0, // Infinite scroll doesn't use limit
  },
  parameters: {
    docs: {
      description: {
        story:
          "The infinite tree view loads data progressively as the user scrolls, providing better performance for large datasets.",
      },
    },
  },
};

export const Paginated: Story = {
  args: {
    ...defaultArgs,
    treeView: mockTreeViewPaginated,
    limit: 20,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The paginated tree view displays data in discrete pages with navigation controls.",
      },
    },
  },
};

export const Expandable: Story = {
  args: {
    ...defaultArgs,
    treeView: mockTreeViewExpandable,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The expandable tree view supports hierarchical data with parent-child relationships. Click the expand icons to reveal child records.",
      },
    },
  },
};

export const WithSearch: Story = {
  args: {
    ...defaultArgs,
    searchTreeNameSearch: "John",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tree view with an active search filter. The search functionality allows filtering records by various criteria.",
      },
    },
  },
};

export const LargeDataset: Story = {
  args: {
    ...defaultArgs,
    results: Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
    })),
    limit: 50,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tree view with a large dataset to demonstrate pagination and performance with many records.",
      },
    },
  },
};

export const Hidden: Story = {
  args: {
    ...defaultArgs,
    visible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tree view in hidden state. When visible is false, the component renders nothing.",
      },
    },
  },
};

export const EmptyResults: Story = {
  args: {
    ...defaultArgs,
    results: [],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tree view with no data. Shows the empty state when there are no records to display.",
      },
    },
  },
};
