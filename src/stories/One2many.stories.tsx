import React from "react";

import { One2many } from "..";
import { One2many as One2manyOoui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/One2many",
};

export const Default = (): React.ReactElement => {
  const ooui = new One2manyOoui({
    name: "field",
    string: "Lorem ipsum",
    relation: "res.partners",
    mode: "form,tree",
    views: {
      form: {
        arch:
          '<form string="Partner Contacts -">\n                                    <notebook>\n                                        <page string="General">\n                                            <field name="name" select="2" required="True"/>\n                                            <field domain="[(\'domain\', \'=\', \'contact\')]" name="title" string="Type"/>\n                                            <field name="function"/>\n                                            <field name="type" select="2"/>\n                                            <separator string="Street" colspan="4"/>\n                                            <field name="street" select="2" colspan="4" width="200"/>\n                                            <group colspan="2" col="4">\n                        <field name="tv" select="2"/>\n                        <newline/>\n                        <field name="nv" colspan="4"/>\n                    </group>\n                    <group colspan="2" col="8">\n                        <field name="pnp"/>\n                        <field name="es"/>\n                        <field name="pt"/>\n                        <field name="pu"/>\n                        <field name="bq" colspan="1"/>\n                        <field name="aclarador" colspan="5"/>\n                    </group>\n                <field name="street2"/>\n                                            <newline/>\n                                            <field name="zip" select="2"/>\n                                            <field name="apartat_correus"/>\n                    <newline/>\n                <newline/>\n                                            <field name="id_municipi" on_change="onchange_municipi_id(id_municipi,context)"/>\n                    <field name="id_poblacio" domain="[(\'municipi_id\',\'=\',id_municipi)]"/>\n                <field name="state_id" select="2"/>\n                                            <field completion="1" name="country_id" select="2"/>\n                                            <newline/>\n                                            <separator string="Catastre" colspan="4"/>\n                    <field name="ref_catastral"/>\n                <separator string="Comunication channels" colspan="4"/>\n                                            <field name="phone"/>\n                                            <field name="fax"/>\n                                            <newline/>\n                                            <field name="mobile"/>\n                                            <field name="email" select="2" widget="email"/>\n                                        </page>\n                                        <page string="Notes">\n                                            <field name="notes" nolabel="1" colspan="4"/>\n                                        </page>\n                                    </notebook>\n                                </form>\n                                ',
        fields: {
          aclarador: {
            size: 256,
            string: "Aclarador",
            type: "char",
            views: {},
          },
          apartat_correus: {
            size: 5,
            string: "Apartat de Correus",
            type: "char",
            views: {},
          },
          bq: {
            size: 4,
            string: "Bloc",
            type: "char",
            views: {},
          },
          country_id: {
            context: "",
            domain: [],
            relation: "res.country",
            size: 64,
            string: "Country",
            type: "many2one",
            views: {},
          },
          email: {
            size: 240,
            string: "E-Mail",
            type: "char",
            views: {},
          },
          es: {
            size: 10,
            string: "Escala",
            type: "char",
            views: {},
          },
          fax: {
            size: 64,
            string: "Fax",
            type: "char",
            views: {},
          },
          function: {
            context: "",
            domain: [],
            relation: "res.partner.function",
            size: 64,
            string: "Function",
            type: "many2one",
            views: {},
          },
          id_municipi: {
            context: "",
            domain: [],
            relation: "res.municipi",
            size: 64,
            string: "Municipi",
            type: "many2one",
            views: {},
          },
          id_poblacio: {
            context: "",
            domain: [],
            relation: "res.poblacio",
            size: 64,
            string: "Població",
            type: "many2one",
            views: {},
          },
          mobile: {
            size: 64,
            string: "Mobile",
            type: "char",
            views: {},
          },
          name: {
            size: 128,
            string: "Contact Name",
            type: "char",
            views: {},
          },
          notes: {
            string: "Notes",
            type: "text",
            views: {},
          },
          nv: {
            size: 256,
            string: "Carrer",
            type: "char",
            views: {},
          },
          phone: {
            size: 64,
            string: "Phone",
            type: "char",
            views: {},
          },
          pnp: {
            size: 10,
            string: "Número",
            type: "char",
            views: {},
          },
          pt: {
            size: 10,
            string: "Planta",
            type: "char",
            views: {},
          },
          pu: {
            size: 10,
            string: "Porta",
            type: "char",
            views: {},
          },
          ref_catastral: {
            size: 20,
            string: "Ref Catastral (c)",
            type: "char",
            views: {},
          },
          state_id: {
            context: "",
            domain: "[('country_id','=',country_id)]",
            relation: "res.country.state",
            size: 64,
            string: "Fed. State",
            type: "many2one",
            views: {},
          },
          street: {
            digits: [16, 2],
            readonly: 1,
            size: 128,
            string: "Street",
            type: "char",
            views: {},
          },
          street2: {
            size: 128,
            string: "Street2",
            type: "char",
            views: {},
          },
          title: {
            selection: [
              ["Ms.", "Madam"],
              ["Mss", "Miss"],
              ["M.", "Sir"],
              ["", ""],
            ],
            size: 32,
            string: "Title",
            type: "selection",
            views: {},
          },
          tv: {
            context: "",
            domain: [],
            relation: "res.tipovia",
            size: 64,
            string: "Tipus Via",
            type: "many2one",
            views: {},
          },
          type: {
            help:
              "Used to select automatically the right address according to the context in sales and purchases documents.",
            selection: [
              ["default", "Default"],
              ["invoice", "Invoice"],
              ["delivery", "Delivery"],
              ["contact", "Contact"],
              ["other", "Other"],
              ["ov", "Oficina Virtual"],
            ],
            string: "Address Type",
            type: "selection",
            views: {},
          },
          zip: {
            change_default: true,
            size: 24,
            string: "Zip",
            type: "char",
            views: {},
          },
        },
      },
      tree: {
        arch:
          '<tree string="Partner Contacts">\n                                    <field name="name"/>\n                                    <field name="street"/>\n                    <field name="type"/>\n                <field name="zip"/>\n                                    <field name="city"/>\n                                    <field name="country_id"/>\n                                    <field name="phone"/>\n                                    <field name="email"/>\n                                </tree>\n                            ',
        fields: {
          city: {
            size: 128,
            string: "City",
            type: "char",
            views: {},
          },
          country_id: {
            context: "",
            domain: [],
            relation: "res.country",
            size: 64,
            string: "Country",
            type: "many2one",
            views: {},
          },
          email: {
            size: 240,
            string: "E-Mail",
            type: "char",
            views: {},
          },
          name: {
            size: 128,
            string: "Contact Name",
            type: "char",
            views: {},
          },
          phone: {
            size: 64,
            string: "Phone",
            type: "char",
            views: {},
          },
          street: {
            digits: [16, 2],
            readonly: 1,
            size: 128,
            string: "Street",
            type: "char",
            views: {},
          },
          type: {
            help:
              "Used to select automatically the right address according to the context in sales and purchases documents.",
            selection: [
              ["default", "Default"],
              ["invoice", "Invoice"],
              ["delivery", "Delivery"],
              ["contact", "Contact"],
              ["other", "Other"],
              ["ov", "Oficina Virtual"],
            ],
            string: "Address Type",
            type: "selection",
            views: {},
          },
          zip: {
            change_default: true,
            size: 24,
            string: "Zip",
            type: "char",
            views: {},
          },
        },
      },
    },
  });
  return (
    <LocaleProvider lang="en_US">
      <One2many ooui={ooui} />
    </LocaleProvider>
  );
};
