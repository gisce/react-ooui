import { useCallback, useContext, RefObject } from "react";
import { useLocale } from "@gisce/react-formiga-components";
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
  formRef: RefObject<any>;
  onRefreshParentValues?: () => void;
}

interface SaveDocumentResult {
  succeed: boolean;
  currentId?: number;
}

export const useFormToolbarButtons = ({
  toolbar,
  mustDisableButtons = false,
  formRef,
  onRefreshParentValues,
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
