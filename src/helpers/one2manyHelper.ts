import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";
import ConnectionProvider from "@/ConnectionProvider";

type ReadObjectValuesOptions = {
  items: One2manyItem[];
  model: string;
  fields: any;
  arch: string;
};

const readObjectValues = async (
  options: ReadObjectValuesOptions
): Promise<One2manyItem[]> => {
  const { items, model, fields, arch } = options;

  // We get a number array of id's
  const idsToFetch = items.map((item) => item.id) as number[];

  const values = await ConnectionProvider.getHandler().readObjects({
    arch,
    model,
    ids: idsToFetch,
    fields,
  });

  // We fill the values property of the One2manyItem with the retrieved values from the API
  return items.map((item) => {
    const fetchedItemValues = values.find(
      (itemValues: any) => itemValues.id === item.id
    );
    return { ...item, values: fetchedItemValues };
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
