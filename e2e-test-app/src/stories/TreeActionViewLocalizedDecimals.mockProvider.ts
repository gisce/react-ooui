import {
  ConnectionProviderType,
  ViewData,
  SearchResponse,
  ConnectionProvider,
  TreeView,
} from "@gisce/react-ooui";

export const mockTreeViewLocalizedDecimals: TreeView = {
  view_id: 101,
  type: "tree",
  arch: `<tree infinite="1"><field name="name"/><field name="amount" widget_props='{"localized": true}'/><field name="price" widget_props='{"localized": true}'/></tree>`,
  fields_in_conditions: {
    colors: [],
    status: [],
  },
  fields: {
    name: { type: "char", string: "Name" },
    amount: { type: "float", string: "Amount", digits: [16, 6] },
    price: { type: "float", string: "Price", digits: [16, 4] },
    id: { type: "integer", string: "ID" },
  },
  search_fields: {
    primary: ["name"],
    secondary: [],
  },
  isExpandable: false,
};

const generateMockDataLocalizedDecimals = () => {
  return [
    { id: 1, name: "Item A", amount: 18.87, price: 25.5 },
    { id: 2, name: "Item B", amount: 100.5, price: 10 },
    { id: 3, name: "Item C", amount: 0.123, price: 99.99 },
    { id: 4, name: "Item D", amount: 50, price: 1.1 },
    { id: 5, name: "Item E", amount: false, price: null },
    { id: 6, name: "Item F", amount: undefined, price: 0 },
  ];
};

export const mockResultsLocalizedDecimals = generateMockDataLocalizedDecimals();

const mockConnectionProvider: Partial<ConnectionProviderType> = {
  getActionStringForModel: async () => "mock_action",
  getViewsForAction: async (): Promise<ViewData> => ({
    views: new Map([["tree", [101, "tree"]]]),
    limit: 80,
    model: "demo.model",
    domain: [],
    context: {},
  }),
  getView: async () => mockTreeViewLocalizedDecimals,
  getFields: async () => ({}),
  searchAllIds: async () => mockResultsLocalizedDecimals.map((r) => r.id),
  searchCount: async () => mockResultsLocalizedDecimals.length,
  search: async (params: any) => {
    const { limit = 80, offset = 0 } = params || {};
    return mockResultsLocalizedDecimals.slice(offset, offset + limit);
  },
  searchForTree: async (params: any): Promise<SearchResponse> => {
    const { limit = 80, offset = 0, onIdsRetrieved } = params || {};
    const results = mockResultsLocalizedDecimals.slice(offset, offset + limit);

    if (onIdsRetrieved && results.length > 0) {
      onIdsRetrieved(results.map((r) => r.id));
    }

    return {
      results,
      totalItems: () => Promise.resolve(mockResultsLocalizedDecimals.length),
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
    mockResultsLocalizedDecimals,
    mockResultsLocalizedDecimals.map((result) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    })),
  ],
  parseConditions: async (params: any) => {
    const { values } = params || {};
    return (values || mockResultsLocalizedDecimals).map((result: any) => ({
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
  nameSearch: async () =>
    mockResultsLocalizedDecimals.map((r) => [r.id, r.name]),
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

export const initializeLocalizedDecimalsMockProvider = () => {
  ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);
};
