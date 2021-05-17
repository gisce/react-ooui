export default {
  model: "res.partner",
  exampleValues: {
    active: true,
    address: [6, 10],
    bank_ids: [],
    category_id: [12],
    child_ids: [],
    cifnif: "NI",
    city: "Taiwan",
    comercial: false,
    comment: false,
    country: [218, "Taiwan"],
    credit: 1983.71,
    credit_limit: false,
    customer: true,
    date: false,
    debit: 0,
    debit_limit: false,
    ean13: false,
    emails: "",
    energy_sector: "undefined",
    events: [39, 31, 30, 29, 5, 4],
    has_debt: 0,
    id: 2,
    lang: false,
    name: "ASUStek",
    ov_users_ids: [],
    parent_id: false,
    payment_type_customer: false,
    payment_type_supplier: false,
    polisses_ids: [],
    property_account_debtor: false,
    property_account_payable: [
      480,
      "410000 Acreedores por prestaciones de servicios (euros)",
    ],
    property_account_position: false,
    property_account_receivable: [492, "430000 Clientes (euros)"],
    property_payment_term: false,
    property_product_pricelist: [1, "Public Pricelist (EUR)"],
    property_product_pricelist_purchase: [
      8,
      "Default Purchase Pricelist (EUR)",
    ],
    property_stock_customer: [74, "Customers"],
    property_stock_supplier: [73, "Suppliers"],
    property_switching_xml_encoding: [1, "UTF8"],
    ref: "1234",
    ref2: false,
    ref_companies: [],
    representante_id: false,
    supplier: true,
    title: false,
    total_debt: 0,
    user_id: [3, "Demo User"],
    vat: false,
    vat_subjected: false,
    website: false,
  },
  form: {
    arch:
      '<form string="Partners">\n                    <group colspan="4" col="6">\n                        <field name="energy_sector" select="2" invisible="1"/>\n                <field name="name" select="1"/>\n                        <group colspan="2" col="4">\n                        <field name="ref" select="1"/>\n                        <field name="ref2"/>\n                    </group>\n                    <field name="emails" invisible="1" select="1"/>\n                <field name="customer" select="1"/>\n                        <field domain="[(\'domain\', \'=\', \'partner\')]" name="title"/>\n                        <field name="lang" select="2"/>\n                        <field name="supplier" select="2"/>\n                    </group>\n                    <notebook colspan="4">\n                        <page string="General">\n                            <field colspan="4" mode="form,tree" name="address" nolabel="1" select="1"/>\n                            <separator colspan="4" string="Categories"/>\n                            <field colspan="4" name="category_id" nolabel="1" select="2"/>\n                        </page>\n                        <page string="Sales &amp; Purchases">\n                            <separator string="General Information" colspan="4"/>\n                            <field name="user_id" select="2"/>\n                            <group colspan="2" col="4">\n                        <group colspan="2" col="4">\n                        <field name="active" select="2"/>\n                        <button name="deactivate_partner" string="Desactivar" type="object" icon="gtk-cancel"/>\n                    </group>\n                <button name="deactivate_partner" string="Desactivar" type="object" icon="gtk-cancel"/>\n                    </group>\n                <field name="website" widget="url"/>\n                            <field name="date" select="2"/>\n                            <field name="parent_id"/>\n                            <field name="representante_id"/>\n                <field name="comercial"/>\n            <newline/>\n                        <separator string="Gestió ATR" colspan="4"/>\n                        <field name="property_switching_xml_encoding"/>\n                <newline/>\n                    <group col="2" colspan="2" name="sale_list">\n                        <separator string="Sales Properties" colspan="2"/>\n                        <field name="property_product_pricelist"/>\n                    </group>\n                <group colspan="2" col="2">\n                        <separator string="Purchases Properties" colspan="2"/>\n                        <field name="property_product_pricelist_purchase"/>\n                    </group>\n                <group colspan="2" col="2">\n<separator string="Stock Properties" colspan="2"/>\n<field name="property_stock_customer"/>\n<field name="property_stock_supplier"/>\n</group>\n                </page>\n                        <page string="Privacy">\n                        <group colspan="4" col="4">\n                        \n                </page>\n                        <page string="History">\n                            <field colspan="4" name="events" nolabel="1" widget="one2many_list"/>\n                        </page>\n                        <page string="Notes">\n                            <field colspan="4" name="comment" nolabel="1"/>\n                        </page>\n                    <page string="Accounting" position="inside">\n                    <group col="2" colspan="2">\n                        <separator string="Customer Accounting Properties" colspan="2"/>\n                        <field name="property_account_receivable"/>\n                        <field name="payment_type_customer" select="1"/>\n            <field name="property_account_debtor"/>\n                <field name="property_account_position"/>\n                        <field name="vat" on_change="vat_change(vat)" select="1"/>\n                    <field name="vat_subjected"/>\n                <field name="property_payment_term"/>\n                    </group>\n                    <group col="2" colspan="2">\n                        <separator string="Supplier Accounting Properties" colspan="2"/>\n                        <field name="property_account_payable"/><field name="payment_type_supplier" select="1"/>\n            \n                    </group>\n                    <group col="2" colspan="2">\n                        <separator string="Customer Credit" colspan="2"/>\n                        <field name="credit" select="2"/>\n                        <field name="total_debt"/>\n                    <field name="has_debt" invisible="1" select="2"/>\n                <field name="credit_limit" select="2"/>\n                    </group>\n                    <group col="2" colspan="2">\n                        <separator string="Supplier Debit" colspan="2"/>\n                        <field name="debit" select="2"/>\n                    </group>\n                    <field colspan="4" context="address=address" name="bank_ids" nolabel="1" select="2">\n                        </field>\n                </page>\n                <page string="Oficina Virtual" position="after">\n                        <field name="ov_users_ids" nolabel="1" colspan="4"/>\n                    </page>\n                </notebook>\n                </form>',
    field_parent: false,
    "fields": {
      "active": {
        "string": "Active",
        "type": "boolean",
        "views": {}
      },
      "address": {
        "context": "",
        "domain": [],
        "inv_field": "partner_id",
        "relation": "res.partner.address",
        "string": "Contacts",
        "type": "one2many",
        "views": {}
      },
      "bank_ids": {
        "context": "",
        "domain": [],
        "inv_field": "partner_id",
        "relation": "res.partner.bank",
        "string": "Banks",
        "type": "one2many",
        "views": {
          "form": {
            "arch": "<form string=\"Bank account\">\n                            <field name=\"state\" select=\"2\"/>\n                            <newline/>\n                            <field name=\"acc_number\" on_change=\"onchange_banco(acc_number, acc_country_id, context)\"/>\n                <field name=\"acc_country_id\" on_change=\"onchange_banco(acc_number, acc_country_id, context)\"/>\n            <newline/>\n                    <field name=\"iban\" on_change=\"onchange_iban(iban, context)\"/>\n            <newline/>\n                    <field name=\"printable_iban\"/>\n                    <newline/>\n                <newline/>\n                            <field name=\"bank\"/>\n                            <newline/>\n                            <field name=\"sequence\"/>\n                            <field name=\"default_bank\"/>\n            <field colspan=\"4\" name=\"name\" select=\"2\"/>\n                            <separator colspan=\"4\" string=\"Bank account owner\"/>\n                            <field colspan=\"4\" name=\"owner_name\" select=\"2\" invisible=\"1\"/>\n                    <field colspan=\"4\" name=\"owner_id\" required=\"0\"/>\n                <field colspan=\"4\" name=\"street\" invisible=\"1\"/>\n                    <field colspan=\"4\" name=\"owner_address_id\" domain=\"[('partner_id', '=', owner_id)]\"/>\n                <newline/>\n                            <field name=\"zip\" invisible=\"1\"/>\n                <field name=\"city\" invisible=\"1\"/>\n                <newline/>\n                            <field invisible=\"1\" name=\"country_id\" select=\"2\"/>\n                <field name=\"state_id\" select=\"2\" invisible=\"1\"/>\n                </form>\n                        ",
            "fields": {
              "acc_country_id": {
                "context": "",
                "domain": [],
                "help": "If the country of the bank is Spain, it validates the bank code. It only reads the digit characters of the bank code:\n- If the number of digits is 18, computes the two digits of control.\n- If the number of digits is 20, computes the two digits of control and ignores the current ones.\n- If the number of digits is different from 18 or 20, it leaves the bank code unaltered.\nThe result is shown in the '1234 5678 06 1234567890' format.",
                "relation": "res.country",
                "required": true,
                "size": 64,
                "string": "Bank country",
                "type": "many2one",
                "views": {}
              },
              "acc_number": {
                "size": 64,
                "states": {
                  "bank": [
                    [
                      "readonly",
                      false
                    ],
                    [
                      "required",
                      true
                    ]
                  ],
                  "iban": [
                    [
                      "readonly",
                      true
                    ],
                    [
                      "required",
                      false
                    ]
                  ]
                },
                "string": "Account Number",
                "type": "char",
                "views": {}
              },
              "bank": {
                "context": "",
                "domain": [],
                "relation": "res.bank",
                "size": 64,
                "string": "Bank",
                "type": "many2one",
                "views": {}
              },
              "city": {
                "digits": [
                  16,
                  2
                ],
                "readonly": 1,
                "size": 128,
                "string": "City",
                "type": "char",
                "views": {}
              },
              "country_id": {
                "context": "",
                "digits": [
                  16,
                  2
                ],
                "domain": [],
                "readonly": 1,
                "relation": "res.country",
                "states": {
                  "bank": [
                    [
                      "readonly",
                      true
                    ],
                    [
                      "required",
                      false
                    ]
                  ],
                  "iban": [
                    [
                      "readonly",
                      false
                    ],
                    [
                      "required",
                      false
                    ]
                  ]
                },
                "string": "Country",
                "type": "many2one",
                "views": {}
              },
              "default_bank": {
                "string": "Default",
                "type": "boolean",
                "views": {}
              },
              "iban": {
                "help": "International Bank Account Number",
                "readonly": true,
                "size": 34,
                "states": {
                  "iban": [
                    [
                      "readonly",
                      false
                    ],
                    [
                      "required",
                      true
                    ]
                  ]
                },
                "string": "IBAN",
                "type": "char",
                "views": {}
              },
              "name": {
                "size": 128,
                "string": "Description",
                "type": "char",
                "views": {}
              },
              "owner_address_id": {
                "context": "",
                "domain": [],
                "relation": "res.partner.address",
                "select": true,
                "size": 64,
                "string": "Owner Address",
                "type": "many2one",
                "views": {}
              },
              "owner_id": {
                "context": "",
                "domain": [],
                "help": "If no owner is selected, the related partner will be used as owner",
                "relation": "res.partner",
                "required": true,
                "select": true,
                "size": 64,
                "string": "Owner",
                "type": "many2one",
                "views": {}
              },
              "owner_name": {
                "digits": [
                  16,
                  2
                ],
                "readonly": 1,
                "size": 128,
                "string": "Account Owner",
                "type": "char",
                "views": {}
              },
              "printable_iban": {
                "digits": [
                  16,
                  2
                ],
                "help": "Space formated International Bank Account Number",
                "readonly": 1,
                "size": 42,
                "string": "Printable IBAN",
                "type": "char",
                "views": {}
              },
              "sequence": {
                "string": "Sequence",
                "type": "integer",
                "views": {}
              },
              "state": {
                "change_default": true,
                "required": true,
                "selection": [
                  [
                    "bank",
                    "Bank account"
                  ],
                  [
                    "iban",
                    "IBAN Account"
                  ]
                ],
                "string": "Bank Type",
                "type": "selection",
                "views": {}
              },
              "state_id": {
                "context": "",
                "digits": [
                  16,
                  2
                ],
                "domain": [],
                "readonly": 1,
                "relation": "res.country.state",
                "string": "State",
                "type": "many2one",
                "views": {}
              },
              "street": {
                "digits": [
                  16,
                  2
                ],
                "readonly": 1,
                "size": 128,
                "string": "Street",
                "type": "char",
                "views": {}
              },
              "zip": {
                "digits": [
                  16,
                  2
                ],
                "readonly": 1,
                "size": 24,
                "states": {
                  "iban": [
                    [
                      "readonly",
                      false
                    ],
                    [
                      "required",
                      false
                    ]
                  ]
                },
                "string": "Zip",
                "type": "char",
                "views": {}
              }
            }
          },
          "tree": {
            "arch": "<tree string=\"Bank Details\">\n                            <field name=\"state\"/>\n                            <field name=\"bank\"/>\n                            <field name=\"owner_name\"/>\n                            <field name=\"acc_number\"/>\n                        <field name=\"iban\"/>\n                <field name=\"default_bank\"/>\n            </tree>\n                    ",
            "fields": {
              "acc_number": {
                "size": 64,
                "states": {
                  "bank": [
                    [
                      "readonly",
                      false
                    ],
                    [
                      "required",
                      true
                    ]
                  ],
                  "iban": [
                    [
                      "readonly",
                      true
                    ],
                    [
                      "required",
                      false
                    ]
                  ]
                },
                "string": "Account Number",
                "type": "char",
                "views": {}
              },
              "bank": {
                "context": "",
                "domain": [],
                "relation": "res.bank",
                "size": 64,
                "string": "Bank",
                "type": "many2one",
                "views": {}
              },
              "default_bank": {
                "string": "Default",
                "type": "boolean",
                "views": {}
              },
              "iban": {
                "help": "International Bank Account Number",
                "readonly": true,
                "size": 34,
                "states": {
                  "iban": [
                    [
                      "readonly",
                      false
                    ],
                    [
                      "required",
                      true
                    ]
                  ]
                },
                "string": "IBAN",
                "type": "char",
                "views": {}
              },
              "owner_name": {
                "digits": [
                  16,
                  2
                ],
                "readonly": 1,
                "size": 128,
                "string": "Account Owner",
                "type": "char",
                "views": {}
              },
              "state": {
                "change_default": true,
                "required": true,
                "selection": [
                  [
                    "bank",
                    "Bank account"
                  ],
                  [
                    "iban",
                    "IBAN Account"
                  ]
                ],
                "string": "Bank Type",
                "type": "selection",
                "views": {}
              }
            }
          }
        }
      },
      "category_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner.category",
        "string": "Categories",
        "type": "many2many",
        "views": {}
      },
      "comercial": {
        "select": true,
        "size": 128,
        "string": "Trade name",
        "type": "char",
        "views": {}
      },
      "comment": {
        "string": "Notes",
        "type": "text",
        "views": {}
      },
      "credit": {
        "digits": [
          16,
          2
        ],
        "help": "Total amount this customer owes you.",
        "readonly": 1,
        "string": "Total Receivable",
        "type": "float",
        "views": {}
      },
      "credit_limit": {
        "string": "Credit Limit",
        "type": "float",
        "views": {}
      },
      "customer": {
        "help": "Check this box if the partner is a customer.",
        "string": "Customer",
        "type": "boolean",
        "views": {}
      },
      "date": {
        "select": 1,
        "string": "Date",
        "type": "date",
        "views": {}
      },
      "debit": {
        "digits": [
          16,
          2
        ],
        "help": "Total amount you have to pay to this supplier.",
        "readonly": 1,
        "string": "Total Payable",
        "type": "float",
        "views": {}
      },
      "emails": {
        "digits": [
          16,
          2
        ],
        "readonly": 1,
        "string": "Emails",
        "type": "text",
        "views": {}
      },
      "energy_sector": {
        "digits": [
          16,
          2
        ],
        "readonly": 1,
        "selection": [
          [
            "electric",
            "Electric"
          ],
          [
            "gas",
            "Gas"
          ],
          [
            "elegas",
            "Electric & Gas"
          ],
          [
            "undefined",
            "Indefinit"
          ]
        ],
        "string": "Sector d'energía",
        "type": "selection",
        "views": {}
      },
      "events": {
        "context": "",
        "domain": [],
        "inv_field": "partner_id",
        "relation": "res.partner.event",
        "string": "Events",
        "type": "one2many",
        "views": {}
      },
      "has_debt": {
        "digits": [
          16,
          2
        ],
        "readonly": 1,
        "string": "Has debt",
        "type": "boolean",
        "views": {}
      },
      "lang": {
        "help": "If the selected language is loaded in the system, all documents related to this partner will be printed in this language. If not, it will be english.",
        "selection": [
          [
            "en_US",
            "English"
          ],
          [
            "ca_ES",
            "Catalan / Català"
          ],
          [
            "es_ES",
            "Spanish / Español"
          ],
          [
            "",
            ""
          ]
        ],
        "size": 5,
        "string": "Language",
        "type": "selection",
        "views": {}
      },
      "name": {
        "required": true,
        "select": true,
        "size": 128,
        "string": "Name",
        "type": "char",
        "views": {}
      },
      "ov_users_ids": {
        "context": {
          "active_test": false
        },
        "domain": [],
        "inv_field": "partner_id",
        "relation": "ov.users",
        "string": "Usuaris Oficina Virtual",
        "type": "one2many",
        "views": {}
      },
      "parent_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner",
        "select": 2,
        "size": 64,
        "string": "Main Company",
        "type": "many2one",
        "views": {}
      },
      "payment_type_customer": {
        "context": "",
        "domain": [],
        "help": "Payment type of the customer",
        "relation": "payment.type",
        "size": 64,
        "string": "Customer payment type",
        "type": "many2one",
        "views": {}
      },
      "payment_type_supplier": {
        "context": "",
        "domain": [],
        "help": "Payment type of the supplier",
        "relation": "payment.type",
        "size": 64,
        "string": "Supplier payment type",
        "type": "many2one",
        "views": {}
      },
      "property_account_debtor": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": "[('type', '=', 'receivable')]",
        "help": "This account will be used as the debtor account for the current partner",
        "relation": "account.account",
        "required": true,
        "string": "Account Debtor",
        "type": "many2one",
        "views": {}
      },
      "property_account_payable": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": "[('type', '=', 'payable')]",
        "help": "This account will be used instead of the default one as the payable account for the current partner",
        "relation": "account.account",
        "required": true,
        "string": "Account Payable",
        "type": "many2one",
        "views": {}
      },
      "property_account_position": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": [],
        "help": "The fiscal position will determine taxes and the accounts used for the the partner.",
        "relation": "account.fiscal.position",
        "string": "Fiscal Position",
        "type": "many2one",
        "views": {}
      },
      "property_account_receivable": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": "[('type', '=', 'receivable')]",
        "help": "This account will be used instead of the default one as the receivable account for the current partner",
        "relation": "account.account",
        "required": true,
        "string": "Account Receivable",
        "type": "many2one",
        "views": {}
      },
      "property_payment_term": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": [],
        "help": "This payment term will be used instead of the default one for the current partner",
        "relation": "account.payment.term",
        "string": "Payment Term",
        "type": "many2one",
        "views": {}
      },
      "property_product_pricelist": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": [
          [
            "type",
            "=",
            "sale"
          ]
        ],
        "help": "This pricelist will be used, instead of the default one,                     for sales to the current partner",
        "relation": "product.pricelist",
        "string": "Sale Pricelist",
        "type": "many2one",
        "views": {}
      },
      "property_product_pricelist_purchase": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": [
          [
            "type",
            "=",
            "purchase"
          ]
        ],
        "help": "This pricelist will be used, instead of the default one, for purchases from the current partner",
        "relation": "product.pricelist",
        "string": "Purchase Pricelist",
        "type": "many2one",
        "views": {}
      },
      "property_stock_customer": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": [],
        "help": "This stock location will be used, instead of the default one, as the destination location for goods you send to this partner",
        "relation": "stock.location",
        "string": "Customer Location",
        "type": "many2one",
        "views": {}
      },
      "property_stock_supplier": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": [],
        "help": "This stock location will be used, instead of the default one, as the source location for goods you receive from the current partner",
        "relation": "stock.location",
        "string": "Supplier Location",
        "type": "many2one",
        "views": {}
      },
      "property_switching_xml_encoding": {
        "context": "",
        "digits": [
          16,
          2
        ],
        "domain": [
          [
            "name",
            "!=",
            false
          ]
        ],
        "help": "Encoding XML amb el qual es generaran els XML's de switching per aquesta empresa",
        "relation": "giscedata.switching.xml.encoding",
        "required": true,
        "string": "Encoding XML switching",
        "type": "many2one",
        "views": {}
      },
      "ref": {
        "select": true,
        "size": 64,
        "string": "Code",
        "type": "char",
        "views": {}
      },
      "ref2": {
        "size": 6,
        "string": "Ref2",
        "type": "char",
        "views": {}
      },
      "representante_id": {
        "context": "",
        "domain": [],
        "relation": "res.partner",
        "size": 64,
        "string": "Representante",
        "type": "many2one",
        "views": {}
      },
      "supplier": {
        "help": "Check this box if the partner is a supplier. If it's not checked, purchase people will not see it when encoding a purchase order.",
        "string": "Supplier",
        "type": "boolean",
        "views": {}
      },
      "title": {
        "selection": [
          [
            "Corp.",
            "Corp."
          ],
          [
            "ltd",
            "Ltd"
          ],
          [
            "",
            ""
          ]
        ],
        "size": 32,
        "string": "Title",
        "type": "selection",
        "views": {}
      },
      "total_debt": {
        "digits": [
          16,
          2
        ],
        "help": "Total amount this customer debts you.",
        "readonly": 1,
        "string": "Total Debt",
        "type": "float",
        "views": {}
      },
      "user_id": {
        "context": "",
        "domain": [],
        "help": "The internal user that is in charge of communicating with this partner if any.",
        "relation": "res.users",
        "size": 64,
        "string": "Dedicated Salesman",
        "type": "many2one",
        "views": {}
      },
      "vat": {
        "help": "Value Added Tax number. Check the box if the partner is subjected to the VAT. Used by the VAT legal statement.",
        "select": true,
        "size": 32,
        "string": "VAT",
        "type": "char",
        "views": {}
      },
      "vat_subjected": {
        "help": "Check this box if the partner is subjected to the VAT. It will be used for the VAT legal statement.",
        "string": "VAT Legal Statement",
        "type": "boolean",
        "views": {}
      },
      "website": {
        "size": 64,
        "string": "Website",
        "type": "char",
        "views": {}
      }
    },
    "model": "res.partner",
    "name": "res.partner.form",
    "search_fields": {
      "primary": [
        "name",
        "ref",
        "emails",
        "customer",
        "address",
        "payment_type_customer",
        "vat",
        "payment_type_supplier",
        "date",
        "comercial"
      ],
      "secondary": [
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
        "category_id"
      ]
    },
    "toolbar": {
      "action": [
        {
          "auto_refresh": 0,
          "context": "{'from_model': 'res.partner'}",
          "domain": false,
          "groups_id": [],
          "id": 1495,
          "limit": 80,
          "name": "Activar usuari a l'Oficina Virtual",
          "res_model": "wizard.ov.user.enable",
          "src_model": false,
          "string": "Activar usuari a l'Oficina Virtual",
          "target": "new",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": [
            1637,
            "wizard.ov.user.enable.form"
          ],
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              false,
              "tree"
            ],
            [
              1637,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": false,
          "groups_id": [],
          "id": 397,
          "limit": 80,
          "name": "Unificar partners",
          "res_model": "wizard.unify.partners",
          "src_model": false,
          "string": "Unificar partners",
          "target": "new",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": [
            442,
            "wizard.unify.partners.form"
          ],
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              false,
              "tree"
            ],
            [
              442,
              "form"
            ]
          ]
        },
        {
          "groups_id": [],
          "id": 83,
          "model": "res.partner",
          "multi": false,
          "name": "Mass Mailing",
          "string": "Mass Mailing",
          "type": "ir.actions.wizard",
          "usage": false,
          "wiz_name": "res.partner.spam_send"
        },
        {
          "groups_id": [],
          "id": 82,
          "model": "res.partner",
          "multi": false,
          "name": "Send SMS",
          "string": "Send SMS",
          "type": "ir.actions.wizard",
          "usage": false,
          "wiz_name": "res.partner.sms_send"
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('id','in',active_ids)]",
          "groups_id": [],
          "id": 77,
          "limit": 80,
          "name": "Company Architecture",
          "res_model": "res.partner",
          "src_model": false,
          "string": "Company Architecture",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": [
            103,
            "res.partner.tree"
          ],
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "tree",
          "views": [
            [
              103,
              "tree"
            ],
            [
              97,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{'from_model': 'res.partner'}",
          "domain": false,
          "groups_id": [],
          "id": 1496,
          "limit": 80,
          "name": "Canviar contrasenya usuari d'Oficina Virtual",
          "res_model": "wizard.ov.change.user.password",
          "src_model": false,
          "string": "Canviar contrasenya usuari d'Oficina Virtual",
          "target": "new",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": [
            1638,
            "wizard.ov.change.user.password.form"
          ],
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              false,
              "tree"
            ],
            [
              1638,
              "form"
            ]
          ]
        }
      ],
      "print": [
        {
          "attachment": false,
          "attachment_use": false,
          "auto": false,
          "context": "{}",
          "groups_id": [],
          "header": true,
          "id": 222,
          "jasper_file_ids": [],
          "jasper_model_id": false,
          "jasper_output": false,
          "jasper_report": false,
          "model": "res.partner",
          "multi": false,
          "name": "Overdue Payments",
          "report_name": "account.overdue",
          "report_type": "pdf",
          "report_webkit": false,
          "report_webkit_data": false,
          "report_xml": false,
          "report_xsl": false,
          "signature_in_coordinates": false,
          "string": "Overdue Payments",
          "type": "ir.actions.report.xml",
          "usage": false,
          "webkit_debug": false,
          "webkit_flags": false,
          "webkit_header": [
            1,
            "Base Sample"
          ],
          "webkit_sign": false
        },
        {
          "attachment": false,
          "attachment_use": false,
          "auto": true,
          "context": "{}",
          "groups_id": [],
          "header": false,
          "id": 404,
          "jasper_file_ids": [],
          "jasper_model_id": false,
          "jasper_output": false,
          "jasper_report": false,
          "model": "res.partner",
          "multi": false,
          "name": "Jasper Partners",
          "report_name": "res.partner.jaspertest",
          "report_type": "pdf",
          "report_webkit": false,
          "report_webkit_data": false,
          "report_xml": false,
          "report_xsl": false,
          "signature_in_coordinates": false,
          "string": "Jasper Partners",
          "type": "ir.actions.report.xml",
          "usage": false,
          "webkit_debug": false,
          "webkit_flags": false,
          "webkit_header": [
            1,
            "Base Sample"
          ],
          "webkit_sign": false
        },
        {
          "attachment": false,
          "attachment_use": false,
          "auto": true,
          "context": "{}",
          "groups_id": [],
          "header": true,
          "id": 64,
          "jasper_file_ids": [],
          "jasper_model_id": false,
          "jasper_output": false,
          "jasper_report": false,
          "model": "res.partner",
          "multi": false,
          "name": "Labels",
          "report_name": "res.partner.address",
          "report_type": "pdf",
          "report_webkit": false,
          "report_webkit_data": false,
          "report_xml": "base/res/partner/report/partner_address.xml",
          "report_xsl": "base/res/partner/report/partner_address.xsl",
          "signature_in_coordinates": false,
          "string": "Labels",
          "type": "ir.actions.report.xml",
          "usage": false,
          "webkit_debug": false,
          "webkit_flags": false,
          "webkit_header": [
            1,
            "Base Sample"
          ],
          "webkit_sign": false
        }
      ],
      "relate": [
        {
          "auto_refresh": 0,
          "context": "{'partner_id': 'active_id'}",
          "domain": "[('partner_id', '=', active_id)]",
          "groups_id": [],
          "id": 949,
          "limit": 0,
          "name": "Purchase orders",
          "res_model": "purchase.order",
          "src_model": "res.partner",
          "string": "Purchase orders",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              1058,
              "tree"
            ],
            [
              1057,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('altre_p', '=', active_id)]",
          "groups_id": [],
          "id": 2185,
          "limit": 80,
          "name": "Gas: Como Notificación de Gas",
          "res_model": "giscegas.polissa",
          "src_model": "res.partner",
          "string": "Gas: Como Notificación de Gas",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              2562,
              "tree"
            ],
            [
              2561,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('pagador', '=', active_id)]",
          "groups_id": [],
          "id": 2184,
          "limit": 80,
          "name": "Gas: Como Pagador de Gas",
          "res_model": "giscegas.polissa",
          "src_model": "res.partner",
          "string": "Gas: Como Pagador de Gas",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              2562,
              "tree"
            ],
            [
              2561,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('titular', '=', active_id)]",
          "groups_id": [],
          "id": 2183,
          "limit": 80,
          "name": "Gas: Como Titular de Gas",
          "res_model": "giscegas.polissa",
          "src_model": "res.partner",
          "string": "Gas: Como Titular de Gas",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              2562,
              "tree"
            ],
            [
              2561,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('altre_p', '=', active_id)]",
          "groups_id": [],
          "id": 431,
          "limit": 80,
          "name": "Como Notificación",
          "res_model": "giscedata.polissa",
          "src_model": "res.partner",
          "string": "Como Notificación",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              480,
              "tree"
            ],
            [
              479,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('pagador', '=', active_id)]",
          "groups_id": [],
          "id": 430,
          "limit": 80,
          "name": "Como Pagador",
          "res_model": "giscedata.polissa",
          "src_model": "res.partner",
          "string": "Como Pagador",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              480,
              "tree"
            ],
            [
              479,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('titular', '=', active_id)]",
          "groups_id": [],
          "id": 429,
          "limit": 80,
          "name": "Como Titular",
          "res_model": "giscedata.polissa",
          "src_model": "res.partner",
          "string": "Como Titular",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": false,
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              480,
              "tree"
            ],
            [
              479,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id','=',active_id)]",
          "groups_id": [],
          "id": 210,
          "limit": 0,
          "name": "Invoices",
          "res_model": "account.invoice",
          "src_model": "res.partner",
          "string": "Invoices",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [
            37,
            38
          ],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              false,
              "tree"
            ],
            [
              225,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id', '=', active_id), ('account_id.code', 'in', ['430000000000', '431500000000'])]",
          "groups_id": [],
          "id": 183,
          "limit": 0,
          "name": "Customer Entries",
          "res_model": "account.move.line",
          "src_model": "res.partner",
          "string": "Customer Entries",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              462,
              "tree"
            ],
            [
              185,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id', '=', active_id)]",
          "groups_id": [],
          "id": 182,
          "limit": 0,
          "name": "All Account Entries",
          "res_model": "account.move.line",
          "src_model": "res.partner",
          "string": "All Account Entries",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              462,
              "tree"
            ],
            [
              185,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id', '=', active_id), ('account_id.type', 'in', ['receivable', 'payable'])]",
          "groups_id": [],
          "id": 181,
          "limit": 0,
          "name": "All Receivables & Payables",
          "res_model": "account.move.line",
          "src_model": "res.partner",
          "string": "All Receivables & Payables",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              462,
              "tree"
            ],
            [
              185,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id', '=', active_id), ('account_id.type', 'in', ['receivable', 'payable']), ('reconcile_id','=',False)]",
          "groups_id": [],
          "id": 180,
          "limit": 0,
          "name": "Unreconciled Receivables & Payables",
          "res_model": "account.move.line",
          "src_model": "res.partner",
          "string": "Unreconciled Receivables & Payables",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              462,
              "tree"
            ],
            [
              185,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id', '=', active_id)]",
          "groups_id": [],
          "id": 81,
          "limit": 0,
          "name": "Events",
          "res_model": "res.partner.event",
          "src_model": "res.partner",
          "string": "Events",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form",
          "view_type": "form",
          "views": [
            [
              121,
              "tree"
            ],
            [
              120,
              "form"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id', '=', active_id)]",
          "groups_id": [],
          "id": 1487,
          "limit": 0,
          "name": "All cases",
          "res_model": "crm.case",
          "src_model": "res.partner",
          "string": "All cases",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form,calendar",
          "view_type": "form",
          "views": [
            [
              1623,
              "tree"
            ],
            [
              1624,
              "form"
            ],
            [
              1891,
              "calendar"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('partner_id', '=', active_id),('state','<>','done'),('state','<>','cancel'),('state','<>','pending')]",
          "groups_id": [],
          "id": 1486,
          "limit": 0,
          "name": "Open cases",
          "res_model": "crm.case",
          "src_model": "res.partner",
          "string": "Open cases",
          "target": "current",
          "type": "ir.actions.act_window",
          "usage": "",
          "view_id": false,
          "view_ids": [],
          "view_mode": "tree,form,calendar",
          "view_type": "form",
          "views": [
            [
              1623,
              "tree"
            ],
            [
              1624,
              "form"
            ],
            [
              1891,
              "calendar"
            ]
          ]
        },
        {
          "auto_refresh": 0,
          "context": "{}",
          "domain": "[('id', '=', active_id)]",
          "groups_id": [],
          "id": -1,
          "limit": 0,
          "name": "Partner",
          "res_model": "res.partner",
          "src_model": "res.partner",
          "string": "Partner",
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
    type: "tree",
    view_id: 96,
  },
};
