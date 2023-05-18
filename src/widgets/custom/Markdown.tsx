import Field from "@/common/Field";
import ReactMarkdown from "react-markdown";
import React from "react";
import {WidgetProps} from "@/types";

export  const Markdown = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <MarkdownInput {...props} />
    </Field>
  );
};

export const MarkdownInput = (props: any) => {
  const {value} = props;
  return (
    <ReactMarkdown children={value}/>
  )
}