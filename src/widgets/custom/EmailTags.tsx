import React, { useState, useRef, useCallback, useContext } from "react";
import { Input, Tag, theme } from "antd";
import type { InputRef } from "antd";

import Field from "@/common/Field";
import { Email as EmailOOui } from "@gisce/ooui";
import { WidgetProps } from "@/types";

import validator from "validator";
import { FormContext, FormContextType } from "@/context/FormContext";
import { useDeepCompareEffect } from "use-deep-compare";

type EmailTagsProps = WidgetProps & {
  ooui: EmailOOui;
};

export const EmailTags = (props: EmailTagsProps) => {
  const { ooui } = props;
  return (
    <Field required={ooui.required} {...props}>
      <EmailTagsInput maxLength={ooui.size} />
    </Field>
  );
};

interface EmailTagsRenderProps {
  emails: string[] | string;
  handleClose?: (email: string) => void;
}

export const EmailTagsRender: React.FC<EmailTagsRenderProps> = ({
  emails,
  handleClose,
}) => {
  if (!emails) {
    return null;
  }
  const emailArray =
    typeof emails === "string"
      ? emails
          .replace(/,/g, ";")
          .split(";")
          .map((email) => email.trim())
      : emails;
  return (
    <>
      {emailArray.map((email, index) => (
        <Tag
          key={index}
          closable={!!handleClose}
          color={
            validator.isEmail(email, { allow_display_name: true })
              ? undefined
              : "error"
          }
          onClose={() => handleClose && handleClose(email)}
        >
          {email}
        </Tag>
      ))}
    </>
  );
};

interface EmailTagsInputProps {
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const EmailTagsInput: React.FC<EmailTagsInputProps> = ({
  value = "",
  onChange,
  maxLength,
  readonly = false,
}) => {
  const { token } = theme.useToken();
  const [emails, setEmails] = useState<string[]>(
    value
      ? value
          .replace(/,/g, ";")
          .split(";")
          .map((email) => email.trim())
          .filter((email) => email)
      : [],
  );
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<InputRef>(null);
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  useDeepCompareEffect(() => {
    if (value) {
      const newEmails = value
        .replace(/,/g, ";")
        .split(";")
        .map((email) => email.trim())
        .filter(Boolean);
      // Only update state, don't trigger handleChange
      setEmails(newEmails);
    } else {
      // Clear emails when value is empty/null/undefined
      setEmails([]);
    }
  }, [value]);

  const handleChange = useCallback(
    (newEmails: string[]) => {
      if (onChange) {
        onChange(newEmails.join(";"));
      }
    },
    [onChange],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Check if input ends with a space after a complete display name email
    const endsWithSpaceAfterEmail = />\s+$/.test(value);

    // Use different splitting strategy based on input format
    let parts;
    if (endsWithSpaceAfterEmail) {
      // If we have a display name email followed by space, split by that last space
      const trimmed = value.trimEnd();
      parts = [trimmed, ""];
    } else {
      const hasDisplayNameFormat = /["<>]/.test(value);
      parts = hasDisplayNameFormat
        ? value.split(/[,;]+/)
        : value.split(/[ ,;]+/);
    }

    // Don't process empty parts (like when ending with a comma)
    const validEmails = parts
      .slice(0, -1)
      .map((email) => email.trim())
      .filter((email) => email && !emails.includes(email));

    // Only update state if we have valid emails to add
    if (validEmails.length > 0) {
      const concatenatedEmails = [...emails, ...validEmails].join(";");
      if (
        !maxLength ||
        concatenatedEmails.length + parts[parts.length - 1].length <= maxLength
      ) {
        setEmails([...emails, ...validEmails]);
        handleChange([...emails, ...validEmails]);
        setInputValue(parts[parts.length - 1]);
      }
    } else {
      // If no valid emails, just update the input value without clearing it
      setInputValue(value);
    }
  };

  const handleInputConfirm = () => {
    if (inputValue) {
      const newEmails = inputValue
        .replace(/,/g, ";")
        .split(";")
        .map((email) => email.trim())
        .filter((email) => email && !emails.includes(email));
      const concatenatedEmails = [...emails, ...newEmails].join(";");
      if (!maxLength || concatenatedEmails.length <= maxLength) {
        setEmails([...emails, ...newEmails]);
        handleChange([...emails, ...newEmails]);
      }
      setInputValue("");
    }
    if (elementHasLostFocus) {
      elementHasLostFocus();
    }
  };

  const handleClose = (removedEmail: string) => {
    const filteredEmails = emails.filter((email) => email !== removedEmail);
    setEmails(filteredEmails);
    handleChange(filteredEmails);
    if (elementHasLostFocus) {
      elementHasLostFocus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: token.sizeXS,
        border: `${token.lineWidth}px ${token.lineType} ${token.colorBorder}`,
        padding: token.paddingXS,
        borderRadius: token.borderRadius,
      }}
      onClick={() => inputRef.current?.focus()}
    >
      <EmailTagsRender
        emails={emails}
        handleClose={!readonly ? handleClose : undefined}
      />
      <Input
        readOnly={readonly}
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onPressEnter={handleInputConfirm}
        onBlur={handleInputConfirm}
        style={{
          flexGrow: 1,
          minWidth: "100px",
          border: "none",
          outline: "none",
          boxShadow: "none",
          width: "auto",
          marginLeft: 0,
          paddingLeft: 0,
        }}
      />
    </div>
  );
};
