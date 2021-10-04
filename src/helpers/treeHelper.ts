import { Tree as TreeOoui, Selection, Many2one, Boolean } from "ooui";
import { TreeView, Column } from "@/types";

const getTree = (treeView: TreeView): TreeOoui => {
  const xml = treeView.arch;
  const fields = treeView.fields;
  const tree = new TreeOoui(fields);
  tree.parse(xml);
  return tree;
};

const getTableColumns = (tree: TreeOoui, components: any): Array<Column> => {
  const tableColumns = tree.columns.map((column) => {
    const type = column.type;
    const key = column.id;
    const component = components?.[type];
    let render;

    if (component) {
      render = (item: any) => {
        return component(item);
      };
    }

    return {
      key,
      dataIndex: key,
      title: column.label,
      render,
      sorter: (a: any, b: any) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      },
    };
  });
  return tableColumns;
};

const getTableItems = (treeOoui: TreeOoui, results: Array<any>): Array<any> => {
  const tableItems = results.map((item: any) => {
    const parsedItem: any = {};
    Object.keys(item).map((key) => {
      if (key === "id") {
        parsedItem[key] = item[key];
      } else {
        const widget = treeOoui.findById(key);

        if (widget instanceof Selection) {
          const selection = widget;
          parsedItem[key] = selection.selectionValues.get(item[key]);
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
  const map: any = {};
  colorsValue.forEach((colorEntry: any) => {
    map[colorEntry.id] = colorEntry.colors;
  });
  return map;
}

export {
  getTableColumns,
  getTableItems,
  getTree,
  convertBooleansToNumeric,
  itemHasBooleans,
  getColorMap,
};
