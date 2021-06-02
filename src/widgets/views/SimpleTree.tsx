import React, { useEffect, useState } from "react";
import { Alert } from "antd";

import Tree from "@/widgets/views/Tree";
import { FormView, TreeView } from "@/types/index";
import ConnectionProvider from "@/ConnectionProvider";

type OnRowClickedData = {
  id: number;
  model: string;
  formView: FormView;
  treeView: TreeView;
};

type Props = {
  ids: Array<number>;
  model: string;
  formView: FormView;
  treeView: TreeView;
  onRowClicked: (data: OnRowClickedData) => void;
};

function SimpleTree(props: Props) {
  const { ids, model, treeView, formView, onRowClicked } = props;

  const [results, setResults] = useState<any>([]);

  const [error, setError] = useState<string>();

  const [tableRefreshing, setTableRefreshing] = useState<boolean>(false);

  const readObjects = async () => {
    const values = await ConnectionProvider.getHandler().readObjects({
      arch: treeView.arch,
      model,
      ids,
      fields: treeView.fields,
    });

    setResults(values);
  };

  const fetchResults = async () => {
    try {
      setTableRefreshing(true);
      await readObjects();
    } catch (error) {
      setError(error);
    } finally {
      setTableRefreshing(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [ids, model]);

  const onRowClickedHandler = (id: number) => {
    onRowClicked({
      id,
      model,
      formView,
      treeView,
    });
  };

  const content = () => {
    if (!treeView || !formView) {
      return null;
    }

    return (
      <>
        <Tree
          total={ids.length}
          limit={ids.length}
          treeView={treeView}
          results={results}
          loading={tableRefreshing}
          onRowClicked={onRowClickedHandler}
          showPagination={false}
        />
      </>
    );
  };

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  return content();
}

export default SimpleTree;
