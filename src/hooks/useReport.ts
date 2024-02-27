import { useCallback, useEffect, useRef, useState } from "react";
import { ConnectionProvider } from "..";
import {
  getMimeType,
  openBase64InNewTab,
} from "@gisce/react-formiga-components";
import showErrorDialog from "@/ui/ActionErrorDialog";
import { GenerateReportOptions } from "@/types";
import { parseContext } from "@gisce/ooui";

interface ReportContext {
  context: string;
  model: string;
  datas?: Record<string, any>;
  report_name: string;
  type: string;
}

export const useReport = () => {
  const reportInProgressInterval = useRef<any>(null);
  const waitingForReport = useRef<boolean>(false);
  const [reportGenerating, setReportGenerating] = useState<boolean>(false);

  const clearReportInterval = useCallback(() => {
    if (reportInProgressInterval.current) {
      clearInterval(reportInProgressInterval.current);
      reportInProgressInterval.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      clearReportInterval();
    };
  }, [clearReportInterval]);

  const evaluateReportStatus = useCallback(
    async (id: number) => {
      try {
        const reportState = await ConnectionProvider.getHandler().getReport({
          id,
        });
        if (reportState.state && waitingForReport.current) {
          waitingForReport.current = false;
          clearReportInterval();
          setReportGenerating(false);
          const fileType = await getMimeType(reportState.result);
          openBase64InNewTab(reportState.result, fileType.mime);
        }
      } catch (error) {
        waitingForReport.current = false;
        clearReportInterval();
        setReportGenerating(false);
        showErrorDialog(error.exception || error);
      }
    },
    [clearReportInterval],
  );

  const generateReport = useCallback(
    async (options: GenerateReportOptions) => {
      const { reportData, fields, values, context = {} } = options;
      const {
        context: reportContext,
        model,
        datas = {},
        report_name,
        type,
      } = reportData as ReportContext;

      if (type !== "ir.actions.report.xml") {
        showErrorDialog(`${type} action not supported`);
        return;
      }

      const idsToExecute = datas.ids || [];

      const reportContextParsed =
        typeof reportContext === "string"
          ? parseContext({ context: reportContext, fields, values })
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
        waitingForReport.current = true;
        reportInProgressInterval.current = setInterval(async () => {
          await evaluateReportStatus(newReportId);
        }, 1000);
      } catch (err) {
        waitingForReport.current = false;
        clearReportInterval();
        showErrorDialog(err);
        setReportGenerating(false);
      }
    },
    [clearReportInterval, evaluateReportStatus],
  );

  return {
    reportGenerating,
    generateReport,
  };
};
