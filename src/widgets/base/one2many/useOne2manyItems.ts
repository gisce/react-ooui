import { One2manyItem } from "./One2manyInput";
import { useDeepCompareMemo } from "use-deep-compare";

export const useOne2manyItems = ({
  one2manyItems,
}: {
  one2manyItems: One2manyItem[];
}) => {
  return useDeepCompareMemo(() => {
    return one2manyItems.filter((item) => item.operation !== "pendingRemove");
  }, [one2manyItems]);
};
