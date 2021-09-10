import { FormView, GenerateReportOptions } from "@/types";
import React, { useContext, useRef, useState } from "react";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { openBase64InNewTab, getMimeType } from "@/helpers/filesHelper";
import { parseContext, parseDomain } from "ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { Modal, Spin } from "antd";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { FormModal } from "@/widgets/modals/FormModal";

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
  }) => void;
};

type ActionModalOpts = {
  model?: string;
  domain?: any;
  context: any;
  formView?: FormView;
};

export const ContentRootContext = React.createContext<ContentRootContextType | null>(
  null
);

type ContentRootProviderProps = {
  children: React.ReactNode;
};

const ContentRootProvider = (props: ContentRootProviderProps): any => {
  const { children } = props;
  const reportInProgressInterval = useRef<any>();
  const [reportGenerating, setReportGenerating] = useState<boolean>(false);
  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { openAction } = tabManagerContext || {};

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
      datas,
      report_name,
      type,
    } = reportData;

    if (type !== "ir.actions.report.xml") {
      showErrorDialog(`${type} action not supported`);
      return;
    }

    const { ids, ...datasource } = datas || {};

    let idsToExecute = ids;

    if (!idsToExecute) {
      const results = await ConnectionProvider.getHandler().searchAllIds({
        params: [],
        model: datasource.model || model,
        totalItems: 1,
      });

      if (results.length === 0) {
        showErrorDialog("Nothing to print");
        return;
      }

      idsToExecute = results;
      datas.id = results[0];
    }

    const reportContextParsed =
      typeof reportContext === "string"
        ? parseContext({
            context: reportContext,
            fields,
            values,
          })
        : reportContext;

    try {
      const newReportId = await ConnectionProvider.getHandler().createReport({
        model,
        name: report_name,
        datas,
        ids: idsToExecute,
        context: { ...context, ...reportContextParsed },
      });

      setReportGenerating(true);

      reportInProgressInterval.current = setInterval(() => {
        evaluateReportStatus(newReportId);
      }, 1000);
    } catch (err) {
      showErrorDialog(err);
      setReportGenerating(false);
      clearInterval(reportInProgressInterval.current);
    }
  }

  async function evaluateReportStatus(id: any) {
    let reportState;
    try {
      reportState = await ConnectionProvider.getHandler().getReport({
        id,
      });
      if (reportState.state) {
        clearInterval(reportInProgressInterval.current);
        setReportGenerating(false);
        const fileType: any = await getMimeType(reportState.result);
        openBase64InNewTab(reportState.result, fileType.mime);
      }
    } catch (error) {
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
  }: {
    actionData: any;
    fields: any;
    values: any;
    context?: any;
  }) {
    const { type } = actionData;

    if (type === "ir.actions.report.xml") {
      generateReport({
        reportData: actionData,
        fields,
        values,
        context,
      });
    } else if (type === "ir.actions.act_window") {
      runAction({ actionData, fields, values, context });
    } else {
      showErrorDialog(`${type} action not supported`);
    }
  }

  async function runAction({
    actionData,
    fields,
    values,
    context,
  }: {
    actionData: any;
    fields: any;
    values: any;
    context?: any;
  }) {
    const responseContext = parseContext({
      context: actionData.context,
      fields,
      values,
    });

    const mergedContext = {
      ...responseContext,
      ...context,
    };

    const parsedDomain = actionData.domain
      ? parseDomain({
          domainValue: actionData.domain,
          values: values,
          fields,
        })
      : [];

    // -- Possible values for target property --
    // * new ==> modal
    // * current ==> new tab
    // * undefined ==> new tab
    if (actionData.target === "new") {
      const formView = (await ConnectionProvider.getHandler().getView({
        model: actionData.res_model,
        type: "form",
        context,
      })) as FormView;

      openActionModal({
        domain: parsedDomain,
        model: actionData.res_model,
        formView,
        context: mergedContext,
      });
    } else {
      openAction?.({
        target: "current",
        context: mergedContext,
        domain: parsedDomain,
        model: actionData.res_model,
        views: actionData.view_mode
          .split(",")
          .map((view: string) => [false, view]),
        title: actionData.name,
      });
    }
  }

  function openActionModal({
    domain,
    model,
    formView,
    context,
  }: {
    domain: any;
    model: string;
    formView: FormView;
    context: any;
  }) {
    if (actionModalVisible) {
      openNewActionModal({ domain, model, formView, context });
    } else {
      setActionModalOptions({ domain, model, context, formView });
      setActionModalVisible(true);
    }
  }

  async function openNewActionModal({
    domain,
    model,
    formView,
    context,
  }: {
    domain: any;
    model: string;
    formView: FormView;
    context: any;
  }) {
    setActionModalOptions({
      domain: undefined,
      model: undefined,
      context: {},
      formView: undefined,
    });
    setActionModalVisible(false);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setActionModalOptions({ domain, model, context, formView });
    setActionModalVisible(true);
  }

  async function onFormModalSucceed() {
    setActionModalVisible(false);
    setActionModalOptions({
      domain: undefined,
      model: undefined,
      context: {},
      formView: undefined,
    });
  }

  return (
    <>
      <ContentRootContext.Provider
        value={{
          processAction,
        }}
      >
        <>
          {children}
          <Modal
            title={"Generating report..."}
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
              setActionModalVisible(false);
              setActionModalOptions({
                domain: undefined,
                model: undefined,
                context: {},
                formView: undefined,
              });
            }}
            showFooter={false}
            actionDomain={actionModalOptions.domain}
          />
        </>
      </ContentRootContext.Provider>
    </>
  );
};

export default ContentRootProvider;
