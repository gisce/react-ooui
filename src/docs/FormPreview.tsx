import { useEffect, useState, memo, useCallback, useMemo } from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import {
  NotificationProvider,
  type Locale,
} from "@gisce/react-formiga-components";
import { ConfigContextProvider } from "../context/ConfigContext";
import { ContentRootContext } from "../context/ContentRootContext";
import { TabManagerContext } from "../context/TabManagerContext";
import Form from "../widgets/views/Form";
import { createDocsMockProvider } from "./createDocsMockProvider";
import type { FormPreviewConfig, MockViewDefinition } from "./types";

// Mock processAction for documentation previews
const mockProcessAction = async () => {
  console.log("[Docs Preview] Action triggered (mock)");
  return null;
};

// Mock tab manager context for Many2one folder button etc.
const mockTabManagerContext = {
  openAction: (action: any) => {
    console.log("[Docs Preview] openAction called:", action);
  },
  openRelate: (params: any) => {
    console.log("[Docs Preview] openRelate called:", params);
  },
  openDefaultActionForModel: (params: any) => {
    console.log("[Docs Preview] openDefaultActionForModel called:", params);
  },
  openShortcut: (shortcut: any) => {
    console.log("[Docs Preview] openShortcut called:", shortcut);
  },
  activeKey: "docs-preview",
  onChangeTab: () => {},
  onRemoveTab: () => {},
  onReorderTabs: () => {},
  tabs: [],
};

interface FormPreviewProps extends FormPreviewConfig {
  height?: number | string;
  showFooter?: boolean;
  locale?: Locale;
}

const FormPreviewInner = memo(function FormPreviewInner({
  arch,
  fields,
  values,
  model = "docs.preview",
  relatedModels = {},
  readOnly = true,
  locale = "en_US",
  height,
  showFooter = false,
}: FormPreviewProps) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizedArch = useMemo(() => {
    return arch.includes("<?xml") ? arch : `<?xml version="1.0"?>\n${arch}`;
  }, [arch]);

  const initializeMockProvider = useCallback(() => {
    try {
      const viewDefinition: MockViewDefinition = {
        view_id: 1,
        type: "form",
        arch: normalizedArch,
        fields,
      };

      createDocsMockProvider({
        model,
        view: viewDefinition,
        records: [{ id: 1, ...values }],
        relatedModels,
      });

      setReady(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to initialize mock provider",
      );
    }
  }, [normalizedArch, fields, values, model, relatedModels]);

  useEffect(() => {
    initializeMockProvider();
  }, [initializeMockProvider]);

  if (error) {
    return (
      <div
        style={{
          color: "red",
          padding: 16,
          border: "1px solid red",
          borderRadius: 4,
        }}
      >
        Error: {error}
      </div>
    );
  }

  if (!ready) {
    return <div style={{ padding: 16, color: "#666" }}>Loading preview...</div>;
  }

  return (
    <ErrorBoundary>
      <NotificationProvider>
        <ConfigContextProvider
          locale={locale}
          erpFeatures={{}}
          userFeatures={{ features: {}, canWriteFeatureFlags: false }}
          globalValues={{}}
          rootContext={{}}
          devMode={false}
          title="Documentation Preview"
          treeMaxLimit={100}
        >
          <TabManagerContext.Provider value={mockTabManagerContext}>
            <ContentRootContext.Provider
              value={{ processAction: mockProcessAction, globalValues: {} }}
            >
              <div style={{ height: height || "auto" }}>
                <Form
                  model={model}
                  id={1}
                  showFooter={showFooter}
                  readOnly={readOnly}
                  rootForm={true}
                  parentContext={{}}
                />
              </div>
            </ContentRootContext.Provider>
          </TabManagerContext.Provider>
        </ConfigContextProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
});

export const FormPreview = FormPreviewInner;
