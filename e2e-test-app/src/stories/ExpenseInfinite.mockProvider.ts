import {
  ConnectionProviderType,
  ViewData,
  SearchResponse,
  ConnectionProvider,
} from "@gisce/react-ooui";
import {
  mockExpenseTreeView,
  mockExpenseFormView,
  mockExpenseResults,
} from "./ExpenseInfinite.mocks";

/**
 * Mock ConnectionProvider for reproducing bug #2903
 *
 * This provider simulates the exact API behavior from the issue:
 * - Returns tree and form views matching the hr.expense.expense model
 * - Handles function field (amount) computation with delay to simulate async behavior
 * - Returns 130 records to match the exact dataset size from the bug report
 *
 * Key simulation aspects:
 * 1. Function field 'amount' is computed asynchronously via processSearchResults
 * 2. searchForTree returns records with amount=undefined initially
 * 3. processSearchResults returns the computed amounts after a delay
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
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        comparison = aValue - bValue;
      } else if (fieldName === "date") {
        const aDate = new Date(aValue);
        const bDate = new Date(bValue);
        comparison = aDate.getTime() - bDate.getTime();
      } else if (Array.isArray(aValue) && Array.isArray(bValue)) {
        // Handle many2one fields [id, name] - sort by name
        comparison = String(aValue[1] || "").localeCompare(
          String(bValue[1] || ""),
        );
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

// Calculate amount for an expense record (simulating function field computation)
// Based on real data: most amounts are 0, only ~10-15% have values
const calculateAmount = (record: any): number => {
  // Use deterministic logic based on ID so values are consistent across calls
  // Only every ~8th record has a non-zero amount (matching real data pattern)
  if (record.id % 8 !== 0 && record.id % 13 !== 0) {
    return 0;
  }
  // For non-zero amounts, generate realistic values like 442.7, 1489.47, 28.83, 2.4
  const amounts = [2.4, 28.83, 442.7, 1489.47, 156.32, 89.5, 1024.0, 67.25];
  return amounts[record.id % amounts.length];
};

// Mock ConnectionProvider
const mockConnectionProvider: Partial<ConnectionProviderType> = {
  getActionStringForModel: async () => "mock_expense_action",

  getViewsForAction: async (): Promise<ViewData> => ({
    views: new Map([
      ["tree", [2005, "tree"]],
      ["form", [2006, "form"]],
    ]),
    limit: 80,
    model: "hr.expense.expense",
    domain: [],
    context: {},
  }),

  getView: async (options: { model: string; type: string }) => {
    // Return the appropriate view based on type
    if (options.type === "form") {
      return mockExpenseFormView;
    }
    return mockExpenseTreeView;
  },

  getFields: async () => ({
    ...mockExpenseTreeView.fields,
    ...mockExpenseFormView.fields,
  }),

  searchAllIds: async () => mockExpenseResults.map((r) => r.id),

  searchCount: async () => {
    return mockExpenseResults.length; // 130 records
  },

  search: async (params: any) => {
    const { limit = 80, offset = 0, order } = params || {};
    let sortedResults = sortResults(mockExpenseResults, order);
    return sortedResults.slice(offset, offset + limit);
  },

  searchForTree: async (params: any): Promise<SearchResponse> => {
    const {
      limit = 80,
      offset = 0,
      onIdsRetrieved,
      order,
      skipFunctionFields = false,
    } = params || {};

    // Random delay for initial data fetch (100-500ms)
    // This simulates network latency for the main data
    const fetchDelay = Math.random() * 400 + 100;
    console.log(
      `[ExpenseInfinite] searchForTree offset=${offset} limit=${limit} skipFunctionFields=${skipFunctionFields}, delay: ${Math.round(
        fetchDelay,
      )}ms`,
    );
    await new Promise((resolve) => setTimeout(resolve, fetchDelay));

    // Apply sorting first
    const sortedResults = sortResults(mockExpenseResults, order);

    // Then apply pagination
    const paginatedResults = sortedResults.slice(offset, offset + limit);

    // When skipFunctionFields is true, function fields are deferred to processSearchResults
    // This is the KEY behavior that causes timing issues with infinite scroll
    const results = paginatedResults.map((result) => ({
      ...result,
      // Only skip function field if skipFunctionFields is true (deferred loading)
      amount: skipFunctionFields ? undefined : calculateAmount(result),
    }));

    // Call the onIdsRetrieved callback - this triggers the deferred function field fetch
    // The timing between this callback and the actual data processing is what causes bugs
    if (onIdsRetrieved && results.length > 0) {
      onIdsRetrieved(results.map((r) => r.id));
    }

    return {
      results,
      totalItems: () => Promise.resolve(mockExpenseResults.length),
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

    const requestedRecords = mockExpenseResults.filter((record) =>
      ids.includes(record.id),
    );

    return requestedRecords.map((record) => {
      const updatedRecord: any = { id: record.id };

      fieldsToRetrieve.forEach((fieldName) => {
        if (fieldName === "amount") {
          updatedRecord[fieldName] = calculateAmount(record);
        } else {
          updatedRecord[fieldName] = (record as any)[fieldName];
        }
      });

      return updatedRecord;
    });
  },

  readEvalUiObjects: async () => [
    mockExpenseResults,
    mockExpenseResults.map((result) => ({
      id: result.id,
      colors: undefined,
      status: undefined,
    })),
  ],

  parseConditions: async (params: any) => {
    const { values } = params || {};
    return (values || mockExpenseResults).map((result: any) => ({
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

  nameSearch: async (params: any) => {
    return mockExpenseResults.map((result) => [result.id, result.name]);
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

    let filteredResults = mockExpenseResults;
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
        filteredResults = mockExpenseResults.filter((item) =>
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
        .map((item) => {
          if (fieldName === "amount") {
            return calculateAmount(item);
          }
          return (item as any)[fieldName];
        })
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

  /**
   * processSearchResults - KEY METHOD FOR REPRODUCING THE BUG
   *
   * This method computes function field values (amount) after the initial search.
   * The random delay simulates real network latency which can cause timing issues
   * leading to duplicate rows and rendering glitches.
   *
   * Random delays help reproduce race conditions where:
   * - Fast scrolling triggers multiple requests
   * - Responses arrive out of order
   * - State updates interleave unpredictably
   */
  processSearchResults: async (params: {
    searchIds: number[];
    model: string;
    fieldsToRetrieve: string[];
    context?: any;
    fields?: any;
  }) => {
    // Random delay between 200ms and 2000ms to simulate varying network conditions
    // Occasionally (10% chance) add extra delay to simulate network hiccups
    const baseDelay = Math.random() * 1800 + 200; // 200-2000ms
    const extraDelay = Math.random() < 0.1 ? Math.random() * 3000 : 0; // 10% chance of 0-3000ms extra
    const totalDelay = baseDelay + extraDelay;

    console.log(
      `[ExpenseInfinite] processSearchResults for ${params.searchIds
        ?.length} records, delay: ${Math.round(totalDelay)}ms`,
    );

    await new Promise((resolve) => setTimeout(resolve, totalDelay));

    const { searchIds, fieldsToRetrieve } = params;

    if (!searchIds || !fieldsToRetrieve || searchIds.length === 0) {
      return { results: [], attrsEvaluated: {} };
    }

    const requestedRecords = mockExpenseResults.filter((record) =>
      searchIds.includes(record.id),
    );

    // Generate updated values for function fields
    const results = requestedRecords.map((record) => {
      const updatedRecord: any = { id: record.id };

      fieldsToRetrieve.forEach((fieldName) => {
        if (fieldName === "amount") {
          // Compute the function field value
          updatedRecord[fieldName] = calculateAmount(record);
        } else {
          updatedRecord[fieldName] = (record as any)[fieldName];
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

// Initialize the mock connection provider
export const initializeExpenseMockProvider = () => {
  ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);
};
