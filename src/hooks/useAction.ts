import { useRef, useState } from "react";
import { ConnectionProvider, FormView } from "..";
import { getViewsAndInitialView } from "@/helpers/navigationActionsHelper";
import { stringFormat, transformPlainMany2Ones } from "@/helpers/formHelper";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { parseContext } from "@gisce/ooui";
import { useConfigContext } from "@/context/ConfigContext";

export type ActionModalOpts = {
  model?: string;
  domain?: any;
  context: any;
  formView?: FormView;
  actionData?: any;
};

export const useAction = ({
  openAction,
  generateReport,
}: {
  openAction: (payload: any) => void;
  generateReport: (options: any) => Promise<void>;
}) => {
  const { globalValues } = useConfigContext();
  const onRefreshParentValues = useRef<any>([]);
  const [actionModalVisible, setActionModalVisible] = useState<boolean>(false);
  const [actionModalOptions, setActionModalOptions] = useState<ActionModalOpts>(
    {
      context: {},
    },
  );

  async function processAction({
    actionData,
    fields,
    values,
    context,
    onRefreshParentValues: onRefreshParentValuesFn,
  }: {
    actionData: any;
    fields: any;
    values: any;
    context?: any;
    onRefreshParentValues?: any;
  }) {
    const { type } = actionData;
    onRefreshParentValues.current.push(onRefreshParentValuesFn);

    if (type === "ir.actions.report.xml") {
      return await generateReport({
        reportData: actionData,
        fields,
        values,
        context,
      });
    } else if (type === "ir.actions.act_window") {
      return await runAction({ actionData, fields, values, context });
    } else if (type === "ir.actions.act_url") {
      window.open(
        stringFormat(actionData.url, { ...values, context }),
        "_blank",
      );
    } else {
      showErrorDialog(`${type} action not supported`);
      return {};
    }
  }

  async function runAction({
    actionData: _actionData,
    fields = {},
    values = {},
    context = {},
  }: {
    actionData: any;
    fields?: any;
    values?: any;
    context?: any;
  }) {
    let actionData = _actionData;

    if (!_actionData.res_model) {
      actionData = (
        await ConnectionProvider.getHandler().readObjects({
          model: "ir.actions.act_window",
          ids: [parseInt(_actionData.id)],
          context,
        })
      )[0];
    }

    const responseContext =
      typeof actionData?.context === "string"
        ? parseContext({
            context: actionData.context,
            fields,
            values: { ...values, ...globalValues },
          })
        : actionData.context;

    const mergedContext = {
      ...context,
      ...responseContext,
    };

    let parsedDomain = [];

    if (actionData.domain) {
      parsedDomain = await ConnectionProvider.getHandler().evalDomain({
        domain: actionData.domain,
        values: transformPlainMany2Ones({
          fields,
          values: { ...values, ...globalValues },
        }),
        fields,
        context: mergedContext,
      });
    }

    // -- Possible values for target property --
    // * new ==> modal
    // * current ==> new tab
    // * undefined ==> new tab
    if (actionData.target === "new") {
      const formView = (await ConnectionProvider.getHandler().getView({
        model: actionData.res_model,
        type: "form",
        id: actionData?.view_id?.[0] || undefined,
        context: mergedContext,
      })) as FormView;

      openActionModal({
        domain: parsedDomain,
        model: actionData.res_model,
        formView,
        context: mergedContext,
      });

      return {};
    } else {
      const { initialView, views } = await getViewsAndInitialView({
        model: actionData.res_model,
        context: mergedContext,
        view_mode: actionData.view_mode,
        views: actionData.views,
      });

      openAction?.({
        target: "current",
        context: mergedContext,
        domain: parsedDomain,
        model: actionData.res_model,
        views,
        title: actionData.name,
        initialView,
        action_id: actionData.id,
        action_type: actionData.type,
      });

      return { closeParent: true };
    }
  }

  function openActionModal({
    domain,
    model,
    formView,
    context,
    actionData,
  }: {
    domain: any;
    model: string;
    formView: FormView;
    context: any;
    actionData?: any;
  }) {
    if (actionModalVisible) {
      openNewActionModal({ domain, model, formView, context, actionData });
    } else {
      setActionModalOptions({ domain, model, context, formView, actionData });
      setActionModalVisible(true);
    }
  }

  async function openNewActionModal({
    domain,
    model,
    formView,
    context,
    actionData,
  }: {
    domain: any;
    model: string;
    formView: FormView;
    context: any;
    actionData?: any;
  }) {
    setActionModalOptions({
      domain: undefined,
      model: undefined,
      context: {},
      formView: undefined,
      actionData: undefined,
    });
    setActionModalVisible(false);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setActionModalOptions({ domain, model, context, formView, actionData });
    setActionModalVisible(true);
  }

  async function onFormModalSucceed() {
    callRefreshValues(onRefreshParentValues.current);
    onRefreshParentValues.current = [];
    setActionModalVisible(false);
    setActionModalOptions({
      domain: undefined,
      model: undefined,
      context: {},
      formView: undefined,
      actionData: undefined,
    });
  }

  async function onFormModalCancel() {
    callRefreshValues(onRefreshParentValues.current);
    onRefreshParentValues.current = [];
    setActionModalVisible(false);
    setActionModalOptions({
      domain: undefined,
      model: undefined,
      context: {},
      formView: undefined,
      actionData: undefined,
    });
  }

  return {
    processAction,
    actionModalVisible,
    actionModalOptions,
    setActionModalVisible,
    onFormModalSucceed,
    onFormModalCancel,
  };
};

const callRefreshValues = async (fns: any[]) => {
  for (let i = 0; i < fns.length; i++) {
    await fns?.[i]?.();
  }
};
