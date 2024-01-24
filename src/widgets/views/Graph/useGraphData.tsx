import { useCallback, useState } from "react";
import {
  parseGraph,
  GraphChart as GraphChartOoui,
  graphProcessor,
  graphFieldUtils,
  GraphType,
} from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";

const { processGraphData } = graphProcessor;
const { getFieldsToRetrieve } = graphFieldUtils;

export type GraphDataQueryOpts = {
  model: string;
  domain?: any;
  context?: any;
  limit?: number;
  manualIds?: number[];
};

export type GraphDataOpts = GraphDataQueryOpts & {
  xml: string;
  uninformedString: string;
};

export const useGraphData = (opts: GraphDataOpts) => {
  const {
    model,
    domain = [],
    context = {},
    xml,
    limit,
    uninformedString,
    manualIds,
  } = opts;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();
  const [processedValues, setProcessedValues] = useState<any>();
  const [evaluatedEntries, setEvaluatedEntries] = useState<any[]>();
  const [type, setType] = useState<GraphType>("line");
  const [getFields] = useNetworkRequest(
    ConnectionProvider.getHandler().getFields,
  );
  const [readObjects] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );
  const [search] = useNetworkRequest(ConnectionProvider.getHandler().search);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(undefined);

    // // First we parse the xml with ooui library
    const ooui = parseGraph(xml) as GraphChartOoui;
    setType(ooui.type || "line");

    // // Then we fetch the data
    const fieldsToRetrieve = getFieldsToRetrieve({ ooui });
    let values, fields;

    try {
      // Use connection provider or whatever service you need to use
      ({ values, fields } = await retrieveData({
        model,
        domain,
        context,
        limit,
        order: ooui.timerange ? ooui.x.name : null,
        fields: fieldsToRetrieve,
        manualIds,
        methods: {
          getFields,
          readObjects,
          search,
        },
      }));
    } catch (e) {
      setError("Error fetching graph data values: " + JSON.stringify(e));
      setLoading(false);
      return;
    }

    try {
      if (!values || !fields) {
        setError("No values or fields returned");
        setLoading(false);
        return {
          loading,
          error,
          type,
          values: processedValues,
          evaluatedEntries,
          fetchData,
        };
      }

      setEvaluatedEntries(values);
      const _processedValues = processGraphData({
        ooui,
        values,
        fields,
        options: {
          uninformedString,
        },
      });
      setError(undefined);
      setProcessedValues(_processedValues);
    } catch (e) {
      setError("Error processing graph data: " + e);
      setLoading(false);
      return;
    }

    setLoading(false);
  }, [
    context,
    domain,
    error,
    evaluatedEntries,
    getFields,
    limit,
    loading,
    manualIds,
    model,
    processedValues,
    readObjects,
    search,
    type,
    uninformedString,
    xml,
  ]);

  return {
    loading,
    error,
    type,
    values: processedValues,
    evaluatedEntries,
    fetchData,
  };
};

async function getFieldsForModel({
  model,
  context,
  fields,
  getFields,
}: {
  model: string;
  context: any;
  fields: string[];
  getFields: (payload: any) => Promise<any>;
}) {
  const viewData = await getFields({
    model,
    context,
    fields,
  });
  return viewData;
}

async function retrieveData({
  fields,
  model,
  domain,
  context,
  order,
  limit,
  manualIds,
  methods,
}: {
  fields: string[];
  model: string;
  domain: any;
  context: any;
  order: string | null;
  limit?: number;
  manualIds?: number[];
  methods: {
    getFields: (payload: any) => Promise<any>;
    readObjects: (payload: any) => Promise<any>;
    search: (payload: any) => Promise<any>;
  };
}) {
  const { getFields, readObjects, search } = methods;

  const fieldsDefinition = await getFieldsForModel({
    model,
    context,
    fields,
    getFields,
  });

  if (manualIds) {
    let values: any[] = (await readObjects({
      model,
      ids: manualIds,
      fieldsToRetrieve: fields,
      context,
    })) as any;

    if (order) {
      values = [...values].sort((a, b) => a[order] - b[order]);
    }

    return {
      values,
      fields: fieldsDefinition,
    };
  }

  const values: any[] = (await search({
    model,
    params: domain,
    fieldsToRetrieve: fields,
    context,
    limit,
    order,
  })) as any;
  return {
    values,
    fields: fieldsDefinition,
  };
}
