import { parseError } from "@/helpers/errorHelper";
import { Alert } from "antd";
import { Interweave } from "interweave";
import { JSONStringify } from "json-with-bigint";

export const ErrorAlert = ({
  error,
  className,
}: {
  error: any;
  className?: string;
}) => {
  let messageContent;
  let messageType = "error";

  if (
    typeof error === "string" &&
    error.indexOf(" -- ") !== -1 &&
    error.indexOf("\n\n") !== -1
  ) {
    const { message, type, title } = parseError(error);
    messageContent = (
      <Interweave
        content={`${title}<br />${message.replace(/\n/g, "<br />")}`}
      />
    );
    messageType = type;
  } else {
    messageContent = error.message
      ? JSONStringify(error.message)
      : JSONStringify(error);
  }

  console.error(error);

  return (
    <Alert
      className={className}
      message={messageContent}
      type={messageType as any}
      banner
    />
  );
};
