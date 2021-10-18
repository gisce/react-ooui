import React, { useContext, useRef, useState } from "react";
import { Table, Pagination, Checkbox, Space, Progress, Row, Col } from "antd";
import { getTree, getTableColumns, getTableItems } from "@/helpers/treeHelper";
import useDeepCompareEffect from "use-deep-compare-effect";

import { TreeView, Column } from "@/types";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { Many2oneSuffix } from "../base/many2one/Many2oneSuffix";
import { calculateColumnsWidth } from "@/helpers/dynamicColumnsHelper";

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
  } = props;

  const [items, setItems] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<Column>>([]);

  const errorInParseColors = useRef<boolean>(false);

  const { t } = useContext(LocaleContext) as LocaleContextType;

  useDeepCompareEffect(() => {
    const tree = getTree(treeView);
    errorInParseColors.current = false;

    const booleanComponentFn = (value: boolean): React.ReactElement => {
      return <Checkbox defaultChecked={value} disabled />;
    };
    const many2OneComponentFn = (m2oField: any): React.ReactElement => {
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
      return <Progress percent={value} />;
    };

    const columns = getTableColumns(tree, {
      boolean: booleanComponentFn,
      many2one: many2OneComponentFn,
      text: textComponentFn,
      one2many: one2ManyComponentFn,
      many2many: one2ManyComponentFn,
      progressbar: progressBarComponentFn,
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
    const tree = getTree(treeView);

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
      <div className="mt-2 p-1 pl-2 mb-5 bg-gray-50">{summary.join(", ")}</div>
    );
  }

  const maxWidthPerCell = 600;

  // This helper function helps to calculate the width for each column
  // based on all table cells - column cell and source cell
  const dataTable = calculateColumnsWidth(columns, items, maxWidthPerCell);

  return (
    <div>
      {pagination()}
      <Table
        columns={dataTable.columns}
        scroll={{ x: dataTable.tableWidth, y: scrollY }}
        size="small"
        dataSource={items}
        pagination={false}
        loading={loading}
        rowClassName="cursor-pointer select-none"
        rowKey={(item) => {
          return item.id;
        }}
        onRow={(record) => {
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
      />
      {getSums()}
    </div>
  );
}

export default Tree;
