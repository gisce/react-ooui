import { forwardRef } from "react";

import { FormView, TreeView } from "@/types/index";

import { useFetchTreeViews } from "@/hooks/useFetchTreeViews";
import { Spin } from "antd";

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
    treeScrollY,
    domain = [],
    visible = true,
    rootTree = false,
    parentContext = {},
    onChangeSelectedRowKeys,
  } = props;

  const { treeView, formView, loading } = useFetchTreeViews({
    model,
    formViewProps,
    treeViewProps,
    context: parentContext,
  });

  return (
    <div style={!visible ? { display: "none" } : {}}>
      {loading ? <Spin /> : <div>loaded</div>}
    </div>
  );

  // return (
  //   <InfiniteTable
  //     // ref={tableRef}
  //     height={500}
  //     columns={columns}
  //     onRequestData={onRequestData}
  //     onRowDoubleClick={onRowDoubleClick}
  //     readonly={readOnly}
  //     onRowStyle={onRowStyle}
  //     onRowSelectionChange={onRowSelectionChange}
  //     onColumnChanged={updateColumnState}
  //     onGetColumnsState={getColumnState}
  //     onChangeFirstVisibleRowIndex={onChangeFirstVisibleRowIndex}
  //     onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
  //     onGetSelectedRowKeys={onGetSelectedRowKeys}
  //     allRowSelectedMode={allRowSelectedMode}
  //     onAllRowSelectedModeChange={onAllRowSelectedModeChange}
  //     totalRows={totalRows}
  //     footer={aggregates && <One2manyFooter aggregates={aggregates} />}
  //     hasStatusColumn={ooui.status !== null}
  //     statusComponent={(status: any) => <Badge color={status} />}
  //     onRowStatus={(record: any) => statusForResults.current?.[record.id]}
  //   />
  // );
}

export const SearchTreeInfinite = forwardRef(SearchTreeInfiniteComp);
