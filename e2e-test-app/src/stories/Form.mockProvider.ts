import { ConnectionProvider, ConnectionProviderType } from "@gisce/react-ooui";
import { mockFormView, mockFormViewLocalized, mockProduct, mockProducts } from "./Form.mocks";

// Flag to control which view to use
let useLocalizedView = false;

export function setUseLocalizedView(localized: boolean) {
  useLocalizedView = localized;
}

class FormMockConnectionProvider implements ConnectionProvider {
  private productData: any[] = [...mockProducts];

  async fieldsViewGet({ model, viewId, viewType, context }: any) {
    if (model === "product.product" && viewType === "form") {
      return useLocalizedView ? mockFormViewLocalized : mockFormView;
    }
    throw new Error(`View not found for model: ${model}, type: ${viewType}`);
  }

  async getView({ model, type, context }: any) {
    if (model === "product.product" && type === "form") {
      return useLocalizedView ? mockFormViewLocalized : mockFormView;
    }
    throw new Error(`View not found for model: ${model}, type: ${type}`);
  }

  readObjects = async (params: {
    model: string;
    ids: number[];
    fields?: any;
    fieldsToRetrieve?: string[];
    context?: any;
  }) => {
    const { model, ids } = params;
    if (model === "product.product") {
      return this.productData.filter((p) => ids.includes(p.id));
    }
    return [];
  };

  async read({ model, ids, fields }: any) {
    if (model === "product.product") {
      return this.productData.filter((p) => ids.includes(p.id));
    }
    return [];
  }

  async search({ model, domain, offset, limit, order, context }: any) {
    if (model === "product.product") {
      return this.productData.map((p) => p.id);
    }
    return [];
  }

  async searchForTree({ model, domain, fields, limit, offset, order, context }: any) {
    if (model === "product.product") {
      return {
        results: this.productData,
        totalItems: async () => this.productData.length,
        attrsEvaluated: [],
        items: this.productData,
      };
    }
    return { results: [], totalItems: async () => 0, attrsEvaluated: [], items: [] };
  }

  async nameGet({ model, ids }: any) {
    if (model === "product.product") {
      return this.productData
        .filter((p) => ids.includes(p.id))
        .map((p) => [p.id, p.name]);
    }
    return [];
  }

  async nameSearch({ model, name, payload, limit }: any) {
    const searchTerm = payload || name || "";
    if (model === "product.product") {
      const filtered = this.productData.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      return filtered.slice(0, limit || 7).map((p) => [p.id, p.name]);
    }
    return [];
  }

  async create({ model, values }: any) {
    if (model === "product.product") {
      const newId = Math.max(...this.productData.map((p) => p.id)) + 1;
      const newProduct = { id: newId, ...values };
      this.productData.push(newProduct);
      return newId;
    }
    return null;
  }

  async write({ model, ids, values }: any) {
    if (model === "product.product") {
      this.productData = this.productData.map((p) => {
        if (ids.includes(p.id)) {
          return { ...p, ...values };
        }
        return p;
      });
      return true;
    }
    return false;
  }

  async unlink({ model, ids }: any) {
    if (model === "product.product") {
      this.productData = this.productData.filter((p) => !ids.includes(p.id));
      return true;
    }
    return false;
  }

  async defaultGet({ model, fields, context, extraValues }: any) {
    if (model === "product.product") {
      return {
        name: "",
        code: "",
        list_price: 0.0,
        cost_price: 0.0,
        margin_percent: 0.0,
        quantity_available: 0,
        quantity_reserved: 0,
        reorder_point: 0,
        reorder_quantity: 0,
        weight: 0.0,
        volume: 0.0,
        rating: 0,
        ...(extraValues || {}),
      };
    }
    return extraValues || {};
  }

  async update({ model, id, values, fields, context }: any) {
    return this.write({ model, ids: [id], values });
  }

  async executeOnChange({ model, action, ids, payload, fields }: any) {
    // Calculate margin when prices change
    if (model === "product.product" && payload) {
      const result: any = { value: {}, warning: null, domain: {} };

      if (payload.list_price !== undefined || payload.cost_price !== undefined) {
        const listPrice = payload.list_price ?? 0;
        const costPrice = payload.cost_price ?? 0;
        if (listPrice > 0) {
          result.value.margin_percent = ((listPrice - costPrice) / listPrice) * 100;
        }
      }

      return result;
    }
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
    if (model === "product.product") {
      return this.productData.length;
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
    this.productData = [...mockProducts];
  }
}

let mockProviderInstance: FormMockConnectionProvider | null = null;

export function initializeFormMockProvider() {
  const provider = new FormMockConnectionProvider();

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

export function getFormMockProvider(): FormMockConnectionProvider {
  if (!mockProviderInstance) {
    throw new Error("Form mock provider not initialized. Call initializeFormMockProvider first.");
  }
  return mockProviderInstance;
}
