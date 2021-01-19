import React from "react";
import { Table, Pagination, Checkbox, Spin } from "antd";

type Column = {
  title: string;
  dataIndex: string;
  key: string;
  type?: string;
};

type Props = {
  total: number;
  limit: number;
  page: number;
  items: Array<any>;
  loading: boolean;
  columns: Array<Column>;
  onRequestPageChange: (page: number, pageSize?: number) => void;
};

function Tree(props: Props): React.ReactElement {
  const {
    limit,
    items,
    columns,
    total,
    onRequestPageChange,
    page,
    loading,
  } = props;

  const columnsForTable = columns.map((column: Column) => {
    const { title, dataIndex, key, type } = column;
    const render =
      type === "Boolean"
        ? (booleanField: boolean) => {
            return <Checkbox defaultChecked={booleanField} disabled />;
          }
        : undefined;

    return {
      title,
      dataIndex,
      key,
      render,
      sorter: (a: any, b: any) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      },
    };
  });

  const from = (page - 1) * limit;
  const summary = loading ? (
    <Spin />
  ) : (
    `Showing registers from ${from} to ${
      from + items.length
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
        columns={columnsForTable}
        dataSource={items}
        pagination={false}
        loading={loading}
      />
    </>
  );
}

export default Tree;
