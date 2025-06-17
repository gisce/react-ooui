import { ConnectionProviderType, ViewData, SearchResponse } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import { mockTreeView, mockResults } from "./TreeActionView.mocks";

// Helper function to generate colors and status based on result properties
const generateColorsAndStatus = (result: any) => {
  let colors = undefined;
  let status = undefined;

  if (result.priority === "critical") {
    colors = "#c62828"; // Red text for critical
    status = "#c62828";
  } else if (result.priority === "high") {
    colors = "#ef6c00"; // Orange text for high
    status = "#ef6c00";
  } else if (result.is_vip) {
    colors = "#7b1fa2"; // Purple text for VIP
  } else if (result.status === "inactive" || result.status === "terminated") {
    colors = "#757575"; // Gray text for inactive
  }

  return { colors, status };
};

// Mock ConnectionProvider
const mockConnectionProvider: Partial<ConnectionProviderType> = {
  getActionStringForModel: async () => "mock_action",
  getViewsForAction: async (): Promise<ViewData> => ({
    views: new Map([["tree", [2, "tree"]]]),
    limit: 80,
    model: "demo.model",
    domain: [],
    context: {},
  }),
  getView: async () => mockTreeView,
  getFields: async () => ({}),
  searchAllIds: async () => mockResults.map((r) => r.id),
  searchCount: async (params) => {
    console.log("searchCount called with params:", params);
    return mockResults.length;
  },
  search: async (params: any) => {
    console.log("search called with params:", params);
    const { limit = 80, offset = 0 } = params || {};
    return mockResults.slice(offset, offset + limit);
  },
  searchForTree: async (params): Promise<SearchResponse> => {
    console.log("searchForTree called with params:", params);
    const { limit = 80, offset = 0 } = params || {};
    const results = mockResults.slice(offset, offset + limit);
    console.log(
      "searchForTree returning results with status:",
      results.map((r) => ({ id: r.id, hasStatus: r.id % 2 === 1 })),
    );
    return {
      results,
      totalItems: () => Promise.resolve(mockResults.length),
      attrsEvaluated: results.map((result) => {
        const { colors, status } = generateColorsAndStatus(result);
        return {
          id: result.id,
          colors,
          status,
        };
      }),
    };
  },
  update: async () => ({}),
  create: async () => ({}),
  deleteObjects: async () => ({}),
  execute: async () => ({}),
  readObjects: async () => [],
  readEvalUiObjects: async () => [
    mockResults,
    mockResults.map((result) => {
      const { colors, status } = generateColorsAndStatus(result);
      return {
        id: result.id,
        colors,
        status,
      };
    }),
  ],
  parseConditions: async (params) => {
    console.log("parseConditions called with params:", params);
    const { values } = params || {};

    return (values || mockResults).map((result: any) => {
      const { colors, status } = generateColorsAndStatus(result);

      return {
        id: result.id,
        colors,
        status,
      };
    });
  },
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
  readAggregates: async (options: {
    model: string;
    domain?: any[];
    aggregateFields: Record<string, string[]>;
  }) => {
    const { domain, aggregateFields } = options;

    // Filter results based on domain if provided
    let filteredResults = mockResults;
    if (domain && domain.length > 0) {
      // Simple domain filtering for ["id", "in", [ids...]] format
      const idInCondition = domain.find(
        (condition) =>
          Array.isArray(condition) &&
          condition.length === 3 &&
          condition[0] === "id" &&
          condition[1] === "in",
      );

      if (idInCondition) {
        const idsToInclude = idInCondition[2];
        filteredResults = mockResults.filter((item) =>
          idsToInclude.includes(item.id),
        );
      }
    }

    // Calculate aggregates only for requested fields and operations
    const result: Record<string, Record<string, number>> = {};

    Object.entries(aggregateFields).forEach(([fieldName, operations]) => {
      if (!result[fieldName]) {
        result[fieldName] = {};
      }

      // Get field values from filtered results
      const fieldValues = filteredResults
        .map((item) => (item as any)[fieldName])
        .filter(
          (value) =>
            value !== undefined && value !== null && !isNaN(Number(value)),
        );

      operations.forEach((operation) => {
        switch (operation) {
          case "sum":
            result[fieldName][operation] = fieldValues.reduce(
              (sum, val) => sum + Number(val),
              0,
            );
            break;
          case "count":
            result[fieldName][operation] = fieldValues.length;
            break;
          case "avg":
            result[fieldName][operation] =
              fieldValues.length > 0
                ? Math.round(
                    fieldValues.reduce((sum, val) => sum + Number(val), 0) /
                      fieldValues.length,
                  )
                : 0;
            break;
          case "max":
            result[fieldName][operation] =
              fieldValues.length > 0
                ? Math.max(...fieldValues.map((val) => Number(val)))
                : 0;
            break;
          case "min":
            result[fieldName][operation] =
              fieldValues.length > 0
                ? Math.min(...fieldValues.map((val) => Number(val)))
                : 0;
            break;
          default:
            result[fieldName][operation] = 0;
        }
      });
    });

    return result;
  },
  saveUserViewPrefs: async () => ({}),
  readUserViewPrefs: async () => ({}),
  processSearchResults: async () => ({ results: [], attrsEvaluated: {} }),
  getToolbar: async () => ({}),
  logAction: async () => ({}),
  checkPermission: async () => true,
};

// Initialize the mock connection provider
export const initializeMockProvider = () => {
  ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);
};
