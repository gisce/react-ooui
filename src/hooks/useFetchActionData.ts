import { useEffect, useState } from "react";
import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";

export const useFetchActionData = (actionId: number) => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [actionData, setActionData] = useState<any>();
  const [getActionData, cancelGetActionDataRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getActionData,
  );

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
      const result = await getActionData({ actionId });
      setActionData(result);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { actionData, loading, error };
};
