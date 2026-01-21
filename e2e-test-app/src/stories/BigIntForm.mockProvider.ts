import { ConnectionProvider, ConnectionProviderType } from "@gisce/react-ooui";
import {
  mockBigIntFormView,
  mockBigIntTreeView,
  mockBigIntRecord,
  BIGINT_ID,
} from "./BigIntForm.mocks";

/**
 * Mock ConnectionProvider for BigInt integer field test.
 *
 * This provider returns records with BigInt values (> Number.MAX_SAFE_INTEGER)
 * to test that the integer widget can handle them correctly.
 */
class BigIntFormMockConnectionProvider implements ConnectionProvider {
  private recordData: any[] = [mockBigIntRecord];

  async fieldsViewGet({ model, viewId, viewType, context }: any) {
    if (model === "test.bigint") {
      if (viewType === "form") {
        return mockBigIntFormView;
      }
      if (viewType === "tree") {
        return mockBigIntTreeView;
      }
    }
    throw new Error(`View not found for model: ${model}, type: ${viewType}`);
  }

  async getView({ model, type, context }: any) {
    if (model === "test.bigint") {
      if (type === "form") {
        return mockBigIntFormView;
      }
      if (type === "tree") {
        return mockBigIntTreeView;
      }
    }
    throw new Error(`View not found for model: ${model}, type: ${type}`);
  }

  readObjects = async (params: {
    model: string;
    ids: (number | bigint)[];
    fields?: any;
    fieldsToRetrieve?: string[];
    context?: any;
  }) => {
    const { model, ids } = params;
    if (model === "test.bigint") {
      // Handle BigInt comparison
      return this.recordData.filter((r) => {
        return ids.some((id) => {
          // Compare as strings to handle BigInt correctly
          return String(r.id) === String(id);
        });
      });
    }
    return [];
  };

  async read({ model, ids, fields }: any) {
    if (model === "test.bigint") {
      return this.recordData.filter((r) => {
        return ids.some((id: any) => String(r.id) === String(id));
      });
    }
    return [];
  }

  async search({ model, domain, offset, limit, order, context }: any) {
    if (model === "test.bigint") {
      return this.recordData.map((r) => r.id);
    }
    return [];
  }

  async searchForTree({ model, domain, fields, limit, offset, order, context }: any) {
    if (model === "test.bigint") {
      return {
        results: this.recordData,
        totalItems: async () => this.recordData.length,
        attrsEvaluated: [],
        items: this.recordData,
      };
    }
    return { results: [], totalItems: async () => 0, attrsEvaluated: [], items: [] };
  }

  async nameGet({ model, ids }: any) {
    if (model === "test.bigint") {
      return this.recordData
        .filter((r) => ids.some((id: any) => String(r.id) === String(id)))
        .map((r) => [r.id, r.name]);
    }
    return [];
  }

  async nameSearch({ model, name, payload, limit }: any) {
    const searchTerm = payload || name || "";
    if (model === "test.bigint") {
      const filtered = this.recordData.filter((r) =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      return filtered.slice(0, limit || 7).map((r) => [r.id, r.name]);
    }
    return [];
  }

  async create({ model, values }: any) {
    return null;
  }

  async write({ model, ids, values }: any) {
    return false;
  }

  async unlink({ model, ids }: any) {
    return false;
  }

  async defaultGet({ model, fields, context, extraValues }: any) {
    if (model === "test.bigint") {
      return {
        name: "",
        big_number: 0,
        ...(extraValues || {}),
      };
    }
    return extraValues || {};
  }

  async update({ model, id, values, fields, context }: any) {
    return this.write({ model, ids: [id], values });
  }

  async executeOnChange({ model, action, ids, payload, fields }: any) {
    return { value: {}, warning: null, domain: {} };
  }

  // Permission methods
  getPermissions(model: string) {
    return { read: true, write: true, create: true, unlink: true };
  }

  checkPermission = (model: string) => {
    return { read: true, write: true, create: true, unlink: true };
  };

  checkPermissions = (model: string) => {
    return { read: true, write: true, create: true, unlink: true };
  };

  permissions = (model: string) => {
    return { read: true, write: true, create: true, unlink: true };
  };

  // Other required methods with default implementations
  async fieldsGet() { return {}; }
  async getDefaults() { return {}; }
  async getToolbar({ model, type, context }: any) {
    return { action: {}, relate: [], print: [], other: [] };
  }
  async execute() { return null; }
  async executeButton() { return null; }
  async executeWorkflow() { return null; }
  async searchCount({ model, domain }: any) {
    if (model === "test.bigint") {
      return this.recordData.length;
    }
    return 0;
  }
  async readGroup() { return []; }
  async export() { return ""; }
  async getTree() { return { field_parent: "", name: "" }; }
  async getXMLViewContent() { return ""; }
  async getActionData() { return {}; }
  async getActionDomain() { return []; }
  async getDashboardActionData() { return {}; }
  async evalDomain() { return []; }
  async evalContext() { return {}; }
  async getSessionInfo() { return { session_id: "mock" }; }
  async isConnectionOnline() { return true; }
  async canCreateNewDatabase() { return false; }
  async createNewDatabase() { return false; }
  async getDatabaseList() { return []; }
  async getDistinctValues() { return []; }
  async copy() { return null; }
  async getReportData() { return null; }
  async printReport() { return null; }
  async call() { return null; }
  async callWithContext() { return null; }
  async getSomeCounters() { return {}; }
  async callWizard() { return null; }
  async callDefaultGetFunction() { return {}; }
  async getRelatedFieldData() { return null; }
  async getReferencedModels() { return []; }
  async getTitleFromId() { return ""; }
  async treeButOpen() { return [[null, null, {}]]; }
  async readAggregates() { return {}; }
  async writeConcurrencyField() { return true; }
  async parseConditions() { return []; }
  async parseCondition() { return {}; }
  async processSearchResults() { return { results: [], attrsEvaluated: [] }; }

  // User view preferences
  private userViewPrefs: { [key: string]: any } = {};
  async readUserViewPrefs({ key }: { key: string }) {
    return this.userViewPrefs[key] || false;
  }
  async saveUserViewPrefs({ key, preferences }: { key: string; preferences: any }) {
    if (!preferences || (Array.isArray(preferences) && preferences.length === 0)) {
      delete this.userViewPrefs[key];
    } else {
      this.userViewPrefs[key] = preferences;
    }
    return true;
  }

  constructor() {
    this.recordData = [mockBigIntRecord];
  }
}

let mockProviderInstance: BigIntFormMockConnectionProvider | null = null;

export function initializeBigIntFormMockProvider() {
  const provider = new BigIntFormMockConnectionProvider();

  mockProviderInstance = new Proxy(provider, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (value !== undefined) {
        return value;
      }
      if (typeof prop === "string" && prop !== "constructor") {
        return function (...args: any[]) {
          return { read: true, write: true, create: true, unlink: true };
        };
      }
      return value;
    },
  });

  ConnectionProvider.init(mockProviderInstance as ConnectionProviderType);
  return mockProviderInstance;
}

export function getBigIntFormMockProvider(): BigIntFormMockConnectionProvider {
  if (!mockProviderInstance) {
    throw new Error("BigInt form mock provider not initialized. Call initializeBigIntFormMockProvider first.");
  }
  return mockProviderInstance;
}
