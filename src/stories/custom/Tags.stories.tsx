import React from "react";

import { TagsInput, Tags } from "../../widgets/custom/Tags";
import { Tags as TagsOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/Tags",
};

export const Default = (): React.ReactElement => {
  const ooui = new TagsOoui({
    name: "button_field",
    string: "Lorem ipsum",
    field: "name",
    relation: "res.partner.category"
  });

  return (
    <LocaleProvider lang="en_US">
      <TagsInput ooui={ooui} value={{items: [
          {id: 1, operation: "original"},
          {id: 2, operation: "original"},
          {id: 3, operation: "pendingRemove"}
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
    readonly: true,
    relation: "res.partner.category",
  });

  return (
    <LocaleProvider lang="en_US">
      <TagsInput ooui={ooui} value={{items: [
          {id: 1, operation: "original"},
          {id: 2, operation: "original"},
          {id: 3, operation: "pendingRemove"}
        ]}}
      />
    </LocaleProvider>
  );
};


export const TagsLabel = (): React.ReactElement => {
  const ooui = new TagsOoui({
    name: "button_field",
    string: "Lorem ipsum",
    field: "name",
    relation: "res.partner.category",
  });

  return (
    <LocaleProvider lang="en_US">
      <Tags ooui={ooui} showLabel/>
    </LocaleProvider>
  );
};
