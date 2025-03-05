import { useRef } from "react";
import { getColorMap, getStatusMap } from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";

export function useTreeAttributesState() {
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();

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
  };
}

export const getAttributesConditionsFromOoui = ({
  treeOoui,
  hasFunctionFieldsToParseConditions = false,
}: {
  treeOoui?: TreeOoui;
  hasFunctionFieldsToParseConditions?: boolean;
}) => {
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
};
