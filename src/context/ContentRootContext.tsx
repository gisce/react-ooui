import { FormView, GenerateReportOptions } from "@/types";
import React, {
  useContext,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { openBase64InNewTab, getMimeType } from "@/helpers/filesHelper";
import { parseContext } from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { Modal, Spin } from "antd";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { FormModal } from "@/widgets/modals/FormModal";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

export type ContentRootContextType = {
  processAction: ({
    actionData,
    fields,
    values,
    context,
  }: {
    actionData: any;
    fields: any;
    values: any;
    context?: any;
    onRefreshParentValues?: () => void;
  }) => Promise<any>;
  globalValues?: any;
};

type ActionModalOpts = {
  model?: string;
  domain?: any;
  context: any;
  formView?: FormView;
  actionData?: any;
};

export const ContentRootContext = React.createContext<ContentRootContextType | null>(
  null
);

type ContentRootProviderProps = {
  children: React.ReactNode;
  globalValues?: any;
};

const ContentRootProvider = (
  props: ContentRootProviderProps,
  ref: any
): any => {
  const { children, globalValues = {} } = props;
  const reportInProgressInterval = useRef<any>();
  const waitingForReport = useRef<boolean>();
  const [reportGenerating, setReportGenerating] = useState<boolean>(false);
  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { openAction } = tabManagerContext || {};
  const onRefreshParentValues = useRef<any>();
  const { t } = useContext(LocaleContext) as LocaleContextType;

  useImperativeHandle(ref, () => ({
    openActionModal,
  }));

  // Action modal state
  const [actionModalVisible, setActionModalVisible] = useState<boolean>(false);

  const [actionModalOptions, setActionModalOptions] = useState<ActionModalOpts>(
    {
      context: {},
    }
  );

  async function generateReport(options: GenerateReportOptions) {
    const { reportData, fields, values, context = {} } = options;

    const {
      context: reportContext,
      model,
      datas = {},
      report_name,
      type,
    } = reportData;

    if (type !== "ir.actions.report.xml") {
      showErrorDialog(`${type} action not supported`);
      return;
    }

    const { ids, ...datasource } = datas || {};

    let idsToExecute = ids;

    const reportContextParsed =
      typeof reportContext === "string"
        ? parseContext({
            context: reportContext,
            fields,
            values,
          })
        : reportContext;

    if (!idsToExecute) {
      const results = await ConnectionProvider.getHandler().searchAllIds({
        params: [],
        model: datasource.model || model,
        totalItems: 1,
        context: { ...context, ...reportContextParsed },
      });

      if (results.length === 0) {
        showErrorDialog("Nothing to print");
        return;
      }

      idsToExecute = results;
      datas.id = results[0];
    }

    try {
      const newReportId = await ConnectionProvider.getHandler().createReport({
        model,
        name: report_name,
        datas,
        ids: idsToExecute,
        context: { ...context, ...reportContextParsed },
      });

      setReportGenerating(true);

      waitingForReport.current = true;
      reportInProgressInterval.current = setInterval(() => {
        evaluateReportStatus(newReportId);
      }, 1000);
    } catch (err) {
      waitingForReport.current = false;
      clearInterval(reportInProgressInterval.current);
      showErrorDialog(err);
      setReportGenerating(false);
    }
  }

  async function evaluateReportStatus(id: any) {
    let reportState;
    try {
      reportState = await ConnectionProvider.getHandler().getReport({
        id,
      });
      if (reportState.state && waitingForReport.current === true) {
        waitingForReport.current = false;
        clearInterval(reportInProgressInterval.current);
        setReportGenerating(false);
        const fileType: any = await getMimeType(reportState.result);
        openBase64InNewTab(reportState.result, fileType.mime);
      }
    } catch (error) {
      waitingForReport.current = false;
      clearInterval(reportInProgressInterval.current);
      setReportGenerating(false);
      showErrorDialog(error.exception || error);
    }
  }

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
    onRefreshParentValues.current = onRefreshParentValuesFn;

    if (type === "ir.actions.report.xml") {
      return await generateReport({
        reportData: actionData,
        fields,
        values,
        context,
      });
    } else if (type === "ir.actions.act_window") {
      return await runAction({ actionData, fields, values, context });
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
      ...responseContext,
      ...context,
    };

    let parsedDomain = [];

    if (actionData.domain) {
      parsedDomain = await ConnectionProvider.getHandler().evalDomain({
        domain: actionData.domain,
        values: { ...values, ...globalValues },
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
      let initialView;
      const viewTypes = actionData.view_mode.split(",");
      const views = [];

      for (const viewType of viewTypes) {
        const viewData = await ConnectionProvider.getHandler().getView({
          model: actionData.res_model,
          type: viewType,
          context: mergedContext,
        });
        views.push([viewData.view_id, viewType]);
      }

      if (!actionData.view_id) {
        const type = actionData.view_mode.split(",")[0];

        const [retrievedViewId] = views.find(
          ([_, viewType]) => viewType === type
        )!;

        initialView = { id: retrievedViewId, type };
      } else {
        initialView = {
          id: actionData.view_id,
          type: actionData.view_mode.split(",")[0],
        };
      }

      openAction?.({
        target: "current",
        context: mergedContext,
        domain: parsedDomain,
        model: actionData.res_model,
        views: views,
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
    onRefreshParentValues.current?.();
    setActionModalVisible(false);
    setActionModalOptions({
      domain: undefined,
      model: undefined,
      context: {},
      formView: undefined,
      actionData: undefined,
    });
  }

  return (
    <>
      <ContentRootContext.Provider
        value={{
          processAction,
          globalValues,
        }}
      >
        <>
          {children}
          <Modal
            title={t("generatingReport")}
            visible={reportGenerating}
            footer={null}
            closable={false}
            centered
          >
            <Spin />
          </Modal>
          <FormModal
            buttonModal
            parentContext={actionModalOptions.context}
            model={actionModalOptions.model!}
            formView={actionModalOptions.formView}
            visible={actionModalVisible}
            onSubmitSucceed={onFormModalSucceed}
            onCancel={() => {
              onRefreshParentValues.current?.();
              setActionModalVisible(false);
              setActionModalOptions({
                domain: undefined,
                model: undefined,
                context: {},
                formView: undefined,
                actionData: undefined,
              });
            }}
            showFooter={false}
            actionDomain={actionModalOptions.domain}
            isMenuAction={actionModalOptions?.actionData !== undefined}
            actionData={actionModalOptions?.actionData}
          />
        </>
      </ContentRootContext.Provider>
    </>
  );
};

export default forwardRef(ContentRootProvider);
