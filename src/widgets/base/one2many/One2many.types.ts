import {
  One2many as One2manyOoui,
  Form as FormOoui,
  Tree as TreeOoui,
} from "@gisce/ooui";
import { Graph } from "@/widgets/views/Graph/Graph";
import { ViewType, Views } from "@/types";

type One2manyValue = {
  fields?: any;
  items: One2manyItem[];
};

type One2manyItem = {
  operation?:
    | "original"
    | "pendingRemove"
    | "pendingUpdate"
    | "pendingCreate"
    | "pendingLink";
  id?: number;
  values?: any;
  treeValues?: any;
  defaultValues?: any;
};

export interface One2manyInputProps {
  ooui: One2manyOoui;
  value?: One2manyValue;
  onChange?: (value: One2manyValue) => void;
  views: Views;
}

export const ViewObjects = {
  form: FormOoui,
  tree: TreeOoui,
  graph: Graph,
};
