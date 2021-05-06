export default {
  model: "giscedata.butlleti",
  exampleValues: {
  },
  tree: {
    "arch": "<tree string=\"Butlletins\">\n                    <field name=\"cups_id\"/>\n                    <field name=\"name\"/>\n                    <field name=\"data\"/>\n                    <field name=\"data_vigencia\"/>\n                    <field name=\"partner_id\"/>\n                    <field name=\"partner_address_id\"/>\n                    <field name=\"pot_max_admisible\"/>\n                    <field name=\"dades_installacio\"/>\n                    <field name=\"activitat_us\"/>\n                    <field name=\"data_provisional_obra\"/>\n                </tree>",
    "field_parent": false,
    "fields": {
      "activitat_us": {
        "context": "",
        "domain": [],
        "relation": "giscedata.butlleti.activitat",
        "size": 256,
        "string": "Destination usage",
        "type": "many2one",
        "views": {}
      },
      "cups_id": {
        "context": "",
        "domain": [],
        "relation": "giscedata.cups.ps",
        "required": true,
        "size": 40,
        "string": "CUPS",
        "type": "many2one",
        "views": {}
      },
      "dades_installacio": {
        "selection": [
          [
            "nova",
            "New"
          ],
          [
            "modificacio",
            "Modification"
          ],
          [
            "ampliacio",
            "Extension"
          ]
        ],
        "string": "Installation type",
        "type": "selection",
        "views": {}
      },
      "data": {
        "string": "Bulletin date",
        "type": "date",
        "views": {}
      },
      "data_provisional_obra": {
        "string": "Construction temporary date",
        "type": "date",
        "views": {}
      },
      "data_vigencia": {
        "string": "Effective date",
        "type": "date",
        "views": {}
      },
      "name": {
        "required": true,
        "size": 32,
        "string": "Expedient Number",
        "type": "char",
        "views": {}
      },
      "partner_address_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner.address",
        "size": 64,
        "string": "Installer company address",
        "type": "many2one",
        "views": {}
      },
      "partner_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner",
        "size": 64,
        "string": "Installer company",
        "type": "many2one",
        "views": {}
      },
      "pot_max_admisible": {
        "digits": [
          16,
          3
        ],
        "string": "Max. Acceptable Pow.",
        "type": "float",
        "views": {}
      }
    },
    "model": "giscedata.butlleti",
    "name": "giscedata.butlleti.tree",
    "search_fields": {
      "primary": [],
      "secondary": []
    },
    "toolbar": {
      "action": [],
      "print": [],
      "relate": [
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('id', '=', active_id)]",
          "groups_id": [],
          "id": -1,
          "limit": 0,
          "name": "Class to create an installer company bulletin\n    ",
          "res_model": "giscedata.butlleti",
          "src_model": "giscedata.butlleti",
          "string": "Class to create an installer company bulletin\n    ",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              false,
              "tree"
            ],
            [
              false,
              "form"
            ]
          ]
        }
      ]
    },
    "type": "tree",
    "view_id": 1645
  },
  form: {
    "arch": "<form string=\"Butlletí\">\n                <field name=\"cups_id\" select=\"1\" colspan=\"4\"/>\n                    <field name=\"name\" select=\"1\"/>\n                    <group colspan=\"2\" col=\"4\">\n                        <field name=\"data\" select=\"2\"/>\n                        <field name=\"data_vigencia\" select=\"2\"/>\n                    </group>\n                    <field name=\"partner_id\" select=\"1\" colspan=\"4\"/>\n                    <field name=\"partner_address_id\" domain=\"[('partner_id','=', partner_id)]\" colspan=\"4\"/>\n                    <field name=\"installador_id\" select=\"1\" colspan=\"4\"/>\n                    <separator string=\"Dades d'ús\" colspan=\"4\"/>\n                    <field name=\"activitat_us\"/>\n                    <field name=\"dades_installacio\" select=\"2\"/>\n                    <field name=\"data_provisional_obra\" select=\"2\"/>\n                    <field name=\"numero_installacio\"/>\n                    <separator string=\"Dades tècniques\" colspan=\"4\"/>\n                    <field name=\"derivacio_individual\"/>\n                    <field name=\"pot_max_admisible\" select=\"2\"/>\n                    <field name=\"pot_installada\"/>\n                    <field name=\"resistencia_terra\"/>\n                    <field name=\"resistencia_aillament\"/>\n                    <field name=\"interruptor_diferencial\"/>\n                    <field name=\"has_contract\" select=\"2\"/>\n                </form>",
    "field_parent": false,
    "fields": {
      "activitat_us": {
        "context": "",
        "domain": [],
        "relation": "giscedata.butlleti.activitat",
        "size": 256,
        "string": "Destination usage",
        "type": "many2one",
        "views": {}
      },
      "cups_id": {
        "context": "",
        "domain": [],
        "relation": "giscedata.cups.ps",
        "required": true,
        "size": 40,
        "string": "CUPS",
        "type": "many2one",
        "views": {}
      },
      "dades_installacio": {
        "selection": [
          [
            "nova",
            "New"
          ],
          [
            "modificacio",
            "Modification"
          ],
          [
            "ampliacio",
            "Extension"
          ]
        ],
        "string": "Installation type",
        "type": "selection",
        "views": {}
      },
      "data": {
        "string": "Bulletin date",
        "type": "date",
        "views": {}
      },
      "data_provisional_obra": {
        "string": "Construction temporary date",
        "type": "date",
        "views": {}
      },
      "data_vigencia": {
        "string": "Effective date",
        "type": "date",
        "views": {}
      },
      "derivacio_individual": {
        "size": 256,
        "string": "Individual derivation section",
        "type": "char",
        "views": {}
      },
      "has_contract": {
        "digits": [
          16,
          2
        ],
        "readonly": 1,
        "string": "Has active contract",
        "type": "boolean",
        "views": {}
      },
      "installador_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner",
        "size": 64,
        "string": "Installer",
        "type": "many2one",
        "views": {}
      },
      "interruptor_diferencial": {
        "string": "Differential Sw. Intensity",
        "type": "float",
        "views": {}
      },
      "name": {
        "required": true,
        "size": 32,
        "string": "Expedient Number",
        "type": "char",
        "views": {}
      },
      "numero_installacio": {
        "size": 32,
        "string": "Installation number",
        "type": "char",
        "views": {}
      },
      "partner_address_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner.address",
        "size": 64,
        "string": "Installer company address",
        "type": "many2one",
        "views": {}
      },
      "partner_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner",
        "size": 64,
        "string": "Installer company",
        "type": "many2one",
        "views": {}
      },
      "pot_installada": {
        "digits": [
          16,
          3
        ],
        "string": "Installed power",
        "type": "float",
        "views": {}
      },
      "pot_max_admisible": {
        "digits": [
          16,
          3
        ],
        "string": "Max. Acceptable Pow.",
        "type": "float",
        "views": {}
      },
      "resistencia_aillament": {
        "string": "Insulation resistence",
        "type": "float",
        "views": {}
      },
      "resistencia_terra": {
        "string": "Earthing resistance",
        "type": "float",
        "views": {}
      }
    },
    "model": "giscedata.butlleti",
    "name": "giscedata.butlleti.form",
    "search_fields": {
      "primary": [
        "cups_id",
        "name",
        "partner_id",
        "installador_id"
      ],
      "secondary": [
        "has_contract",
        "data_provisional_obra",
        "dades_installacio",
        "data_vigencia",
        "data",
        "pot_max_admisible"
      ]
    },
    "toolbar": {
      "action": [],
      "print": [],
      "relate": [
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('id', '=', active_id)]",
          "groups_id": [],
          "id": -1,
          "limit": 0,
          "name": "Class to create an installer company bulletin\n    ",
          "res_model": "giscedata.butlleti",
          "src_model": "giscedata.butlleti",
          "string": "Class to create an installer company bulletin\n    ",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              false,
              "tree"
            ],
            [
              false,
              "form"
            ]
          ]
        }
      ]
    },
    "type": "form",
    "view_id": 1646
  },
}