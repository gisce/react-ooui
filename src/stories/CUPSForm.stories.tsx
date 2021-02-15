import React from "react";

import { Form } from "..";
import "antd/dist/antd.css";
import "@/tailwind.generated.css";

export default {
  component: Form,
  title: "Components/Widgets/Forms/CUPS",
};

const Template = (args: any) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialValues: {
    aclarador: "aclaridor",
    active: true,
    autoconsum_id: false,
    bq: false,
    butlletins: [],
    catas_bq: false,
    catas_cpa: false,
    catas_cpo: false,
    catas_cv: false,
    catas_dp: false,
    catas_es: false,
    catas_ldt: false,
    catas_nm: false,
    catas_np: false,
    catas_nv: false,
    catas_pnp: false,
    catas_pt: false,
    catas_pu: false,
    catas_tv: false,
    coef_repartiment: false,
    cpa: false,
    cpo: false,
    direccio: "carrer inventat 1 1 1 6 aclaridor 00001 (Poble de Prova)",
    distribuidora_id: [1, "Tiny sprl"],
    dp: "00001",
    es: "1",
    force_potencia_adscrita: false,
    hist_autoconsum: [],
    id: 9,
    id_municipi: [1, "Alegría-Dulantzi"],
    id_poblacio: [1, "Poble de Prova"],
    id_provincia: [54, "Araba/Álava"],
    name: "ES0112000000100295SE",
    notes:
      "notes notes***Cambios detectados***\nFecha: 22-06-2020 23:10, Usuario: Administrator (admin)\n• Direcció Principal: False → carrer inventat 1 1 1 6 aclaridor 00001 (Poble de Prova)\n\n",
    nv: "carrer inventat",
    pnp: "1",
    polissa_comptador: false,
    polissa_polissa: false,
    polissa_potencia: false,
    polisses: [],
    potencia_adscrita: false,
    pt: "1",
    pu: "6",
    ref_catastral: "referencia catastral",
    tv: false,
  },
  arch: `<form string="CUPS">
                    <notebook colspan="4">
                        <page string="General">
                            <field name="name" select="1" size="25"/>
                            <field name="active" select="1"/>
                            <field name="distribuidora_id" domain="[(\'supplier\',\'=\',True)]" required="1" select="1"/>
                <field name="id_municipi" select="1"/>
                            <field name="id_provincia"/>
                            <field name="id_poblacio" select="1" domain="[(\'municipi_id.id\', \'=\', id_municipi)]"/>
                            <field name="dp"/>
                            <field name="direccio" select="1" colspan="4"/>
                            <field name="polissa_polissa" select="1"/>
                    <field name="polissa_comptador" select="1"/>
                <field name="polissa_potencia"/>
                <field name="potencia_adscrita" attrs="{\'readonly\':[(\'force_potencia_adscrita\',\'=\',0)]}"/>
                    <field name="force_potencia_adscrita"/>
                <group colspan="4" string="Adreces">
                                <notebook colspan="4">
                                    <page string="Principal">
                                        <separator string="Zona urbana" colspan="4"/>
                                        <field name="tv"/>
                                        <field name="nv" select="1"/>
                                        <field name="pnp" select="1"/>
                                        <field name="bq" select="1"/>
                                        <field name="es" select="1"/>
                                        <field name="pt" select="1"/>
                                        <field name="pu" select="1"/>
                                        <field name="aclarador" colspan="4" select="1"/>
                                        <separator string="Zona industrial" colspan="4"/>
                                        <field name="cpo" select="1"/>
                                        <field name="cpa" select="1"/>
                                    </page>
                                    <page string="Cadastre">
                                        <separator string="Zona urbana" colspan="4"/>
                                        <field name="catas_np"/>
                                        <field name="catas_nm"/>
                                        <field name="ref_catastral" select="1"/>
                                        <button type="object" name="update_dir_from_ref" string="Obtenir del Cadastre"/>
                                        <button type="object" name="delete_dir_ref" string="Eliminar dades del Cadastre" confirm="Està segur que vol eliminar les dades que s\'han obtingut del cadastre?"/>
                                        <field name="catas_ldt" colspan="4"/>
                                        <field name="catas_tv"/>
                                        <field name="catas_nv"/>
                                        <field name="catas_pnp"/>
                                        <field name="catas_bq"/>
                                        <field name="catas_es"/>
                                        <field name="catas_pt"/>
                                        <field name="catas_pu"/>
                                        <field name="catas_dp"/>
                                        <separator string="Zona industrial" colspan="4"/>
                                        <field name="catas_cpo"/>
                                        <field name="catas_cpa"/>
                                        <separator string="Sincronització amb el cadastre" colspan="4"/>
                                        <label colspan="2" string="Si disposa de la referencia cadastral pot copiar les dades del cadastre a l\'adreça principal mitjançant aquest botó"/>
                                        <button type="object" name="copy_to_alternative" string="Copiar a la principal"/>
                                    </page>
                                    <page string="Notes">
                                    <field name="notes" colspan="4" nolabel="1"/>
                                    </page>
                                </notebook>
                            </group>
                        </page>
                    <page string="Autoconsum">
                        <field name="autoconsum_id" readonly="1" colspan="4"/>
                        <field name="coef_repartiment" readonly="1" colspan="4"/>
                    </page>
                <page string="Butlletins">
                        <field name="butlletins" colspan="4" nolabel="1" context="{\'cups_id\': active_id}"/>
                    </page>
                <page string="Històric d\'autoconsums">
                        <field name="hist_autoconsum" nolabel="1" context="{\'default_cups_id\': active_id}" readonly="1"/>
                    </page>
                <page string="Històric de pòlisses">
                        <field name="polisses" nolabel="1">
                            </field>
                    </page>
                </notebook>
                </form>`,
  fields: {
    aclarador: {
      size: 256,
      string: "Aclarador",
      type: "char",
      views: {},
    },
    active: {
      string: "Actiu",
      type: "boolean",
      views: {},
    },
    autoconsum_id: {
      context: "",
      domain: [],
      relation: "giscedata.autoconsum",
      size: 64,
      string: "Autoconsum",
      type: "many2one",
      views: {},
    },
    bq: {
      size: 4,
      string: "Bloc",
      type: "char",
      views: {},
    },
    butlletins: {
      context: "",
      domain: [],
      inv_field: "cups_id",
      relation: "giscedata.butlleti",
      string: "Bulletins",
      type: "one2many",
      views: {},
    },
    catas_bq: {
      readonly: true,
      size: 4,
      string: "Bloc (c)",
      type: "char",
      views: {},
    },
    catas_cpa: {
      readonly: true,
      size: 4,
      string: "Parcel·la (c)",
      type: "char",
      views: {},
    },
    catas_cpo: {
      readonly: true,
      size: 4,
      string: "Poligon (c)",
      type: "char",
      views: {},
    },
    catas_dp: {
      readonly: true,
      size: 5,
      string: "Codi Postal (c)",
      type: "char",
      views: {},
    },
    catas_es: {
      readonly: true,
      size: 4,
      string: "Escala (c)",
      type: "char",
      views: {},
    },
    catas_ldt: {
      readonly: true,
      size: 256,
      string: "Domicili tributari (c)",
      type: "char",
      views: {},
    },
    catas_nm: {
      readonly: true,
      size: 256,
      string: "Municipi (c)",
      type: "char",
      views: {},
    },
    catas_np: {
      readonly: true,
      size: 256,
      string: "Provincia (c)",
      type: "char",
      views: {},
    },
    catas_nv: {
      readonly: true,
      size: 256,
      string: "Carrer (c)",
      type: "char",
      views: {},
    },
    catas_pnp: {
      readonly: true,
      size: 4,
      string: "Número (c)",
      type: "char",
      views: {},
    },
    catas_pt: {
      readonly: true,
      size: 4,
      string: "Planta (c)",
      type: "char",
      views: {},
    },
    catas_pu: {
      readonly: true,
      size: 4,
      string: "Porta (c)",
      type: "char",
      views: {},
    },
    catas_tv: {
      readonly: true,
      size: 10,
      string: "Tipus Via (c)",
      type: "char",
      views: {},
    },
    coef_repartiment: {
      digits: [12, 2],
      readonly: true,
      string: "Coeficient de repartiment",
      type: "float",
      views: {},
    },
    cpa: {
      size: 4,
      string: "Parcel·la",
      type: "char",
      views: {},
    },
    cpo: {
      size: 4,
      string: "Poligon",
      type: "char",
      views: {},
    },
    direccio: {
      digits: [16, 2],
      readonly: 1,
      size: 256,
      string: "Direcció Principal",
      type: "char",
      views: {},
    },
    distribuidora_id: {
      context: "",
      domain: [],
      relation: "res.partner",
      size: 64,
      string: "Distribuidora",
      type: "many2one",
      views: {},
    },
    dp: {
      size: 5,
      string: "Codi Postal",
      type: "char",
      views: {},
    },
    es: {
      size: 4,
      string: "Escala",
      type: "char",
      views: {},
    },
    force_potencia_adscrita: {
      string: "Bloquejar potència adscrita",
      type: "boolean",
      views: {},
    },
    hist_autoconsum: {
      context: "",
      domain: [],
      inv_field: "cups_id",
      relation: "giscedata.autoconsum.cups.autoconsum",
      string: "Històric autoconsums",
      type: "one2many",
      views: {},
    },
    id_municipi: {
      context: "",
      domain: [],
      relation: "res.municipi",
      required: true,
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
    id_provincia: {
      context: "",
      digits: [16, 2],
      domain: [],
      readonly: true,
      relation: "res.country.state",
      string: "Provincia",
      type: "many2one",
      views: {},
    },
    name: {
      required: true,
      size: 25,
      string: "CUPS",
      type: "char",
      views: {},
    },
    notes: {
      readonly: true,
      string: "Canvis",
      type: "text",
      views: {},
    },
    nv: {
      size: 256,
      string: "Carrer",
      type: "char",
      views: {},
    },
    pnp: {
      size: 9,
      string: "Número",
      type: "char",
      views: {},
    },
    polissa_comptador: {
      digits: [16, 2],
      readonly: 1,
      size: 60,
      string: "Nº de comptador",
      type: "char",
      views: {},
    },
    polissa_polissa: {
      context: "",
      digits: [16, 2],
      domain: [],
      readonly: 1,
      relation: "giscedata.polissa",
      string: "Polissa",
      type: "many2one",
      views: {},
    },
    polissa_potencia: {
      digits: [16, 3],
      readonly: true,
      string: "Potència contractada (kW)",
      type: "float",
      views: {},
    },
    polisses: {
      context: {
        active_test: false,
      },
      domain: [],
      inv_field: "cups",
      readonly: true,
      relation: "giscedata.polissa.modcontractual",
      string: "Històric Pòlisses",
      type: "one2many",
      views: {
        tree: {
          arch:
            '<tree string="Modificacions contractuals">\n                                <field name="polissa_id"/>\n                                <field name="comptadors_periode"/>\n                <field name="titular"/>\n                                <field name="tarifa"/>\n                                <field name="potencia"/>\n                                <field name="tensio_normalitzada"/>\n                                <field name="name"/>\n                                <field name="tipus"/>\n                                <field name="data_inici"/>\n                                <field name="data_final"/>\n                                <field name="state"/>\n                            </tree>\n                        ',
          fields: {
            comptadors_periode: {
              digits: [16, 2],
              readonly: 1,
              string: "Comptadors",
              type: "text",
              views: {},
            },
            data_final: {
              select: true,
              string: "Data final",
              type: "date",
              views: {},
            },
            data_inici: {
              required: true,
              select: true,
              string: "Data inici",
              type: "date",
              views: {},
            },
            name: {
              readonly: true,
              required: true,
              size: 64,
              string: "Codi modificació",
              type: "char",
              views: {},
            },
            polissa_id: {
              context: "",
              domain: [],
              relation: "giscedata.polissa",
              required: true,
              select: true,
              size: 64,
              string: "Pòlissa",
              type: "many2one",
              views: {},
            },
            potencia: {
              digits: [16, 3],
              required: true,
              string: "Potència contractada (kW)",
              type: "float",
              views: {},
            },
            state: {
              readonly: true,
              required: true,
              selection: [
                ["esborrany", "Esborrany"],
                ["actiu", "Actiu"],
                ["pendent", "Pendent d'activació"],
                ["baixa", "Baixa"],
                ["baixa2", "Baixa per modificació"],
                ["baixa3", "Baixa per renovació"],
                ["baixa4", "Baixa per nova pòlissa"],
              ],
              string: "Estat",
              type: "selection",
              views: {},
            },
            tarifa: {
              context: "",
              domain: [],
              relation: "giscedata.polissa.tarifa",
              required: true,
              size: 64,
              string: "Tarifa",
              type: "many2one",
              views: {},
            },
            tensio_normalitzada: {
              context: "",
              domain: [],
              relation: "giscedata.tensions.tensio",
              required: true,
              size: 64,
              string: "Tensió normalitzada",
              type: "many2one",
              views: {},
            },
            tipus: {
              required: true,
              selection: [
                ["alta", "Alta"],
                ["baixa", "Baixa"],
                ["mod", "Modificació"],
                ["reno", "Renovació"],
              ],
              string: "Tipus",
              type: "selection",
              views: {},
            },
            titular: {
              context: "",
              domain: [],
              relation: "res.partner",
              size: 64,
              string: "Titular",
              type: "many2one",
              views: {},
            },
          },
        },
      },
    },
    potencia_adscrita: {
      digits: [15, 3],
      string: "Potència adscrita (kW)",
      type: "float",
      views: {},
    },
    pt: {
      size: 12,
      string: "Planta",
      type: "char",
      views: {},
    },
    pu: {
      size: 4,
      string: "Porta",
      type: "char",
      views: {},
    },
    ref_catastral: {
      size: 20,
      string: "Ref Cadastral (c)",
      type: "char",
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
  },
};
