import { forwardRef, useCallback, useMemo, useRef } from "react";

import { FormView, TreeView } from "@/types/index";

import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { Badge, Spin } from "antd";
import {
  getOrderFromSortFields,
  getTableColumns,
  getTableItems,
  getTree,
} from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "./Tree/treeComponents";
import { useDeepCompareMemo } from "use-deep-compare";
import { InfiniteTable, SortDirection } from "@gisce/react-formiga-table";
import ConnectionProvider from "@/ConnectionProvider";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { showErrorDialog } from "@/ui/GenericErrorDialog";

export const HEIGHT_OFFSET = 10;

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

type SearchTreeInfiniteProps = {
  model: string;
  formView?: FormView;
  treeView?: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
  nameSearch?: string;
  treeScrollY?: number;
  domain?: any;
  visible?: boolean;
  rootTree?: boolean;
  parentContext?: any;
  onChangeSelectedRowKeys?: (selectedRowKeys: any) => void;
};

function SearchTreeInfiniteComp(props: SearchTreeInfiniteProps, ref: any) {
  const {
    model,
    formView: formViewProps,
    treeView: treeViewProps,
    onRowClicked,
    nameSearch,
    domain = [],
    visible = true,
    rootTree = false,
    parentContext = {},
    onChangeSelectedRowKeys,
  } = props;
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();

  const containerRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
  });

  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  const treeOoui = useMemo(() => {
    if (!treeView) {
      return;
    }
    return getTree(treeView);
  }, [treeView]);

  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) {
      return;
    }
    return getTableColumns(
      treeOoui,
      {
        ...COLUMN_COMPONENTS,
      },
      parentContext,
    );
  }, [treeOoui, parentContext]);

  const fetchResults = useCallback(
    async ({
      startRow,
      endRow,
      sortFields,
    }: {
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      if (!treeOoui) {
        return [];
      }

      const attrs: any = {};
      if (treeOoui.colors) {
        attrs.colors = treeOoui.colors;
      }
      if (treeOoui.status) {
        attrs.status = treeOoui.status;
      }

      const { totalItems, results, attrsEvaluated } =
        await ConnectionProvider.getHandler().searchForTree({
          params: domain,
          limit: endRow - startRow,
          offset: startRow,
          model,
          fields: treeView!.field_parent
            ? { ...treeView!.fields, [treeView!.field_parent]: {} }
            : treeView!.fields,
          context: parentContext,
          attrs,
          order: getOrderFromSortFields(sortFields),
        });

      const preparedResults = getTableItems(treeOoui, results);

      colorsForResults.current = {
        ...colorsForResults.current,
        ...attrsEvaluated.colors,
      };
      if (!statusForResults.current && treeOoui.status) {
        statusForResults.current = {};
      }
      if (treeOoui.status) {
        statusForResults.current = {
          ...statusForResults.current,
          ...attrsEvaluated.colors,
        };
      }
      return preparedResults;
    },
    [domain, model, parentContext, treeOoui, treeView],
  );

  const onRequestData = useCallback(
    async ({
      startRow,
      endRow,
      sortFields,
    }: {
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      try {
        return await fetchResults({
          startRow,
          endRow,
          sortFields,
        });
      } catch (error) {
        console.error(error);
        showErrorDialog(error);
      }
    },
    [fetchResults],
  );

  const content = useMemo(() => {
    if (!columns || !treeOoui) {
      return null;
    }

    return (
      <InfiniteTable
        readonly={false}
        // ref={tableRef}
        height={availableHeight}
        columns={columns}
        onRequestData={onRequestData}
        // onRowDoubleClick={onRowDoubleClick}
        // onRowStyle={onRowStyle}
        // onRowSelectionChange={onRowSelectionChange}
        // onColumnChanged={updateColumnState}
        // onGetColumnsState={getColumnState}
        // onChangeFirstVisibleRowIndex={onChangeFirstVisibleRowIndex}
        // onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
        // onGetSelectedRowKeys={onGetSelectedRowKeys}
        // allRowSelectedMode={allRowSelectedMode}
        // onAllRowSelectedModeChange={onAllRowSelectedModeChange}
        totalRows={9999999}
        // footer={aggregates && <One2manyFooter aggregates={aggregates} />}
        hasStatusColumn={treeOoui.status !== null}
        statusComponent={(status: any) => <Badge color={status} />}
        // onRowStatus={(record: any) => statusForResults.current?.[record.id]}
      />
    );
  }, [availableHeight, columns, onRequestData, treeOoui]);

  return (
    <div
      ref={containerRef}
      style={{
        overflow: "hidden",
        height: `${availableHeight}px`,
        ...(visible ? {} : { display: "none" }),
      }}
    >
      {loading ? <Spin /> : content}
    </div>
  );
}

export const SearchTreeInfinite = forwardRef(SearchTreeInfiniteComp);
