import {
  ConnectionProviderType,
  ViewData,
  SearchResponse,
  ConnectionProvider,
} from "@gisce/react-ooui";
import {
  mockTreeView,
  mockResultsWithStringNumbers,
  mockTreeViewInfinite,
} from "./TreeActionView.mocks";

/**
 * Mock Connection Provider that returns numeric fields as STRINGS.
 *
 * This simulates the real ERP backend behavior where numbers often come as strings
 * in JSON responses. This provider is used to test that the application handles
 * string-typed numeric values correctly without throwing errors like:
 *   "TypeError: i.toFixed is not a function"
 */

// Helper function to parse order string and sort results
const sortResults = (results: any[], order?: string) => {
  if (!order || !order.trim()) {
    return results;
  }

  const orderClauses = order.split(",").map((clause) => clause.trim());

  return [...results].sort((a, b) => {
    for (const clause of orderClauses) {
      const [fieldName, direction = "asc"] = clause.split(/\s+/);
      const isDesc = direction.toLowerCase() === "desc";

      const aValue = a[fieldName];
      const bValue = b[fieldName];

      if (aValue == null && bValue == null) continue;
      if (aValue == null) return isDesc ? 1 : -1;
      if (bValue == null) return isDesc ? -1 : 1;

      let comparison = 0;

      if (typeof aValue === "string" && typeof bValue === "string") {
        // Try to compare as numbers if both look like numbers
        const aNum = parseFloat(aValue);
        const bNum = parseFloat(bValue);
        if (!isNaN(aNum) && !isNaN(bNum)) {
          comparison = aNum - bNum;
        } else {
          comparison = aValue.localeCompare(bValue);
        }
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        comparison = aValue - bValue;
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }

      if (comparison !== 0) {
        return isDesc ? -comparison : comparison;
      }
    }
    return 0;
  });
};

const mockConnectionProvider: Partial<ConnectionProviderType> = {
  getActionStringForModel: async () => "mock_action",
  getViewsForAction: async (): Promise<ViewData> => ({
    views: new Map([["tree", [2, "tree"]]]),
    limit: 80,
    model: "demo.model",
    domain: [],
    context: {},
  }),
  getView: async () => mockTreeViewInfinite,
  getFields: async () => ({}),
  searchAllIds: async () => mockResultsWithStringNumbers.map((r) => r.id),
  searchCount: async () => mockResultsWithStringNumbers.length,
  search: async (params: any) => {
    const { limit = 80, offset = 0, order } = params || {};
    let sortedResults = sortResults(mockResultsWithStringNumbers, order);
    return sortedResults.slice(offset, offset + limit);
  },
  searchForTree: async (params: any): Promise<SearchResponse> => {
    const { limit = 80, offset = 0, onIdsRetrieved, order } = params || {};

    let sortedResults = sortResults(mockResultsWithStringNumbers, order);
    const baseResults = sortedResults.slice(offset, offset + limit);

    // Return results with STRING-typed numbers (this is the key part of this test)
    const results = baseResults.map((result) => ({
      ...result,
      last_login: new Date().toISOString(),
      // IMPORTANT: These are STRINGS, not numbers - simulating ERP backend
      annual_bonus: String(
        Math.floor(Math.random() * 10000 + 1000),
      ),
      computed_rating: String(Math.floor(Math.random() * 5 + 1)),
    }));

    if (onIdsRetrieved && results.length > 0) {
      onIdsRetrieved(results.map((r) => r.id));
    }

    return {
      results,
      totalItems: () => Promise.resolve(mockResultsWithStringNumbers.length),
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
  readObjects: async (params: {
    model: string;
    ids: number[];
    fields?: any;
    fieldsToRetrieve?: string[];
    context?: any;
  }) => {
    const { ids, fieldsToRetrieve } = params;

    if (!ids || !fieldsToRetrieve) {
      return [];
    }

    const requestedRecords = mockResultsWithStringNumbers.filter((record) =>
      ids.includes(record.id),
    );

    return requestedRecords.map((record) => {
      const updatedRecord: any = { id: record.id };

      fieldsToRetrieve.forEach((fieldName) => {
        switch (fieldName) {
          case "last_login":
            const randomMinutesAgo = Math.floor(Math.random() * 60);
            updatedRecord[fieldName] = new Date(
              Date.now() - randomMinutesAgo * 60 * 1000,
            ).toISOString();
            break;

          default:
            // Return values as strings for numeric fields
            const originalValue = (record as any)[fieldName];
            if (typeof originalValue === "number") {
              updatedRecord[fieldName] = String(originalValue);
            } else {
              updatedRecord[fieldName] = originalValue;
            }
            break;
        }
      });

      return updatedRecord;
    });
  },
  readEvalUiObjects: async () => [
    mockResultsWithStringNumbers,
    mockResultsWithStringNumbers.map((result) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    })),
  ],
  parseConditions: async (params: any) => {
    const { values } = params || {};
    return (values || mockResultsWithStringNumbers).map((result: any) => ({
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
  nameSearch: async () => {
    return mockResultsWithStringNumbers.map((result) => [
      result.id,
      result.name,
    ]);
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

    let filteredResults = mockResultsWithStringNumbers;
    if (domain && domain.length > 0) {
      const idInCondition = domain.find(
        (condition) =>
          Array.isArray(condition) &&
          condition.length === 3 &&
          condition[0] === "id" &&
          condition[1] === "in",
      );

      if (idInCondition) {
        const idsToInclude = idInCondition[2];
        filteredResults = mockResultsWithStringNumbers.filter((item) =>
          idsToInclude.includes(item.id),
        );
      }
    }

    const result: Record<string, Record<string, number>> = {};

    Object.entries(aggregateFields).forEach(([fieldName, operations]) => {
      if (!result[fieldName]) {
        result[fieldName] = {};
      }

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
    const { searchIds, fieldsToRetrieve } = params;

    if (!searchIds || !fieldsToRetrieve || searchIds.length === 0) {
      return { results: [], attrsEvaluated: {} };
    }

    const requestedRecords = mockResultsWithStringNumbers.filter((record) =>
      searchIds.includes(record.id),
    );

    // Return STRING-typed numeric values
    const results = requestedRecords.map((record) => {
      const updatedRecord: any = { id: record.id };

      fieldsToRetrieve.forEach((fieldName) => {
        switch (fieldName) {
          case "annual_bonus":
            updatedRecord[fieldName] = String(
              Math.floor(Math.random() * 10000 + 1000),
            );
            break;

          case "computed_rating":
            updatedRecord[fieldName] = String(Math.floor(Math.random() * 5 + 1));
            break;

          case "last_login":
            const randomMinutesAgo = Math.floor(Math.random() * 60);
            updatedRecord[fieldName] = new Date(
              Date.now() - randomMinutesAgo * 60 * 1000,
            ).toISOString();
            break;

          default:
            const originalValue = (record as any)[fieldName];
            if (typeof originalValue === "number") {
              updatedRecord[fieldName] = String(originalValue);
            } else {
              updatedRecord[fieldName] = originalValue;
            }
            break;
        }
      });

      return updatedRecord;
    });

    const attrsEvaluated = results.map((result: any) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    }));

    return { results, attrsEvaluated };
  },
  getToolbar: async () => ({}),
  logAction: async () => ({}),
  checkPermission: async () => true,
};

export const initializeStringNumbersMockProvider = () => {
  ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);
};
