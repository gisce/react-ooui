import React, { useContext, useRef, useState } from "react";
import { Table, Pagination, Checkbox, Space } from "antd";
import {
  getTree,
  getTableColumns,
  getTableItems,
  itemHasBooleans,
  convertBooleansToNumeric,
} from "@/helpers/treeHelper";
import useDimensions from "react-cool-dimensions";
import useDeepCompareEffect from "use-deep-compare-effect";

import { TreeView, Column } from "@/types";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { Many2oneSuffix } from "../base/many2one/Many2oneSuffix";
import { Tree as TreeOoui } from "ooui";
import showErrorDialog from "@/ui/GenericErrorDialog";

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

  const { width, ref: containerRef } = useDimensions<HTMLDivElement>();
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

    const columns = getTableColumns(tree, {
      boolean: booleanComponentFn,
      many2one: many2OneComponentFn,
      text: textComponentFn,
      one2many: one2ManyComponentFn,
      many2many: one2ManyComponentFn,
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
    </div>
  );
}

export default Tree;
