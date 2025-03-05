import ConnectionProvider from "@/ConnectionProvider";
import { Space } from "antd";
import React, { useCallback, useState } from "react";
import { Many2oneSuffix } from "./many2one/Many2oneSuffix";
import { LoadingOutlined } from "@ant-design/icons";
import { useDeepCompareEffect } from "use-deep-compare";

export type ReferenceTreeProps = {
  value: string;
  context?: any;
  selectionValues?: any;
};

export const ReferenceTree = (
  props: ReferenceTreeProps,
): React.ReactElement => {
  const { value, context, selectionValues } = props;
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);

  const [model, id] = value ? value.split(",") : [];
  const intId = parseInt(id);

  const fetchName = useCallback(async () => {
    if (!value) {
      return;
    }
    if (value && name && loading) {
      return;
    }
    setLoading(true);
    const nameResponse = await ConnectionProvider.getHandler().execute({
      action: "name_get",
      payload: [intId],
      model,
      context,
    });
    const m2o = nameResponse[0];
    if (m2o && m2o[1]) {
      setName(m2o[1]);
    }
    setLoading(false);
  }, [value, name, loading, intId, model, context]);

  useDeepCompareEffect(() => {
    fetchName();
  }, [value]);

  if (!value && !loading) {
    return <></>;
  }

  if (loading) {
    return <LoadingOutlined />;
  }

  const selectionDescription = selectionValues.get(model);

  return (
    <Space>
      <>{`${selectionDescription}:`}</>
      <>{name}</>
      <Many2oneSuffix id={intId} model={model} />
    </Space>
  );
};
