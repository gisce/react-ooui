import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { Button as AntButton, Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Field from "@/common/Field";
import { iconMapper, Icon, FieldSet } from "@gisce/react-formiga-components";
import { WidgetProps } from "@/types";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { Field as FieldOoui } from "@gisce/ooui";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { ACTION_TYPE_WINDOW } from "@/models/constants";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import { FormContext, FormContextType } from "@/context/FormContext";

export interface ActionButtonAction {
  id?: number;
  name?: string;
  type?: string;
  res_model?: string;
  view_id?: number;
  view_type?: string;
  view_mode?: string;
  res_id?: number;
  [key: string]: any;
}

export interface ActionButtonMethod {
  name: string;
  res_model: string;
  args?: any[];
}

export interface ActionButtonItem {
  name: string;
  icon?: string;
  action?: ActionButtonAction;
  method?: ActionButtonMethod;
}

type ActionButtonsProps = WidgetProps & {
  ooui: FieldOoui;
};

type ActionButtonsInputProps = ActionButtonsProps & {
  value?: any;
};

export const ActionButtons = (props: ActionButtonsProps) => {
  const { ooui } = props;

  return (
    <ErrorBoundary>
      <Field {...props}>
        <ActionButtonsInput {...props} ooui={ooui} />
      </Field>
    </ErrorBoundary>
  );
};

const ActionButtonsInput = (props: ActionButtonsInputProps) => {
  const { value, ooui } = props;
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const formContext = useContext(FormContext) as FormContextType;

  const buttons: ActionButtonItem[] = useMemo(() => {
    if (!value) {
      console.warn("ActionButtons: No value provided");
      return [];
    }
    try {
      const parsed = typeof value === "string" ? JSON.parse(value) : value;
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.error(
        "Failed to parse action buttons value:",
        e,
        "Value:",
        value,
      );
      return [];
    }
  }, [value]);

  const icon: React.ElementType | undefined = useMemo(
    () => iconMapper(ooui.raw_props?.icon || ""),
    [ooui.raw_props?.icon],
  );

  const shouldShowFieldSet = useMemo(
    () => !!ooui.label || !!icon,
    [ooui.label, icon],
  );

  const isDisabled = useMemo(
    () => !ooui.activated || ooui.readOnly,
    [ooui.activated, ooui.readOnly],
  );

  if (buttons.length === 0) {
    return null;
  }

  // Get col from parsedWidgetProps or raw_props (number of columns for button layout)
  const col = parseInt(
    ooui.parsedWidgetProps?.col || ooui.raw_props?.col || "1",
    10,
  );

  const content = (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${col}, 1fr)`,
        gap: "8px",
        width: "100%",
      }}
    >
      {buttons.map((button, index) => (
        <ActionButton
          key={index}
          button={button}
          processAction={contentRootContext.processAction}
          formContext={formContext}
          disabled={isDisabled}
        />
      ))}
    </div>
  );

  return (
    <div
      style={{
        height: "100%",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      {shouldShowFieldSet ? (
        <FieldSet label={ooui.label} icon={icon}>
          {content}
        </FieldSet>
      ) : (
        content
      )}
    </div>
  );
};

type ActionButtonProps = {
  button: ActionButtonItem;
  processAction: ContentRootContextType["processAction"];
  formContext: FormContextType;
  disabled?: boolean;
};

const ActionButton = ({
  button,
  processAction,
  formContext,
  disabled,
}: ActionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [getActionDataRequest, cancelGetActionDataRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getActionData,
  );
  const [executeMethodRequest, cancelExecuteMethodRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().execute,
  );

  useEffect(() => {
    return () => {
      cancelGetActionDataRequest();
      cancelExecuteMethodRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = useCallback(async () => {
    setIsLoading(true);
    try {
      const context = await formContext.getContext();

      if (button.action) {
        let action = button.action;

        // If action has an id, read it from the server and merge
        if (action.id && !action.type) {
          try {
            const actionData = await getActionDataRequest({
              action: `${ACTION_TYPE_WINDOW},${action.id}`,
              context,
            });
            // Merge server action with provided values (like res_id, view_mode, etc.)
            action = { ...actionData, ...action };
          } catch (error) {
            console.error("Failed to read action from server:", error);
            setIsLoading(false);
            return;
          }
        }

        await processAction({
          actionData: action,
          context,
        });
      } else if (button.method) {
        const { name, res_model, args = [] } = button.method;
        await executeMethodRequest({
          action: name,
          model: res_model,
          payload: args,
          context,
        });
      }
    } catch (error) {
      console.error("Failed to execute action:", error);
    } finally {
      setIsLoading(false);
    }
  }, [
    button.action,
    button.method,
    processAction,
    getActionDataRequest,
    executeMethodRequest,
    formContext,
  ]);

  const buttonIcon = useMemo(
    () => (button.icon ? <Icon icon={button.icon} /> : undefined),
    [button.icon],
  );

  return (
    <AntButton
      block
      onClick={handleClick}
      icon={isLoading ? <LoadingOutlined /> : buttonIcon}
      disabled={disabled || isLoading}
      style={{
        whiteSpace: "normal",
        height: "auto",
        paddingTop: "3px",
        paddingBottom: "3px",
      }}
    >
      {button.name}
    </AntButton>
  );
};
