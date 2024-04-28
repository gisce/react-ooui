import { One2manyItem } from "./One2manyInput";

export const useOne2manyItems = ({
  one2manyItems,
}: {
  one2manyItems: One2manyItem[];
}) => {
  return one2manyItems.filter((item) => item.operation !== "pendingRemove");
};
