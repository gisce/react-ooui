import { createRoot } from "react-dom/client";
import { AsyncConfirmModal } from "./AsyncConfirmModal";

export interface ConfirmConfig {
  title: string;
  content: React.ReactNode;
  onOk: () => Promise<void>;
  okText?: string;
  cancelText?: string;
  icon?: React.ReactNode;
  centered?: boolean;
}

export const asyncConfirm = (config: ConfirmConfig) => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container); // This creates the root instance.
  root.render(
    <AsyncConfirmModal
      {...config}
      onOk={async () => {
        try {
          await config.onOk(); // Execute the async confirm function
        } finally {
          root.unmount(); // Properly unmount using the root instance
          container.remove(); // Remove the container element
        }
      }}
    />,
  );

  return {
    destroy: () => {
      root.unmount(); // Use the root instance to unmount
      container.remove(); // Make sure to also remove the container
    },
  };
};
