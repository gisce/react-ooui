import { useCallback, useContext } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import { useActionViewContext } from "@/context/ActionViewContext";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";

interface UseTreeToolbarButtonsProps {
  toolbar: any;
  disabled?: boolean;
  parentContext?: any;
}

export const useRunTreeAction = () => {
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};
  const { selectedRowItems, searchTreeRef } = useActionViewContext();

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
        onRefreshParentValues: () => {
          searchTreeRef?.current?.refreshResults();
        },
      });
    },
    [processAction, selectedRowItems, searchTreeRef],
  );
};

export const useTreeToolbarButtons = ({
  toolbar,
  disabled = false,
  parentContext = {},
}: UseTreeToolbarButtonsProps) => {
  const { t } = useLocale();
  const { selectedRowItems } = useActionViewContext();
  const runAction = useRunTreeAction();

  const actionButtonProps = {
    placement: "bottomRight" as const,
    disabled: !selectedRowItems?.length || disabled,
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
    disabled: !selectedRowItems?.length || disabled,
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
