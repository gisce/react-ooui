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
  const {value, ooui} = props;
  return (
    <div style={{height: ooui.height ? ooui.height + 'px' : '100%'}}>
      <ReactMarkdown children={value} className="ant-typography"/>
    </div>

  )
}
