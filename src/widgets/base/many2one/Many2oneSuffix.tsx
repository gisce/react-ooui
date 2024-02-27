import { useCallback, useState } from "react";
import { FormView } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import { processValues } from "@/helpers/formHelper";
import { parseContextFields, parseDomainFields } from "@gisce/ooui";
import {
  ActionRelatePrint,
  Many2OneSuffixOnItemClickOpts,
  Many2oneSuffixOoui,
} from "./Many2oneSuffixOoui";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useNavigation } from "@/context/RootContext";

type Props = {
  id: number;
  model: string;
  context?: any;
};

export const Many2oneSuffix = (props: Props) => {
  const { id, model, context = {} } = props;
  const [formView, setFormView] = useState<FormView>();
  const [targetValues, setTargetValues] = useState<any>();

  const { openRelate, processAction } = useNavigation();

  const [getView, cancelGetViewRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getView,
  );
  const [readObjects, cancelReadObjectsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );

  const cancelRequests = useCallback(() => {
    cancelGetViewRequest();
    cancelReadObjectsRequest();
  }, [cancelGetViewRequest, cancelReadObjectsRequest]);

  const fetchData = useCallback(async (): Promise<
    ActionRelatePrint | undefined
  > => {
    const formView = (await getView({
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
      const objectValues = (
        await readObjects({
          model,
          ids: [id],
          fieldsToRetrieve: fields,
          context,
        })
      )?.[0];
      values = { ...objectValues };
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
  }, [context, getView, id, model, readObjects]);

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
      onOpenChange={(open) => {
        if (!open) {
          cancelRequests();
        }
      }}
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
