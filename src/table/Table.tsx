import React from "react";

export type TableColumn = {
  key: string;
  dataIndex: string;
  title: string;
  render: (item: any) => React.ReactNode;
  sorter: (a: any, b: any) => number;
};

export type RowSettings = {
  style: any;
  onDoubleClick: () => void;
};

export type TableProps = {
  dataSource: any[];
  columns: TableColumn[];
  rowKey: (item: any) => string;
  onRow: (item: any) => RowSettings;
  rowSelection: {
    selectedRowKeys: string[] | number[];
  };
  onChange: (a: any, b: any, sorter: any, d: any) => void;

  // Display settings
  loading: boolean;
  minHeight: number;
  scroll?:
    | {
        x?: string | number | true | undefined;
        y?: string | number | undefined;
      }
    | undefined;

  // Unused props - only to mantain interface structure with previous component
  size: any;
  pagination: any;
  rowClassName: any;
};

export const Table = (props: TableProps) => {
  const { dataSource } = props;

  return (
    <>
      {dataSource.map((result) => {
        return (
          <div key={result.id}>
            <br />
            <span>{result.name}</span>
          </div>
        );
      })}
    </>
  );
};
