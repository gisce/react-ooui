import { useCallback, useContext } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import { useActionViewContext } from "@/context/ActionViewContext";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";

interface UseFormToolbarButtonsProps {
  toolbar: any;
  mustDisableButtons?: boolean;
}

interface SaveDocumentResult {
  succeed: boolean;
  currentId?: number;
}

export const useFormToolbarButtons = ({
  toolbar,
  mustDisableButtons = false,
}: UseFormToolbarButtonsProps) => {
  const { t } = useLocale();
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;

  const { formRef, onFormSave } = useActionViewContext();
  const { processAction } = contentRootContext || {};
  const { openRelate } = tabManagerContext || {};

  const runAction = useCallback(
    (actionData: any) => {
      processAction?.({
        actionData,
        values: (formRef.current as any).getValues(),
        fields: (formRef.current as any).getFields(),
        context: (formRef.current as any).getContext(),
        onRefreshParentValues: () => (formRef.current as any).fetchValues(),
      });
    },
    [formRef, processAction],
  );

  const actionButtonProps = {
    disabled: mustDisableButtons,
    placement: "bottomRight" as const,
    onRetrieveData: async () => [
      { label: t("actions"), items: toolbar?.action },
    ],
    onItemClick: async (action: any) => {
      if (action) {
        const result = await saveDocument({ onFormSave });
        if (result.succeed) runAction(action);
      }
    },
  };

  const printButtonProps = {
    disabled: mustDisableButtons,
    placement: "bottomRight" as const,
    onRetrieveData: async () => [
      { label: t("reports"), items: toolbar?.print },
    ],
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
    disabled: mustDisableButtons,
    placement: "bottomRight" as const,
    onRetrieveData: async () => [
      { label: t("related"), items: toolbar?.relate },
    ],
    onItemClick: async (relate: any) => {
      if (relate) {
        const result = await saveDocument({ onFormSave });
        if (result.succeed) {
          openRelate({
            relateData: relate,
            values: (formRef.current as any).getValues(),
            fields: (formRef.current as any).getFields(),
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
