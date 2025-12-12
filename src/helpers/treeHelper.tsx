import {
  Tree as TreeOoui,
  Selection,
  Many2one,
  Boolean,
  Reference,
  Tags,
} from "@gisce/ooui";
import { TreeView, Column } from "@/types";
import { SortDirection, ColumnState } from "@gisce/react-formiga-table";
import ConnectionProvider from "@/ConnectionProvider";

const getTree = (treeView: TreeView): TreeOoui => {
  const xml = treeView.arch;
  const fields = treeView.fields;
  const tree = new TreeOoui(fields);
  tree.parse(xml);
  return tree;
};

function canRenderValue(value: any): boolean {
  return (
    typeof value === "number" ||
    typeof value === "string" ||
    typeof value === "boolean" ||
    value === null ||
    value === undefined ||
    (Array.isArray(value) && value.length === 0)
  );
}

const getTableColumns = (
  tree: TreeOoui,
  components: any,
  context: any,
  many2oneSortEnabled: boolean = false,
): Column[] => {
  const tableColumns = tree.columns.map((column) => {
    const type = column.type;
    const key = column.id;
    const component = components?.[type];
    let render;

    if (component) {
      render = (value: any) => {
        return component({ value, key, ooui: column, context });
      };
    } else {
      render = (value: any) => {
        return canRenderValue(value) ? (
          value
        ) : (
          <p style={{ color: "red" }}>
            Unsupported widget value for a Tree cell:
            <pre>
              <strong>
                Type: {type} - Value: {JSON.stringify(value)}
              </strong>
            </pre>
          </p>
        );
      };
    }

    return {
      key,
      dataIndex: key,
      title: column.label,
      render,
      sorter: (a: any, b: any) => {
        let aItem = a[key] || "";
        let bItem = b[key] || "";

        if (type === "many2one") {
          aItem = a[key]?.value || "";
          bItem = b[key]?.value || "";
        }

        if (aItem < bItem) return -1;
        if (aItem > bItem) return 1;
        return 0;
      },
      isSortable:
        (type !== "one2many" &&
          !column.isFunction &&
          (type !== "many2one" || many2oneSortEnabled)) ||
        column.isSortable,
    };
  });
  return tableColumns;
};

