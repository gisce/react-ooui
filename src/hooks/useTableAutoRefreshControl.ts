import { useEffect, RefObject } from "react";
import {
  InfiniteTableRef,
  PaginatedTableRef,
} from "@gisce/react-formiga-table";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useBrowserVisibility } from "./useBrowserVisibility";

export type UseAutoRefreshControlProps = {
  tableRef: RefObject<InfiniteTableRef | PaginatedTableRef | null>;
  autoRefresh?: number;
};

/**
 * Hook to control autorefresh behavior based on ActionView active state
 * Pauses autorefresh when ActionView is not active and resumes when active
 */
export const useTableAutoRefreshControl = ({
  tableRef,
  autoRefresh,
}: UseAutoRefreshControlProps) => {
  const { isActive } = useActionViewContext();
  const tabOrWindowIsVisible = useBrowserVisibility();

  useEffect(() => {
    // Only control autorefresh if it's enabled
    if (!autoRefresh || !tableRef.current) {
      return;
    }

    if (isActive === false || !tabOrWindowIsVisible) {
      // Pause if ActionView is inactive OR tab/window is not visible
      tableRef.current.pauseAutoRefresh?.();
    } else if (
      (isActive === undefined || isActive === true) &&
      tabOrWindowIsVisible
    ) {
      tableRef.current.resumeAutoRefresh?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, autoRefresh, tabOrWindowIsVisible]);
};
