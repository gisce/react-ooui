import ConnectionProvider from "../../ConnectionProvider";
import { getMock } from "./";

import {
  ConnectionProviderType,
  SearchRequest,
  UpdateObjectRequest,
  CreateObjectRequest,
  ExecuteRequest,
  ReadObjectRequest,
} from "../../types/index";

const init = () => {
  const handler: ConnectionProviderType = {
    getViewsForAction: async (action: string) => {
      return { limit: 0, model: "", views: null };
    },
    getView: async (model: string, type: "tree" | "form") => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = getMock(model);
      return data[type];
    },
    search: async (options: SearchRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = getMock(options.model);
      return {
        totalItems: 1,
        results: [data.exampleValues],
      };
    },
    update: async (options: UpdateObjectRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
    create: async (options: CreateObjectRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return 9999;
    },
    execute: async (options: ExecuteRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return [[1, "Alegría-Dulantzi"]];
    },
    readObject: async (options: ReadObjectRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = getMock(options.model);
      return data.exampleValues;
    },
  };

  ConnectionProvider.init(handler);
};

export default { init };
