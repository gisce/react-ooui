import { FormView, GenerateReportOptions, ViewType } from "@/types";
import React, {
  useContext,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { openBase64InNewTab, getMimeType } from "@/helpers/filesHelper";
import { parseContext } from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { Modal, Spin } from "antd";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { FormModal } from "@/widgets/modals/FormModal";
import { useLocale } from "@gisce/react-formiga-components";
import { transformPlainMany2Ones, stringFormat } from "@/helpers/formHelper";
import { useFeatureData } from "./ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import {
  ACTION_TYPE_REPORT,
  ACTION_TYPE_WINDOW,
  ACTION_TYPE_URL,
} from "@/models/constants";

export type ContentRootContextType = {
  processAction: ({
    actionData,
    fields,
    values,
    context,
  }: {
    actionData: any;
    fields?: any;
    values?: any;
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

export const ContentRootContext =
  React.createContext<ContentRootContextType | null>(null);

type ContentRootProviderProps = {
  children: React.ReactNode;
  globalValues?: any;
};

const callRefreshValues = async (fns: any[]) => {
  for (let i = 0; i < fns.length; i++) {
    await fns?.[i]?.();
  }
};

const ContentRootProvider = (
  props: ContentRootProviderProps,
  ref: any,
): any => {
  const { children, globalValues = {} } = props;
  const reportInProgressInterval = useRef<any>();
  const waitingForReport = useRef<boolean>();
  const [reportGenerating, setReportGenerating] = useState<boolean>(false);
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { openAction } = tabManagerContext || {};
  const onRefreshParentValues = useRef<any>([]);
  const { t } = useLocale();
  const { showErrorNotification } = useErrorNotification();
  const loggableFeature = useFeatureData(
    ErpFeatureKeys.FEATURE_LOGGABLE_ACTIONS,
  );
  const [logAction, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().logAction,
  );

  useEffect(() => {
    return () => {
      cancelRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    openActionModal,
    processAction,
  }));

  // Action modal state
  const [actionModalVisible, setActionModalVisible] = useState<boolean>(false);

  const [actionModalOptions, setActionModalOptions] = useState<ActionModalOpts>(
    {
      context: {},
    },
  );

  async function generateReport(options: GenerateReportOptions) {
    const { reportData, fields, values, context = {} } = options;

    const {
      context: reportContext,
      model,
      datas = {},
      report_name,
      type,
      id: reportId,
    } = reportData;

    if (type !== ACTION_TYPE_REPORT) {
      showErrorNotification({
        type: "error",
        title: "Error",
        body: `${type} action not supported`,
      });
      return;
    }

    const { ids } = datas || {};

    const idsToExecute = ids || [];

    const reportContextParsed =
      typeof reportContext === "string"
        ? parseContext({
            context: reportContext,
            fields,
            values,
          })
        : reportContext;

    try {
      if (
        loggableFeature?.isEnabled &&
        (loggableFeature?.params?.types || []).includes(type)
      ) {
        try {
          logAction({
            action_type: type,
            action_id: reportId,
            context,
          });
        } catch (error) {
          console.error(error);
        }
      }

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
      showErrorNotification(err);
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
      showErrorNotification(error.exception || error);
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
    fields?: any;
    values?: any;
    context?: any;
    onRefreshParentValues?: any;
  }) {
    const { type } = actionData;
    if (onRefreshParentValuesFn) {
      onRefreshParentValues.current.push(onRefreshParentValuesFn);
    }

    if (type === ACTION_TYPE_REPORT) {
      return await generateReport({
        reportData: actionData,
        fields,
        values,
        context,
      });
    } else if (type === ACTION_TYPE_WINDOW) {
      return await runAction({ actionData, fields, values, context });
    } else if (type === ACTION_TYPE_URL) {
      window.open(
        stringFormat(actionData.url, { ...values, context }),
        "_blank",
      );
    } else {
      showErrorNotification({
        type: "error",
        title: "Error",
        body: `${type} action not supported`,
      });
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
          model: ACTION_TYPE_WINDOW,
          ids: [parseInt(_actionData.id)],
          context,
        })
      )[0];
    }

    const rawContext = actionData.context;
    const responseContext =
      typeof actionData?.context === "string"
        ? parseContext({
            context: actionData.context,
            fields,
            values: { ...values, ...globalValues },
          })
        : actionData?.context || {};

    const mergedContext = {
      ...context,
      ...responseContext,
    };

    let parsedDomain = [];

    const rawDomain = actionData.domain;
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
        actionData,
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
        res_id: actionData.res_id,
        actionRawData: {
          context: rawContext,
          domain: rawDomain,
          fields,
          values,
        },
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
    const { type, id } = actionData || {};

    if (
      loggableFeature?.isEnabled &&
      (loggableFeature?.params?.types || []).includes(type)
    ) {
      try {
        logAction({
          action_type: type,
          action_id: id,
          context,
        });
      } catch (error) {
        console.error(error);
      }
    }

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
            zIndex={9999}
            open={reportGenerating}
            footer={null}
            closable={false}
            centered
            maskClosable={false}
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

async function getViewsAndInitialView({
  views,
  view_mode,
  model,
  context,
  view_id,
}: {
  views: any[];
  view_mode: string;
  model: string;
  context: any;
  view_id?: number;
}) {
  const retriedViewData = [];
  let initialView;

  if (views) {
    for (const view of views) {
      const viewData = await ConnectionProvider.getHandler().getView({
        model,
        type: view[1],
        id: view[0],
        context,
      });
      retriedViewData.push([viewData.view_id, view[1]]);
    }
  } else {
    const viewTypes = view_mode.split(",");
    for (const viewType of viewTypes) {
      const viewData = await ConnectionProvider.getHandler().getView({
        model,
        type: viewType as ViewType,
        context,
      });
      retriedViewData.push([viewData.view_id, viewType]);
    }
  }
  if (views && views.length > 0) {
    const [id, type] = views[0];
    initialView = {
      id,
      type,
    };
  } else if (!view_id) {
    const type = view_mode.split(",")[0];
    const [retrievedViewId] = retriedViewData.find(
      ([_, viewType]) => viewType === type,
    )!;
    initialView = { id: retrievedViewId, type };
  } else {
    initialView = {
      id: view_id,
      type: view_mode.split(",")[0],
    };
  }

  return { views: retriedViewData, initialView };
}

export default forwardRef(ContentRootProvider);