const getTableItems = async (
  treeOoui: TreeOoui,
  results: any[],
  context: any = {},
): Promise<any[]> => {
  // First pass: identify all tags and reference widgets and collect their data requirements
  const tagsRequests: Map<
    string,
    { relation: string; field: string; allIds: Set<number> }
  > = new Map();

  const referenceRequests: Map<string, Set<number>> = new Map();

  results.forEach((item: any) => {
    Object.keys(item).forEach((key) => {
      if (key !== "id") {
        const widget = treeOoui.findById(key);

        if (widget instanceof Tags && item[key]?.items?.length > 0) {
          const requestKey = `${widget.relation}_${widget.field}`;

          if (!tagsRequests.has(requestKey)) {
            tagsRequests.set(requestKey, {
              relation: widget.relation,
              field: widget.field,
              allIds: new Set(),
            });
          }

          const requestData = tagsRequests.get(requestKey)!;
          item[key].items.forEach((tagItem: any) => {
            if (tagItem.id) {
              requestData.allIds.add(tagItem.id);
            }
          });
        } else if (widget instanceof Reference && item[key]) {
          // Reference widgets have values like "model,id"
          const [model, id] = item[key].split(",");
          const intId = parseInt(id);

          if (model && !isNaN(intId)) {
            if (!referenceRequests.has(model)) {
              referenceRequests.set(model, new Set());
            }
            referenceRequests.get(model)!.add(intId);
          }
        }
      }
    });
  });

  // Second pass: fetch all tags and reference data in batch
  const tagsDataMap: Map<
    string,
    Map<number, { id: number; name: string }>
  > = new Map();

  for (const [requestKey, requestData] of tagsRequests) {
    if (requestData.allIds.size > 0) {
      try {
        const response = await ConnectionProvider.getHandler().readObjects({
          model: requestData.relation,
          ids: Array.from(requestData.allIds),
          fieldsToRetrieve: [requestData.field],
          context,
        });

        const dataMap = new Map();
        response.forEach((item: any) => {
          dataMap.set(item.id, {
            id: item.id,
            name: item[requestData.field],
          });
        });

        tagsDataMap.set(requestKey, dataMap);
      } catch (error) {
        console.error(`Error loading tags data for ${requestKey}:`, error);
        tagsDataMap.set(requestKey, new Map());
      }
    }
  }

  // Fetch reference data using name_get for each model
  const referenceDataMap: Map<string, Map<number, string>> = new Map();

  for (const [model, ids] of referenceRequests) {
    if (ids.size > 0) {
      try {
        const response = await ConnectionProvider.getHandler().execute({
          action: "name_get",
          payload: Array.from(ids),
          model,
          context,
        });

        const dataMap = new Map();
        response.forEach((item: any) => {
          if (item && item.length === 2) {
            dataMap.set(item[0], item[1]); // [id, name]
          }
        });

        referenceDataMap.set(model, dataMap);
      } catch (error) {
        console.error(`Error loading reference data for ${model}:`, error);
        referenceDataMap.set(model, new Map());
      }
    }
  }

  // Third pass: process all items with prefetched tags and reference data
  const tableItems = results.map((item: any) => {
    const parsedItem: any = {};
    Object.keys(item).forEach((key) => {
      if (key === "id") {
        parsedItem[key] = item[key];
      } else {
        const widget = treeOoui.findById(key);

        if (widget instanceof Reference) {
          // Reference widgets with prefetched data
          if (item[key]) {
            const [model, id] = item[key].split(",");
            const intId = parseInt(id);

            if (model && !isNaN(intId)) {
              const referenceData = referenceDataMap.get(model);
              const name = referenceData?.get(intId) || `Unknown (${intId})`;

              parsedItem[key] = {
                originalValue: item[key],
                model,
                id: intId,
                name,
              };
            } else {
              parsedItem[key] = item[key];
            }
          } else {
            parsedItem[key] = item[key];
          }
        } else if (widget instanceof Selection) {
          parsedItem[key] = item[key];
        } else if (widget instanceof Many2one) {
          parsedItem[key] = item[key] &&
            Array.isArray(item[key]) &&
            item[key].length === 2 && {
              model: widget.relation,
              id: item[key][0],
              value: item[key][1],
            };
        } else if (widget instanceof Boolean) {
          parsedItem[key] = item[key];
        } else if (widget instanceof Tags) {
          // Tags widgets with prefetched data
          const requestKey = `${widget.relation}_${widget.field}`;
          const tagsData = tagsDataMap.get(requestKey) || new Map();

          const enrichedItems =
            item[key]?.items?.map((tagItem: any) => ({
              ...tagItem,
              name: tagsData.get(tagItem.id)?.name || `Unknown (${tagItem.id})`,
            })) || [];

          parsedItem[key] = {
            ...item[key],
            items: enrichedItems,
          };
        } else if (widget) {
          parsedItem[key] = item[key] === false ? "" : item[key];
        } else {
          parsedItem[key] = item[key];
        }
      }
    });
    return parsedItem;
  });

  return tableItems;
};

function itemHasBooleans({ values, fields }: { values: any; fields: any }) {
  if (!fields) {
    return false;
  }
  return Object.keys(values).some((key) => {
    return fields[key] !== undefined && fields[key].type === "boolean";
  });
}

function convertBooleansToNumeric({
  values,
  fields,
}: {
  values: any;
  fields: any;
}) {
  if (!fields) {
    return values;
  }
  const filteredValues: any = {};
  Object.keys(values).forEach((key) => {
    if (fields[key] !== undefined && fields[key].type === "boolean") {
      filteredValues[key] = values[key] === true ? 1 : 0;
    }
  });
  return { ...values, ...filteredValues };
}

function getColorMap(colorsValue: any) {
  return getItemsAttributes(colorsValue, "colors");
}

function getStatusMap(values: any) {
  return getItemsAttributes(values, "status");
}

function getItemsAttributes(attributes: object[], attribute: string) {
  if (!attributes) {
    return undefined;
  }
  const map: any = {};
  attributes.forEach((entry: any) => {
    map[entry.id] = entry[attribute];
  });
  return map;
}

function sortResults({
  resultsToSort,
  sorter,
  fields,
}: {
  resultsToSort: any[];
  sorter: any;
  fields: any;
}) {
  if (!sorter) {
    return resultsToSort;
  }

  const { id: field, desc } = sorter;
  const order = desc === true ? "descend" : "ascend";

  const type = fields[field]?.type;

  const sortFn = (a: any, b: any) => {
    if (!a || !b) {
      return 0;
    }

    let aItem = a[field];
    let bItem = b[field];

    if (type === "many2one") {
      aItem = a[field]?.[1] || "";
      bItem = b[field]?.[1] || "";
    }

    if (type === "float" || type === "integer" || type === "float_time") {
      aItem = parseFloat(aItem) || 0;
      bItem = parseFloat(bItem) || 0;
    } else {
      aItem = aItem || "";
      bItem = bItem || "";
    }

    if (aItem === bItem) {
      return 0;
    }

    if (typeof aItem === "string" && typeof bItem === "string") {
      const comparison = aItem.localeCompare(bItem, undefined, {
        numeric: true,
        sensitivity: "base",
      });
      return order === "ascend" ? comparison : -comparison;
    }

    // For non-string comparison (numbers, dates, etc.)
    if (order === "ascend") {
      return aItem > bItem ? 1 : -1;
    }

    return aItem < bItem ? 1 : -1;
  };

  const sortedResults = resultsToSort.sort(sortFn);

  return sortedResults;
}

