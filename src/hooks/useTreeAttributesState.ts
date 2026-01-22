import { useCallback, useRef } from "react";
import { getColorMap, getStatusMap } from "@/helpers/treeHelper";
import { Tree as TreeOoui } from "@gisce/ooui";
import { InfiniteTableRef } from "@gisce/react-formiga-table";

export function useTreeAttributesState({
  tableRef,
}: {
  tableRef?: React.RefObject<InfiniteTableRef>;
} = {}) {
  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>({});

  const clearAttributes = useCallback(() => {
    colorsForResults.current = {};
    statusForResults.current = {};
  }, []);

  const updateAttributes = useCallback(
    (attrsEvaluated: any, treeOoui: TreeOoui) => {
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
        if (tableRef?.current) {
          tableRef.current.updateRows(
            Object.keys(status).map((id) => ({
              id: parseInt(id),
              $status: status[id],
            })),
          );
        }
        statusForResults.current = {
          ...statusForResults.current,
          ...status,
        };
      }
    },
    [tableRef],
  );

  return {
    colorsForResults,
    statusForResults,
    updateAttributes,
    clearAttributes,
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
  return {};
};
