import React, { useState, useEffect } from "react";
import { 
  Form, 
  ConfigContextProvider,
  ConnectionProvider
} from "@gisce/react-ooui";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { initializeMockProvider } from "./One2Many.mockProvider";

export const Infinite = () => {
  const [mockProviderReady, setMockProviderReady] = useState(false);

  useEffect(() => {
    // Initialize the mock provider when component mounts
    console.log("Initializing mock provider for One2Many story");
    const provider = initializeMockProvider();
    setMockProviderReady(true);
    console.log("Mock provider initialized successfully");
    
    return () => {
      // Cleanup if needed
      console.log("Cleaning up mock provider");
    };
  }, []);

  if (!mockProviderReady) {
    return <div>Loading mock provider...</div>;
  }

  return (
    <NotificationProvider>
      <ConfigContextProvider
        locale="en_US"
        erpFeatures={{}}
        userFeatures={{ features: {}, canWriteFeatureFlags: false }}
        globalValues={{}}
        rootContext={{}}
        devMode={false}
        title="One2Many Story Demo"
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