import React from "react";

import { Form } from "../..";
import "antd/dist/antd.css";
import "@/tailwind.generated.css";
import ConnectionProvider from "../../ConnectionProvider";
import { data } from "./PartnersForm.data";
import {
  ConnectionProviderType,
  SearchRequest,
  UpdateObjectRequest,
  CreateObjectRequest,
  ExecuteRequest,
  ReadObjectRequest,
} from "../../types/index";
import { Form as AntForm } from "antd";

export default {
  title: "Components/Widgets/Forms/Partners",
};

export const Default = (): React.ReactElement => {
  const [antForm] = AntForm.useForm();

  const handler: ConnectionProviderType = {
    getViewsForAction: async (action: string) => {
      return { limit: 0, model: "", views: null };
    },
    getView: async (model: string, type: "tree" | "form") => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (type === "tree") {
        return { arch: data.arch, fields: data.fields };
      } else {
        return { arch: data.arch, fields: data.fields };
      }
    },
    search: async (options: SearchRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return {
        totalItems: 1,
        results: [data.initialValues],
      };
    },
    update: async (options: UpdateObjectRequest) => {},
    create: async (options: CreateObjectRequest) => {},
    execute: async (options: ExecuteRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return [[1, "Alegría-Dulantzi"]];
    },
    readObject: async (options: ReadObjectRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return {
        cups: "TEST",
      };
    },
  };

  ConnectionProvider.init(handler);

  return (
    <Form
      initialValues={data.initialValues}
      arch={data.arch}
      fields={data.fields}
      antForm={antForm}
    />
  );
};
