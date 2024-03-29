export default {
  model: "giscedata.cups.ps",
  exampleValues: {
    aclarador: "aclaridor",
    active: true,
    autoconsum_id: false,
    ax: 347.21,
    bq: 347.21,
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
    state: "baixa",
  },
  form: {
    arch: '<form string="CUPS">\n    <button type="action" name="417" string="readonly1" icon="gtk-print" readonly="1"/><button type="action" name="417" string="readonly0" icon="gtk-print" readonly="0"/><button type="action" name="417" string="readonlyVariable1" icon="gtk-print" attrs="{\'readonly\':[(\'state\',\'!=\',\'actiu\')]}"/><button type="action" name="417" string="readonlyVariable2" icon="gtk-print" attrs="{\'readonly\':[(\'state\',\'==\',\'actiu\')]}"/>  <button type="object" name="417" string="readonly1" icon="gtk-print" readonly="1"/><button type="object" name="417" string="readonly0" icon="gtk-print" readonly="0"/><button type="object" name="417" string="readonlyVariable3" icon="gtk-print" attrs="{\'readonly\':[(\'state\',\'!=\',\'actiu\')]}"/><button type="object" name="417" string="readonlyVariable4" icon="gtk-print" attrs="{\'readonly\':[(\'state\',\'==\',\'actiu\')]}"/>                <notebook colspan="4">\n                       <page string="Corbes">                         <group colspan="4">                             <group string="Validada" colspan="2">                                 <field name="ax" string="AX"/>                                 <field name="bq" string="Format"/>                             </group>                             <group string="Facturada" colspan="2">                                 <field name="bq" string="Última corba"/>                                 <field name="bq" string="Format"/>                             </group>                             <group string="Autoconsumida" colspan="2">                                 <field name="bq" string="Última corba"/>                                 <field name="bq" string="Format"/>                             </group>                             <group string="Generada Neta" colspan="2">                                 <field name="bq" string="Última corba"/>                                 <field name="bq" string="Format"/>                             </group>                             <group string="Quart-Horària" colspan="2">                                 <field name="bq1" string="Última corba"/>                                 <field name="bq" string="Format"/>                             </group>                        </group>                    </page> <page string="General">\n                            <field name="name" select="1" size="25"/>\n                            <field name="active" select="1"/>\n                            <field name="distribuidora_id" domain="[(\'supplier\',\'=\',True)]" context="{\'task\': \'test\'}" required="1" select="1"/>\n                <field name="id_municipi" select="1"/>\n                            <field name="id_provincia"/>\n                            <field name="id_poblacio" select="1" domain="[(\'municipi_id.id\', \'=\', id_municipi)]"/>\n                            <field name="dp"/>\n                            <field name="direccio" select="1" colspan="4"/>\n                            <field name="polissa_polissa" select="1"/>\n                    <field name="polissa_comptador" select="1"/>\n                <field name="polissa_potencia"/>\n                <field name="potencia_adscrita" attrs="{\'readonly\':[(\'force_potencia_adscrita\',\'=\',0)]}"/>\n                    <field name="force_potencia_adscrita"/>\n                <group colspan="4" string="Adreces">\n                                <notebook colspan="4">\n                                    <page string="Principal">\n                                        <separator string="Zona urbana" colspan="4"/>\n                                        <field name="tv"/>\n                                        <field name="nv" select="1"/>\n                                        <field name="pnp" select="1"/>\n                                        <field name="bq" select="1"/>\n                                        <field name="es" select="1"/>\n                                        <field name="pt" select="1"/>\n                                        <field name="pu" select="1"/>\n                                        <field name="aclarador" colspan="4" select="1"/>\n                                        <separator string="Zona industrial" colspan="4"/>\n                                        <field name="cpo" select="1"/>\n                                        <field name="cpa" select="1"/>\n                                    </page>\n                                    <page string="Cadastre">\n                                        <separator string="Zona urbana" colspan="4"/>\n                                        <field name="catas_np"/>\n                                        <field name="catas_nm"/>\n                                        <field name="ref_catastral" select="1"/>\n                                        <button type="object" name="update_dir_from_ref" string="Obtenir del Cadastre"/>\n                                        <button type="object" name="delete_dir_ref" string="Eliminar dades del Cadastre" confirm="Està segur que vol eliminar les dades que s\'han obtingut del cadastre?"/>\n                                        <field name="catas_ldt" colspan="4"/>\n                                        <field name="catas_tv"/>\n                                        <field name="catas_nv"/>\n                                        <field name="catas_pnp"/>\n                                        <field name="catas_bq"/>\n                                        <field name="catas_es"/>\n                                        <field name="catas_pt"/>\n                                        <field name="catas_pu"/>\n                                        <field name="catas_dp"/>\n                                        <separator string="Zona industrial" colspan="4"/>\n                                        <field name="catas_cpo"/>\n                                        <field name="catas_cpa"/>\n                                        <separator string="Sincronització amb el cadastre" colspan="4"/>\n                                        <label colspan="2" string="Si disposa de la referencia cadastral pot copiar les dades del cadastre a l\'adreça principal mitjançant aquest botó"/>\n                                        <button type="object" name="copy_to_alternative" string="Copiar a la principal"/>\n                                    </page>\n                                    <page string="Notes">\n                                    <field name="notes" colspan="4" nolabel="1"/>\n                                    </page>\n                                </notebook>\n                            </group>\n                        </page>\n                    <page string="Autoconsum">\n                        <field name="autoconsum_id" readonly="1" colspan="4"/>\n                        <field name="coef_repartiment" readonly="1" colspan="4"/>\n                    </page>\n                <page string="Butlletins">\n                        <field name="butlletins" colspan="4" nolabel="1" context="{\'cups_id\': active_id}"/>\n                    </page>\n                <page string="Històric d\'autoconsums">\n                        <field name="hist_autoconsum" nolabel="1" context="{\'default_cups_id\': active_id}" readonly="1"/>\n                    </page>\n                <page string="Històric de pòlisses">\n                        <field name="polisses" nolabel="1" colspan="4">\n                            </field>\n                    </page>\n                </notebook>\n                </form>',
    field_parent: false,
    fields: {
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
      ax: {
        size: 4,
        string: "Bloc",
        type: "integer",
        views: {},
      },
      bq: {
        size: 4,
        string: "Bloc",
        type: "integer",
        views: {},
      },
      bq1: {
        size: 4,
        string: "Bloc",
        type: "integer",
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
        type: "integer",
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
        type: "float",
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
            arch: '<tree string="Modificacions contractuals">\n                                <field name="polissa_id"/>\n                                <field name="comptadors_periode"/>\n                <field name="titular"/>\n                                <field name="tarifa"/>\n                                <field name="potencia"/>\n                                <field name="tensio_normalitzada"/>\n                                <field name="name"/>\n                                <field name="tipus"/>\n                                <field name="data_inici"/>\n                                <field name="data_final"/>\n                                <field name="state"/>\n                            </tree>\n                        ',
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
    model: "giscedata.cups.ps",
    name: "giscedata_cups_ps.form",
    search_fields: {
      primary: [
        "name",
        "active",
        "distribuidora_id",
        "id_municipi",
        "id_poblacio",
        "direccio",
        "polissa_polissa",
        "polissa_comptador",
        "nv",
        "pnp",
        "bq",
        "es",
        "pt",
        "pu",
        "aclarador",
        "cpo",
        "cpa",
        "ref_catastral",
      ],
      secondary: [],
    },
    toolbar: {
      action: [
        {
          auto_refresh: 0,
          context: "{'from_cups': True}",
          domain: false,
          groups_id: [],
          id: 1503,
          limit: 80,
          name: "Import CNMC SIPS data",
          res_model: "wizard.import.cnmc.sips.data",
          src_model: false,
          string: "Import CNMC SIPS data",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: [1654, "wizard.import.cnmc.sips.data.form"],
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[1654, "form"]],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: false,
          groups_id: [],
          id: 441,
          limit: 80,
          name: "Donar d'alta/baixa un autoconsum",
          res_model: "wizard.alta.baixa.autoconsum",
          src_model: false,
          string: "Donar d'alta/baixa un autoconsum",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[512, "form"]],
        },
      ],
      print: [],
      relate: [
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('cups_id', '=', active_id)]",
          groups_id: [],
          id: 1765,
          limit: 80,
          name: "Fitxers F1 importats",
          res_model: "giscedata.facturacio.importacio.linia",
          src_model: false,
          string: "Fitxers F1 importats",
          target: "current",
          type: "ir.actions.act_window",
          usage: false,
          view_id: [2038, "giscedata.facturacio.importacio.linia.tree"],
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [2038, "tree"],
            [2039, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('cups_id', '=', active_id)]",
          groups_id: [],
          id: 1738,
          limit: 0,
          name: "Fitxers Q1",
          res_model: "giscedata.lectures.importacio.linia",
          src_model: "giscedata.cups.ps",
          string: "Fitxers Q1",
          target: "current",
          type: "ir.actions.act_window",
          usage: "",
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [2016, "tree"],
            [2017, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('cups_id', '=', active_id)]",
          groups_id: [],
          id: 1499,
          limit: 80,
          name: "Bulletins",
          res_model: "giscedata.butlleti",
          src_model: "giscedata.cups.ps",
          string: "Bulletins",
          target: "current",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [1645, "tree"],
            [1646, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{'active_test': False}",
          domain: "[('cups.id', '=', active_id)]",
          groups_id: [],
          id: 437,
          limit: 80,
          name: "Pòlissa",
          res_model: "giscedata.polissa",
          src_model: "giscedata.cups.ps",
          string: "Pòlissa",
          target: "current",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [480, "tree"],
            [479, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('id', '=', active_id)]",
          groups_id: [],
          id: -1,
          limit: 0,
          name: "giscedata.cups.ps",
          res_model: "giscedata.cups.ps",
          src_model: "giscedata.cups.ps",
          string: "giscedata.cups.ps",
          target: "current",
          type: "ir.actions.act_window",
          usage: "",
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [false, "tree"],
            [false, "form"],
          ],
        },
      ],
    },
    type: "form",
    view_id: 458,
  },
  tree: {
    arch: '<tree string="CUPS">\n                    <field name="distribuidora_id"/>\n                <field name="name"/>\n                    <field name="polissa_polissa"/>\n                    <field name="polissa_comptador"/>\n                <field name="polissa_potencia" sum="Potència contractada (kW)"/>\n                <field name="active"/>\n                    <field name="direccio"/>\n                    <field name="id_municipi"/>\n                </tree>',
    field_parent: false,
    fields: {
      active: {
        string: "Actiu",
        type: "boolean",
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
      name: {
        required: true,
        size: 25,
        string: "CUPS",
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
    },
    model: "giscedata.cups.ps",
    name: "giscedata_cups_ps.tree",
    search_fields: {
      primary: [],
      secondary: [],
    },
    toolbar: {
      action: [
        {
          auto_refresh: 0,
          context: "{'from_cups': True}",
          domain: false,
          groups_id: [],
          id: 1503,
          limit: 80,
          name: "Import CNMC SIPS data",
          res_model: "wizard.import.cnmc.sips.data",
          src_model: false,
          string: "Import CNMC SIPS data",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: [1654, "wizard.import.cnmc.sips.data.form"],
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[1654, "form"]],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: false,
          groups_id: [],
          id: 441,
          limit: 80,
          name: "Donar d'alta/baixa un autoconsum",
          res_model: "wizard.alta.baixa.autoconsum",
          src_model: false,
          string: "Donar d'alta/baixa un autoconsum",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[512, "form"]],
        },
      ],
      print: [],
      relate: [
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('cups_id', '=', active_id)]",
          groups_id: [],
          id: 1765,
          limit: 80,
          name: "Fitxers F1 importats",
          res_model: "giscedata.facturacio.importacio.linia",
          src_model: false,
          string: "Fitxers F1 importats",
          target: "current",
          type: "ir.actions.act_window",
          usage: false,
          view_id: [2038, "giscedata.facturacio.importacio.linia.tree"],
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [2038, "tree"],
            [2039, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('cups_id', '=', active_id)]",
          groups_id: [],
          id: 1738,
          limit: 0,
          name: "Fitxers Q1",
          res_model: "giscedata.lectures.importacio.linia",
          src_model: "giscedata.cups.ps",
          string: "Fitxers Q1",
          target: "current",
          type: "ir.actions.act_window",
          usage: "",
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [2016, "tree"],
            [2017, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('cups_id', '=', active_id)]",
          groups_id: [],
          id: 1499,
          limit: 80,
          name: "Bulletins",
          res_model: "giscedata.butlleti",
          src_model: "giscedata.cups.ps",
          string: "Bulletins",
          target: "current",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [1645, "tree"],
            [1646, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{'active_test': False}",
          domain: "[('cups.id', '=', active_id)]",
          groups_id: [],
          id: 437,
          limit: 80,
          name: "Pòlissa",
          res_model: "giscedata.polissa",
          src_model: "giscedata.cups.ps",
          string: "Pòlissa",
          target: "current",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [480, "tree"],
            [479, "form"],
          ],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('id', '=', active_id)]",
          groups_id: [],
          id: -1,
          limit: 0,
          name: "giscedata.cups.ps",
          res_model: "giscedata.cups.ps",
          src_model: "giscedata.cups.ps",
          string: "giscedata.cups.ps",
          target: "current",
          type: "ir.actions.act_window",
          usage: "",
          view_id: false,
          view_ids: [],
          view_mode: "tree,form",
          view_type: "form",
          views: [
            [false, "tree"],
            [false, "form"],
          ],
        },
      ],
    },
    type: "tree",
    view_id: 457,
  },
};
