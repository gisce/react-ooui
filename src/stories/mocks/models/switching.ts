export default {
  model: "giscedata.switching.mod.con.wizard",
  exampleValues: {
    activacio_cicle: "L",
    bank: 101,
    change_atr: true,
    cnae: 986,
    con_name: "Eduard",
    con_sur1: "Carreras",
    con_sur2: "Nadal",
    con_type: "F",
    contact: 61,
    contract: 19,
    cups: "ES0112000000010754DC0F",
    delivery_type: "email",
    direccio_notificacio: 53,
    direccio_pagament: 53,
    dt_cie_electronico: "S",
    email: "ecarreras@gmail.com",
    generate_new_contract: "exists",
    mode_facturacio: "atr",
    num_periods: 3,
    owner: 61,
    owner_change_type: "S",
    owner_pre: 61,
    pagador: 61,
    payment_mode_id: 8,
    phone_num: "678965432",
    phone_pre: "34",
    power_invoicing: "1",
    power_p1: 5750.0,
    power_p2: 5750.0,
    proces: "M1",
    retail_tariff: 21,
    send_ae_measures: true,
    state: "init",
    tariff: "018",
    tipo_pago: 6,
    vat: "40351345F",
    vat_kind: "NI",
  },
  form: {
    arch:
      '<form string="Generar Cas amb Modificacio Contractual" col="2"><field name="change_adm" on_change="onchange_type(change_atr, change_adm, contract, generate_new_contract, new_contract, proces)"/><notebook><page string="Titular" attrs="{\'invisible\': [(\'change_adm\', \'!=\', True)]}">\r\n                                <group col="4" colspan="4" attrs="{\'invisible\': [(\'change_adm\', \'!=\', True)]}">\r\n                                    <separator string="Titular" colspan="4"/>\r\n                                    <field name="owner_change_type" attrs="{\'required\': [(\'change_adm\',\'=\',True)]}"/>\r\n                                    <field name="vat" on_change="onchange_vat(vat, contract, owner, contact)" attrs="{\'required\': [(\'change_adm\',\'=\',True)]}"/>\r\n                                    <field name="vat_kind" attrs="{\'required\': [(\'change_adm\',\'=\',True)]}"/>\r\n                                    <field name="owner" on_change="onchange_owner(owner, owner_pre, contact, vat, contract)" attrs="{\'required\': [(\'change_adm\',\'=\',True)]}"/>\r\n                                    <field name="owner_pre" invisible="1"/>\r\n                                </group>\r\n                            </page>\r\n                            <page string="Contacte">\r\n                                <group col="4" colspan="4">\r\n                                    <separator string="Contacte" colspan="4"/>\r\n                                    <field name="contact" on_change="onchange_contact(contact)"/>\r\n                                    <field name="direccio_notificacio" colspan="4" domain="[(\'partner_id\', \'=\', contact)]" on_change="onchange_contact_dir(direccio_notificacio)"/>\r\n                                    <field name="con_type"/>\r\n                                    <field name="con_name" colspan="4" required="1"/>\r\n                                    <field name="con_sur1" attrs="{\'readonly\':[(\'con_type\',\'=\',\'J\')], \'required\':[(\'con_type\',\'=\',\'F\')]}"/>\r\n                                    <field name="con_sur2" attrs="{\'readonly\':[(\'con_type\',\'=\',\'J\')]}"/>\r\n                                    <field name="phone_pre" required="1"/>\r\n                                    <field name="phone_num" required="1"/>\r\n                                </group>\r\n                            </page></notebook></form>',
    field_parent: false,
    fields: {
      activacio_cicle: {
        required: true,
        selection: [
          ["A", "La activaci\u00f3n se debe producir cuanto antes"],
          [
            "L",
            "La activaci\u00f3n se debe producir con pr\u00f3xima lectura del ciclo",
          ],
          [
            "F",
            "La activaci\u00f3n se producir\u00e1 seg\u00fan la fecha fija solicitada",
          ],
        ],
        string: "Activaci\u00f3",
        type: "selection",
        views: {},
      },
      autoconsum: {
        selection: [
          ["31", "[31] - Sin Excedentes Individual \u2013 Consumo"],
          ["32", "[32] - Sin Excedentes Colectivo \u2013 Consumo"],
          [
            "33",
            "[33] - Sin Excedentes Colectivo con acuerdo de compensaci\u00f3n \u2013 Consumo",
          ],
          [
            "41",
            "[41] - Con excedentes y compensaci\u00f3n Individual - Consumo",
          ],
          [
            "42",
            "[42] - Con excedentes y compensaci\u00f3n Colectivo\u2013 Consumo",
          ],
          [
            "43",
            "[43] - Con excedentes y compensaci\u00f3n Colectivo a trav\u00e9s de red\u2013 Consumo",
          ],
          [
            "51",
            "[51] - Con excedentes sin compensaci\u00f3n Individual sin cto de SSAA en Red Interior\u2013 Consumo",
          ],
          [
            "52",
            "[52] - Con excedentes sin compensaci\u00f3n Colectivo sin cto de SSAA en Red Interior\u2013 Consumo",
          ],
          [
            "53",
            "[53] - Con excedentes sin compensaci\u00f3n Individual con cto SSAA en Red Interior\u2013 Consumo",
          ],
          [
            "54",
            "[54] - Con excedentes sin compensaci\u00f3n individual con cto SSAA en Red Interior\u2013 SSAA",
          ],
          [
            "55",
            "[55] - Con excedentes sin compensaci\u00f3n Colectivo/en Red Interior\u2013 Consumo",
          ],
          [
            "56",
            "[56] - Con excedentes sin compensaci\u00f3n Colectivo/en Red Interior - SSAA",
          ],
          [
            "61",
            "[61] - Con excedentes sin compensaci\u00f3n Individual con cto SSAA a trav\u00e9s de red \u2013 Consumo",
          ],
          [
            "62",
            "[62] - Con excedentes sin compensaci\u00f3n individual con cto SSAA a trav\u00e9s de red \u2013 SSAA",
          ],
          [
            "63",
            "[63] - Con excedentes sin compensaci\u00f3n Colectivo a trav\u00e9s de red \u2013 Consumo",
          ],
          [
            "64",
            "[64] - Con excedentes sin compensaci\u00f3n Colectivo a trav\u00e9s de red - SSAA",
          ],
          [
            "71",
            "[71] - Con excedentes sin compensaci\u00f3n Individual con cto SSAA a trav\u00e9s de red y red interior \u2013 Consumo",
          ],
          [
            "72",
            "[72] - Con excedentes sin compensaci\u00f3n individual con cto SSAA a trav\u00e9s de red y red interior \u2013 SSAA",
          ],
          [
            "73",
            "[73] - Con excedentes sin compensaci\u00f3n Colectivo con cto de SSAA  a trav\u00e9s de red y red interior \u2013 Consumo",
          ],
          [
            "74",
            "[74] - Con excedentes sin compensaci\u00f3n Colectivo con cto de SSAA a trav\u00e9s de red y red interior - SSAA",
          ],
          [false, ""],
        ],
        string: "Tipus autoconsum",
        type: "selection",
        views: {},
      },
      bank: {
        context: "",
        domain: [],
        relation: "res.partner.bank",
        size: 64,
        string: "Compte bancari",
        type: "many2one",
        views: {},
      },
      change_adm: { string: "Canvi Titular", type: "boolean", views: {} },
      change_atr: {
        string: "Canvi Tarifa/Potencia",
        type: "boolean",
        views: {},
      },
      change_retail_tariff: {
        string: "Canvia Tarifa Comercialitzadora",
        type: "boolean",
        views: {},
      },
      check_introduir_lectures: {
        help:
          "Introdu\u00efr lectures en data determinada.\nAquestes lectures s'utilitzaran com a lectures finals del contracte antic al activar el M1 de canvi de titular",
        string: "Introdu\u00efr Lectures",
        type: "boolean",
        views: {},
      },
      cnae: {
        context: "",
        domain: [],
        relation: "giscemisc.cnae",
        size: 64,
        string: "CNAE",
        type: "many2one",
        views: {},
      },
      comments: { size: 120, string: "Comentari", type: "text", views: {} },
      con_name: { size: 256, string: "Nom", type: "char", views: {} },
      con_sur1: { size: 256, string: "Cognom 1", type: "char", views: {} },
      con_sur2: { size: 256, string: "Cognom 2", type: "char", views: {} },
      con_type: {
        selection: [
          ["F", "F\u00edsica"],
          ["J", "Jur\u00eddica"],
        ],
        string: "Tipus",
        type: "selection",
        views: {},
      },
      contact: {
        context: "",
        domain: [],
        relation: "res.partner",
        size: 64,
        string: "Contacte",
        type: "many2one",
        views: {},
      },
      contract: {
        context: "",
        domain: [],
        relation: "giscedata.polissa",
        size: 64,
        string: "Contracte",
        type: "many2one",
        views: {},
      },
      cups: { size: 22, string: "CUPS", type: "char", views: {} },
      data_accio: {
        string: "Data prevista del canvi o alta",
        type: "date",
        views: {},
      },
      delivery_type: {
        selection: [
          ["url", "Codi QR"],
          ["email", "Email"],
        ],
        string: "Forma d'enviament",
        type: "selection",
        views: {},
      },
      digital_sign: { string: "Firma digital", type: "boolean", views: {} },
      direccio_notificacio: {
        context: "",
        domain: [],
        relation: "res.partner.address",
        size: 64,
        string: "Adre\u00e7a notificaci\u00f3",
        type: "many2one",
        views: {},
      },
      direccio_pagament: {
        context: "",
        domain: [],
        relation: "res.partner.address",
        size: 64,
        string: "Adre\u00e7a fiscal",
        type: "many2one",
        views: {},
      },
      doc_add: { string: "Documents adjunts", type: "boolean", views: {} },
      docs_ids: {
        context: "",
        domain: [["type", "=", "neogeo"]],
        relation: "giscedata.switching.document",
        string: "Documents adjunts",
        type: "many2many",
        views: {},
      },
      dt_add: {
        string: "Documentacio T\u00e8cnica",
        type: "boolean",
        views: {},
      },
      dt_cie_codigo: {
        size: 11,
        string: "C\u00f3digo CIE",
        type: "char",
        views: {},
      },
      dt_cie_electronico: {
        selection: [
          ["S", "Si"],
          ["N", "No"],
        ],
        string: "Cie Electronico",
        type: "selection",
        views: {},
      },
      dt_cie_papel_data_caducitat: {
        string: "Data Caducitat",
        type: "date",
        views: {},
      },
      dt_cie_papel_data_emissio: {
        string: "Data Emissi\u00f3",
        type: "date",
        views: {},
      },
      dt_cie_papel_potenciainstbt: {
        string: "Pot\u00e8ncia Instalada",
        type: "integer",
        views: {},
      },
      dt_cie_papel_tensio_suministre: {
        selection: [
          ["01", "1X220"],
          ["02", "1X230"],
          ["03", "3X380"],
          ["04", "3X380/220"],
          ["05", "3X400"],
          ["06", "3X400/230"],
          ["07", "1X127"],
          ["08", "1X133"],
          ["09", "2X220"],
          ["10", "2X230"],
          ["11", "3X220"],
          ["12", "3X220/127"],
          ["13", "3X230"],
          ["14", "3X230/133"],
          ["15", "5.000"],
          ["16", "6.000"],
          ["17", "7.200"],
          ["18", "8.000"],
          ["19", "10.000"],
          ["20", "11.000"],
          ["21", "12.000"],
          ["22", "13.000"],
          ["23", "13.200"],
          ["24", "15.000"],
          ["25", "16.500"],
          ["26", "17.000"],
          ["27", "20.000"],
          ["28", "22.000"],
          ["29", "25.000"],
          ["30", "26.500"],
          ["31", "30.000"],
          ["32", "36.000"],
          ["33", "44.000"],
          ["34", "45.000"],
          ["35", "66.000"],
          ["36", "110.000"],
          ["37", "132.000"],
          ["38", "220.000"],
          ["39", "400.000"],
          ["40", "1200"],
          ["41", "2000"],
          ["42", "5500"],
          ["43", "55000"],
          ["44", "130000"],
          ["45", "100"],
          ["46", "150"],
          ["47", "3x100"],
          ["48", "3x150/260"],
          ["49", "3x260"],
          ["99", "Otra tensi\u00f3n obsoleta"],
        ],
        string: "Tensi\u00f3 suministre",
        type: "selection",
        views: {},
      },
      dt_cie_papel_tipus_suministre: {
        selection: [
          ["AL", "Almac\u00e9n"],
          ["AP", "Alumbrado publico"],
          ["AS", "Ascensores"],
          ["AT", "Antena Telefon\u00eda M\u00f3vil"],
          ["BA", "Bater\u00eda de acumuladores"],
          ["CM", "Centro de Maniobra y Control"],
          ["EA", "Escalera-Ascensor"],
          ["ES", "Escalera"],
          ["FT", "Fabrica y Talleres sin Riesgo Especifico"],
          ["FV", "Inst. Fotovoltaica"],
          ["GA", "Garaje"],
          ["GB", "Grupo Bombeo, Riego por Goteo"],
          ["HP", "Loc.H\u00famedos con Riesgo Corrosi\u00f3n o Polv."],
          ["IN", "Nave industrial"],
          ["IT", "Instalaci\u00f3n Temporal en Emplazam.Abierto"],
          ["KC", "Kioskos / cabinas tfno"],
          ["LB", "Locales a Baja Temperatura"],
          ["LC", "Local comercial"],
          ["OF", "Oficina"],
          ["PC", "Publica concurrencia"],
          ["RA", "Refugio o Albergue Agr\u00edcola"],
          ["RT", "Repetidor de Televisi\u00f3n"],
          ["SA", "Servicios Auxiliares"],
          ["SC", "Sumtro complementario"],
          ["SE", "Sumtro eventual"],
          ["SG", "Servicio general vivienda"],
          ["SM", "Sem\u00e1foro"],
          ["SO", "Sumtro obras"],
          ["TL", "Telecomunicaciones"],
          ["TR", "Trastero"],
          ["UF", "Uso finca"],
          ["UV", "Usos Varios"],
          ["VI", "Vivienda"],
        ],
        string: "Tipus Suministre",
        type: "selection",
        views: {},
      },
      dt_cie_sello_elec: {
        size: 35,
        string: "Segell Electr\u00f3nic",
        type: "char",
        views: {},
      },
      dt_codi_instalador: {
        size: 9,
        string: "Codi instal\u00b7lador",
        type: "char",
        views: {},
      },
      dt_tipus_codi_instalador: {
        selection: [
          ["nif", "NIF"],
          ["codigo", "C\u00f3digo"],
        ],
        string: "Tipus codi Instal\u00b7lador",
        type: "selection",
        views: {},
      },
      email: { size: 256, string: "E-mail", type: "char", views: {} },
      generate_new_contract: {
        selection: [
          ["create", "Crear nou contracte en borrador"],
          ["exists", "Utilitzar contracte existent"],
        ],
        string: "Contracte nou",
        type: "selection",
        views: {},
      },
      info: { string: "Info", type: "text", views: {} },
      measure_ae_p1: { string: "Lectura P1", type: "integer", views: {} },
      measure_ae_p2: { string: "Lectura P2", type: "integer", views: {} },
      measure_ae_p3: { string: "Lectura P3", type: "integer", views: {} },
      measure_ae_p4: { string: "Lectura P4", type: "integer", views: {} },
      measure_ae_p5: { string: "Lectura P5", type: "integer", views: {} },
      measure_ae_p6: { string: "Lectura P6", type: "integer", views: {} },
      measure_date: { string: "Data lectures", type: "date", views: {} },
      measure_ep_p1: { string: "Exc\u00e9s P1", type: "integer", views: {} },
      measure_ep_p2: { string: "Exc\u00e9s P2", type: "integer", views: {} },
      measure_ep_p3: { string: "Exc\u00e9s P3", type: "integer", views: {} },
      measure_ep_p4: { string: "Exc\u00e9s P4", type: "integer", views: {} },
      measure_ep_p5: { string: "Exc\u00e9s P5", type: "integer", views: {} },
      measure_ep_p6: { string: "Exc\u00e9s P6", type: "integer", views: {} },
      measure_pm_p1: {
        string: "Max\u00edmetre P1",
        type: "integer",
        views: {},
      },
      measure_pm_p2: {
        string: "Max\u00edmetre P2",
        type: "integer",
        views: {},
      },
      measure_pm_p3: {
        string: "Max\u00edmetre P3",
        type: "integer",
        views: {},
      },
      measure_pm_p4: {
        string: "Max\u00edmetre P4",
        type: "integer",
        views: {},
      },
      measure_pm_p5: {
        string: "Max\u00edmetre P5",
        type: "integer",
        views: {},
      },
      measure_pm_p6: {
        string: "Max\u00edmetre P6",
        type: "integer",
        views: {},
      },
      measure_r1_p1: { string: "Reactiva P1", type: "integer", views: {} },
      measure_r1_p2: { string: "Reactiva P2", type: "integer", views: {} },
      measure_r1_p3: { string: "Reactiva P3", type: "integer", views: {} },
      measure_r1_p4: { string: "Reactiva P4", type: "integer", views: {} },
      measure_r1_p5: { string: "Reactiva P5", type: "integer", views: {} },
      measure_r1_p6: { string: "Reactiva P6", type: "integer", views: {} },
      mod_autoconsum: { string: "Modificar", type: "boolean", views: {} },
      mode_facturacio: {
        selection: [["atr", "ATR"]],
        string: "Mode facturaci\u00f3",
        type: "selection",
        views: {},
      },
      new_contract: {
        context: "",
        domain: [],
        relation: "giscedata.polissa",
        size: 64,
        string: "Contracte Nou",
        type: "many2one",
        views: {},
      },
      num_periods: { string: "Num. Per\u00edodes", type: "integer", views: {} },
      owner: {
        context: "",
        domain: [],
        relation: "res.partner",
        size: 64,
        string: "Nou Titular",
        type: "many2one",
        views: {},
      },
      owner_change_type: {
        selection: [
          ["T", "Cambio de titular por traspaso"],
          ["S", "Cambio de titular por subrogaci\u00f3n"],
          [
            "A",
            "Cambio datos administrativos (excepto cambio de titular y correcci\u00f3n de datos identificativos del cliente)",
          ],
          ["C", "Correcci\u00f3n datos que identifican al cliente"],
          [
            "P",
            "La solicitud implica cambio en la periodicidad de la facturaci\u00f3n",
          ],
          [
            "R",
            "Modificaci\u00f3n acuerdo de reparto de un autoconsumo colectivo",
          ],
        ],
        string: "Tipus de canvi",
        type: "selection",
        views: {},
      },
      owner_pre: {
        context: "",
        domain: [],
        relation: "res.partner",
        size: 64,
        string: "Ultim titular triat",
        type: "many2one",
        views: {},
      },
      pagador: {
        context: "",
        domain: [],
        relation: "res.partner",
        size: 64,
        string: "Ra\u00f3 fiscal",
        type: "many2one",
        views: {},
      },
      payment_mode_id: {
        context: "",
        domain: [],
        relation: "payment.mode",
        size: 64,
        string: "Grup de pagament",
        type: "many2one",
        views: {},
      },
      phone_num: { size: 9, string: "Tel\u00e8fon", type: "char", views: {} },
      phone_pre: { size: 2, string: "Prefix", type: "char", views: {} },
      power_invoicing: {
        selection: [
          ["1", "ICP"],
          ["2", "Max\u00edmetro"],
        ],
        string: "MCP",
        type: "selection",
        views: {},
      },
      power_p1: { string: "P1", type: "integer", views: {} },
      power_p2: { string: "P2", type: "integer", views: {} },
      power_p3: { string: "P3", type: "integer", views: {} },
      power_p4: { string: "P4", type: "integer", views: {} },
      power_p5: { string: "P5", type: "integer", views: {} },
      power_p6: { string: "P6", type: "integer", views: {} },
      proces: {
        change_default: true,
        selection: [
          ["M1", "M1 - Modificaci\u00f3 contractual"],
          ["C2", "C2 - Canvi de comercialitzadora amb canvis"],
        ],
        string: "Cas",
        type: "selection",
        views: {},
      },
      retail_tariff: {
        context: "",
        domain: [["type", "=", "sale"]],
        relation: "product.pricelist",
        size: 64,
        string: "Tarifa Comercializaci\u00f3n",
        type: "many2one",
        views: {},
      },
      send_ae_measures: {
        help: "Marcar per afegir les lectures d'Activa",
        readonly: true,
        string: "Amb activa",
        type: "boolean",
        views: {},
      },
      send_ep_measures: {
        help: "Marcar per afegir les lectures d'Ex\u00e9s",
        string: "Amb exc\u00e9s",
        type: "boolean",
        views: {},
      },
      send_pm_measures: {
        help: "Marcar per afegir les lectures de Max\u00edmetre",
        string: "Amb max\u00edmetre",
        type: "boolean",
        views: {},
      },
      send_r1_measures: {
        help: "Marcar per afegir les lectures de Reactiva",
        string: "Amb reactiva",
        type: "boolean",
        views: {},
      },
      skip_validations: {
        string: "Saltar validacions",
        type: "boolean",
        views: {},
      },
      solicitud_tensio: {
        selection: [
          ["", ""],
          ["01", "1X220"],
          ["02", "1X230"],
          ["03", "3X380"],
          ["04", "3X380/220"],
          ["05", "3X400"],
          ["06", "3X400/230"],
          ["07", "1X127"],
          ["08", "1X133"],
          ["09", "2X220"],
          ["10", "2X230"],
          ["11", "3X220"],
          ["12", "3X220/127"],
          ["13", "3X230"],
          ["14", "3X230/133"],
          ["15", "5.000"],
          ["16", "6.000"],
          ["17", "7.200"],
          ["18", "8.000"],
          ["19", "10.000"],
          ["20", "11.000"],
          ["21", "12.000"],
          ["22", "13.000"],
          ["23", "13.200"],
          ["24", "15.000"],
          ["25", "16.500"],
          ["26", "17.000"],
          ["27", "20.000"],
          ["28", "22.000"],
          ["29", "25.000"],
          ["30", "26.500"],
          ["31", "30.000"],
          ["32", "36.000"],
          ["33", "44.000"],
          ["34", "45.000"],
          ["35", "66.000"],
          ["36", "110.000"],
          ["37", "132.000"],
          ["38", "220.000"],
          ["39", "400.000"],
          ["40", "1200"],
          ["41", "2000"],
          ["42", "5500"],
          ["43", "55000"],
          ["44", "130000"],
          ["45", "100"],
          ["46", "150"],
          ["47", "3x100"],
          ["48", "3x150/260"],
          ["49", "3x260"],
          ["99", "Otra tensi\u00f3n obsoleta"],
        ],
        string: "Tensi\u00f3 Sol.licitada",
        type: "selection",
        views: {},
      },
      state: {
        selection: [
          ["init", "Init"],
          ["end", "End"],
        ],
        string: "State",
        type: "selection",
        views: {},
      },
      tariff: {
        selection: [
          ["001", "2.0A"],
          ["004", "2.0DHA"],
          ["007", "2.0DHS"],
          ["018", "2.0TD"],
          ["005", "2.1A"],
          ["006", "2.1DHA"],
          ["008", "2.1DHS"],
          ["003", "3.0A"],
          ["019", "3.0TD"],
          ["024", "3.0TDVE"],
          ["011", "3.1A"],
          ["012", "6.1A"],
          ["017", "6.1B"],
          ["020", "6.1TD"],
          ["025", "6.1TDVE"],
          ["013", "6.2"],
          ["021", "6.2TD"],
          ["014", "6.3"],
          ["022", "6.3TD"],
          ["015", "6.4"],
          ["023", "6.4TD"],
          ["016", "6.5"],
        ],
        string: "Tarifa ATR",
        type: "selection",
        views: {},
      },
      tipo_pago: {
        context: "",
        domain: [],
        relation: "payment.type",
        size: 64,
        string: "Tipo de pago",
        type: "many2one",
        views: {},
      },
      vat: {
        size: 11,
        string: "N\u00famero de Document",
        type: "char",
        views: {},
      },
      vat_kind: {
        selection: [
          ["NI", "NIF"],
          ["NV", "N.I.V.A"],
          ["OT", "Otro"],
          ["PS", "Pasaporte"],
          ["NE", "NIE"],
        ],
        string: "Tipus de document",
        type: "selection",
        views: {},
      },
    },
    model: "giscedata.switching.mod.con.wizard",
    name: "giscedata.switching.mod.con.wizard.form",
    search_fields: { primary: [], secondary: [] },
    toolbar: {
      action: [],
      print: [],
      relate: [
        {
          auto_refresh: 0,
          context: "{'active_test': False}",
          domain: "[('id', '=', active_id)]",
          groups_id: [],
          id: -1,
          limit: 0,
          name: "giscedata.switching.mod.con.wizard",
          res_model: "giscedata.switching.mod.con.wizard",
          src_model: "giscedata.switching.mod.con.wizard",
          string: "giscedata.switching.mod.con.wizard",
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
    view_id: 1801,
  },
};
