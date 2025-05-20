import { useCallback, useContext } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";

interface UseTreeToolbarButtonsProps {
  toolbar: any;
  disabled?: boolean;
  parentContext?: any;
  selectedRowItems?: any[];
  onRefreshParentValues?: () => void;
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
  toolbar,
  disabled = false,
  parentContext = {},
  selectedRowItems = [],
  onRefreshParentValues,
}: UseTreeToolbarButtonsProps) => {
  const { t } = useLocale();
  const runAction = useRunTreeAction({
    selectedRowItems,
    onRefreshParentValues,
  });

  const actionButtonProps = {
    placement: "bottomRight" as const,
    disabled: !selectedRowItems || selectedRowItems.length === 0 || disabled,
    onRetrieveData: async () => [
      { label: t("actions"), items: toolbar?.action || [] },
    ],
    onItemClick: (action: any) => {
      if (!action) {
        return;
      }
      runAction(action, parentContext);
    },
  };

  const printButtonProps = {
    placement: "bottomRight" as const,
    disabled: !selectedRowItems || selectedRowItems.length === 0,
    onRetrieveData: async () => [
      { label: t("reports"), items: toolbar?.print || [] },
    ],
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
