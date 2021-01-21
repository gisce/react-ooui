import React, { useState, useEffect } from "react";
import { Table, Pagination, Checkbox, Spin } from "antd";
import {
  TreeView,
  Column,
  getTree,
  getTableColumns,
  getTableItems,
} from "../helpers/TreeHelper";

type Props = {
  total: number;
  limit: number;
  page: number;
  loading: boolean;
  treeView: TreeView;
  results: Array<any>;
  onRequestPageChange: (page: number, pageSize?: number) => void;
};

function Tree(props: Props): React.ReactElement {
  const {
    page,
    limit,
    total,
    treeView,
    results,
    onRequestPageChange,
    loading,
  } = props;

  const [items, setItems] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<Column>>([]);

  useEffect(() => {
    const tree = getTree(treeView);
    const booleanComponentFn = (booleanField: boolean): React.ReactElement => {
      return <Checkbox defaultChecked={booleanField} disabled />;
    };
    const columns = getTableColumns(tree, booleanComponentFn);
    const items = getTableItems(tree, results);

    setColumns(columns);
    setItems(items);
  }, [treeView, results]);

  const from = (page - 1) * limit + 1;
  const summary = loading ? (
    <Spin />
  ) : (
    `Showing registers from ${from} to ${
      from - 1 + items.length
    } of ${total} registers`
  );

  return (
    <>
      {summary}
      <Pagination
        total={total}
        defaultPageSize={limit}
        className="pb-5 pt-5"
        showSizeChanger={false}
        onChange={onRequestPageChange}
      />
      <Table
        columns={columns}
        dataSource={items}
        pagination={false}
        loading={loading}
      />
    </>
  );
}

export default Tree;
