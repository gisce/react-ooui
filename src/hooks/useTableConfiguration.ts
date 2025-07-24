import { useDeepCompareMemo } from "use-deep-compare";
import { Tree as TreeOoui } from "@gisce/ooui";
import { getTableColumns } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "../widgets/views/Tree/treeComponents";
import { useMemo } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "..";

export const useTableConfiguration = (
  treeOoui: TreeOoui | undefined,
  parentContext: Record<string, unknown>,
) => {
  const { t } = useLocale();
  const many2oneSortEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_MANY2ONE_SORT,
  );

  const columns = useDeepCompareMemo(() => {
    if (!treeOoui) return undefined;
    return getTableColumns(
      treeOoui,
      { ...COLUMN_COMPONENTS },
      parentContext,
      many2oneSortEnabled,
    );
  }, [treeOoui, parentContext, many2oneSortEnabled]);

  const strings = useMemo(
    () => ({
      resetTableViewLabel: t("resetTableView"),
      changeToInfiniteLabel: t("changeToInfinite"),
      changeToPaginatedLabel: t("changeToPaginated"),
      noResultsLabel: t("no_results"),
    }),
    [t],
  );

  return {
    columns,
    strings,
  };
};
