import { useCallback, useContext, useState } from "react";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { FormView } from "@/types";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import ConnectionProvider from "@/ConnectionProvider";
import { processValues } from "@/helpers/formHelper";
import { parseContextFields, parseDomainFields } from "@gisce/ooui";
import {
  ActionRelatePrint,
  Many2OneSuffixOnItemClickOpts,
  Many2oneSuffixOoui,
} from "./Many2oneSuffixOoui";

type Props = {
  id: number;
  model: string;
  context?: any;
};

export const Many2oneSuffix = (props: Props) => {
  const { id, model, context = {} } = props;
  const [formView, setFormView] = useState<FormView>();
  const [targetValues, setTargetValues] = useState<any>();

  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { openRelate } = tabManagerContext || {};

  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  const fetchData = useCallback(async (): Promise<
    ActionRelatePrint | undefined
  > => {
    const formView = (await ConnectionProvider.getHandler().getView({
      model,
      type: "form",
      context,
    })) as FormView;
    setFormView(formView);

    // We get all the fields that are used in context or domains of each action
    // In order to get the data of the target record
    const fields = getFieldsToRetrieve(formView);

    let values = {};

    if (fields.length > 0) {
      values = (
        await ConnectionProvider.getHandler().readObjects({
          model,
          ids: [id],
          fieldsToRetrieve: fields,
          context,
        })
      )[0];
    }
    values = { ...processValues(values, fields), active_id: id };
    setTargetValues(values);

    if (!formView || !formView.toolbar) {
      return undefined;
    }

    return {
      actionItems: formView.toolbar.action,
      relateItems: formView.toolbar.relate,
      printItems: formView.toolbar.print,
    };
  }, [context, id, model]);

  // If there is no id (no record attached to the Many2one), we don't show the suffix
  if (!id) {
    return null;
  }

  function handleMenuClick({ item, type }: Many2OneSuffixOnItemClickOpts) {
    const commonParams = {
      values: targetValues,
      fields: formView!.fields,
    };

    switch (type) {
      case "action":
        processAction?.({
          actionData: item,
          context: { active_id: id, active_ids: [id] },
          ...commonParams,
        });
        break;

      case "print":
        processAction?.({
          actionData: {
            ...item,
            datas: { ...item.datas, ids: [id] },
          },
          ...commonParams,
        });
        break;

      case "relate":
        openRelate({
          relateData: item,
          action_id: item.id as number,
          action_type: item.type!,
          ...commonParams,
        });
        break;
    }
  }

  return (
    <Many2oneSuffixOoui
      onRetrieveData={fetchData}
      onItemClick={handleMenuClick}
    />
  );
};

export const getFieldsToRetrieve = (formView: FormView): string[] => {
  const { toolbar } = formView;
  const fieldNames = ["action", "relate", "print"];

  const extractedFields = fieldNames.flatMap((fieldName) => {
    const toolbarField = toolbar[fieldName];
    return (
      toolbarField?.flatMap((item: any) => {
        const fields = [];
        if ("context" in item) fields.push(...parseContextFields(item.context));
        if ("domain" in item) fields.push(...parseDomainFields(item.domain));
        return fields;
      }) || []
    );
  });

  return [
    ...new Set(extractedFields.filter((field) => field in formView.fields)),
  ];
};
