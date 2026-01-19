import {
  ConnectionProviderType,
  ViewData,
  SearchResponse,
  ConnectionProvider,
  TreeView,
} from "@gisce/react-ooui";

// Mock tree view with float fields
export const mockTreeViewWithFloats: TreeView = {
  view_id: 100,
  type: "tree",
  arch: '<tree infinite="1"><field name="name"/><field name="amount"/><field name="quantity"/><field name="price"/></tree>',
  fields_in_conditions: {
    colors: [],
    status: [],
  },
  fields: {
    name: { type: "char", string: "Name" },
    amount: { type: "float", string: "Amount", digits: [16, 2] },
    quantity: { type: "integer", string: "Quantity" },
    price: { type: "float", string: "Price", digits: [16, 2] },
    id: { type: "integer", string: "ID" },
  },
  search_fields: {
    primary: ["name"],
    secondary: [],
  },
  isExpandable: false,
};

// Generate mock data with FALSE values for some floats (simulating ERP behavior)
const generateMockDataWithFalseValues = () => {
  return [
    { id: 1, name: "Product A", amount: 100.5, quantity: 10, price: 25.99 },
    { id: 2, name: "Product B", amount: false, quantity: 5, price: 15.50 }, // amount is false
    { id: 3, name: "Product C", amount: 200.75, quantity: false, price: false }, // quantity and price are false
    { id: 4, name: "Product D", amount: null, quantity: 8, price: null }, // null values
    { id: 5, name: "Product E", amount: undefined, quantity: undefined, price: 30.00 }, // undefined values
    { id: 6, name: "Product F", amount: 0, quantity: 0, price: 0 }, // zero values (should display)
    { id: 7, name: "Product G", amount: 500.25, quantity: 20, price: 45.99 },
    { id: 8, name: "Product H", amount: false, quantity: false, price: false }, // all false
  ];
};

export const mockResultsWithFalseValues = generateMockDataWithFalseValues();

// Mock ConnectionProvider for false values test
const mockConnectionProvider: Partial<ConnectionProviderType> = {
  getActionStringForModel: async () => "mock_action",
  getViewsForAction: async (): Promise<ViewData> => ({
    views: new Map([["tree", [100, "tree"]]]),
    limit: 80,
    model: "demo.model",
    domain: [],
    context: {},
  }),
  getView: async () => mockTreeViewWithFloats,
  getFields: async () => ({}),
  searchAllIds: async () => mockResultsWithFalseValues.map((r) => r.id),
  searchCount: async () => mockResultsWithFalseValues.length,
  search: async (params: any) => {
    const { limit = 80, offset = 0 } = params || {};
    return mockResultsWithFalseValues.slice(offset, offset + limit);
  },
  searchForTree: async (params: any): Promise<SearchResponse> => {
    const { limit = 80, offset = 0, onIdsRetrieved } = params || {};
    const results = mockResultsWithFalseValues.slice(offset, offset + limit);

    if (onIdsRetrieved && results.length > 0) {
      onIdsRetrieved(results.map((r) => r.id));
    }

    return {
      results,
      totalItems: () => Promise.resolve(mockResultsWithFalseValues.length),
      attrsEvaluated: results.map((result) => ({
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
    mockResultsWithFalseValues,
    mockResultsWithFalseValues.map((result) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    })),
  ],
  parseConditions: async (params: any) => {
    const { values } = params || {};
    return (values || mockResultsWithFalseValues).map((result: any) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    }));
  },
  parseCondition: async () => ({}),
  executeWorkflow: async () => ({}),
  createReport: async () => ({}),
  getReport: async () => ({}),
  executeOnChange: async () => ({}),
  defaultGet: async () => ({}),
  getActionData: async () => ({}),
  nameSearch: async () => mockResultsWithFalseValues.map((r) => [r.id, r.name]),
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

// Initialize the mock connection provider for false values test
export const initializeFalseValuesMockProvider = () => {
  ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);
};
