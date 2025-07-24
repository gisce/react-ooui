import { Tree as TreeOoui } from "@gisce/ooui";
import { One2manyItem } from "./One2manyInput";
import { useTreeAggregates } from "./useTreeAggregates";

export const useOne2manyTreeAggregates = ({
  ooui,
  items,
  selectedRowKeys,
  model,
}: {
  ooui: TreeOoui;
  items: One2manyItem[];
  selectedRowKeys: any[];
  model: string;
}) => {
  const realItems = items.filter((it) => it.id && it.id > 0);
  let domain;
  if (selectedRowKeys.length > 0) {
    domain = [["id", "in", selectedRowKeys]];
  } else if (realItems.length > 0) {
    domain = [["id", "in", realItems.map((it) => it.id)]];
  }
  return useTreeAggregates({
    ooui,
    model,
    domain,
  });
};
