import { parseError } from "@/helpers/errorHelper";
import {
  NotificationProps,
  NotificationType,
  useNotification,
} from "@gisce/react-formiga-components";
import { Interweave } from "interweave";

export const useErrorNotification = ({
  onButtonAction,
}: {
  onButtonAction?: (payload: any) => void;
}) => {
  const { open, destroy } = useNotification();

  const showErrorNotification = (error: any) => {
    // First we check if error has the structure of a NotificationProps
    if (error.type && error.body && error.title) {
      const errorData = {
        title: error.title,
        message: (
          <Interweave
            content={(error.body as string).replace(/\n/g, "<br />")}
          />
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

    if (
      (error.message && typeof error.message === "string") ||
      (error.exception && typeof error.exception === "string")
    ) {
      const parsedError = parseError(error.message || error.exception);
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

    if (typeof error === "string") {
      const errorData: NotificationProps = {
        type: "error",
        message: <Interweave content={error} />,
        title: "Error",
      };
      open(errorData);
      return;
    }

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
