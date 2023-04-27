import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";
import ConnectionProvider from "@/ConnectionProvider";
import { TreeView, View, ViewType } from "@/types";
import { getColorMap, getTree } from "./treeHelper";

type ReadObjectValuesOptions = {
  items: One2manyItem[];
  model: string;
  context?: any;
  currentView: ViewType;
  formView: {
    fields: any;
  };
  treeView: {
    arch?: string;
    fields: any;
  };
};

const readObjectValues = async (
  options: ReadObjectValuesOptions
): Promise<[One2manyItem[], any]> => {
  const {
    items,
    model,
    formView,
    treeView,
    context,
    currentView = {},
  } = options;

  const temporalItems: One2manyItem = items.filter(
    (item) => item.operation !== "original"
  );

  // We get a number array of id's
  const idsToFetch = items
    .filter((item) => item.operation === "original")
    .map((item) => item.id) as number[];

  const fieldsToRetrieve: { [key: string]: any } = {
    form: formView.fields,
    tree: treeView.fields,
  };

  let values = [],
    evaluatedColorsForTree;

  if (currentView === "tree" && treeView?.arch) {
    const colors = getTree(treeView as TreeView)?.colors;
    const results = await ConnectionProvider.getHandler().readEvalUiObjects({
      model,
      ids: idsToFetch,
      arch: treeView?.arch!,
      fields: treeView!.fields,
      context,
      attrs: colors && {
        colors,
      },
    });
    values = results[0];
    evaluatedColorsForTree = getColorMap(results[1]);
  } else {
    values = await ConnectionProvider.getHandler().readObjects({
      model,
      ids: idsToFetch,
      fields: fieldsToRetrieve[currentView as string],
      context,
    });
  }

  const filteredValues = values.map((result: any) => {
    const resultFormValues: any = {};
    Object.keys(result).forEach((key) => {
      if (
        fieldsToRetrieve[currentView as string].hasOwnProperty(key) ||
        key === "id"
      ) {
        resultFormValues[key] = result[key];
      }
    });
    return resultFormValues;
  });

  // We fill the values property of the One2manyItem with the retrieved values from the API
  const originalItemsWithFetchedValues: One2manyItem[] = items.map((item) => {
    const fetchedItemValues = filteredValues.find(
      (itemValues: any) => itemValues.id === item.id
    );

    const itemWithFetchedValues = {
      ...item,
    };

    if (currentView === "form") {
      itemWithFetchedValues["values"] = fetchedItemValues;
    } else if (currentView === "tree") {
      itemWithFetchedValues["treeValues"] = fetchedItemValues;
    }
    return itemWithFetchedValues;
  });

  return [
    originalItemsWithFetchedValues.concat(temporalItems),
    evaluatedColorsForTree,
  ];
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
  const { model, activeId, fieldName, idsToRemove, fields, isMany2many } =
    options;

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

const getNextPendingId = (items: One2manyItem[]) => {
  const negativeIds: number[] = items
    .filter((item) => item.id && item.id < 0)
    .map((item) => item.id!);
  if (negativeIds.length === 0) {
    return -1;
  } else {
    return Math.min(...negativeIds) - 1;
  }
};

export { readObjectValues, removeItems, linkItem, getNextPendingId };
