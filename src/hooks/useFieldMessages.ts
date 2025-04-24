import { useState, useCallback } from "react";

export type FieldMessageType = "error" | "warning";

export type FieldMessage = {
  field: string;
  message: string;
  type: FieldMessageType;
};

export type FieldMessages = {
  [key: string]: {
    message: string;
    type: FieldMessageType;
  };
};

export const useFieldMessages = () => {
  const [fieldMessages, setFieldMessages] = useState<FieldMessages>({});

  const setFieldMessage = useCallback(
    (field: string, message: string, type: FieldMessageType = "error") => {
      setFieldMessages((prev) => ({ ...prev, [field]: { message, type } }));
    },
    [],
  );

  const getFieldMessage = useCallback(
    (field: string) => {
      return fieldMessages[field]?.message;
    },
    [fieldMessages],
  );

  const getFieldMessageType = useCallback(
    (field: string) => {
      return fieldMessages[field]?.type;
    },
    [fieldMessages],
  );

  const clearFieldMessage = useCallback((field: string) => {
    setFieldMessages((prev) => {
      const newMessages = { ...prev };
      delete newMessages[field];
      return newMessages;
    });
  }, []);

  const clearAllFieldMessages = useCallback(() => {
    setFieldMessages({});
  }, []);

  const setFieldMessagesArray = useCallback((messages: FieldMessage[]) => {
    const newMessages: FieldMessages = {};
    messages.forEach(({ field, message, type }) => {
      newMessages[field] = { message, type };
    });
    setFieldMessages(newMessages);
  }, []);

  return {
    fieldMessages,
    setFieldMessage,
    getFieldMessage,
    getFieldMessageType,
    clearFieldMessage,
    clearAllFieldMessages,
    setFieldMessagesArray,
  };
};
