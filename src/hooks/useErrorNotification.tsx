import { parseError } from "@/helpers/errorHelper";
import {
  Icon,
  NotificationButton,
  NotificationType,
  useNotificationContext,
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
      onOk?: () => void;
    }
  | { message?: string; exception?: string; onOk?: () => void }
  | string
  | Record<string, any>;

export const useErrorNotification = ({
  onButtonAction,
}: {
  onButtonAction?: (payload: any) => void;
} = {}) => {
  const { open, destroy } = useNotificationContext();

  const showErrorNotification = (error: ShowErrorNotificationArg) => {
    // ignore canceled requests errors
    if ((error as any)?.code === "ERR_CANCELED") {
      return;
    }

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
        // eslint-disable-next-line prefer-const
        let modalInstance: any;
        const buttonsComponent =
          buttons.length > 0 ? (
            <Row justify="end" style={{ marginTop: 16 }}>
              <Space>
                {buttons.map((button: NotificationButton) => {
                  return (
                    <Button
                      key={button.name}
                      icon={<Icon icon={button.icon} />}
                      size="small"
                      onClick={() => {
                        onButtonAction?.(button.action);
                        modalInstance?.destroy();
                      }}
                    >
                      {button.name}
                    </Button>
                  );
                })}
                <Button
                  key="ok"
                  type="primary"
                  icon={<Icon icon="check" />}
                  size="small"
                  onClick={() => {
                    error.onOk?.();
                    modalInstance?.destroy();
                  }}
                >
                  OK
                </Button>
              </Space>
            </Row>
          ) : undefined;

        const modalMethod = type === "error" ? Modal.error : Modal.warning;
        modalInstance = modalMethod({
          title: error.title,
          content,
          centered: true,
          footer: buttonsComponent,
          onOk: error.onOk,
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
        onOk: (error as any).onOk,
      });
      return;
    }

    // String error
    if (typeof error === "string") {
      Modal.error({
        title: "Error",
        content: <Interweave content={error} />,
        centered: true,
        onOk: (error as any).onOk,
      });
      return;
    }

    // Fallback
    Modal.error({
      title: "Error",
      content: <Interweave content={JSON.stringify(error)} />,
      centered: true,
      onOk: (error as any).onOk,
    });
  };

  return {
    showErrorNotification,
    destroyErrorNotification: destroy,
  };
};
