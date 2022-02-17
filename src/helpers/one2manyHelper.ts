import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";
import ConnectionProvider from "@/ConnectionProvider";

type ReadObjectValuesOptions = {
  items: One2manyItem[];
  model: string;
  treeFields: any;
  formFields: any;
  context?: any;
};

const readObjectValues = async (
  options: ReadObjectValuesOptions
): Promise<One2manyItem[]> => {
  const { items, model, formFields, treeFields, context = {}} = options;

  // We get a number array of id's
  const idsToFetch = items.map((item) => item.id) as number[];

  const values = await ConnectionProvider.getHandler().readObjects({
    model,
    ids: idsToFetch,
    fields: { ...formFields, ...treeFields },
    context,
  });

  const formValues = values.map((result: any) => {
    const resultFormValues: any = {};
    Object.keys(result).forEach((key) => {
      if (formFields.hasOwnProperty(key) || key === "id") {
        resultFormValues[key] = result[key];
      }
    });
    return resultFormValues;
  });

  const treeValues = values.map((result: any) => {
    const resultTreeValues: any = {};
    Object.keys(result).forEach((key) => {
      if (treeFields.hasOwnProperty(key) || key === "id") {
        resultTreeValues[key] = result[key];
      }
    });
    return resultTreeValues;
  });

  // We fill the values property of the One2manyItem with the retrieved values from the API
  return items.map((item) => {
    const fetchedFormItemValues = formValues.find(
      (itemValues: any) => itemValues.id === item.id
    );
    const fetchedTreeItemValues = treeValues.find(
      (itemValues: any) => itemValues.id === item.id
    );

    return {
      ...item,
      values: fetchedFormItemValues,
      treeValues: fetchedTreeItemValues,
    };
  });
};

type RemoveItemOptions = {
  model: string;
  activeId: number;
  fieldName: string;
  idsToRemove: number[];
  fields: any;
  isMany2many: boolean;
};

const removeItems = async (options: RemoveItemOptions) => {
  const {
    model,
    activeId,
    fieldName,
    idsToRemove,
    fields,
    isMany2many,
  } = options;

  const values: any = {};
  values[fieldName] = [];

  for (const idToRemove of idsToRemove) {
    values[fieldName].push([isMany2many ? 3 : 2, idToRemove]);
  }

  await ConnectionProvider.getHandler().update({
    model,
    id: activeId,
    values,
    fields,
  });
};

type LinkItemOptions = {
  model: string;
  activeId: number;
  fieldName: string;
  id: number;
  fields: any;
};

const linkItem = async (options: LinkItemOptions) => {
  const { model, activeId, fieldName, id, fields } = options;

  const values: any = {};
  values[fieldName] = [[4, id]];

  await ConnectionProvider.getHandler().update({
    model,
    id: activeId,
    values,
    fields,
  });
};

export { readObjectValues, removeItems, linkItem };
