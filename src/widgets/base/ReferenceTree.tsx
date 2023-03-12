import ConnectionProvider from "@/ConnectionProvider";
import { Space } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Many2oneSuffix } from "./many2one/Many2oneSuffix";
import { LoadingOutlined } from "@ant-design/icons";

export type ReferenceTreeProps = { value: string; context?: any };

export const ReferenceTree = (
  props: ReferenceTreeProps
): React.ReactElement => {
  const { value, context } = props;
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);

  const [model, id] = value ? value.split(",") : [];
  const intId = parseInt(id);

  const fetchName = useCallback(async () => {
    if (!value) {
      return;
    }
    if (value && name) {
      return;
    }
    setLoading(true);
    const nameResponse = await ConnectionProvider.getHandler().execute({
      action: "name_get",
      payload: [intId],
      model,
      context,
    });
    setName(nameResponse[0][1]);
    setLoading(false);
  }, [value, name]);

  useEffect(() => {
    fetchName();
  }, [value]);

  if (!value && !loading) {
    return <></>;
  }

  if (loading) {
    return <LoadingOutlined />;
  }

  return (
    <Space>
      <>{name}</>
      <Many2oneSuffix id={intId} model={model} />
    </Space>
  );
};
