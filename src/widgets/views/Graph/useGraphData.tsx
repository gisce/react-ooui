import { useState } from "react";
import {
  parseGraph,
  GraphChart as GraphChartOoui,
  graphProcessor,
  graphFieldUtils,
  GraphType,
} from "@gisce/ooui";
import useDeepCompareEffect from "use-deep-compare-effect";
import ConnectionProvider from "@/ConnectionProvider";

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

  useDeepCompareEffect(() => {
    (async () => {
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
          return;
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
        setProcessedValues(_processedValues);
      } catch (e) {
        setError("Error processing graph data: " + e);
        setLoading(false);
        return;
      }

      setLoading(false);
    })();
  }, [xml, model, limit, context, domain]);

  return {
    loading,
    error,
    type,
    values: processedValues,
    evaluatedEntries,
  };
};

async function getFieldsForModel({
  model,
  context,
  fields,
}: {
  model: string;
  context: any;
  fields: string[];
}) {
  const viewData = await ConnectionProvider.getHandler().getFields({
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
}: {
  fields: string[];
  model: string;
  domain: any;
  context: any;
  order: string | null;
  limit?: number;
  manualIds?: number[];
}) {
  const fieldsDefinition = await getFieldsForModel({ model, context, fields });

  if (manualIds) {
    let values: any[] = (await ConnectionProvider.getHandler().readObjects({
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

  const values: any[] = (await ConnectionProvider.getHandler().search({
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
