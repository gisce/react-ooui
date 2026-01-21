import React, { useState, useEffect } from "react";
import { Form, ConfigContextProvider } from "@gisce/react-ooui";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { initializeBigIntFormMockProvider } from "./BigIntForm.mockProvider";
import { BIGINT_ID } from "./BigIntForm.mocks";

/**
 * BigInt Integer Field Test Stories
 *
 * These stories test the behavior of integer fields when receiving
 * BigInt values (values > Number.MAX_SAFE_INTEGER).
 *
 * The expected bug behavior:
 * 1. parseFloat() loses precision with large numbers
 * 2. Math.trunc() throws error with BigInt type
 * 3. The displayed value is incorrect or the form crashes
 *
 * After fix:
 * - BigInt values should display correctly as strings
 * - No precision loss should occur
 */

interface BigIntFormStoryProps {
  locale?: string;
}

const BigIntFormStory: React.FC<BigIntFormStoryProps> = ({ locale = "en_US" }) => {
  const [mockProviderReady, setMockProviderReady] = useState(false);

  useEffect(() => {
    initializeBigIntFormMockProvider();
    setMockProviderReady(true);
  }, []);

  if (!mockProviderReady) {
    return <div>Loading mock provider...</div>;
  }

  // Pass the BigInt ID to the form
  // This simulates how the server returns BigInt values via json-with-bigint
  const bigIntId = BigInt(BIGINT_ID);

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
        title={`BigInt Form Test (${locale})`}
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
              model="test.bigint"
              id={bigIntId}
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

// Default story with BigInt integer field
export const BigIntIntegerField = () => <BigIntFormStory />;

// Spanish locale variant
export const BigIntIntegerFieldSpanish = () => <BigIntFormStory locale="es_ES" />;

export default {
  title: "BigIntForm",
  component: BigIntFormStory,
};
