import { useCallback, useState } from "react";
import {
  GraphChart as GraphChartOoui,
  graphProcessor,
  graphFieldUtils,
  GraphType,
} from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { safeParseId, isExistingId } from "@/helpers/idUtils";

const { processGraphData } = graphProcessor;
const { getFieldsToRetrieve } = graphFieldUtils;

export type GraphDataOpts = {
  ooui: GraphChartOoui;
  model: string;
  domain?: any;
  context?: any;
  limit?: number;
  manualIds?: number[];
  uninformedString: string;
};

export const useGraphData = (opts: GraphDataOpts) => {
  const {
    model,
    ooui,
    domain = [],
    context = {},
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
    ooui,
    processedValues,
    readObjects,
    search,
    type,
    uninformedString,
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

    const valuesWithReferencesNames =
      await getValuesWithReferencesNamesIfNeeded({
        values,
        fieldsDefinition,
        context,
      });

    return {
      values: valuesWithReferencesNames,
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

  const valuesWithReferencesNames = await getValuesWithReferencesNamesIfNeeded({
    values,
    fieldsDefinition,
    context,
  });

  return {
    values: valuesWithReferencesNames,
    fields: fieldsDefinition,
  };
}

async function getValuesWithReferencesNamesIfNeeded({
  values,
  fieldsDefinition,
  context,
}: {
  values: any[];
  fieldsDefinition: any;
  context: any;
}) {
  // Get all fields that are of type reference
  const referenceFields = Object.entries(fieldsDefinition)
    .filter(([_, def]: [string, any]) => def.type === "reference")
    .map(([field]) => field);

  if (referenceFields.length === 0) {
    return values;
  }

  // Process each reference field in parallel
  const updatedValuesByField = await Promise.all(
    referenceFields.map(async (field) => {
      // Group values by model for this field
      const modelGroups: { [key: string]: Array<number | string> } = {};

      values.forEach((value) => {
        const refValue = value[field];
        if (!refValue) return;

        const [refModel, refId] = refValue.split(",");
        if (!refModel || !refId) return;

        if (!modelGroups[refModel]) {
          modelGroups[refModel] = [];
        }
        const parsedId = safeParseId(refId);
        if (isExistingId(parsedId)) {
          modelGroups[refModel].push(parsedId as number | string);
        }
      });

      // Make parallel name_get calls for each model group
      const nameGetResults = await Promise.all(
        Object.entries(modelGroups).map(async ([refModel, ids]) => {
          const names = await ConnectionProvider.getHandler().execute({
            action: "name_get",
            payload: ids,
            model: refModel,
            context,
          });
          return { refModel, names };
        }),
      );

      // Create a map of "model,id" -> name
      const referenceNameMap: { [key: string]: string } = {};
      nameGetResults.forEach(({ refModel, names }) => {
        names.forEach(([id, name]: [number, string]) => {
          referenceNameMap[`${refModel},${id}`] = name;
        });
      });

      // Return field update information
      return {
        field,
        nameMap: referenceNameMap,
      };
    }),
  );

  // Apply all updates to create new values array
  const updatedValues = values.map((value) => {
    const newValue = { ...value };
    updatedValuesByField.forEach(({ field, nameMap }) => {
      if (value[field] && nameMap[value[field]]) {
        newValue[field] = nameMap[value[field]];
      }
    });
    return newValue;
  });

  return updatedValues;
}
