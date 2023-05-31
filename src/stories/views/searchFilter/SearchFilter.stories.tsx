import React from "react";

import { SearchFilter } from "../../..";

// import "antd/dist/antd.css";


import "@/tailwind.generated.css";
import LocaleProvider from "../../../context/LocaleContext";

export default {
  component: SearchFilter,
  title: "Components/Widgets/Views/SearchFilter/SearchFilter",
};

const Template = (args: any) => (
  <LocaleProvider lang="en_US">
    <SearchFilter {...args} />
  </LocaleProvider>
);

export const Default = Template.bind({});
Default.args = {
  limit: 80,
  offset: 1,
  searchFields: {
    primary: [
      "char",
      "boolean",
      "one2many",
      "many2many",
      "many2one",
      "text",
      "float",
      "float_time",
      "progressbar",
      "integer",
      "date",
      "datetime",
      "selection",
    ],
    secondary: ["char_2", "boolean_2", "selection_2"],
  },
  fields: {
    boolean: {
      string: "Boolean",
      type: "boolean",
      views: {},
    },
    boolean_2: {
      string: "Boolean 2",
      type: "boolean",
      views: {},
    },
    one2many: {
      context: "",
      domain: [],
      inv_field: "partner_id",
      relation: "res.partner.address",
      string: "One2many",
      type: "one2many",
    },
    many2many: {
      context: "",
      domain: [],
      relation: "res.partner.category",
      string: "Many2many",
      type: "many2many",
      views: {},
    },
    char: {
      select: true,
      size: 128,
      string: "Char",
      type: "char",
      help: "Test message",
      views: {},
    },
    char_2: {
      select: true,
      size: 128,
      string: "Char 2",
      type: "char",
      views: {},
    },
    text: {
      string: "Text",
      type: "text",
      views: {},
    },
    integer: {
      help: "Total amount this customer owes you.",
      readonly: 1,
      string: "Integer",
      type: "integer",
      views: {},
    },
    float: {
      digits: [16, 2],
      help: "Total amount this customer owes you.",
      readonly: 1,
      string: "Float",
      type: "float",
      views: {},
    },
    float_time: {
      string: "Float time",
      type: "float_time",
    },
    progressbar: {
      string: "Progress bar",
      type: "progressbar",
    },
    date: {
      select: 1,
      string: "Date",
      type: "date",
      views: {},
    },
    datetime: {
      select: 1,
      string: "Date time",
      type: "datetime",
      views: {},
    },
    selection: {
      digits: [16, 2],
      readonly: 1,
      selection: [
        ["electric", "Electric"],
        ["gas", "Gas"],
        ["elegas", "Electric & Gas"],
        ["undefined", "Indefinit"],
      ],
      string: "Selection",
      type: "selection",
      views: {},
    },
    selection_2: {
      digits: [16, 2],
      readonly: 1,
      selection: [
        ["electric", "Electric"],
        ["gas", "Gas"],
        ["elegas", "Electric & Gas"],
        ["undefined", "Indefinit"],
      ],
      string: "Selection 2",
      type: "selection",
      views: {},
    },
    many2one: {
      context: "",
      domain: [],
      relation: "res.partner",
      select: 2,
      size: 64,
      string: "Many2one",
      type: "many2one",
      views: {},
    },
  },
  onClear: () => {
    console.log("onClear");
  },
  onSubmit: (fields) => {
    console.log("onSubmit");
  },
};
