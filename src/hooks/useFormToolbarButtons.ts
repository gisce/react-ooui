import { useCallback, useContext, RefObject, useState } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";

interface UseFormToolbarButtonsProps {
  model: string;
  view_id?: number;
  mustDisableButtons?: boolean;
  formRef: RefObject<any>;
  onRefreshParentValues?: () => void;
  toolbar?: {
    action?: any[];
    print?: any[];
    relate?: any[];
  };
}

interface SaveDocumentResult {
  succeed: boolean;
  currentId?: number;
}

interface MenuItem {
  label: string;
  disabled?: boolean;
  items: any[];
}

export const useFormToolbarButtons = ({
  mustDisableButtons = false,
  formRef,
  onRefreshParentValues,
  model,
  view_id,
  toolbar: initialToolbar,
}: UseFormToolbarButtonsProps) => {
  const { t } = useLocale();
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;

  const { processAction } = contentRootContext || {};
  const { openRelate } = tabManagerContext || {};

  const [fetchedToolbar, setFetchedToolbar] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchToolbar] = useNetworkRequest(
    ConnectionProvider.getHandler().getToolbar,
  );

  // Use initialToolbar if provided, otherwise use fetchedToolbar
  const toolbar = initialToolbar || fetchedToolbar;

  const onFormSave = useCallback(async () => {
    return await formRef.current?.submitForm();
  }, [formRef]);

  const runAction = useCallback(
    (actionData: any) => {
      processAction?.({
        actionData,
        values: formRef.current?.getValues(),
        fields: formRef.current?.getFields(),
        context: formRef.current?.getContext(),
        onRefreshParentValues,
      });
    },
    [formRef, processAction, onRefreshParentValues],
  );

  const loadToolbarIfNeeded = useCallback(async () => {
    // If we have toolbar data from props or already fetched, use it
    if (
      initialToolbar ||
      fetchedToolbar?.action ||
      fetchedToolbar?.print ||
      fetchedToolbar?.relate
    ) {
      return toolbar;
    }

    try {
      setIsLoading(true);
      const toolbarData = await fetchToolbar({
        model,
        type: "form",
        id: view_id,
        context: formRef.current.getContext(),
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
    view_id,
    formRef,
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
    disabled: mustDisableButtons || isLoading || !formRef.current,
    placement: "bottomRight" as const,
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
    onItemClick: async (action: any) => {
      if (action) {
        const result = await saveDocument({ onFormSave });
        if (result.succeed) runAction(action);
      }
    },
  };

  const printButtonProps = {
    disabled: mustDisableButtons || isLoading || !formRef.current,
    placement: "bottomRight" as const,
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
    onItemClick: async (report: any) => {
      if (report) {
        const result = await saveDocument({ onFormSave });
        if (result.succeed) {
          runAction({
            ...report,
            datas: {
              ...(report.datas || {}),
              ids: [result.currentId as number],
            },
          });
        }
      }
    },
  };

  const relateButtonProps = {
    disabled: mustDisableButtons || isLoading || !formRef.current,
    placement: "bottomRight" as const,
    onRetrieveData: async () => {
      const currentToolbar = await loadToolbarIfNeeded();
      if (isLoading) {
        return [getLoadingMenuItem()];
      }
      return [
        {
          label: t("related"),
          items: (currentToolbar || toolbar)?.relate || [],
        },
      ];
    },
    onItemClick: async (relate: any) => {
      if (relate) {
        const result = await saveDocument({ onFormSave });
        if (result.succeed) {
          openRelate({
            relateData: relate,
            values: formRef.current?.getValues(),
            fields: formRef.current?.getFields(),
            action_id: relate.id,
            action_type: relate.type,
          });
        }
      }
    },
  };

  return {
    actionButtonProps,
    printButtonProps,
    relateButtonProps,
  };
};

export const saveDocument = async ({
  onFormSave,
}: {
  onFormSave?: () => Promise<{ succeed: boolean; id: number }>;
}): Promise<SaveDocumentResult> => {
  const result = await onFormSave?.();
  return result?.succeed
    ? { succeed: true, currentId: result.id }
    : { succeed: false, currentId: undefined };
};
