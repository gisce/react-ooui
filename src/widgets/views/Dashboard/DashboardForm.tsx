import ConnectionProvider from "@/ConnectionProvider";
import React, { useEffect, useState } from "react";
import Form, { FormProps } from "../Form";

export const DashboardForm = (props: FormProps) => {
  const { model } = props;
  const [firstId, setFirstId] = useState<number>();

  useEffect(() => {
    fetchData();
  }, [model]);

  async function fetchData() {
    const results: any[] = (await ConnectionProvider.getHandler().search({
      params: [],
      model,
      limit: 1,
    })) as any;

    if (results.length > 0) {
      setFirstId(results[0].id);
    }
  }

  return (
    <div style={{ padding: "0.5rem", overflowY: "scroll" }}>
      <Form model={model} id={firstId} readOnly />
    </div>
  );
};
