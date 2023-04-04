import React, { useContext, useEffect, useRef, useState } from "react";
import { Pagination, Checkbox, Space, Row, Col, Spin, Tag } from "antd";
import { getTree, getTableColumns, getTableItems } from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";

import { TreeView, Column } from "@/types";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { calculateColumnsWidth } from "@/helpers/dynamicColumnsHelper";
import { parseFloatToString } from "@/helpers/timeHelper";
import { ProgressBarInput } from "../base/ProgressBar";
import { Table as GisceTable } from "@gisce/react-formiga-table";
import {
  PlusSquareOutlined,
  MinusSquareOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { One2manyValue } from "../base/one2many/One2manyInput";
import { Interweave } from "interweave";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { Many2oneTree } from "../base/many2one/Many2oneTree";
import { ReferenceTree } from "../base/ReferenceTree";

type Props = {
  total?: number;
  limit: number;
  page?: number;
  loading: boolean;
  treeView: TreeView;
  results: Array<any>;
  showPagination?: boolean;
  onRequestPageChange?: (page: number, pageSize?: number) => void;
  onRowClicked?: (record: any) => void;
  rowSelection?: any;
  scrollY?: number;
  colorsForResults?: { [key: number]: string };
  onChangeSort?: (results: any) => void;
  sorter?: any;
  onFetchChildrenForRecord?: (item: any) => Promise<any[]>;
  childField?: string;
  rootTree?: boolean;
  context?: any;
};

const booleanComponentFn = (value: boolean): React.ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Checkbox checked={value} disabled />
    </div>
  );
};

const many2OneComponentFn = (m2oField: any): React.ReactElement => {
  return <Many2oneTree m2oField={m2oField} />;
};

const textComponentFn = (value: any): React.ReactElement => {
  return <Interweave content={value?.replace(/(?:\r\n|\r|\n)/g, "<br>")} />;
};

const one2ManyComponentFn = (value: One2manyValue): React.ReactElement => {
  const length = Array.isArray(value?.items) ? value?.items.length : 0;
  return <>{`( ${length} )`}</>;
};

const progressBarComponentFn = (value: any): React.ReactElement => {
  return <ProgressBarInput value={value} />;
};

const floatTimeComponent = (value: number): React.ReactElement => {
  return <>{parseFloatToString(value)}</>;
};

const numberComponent = (value: number): React.ReactElement => {
  return <div style={{ textAlign: "right" }}>{value}</div>;
};

const imageComponent = (value: string): React.ReactElement => {
  return (
    <img
      src={`data:image/*;base64,${value}`}
      style={{ maxWidth: "50px", padding: "5px" }}
    />
  );
};

const TagComponent = (
value: any,
  key: string,
  ooui: any,
  context: any
): React.ReactElement => {
  return (
    <>
      {value ? <Tag color={ooui.colors[value]}>{ooui.selectionValues.get(value)}</Tag> : null}
    </>
  );
};

const SelectionComponent = (
value: any,
  key: string,
  ooui: any,
  context: any
): React.ReactElement => {
  console.log(value);
  console.log(ooui);
  return (
    <>{ooui.selectionValues.get(value)}</>
  );
};

const referenceComponent = (
  value: any,
  key: string,
  ooui: any,
  context: any
): React.ReactElement => {
  return (
    <>
      <ReferenceTree
        value={value}
        selectionValues={ooui.selectionValues}
        context={context}
      />
    </>
  );
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
    sorter,
    onFetchChildrenForRecord,
    childField,
    rootTree = false,
    context,
  } = props;

  const [items, setItems] = useState<Array<any>>([]);
  const [columns, setColumns] = useState<Array<Column>>([]);

  const errorInParseColors = useRef<boolean>(false);

  const treeOoui = useRef<any>(null);

  const { t } = useContext(LocaleContext) as LocaleContextType;
  const internalLimit = useRef(limit);

  const actionViewContext = useContext(
    ActionViewContext
  ) as ActionViewContextType;
  const { title = undefined, setTitle = undefined } =
    (rootTree ? actionViewContext : {}) || {};

  useEffect(() => {
    treeOoui.current = getTree(treeView);

    const columns = getTableColumns(
      treeOoui.current,
      {
        boolean: booleanComponentFn,
        many2one: many2OneComponentFn,
        text: textComponentFn,
        one2many: one2ManyComponentFn,
        many2many: one2ManyComponentFn,
        progressbar: progressBarComponentFn,
        float_time: floatTimeComponent,
        image: imageComponent,
        integer: numberComponent,
        float: numberComponent,
        reference: referenceComponent,
        tag: TagComponent,
        selection: SelectionComponent,
      },
      context
    );

    setColumns(columns);

    if (treeOoui.current.string && title !== treeOoui.current.string) {
      setTitle?.(treeOoui.current.string);
    }
  }, [treeView]);

  useEffect(() => {
    errorInParseColors.current = false;
    const items = getTableItems(treeOoui.current, results);
    setItems(items);
    internalLimit.current = limit;
  }, [results]);

  const from = (page - 1) * internalLimit.current + 1;
  const to = from - 1 + items.length;
  const summary =
    total === undefined
      ? null
      : total === 0
      ? t("no_results")
      : t("summary")
          .replace("{from}", from?.toString())
          .replace("{to}", to?.toString())
          .replace("{total}", total?.toString());

  const pagination = () => {
    if (!showPagination || treeView.isExpandable) {
      return null;
    }

    return loading ? null : total === undefined ? (
      <Spin />
    ) : (
      <Row align="bottom" className="pb-4">
        <Col span={12}>
          <Pagination
            total={total}
            pageSize={
              internalLimit.current === 0 ? total : internalLimit.current
            }
            current={page}
            showSizeChanger={false}
            onChange={onRequestPageChange}
          />
        </Col>
        <Col span={12} className="text-right">
          {summary}
        </Col>
      </Row>
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
      <div className="p-1 pb-0 pl-2 mt-2 bg-gray-50">{summary.join(", ")}</div>
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
    <Spin style={{ padding: "2rem" }} />
  ) : (
    <div>
      {pagination()}
      <GisceTable
        height={adjustedHeight!}
        columns={dataTable.columns}
        dataSource={items}
        loading={loading}
        loadingComponent={<Spin />}
        onRowStyle={(record: any) => {
          if (colorsForResults![record.id]) {
            return { color: colorsForResults![record.id] };
          }
          return undefined;
        }}
        onRowDoubleClick={onRowClicked}
        onRowSelectionChange={rowSelection?.onChange}
        onChangeSort={onChangeSort}
        sorter={sorter}
        expandableOpts={
          onFetchChildrenForRecord
            ? {
                expandIcon: PlusSquareOutlined,
                collapseIcon: MinusSquareOutlined,
                loadingIcon: LoadingOutlined,
                onFetchChildrenForRecord,
                childField: childField!,
              }
            : undefined
        }
      />
      {getSums()}
    </div>
  );
}

export default Tree;
