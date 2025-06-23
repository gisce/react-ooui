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
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";

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
  const { openRelate, openAction } = tabManagerContext || {};

  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  const [getView, cancelGetViewRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getView,
  );
  const [getToolbar, cancelGetToolbarRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getToolbar,
  );
  const [getFields, cancelGetFieldsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getFields,
  );
  const [readObjects, cancelReadObjectsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );

  const getToolbarEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_GET_TOOLBAR,
  );

  const cancelRequests = useCallback(() => {
    cancelGetViewRequest();
    cancelGetToolbarRequest();
    cancelGetFieldsRequest();
    cancelReadObjectsRequest();
  }, [
    cancelGetViewRequest,
    cancelGetToolbarRequest,
    cancelGetFieldsRequest,
    cancelReadObjectsRequest,
  ]);

  const fetchData = useCallback(async (): Promise<
    ActionRelatePrint | undefined
  > => {
    let fields;
    let toolbar;

    try {
      if (getToolbarEnabled) {
        // Get fields and toolbar separately
        const [viewData, newToolbar] = await Promise.all([
          getView({
            model,
            type: "form",
            context,
          }),
          getToolbar({
            model,
            type: "form",
            context,
          }),
        ]);
        toolbar = newToolbar;
        fields = viewData.fields;
        setFormView({ ...viewData, toolbar } as FormView);
      } else {
        // Get everything through getView
        const formView = (await getView({
          model,
          type: "form",
          context,
        })) as FormView;
        setFormView(formView);
        fields = formView.fields;
        toolbar = formView.toolbar;
      }

      // We get all the fields that are used in context or domains of each action
      // In order to get the data of the target record
      const fieldsToRetrieve = getFieldsToRetrieve({ fields, toolbar });

      let values = {};

      if (fieldsToRetrieve.length > 0) {
        const objectValues = (
          await readObjects({
            model,
            ids: [id],
            fieldsToRetrieve,
            context,
          })
        )?.[0];
        values = { ...objectValues };
      }
      values = { ...processValues(values, fields), active_id: id };
      setTargetValues(values);

      if (!toolbar) {
        return undefined;
      }

      return {
        actionItems: toolbar.action,
        relateItems: toolbar.relate,
        printItems: toolbar.print,
      };
    } catch (error) {
      console.error("Error in Many2oneSuffix fetchData:", error);
      return undefined;
    }
  }, [
    context,
    getView,
    getToolbar,
    getFields,
    id,
    model,
    readObjects,
    getToolbarEnabled,
  ]);

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
      case "open":
        openAction({
          domain: [["id", "=", id]],
          context,
          model,
          res_id: id,
          title: formView?.title || "",
          views: [[formView?.view_id, "form"]],
          target: "current",
          initialView: { type: "form" },
          action_id: -1,
          action_type: "ir.actions.act_window",
        });
        break;
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

export const getFieldsToRetrieve = ({
  fields,
  toolbar,
}: {
  fields: any;
  toolbar: any;
}): string[] => {
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

  return [...new Set(extractedFields.filter((field) => field in fields))];
};
