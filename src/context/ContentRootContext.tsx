import { GenerateReportOptions } from "@/types";
import React, { useRef, useState } from "react";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { openBase64InNewTab, getMimeType } from "@/helpers/filesHelper";
import { parseContext } from "ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { Modal, Spin } from "antd";

export type ContentRootContextType = {
  generateReport: (options: GenerateReportOptions) => Promise<void>;
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

  async function generateReport(options: GenerateReportOptions) {
    const {
      reportData,
      ids: explicitIds,
      fields,
      values,
      context = {},
    } = options;

    const {
      context: reportContext,
      model,
      datas,
      report_name,
      type,
    } = reportData;

    if (type !== "ir.actions.report.xml") {
      showErrorDialog(`${type} actions not supported`);
      return;
    }

    const { ids, ...datasource } = datas || {};

    let idsToExecute = explicitIds || ids;

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

  return (
    <>
      <ContentRootContext.Provider
        value={{
          generateReport,
        }}
      >
        {children}
      </ContentRootContext.Provider>
      <Modal
        title={"Generating report..."}
        visible={reportGenerating}
        footer={null}
        closable={false}
        centered
      >
        <Spin />
      </Modal>
    </>
  );
};

export default ContentRootProvider;
