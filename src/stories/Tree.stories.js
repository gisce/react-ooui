import React from "react";

import { Tree } from "..";
import "antd/dist/antd.css";
import "../tailwind.generated.css";

export default {
  component: Tree,
  title: "Components/Widgets/Tree",
};

const Template = (args) => <Tree {...args} />;

export const Default = Template.bind({});
Default.args = {
  total: 5,
  limit: 80,
  page: 1,
  loading: false,
  results: [
    {
      city: false,
      country: false,
      id: 62,
      lang: false,
      name: "AGRI ENERGIA ELECTRICA, S.A.",
      ref: "0112",
      title: false,
    },
    {
      city: "Wavre",
      country: [20, "Belgium"],
      id: 3,
      lang: false,
      name: "Agrolait",
      ref: false,
      title: false,
    },
    {
      city: false,
      country: false,
      id: 106,
      lang: "ca_ES",
      name: "ALCAZAR SANZ, GUSTAVO",
      ref: false,
      title: false,
    },
    {
      city: "Sevilla",
      country: [67, "España"],
      id: 32,
      lang: false,
      name: "Andalucía",
      ref: "01",
      title: false,
    },
    {
      city: false,
      country: [67, "España"],
      id: 82,
      lang: "es_ES",
      name: "Apellido2 Apellido2, Nombre",
      ref: false,
      title: false,
    },
    {
      city: "Zaragoza",
      country: [67, "España"],
      id: 33,
      lang: false,
      name: "Aragón",
      ref: "02",
      title: false,
    },
  ],
  treeView: {
    arch:
      '<tree string="Partners">\n                    <field name="name"/>\n                    <field name="title"/>\n                    <field name="ref"/>\n                    <field name="city" select="2"/>\n                    <field name="country" select="2"/>\n                    <field name="lang"/>\n                </tree>',
    fields: {
      city: {
        digits: [16, 2],
        string: "City",
        type: "char",
        views: {},
      },
      country: {
        context: "",
        digits: [16, 2],
        domain: [],
        relation: "res.country",
        string: "Country",
        type: "many2one",
        views: {},
      },
      lang: {
        help:
          "If the selected language is loaded in the system, all documents related to this partner will be printed in this language. If not, it will be english.",
        selection: [
          ["en_US", "English"],
          ["ca_ES", "Catalan / Català"],
          ["es_ES", "Spanish / Español"],
          ["", ""],
        ],
        size: 5,
        string: "Language",
        type: "selection",
        views: {},
      },
      name: {
        required: true,
        select: true,
        size: 128,
        string: "Name",
        type: "char",
        views: {},
      },
      ref: {
        select: true,
        size: 64,
        string: "Code",
        type: "char",
        views: {},
      },
      title: {
        selection: [
          ["Corp.", "Corp."],
          ["ltd", "Ltd"],
          ["", ""],
        ],
        size: 32,
        string: "Title",
        type: "selection",
        views: {},
      },
    },
  },
  onRequestPageChange: (page, pageSize) => {
    console.log(`Change - Page: ${page} PageSize: ${pageSize}`);
  },
};
