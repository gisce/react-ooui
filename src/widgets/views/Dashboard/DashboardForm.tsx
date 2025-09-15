import ConnectionProvider from "@/ConnectionProvider";
import { useEffect, useState, useRef } from "react";
import Form, { FormProps } from "../Form";

export const DashboardForm = (
  props: FormProps & { fixedHeight?: number; autoRefresh?: number },
) => {
  const { model, fixedHeight, autoRefresh } = props;
  const [firstId, setFirstId] = useState<number>();
  const formRef = useRef<any>(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  useEffect(() => {
    if (autoRefresh && firstId) {
      const interval = setInterval(async () => {
        await fetchData();
        // Small delay to ensure form has updated with new ID
        await new Promise((resolve) => setTimeout(resolve, 200));
        formRef.current?.fetchValues();
      }, autoRefresh);

      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRefresh, firstId]);

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
    <div
      style={{ padding: "0.5rem", overflowY: "scroll", height: fixedHeight }}
    >
      <Form ref={formRef} {...props} model={model} id={firstId} readOnly />
    </div>
  );
};
