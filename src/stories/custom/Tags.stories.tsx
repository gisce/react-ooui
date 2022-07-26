import React from "react";

import { TagsInput } from "../../widgets/custom/Tags";
import { Tags as TagsOoui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../../context/LocaleContext";
import { One2manyInput } from "../../widgets/base/one2many/One2manyInput";

export default {
  title: "Components/Widgets/Custom/Tags",
};

export const Default = (): React.ReactElement => {
  const ooui = new TagsOoui({
    name: "button_field",
    string: "Lorem ipsum",
    field: "name"
  });

  return (
    <LocaleProvider lang="en_US">
      <TagsInput ooui={ooui} value={{items: [
          {id: 1, operation: "original", values: {name: "test"}},
          {id: 2, operation: "original", values: {name: "foo"}},
          {id: 3, operation: "pendingRemove", values: {name: "remove"}}
        ]}}
      />
    </LocaleProvider>
  );
};

export const Readonly = (): React.ReactElement => {
  const ooui = new TagsOoui({
    name: "button_field",
    string: "Lorem ipsum",
    field: "name",
    readonly: true
  });

  return (
    <LocaleProvider lang="en_US">
      <TagsInput ooui={ooui} value={{items: [
          {id: 1, operation: "original", values: {name: "test"}},
          {id: 2, operation: "original", values: {name: "foo"}},
          {id: 3, operation: "pendingRemove", values: {name: "remove"}}
        ]}}
      />
    </LocaleProvider>
  );
};