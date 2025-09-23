import ConnectionProvider from "@/ConnectionProvider";
import { useEffect, useState, useRef } from "react";
import Form, { FormProps } from "../Form";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useBrowserVisibility } from "@/hooks/useBrowserVisibility";

export const DashboardForm = (
  props: FormProps & { fixedHeight?: number; autoRefresh?: number },
) => {
  const { model, fixedHeight, autoRefresh } = props;
  const [firstId, setFirstId] = useState<number>();
  const formRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { isActive } = useActionViewContext();
  const tabOrWindowIsVisible = useBrowserVisibility();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [model]);

  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (autoRefresh && firstId && isActive !== false && tabOrWindowIsVisible) {
      intervalRef.current = setInterval(async () => {
        await fetchData();
        // Small delay to ensure form has updated with new ID
        await new Promise((resolve) => setTimeout(resolve, 200));
        formRef.current?.fetchValues();
      }, autoRefresh);
    }

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRefresh, firstId, isActive, tabOrWindowIsVisible]);

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
