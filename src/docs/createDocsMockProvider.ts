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

  async getView({ model }: any) {
    return this.fieldsViewGet({ model });
  }

  async readObjects(params: {
    model: string;
    ids: number[];
    fieldsToRetrieve?: string[];
  }) {
    const { model, ids } = params;
    const config = this.getConfigForModel(model);
    if (config) {
      return config.records.filter((r) => ids.includes(r.id));
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

  async read({ model, ids }: any) {
    return this.readObjects({ model, ids });
  }

  async search({ model }: any) {
    const config = this.getConfigForModel(model);
    if (config) {
      return config.records.map((r) => r.id);
    }
    return [];
  }

  async searchForTree({ model }: any) {
    const config = this.getConfigForModel(model);
    if (config) {
      return {
        results: config.records,
        totalItems: async () => config.records.length,
        attrsEvaluated: [],
        items: config.records,
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

  async searchCount({ model }: any) {
    const config = this.getConfigForModel(model);
    return config ? config.records.length : 0;
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
