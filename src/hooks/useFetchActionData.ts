import { useContext, useEffect, useMemo, useState } from "react";
import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";
import { useConfigContext } from "@/context/ConfigContext";
import { parseContext } from "@gisce/ooui";
import { FormContext, FormContextType } from "@/context/FormContext";

export const useFetchActionData = (actionId: number) => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [actionData, setActionData] = useState<any>();
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};
  const { globalValues, rootContext } = useConfigContext();
  const [getActionData, cancelGetActionDataRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getActionData,
  );
  const context = useMemo(() => {
    return { ...getContext?.(), ...rootContext };
  }, [getContext, rootContext]);

  useEffect(() => {
    if (!actionId) {
      return;
    }
    fetchData();
    return () => {
      cancelGetActionDataRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionId]);

  const fetchData = async () => {
    setError(undefined);
    setLoading(true);
    try {
      const result = await getActionData({
        action: `ir.actions.act_window,${actionId.toString()}`,
      });
      const parsedContext = parseContext({
        context: { ...context, ...result.context },
        values: globalValues,
        fields: {},
      });
      const parsedDomain = result.domain
        ? await ConnectionProvider.getHandler().evalDomain({
            domain: result.domain,
            values: globalValues,
            context: { ...rootContext, ...parsedContext },
          })
        : [];
      setActionData({
        ...result,
        context: parsedContext,
        domain: parsedDomain,
      });
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { actionData, loading, error };
};
