import React from "react";

import { SearchFilter } from "../../../..";

// import "antd/dist/antd.css";


import "@/tailwind.generated.css";
import LocaleProvider from "../../../../context/LocaleContext";

export default {
  component: SearchFilter,
  title: "Components/Widgets/Views/SearchFilter/Examples/PartnersSearchFilter",
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
      "name",
      "ref",
      "emails",
      "customer",
      "address",
      "payment_type_customer",
      "vat",
      "payment_type_supplier",
      "date",
      "comercial",
    ],
    secondary: [
      "lang",
      "credit_limit",
      "user_id",
      "bank_ids",
      "energy_sector",
      "has_debt",
      "credit",
      "debit",
      "active",
      "supplier",
      "category_id",
    ],
  },
  fields: {
    active: {
      string: "Active",
      type: "boolean",
      views: {},
    },
    address: {
      context: "",
      domain: [],
      inv_field: "partner_id",
      relation: "res.partner.address",
      string: "Contacts",
      type: "one2many",
    },
    bank_ids: {
      context: "",
      domain: [],
      inv_field: "partner_id",
      relation: "res.partner.bank",
      string: "Banks",
      type: "one2many",
    },
    category_id: {
      context: "",
      domain: [],
      relation: "res.partner.category",
      string: "Categories",
      type: "many2many",
      views: {},
    },
    comercial: {
      select: true,
      size: 128,
      string: "Trade name",
      type: "char",
      views: {},
    },
    comment: {
      string: "Notes",
      type: "text",
      views: {},
    },
    credit: {
      digits: [16, 2],
      help: "Total amount this customer owes you.",
      readonly: 1,
      string: "Total Receivable",
      type: "float",
      views: {},
    },
    credit_limit: {
      string: "Credit Limit",
      type: "float",
      views: {},
    },
    customer: {
      help: "Check this box if the partner is a customer.",
      string: "Customer",
      type: "boolean",
      views: {},
    },
    date: {
      select: 1,
      string: "Date",
      type: "date",
      views: {},
    },
    debit: {
      digits: [16, 2],
      help: "Total amount you have to pay to this supplier.",
      readonly: 1,
      string: "Total Payable",
      type: "float",
      views: {},
    },
    emails: {
      digits: [16, 2],
      readonly: 1,
      string: "Emails",
      type: "text",
      views: {},
    },
    energy_sector: {
      digits: [16, 2],
      readonly: 1,
      selection: [
        ["electric", "Electric"],
        ["gas", "Gas"],
        ["elegas", "Electric & Gas"],
        ["undefined", "Indefinit"],
      ],
      string: "Sector d'energía",
      type: "selection",
      views: {},
    },
    events: {
      context: "",
      domain: [],
      inv_field: "partner_id",
      relation: "res.partner.event",
      string: "Events",
      type: "one2many",
      views: {},
    },
    has_debt: {
      digits: [16, 2],
      readonly: 1,
      string: "Has debt",
      type: "boolean",
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
    ov_users_ids: {
      context: {
        active_test: false,
      },
      domain: [],
      inv_field: "partner_id",
      relation: "ov.users",
      string: "Usuaris Oficina Virtual",
      type: "one2many",
      views: {},
    },
    parent_id: {
      context: "",
      domain: [],
      relation: "res.partner",
      select: 2,
      size: 64,
      string: "Main Company",
      type: "many2one",
      views: {},
    },
    payment_type_customer: {
      context: "",
      domain: [],
      help: "Payment type of the customer",
      relation: "payment.type",
      size: 64,
      string: "Customer payment type",
      type: "many2one",
      views: {},
    },
    payment_type_supplier: {
      context: "",
      domain: [],
      help: "Payment type of the supplier",
      relation: "payment.type",
      size: 64,
      string: "Supplier payment type",
      type: "many2one",
      views: {},
    },
    property_account_debtor: {
      context: "",
      digits: [16, 2],
      domain: "[('type', '=', 'receivable')]",
      help:
        "This account will be used as the debtor account for the current partner",
      relation: "account.account",
      required: true,
      string: "Account Debtor",
      type: "many2one",
      views: {},
    },
    property_account_payable: {
      context: "",
      digits: [16, 2],
      domain: "[('type', '=', 'payable')]",
      help:
        "This account will be used instead of the default one as the payable account for the current partner",
      relation: "account.account",
      required: true,
      string: "Account Payable",
      type: "many2one",
      views: {},
    },
    property_account_position: {
      context: "",
      digits: [16, 2],
      domain: [],
      help:
        "The fiscal position will determine taxes and the accounts used for the the partner.",
      relation: "account.fiscal.position",
      string: "Fiscal Position",
      type: "many2one",
      views: {},
    },
    property_account_receivable: {
      context: "",
      digits: [16, 2],
      domain: "[('type', '=', 'receivable')]",
      help:
        "This account will be used instead of the default one as the receivable account for the current partner",
      relation: "account.account",
      required: true,
      string: "Account Receivable",
      type: "many2one",
      views: {},
    },
    property_payment_term: {
      context: "",
      digits: [16, 2],
      domain: [],
      help:
        "This payment term will be used instead of the default one for the current partner",
      relation: "account.payment.term",
      string: "Payment Term",
      type: "many2one",
      views: {},
    },
    property_product_pricelist: {
      context: "",
      digits: [16, 2],
      domain: [["type", "=", "sale"]],
      help:
        "This pricelist will be used, instead of the default one,                     for sales to the current partner",
      relation: "product.pricelist",
      string: "Sale Pricelist",
      type: "many2one",
      views: {},
    },
    property_product_pricelist_purchase: {
      context: "",
      digits: [16, 2],
      domain: [["type", "=", "purchase"]],
      help:
        "This pricelist will be used, instead of the default one, for purchases from the current partner",
      relation: "product.pricelist",
      string: "Purchase Pricelist",
      type: "many2one",
      views: {},
    },
    property_stock_customer: {
      context: "",
      digits: [16, 2],
      domain: [],
      help:
        "This stock location will be used, instead of the default one, as the destination location for goods you send to this partner",
      relation: "stock.location",
      string: "Customer Location",
      type: "many2one",
      views: {},
    },
    property_stock_supplier: {
      context: "",
      digits: [16, 2],
      domain: [],
      help:
        "This stock location will be used, instead of the default one, as the source location for goods you receive from the current partner",
      relation: "stock.location",
      string: "Supplier Location",
      type: "many2one",
      views: {},
    },
    property_switching_xml_encoding: {
      context: "",
      digits: [16, 2],
      domain: [["name", "!=", false]],
      help:
        "Encoding XML amb el qual es generaran els XML's de switching per aquesta empresa",
      relation: "giscedata.switching.xml.encoding",
      required: true,
      string: "Encoding XML switching",
      type: "many2one",
      views: {},
    },
    ref: {
      select: true,
      size: 64,
      string: "Code",
      type: "char",
      views: {},
    },
    ref2: {
      size: 6,
      string: "Ref2",
      type: "char",
      views: {},
    },
    representante_id: {
      context: "",
      domain: [],
      relation: "res.partner",
      size: 64,
      string: "Representante",
      type: "many2one",
      views: {},
    },
    supplier: {
      help:
        "Check this box if the partner is a supplier. If it's not checked, purchase people will not see it when encoding a purchase order.",
      string: "Supplier",
      type: "boolean",
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
    total_debt: {
      digits: [16, 2],
      help: "Total amount this customer debts you.",
      readonly: 1,
      string: "Total Debt",
      type: "float",
      views: {},
    },
    user_id: {
      context: "",
      domain: [],
      help:
        "The internal user that is in charge of communicating with this partner if any.",
      relation: "res.users",
      size: 64,
      string: "Dedicated Salesman",
      type: "many2one",
      views: {},
    },
    vat: {
      help:
        "Value Added Tax number. Check the box if the partner is subjected to the VAT. Used by the VAT legal statement.",
      select: true,
      size: 32,
      string: "VAT",
      type: "char",
      views: {},
    },
    vat_subjected: {
      help:
        "Check this box if the partner is subjected to the VAT. It will be used for the VAT legal statement.",
      string: "VAT Legal Statement",
      type: "boolean",
      views: {},
    },
    website: {
      size: 64,
      string: "Website",
      type: "char",
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
