import Field from "@/common/Field";
import ReactMarkdown from "react-markdown";
import React from "react";
import { WidgetProps } from "@/types";
import remarkGfm from "remark-gfm";

export const Markdown = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <MarkdownInput {...props} />
    </Field>
  );
};

export const MarkdownInput = (props: any) => {
  const { value, ooui } = props;
  return (
    <div
      style={{
        height: ooui?.height ? ooui.height + "px" : "100%",
        overflow: "auto",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="markdown-typography"
      >
        {value}
      </ReactMarkdown>
    </div>
  );
};
