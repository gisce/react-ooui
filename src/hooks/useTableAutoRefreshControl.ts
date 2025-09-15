import { useEffect, RefObject } from "react";
import {
  InfiniteTableRef,
  PaginatedTableRef,
} from "@gisce/react-formiga-table";
import { useActionViewContext } from "@/context/ActionViewContext";

export type UseAutoRefreshControlProps = {
  tableRef: RefObject<InfiniteTableRef | PaginatedTableRef>;
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
  useEffect(() => {
    // Only control autorefresh if it's enabled
    if (!autoRefresh || !tableRef.current) {
      return;
    }

    if (isActive === false) {
      // ActionView is inactive, pause autorefresh
      tableRef.current.pauseAutoRefresh?.();
    } else {
      // ActionView is active, resume autorefresh
      tableRef.current.resumeAutoRefresh?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, autoRefresh]);
};
