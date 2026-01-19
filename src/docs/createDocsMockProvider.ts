import ConnectionProvider from "../ConnectionProvider";
import {
  BaseMockConnectionProvider,
  type BaseMockConfig,
} from "./BaseMockConnectionProvider";
import type { ConnectionProviderType } from "../types";

const modelConfigs: Map<string, BaseMockConfig> = new Map();
let multiModelProvider: MultiModelMockProvider | null = null;

class MultiModelMockProvider extends BaseMockConnectionProvider {
  private configs: Map<string, BaseMockConfig>;

  constructor(configs: Map<string, BaseMockConfig>) {
    super({
      model: "__multi__",
      view: { view_id: 0, type: "form", arch: "", fields: {} },
      records: [],
    });
    this.configs = configs;
  }

  private getConfigForModel(model: string): BaseMockConfig | undefined {
    return this.configs.get(model);
  }

  async fieldsViewGet({ model }: any) {
    const config = this.getConfigForModel(model);
    if (config) {
      return config.view;
    }
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]?.view) {
        return cfg.relatedModels[model].view;
      }
    }
    throw new Error(`View not found for model: ${model}`);
  }

  async getView({ model, type }: any) {
    const config = this.getConfigForModel(model);
    if (config) {
      // If requesting form type and we have a tree view, generate a simple form view
      if (type === "form" && config.view.type === "tree") {
        return this.generateFormView(config);
      }
      return config.view;
    }
    // Check related models
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        const relatedModel = cfg.relatedModels[model];
        // If requesting form type and we have a tree view, generate a simple form view
        if (type === "form" && relatedModel.view?.type === "tree") {
          return this.generateFormViewForRelated(relatedModel);
        }
        return relatedModel.view;
      }
    }
    throw new Error(`View not found for model: ${model}`);
  }

  private generateFormView(config: BaseMockConfig): any {
    const fields = config.view.fields;
    const fieldNames = Object.keys(fields);
    const archFields = fieldNames.map((f) => `<field name="${f}"/>`).join("");
    return {
      view_id: (config.view.view_id || 0) + 1000,
      type: "form" as const,
      arch: `<?xml version="1.0"?><form><group>${archFields}</group></form>`,
      fields,
    };
  }

  private generateFormViewForRelated(relatedModel: any): any {
    const fields = relatedModel.view?.fields || {};
    const fieldNames = Object.keys(fields);
    const archFields = fieldNames.map((f) => `<field name="${f}"/>`).join("");
    return {
      view_id: (relatedModel.view?.view_id || 0) + 1000,
      type: "form" as const,
      arch: `<?xml version="1.0"?><form><group>${archFields}</group></form>`,
      fields,
    };
  }

  async getToolbar({ model, type, context }: any) {
    console.log(`[Docs Preview] getToolbar called: ${model}`, {
      type,
      context,
    });
    return {
      action: {},
      relate: [],
      print: [],
      other: [],
    };
  }

  async readObjects(params: {
    model: string;
    ids: number[];
    fieldsToRetrieve?: string[];
  }) {
    const { model, ids } = params;
    const config = this.getConfigForModel(model);
    if (config) {
      const records = config.records.filter((r) => ids.includes(r.id));
      // Transform one2many/many2many field values to the expected format
      return records.map((record) =>
        this.transformX2ManyFields(record, config),
      );
    }
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        return cfg.relatedModels[model].records.filter((r) =>
          ids.includes(r.id),
        );
      }
    }
    return [];
  }

  /**
   * Transform one2many and many2many field values to the format expected by react-ooui.
   */
  private transformX2ManyFields(record: any, config: BaseMockConfig): any {
    const transformed = { ...record };
    const fields = config.view.fields;

    for (const [fieldName, fieldDef] of Object.entries(fields)) {
      const value = record[fieldName];
      if (!value) continue;

      if (fieldDef.type === "one2many" || fieldDef.type === "many2many") {
        const relationModel = fieldDef.relation;
        if (!relationModel) continue;

        const relatedConfig = config.relatedModels?.[relationModel];
        if (!relatedConfig) continue;

        // Get the IDs from the value
        let relatedIds: number[] = [];
        if (Array.isArray(value)) {
          // Handle many2many format [[6, 0, [ids]]] or one2many format [ids]
          if (
            value.length > 0 &&
            Array.isArray(value[0]) &&
            value[0][0] === 6
          ) {
            relatedIds = value[0][2] || [];
          } else {
            relatedIds = value.filter(
              (v: any): v is number => typeof v === "number",
            );
          }
        }

        // Get the related records
        const relatedRecords = relatedConfig.records.filter((r) =>
          relatedIds.includes(r.id),
        );

        // Transform to the expected format
        transformed[fieldName] = {
          fields: relatedConfig.view?.fields || {},
          items: relatedRecords.map((relatedRecord) => ({
            id: relatedRecord.id,
            operation: "original",
            values: relatedRecord,
            treeValues: relatedRecord,
          })),
        };
      }
    }

    return transformed;
  }

  async read({ model, ids }: any) {
    return this.readObjects({ model, ids });
  }

  async search({ model, params, fieldsToRetrieve }: any) {
    const config = this.getConfigForModel(model);
    if (config) {
      // If fieldsToRetrieve is provided, return full records (search+read)
      if (fieldsToRetrieve && fieldsToRetrieve.length > 0) {
        return config.records;
      }
      return config.records.map((r) => r.id);
    }
    // Also check related models
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        if (fieldsToRetrieve && fieldsToRetrieve.length > 0) {
          return cfg.relatedModels[model].records;
        }
        return cfg.relatedModels[model].records.map((r) => r.id);
      }
    }
    return [];
  }

  async searchForTree({ model, name_search, params }: any) {
    console.log(`[Docs Preview] searchForTree called:`, {
      model,
      name_search,
      params,
    });
    const searchTerm = (name_search || "").toLowerCase();
    const filterByName = (records: any[]) => {
      if (!searchTerm) return records;
      return records.filter((r) =>
        (r.name || "").toLowerCase().includes(searchTerm),
      );
    };

    const config = this.getConfigForModel(model);
    if (config) {
      const filteredRecords = filterByName(config.records);
      return {
        results: filteredRecords,
        totalItems: async () => filteredRecords.length,
        attrsEvaluated: [],
        items: filteredRecords,
      };
    }
    // Check related models
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        const filteredRecords = filterByName(cfg.relatedModels[model].records);
        return {
          results: filteredRecords,
          totalItems: async () => filteredRecords.length,
          attrsEvaluated: [],
          items: filteredRecords,
        };
      }
    }
    return {
      results: [],
      totalItems: async () => 0,
      attrsEvaluated: [],
      items: [],
    };
  }

  async nameGet({ model, ids }: any) {
    const config = this.getConfigForModel(model);
    if (config) {
      return config.records
        .filter((r) => ids.includes(r.id))
        .map((r) => [r.id, r.name || `Record ${r.id}`]);
    }
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        return cfg.relatedModels[model].records
          .filter((r) => ids.includes(r.id))
          .map((r) => [r.id, r.name]);
      }
    }
    return [];
  }

  async nameSearch({ model, name, payload, limit }: any) {
    const searchTerm = (payload || name || "").toLowerCase();
    const config = this.getConfigForModel(model);

    if (config) {
      const filtered = config.records.filter((r) =>
        (r.name || "").toLowerCase().includes(searchTerm),
      );
      return filtered
        .slice(0, limit || 7)
        .map((r) => [r.id, r.name || `Record ${r.id}`]);
    }

    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        const filtered = cfg.relatedModels[model].records.filter((r) =>
          r.name.toLowerCase().includes(searchTerm),
        );
        return filtered.slice(0, limit || 7).map((r) => [r.id, r.name]);
      }
    }

    return [];
  }

  async searchCount({ model, name_search }: any) {
    const searchTerm = (name_search || "").toLowerCase();
    const filterByName = (records: any[]) => {
      if (!searchTerm) return records;
      return records.filter((r) =>
        (r.name || "").toLowerCase().includes(searchTerm),
      );
    };

    const config = this.getConfigForModel(model);
    if (config) {
      return filterByName(config.records).length;
    }
    // Check related models
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        return filterByName(cfg.relatedModels[model].records).length;
      }
    }
    return 0;
  }

  // Button execution methods - return empty/success responses for docs preview
  async execute({ model, action, payload, context }: any) {
    console.log(`[Docs Preview] execute called: ${model}.${action}`, {
      payload,
      context,
    });

    // Handle name_get action specially - used by Many2one when selecting a record
    if (action === "name_get") {
      const ids = Array.isArray(payload) ? payload : [payload];
      return this.nameGet({ model, ids });
    }

    // Return empty object - the form will just refresh
    return {};
  }

  async executeButton({ model, payload }: any) {
    console.log(`[Docs Preview] executeButton called: ${model}`, { payload });
    return {};
  }

  async executeWorkflow({ model, action, payload }: any) {
    console.log(`[Docs Preview] executeWorkflow called: ${model}.${action}`, {
      payload,
    });
    return {};
  }

  // Many2one search modal support
  async searchAllIds({ model }: any) {
    const config = this.getConfigForModel(model);
    if (config) {
      return config.records.map((r) => r.id);
    }
    for (const cfg of this.configs.values()) {
      if (cfg.relatedModels?.[model]) {
        return cfg.relatedModels[model].records.map((r) => r.id);
      }
    }
    return [];
  }

  // Write/create methods for form interactions
  async write({ model, ids, values }: any) {
    console.log(`[Docs Preview] write called: ${model}`, { ids, values });
    return true;
  }

  async create({ model, values }: any) {
    console.log(`[Docs Preview] create called: ${model}`, { values });
    return 999; // Return a fake new ID
  }

  async update({ model, id, values }: any) {
    console.log(`[Docs Preview] update called: ${model}`, { id, values });
    return true;
  }

  // Action reading for action buttons
  async getAction({ actionId }: any) {
    console.log(`[Docs Preview] getAction called:`, { actionId });
    return { type: "ir.actions.act_window_close" };
  }

  // Domain evaluation
  async evalDomain({ domain }: any) {
    return domain || [];
  }

  // Default get for new records
  async getDefaults({ model }: any) {
    return {};
  }

  // On change handling
  async executeOnChange({ model }: any) {
    return { value: {}, warning: null, domain: {} };
  }

  // Method for refreshing record data after actions
  async refresh({ model, id }: any) {
    console.log(`[Docs Preview] refresh called: ${model}`, { id });
    return this.readObjects({ model, ids: [id] });
  }
}

export function createDocsMockProvider(
  config: BaseMockConfig,
): ConnectionProviderType {
  modelConfigs.set(config.model, config);
  multiModelProvider = new MultiModelMockProvider(modelConfigs);

  const proxiedProvider = new Proxy(multiModelProvider, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);
      if (value !== undefined) {
        // Bind methods to target to preserve 'this' context
        if (typeof value === "function") {
          return value.bind(target);
        }
        return value;
      }
      if (typeof prop === "string" && prop !== "constructor") {
        return function () {
          return { read: true, write: true, create: true, unlink: true };
        };
      }
      return value;
    },
  });

  ConnectionProvider.init(proxiedProvider as unknown as ConnectionProviderType);

  return proxiedProvider as unknown as ConnectionProviderType;
}
