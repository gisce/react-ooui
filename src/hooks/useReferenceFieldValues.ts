import { useCallback, useEffect } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "./useNetworkRequest";

interface ReferenceValue {
  model: string;
  res_id: number;
}

interface ReferenceResult {
  model: string;
  modelName: string;
  res_id: number;
  recordName: string;
}

interface UseReferenceFieldValuesOptions {
  context?: Record<string, any>;
}

export const useReferenceFieldValues = (
  options?: UseReferenceFieldValuesOptions,
) => {
  const [execute, cancelExecuteRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().execute,
  );

  const [search, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );

  // Cancel all pending requests on unmount
  useEffect(() => {
    return () => {
      cancelExecuteRequest();
      cancelSearchRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const parseReferenceString = useCallback(
    (referenceString: string): ReferenceValue | null => {
      try {
        const parts = referenceString.split(",");
        if (parts.length !== 2) return null;

        const [model, idStr] = parts;
        const modelTrimmed = model?.trim();
        const res_id = parseInt(idStr.trim(), 10);

        if (!modelTrimmed || isNaN(res_id) || res_id <= 0) return null;

        return { model: modelTrimmed, res_id };
      } catch (error) {
        console.error("Error parsing reference string:", error);
        return null;
      }
    },
    [],
  );

  const fetchReferenceValues = useCallback(
    async (
      referenceStrings: string[],
    ): Promise<Map<string, ReferenceResult>> => {
      const results = new Map<string, ReferenceResult>();
      const modelGroups = new Map<string, Set<number>>();
      const uniqueModels = new Set<string>();

      // Group references by model
      for (const refString of referenceStrings) {
        const parsed = parseReferenceString(refString);
        if (parsed) {
          uniqueModels.add(parsed.model);
          if (!modelGroups.has(parsed.model)) {
            modelGroups.set(parsed.model, new Set());
          }
          modelGroups.get(parsed.model)!.add(parsed.res_id);
        }
      }

      // Fetch model names from ir.model
      const modelNameMap = new Map<string, string>();
      if (uniqueModels.size > 0) {
        const modelArray = Array.from(uniqueModels);
        const modelNamePromises = modelArray.map(async (model) => {
          try {
            const result = await search({
              model: "ir.model",
              params: [["model", "=", model]],
              fieldsToRetrieve: ["name"],
              limit: 1,
              context: options?.context,
            });

            if (result && Array.isArray(result) && result.length > 0) {
              const modelRecord = result[0];
              if (modelRecord?.name && typeof modelRecord.name === "string") {
                modelNameMap.set(model, modelRecord.name);
              }
            }
          } catch (error) {
            console.error(`Error fetching name for model ${model}:`, error);
            modelNameMap.set(model, model); // Fallback to model key
          }
        });

        await Promise.all(modelNamePromises);
      }

      // Fetch record names for each model group in parallel
      const recordNamePromises = Array.from(modelGroups.entries()).map(
        async ([model, idSet]) => {
          try {
            const ids = Array.from(idSet);
            const nameResults = await execute({
              action: "name_get",
              payload: ids,
              model,
              context: options?.context,
            });

            if (nameResults && Array.isArray(nameResults)) {
              return { model, nameResults };
            }
          } catch (error) {
            console.error(`Error fetching names for model ${model}:`, error);
          }
          return { model, nameResults: [] };
        },
      );

      const recordResults = await Promise.all(recordNamePromises);

      // Process results and build the map
      for (const { model, nameResults } of recordResults) {
        const modelName = modelNameMap.get(model) || model;
        for (const nameResult of nameResults) {
          if (Array.isArray(nameResult) && nameResult.length >= 2) {
            const [res_id, recordName] = nameResult;
            if (typeof res_id === "number" && typeof recordName === "string") {
              const key = `${model},${res_id}`;
              results.set(key, { model, modelName, res_id, recordName });
            }
          }
        }
      }

      return results;
    },
    [execute, search, parseReferenceString, options?.context],
  );

  const cancelAllRequests = useCallback(() => {
    cancelExecuteRequest();
    cancelSearchRequest();
  }, [cancelExecuteRequest, cancelSearchRequest]);

  return {
    fetchReferenceValues,
    parseReferenceString,
    cancelRequest: cancelAllRequests,
  };
};
