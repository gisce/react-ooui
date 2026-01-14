import React, { useState, useEffect } from "react";
import { Form, ConfigContextProvider } from "@gisce/react-ooui";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { initializeFormMockProvider } from "./Form.mockProvider";

interface FormStoryProps {
  locale?: string;
  productId?: number;
}

const FormStory: React.FC<FormStoryProps> = ({ locale = "en_US", productId = 1 }) => {
  const [mockProviderReady, setMockProviderReady] = useState(false);

  useEffect(() => {
    initializeFormMockProvider();
    setMockProviderReady(true);
  }, []);

  if (!mockProviderReady) {
    return <div>Loading mock provider...</div>;
  }

  return (
    <NotificationProvider>
      <ConfigContextProvider
        locale={locale}
        erpFeatures={{}}
        userFeatures={{
          features: {},
          canWriteFeatureFlags: false,
        }}
        globalValues={{}}
        rootContext={{}}
        devMode={false}
        title={`Form Story Demo (${locale})`}
        treeMaxLimit={100}
      >
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            backgroundColor: "#f5f5f5",
            padding: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              padding: "20px",
              height: "100%",
              overflow: "auto",
            }}
          >
            <Form
              model="product.product"
              id={productId}
              showFooter={true}
              readOnly={false}
              rootForm={true}
              parentContext={{}}
            />
          </div>
        </div>
      </ConfigContextProvider>
    </NotificationProvider>
  );
};

// English locale (default)
export const Default = () => <FormStory />;

// Spanish locale for testing number localization
export const Spanish = () => <FormStory locale="es_ES" />;

// French locale for testing number localization
export const French = () => <FormStory locale="fr_FR" />;
