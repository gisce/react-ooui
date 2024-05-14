import { useCallback, useState } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { GraphType } from "@gisce/ooui";

export type GraphDataQueryOpts = {
  model: string;
  domain?: any;
  context?: any;
  view_id: number;
  manualIds?: number[];
};

export type GraphResponse = {
  type: GraphType;
};

export type GraphResponseChart = GraphResponse & {
  data: any;
  isGroup: boolean;
  isStack: boolean;
};

export type GraphResponseIndicator = GraphResponse & {
  total: number;
  value: number;
  color?: string;
  icon?: string;
  percent?: number;
};

export const useServerGraphData = (opts: GraphDataQueryOpts) => {
  const { model, domain = [], context = {}, view_id, manualIds } = opts;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [graphData, setGraphData] = useState<
    GraphResponseChart | GraphResponseIndicator
  >();
  const [readForView] = useNetworkRequest(
    ConnectionProvider.getHandler().readForView,
  );

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    // We must check if we have manualIds in order to populate domain with them
    if (manualIds) {
      domain.push(["id", "in", manualIds]);
    }

    try {
      const graphData = await readForView({
        model,
        domain,
        context,
        view_id,
      });
      setGraphData(graphData);
    } catch (e) {
      setError("Error reading graph data from server: " + e.message);
    }
    setLoading(false);
  }, [context, domain, manualIds, model, readForView, view_id]);

  return {
    loading,
    error,
    fetchData,
    graphData,
  };
};
