import ConnectionProvider from "../../ConnectionProvider";
import { getMock } from "./";

import {
  ConnectionProviderType,
  SearchRequest,
  UpdateObjectRequest,
  CreateObjectRequest,
  ExecuteRequest,
  ReadObjectsRequest,
} from "../../types/index";

const init = () => {
  const handler: ConnectionProviderType = {
    getAction: async (model: string) => {
      return "ir.actions.act_window,6";
    },
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
    readObjects: async (options: ReadObjectsRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const modelMock = getMock(options.model);
      return modelMock.exampleValues ? [modelMock.exampleValues] : [];
    },
  };

  ConnectionProvider.init(handler);
};

export default { init };
