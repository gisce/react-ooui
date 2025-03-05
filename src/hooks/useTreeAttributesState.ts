import { useCallback, useMemo, useRef } from "react";
import { getColorMap, getStatusMap } from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";
import { TreeView } from "..";

type UseTreeAttributesStateReturn = {
  colorsForResults: React.MutableRefObject<{ [key: number]: string }>;
  statusForResults: React.MutableRefObject<
    { [key: number]: string } | undefined
  >;
  updateAttributes: (attrsEvaluated: any, treeOoui: TreeOoui) => void;
  hasFunctionFieldsToParseConditions: boolean;
  getAttributesConditionsFromOoui: (treeOoui?: TreeOoui) => any;
};

export function useTreeAttributesState({
  treeView,
  functionFields,
}: {
  treeView?: TreeView;
  functionFields: string[];
}): UseTreeAttributesStateReturn {
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();

  const hasFunctionFieldsToParseConditions = useMemo(() => {
    if (!treeView) {
      return false;
    }
    const colorsFields = treeView.fields_in_conditions?.colors || [];
    const statusFields = treeView.fields_in_conditions?.status || [];
    return (
      colorsFields.some((field) => functionFields.includes(field)) ||
      statusFields.some((field) => functionFields.includes(field))
    );
  }, [functionFields, treeView]);

  const getAttributesConditionsFromOoui = useCallback(
    (treeOoui?: TreeOoui) => {
      if (!hasFunctionFieldsToParseConditions) {
        const attrs: any = {};
        if (treeOoui?.colors) {
          attrs.colors = treeOoui.colors;
        }
        if (treeOoui?.status) {
          attrs.status = treeOoui.status;
        }
        return attrs;
      }
      return undefined;
    },
    [hasFunctionFieldsToParseConditions],
  );

  const updateAttributes = (attrsEvaluated: any, treeOoui: TreeOoui) => {
    const colors = getColorMap(attrsEvaluated);
    colorsForResults.current = {
      ...colorsForResults.current,
      ...colors,
    };

    if (!statusForResults.current && treeOoui.status) {
      statusForResults.current = {};
    }

    if (treeOoui.status) {
      const status = getStatusMap(attrsEvaluated);
      statusForResults.current = {
        ...statusForResults.current,
        ...status,
      };
    }
  };

  return {
    colorsForResults,
    statusForResults,
    updateAttributes,
    hasFunctionFieldsToParseConditions,
    getAttributesConditionsFromOoui,
  };
}
