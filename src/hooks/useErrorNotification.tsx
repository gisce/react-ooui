import { parseError } from "@/helpers/errorHelper";
import {
  Icon,
  NotificationButton,
  NotificationType,
  useNotification,
} from "@gisce/react-formiga-components";
import { Interweave } from "interweave";
import { Modal, Button, Space, Row } from "antd";

// Type for the parameter of showErrorNotification
export type ShowErrorNotificationArg =
  | {
      type: NotificationType;
      title: string;
      body?: string;
      buttons?: NotificationButton[];
    }
  | { message?: string; exception?: string }
  | string
  | Record<string, any>;

export const useErrorNotification = ({
  onButtonAction,
}: {
  onButtonAction?: (payload: any) => void;
} = {}) => {
  const { open, destroy } = useNotification();

  const showErrorNotification = (error: ShowErrorNotificationArg) => {
    // Type guard for Notification-like error
    if (
      typeof error === "object" &&
      error !== null &&
      "type" in error &&
      "title" in error
    ) {
      const type = (
        ["success", "error", "info", "warning"] as NotificationType[]
      ).includes(error.type!)
        ? error.type!
        : "info";

      const content = error.body ? (
        <Interweave content={(error.body as string).replace(/\n/g, "<br />")} />
      ) : (
        ""
      );

      // Show modal for warnings and errors
      if (type === "warning" || type === "error") {
        const buttons = error.buttons || [];
        const buttonsComponent =
          buttons.length > 0 ? (
            <Row justify="end" style={{ marginTop: 16 }}>
              <Space>
                {buttons.map((button: NotificationButton) => {
                  return (
                    <Button
                      key={button.label}
                      icon={<Icon icon={button.icon} />}
                      size="small"
                      onClick={() => {
                        onButtonAction?.(button.payload);
                        Modal.destroyAll();
                      }}
                    >
                      {button.label}
                    </Button>
                  );
                })}
              </Space>
            </Row>
          ) : undefined;

        const modalMethod = type === "error" ? Modal.error : Modal.warning;
        modalMethod({
          title: error.title,
          content,
          centered: true,
          footer: buttonsComponent,
        });
        return;
      }

      // Show notification for other types
      const errorData = {
        title: error.title,
        message: content,
        type,
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
      Modal.error({
        title: parsedError.title,
        content: (
          <Interweave content={parsedError.message.replace(/\n/g, "<br />")} />
        ),
        centered: true,
      });
      return;
    }

    // String error
    if (typeof error === "string") {
      Modal.error({
        title: "Error",
        content: <Interweave content={error} />,
        centered: true,
      });
      return;
    }

    // Fallback
    Modal.error({
      title: "Error",
      content: <Interweave content={JSON.stringify(error)} />,
      centered: true,
    });
  };

  return {
    showErrorNotification,
    destroyErrorNotification: destroy,
  };
};
