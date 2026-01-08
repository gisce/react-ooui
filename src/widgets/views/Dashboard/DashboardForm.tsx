import ConnectionProvider from "@/ConnectionProvider";
import { useEffect, useState, useRef, useCallback } from "react";
import Form, { FormProps } from "../Form";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useBrowserVisibility } from "@/hooks/useBrowserVisibility";
import { getValuesForDomain } from "@/helpers/formHelper";
import { useDeepCompareEffect, useDeepCompareMemo } from "use-deep-compare";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";

export const DashboardForm = (
  props: FormProps & { fixedHeight?: number; autoRefresh?: number },
) => {
  const { model, view_id, fixedHeight, autoRefresh, actionDomain } = props;
  const [firstId, setFirstId] = useState<number>();
  const formRef = useRef<any>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { isActive } = useActionViewContext();
  const tabOrWindowIsVisible = useBrowserVisibility();

  const valuesForDomain = useDeepCompareMemo(() => {
    return getValuesForDomain(actionDomain || []);
  }, [actionDomain]);

  const [searchRecords, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );

  useEffect(() => {
    return () => {
      cancelSearchRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = useCallback(async () => {
    const numericId =
      typeof valuesForDomain?.id === "number" ? valuesForDomain.id : undefined;

    if (numericId) {
      setFirstId(numericId);
      return;
    }

    const results: any[] = (await searchRecords({
      params: [],
      model,
      limit: 1,
    })) as any;

    if (results.length > 0) {
      setFirstId(results[0].id);
    }
  }, [valuesForDomain, model, searchRecords]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useDeepCompareEffect(() => {
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
  }, [autoRefresh, firstId, isActive, tabOrWindowIsVisible, valuesForDomain]);

  return (
    <div
      style={{ padding: "0.5rem", overflowY: "scroll", height: fixedHeight }}
    >
      <Form
        ref={formRef}
        {...props}
        model={model}
        view_id={view_id}
        id={firstId}
        readOnly
      />
    </div>
  );
};
