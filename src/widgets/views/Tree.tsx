import React, { useEffect, useState } from "react";
import { Table, Pagination, Checkbox, Space } from "antd";
import { getTree, getTableColumns, getTableItems } from "@/helpers/treeHelper";
import useDimensions from "react-cool-dimensions";
import useDeepCompareEffect from "use-deep-compare-effect";

import { Strings, TreeView, Column } from "@/types";
import { getLocalizedString } from "@/context/LocalesContext";
import { Many2oneSuffix } from "../base/many2one/Many2oneSuffix";

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
  scrollY?: number;
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
    scrollY,
  } = props;

  const [items, setItems] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<Column>>([]);

  const { width, ref: containerRef } = useDimensions<HTMLDivElement>();

  useDeepCompareEffect(() => {
    const tree = getTree(treeView);
    const booleanComponentFn = (booleanField: boolean): React.ReactElement => {
      return <Checkbox defaultChecked={booleanField} disabled />;
    };
    const many2OneComponentFn = (m2oField: any): React.ReactElement => {
      return (
        <Space>
          <>{m2oField.value}</>
          <Many2oneSuffix id={m2oField.id} model={m2oField.model} />
        </Space>
      );
    };
    const textComponentFn = (textField: any): React.ReactElement => {
      return <div style={{ whiteSpace: "pre-line" }}>{textField}</div>;
    };

    const columns = getTableColumns(tree, {
      boolean: booleanComponentFn,
      many2one: many2OneComponentFn,
      text: textComponentFn,
    });

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
        scroll={{ x: true, y: scrollY }}
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
