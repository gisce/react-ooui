import React, { useState, useEffect } from "react";
import { Form, ConfigContextProvider } from "@gisce/react-ooui";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { initializeMockProvider, initializePaginatedMockProvider } from "./One2Many.mockProvider";

interface One2ManyStoryProps {
  paginated?: boolean;
}

const One2ManyStory: React.FC<One2ManyStoryProps> = ({ paginated = false }) => {
  const [mockProviderReady, setMockProviderReady] = useState(false);

  useEffect(() => {
    // Initialize the appropriate mock provider when component mounts
    paginated ? initializePaginatedMockProvider() : initializeMockProvider();
    setMockProviderReady(true);

    return () => {
      // Cleanup if needed
    };
  }, [paginated]);

  if (!mockProviderReady) {
    return <div>Loading mock provider...</div>;
  }

  return (
    <NotificationProvider>
      <ConfigContextProvider
        locale="en_US"
        erpFeatures={{}}
        userFeatures={{
          features: {
            "widget.one2many.enable_new_table": true,
          },
          canWriteFeatureFlags: false,
        }}
        globalValues={{}}
        rootContext={{}}
        devMode={false}
        title={`One2Many ${paginated ? 'Paginated' : 'Infinite'} Story Demo`}
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
              model="sale.order"
              id={1}
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

// Export the specific story variants
export const Infinite = () => <One2ManyStory paginated={false} />;
export const Paginated = () => <One2ManyStory paginated={true} />;
