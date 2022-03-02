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
  SearchAllIdsRequest,
  NameSearchRequest,
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
    searchForTree: async (options: SearchRequest) => {
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
    readEvalUiObjects: async (options: ReadObjectsRequest) => {
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
    getActionData: async ({
      action,
      context,
    }: {
      action: string;
      context?: any;
    }) => {
      return {
        auto_refresh: 0,
        context: "{}",
        domain: false,
        groups_id: [],
        id: 1497,
        limit: 80,
        name: "Llistat d'Usuaris de l'Oficina Virtual",
        res_model: "ov.users",
        src_model: false,
        target: "current",
        type: "ir.actions.act_window",
        usage: false,
        view_id: [1639, "giscedata_ov.tree"],
        view_ids: [],
        view_mode: "tree,form",
        view_type: "form",
        views: [
          [1639, "tree"],
          [1640, "form"],
        ],
      };
    },
    nameSearch: async (options: NameSearchRequest) => {
      return [];
    },
    searchCount: async (options: SearchCountRequest) => {
      return Math.floor(Math.random() * 1100);
    },
  };

  ConnectionProvider.init(handler);
};

export default { init };
