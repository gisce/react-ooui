import { useCallback, useContext, useMemo } from "react";
import Editor from "@monaco-editor/react";
import { FormContext, FormContextType } from "@/context/FormContext";
import { CodeEditor as CodeEditorOoui } from "@gisce/ooui";
import { JSONStringify } from "json-with-bigint";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";

export type CodeEditorProps = WidgetProps & {
  ooui: CodeEditorOoui;
};

export const CodeEditor = (props: CodeEditorProps) => {
  return (
    <Field {...props}>
      <CodeEditorInput {...props} />
    </Field>
  );
};

export const CodeEditorInput = (
  props: CodeEditorProps & { value?: any; onChange?: (value: any) => void },
) => {
  const { ooui, value, onChange } = props;
  const { lang, height, readOnly } = ooui;
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  const onMount = useCallback(
    (editor: any) => {
      if (elementHasLostFocus) {
        editor.onDidBlurEditorWidget(() => elementHasLostFocus());
      }
    },
    [elementHasLostFocus],
  );

  const adjustedValue = useMemo(() => {
    if (lang === "json" && typeof value === "object") {
      try {
        return JSONStringify(value, null, "\t");
      } catch (error) {
        console.error("Error stringifying JSON:", error);
        return "";
      }
    }
    return value;
  }, [lang, value]);

  return (
    <Editor
      value={adjustedValue}
      options={{
        readOnly,
      }}
      defaultLanguage={lang || ""}
      height={height || 300}
      onMount={onMount}
      onChange={onChange}
    />
  );
};
