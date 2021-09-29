import ConnectionProvider from "../../ConnectionProvider";
import { getMock } from "./";

const timeout = 500;

import {
  ConnectionProviderType,
  SearchRequest,
  UpdateObjectRequest,
  CreateObjectRequest,
  ExecuteRequest,
  ReadObjectsRequest,
  DeleteObjectsRequest,
  GetViewRequest,
  CreateReportRequest,
  GetReportRequest,
  ExecuteOnChangeRequest,
  DefaultGetRequest,
  SearchCountRequest,
} from "../../types/index";

const init = () => {
  const handler: ConnectionProviderType = {
    getActionStringForModel: async (model: string) => {
      return "ir.actions.act_window,6";
    },
    getViewsForAction: async ({
      action,
      context,
    }: {
      action: string;
      context?: any;
    }) => {
      const model = "giscedata.facturacio.factura";
      const views = new Map<string, any>();
      views.set("tree", (getMock(model) as any).tree);
      views.set("form", (getMock(model) as any).form);

      return {
        limit: 0,
        model,
        views,
      };
    },
    getView: async (options: GetViewRequest) => {
      const { model, type } = options;
      await new Promise((resolve) => setTimeout(resolve, timeout));
      const data = getMock(model);
      return data[type];
    },
    searchAllIds: async (options: SearchCountRequest) => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      return [6];
    },
    search: async (options: SearchRequest) => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      const data = getMock(options.model);
      return {
        totalItems: 1,
        results: [data.exampleValues],
      };
    },
    update: async (options: UpdateObjectRequest) => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
    },
    create: async (options: CreateObjectRequest) => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      return 9999;
    },
    execute: async (options: ExecuteRequest) => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      return [[1, "Alegría-Dulantzi"]];
    },
    executeWorkflow: async (options: ExecuteRequest) => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      return [[1, "Alegría-Dulantzi"]];
    },
    readObjects: async (options: ReadObjectsRequest) => {
      await new Promise((resolve) => setTimeout(resolve, timeout));
      const modelMock = getMock(options.model);
      return modelMock.exampleValues
        ? [
            {
              ...modelMock.exampleValues,
              name: options.ids[0],
              id: options.ids[0],
            },
            {
              ...modelMock.exampleValues,
              name: options.ids[1],
              id: options.ids[1],
            },
          ]
        : [];
    },
    delete: async (options: DeleteObjectsRequest) => {
      return true;
    },
    createReport: (options: CreateReportRequest) => {
      return null;
    },
    getReport: (options: GetReportRequest) => {
      return null;
    },
    executeOnChange: (options: ExecuteOnChangeRequest) => {
      return null;
    },
    defaultGet: (options: DefaultGetRequest) => {
      return {} as any;
    },
    getActionData: ({ action, context }: { action: string; context?: any }) => {
      return null;
    },
  };

  ConnectionProvider.init(handler);
};

export default { init };
