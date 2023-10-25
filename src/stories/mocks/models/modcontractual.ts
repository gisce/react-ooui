export default {
  model: "giscedata.polissa.modcontractual",
  exampleValues: {
    active: true,
    agree_dh: "E3",
    agree_tarifa: "2T",
    agree_tensio: "E0",
    agree_tipus: "05",
    altre_p: false,
    autoconsumo: "00",
    bank: false,
    bono_social_disponible: false,
    cnae: [
      3,
      "0111 - Cultivo de cereales (excepto arroz), leguminosas y semillas oleaginosas",
    ],
    codi_sollicitud_electrointensiu: false,
    comissio: false,
    comptador: "B63011077",
    condicions_generals_id: [1, "Condicions Generals"],
    contract_type: "01",
    create_date: "2021-06-22 19:33:37",
    cups: [1, "ES1234000000000001JN0F"],
    data_final: "2021-06-22",
    data_firma_contracte: "2016-01-01 00:00:00",
    data_inici: "2021-06-22",
    direccio_notificacio: [10, "Sylvie Lelitre, 69 rue de Chimay  5478 Wavre"],
    direccio_pagament: [10, "Sylvie Lelitre, 69 rue de Chimay  5478 Wavre"],
    distribuidora: [3, "Agrolait"],
    enviament: "postal",
    es_electrointensiu: false,
    expected_consumption: 0,
    facturacio: 1,
    facturacio_distri: false,
    facturacio_potencia: "max",
    id: 33,
    lectura_en_baja: false,
    llista_preu: [19, "TARIFAS ELECTRICIDAD (EUR)"],
    modcontractual_ant: [32, "2"],
    modcontractual_seg: false,
    mode_facturacio: "atr",
    mode_facturacio_generacio: "atr",
    name: "3",
    nocutoff: false,
    notificacio: "titular",
    notificacio_email: false,
    observacions:
      "\n----- 22/06/2021 19:33 - Administrator1 (admin) ------------------------------\nCanvis realitzats detectats automàticament:\n\n----- 22/06/2021 19:35 - Administrator1 (admin) ------------------------------\nCanvis realitzats detectats automàticament:\n• Codi DH: E3 → E1\n• Codi Tarifa: 2T → 2A\n",
    pagador: [3, "Agrolait"],
    pagador_email: false,
    payment_mode_id: [1, "No Domiciliat"],
    payment_term: false,
    peatge_directe: true,
    polissa_id: [1, "0001C"],
    potencia: 6,
    potencies_periode: "P1: 6.0",
    property_unitat_potencia: [85, "kW/dia"],
    ref_dist: "000D",
    representante_id: false,
    state: "actiu",
    tarifa: [1, "2.0A"],
    tensio: 127,
    tensio_normalitzada: [1, "127"],
    tg: "1",
    tipo_medida: false,
    tipo_pago: [1, "Demo payment type"],
    tipus: "mod",
    tipus_vivenda: "habitual",
    titular: [4, "Camptocamp"],
    trafo: 0,
    versio_sollicitud: false,
    active_id: 33,
    active_ids: [33],
    parent_id: 1,
    uid: 1,
  },
  tree: {
    arch: '<tree string="Modificacions contractuals" colors="red:active==0">\n                    <field name="distribuidora"/>\n                    <field name="ref_dist" select="1"/>\n                <field name="name"/>\n                    <field name="tipus"/>\n                    <field name="data_inici"/>\n                    <field name="data_final"/>\n                    <field name="active"/>\n                    <field name="state"/>\n                </tree>',
    field_parent: false,
    fields: {
      active: {
        readonly: true,
        required: true,
        string: "Activa",
        type: "boolean",
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
      distribuidora: {
        context: "",
        domain: [["supplier", "=", 1]],
        relation: "res.partner",
        required: true,
        size: 64,
        string: "Distribuidora",
        type: "many2one",
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
      ref_dist: {
        size: 60,
        string: "Referència distribuidora",
        type: "char",
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
    },
    model: "giscedata.polissa.modcontractual",
    name: "giscedata.polissa.modcontractual.tree",
    search_fields: {
      primary: ["ref_dist", "data_final", "data_inici"],
      secondary: [],
    },
    toolbar: {
      action: [],
      print: [],
      relate: [
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('id', '=', active_id)]",
          groups_id: [],
          id: -1,
          limit: 0,
          name: "giscedata.polissa.modcontractual",
          res_model: "giscedata.polissa.modcontractual",
          src_model: "giscedata.polissa.modcontractual",
          string: "giscedata.polissa.modcontractual",
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
    view_id: 482,
  },
  form: {
    arch: `<form string="Modificacions contractuals"> <group string="Tests">\n                        <button type="action" name="417" string="readonly1" icon="gtk-print" readonly="0"/>\n                        <button type="action" name="417" string="readonly0" icon="gtk-print" readonly="0"/>\n                        <button type="action" name="417" string="readonlyVariable1" icon="gtk-print" attrs="{'readonly':[('state','!=','actiu')]}" readonly="0"/>\n                        <button type="action" name="417" string="readonlyVariable2" icon="gtk-print" attrs="{'readonly':[('state','==','actiu')]}" readonly="0"/>\n\n                \n                        <button type="object" name="417" string="readonly1" icon="gtk-print" readonly="1"/>\n                        <button type="object" name="417" string="readonly0" icon="gtk-print" readonly="0"/>\n                        <button type="object" name="417" string="readonlyVariable3" icon="gtk-print" attrs="{'readonly':[('state','!=','actiu')]}"/>\n                        <button type="object" name="417" string="readonlyVariable4" icon="gtk-print" attrs="{'readonly':[('state','==','actiu')]}"/>\n                    </group> </form>`,
    field_parent: false,
    fields: {
      "active": {
        "is_function": false,
        "readonly": true,
        "required": true,
        "string": "Activa",
        "type": "boolean",
        "views": {}
      },
      "agree_dh": {
        "digits": [
          16,
          2
        ],
        "is_function": true,
        "readonly": 1,
        "size": 2,
        "string": "Codi DH",
        "type": "char",
        "views": {}
      },
      "agree_tarifa": {
        "digits": [
          16,
          2
        ],
        "is_function": true,
        "readonly": 1,
        "size": 2,
        "string": "Codi Tarifa",
        "type": "char",
        "views": {}
      },
      "agree_tensio": {
        "digits": [
          16,
          2
        ],
        "is_function": true,
        "readonly": 1,
        "size": 2,
        "string": "Codi Tensió",
        "type": "char",
        "views": {}
      },
      "agree_tipus": {
        "digits": [
          16,
          2
        ],
        "is_function": true,
        "readonly": 1,
        "size": 2,
        "string": "Tipus Punt",
        "type": "char",
        "views": {}
      },
      "altre_p": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "res.partner",
        "size": 64,
        "string": "Contacte alternatiu",
        "type": "many2one",
        "views": {}
      },
      "autoconsumo": {
        "help": "Tipus de autoconsum del contracte segons RD. 900/2015",
        "is_function": false,
        "readonly": true,
        "selection": [
          [
            "00",
            "[00] - Sin Autoconsumo"
          ],
          [
            "01",
            "[01] - Autoconsumo Tipo 1"
          ],
          [
            "2A",
            "[2A] - Autoconsumo tipo 2 (según el Art. 13. 2. a) RD 900/2015)"
          ],
          [
            "2B",
            "[2B] - Autoconsumo tipo 2 (según el Art. 13. 2. b) RD 900/2015)"
          ],
          [
            "2G",
            "[2G] - Servicios auxiliares de generación ligada a un autoconsumo tipo 2"
          ],
          [
            "31",
            "[31] - Sin Excedentes Individual – Consumo"
          ],
          [
            "32",
            "[32] - Sin Excedentes Colectivo – Consumo"
          ],
          [
            "33",
            "[33] - Sin Excedentes Colectivo con acuerdo de compensación – Consumo"
          ],
          [
            "41",
            "[41] - Con excedentes y compensación Individual - Consumo"
          ],
          [
            "42",
            "[42] - Con excedentes y compensación Colectivo– Consumo"
          ],
          [
            "43",
            "[43] - Con excedentes y compensación Colectivo a través de red– Consumo"
          ],
          [
            "51",
            "[51] - Con excedentes sin compensación Individual sin cto de SSAA en Red Interior– Consumo"
          ],
          [
            "52",
            "[52] - Con excedentes sin compensación Colectivo sin cto de SSAA en Red Interior– Consumo"
          ],
          [
            "53",
            "[53] - Con excedentes sin compensación Individual con cto SSAA en Red Interior– Consumo"
          ],
          [
            "54",
            "[54] - Con excedentes sin compensación individual con cto SSAA en Red Interior– SSAA"
          ],
          [
            "55",
            "[55] - Con excedentes sin compensación Colectivo/en Red Interior– Consumo"
          ],
          [
            "56",
            "[56] - Con excedentes sin compensación Colectivo/en Red Interior - SSAA"
          ],
          [
            "57",
            "[57] - Con excedentes sin compensación Colectivo sin cto de SSAA (despreciable) en red interior – Consumo"
          ],
          [
            "58",
            "[58] - Con excedentes sin compensación Colectivo sin cto de SSAA a través de red - Consumo"
          ],
          [
            "61",
            "[61] - Con excedentes sin compensación Individual con cto SSAA a través de red – Consumo"
          ],
          [
            "62",
            "[62] - Con excedentes sin compensación individual con cto SSAA a través de red – SSAA"
          ],
          [
            "63",
            "[63] - Con excedentes sin compensación Colectivo a través de red – Consumo"
          ],
          [
            "64",
            "[64] - Con excedentes sin compensación Colectivo a través de red - SSAA"
          ],
          [
            "71",
            "[71] - Con excedentes sin compensación Individual con cto SSAA a través de red y red interior – Consumo"
          ],
          [
            "72",
            "[72] - Con excedentes sin compensación individual con cto SSAA a través de red y red interior – SSAA"
          ],
          [
            "73",
            "[73] - Con excedentes sin compensación Colectivo con cto de SSAA  a través de red y red interior – Consumo"
          ],
          [
            "74",
            "[74] - Con excedentes sin compensación Colectivo con cto de SSAA a través de red y red interior - SSAA"
          ]
        ],
        "states": {
          "esborrany": [
            [
              "readonly",
              false
            ]
          ],
          "modcontractual": [
            [
              "readonly",
              false
            ]
          ],
          "validar": [
            [
              "readonly",
              false
            ]
          ]
        },
        "string": "Autoconsum",
        "type": "selection",
        "views": {}
      },
      "bank": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "res.partner.bank",
        "size": 64,
        "string": "Compte bancari",
        "type": "many2one",
        "views": {}
      },
      "bono_social_disponible": {
        "is_function": false,
        "string": "Bo social disponible",
        "type": "boolean",
        "views": {}
      },
      "cnae": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscemisc.cnae",
        "size": 64,
        "string": "CNAE",
        "type": "many2one",
        "views": {}
      },
      "codi_sollicitud_electrointensiu": {
        "is_function": false,
        "size": 25,
        "string": "Codi sol·licitud",
        "type": "char",
        "views": {}
      },
      "comissio": {
        "is_function": false,
        "select": 2,
        "selection": [
          [
            "giscedata.polissa.comissio.kw",
            "Comissió per Kw Facturats"
          ],
          [
            "giscedata.polissa.comissio.unica",
            "Comissió Única"
          ]
        ],
        "size": 256,
        "string": "Comissió Assignada",
        "type": "reference",
        "views": {}
      },
      "comptador": {
        "digits": [
          16,
          2
        ],
        "is_function": true,
        "readonly": 1,
        "size": 64,
        "string": "Comptador",
        "type": "char",
        "views": {}
      },
      "condicions_generals_id": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.polissa.condicions.generals",
        "size": 64,
        "string": "Condicions generals",
        "type": "many2one",
        "views": {}
      },
      "contract_type": {
        "help": "Distintos tipos de contratos. Ver REAL DECRETO 1164/2001",
        "is_function": false,
        "required": true,
        "selection": [
          [
            "01",
            "Anual"
          ],
          [
            "02",
            "Eventual medido"
          ],
          [
            "03",
            "Temporada"
          ],
          [
            "05",
            "RECORE"
          ],
          [
            "07",
            "Suministro de Obras"
          ],
          [
            "08",
            "Suministro de Socorro"
          ],
          [
            "09",
            "Eventual a tanto alzado"
          ],
          [
            "10",
            "Pruebas"
          ],
          [
            "11",
            "Duplicado"
          ],
          [
            "12",
            "De reserva"
          ]
        ],
        "string": "Tipus de contracte",
        "type": "selection",
        "views": {}
      },
      "create_date": {
        "is_function": false,
        "readonly": true,
        "string": "Date Created",
        "type": "datetime",
        "views": {}
      },
      "cups": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.cups.ps",
        "required": true,
        "size": 64,
        "string": "CUPS",
        "type": "many2one",
        "views": {}
      },
      "data_final": {
        "is_function": false,
        "select": true,
        "string": "Data final",
        "type": "date",
        "views": {}
      },
      "data_firma_contracte": {
        "is_function": false,
        "string": "Data firma contracte",
        "type": "datetime",
        "views": {}
      },
      "data_inici": {
        "is_function": false,
        "required": true,
        "select": true,
        "string": "Data inici",
        "type": "date",
        "views": {}
      },
      "direccio_notificacio": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "res.partner.address",
        "size": 64,
        "string": "Adreça notificació",
        "type": "many2one",
        "views": {}
      },
      "direccio_pagament": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "res.partner.address",
        "size": 64,
        "string": "Adreça fiscal",
        "type": "many2one",
        "views": {}
      },
      "distribuidora": {
        "context": "",
        "domain": [
          [
            "supplier",
            "=",
            1
          ]
        ],
        "is_function": false,
        "relation": "res.partner",
        "required": true,
        "size": 64,
        "string": "Distribuidora",
        "type": "many2one",
        "views": {}
      },
      "enviament": {
        "is_function": false,
        "selection": [
          [
            "postal",
            "Correu postal"
          ],
          [
            "email",
            "E-mail"
          ],
          [
            "postal+email",
            "Correu postal i e-mail"
          ]
        ],
        "string": "Enviar factura via",
        "type": "selection",
        "views": {}
      },
      "es_electrointensiu": {
        "is_function": false,
        "string": "Consumidor electrointensiu",
        "type": "boolean",
        "views": {}
      },
      "expected_consumption": {
        "help": "Aquest camp calcula el consum total pactat per contractes eventuals sense comptador",
        "is_function": false,
        "readonly": true,
        "string": "Consum pactat",
        "type": "float",
        "views": {}
      },
      "facturacio": {
        "is_function": false,
        "required": true,
        "selection": [
          [
            1,
            "Mensual"
          ],
          [
            2,
            "Bimestral"
          ]
        ],
        "string": "Facturació",
        "type": "selection",
        "views": {}
      },
      "facturacio_distri": {
        "help": "Periodicitat de facturació de distribuidora",
        "is_function": false,
        "selection": [
          [
            1,
            "Mensual"
          ],
          [
            2,
            "Bimestral"
          ]
        ],
        "string": "Facturació de distribuïdora",
        "type": "selection",
        "views": {}
      },
      "facturacio_potencia": {
        "is_function": false,
        "required": true,
        "selection": [
          [
            "max",
            "Maxímetro"
          ],
          [
            "icp",
            "ICP"
          ],
          [
            "recarrec",
            "Recàrrec ICP"
          ]
        ],
        "string": "Facturación Potencia",
        "type": "selection",
        "views": {}
      },
      "lectura_en_baja": {
        "is_function": false,
        "required": true,
        "string": "Lectura en baixa",
        "type": "boolean",
        "views": {}
      },
      "llista_preu": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "product.pricelist",
        "size": 64,
        "string": "Tarifa Comercialitzadora",
        "type": "many2one",
        "views": {}
      },
      "modcontractual_ant": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.polissa.modcontractual",
        "size": 64,
        "string": "Modificació anterior",
        "type": "many2one",
        "views": {}
      },
      "modcontractual_seg": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.polissa.modcontractual",
        "size": 64,
        "string": "Modificació següent",
        "type": "many2one",
        "views": {}
      },
      "mode_facturacio": {
        "is_function": false,
        "selection": [
          [
            "atr",
            "ATR"
          ]
        ],
        "string": "Mode facturació",
        "type": "selection",
        "views": {}
      },
      "mode_facturacio_generacio": {
        "is_function": false,
        "selection": [
          [
            "atr",
            "ATR"
          ]
        ],
        "string": "Mode facturació generacio",
        "type": "selection",
        "views": {}
      },
      "name": {
        "is_function": false,
        "readonly": true,
        "required": true,
        "size": 64,
        "string": "Codi modificació",
        "type": "char",
        "views": {}
      },
      "nocutoff": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.polissa.nocutoff",
        "size": 64,
        "string": "Subministrament no tallable",
        "type": "many2one",
        "views": {}
      },
      "notificacio": {
        "is_function": false,
        "required": true,
        "selection": [
          [
            "titular",
            "Titular"
          ],
          [
            "pagador",
            "Fiscal"
          ],
          [
            "altre_p",
            "Altra"
          ]
        ],
        "string": "Persona notificació",
        "type": "selection",
        "views": {}
      },
      "notificacio_email": {
        "is_function": false,
        "readonly": true,
        "size": 240,
        "string": "Email dir. notif.",
        "type": "char",
        "views": {}
      },
      "observacions": {
        "is_function": false,
        "string": "Observacions",
        "type": "text",
        "views": {}
      },
      "pagador": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "res.partner",
        "required": true,
        "size": 64,
        "string": "Raó fiscal",
        "type": "many2one",
        "views": {}
      },
      "pagador_email": {
        "is_function": false,
        "readonly": true,
        "size": 240,
        "string": "Email dir. fiscal",
        "type": "char",
        "views": {}
      },
      "payment_mode_id": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "payment.mode",
        "size": 64,
        "string": "Grup de pagament",
        "type": "many2one",
        "views": {}
      },
      "payment_term": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "account.payment.term",
        "size": 64,
        "string": "Plazo de pago",
        "type": "many2one",
        "views": {}
      },
      "peatge_directe": {
        "is_function": false,
        "required": true,
        "string": "Peatge directe",
        "type": "boolean",
        "views": {}
      },
      "polissa_id": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.polissa",
        "required": true,
        "select": true,
        "size": 64,
        "string": "Pòlissa",
        "type": "many2one",
        "views": {}
      },
      "potencia": {
        "digits": [
          16,
          3
        ],
        "is_function": false,
        "required": true,
        "string": "Potència contractada (kW)",
        "type": "float",
        "views": {}
      },
      "potencies_periode": {
        "is_function": false,
        "readonly": true,
        "size": 256,
        "string": "Potències contractades",
        "type": "char",
        "views": {}
      },
      "property_unitat_potencia": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": "[('category_id.name', '=', 'POT ELEC')]",
        "help": "Amb quina unitat es vol facturar la potència",
        "is_function": true,
        "relation": "product.uom",
        "required": true,
        "string": "Unitat de facturació potència",
        "type": "many2one",
        "views": {}
      },
      "ref_dist": {
        "is_function": false,
        "size": 60,
        "string": "Referència distribuidora",
        "type": "char",
        "views": {}
      },
      "representante_id": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "res.partner",
        "size": 64,
        "string": "Representante",
        "type": "many2one",
        "views": {}
      },
      "state": {
        "is_function": false,
        "readonly": true,
        "required": true,
        "selection": [
          [
            "esborrany",
            "Borrador"
          ],
          [
            "actiu",
            "Activo"
          ],
          [
            "pendent",
            "Pendiente de activación"
          ],
          [
            "baixa",
            "Baja"
          ],
          [
            "baixa2",
            "Baja por modificación"
          ],
          [
            "baixa3",
            "Baja por renovación"
          ],
          [
            "baixa4",
            "Baja por nueva póliza"
          ]
        ],
        "string": "Estat",
        "type": "selection",
        "views": {}
      },
      "tarifa": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.polissa.tarifa",
        "required": true,
        "size": 64,
        "string": "Tarifa",
        "type": "many2one",
        "views": {}
      },
      "tensio": {
        "is_function": false,
        "required": true,
        "string": "Tensió (V)",
        "type": "integer",
        "views": {}
      },
      "tensio_normalitzada": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "giscedata.tensions.tensio",
        "required": true,
        "size": 64,
        "string": "Tensió normalitzada",
        "type": "many2one",
        "views": {}
      },
      "tg": {
        "help": "Telegestió operativa amb o sense corba de càrrega (CCH)",
        "is_function": false,
        "selection": [
          [
            "1",
            "Operativa amb CCH"
          ],
          [
            "2",
            "No operativa"
          ],
          [
            "3",
            "Operativa Sense CCH"
          ]
        ],
        "string": "Telegestió",
        "type": "selection",
        "views": {}
      },
      "tipo_medida": {
        "is_function": false,
        "readonly": true,
        "size": 2,
        "string": "Tipus de Punt de Mesura",
        "type": "char",
        "views": {}
      },
      "tipo_pago": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "payment.type",
        "required": true,
        "size": 64,
        "string": "Tipo de pago",
        "type": "many2one",
        "views": {}
      },
      "tipus": {
        "is_function": false,
        "required": true,
        "selection": [
          [
            "alta",
            "Alta"
          ],
          [
            "baixa",
            "Baja"
          ],
          [
            "mod",
            "Modificación"
          ],
          [
            "reno",
            "Renovación"
          ]
        ],
        "string": "Tipus",
        "type": "selection",
        "views": {}
      },
      "tipus_vivenda": {
        "is_function": false,
        "readonly": true,
        "selection": [
          [
            "habitual",
            "Habitual"
          ],
          [
            "no_habitual",
            "No habitual"
          ]
        ],
        "string": "Tipus vivenda",
        "type": "selection",
        "views": {}
      },
      "titular": {
        "context": "",
        "domain": [],
        "is_function": false,
        "relation": "res.partner",
        "size": 64,
        "string": "Titular",
        "type": "many2one",
        "views": {}
      },
      "trafo": {
        "is_function": false,
        "required": true,
        "string": "Trafo KVA",
        "type": "float",
        "views": {}
      },
      "versio_sollicitud": {
        "is_function": false,
        "size": 6,
        "string": "Versió sol.licitud",
        "type": "char",
        "views": {}
      }
    },
    model: "giscedata.polissa.modcontractual",
    name: "giscedata.polissa.modcontractual.form",
    search_fields: {
      primary: [
        "polissa_id",
        "data_inici",
        "data_final",
        "state",
        "active",
        "tipus",
        "facturacio",
        "llista_preu",
        "ref_dist",
      ],
      secondary: [
        "condicions_generals_id",
        "agree_tensio",
        "distribuidora",
        "payment_term",
        "autoconsumo",
        "lectura_en_baja",
        "agree_dh",
        "agree_tipus",
        "agree_tarifa",
        "tg",
      ],
    },
    toolbar: {
      action: [],
      print: [],
      relate: [
        {
          auto_refresh: 0,
          context: "{}",
          domain: "[('id', '=', active_id)]",
          groups_id: [],
          id: -1,
          limit: 0,
          name: "giscedata.polissa.modcontractual",
          res_model: "giscedata.polissa.modcontractual",
          src_model: "giscedata.polissa.modcontractual",
          string: "giscedata.polissa.modcontractual",
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
    view_id: 488,
  },
};
