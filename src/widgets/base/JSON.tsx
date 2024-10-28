import { CodeEditor, CodeEditorProps } from "@/widgets/custom/CodeEditor";
import { JSONField as JSONFieldOoui } from "@gisce/ooui";

type JSONFieldProps = CodeEditorProps & {
  ooui: JSONFieldOoui;
};

export const JSONField = (props: JSONFieldProps) => {
  const updatedProps = {
    ...props,
    value:
      typeof props.value === "object"
        ? JSON.stringify(props.value)
        : props.value,
  };
  return <CodeEditor {...updatedProps} />;
};
