import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";
import ConnectionProvider from "@/ConnectionProvider";

type ReadObjectValuesOptions = {
  items: One2manyItem[];
  model: string;
  treeFields: any;
  treeArch: string;
  formFields: any;
  formArch: string;
};

const readObjectValues = async (
  options: ReadObjectValuesOptions
): Promise<One2manyItem[]> => {
  const { items, model, formFields, formArch, treeFields, treeArch } = options;

  // We get a number array of id's
  const idsToFetch = items.map((item) => item.id) as number[];

  const formValues = await ConnectionProvider.getHandler().readObjects({
    arch: formArch,
    model,
    ids: idsToFetch,
    fields: formFields,
  });

  const treeValues = await ConnectionProvider.getHandler().readObjects({
    arch: treeArch,
    model,
    ids: idsToFetch,
    fields: treeFields,
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
  parentId: number;
  fieldName: string;
  idsToRemove: number[];
  fields: any;
  isMany2many: boolean;
};

const removeItems = async (options: RemoveItemOptions) => {
  const {
    model,
    parentId,
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
    id: parentId,
    values,
    fields,
  });
};

type LinkItemOptions = {
  model: string;
  parentId: number;
  fieldName: string;
  id: number;
  fields: any;
};

const linkItem = async (options: LinkItemOptions) => {
  const { model, parentId, fieldName, id, fields } = options;

  const values: any = {};
  values[fieldName] = [[4, id]];

  await ConnectionProvider.getHandler().update({
    model,
    id: parentId,
    values,
    fields,
  });
};

export { readObjectValues, removeItems, linkItem };
