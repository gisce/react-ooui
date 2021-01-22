import { Tree as TreeOoui, Selection, Many2one, Boolean } from "ooui";

type TreeView = {
  arch: string;
  fields: any;
};

type Column = {
  title: string;
  dataIndex: string;
  key: string;
  type?: string;
};

const getTree = (treeView: TreeView): TreeOoui => {
  const xml = treeView.arch;
  const fields = treeView.fields;
  const tree = new TreeOoui(fields);
  tree.parse(xml);
  return tree;
};

const getTableColumns = (
  tree: TreeOoui,
  booleanComponent: any
): Array<Column> => {
  const tableColumns = tree.columns.map((column) => {
    const type = column.constructor.name;
    const key = column.id;
    const render =
      type === "Boolean"
        ? (booleanField: boolean) => {
            return booleanComponent(booleanField);
          }
        : undefined;

    return {
      key,
      dataIndex: key,
      title: column.label,
      type,
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
          parsedItem[key] = item[key][1];
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

export { TreeView, Column, getTableColumns, getTableItems, getTree };
