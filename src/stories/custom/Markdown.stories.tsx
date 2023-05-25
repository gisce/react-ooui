import React from "react";
import { Markdown as MarkdownOOui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../../context/LocaleContext";
import { MarkdownInput } from "../../widgets/custom/Markdown";

export default {
  title: "Components/Widgets/Custom/Markdown",
};


export const Default = (): React.ReactElement => {
  const ooui = new MarkdownOOui({
    name: "enabled",
    string: "Lorem ipsum",
  });

 const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

## Header 2

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`

  return (
    <LocaleProvider lang="en_US">
      <MarkdownInput ooui={ooui} value={markdown} />
    </LocaleProvider>
  );
};
