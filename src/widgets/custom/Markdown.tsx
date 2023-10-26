import Field from "@/common/Field";
import ReactMarkdown from "react-markdown";
import React from "react";
import {WidgetProps} from "@/types";
import {useToken} from "antd/lib/theme/internal";

export  const Markdown = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <MarkdownInput {...props} />
    </Field>
  );
};

export const MarkdownInput = (props: any) => {
  const {value, ooui} = props;
  const token = useToken();
  const className = `ant-typography ${token[2]}`
  return (
    <div style={{height: ooui.height ? ooui.height + 'px' : '100%', overflow: 'auto'}}>
      <ReactMarkdown children={value} className={className}/>
    </div>

  )
}
