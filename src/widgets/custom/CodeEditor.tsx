import React, { useContext } from "react";
import Editor from "@monaco-editor/react";
import { FormContext, FormContextType } from "@/context/FormContext";
import { CodeEditor as CodeEditorOoui } from "@gisce/ooui";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";

type CodeEditorProps = WidgetProps & {
  ooui: CodeEditorOoui;
};

export const CodeEditor = (props: CodeEditorProps) => {
  const { ooui } = props;
  const { lang, height } = ooui;
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  const onMount = (editor: any) => {
    editor.onDidBlurEditorWidget(elementHasLostFocus);
  };

  return (
    <Field {...props}>
      <Editor
        defaultLanguage={lang || ""}
        height={height || 300}
        onMount={onMount}
      />
    </Field>
  );
};
