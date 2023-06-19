import { parseError } from "@/helpers/errorHelper";
import { Alert } from "antd";
import React from "react";
import { Interweave } from "interweave";

export const ErrorAlert = ({
  error,
  className,
}: {
  error: any;
  className: string;
}) => {
  let messageContent;
  let messageType = "error";

  if (
    typeof error === "string" &&
    error.indexOf(" -- ") !== -1 &&
    error.indexOf("\n\n") !== -1
  ) {
    const { message, type, title } = parseError(error);
    messageContent = <Interweave content={`${title}<br />${message}`} />;
    messageType = type;
  } else {
    messageContent = error.message
      ? JSON.stringify(error.message)
      : JSON.stringify(error);
  }
  return (
    <Alert
      className={className}
      message={messageContent}
      type={messageType as any}
      banner
    />
  );
};
