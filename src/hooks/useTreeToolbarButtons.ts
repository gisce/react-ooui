import { useCallback, useContext, useState } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";

interface UseTreeToolbarButtonsProps {
  disabled?: boolean;
  parentContext?: any;
  selectedRowItems?: any[];
  onRefreshParentValues?: () => void;
  model: string;
  toolbar?: {
    action?: any[];
    print?: any[];
  };
}

interface MenuItem {
  label: string;
  disabled?: boolean;
  items: any[];
}

export const useRunTreeAction = ({
  selectedRowItems,
  onRefreshParentValues,
}: {
  selectedRowItems?: any[];
  onRefreshParentValues?: () => void;
}) => {
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  return useCallback(
    (actionData: any, context: any = {}) => {
      processAction?.({
        actionData,
        values: {
          active_id: selectedRowItems?.map((item) => item.id)[0],
          active_ids: selectedRowItems?.map((item) => item.id),
        },
        fields: {},
        context: {
          ...context,
          active_id: selectedRowItems?.map((item) => item.id)[0],
          active_ids: selectedRowItems?.map((item) => item.id),
        },
        onRefreshParentValues,
      });
    },
    [processAction, selectedRowItems, onRefreshParentValues],
  );
};

export const useTreeToolbarButtons = ({
  disabled = false,
  parentContext = {},
  selectedRowItems = [],
  onRefreshParentValues,
  model,
  toolbar: initialToolbar,
}: UseTreeToolbarButtonsProps) => {
  const { t } = useLocale();
  const runAction = useRunTreeAction({
    selectedRowItems,
    onRefreshParentValues,
  });

  const [fetchedToolbar, setFetchedToolbar] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchToolbar] = useNetworkRequest(
    ConnectionProvider.getHandler().getToolbar,
  );

  // Use initialToolbar if provided, otherwise use fetchedToolbar
  const toolbar = initialToolbar || fetchedToolbar;

  const loadToolbarIfNeeded = useCallback(async () => {
    // If we have toolbar data from props or already fetched, use it
    if (initialToolbar || fetchedToolbar?.action || fetchedToolbar?.print) {
      return toolbar;
    }

    try {
      setIsLoading(true);
      const toolbarData = await fetchToolbar({
        model,
        type: "tree",
        context: parentContext,
      });
      setFetchedToolbar(toolbarData);
      return toolbarData;
    } catch (error) {
      console.error("Error loading toolbar:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [
    toolbar,
    fetchToolbar,
    model,
    parentContext,
    initialToolbar,
    fetchedToolbar,
  ]);

  const getLoadingMenuItem = useCallback(
    (): MenuItem => ({
      label: t("loading"),
      disabled: true,
      items: [],
    }),
    [t],
  );

  const actionButtonProps = {
    placement: "bottomRight" as const,
    disabled:
      !selectedRowItems ||
      selectedRowItems.length === 0 ||
      disabled ||
      isLoading,
    onRetrieveData: async () => {
      const currentToolbar = await loadToolbarIfNeeded();
      if (isLoading) {
        return [getLoadingMenuItem()];
      }
      return [
        {
          label: t("actions"),
          items: (currentToolbar || toolbar)?.action || [],
        },
      ];
    },
    onItemClick: (action: any) => {
      if (!action) {
        return;
      }
      runAction(action, parentContext);
    },
  };

  const printButtonProps = {
    placement: "bottomRight" as const,
    disabled: !selectedRowItems || selectedRowItems.length === 0 || isLoading,
    onRetrieveData: async () => {
      const currentToolbar = await loadToolbarIfNeeded();
      if (isLoading) {
        return [getLoadingMenuItem()];
      }
      return [
        {
          label: t("reports"),
          items: (currentToolbar || toolbar)?.print || [],
        },
      ];
    },
    onItemClick: (report: any) => {
      if (!report) {
        return;
      }

      runAction(
        {
          ...report,
          datas: {
            ...(report.datas || {}),
            ids: selectedRowItems!.map((item) => item.id),
          },
        },
        parentContext,
      );
    },
  };

  return {
    actionButtonProps,
    printButtonProps,
  };
};
