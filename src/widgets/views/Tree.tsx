import React, { useState, useEffect } from "react";
import { Table, Pagination, Checkbox } from "antd";
import { getTree, getTableColumns, getTableItems } from "@/helpers/treeHelper";
import useDimensions from "react-cool-dimensions";

import { Strings, TreeView, Column } from "@/types";
import { getLocalizedString } from "@/context/LocalesContext";

type Props = {
  total: number;
  limit: number;
  page?: number;
  loading: boolean;
  treeView: TreeView;
  results: Array<any>;
  showPagination?: boolean;
  onRequestPageChange?: (page: number, pageSize?: number) => void;
  onRowClicked?: (id: number) => void;
  rowSelection?: any;
};

const strings: Strings = {
  no_results: "No results",
  summary: "Showing registers from {from} to {to} of {total} registers",
};

function Tree(props: Props): React.ReactElement {
  const {
    page = 1,
    limit,
    total,
    treeView,
    results,
    onRequestPageChange,
    loading,
    onRowClicked,
    showPagination = true,
    rowSelection,
  } = props;

  const [items, setItems] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<Column>>([]);

  const { width, ref: containerRef } = useDimensions<HTMLDivElement>();

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
  const to = from - 1 + items.length;
  const summary = loading
    ? null
    : total === 0
    ? getLocalizedString("no_results", strings)
    : getLocalizedString("summary", strings)
        .replace("{from}", from?.toString())
        .replace("{to}", to?.toString())
        .replace("{total}", total?.toString());

  const pagination = () => {
    if (!showPagination) {
      return null;
    }

    return loading ? null : (
      <>
        {summary}
        <Pagination
          total={total}
          pageSize={limit}
          current={page}
          className="pb-5 pt-5"
          showSizeChanger={false}
          onChange={onRequestPageChange}
        />
      </>
    );
  };

  return (
    <div ref={containerRef}>
      {pagination()}
      <Table
        style={{ width }}
        scroll={{ x: true }}
        columns={columns}
        dataSource={items}
        pagination={false}
        loading={loading}
        rowClassName="cursor-pointer select-none"
        rowKey={(item) => {
          return item.id;
        }}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              if (onRowClicked) onRowClicked(record.id);
            },
          };
        }}
        rowSelection={rowSelection}
      />
    </div>
  );
}

export default Tree;
