import { useDeepCompareMemo } from "use-deep-compare";
import { Tree as TreeOoui } from "@gisce/ooui";
import { getTableColumns } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "../widgets/views/Tree/treeComponents";
import { useMemo } from "react";
import { useLocale } from "@gisce/react-formiga-components";

export const useTableConfiguration = (
  treeOoui: TreeOoui | undefined,
  parentContext: Record<string, unknown>,
) => {
  const { t } = useLocale();

  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) return undefined;
    return getTableColumns(
      treeOoui,
      { ...COLUMN_COMPONENTS },
      parentContext,
      "paginated",
    );
  }, [treeOoui, parentContext]);

  const strings = useMemo(
    () => ({
      resetTableViewLabel: t("resetTableView"),
    }),
    [t],
  );

  return {
    columns,
    strings,
  };
};
