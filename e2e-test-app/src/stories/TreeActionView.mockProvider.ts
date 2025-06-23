import {
  ConnectionProviderType,
  ViewData,
  SearchResponse,
  ConnectionProvider,
} from "@gisce/react-ooui";
import { mockTreeView, mockResults } from "./TreeActionView.mocks";

// Helper function to generate colors and status based on result properties
const generateColorsAndStatus = (result: any) => {
  let colors = undefined;
  let status = undefined;

  // Get function field values for color resolution
  const annualBonus = result.annual_bonus || 0;
  const computedRating = result.computed_rating || 0;

  // Complex color resolution combining function fields with static properties
  if (result.priority === "critical") {
    colors = "#c62828"; // Red text for critical
    status = "#c62828";
  } else if (result.priority === "high") {
    colors = "#ef6c00"; // Orange text for high
    status = "#ef6c00";
  } else if (result.is_vip && annualBonus > 8000) {
    // VIP employees with high bonus get special golden color
    colors = "#ff8f00"; // Golden color for high-bonus VIPs
    status = "#ff8f00";
  } else if (result.is_vip) {
    colors = "#7b1fa2"; // Purple text for VIP
  } else if (computedRating >= 4) {
    // High-rated employees get green color
    colors = "#388e3c"; // Green for high performers
    status = "#4caf50";
  } else if (annualBonus > 6000) {
    // Employees with good bonus get blue color
    colors = "#1976d2"; // Blue for good bonus earners
    status = "#2196f3";
  } else if (result.status === "inactive" || result.status === "terminated") {
    colors = "#757575"; // Gray text for inactive
  } else if (computedRating <= 2) {
    // Low-rated employees get orange warning color
    colors = "#f57c00"; // Orange for low performers
    status = "#ff9800";
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
    const { limit = 80, offset = 0, onIdsRetrieved } = params || {};

    // Create results with some dynamic variation to simulate refresh
    const baseResults = mockResults.slice(offset, offset + limit);
    const results = baseResults.map((result) => ({
      ...result,
      // Update last_login to current time to show autorefresh working
      last_login: new Date().toISOString(),
      // Add small variations to function fields to show they're being recalculated
      annual_bonus:
        result.annual_bonus || 0 + Math.floor(Math.random() * 200 - 100),
      computed_rating: Math.max(
        1,
        Math.min(
          5,
          (result.computed_rating || 3) + Math.floor(Math.random() * 3 - 1),
        ),
      ),
    }));

    console.log(
      "searchForTree returning results with status:",
      results.map((r) => ({ id: r.id, hasStatus: r.id % 2 === 1 })),
    );

    // Call the onIdsRetrieved callback with the fetched IDs - this is crucial for function fields!
    if (onIdsRetrieved && results.length > 0) {
      console.log(
        "Calling onIdsRetrieved with IDs:",
        results.map((r) => r.id),
      );
      onIdsRetrieved(results.map((r) => r.id));
    }

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
  readObjects: async (params: {
    model: string;
    ids: number[];
    fields?: any;
    fieldsToRetrieve?: string[];
    context?: any;
  }) => {
    console.log("readObjects called with params:", params);
    const { ids, fieldsToRetrieve } = params;

    if (!ids || !fieldsToRetrieve) {
      return [];
    }

    // Find the records that match the requested IDs
    const requestedRecords = mockResults.filter((record) =>
      ids.includes(record.id),
    );

    // Generate updated values for autorefreshable fields
    return requestedRecords.map((record) => {
      const updatedRecord: any = { id: record.id };

      fieldsToRetrieve.forEach((fieldName) => {
        switch (fieldName) {
          case "last_login":
            // Generate a random recent timestamp for autorefresh simulation
            const randomMinutesAgo = Math.floor(Math.random() * 60); // 0-59 minutes ago
            updatedRecord[fieldName] = new Date(
              Date.now() - randomMinutesAgo * 60 * 1000,
            ).toISOString();
            break;

          default:
            // For other fields, return the original value with potential minor variations
            if (typeof (record as any)[fieldName] === "number") {
              // Add small random variation to numeric fields
              const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
              updatedRecord[fieldName] = Math.round(
                (record as any)[fieldName] * (1 + variation),
              );
            } else {
              updatedRecord[fieldName] = (record as any)[fieldName];
            }
            break;
        }
      });

      return updatedRecord;
    });
  },
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
  processSearchResults: async (params: {
    searchIds: number[];
    model: string;
    fieldsToRetrieve: string[];
    context?: any;
    fields?: any;
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("processSearchResults called with params:", params);
    const { searchIds, fieldsToRetrieve } = params;

    if (!searchIds || !fieldsToRetrieve || searchIds.length === 0) {
      return { results: [], attrsEvaluated: {} };
    }

    // Find the records that match the requested IDs
    const requestedRecords = mockResults.filter((record) =>
      searchIds.includes(record.id),
    );

    console.log(
      "Found requested records:",
      requestedRecords.map((r) => r.id),
    );

    // Generate updated values for function fields
    const results = requestedRecords.map((record) => {
      const updatedRecord: any = { id: record.id };

      fieldsToRetrieve.forEach((fieldName) => {
        switch (fieldName) {
          case "annual_bonus":
            // Recalculate function field based on current salary and performance
            const salary = record.salary || 50000;
            const performanceScore = record.performance_score || 75;
            // Add some randomness to make it appear dynamic
            const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
            updatedRecord[fieldName] = Math.floor(
              salary * 0.1 * (performanceScore / 100) * (1 + variation),
            );
            break;

          case "computed_rating":
            // Calculate a complex rating based on multiple factors
            const baseRating = record.performance_score || 75;
            const salaryFactor = Math.min(
              (record.salary || 50000) / 70000,
              1.5,
            ); // Max 1.5x boost
            const vipBonus = record.is_vip ? 10 : 0;
            const statusPenalty = record.status === "terminated" ? -20 : 0;

            // Add some time-based variation to simulate real function field behavior
            const timeVariation = Math.sin(Date.now() / 10000) * 5; // ±5 points variation

            const rawRating =
              baseRating * salaryFactor +
              vipBonus +
              statusPenalty +
              timeVariation;
            updatedRecord[fieldName] = Math.max(
              1,
              Math.min(5, Math.round(rawRating / 20)),
            ); // Scale to 1-5
            break;

          case "last_login":
            // Generate a random recent timestamp for autorefresh simulation
            const randomMinutesAgo = Math.floor(Math.random() * 60); // 0-59 minutes ago
            updatedRecord[fieldName] = new Date(
              Date.now() - randomMinutesAgo * 60 * 1000,
            ).toISOString();
            break;

          default:
            // For other fields, return the original value with potential minor variations
            if (typeof (record as any)[fieldName] === "number") {
              // Add small random variation to numeric fields
              const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
              updatedRecord[fieldName] = Math.round(
                (record as any)[fieldName] * (1 + variation),
              );
            } else {
              updatedRecord[fieldName] = (record as any)[fieldName];
            }
            break;
        }
      });

      return updatedRecord;
    });

    // Generate attributes evaluation for the updated records
    const attrsEvaluated = results.map((result: any) => {
      // Find the original record to get all fields for condition evaluation
      const originalRecord = mockResults.find((r) => r.id === result.id) || {};
      const mergedRecord = { ...originalRecord, ...result };
      const { colors, status } = generateColorsAndStatus(mergedRecord);

      return {
        id: result.id,
        colors,
        status,
      };
    });

    return { results, attrsEvaluated };
  },
  getToolbar: async () => ({}),
  logAction: async () => ({}),
  checkPermission: async () => true,
};

// Initialize the mock connection provider
export const initializeMockProvider = () => {
  ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);
};
