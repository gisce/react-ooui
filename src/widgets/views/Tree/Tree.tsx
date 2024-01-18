import {
  forwardRef,
  memo,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Pagination as AntPagination, Row, Col, Spin, Badge } from "antd";
import {
  getTree,
  getTableColumns,
  getTableItems,
  hasActualValues,
} from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";
import { TreeView } from "@/types";
import { useLocale } from "@gisce/react-formiga-components";
import { calculateColumnsWidth } from "@/helpers/dynamicColumnsHelper";
import { Table as GisceTable, TableRef } from "@gisce/react-formiga-table";
import {
  PlusSquareOutlined,
  MinusSquareOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { SelectAllRecordsRow } from "@/common/SelectAllRecordsRow";
import { COLUMN_COMPONENTS } from "./treeComponents";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

type Props = {
  total?: number;
  limit: number;
  page?: number;
  loading: boolean;
  treeView: TreeView;
  results: any[];
  showPagination?: boolean;
  onRequestPageChange?: (page: number, pageSize?: number) => void;
  onRowClicked?: (record: any) => void;
  onRowSelectionChange?: (selectedRowKeys: any[]) => void;
  selectedRowKeys?: number[];
  scrollY?: number;
  colorsForResults?: { [key: number]: string };
  statusForResults?: { [key: number]: string };
  onChangeSort?: (results: any) => void;
  sorter?: any;
  onFetchChildrenForRecord?: (item: any) => Promise<any[]>;
  childField?: string;
  rootTree?: boolean;
  context?: any;
  readonly?: boolean;
  onSelectAllRecords?: () => Promise<void>;
};

export const UnmemoizedTree = forwardRef<TableRef, Props>(
  (props: Props, ref) => {
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
      selectedRowKeys = [],
      onRowSelectionChange,
      scrollY,
      colorsForResults = {},
      statusForResults = {},
      onChangeSort,
      sorter,
      onFetchChildrenForRecord,
      childField,
      rootTree = false,
      context,
      readonly,
      onSelectAllRecords,
    } = props;

    const tableRef = useRef<TableRef>(null);

    const [items, setItems] = useState<any[]>([]);

    const errorInParseColors = useRef<boolean>(false);

    const [treeOoui, setTreeOoui] = useState<TreeOoui>();

    const { t } = useLocale();
    const internalLimit = useRef(limit);

    const actionViewContext = useContext(
      ActionViewContext,
    ) as ActionViewContextType;
    const { title = undefined, setTitle = undefined } =
      (rootTree ? actionViewContext : {}) || {};

    const columns = useMemo(() => {
      if (!treeOoui) {
        return undefined;
      }

      return getTableColumns(
        treeOoui,
        {
          ...COLUMN_COMPONENTS,
        },
        context,
      );
    }, [context, treeOoui]);

    useImperativeHandle(ref, () => ({
      unselectAll: () => {
        tableRef.current?.unselectAll();
      },
    }));

    useEffect(() => {
      const treeOoui = getTree(treeView);
      setTreeOoui(treeOoui);
      if (treeOoui.string && title !== treeOoui.string) {
        setTitle?.(treeOoui.string);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [treeView, title]);

    useEffect(() => {
      if (!treeOoui) {
        return;
      }
      errorInParseColors.current = false;
      const items = getTableItems(treeOoui, results);
      setItems(items);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results]);

    useEffect(() => {
      internalLimit.current = limit;
    }, [limit]);

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

    const pagination = useMemo(() => {
      if (!showPagination || treeView.isExpandable) {
        return null;
      }

      const numberOfVisibleSelectedRows = items?.filter(
        (entry) => selectedRowKeys && selectedRowKeys.includes(entry.id),
      ).length;

      return loading ? null : total === undefined ? (
        <Spin className="pb-4" />
      ) : (
        <Row align="bottom" className="pb-4">
          <Col span={onSelectAllRecords ? 8 : 12}>
            <AntPagination
              total={total}
              pageSize={
                internalLimit.current === 0 ? total : internalLimit.current
              }
              current={page}
              showSizeChanger={false}
              onChange={onRequestPageChange}
            />
          </Col>
          {onSelectAllRecords && (
            <Col span={8} className="text-center">
              <SelectAllRecordsRow
                numberOfVisibleSelectedRows={numberOfVisibleSelectedRows}
                numberOfRealSelectedRows={selectedRowKeys?.length || 0}
                numberOfTotalRows={items.length}
                totalRecords={total || 0}
                onSelectAllRecords={onSelectAllRecords}
              />
            </Col>
          )}
          <Col span={onSelectAllRecords ? 8 : 12} className="text-right">
            {summary}
          </Col>
        </Row>
      );
    }, [
      items,
      loading,
      onRequestPageChange,
      onSelectAllRecords,
      page,
      selectedRowKeys,
      showPagination,
      summary,
      total,
      treeView.isExpandable,
    ]);

    const sums = useMemo(() => {
      if (!treeOoui) {
        return null;
      }
      const sumFields = treeOoui.columns
        .filter((it) => it.sum !== undefined)
        .map((it) => {
          return { label: it.sum, field: it.id };
        });

      if (!sumFields || sumFields.length === 0) {
        return null;
      }

      const summary: string[] = [];
      const sumItems =
        selectedRowKeys?.length > 0
          ? items.filter((result: any) => {
              return selectedRowKeys.includes(result.id);
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

      return <div className="p-1 pb-0 pl-2 mt-2 ">{summary.join(", ")}</div>;
    }, [items, selectedRowKeys, treeOoui]);

    const dataTable = useMemo(() => {
      if (treeOoui !== null && columns && columns.length > 0) {
        const maxWidthPerCell = 600;
        return calculateColumnsWidth(columns, items, maxWidthPerCell);
      }
      return undefined;
    }, [columns, items, treeOoui]);

    const adjustedHeight = useMemo(() => {
      if (
        scrollY &&
        treeOoui?.columns.some((it: any) => it.sum !== undefined)
      ) {
        return scrollY - 30;
      }
      return scrollY;
    }, [scrollY, treeOoui?.columns]);

    if (treeOoui === null || !dataTable || dataTable?.columns?.length === 0) {
      return <Spin style={{ padding: "2rem" }} />;
    }

    return (
      <ErrorBoundary>
        {pagination}
        <GisceTable
          ref={tableRef}
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
          onRowStatus={
            hasActualValues(statusForResults)
              ? (record: any) => {
                  if (statusForResults![record.id]) {
                    return <Badge color={statusForResults[record.id]} />;
                  }
                  return undefined;
                }
              : undefined
          }
          onRowDoubleClick={onRowClicked}
          onRowSelectionChange={onRowSelectionChange}
          onChangeSort={onChangeSort}
          sorter={sorter}
          readonly={readonly}
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
        {sums}
      </ErrorBoundary>
    );
  },
);

export const Tree = memo(UnmemoizedTree);
Tree.displayName = "Tree";
UnmemoizedTree.displayName = "UnmemoizedTree";
