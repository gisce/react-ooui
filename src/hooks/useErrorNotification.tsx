import { parseError } from "@/helpers/errorHelper";
import {
  NotificationProps,
  NotificationType,
  useNotification,
} from "@gisce/react-formiga-components";
import { Interweave } from "interweave";

// Type for the parameter of showErrorNotification
export type ShowErrorNotificationArg =
  | { type: NotificationType; title: string; body?: string }
  | { message?: string; exception?: string }
  | string
  | Record<string, any>;

export const useErrorNotification = ({
  onButtonAction,
}: {
  onButtonAction?: (payload: any) => void;
}) => {
  const { open, destroy } = useNotification();

  const showErrorNotification = (error: ShowErrorNotificationArg) => {
    // Type guard for Notification-like error
    if (
      typeof error === "object" &&
      error !== null &&
      "type" in error &&
      "title" in error
    ) {
      const errorData = {
        title: error.title,
        message: error.body ? (
          <Interweave
            content={(error.body as string).replace(/\n/g, "<br />")}
          />
        ) : (
          ""
        ),
        type: (
          ["success", "error", "info", "warning"] as NotificationType[]
        ).includes(error.type!)
          ? error.type!
          : "info",
        onButtonClick: (payload: any) => {
          onButtonAction?.(payload);
          destroy();
        },
      };
      open(errorData);
      return;
    }

    // Type guard for error with message/exception
    if (
      typeof error === "object" &&
      error !== null &&
      (typeof (error as any).message === "string" ||
        typeof (error as any).exception === "string")
    ) {
      const parsedError = parseError(
        (error as any).message || (error as any).exception,
      );
      const errorData: NotificationProps = {
        type: "error",
        message: (
          <Interweave content={parsedError.message.replace(/\n/g, "<br />")} />
        ),
        title: parsedError.title,
      };
      open(errorData);
      return;
    }

    // String error
    if (typeof error === "string") {
      const errorData: NotificationProps = {
        type: "error",
        message: <Interweave content={error} />,
        title: "Error",
      };
      open(errorData);
      return;
    }

    // Fallback
    const errorData: NotificationProps = {
      type: "error",
      message: <Interweave content={JSON.stringify(error)} />,
      title: "Error",
    };
    open(errorData);
  };

  return {
    showErrorNotification,
    destroyErrorNotification: destroy,
  };
};
