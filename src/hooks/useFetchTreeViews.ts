import { useCallback, useState, useRef } from "react";
import { ConnectionProvider, FormView, TreeView } from "..";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { showErrorDialog } from "@/ui/GenericErrorDialog";
import useDeepCompareEffect from "use-deep-compare-effect";

export type UseFetchTreeViewsOpts = {
  model: string;
  formViewProps?: FormView;
  treeViewProps?: TreeView;
  context?: any;
  enabled?: boolean;
};

export const useFetchTreeViews = ({
  model,
  formViewProps,
  treeViewProps,
  context,
  enabled = true,
}: UseFetchTreeViewsOpts) => {
  const [loading, setLoading] = useState(true);
  const [treeView, setTreeView] = useState<TreeView>();
  const [formView, setFormView] = useState<FormView>();
  const isRequestInProgress = useRef(false);

  const [fetchGetViewRequest, cancelGetViewRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getView,
  );

  useDeepCompareEffect(() => {
    if (enabled) fetchViewData();
    return () => {
      cancelGetViewRequest();
    };
  }, [context, formViewProps, model, treeViewProps, enabled]);

  const fetchViewData = useCallback(async () => {
    if (isRequestInProgress.current) return;
    isRequestInProgress.current = true;
    setLoading(true);
    try {
      const fetchPromises: Array<Promise<any>> = [];

      if (!formViewProps) {
        fetchPromises.push(
          fetchGetViewRequest({ model, type: "form", context }),
        );
      }
      if (!treeViewProps) {
        fetchPromises.push(
          fetchGetViewRequest({ model, type: "tree", context }),
        );
      }

      const results = await Promise.all(fetchPromises);

      const formViewIndex = 0;
      const treeViewIndex = formViewProps ? 0 : 1;

      setFormView(formViewProps || (results[formViewIndex] as FormView));
      setTreeView(treeViewProps || (results[treeViewIndex] as TreeView));
    } catch (error) {
      console.error("Error fetching view data:", error);
      showErrorDialog(error);
    } finally {
      setLoading(false);
      isRequestInProgress.current = false;
    }
  }, [context, fetchGetViewRequest, formViewProps, model, treeViewProps]);

  return { loading, treeView, formView };
};