function hasActualValues(obj: Record<string, any>): boolean {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] !== undefined) {
        return true;
      }
    }
  }
  return false;
}

const getFieldNameFromColId = (colId: string): string => {
  // Match pattern: fieldName_N where N is a number (ag-grid's duplicate suffix)
  const match = colId.match(/^(.+)_(\d+)$/);
  if (match) {
    return match[1];
  }
  return colId;
};

const getSortedFieldsFromState = ({
  state,
}: {
  state?: ColumnState[];
}): Record<string, SortDirection> | undefined => {
  if (!state) {
    return undefined;
  }

  const columnsWithSort = state
    .filter((col) => col.sort)
    .sort((a, b) => (a.sortIndex || 0) - (b.sortIndex || 0));

  if (columnsWithSort.length === 0) {
    return undefined;
  }

  // Use a Map to deduplicate by field name (first occurrence wins based on sortIndex)
  const sortFieldsMap = new Map<string, SortDirection>();
  columnsWithSort.forEach((col) => {
    const fieldName = getFieldNameFromColId(col.colId);
    // Only add if not already present (first occurrence by sortIndex wins)
    if (!sortFieldsMap.has(fieldName)) {
      sortFieldsMap.set(fieldName, col.sort as SortDirection);
    }
  });

  return Object.fromEntries(sortFieldsMap);
};

const getOrderFromSortFields = (sortFields?: Record<string, SortDirection>) => {
  if (!sortFields) {
    return undefined;
  }
  if (Object.keys(sortFields).length === 0) {
    return undefined;
  }
  return Object.keys(sortFields)
    .map((field) => {
      const direction = sortFields[field];
      return `${field} ${direction}`;
    })
    .join(", ");
};

function extractTreeXmlAttribute(
  archString: string,
  attributeName: string,
): string | null {
  const regex = new RegExp(`<tree[^>]*\\s+${attributeName}="([^"]+)"`, "i");
  const match = archString.match(regex);

  if (match && match[1]) {
    return match[1];
  }

  return null;
}

function isTreeExpandable(treeView: TreeView): boolean {
  return treeView.isExpandable === true;
}

export interface TreeTypeOptions {
  treeView: TreeView;
  limit?: number;
  treeMaxLimit: number;
}

function determineTreeType(
  options: TreeTypeOptions,
): "infinite" | "paginated" | "legacy" {
  const { treeView, limit, treeMaxLimit } = options;

  // Priority 1: Expandable trees always use paginated mode
  if (isTreeExpandable(treeView)) {
    return "paginated";
  }

  // Priority 2: Zero limit means infinite scrolling
  if (limit === 0) {
    return "infinite";
  }

  // Priority 3: Large limits use infinite scrolling
  if (limit && limit > treeMaxLimit) {
    return "infinite";
  }

  // Priority 4: Check XML arch for explicit infinite attribute
  if (treeView?.arch) {
    const tagValue = extractTreeXmlAttribute(treeView.arch, "infinite");
    if (tagValue) {
      if (tagValue === "1" || tagValue === "true") {
        return "infinite";
      }
      if (tagValue === "0" || tagValue === "false") {
        return "paginated";
      }
    }
  }

  // Priority 5: Default fallback
  return "legacy";
}

const getVisibleTreeFields = (treeView: any): string[] | undefined => {
  if (!treeView?.arch || !treeView?.fields) {
    return undefined;
  }

  try {
    const tree = getTree(treeView);
    const fieldNames = tree.columns
      .filter((col: any) => col.id && !col.invisible)
      .map((col: any) => col.id);
    return fieldNames.length > 0 ? fieldNames : undefined;
  } catch (error) {
    console.error("Error extracting visible tree fields:", error);
    return undefined;
  }
};

export {
  getTableColumns,
  getTableItems,
  getTree,
  convertBooleansToNumeric,
  itemHasBooleans,
  getColorMap,
  getStatusMap,
  sortResults,
  hasActualValues,
  getOrderFromSortFields,
  extractTreeXmlAttribute,
  getSortedFieldsFromState,
  isTreeExpandable,
  determineTreeType,
  getVisibleTreeFields,
};
