import {
  Tree as TreeOoui,
  Selection,
  Many2one,
  Boolean,
  Reference,
} from "@gisce/ooui";
import { TreeView, Column } from "@/types";
import { SortDirection } from "@gisce/react-formiga-table";

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
        type !== "one2many" && type !== "many2one" && column.isFunction,
    };
  });
  return tableColumns;
};

const getTableItems = (treeOoui: TreeOoui, results: any[]): any[] => {
  const tableItems = results.map((item: any) => {
    const parsedItem: any = {};
    Object.keys(item).forEach((key) => {
      if (key === "id") {
        parsedItem[key] = item[key];
      } else {
        const widget = treeOoui.findById(key);

        if (widget instanceof Reference) {
          parsedItem[key] = item[key];
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
  const order = desc === false ? "ascend" : "descend";

  const type = fields[field].type;

  const sortFn = (a: any, b: any) => {
    let aItem = a[field] || "";
    let bItem = b[field] || "";

    if (type === "many2one") {
      aItem = a[field]?.[1] || "";
      bItem = b[field]?.[1] || "";
    }

    if (aItem === bItem) {
      return 0;
    }

    if (order === "ascend") {
      return aItem > bItem ? 1 : -1;
    }

    return aItem < bItem ? 1 : -1;
  };

  return resultsToSort.sort(sortFn);
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

const getOrderFromSortFields = (sortFields?: Record<string, SortDirection>) => {
  if (!sortFields) {
    return undefined;
  }
  return Object.keys(sortFields)
    .map((field) => {
      const direction = sortFields[field];
      return `${field} ${direction}`;
    })
    .join(", ");
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
};
