import type { MockViewDefinition, MockRecord, MockRelatedModel } from "./types";

export interface BaseMockConfig {
  model: string;
  view: MockViewDefinition;
  records: MockRecord[];
  relatedModels?: Record<string, MockRelatedModel>;
}

export class BaseMockConnectionProvider {
  protected config: BaseMockConfig;
  protected data: MockRecord[];

  constructor(config: BaseMockConfig) {
    this.config = config;
    this.data = [...config.records];
  }

  async fieldsViewGet({ model, viewType }: any) {
    if (model === this.config.model) {
      return this.config.view;
    }
    if (this.config.relatedModels?.[model]?.view) {
      return this.config.relatedModels[model].view;
    }
    throw new Error(`View not found for model: ${model}`);
  }

  async getView({ model, type }: any) {
    if (model === this.config.model) {
      return this.config.view;
    }
    if (this.config.relatedModels?.[model]?.view) {
      return this.config.relatedModels[model].view;
    }
    throw new Error(`View not found for model: ${model}`);
  }

  async readObjects(params: {
    model: string;
    ids: number[];
    fieldsToRetrieve?: string[];
  }) {
    const { model, ids } = params;
    if (model === this.config.model) {
      return this.data.filter((r) => ids.includes(r.id));
    }
    if (this.config.relatedModels?.[model]) {
      return this.config.relatedModels[model].records.filter((r) =>
        ids.includes(r.id),
      );
    }
    return [];
  }

  async read({ model, ids }: any) {
    return this.readObjects({ model, ids });
  }

  async search({ model }: any) {
    if (model === this.config.model) {
      return this.data.map((r) => r.id);
    }
    return [];
  }

  async searchForTree({ model }: any) {
    if (model === this.config.model) {
      return {
        results: this.data,
        totalItems: async () => this.data.length,
        attrsEvaluated: [],
        items: this.data,
      };
    }
    return {
      results: [],
      totalItems: async () => 0,
      attrsEvaluated: [],
      items: [],
    };
  }

  async nameGet({ model, ids }: any) {
    if (model === this.config.model) {
      return this.data
        .filter((r) => ids.includes(r.id))
        .map((r) => [r.id, r.name || `Record ${r.id}`]);
    }
    if (this.config.relatedModels?.[model]) {
      return this.config.relatedModels[model].records
        .filter((r) => ids.includes(r.id))
        .map((r) => [r.id, r.name]);
    }
    return [];
  }

  async nameSearch({ model, name, payload, limit }: any) {
    const searchTerm = (payload || name || "").toLowerCase();

    if (model === this.config.model) {
      const filtered = this.data.filter((r) =>
        (r.name || "").toLowerCase().includes(searchTerm),
      );
      return filtered
        .slice(0, limit || 7)
        .map((r) => [r.id, r.name || `Record ${r.id}`]);
    }

    if (this.config.relatedModels?.[model]) {
      const filtered = this.config.relatedModels[model].records.filter((r) =>
        r.name.toLowerCase().includes(searchTerm),
      );
      return filtered.slice(0, limit || 7).map((r) => [r.id, r.name]);
    }

    return [];
  }

  async create({ model, values }: any) {
    if (model === this.config.model) {
      const newId = Math.max(0, ...this.data.map((r) => r.id)) + 1;
      this.data.push({ id: newId, ...values });
      return newId;
    }
    return null;
  }

  async write({ model, ids, values }: any) {
    if (model === this.config.model) {
      this.data = this.data.map((r) =>
        ids.includes(r.id) ? { ...r, ...values } : r,
      );
      return true;
    }
    return false;
  }

  async unlink({ model, ids }: any) {
    if (model === this.config.model) {
      this.data = this.data.filter((r) => !ids.includes(r.id));
      return true;
    }
    return false;
  }

  async defaultGet({ model, extraValues }: any) {
    return extraValues || {};
  }

  async executeOnChange() {
    return { value: {}, warning: null, domain: {} };
  }

  getPermissions() {
    return { read: true, write: true, create: true, unlink: true };
  }

  checkPermission = () => ({
    read: true,
    write: true,
    create: true,
    unlink: true,
  });
  checkPermissions = () => ({
    read: true,
    write: true,
    create: true,
    unlink: true,
  });
  permissions = () => ({ read: true, write: true, create: true, unlink: true });

  async fieldsGet() {
    return {};
  }
  async getDefaults() {
    return {};
  }
  async getToolbar() {
    return { action: {}, relate: [], print: [], other: [] };
  }
  async execute() {
    return null;
  }
  async executeButton() {
    return null;
  }
  async executeWorkflow() {
    return null;
  }
  async searchCount({ model }: any) {
    return model === this.config.model ? this.data.length : 0;
  }
  async readGroup() {
    return [];
  }
  async export() {
    return "";
  }
  async getTree() {
    return { field_parent: "", name: "" };
  }
  async getXMLViewContent() {
    return "";
  }
  async getActionData() {
    return {};
  }
  async getActionDomain() {
    return [];
  }
  async getDashboardActionData() {
    return {};
  }
  async evalDomain() {
    return [];
  }
  async evalContext() {
    return {};
  }
  async getSessionInfo() {
    return { session_id: "docs-mock" };
  }
  async isConnectionOnline() {
    return true;
  }
  async canCreateNewDatabase() {
    return false;
  }
  async createNewDatabase() {
    return false;
  }
  async getDatabaseList() {
    return [];
  }
  async getDistinctValues() {
    return [];
  }
  async copy() {
    return null;
  }
  async getReportData() {
    return null;
  }
  async printReport() {
    return null;
  }
  async call() {
    return null;
  }
  async callWithContext() {
    return null;
  }
  async getSomeCounters() {
    return {};
  }
  async callWizard() {
    return null;
  }
  async callDefaultGetFunction() {
    return {};
  }
  async getRelatedFieldData() {
    return null;
  }
  async getReferencedModels() {
    return [];
  }
  async getTitleFromId() {
    return "";
  }
  async treeButOpen() {
    return [[null, null, {}]];
  }
  async readAggregates() {
    return {};
  }
  async writeConcurrencyField() {
    return true;
  }
  async parseConditions() {
    return [];
  }
  async parseCondition() {
    return {};
  }
  async processSearchResults() {
    return { results: [], attrsEvaluated: [] };
  }
  async update({ model, id, values }: any) {
    return this.write({ model, ids: [id], values });
  }
  async readUserViewPrefs() {
    return false;
  }
  async saveUserViewPrefs() {
    return true;
  }
}
