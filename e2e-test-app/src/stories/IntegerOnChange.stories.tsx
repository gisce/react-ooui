import React, { useState, useCallback } from "react";
import { InputNumber, theme } from "antd";
import { ConfigContextProvider } from "@gisce/react-ooui";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { useLocalizedInput } from "../../../src/hooks/useLocalizedInput";
import styled from "styled-components";

const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);

interface IntegerWidgetTestProps {
  initialValue?: number | bigint | string;
  localized?: boolean;
}

const IntegerWidgetTest: React.FC<IntegerWidgetTestProps> = ({
  initialValue,
  localized = false,
}) => {
  const [value, setValue] = useState<number | bigint | string | null>(
    initialValue ?? null
  );
  const [lastOnChangeValue, setLastOnChangeValue] = useState<any>(null);
  const [lastOnChangeType, setLastOnChangeType] = useState<string>("");
  const [changeCount, setChangeCount] = useState(0);

  const { formatter, parser, onFocus, onBlur } = useLocalizedInput({
    isInteger: true,
    localized,
  });

  const handleChange = useCallback((newValue: number | string | null) => {
    if (newValue === null || newValue === "") {
      setValue(null);
      setLastOnChangeValue(null);
      setLastOnChangeType("null");
      setChangeCount((c) => c + 1);
      return;
    }

    if (typeof newValue === "string") {
      const numValue = Number(newValue);
      if (Number.isSafeInteger(numValue)) {
        setValue(numValue);
        setLastOnChangeValue(numValue);
        setLastOnChangeType("number");
      } else {
        const bigIntValue = BigInt(newValue);
        setValue(bigIntValue);
        setLastOnChangeValue(bigIntValue);
        setLastOnChangeType("bigint");
      }
    } else {
      setValue(newValue);
      setLastOnChangeValue(newValue);
      setLastOnChangeType(typeof newValue);
    }
    setChangeCount((c) => c + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Integer Widget onChange Type Test</h2>
      <p>Localized: {localized ? "Yes" : "No"}</p>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "8px" }}>
          Integer Input:
        </label>
        <StyledInputNumber
          stringMode
          className="w-full"
          style={{ width: "300px" }}
          formatter={formatter}
          parser={parser}
          onChange={handleChange}
          onFocus={localized ? onFocus : undefined}
          onBlur={localized ? onBlur : undefined}
          precision={0}
          changeOnWheel={false}
          value={value as any}
          data-testid="integer-input"
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <h3>onChange Results:</h3>
        <div style={{ fontFamily: "monospace" }}>
          <p>
            <strong>Last Value:</strong>{" "}
            <span data-testid="last-value">
              {lastOnChangeValue === null ? "null" : String(lastOnChangeValue)}
            </span>
          </p>
          <p>
            <strong>Last Type:</strong>{" "}
            <span data-testid="last-type">{lastOnChangeType || "none"}</span>
          </p>
          <p>
            <strong>Change Count:</strong>{" "}
            <span data-testid="change-count">{changeCount}</span>
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#e6f7ff",
          borderRadius: "8px",
        }}
      >
        <h3>Reference Values:</h3>
        <ul style={{ fontFamily: "monospace" }}>
          <li>Number.MAX_SAFE_INTEGER: {Number.MAX_SAFE_INTEGER}</li>
          <li>Number.MIN_SAFE_INTEGER: {Number.MIN_SAFE_INTEGER}</li>
          <li>First unsafe: 9007199254740992</li>
        </ul>
      </div>
    </div>
  );
};

const StyledInputNumber = styled(InputNumber)`
  &.ant-input-number {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;

interface StoryWrapperProps {
  locale?: string;
  localized?: boolean;
  initialValue?: number | bigint | string;
}

const StoryWrapper: React.FC<StoryWrapperProps> = ({
  locale = "en_US",
  localized = false,
  initialValue,
}) => {
  return (
    <NotificationProvider>
      <ConfigContextProvider
        locale={locale}
        erpFeatures={{}}
        userFeatures={{ features: {}, canWriteFeatureFlags: false }}
        globalValues={{}}
        rootContext={{}}
        devMode={false}
        title={`Integer onChange Test (${locale})`}
        treeMaxLimit={100}
      >
        <IntegerWidgetTest initialValue={initialValue} localized={localized} />
      </ConfigContextProvider>
    </NotificationProvider>
  );
};

export const NonLocalizedEnglish = () => <StoryWrapper locale="en_US" />;

export const NonLocalizedSpanish = () => <StoryWrapper locale="es_ES" />;

export const LocalizedEnglish = () => (
  <StoryWrapper locale="en_US" localized={true} />
);

export const LocalizedSpanish = () => (
  <StoryWrapper locale="es_ES" localized={true} />
);

export const WithInitialValue = () => (
  <StoryWrapper locale="en_US" initialValue={1500} />
);

export const WithBigIntInitialValue = () => (
  <StoryWrapper locale="en_US" initialValue="9007199254740992" />
);

export default {
  title: "IntegerOnChange",
  component: StoryWrapper,
};
