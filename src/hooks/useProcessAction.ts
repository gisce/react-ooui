import { useContext, useCallback } from "react";
import { ContentRootContext } from "@/context/ContentRootContext";

export interface UseProcessActionParams {
  model?: string;
  fields?: any;
  values?: any;
  getValues?: () => any;
  context?: any;
  onRefreshParentValues?: () => Promise<void>;
}

export interface ProcessActionResult {
  runAction: (params: {
    actionData: any;
    additionalContext?: any;
    overrideValues?: any;
    overrideFields?: any;
  }) => Promise<{ closeParent?: boolean }>;
}

export function useProcessAction({
  fields,
  values,
  getValues,
  context,
  onRefreshParentValues,
}: UseProcessActionParams): ProcessActionResult {
  const contentRootContext = useContext(ContentRootContext);
  const { processAction } = contentRootContext || {};

  const runAction = useCallback(
    async ({
      actionData,
      additionalContext = {},
      overrideValues,
      overrideFields,
    }: {
      actionData: any;
      additionalContext?: any;
      overrideValues?: any;
      overrideFields?: any;
    }): Promise<{ closeParent?: boolean }> => {
      const finalValues =
        overrideValues !== undefined
          ? overrideValues
          : getValues
          ? getValues()
          : values;

      const result =
        (await processAction?.({
          actionData,
          fields: overrideFields !== undefined ? overrideFields : fields,
          values: finalValues,
          context: {
            ...context,
            ...additionalContext,
          },
          onRefreshParentValues,
        })) || {};

      return result;
    },
    [processAction, fields, values, getValues, context, onRefreshParentValues],
  );

  return { runAction };
}
