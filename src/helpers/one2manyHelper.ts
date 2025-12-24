import { One2manyItem } from "@/widgets/base/one2many/One2manyInputLegacy";
import ConnectionProvider from "@/ConnectionProvider";
import { TreeView, ViewType } from "@/types";
import {
  getColorMap,
  getStatusMap,
  getTableItems,
  getTree,
} from "./treeHelper";

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
  options: ReadObjectValuesOptions,
): Promise<[One2manyItem[], any]> => {
  const {
    items,
    model,
    formView,
    treeView,
    context,
    currentView = {},
  } = options;

  const operationsToRead = ["original", "pendingLink"];

  const temporalItems: One2manyItem = items.filter(
    (item) => !operationsToRead.includes(item.operation!),
  );

  // We get a number array of id's, filtering out negative/temporal IDs
  const idsToFetch = items
    .filter((item) => operationsToRead.includes(item.operation!))
    .map((item) => item.id)
    .filter((id) => (id as number) > 0) as number[]; // Skip negative/temporal IDs

  const fieldsToRetrieve: { [key: string]: any } = {
    form: formView.fields,
    tree: treeView.fields,
  };

  let values = [];
  let evaluatedColorsForTree;

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
        Object.prototype.hasOwnProperty.call(
          fieldsToRetrieve[currentView as string],
          key,
        ) ||
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
      (itemValues: any) => itemValues.id === item.id,
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

const convertToPlain2ManyValues = (values: any, fields: any) => {
  const result: any = {};
  Object.keys(values).forEach((key) => {
    if (
      Object.prototype.hasOwnProperty.call(fields, key) &&
      (fields[key].type === "one2many" || fields[key].type === "many2many") &&
      values[key] &&
      values[key]?.items
    ) {
      result[key] = values[key].items.filter(
        (item: One2manyItem) => item.operation !== "pendingRemove",
      );
    } else {
      result[key] = values[key];
    }
  });
  return result;
};

export const convertFrom2ManyRawValues = ({
  values,
  fields,
}: {
  values: any;
  fields: any;
}) => {
  const formattedValues: any = {};

  Object.keys(values).forEach((key) => {
    if (
      Object.prototype.hasOwnProperty.call(fields, key) &&
      (fields[key].type === "one2many" || fields[key].type === "many2many") &&
      values[key] &&
      !values[key]?.items &&
      Array.isArray(values[key])
    ) {
      const itemsId = values[key];
      formattedValues[key] = {
        items: itemsId.map((itemId: number) => ({
          operation: "pendingLink",
          id: itemId,
        })),
      };
    } else {
      formattedValues[key] = values[key];
    }
  });
  return formattedValues;
};

function filterDuplicateItems(items: any) {
  const ids = items.map((o: any) => o.id);
  const filtered = items.filter((item: any, index: number) => {
    const { id } = item;
    return !ids.includes(id, index + 1);
  });
  return filtered;
}

function getValuesForFields({
  values,
  fields,
}: {
  values: any;
  fields: string[];
}) {
  const result: any = {};
  fields.forEach((field) => {
    if (values[field]) {
      result[field] = values[field];
    }
  });
  return result;
}

const getIdsToFetch = ({
  allItems,
  range,
}: {
  allItems: One2manyItem[];
  range?: {
    startRow: number;
    endRow: number;
  };
}) => {
  const idsToFetch = allItems.map((item) => item.id) as number[];

  // now slice the records with startRow and endRow if needed
  const idsToFetchSliced = range
    ? idsToFetch.slice(range.startRow, range.endRow)
    : idsToFetch;

  // in this idsToFetchSliced we have the ids of the records that theoretically we have to fetch
  // however, it's possible that these items have operation different than original,
  // and we have to skip these items to being fetched, and passed later on to the callback as they were originally
  const realItemsIds = idsToFetchSliced.filter((id) => {
    const item = allItems.find((item) => item.id === id);
    return (
      item &&
      (item.operation === "original" || item.operation === "pendingLink") &&
      id > 0 // Skip negative/temporal IDs
    );
  });

  const otherItems = allItems.filter((item: One2manyItem) => {
    return (
      item && item.operation !== "original" && item.operation !== "pendingLink"
    );
  });

  return { realItemsIds, otherItems };
};

const mergeWithOtherItems = async ({
  finalResultIds,
  fetchedItems,
  otherItems,
  treeOoui,
  context,
  selectionToLazy,
}: {
  finalResultIds: number[];
  fetchedItems: One2manyItem[];
  otherItems: One2manyItem[];
  treeOoui: any;
  context: any;
  selectionToLazy?: boolean;
}) => {
  const transformedOtherItems = await Promise.all(
    otherItems.map(async (item) => {
      if (item.treeValues) {
        const transformed = await getTableItems(
          treeOoui,
          [item.treeValues],
          context,
          selectionToLazy,
        );
        return transformed[0];
      }
      return item.treeValues;
    }),
  );

  // now we have to map the results to the original ids
  // The order is already correct from finalResultIds, so we just map without re-sorting
  const resultsMapped = finalResultIds.map((id) => {
    const result = fetchedItems.find((result) => result.id === id);
    if (result) {
      return result;
    }
    const otherItemIndex = otherItems.findIndex((item) => item.id === id);
    return otherItemIndex !== -1
      ? transformedOtherItems[otherItemIndex]
      : undefined;
  });

  return resultsMapped;
};

const fetchSortedIds = async (
  realItemsIds: number[],
  relation: string,
  context: any,
  order: string,
) => {
  return await ConnectionProvider.getHandler().searchAllIds({
    model: relation,
    params: [["id", "in", realItemsIds]],
    context,
    order,
  });
};

const buildAttributes = (treeOoui: any) => {
  const attrs: any = {};
  if (treeOoui.colors) attrs.colors = treeOoui.colors;
  if (treeOoui.status) attrs.status = treeOoui.status;
  return attrs;
};

const fetchAndPrepareData = async ({
  relation,
  ids,
  treeView,
  context,
  attrs,
  treeOoui,
  skipFunctionFields = false,
  selectionToLazy,
}: {
  relation: string;
  ids: number[];
  treeView: TreeView;
  context: any;
  attrs: any;
  treeOoui: any;
  skipFunctionFields?: boolean;
  selectionToLazy?: boolean;
}) => {
  // Filter out negative/temporal IDs to avoid server requests
  const validIds = ids.filter((id) => id > 0);
  const fieldsToRetrieve: string[] = skipFunctionFields
    ? Object.keys(treeView.fields).reduce<string[]>((acc, fieldName) => {
        const field = treeView.fields[fieldName];
        if (!field.is_function) {
          acc.push(fieldName);
        }
        return acc;
      }, [])
    : Object.keys(treeView.fields);

  if (fieldsToRetrieve.length === 0 || validIds.length === 0) {
    return {
      items: await getTableItems(
        treeOoui,
        ids.map((id) => ({ id })),
        context,
        selectionToLazy,
      ),
      colors: {},
      status: {},
    };
  }

  const fetchedData = await ConnectionProvider.getHandler().readEvalUiObjects({
    model: relation,
    ids: validIds, // Use filtered IDs
    arch: treeView.arch,
    fields: treeView.fields,
    context,
    attrs,
    fieldsToRetrieve,
  });

  // Combine fetched data with placeholder data for negative IDs
  const allData = ids.map((id) => {
    if (id > 0) {
      return fetchedData[0].find((item: any) => item.id === id) || { id };
    } else {
      // Return placeholder data for negative/temporal IDs
      return { id };
    }
  });

  return {
    items: await getTableItems(treeOoui, allData, context, selectionToLazy),
    colors: getColorMap(fetchedData[1] || {}),
    status: getStatusMap(fetchedData[1] || {}),
  };
};

export {
  readObjectValues,
  removeItems,
  linkItem,
  getNextPendingId,
  convertToPlain2ManyValues,
  filterDuplicateItems,
  getValuesForFields,
  getIdsToFetch,
  mergeWithOtherItems,
  fetchSortedIds,
  buildAttributes,
  fetchAndPrepareData,
};
