import React, { useContext, useEffect, useRef, useState } from "react";
import { Table, Pagination, Checkbox, Space, Row, Col, Spin } from "antd";
import { getTree, getTableColumns, getTableItems } from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";

import { TreeView, Column } from "@/types";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { Many2oneSuffix } from "../base/many2one/Many2oneSuffix";
import { calculateColumnsWidth } from "@/helpers/dynamicColumnsHelper";
import { parseFloatToString } from "@/helpers/timeHelper";
import { ProgressBarInput } from "../base/ProgressBar";
import styled from "styled-components";

interface TableProps {
  minHeight: number;
}

const StyledTable = styled(Table)`
  .ant-table-body {
    min-height: ${(props: TableProps) => props.minHeight}px;
  }
`;

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
  colorsForResults?: { [key: number]: string };
  onChangeSort?: (results: any) => void;
  disableScroll?: boolean;
};

const booleanComponentFn = (value: boolean): React.ReactElement => {
  return <Checkbox defaultChecked={value} disabled />;
};

const many2OneComponentFn = (m2oField: any): React.ReactElement => {
  if (!m2oField) {
    return <></>;
  }
  return (
    <Space>
      <>{m2oField.value}</>
      <Many2oneSuffix id={m2oField.id} model={m2oField.model} />
    </Space>
  );
};
const textComponentFn = (value: any): React.ReactElement => {
  return <div style={{ whiteSpace: "pre-line" }}>{value}</div>;
};

const one2ManyComponentFn = (value: any): React.ReactElement => {
  const length = Array.isArray(value) ? value.length : 0;
  return <>{`( ${length} )`}</>;
};

const progressBarComponentFn = (value: any): React.ReactElement => {
  return <ProgressBarInput value={value} />;
};

const floatTimeComponent = (value: number): React.ReactElement => {
  return <>{parseFloatToString(value)}</>;
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
    colorsForResults = {},
    onChangeSort,
    disableScroll = false,
  } = props;

  const [items, setItems] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<Column>>([]);

  const errorInParseColors = useRef<boolean>(false);

  const treeOoui = useRef<any>(null);

  const { t } = useContext(LocaleContext) as LocaleContextType;

  useEffect(() => {
    treeOoui.current = getTree(treeView);

    const columns = getTableColumns(treeOoui.current, {
      boolean: booleanComponentFn,
      many2one: many2OneComponentFn,
      text: textComponentFn,
      one2many: one2ManyComponentFn,
      many2many: one2ManyComponentFn,
      progressbar: progressBarComponentFn,
      float_time: floatTimeComponent,
    });
    setColumns(columns);
  }, [treeView]);

  useEffect(() => {
    errorInParseColors.current = false;
    const items = getTableItems(treeOoui.current, results);
    setItems(items);
  }, [results]);

  const from = (page - 1) * limit + 1;
  const to = from - 1 + items.length;
  const summary = loading
    ? null
    : total === 0
    ? t("no_results")
    : t("summary")
        .replace("{from}", from?.toString())
        .replace("{to}", to?.toString())
        .replace("{total}", total?.toString());

  const pagination = () => {
    if (!showPagination) {
      return null;
    }

    return loading ? null : (
      <>
        <Row align="bottom" className="pb-4">
          <Col span={12}>
            <Pagination
              total={total}
              pageSize={limit}
              current={page}
              showSizeChanger={false}
              onChange={onRequestPageChange}
            />
          </Col>
          <Col span={12} className="text-right">
            {summary}
          </Col>
        </Row>
      </>
    );
  };

  function getSums() {
    const tree = treeOoui.current as TreeOoui;

    const sumFields = tree.columns
      .filter((it) => it.sum !== undefined)
      .map((it) => {
        return { label: it.sum, field: it.id };
      });

    if (!sumFields || sumFields.length === 0) {
      return null;
    }

    let summary: string[] = [];
    let sumItems =
      rowSelection?.selectedRowKeys?.length > 0
        ? items.filter((result: any) => {
            return rowSelection?.selectedRowKeys.includes(result.id);
          })
        : items;

    sumFields.forEach((sumField) => {
      const total = sumItems.reduce((prev, current) => {
        if (current[sumField.field] && !isNaN(current[sumField.field]))
          return prev + current[sumField.field];
        else return prev;
      }, 0);

      summary.push(`${sumField.label}: ${Math.round(total * 100) / 100}`);
    });

    return (
      <div className="mt-2 p-1 pb-0 pl-2 bg-gray-50">{summary.join(", ")}</div>
    );
  }

  let dataTable;
  let adjustedHeight = scrollY;

  // This helper function helps to calculate the width for each column
  // based on all table cells - column cell and source cell
  if (treeOoui.current !== null) {
    const maxWidthPerCell = 600;
    dataTable = calculateColumnsWidth(columns, items, maxWidthPerCell);
    const tree = treeOoui.current as TreeOoui;

    if (scrollY && tree.columns.some((it) => it.sum !== undefined)) {
      adjustedHeight = scrollY - 30;
    }
  }

  return treeOoui.current === null ? (
    <Spin />
  ) : (
    <div>
      {pagination()}
      {/* {results.map((result) => {
        return (
          <div key={result.id}>
            <br />
            <span>{result.name}</span>
          </div>
        );
      })} */}
      <StyledTable
        minHeight={adjustedHeight!}
        columns={dataTable.columns}
        scroll={
          disableScroll
            ? undefined
            : { x: dataTable.tableWidth, y: adjustedHeight }
        }
        size="small"
        dataSource={items}
        pagination={false}
        loading={loading}
        rowClassName={(record: any) => {
          return `cursor-pointer select-none record-row-${record.id}`;
        }}
        rowKey={(item: any) => {
          return item.id;
        }}
        onRow={(record: any) => {
          let style = undefined;

          if (colorsForResults![record.id]) {
            style = { color: colorsForResults![record.id] };
          }

          return {
            style,
            onDoubleClick: () => {
              if (onRowClicked) onRowClicked(record.id);
            },
          };
        }}
        rowSelection={rowSelection}
        onChange={(pagination, filters, sorter, extraInfo) => {
          if (!(sorter as any).order) {
            onChangeSort?.(undefined);
          } else {
            onChangeSort?.(sorter);
          }
        }}
      />
      {getSums()}
    </div>
  );
}

export default Tree;
