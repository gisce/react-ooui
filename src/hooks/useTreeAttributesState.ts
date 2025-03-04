import { useRef } from "react";
import { getColorMap, getStatusMap } from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";

type UseTreeAttributesStateReturn = {
  colorsForResults: React.MutableRefObject<{ [key: number]: string }>;
  statusForResults: React.MutableRefObject<
    { [key: number]: string } | undefined
  >;
  updateAttributes: (attrsEvaluated: any, treeOoui: TreeOoui) => void;
};

export function useTreeAttributesState(): UseTreeAttributesStateReturn {
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
