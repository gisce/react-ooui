export default {
  model: "giscedata.signatura.process",
  exampleValues: [
    {
      "all_signed": false,
      "body": "",
      "cc": false,
      "create_date": "2021-04-15 16:29:50",
      "create_uid": [
        1,
        "Administrator1"
      ],
      "data": {
        "callback_method": "bank_account_change",
        "process_data": {
          "account_iban": "ES3231797283092974325421",
          "account_owner": 93,
          "change_date": "2021-04-15",
          "delivery_type": "email",
          "digital_sign": 1,
          "email": "lalal@lapunxa.com",
          "id": 3,
          "info": false,
          "mandate_scheme": "core",
          "owner_address": 146,
          "pagador": 149,
          "payment_mode": 8,
          "print_mandate": 0,
          "state": "init"
        }
      },
      "delivery_type": "poweremail",
      "enviat": true,
      "enviat_carpeta": "outbox",
      "enviat_data": false,
      "expire_time": false,
      "files": [
        153
      ],
      "id": 99,
      "lang": "ca_ES",
      "qr": "iVBORw0KGgoAAAANSUhEUgAAAhIAAAISAQAAAACxRhsSAAAEfElEQVR4nO2dTY7bOBCFX40M9JIGcoAchb5ZY46UG0hH6QMMQO3VqFmQVSzazmAGaTMe43ERRDL1QQIK5Ks/tih+dWx//DICIIMMMsgggwwyyCCDjM6QNk4A8CnYzoBcAAC73xOROvmy2/zLF78HGWT8ZKiqKrKqqpZFda33DqgW+7WOpKprOlDn9cfWZ/kWMl6fsbfVUd71gFzqzUWxnQEgqSJ/nPwHwBbfr34PMsj4V4ztDGCTNxU5A/L+cYLqh4j+eQZ0hQuCB78HGWSEcbq+kX+8qeQf36CmVAVICsnlGyR/3DzwPN9CxusyrvVplaHql1lVkYtp1jWZjqU+JWM+YxMRkTPQZOjuWrT6+4vKZX9Tea8i9bO6+1//HmSQcX/oOAAsCqSjatG6ngIAcgGAdKAtvj64npLxcIbt+wUA0OJS1U612JxcA1aLtliVT6adkjGH0dbTFYCudbE82v9g9+6p0voz9SkZcxhmp7bR92WzBfaxND/Kp9TH1v7ss3wLGa/LsIxT8nXS0k7IGrVom1KaKYP7PhkTGcO+jxZ+QlOqzRzNOmEp04KqBbjvkzGJ4fHTwzz/Ynu86o1cDUuuFlCfkjGLMcSluqdUgBaDKovH+d06C/d9MuYy3E59AS3j5m8BU7NO2/Jpp2RMZLg+tZK+ZoRogX1fWYMgWOGlf7RTMqYwQoVpc41Kj1VFLXATYgWoT8mYxQj5KAuOLr68jv5+MlVQ5yVTDLRTMh7OaGV623k5JOvnSQFAsgLI+ikKAAocJ0Hyh9JfJ2AX6Ne9Bxlk/OOwfX/x9pLD+06WseWk+Vt1ZOpTMuYxQv1pd+stOOquvnpW1d1/ANSnZMxiDHnTWhh9hJz/ECu1NfYqpko7JePhjBCXsmSTm6NquAd0t0oZPyVjLmPofA6jdaDUi2ypqDg5UZ+SMY0R46choQ+Mcf4+RQcFQDslYwpjrJeyRCnsssnV4n183pXCfBQZExnBj2omOiT0WyCqV6To4W0ooL9PxixGyJHWy3WIlca+E1tPbcvnekrGNEas6wtlpi4+3XuyXpS+nlKfkjGNEVyjeJxEN8Lk6nXY/KlPyZjJcH1q9afevWcxfZvY60+9OZp2SsYkRvT3+7mSXgl9ZbYhyd+7/GinZDyc4XV9vXa/Ofi2bPbg1BIz/eyPImMiI/hRPRDVtAC80QS9FwVop/okd7+e5VvIeF1G2PeHOv0jOP29GKU+Uv2tXuj/LN9CxusyQl90S5RqT/ffqUlV5vfJ+A2M2/P60k2HfrDinq0CQH1KxizGWC/l+dAChGxp65B222X9KRmTGTfnSeerf+zXmN/XoXyKdkrGwxnx/NMYye/9pkCPWoUzUdlvSsZExh079eN4XZoiRS/LjkBjnJ+MaYxbO029SqpXTPfMlD22gvs+GdMY9md2kgLYAcV+gtT7+5sKUgG27weQV0CQCiSvAIDF4v7P8i1kvC7j2t/vfnw4pD/30lP1jj7GT8mYx5A7PXz/cWzP8i1kkEEGGWSQQQYZZPz/GX8Dr5vS+0WwwpgAAAAASUVORK5CYII=",
      "recipients": [
        99
      ],
      "reminders": 0,
      "signature_id": "f64c2e4f-566a-451f-8773-88ced14c0a81",
      "signature_url": "https://sign-app.sandbox.signaturit.com/v1/ca/f64c2e4f-566a-451f-8773-88ced14c0a81/552c530f-d7c0-4dd6-93e6-b91b6a92b79d",
      "status": "completed",
      "subject": "Canvi de compte corrent de Clean and iron",
      "template_id": [
        75,
        "Canvi de compte corrent"
      ],
      "template_res_id": 78,
      "traceback": false,
      "type": "advanced",
      "write_date": "2021-04-15 16:32:55"
    }
  ],
  tree: {
    "arch": "<tree string=\"Signatures digitals\">\n                    <field name=\"create_date\" select=\"1\"/>\n                    <field name=\"subject\" select=\"1\"/>\n                    <field name=\"status\" select=\"1\"/>\n                    <field name=\"delivery_type\" select=\"1\"/>\n                    <field name=\"all_signed\" string=\"Requiere todos firmados\" select=\"2\"/>\n                    <field name=\"create_uid\" select=\"2\"/>\n                </tree>",
    "field_parent": false,
    "fields": {
      "all_signed": {
        "help": "Si se marca esta casilla todos los documentos deben de estar firmados para poder continuar con el proceso ya que son bloqueantes.",
        "string": "Todos los documentos firmados",
        "type": "boolean",
        "views": {}
      },
      "create_date": {
        "readonly": true,
        "string": "Fecha de creación",
        "type": "datetime",
        "views": {}
      },
      "create_uid": {
        "context": "",
        "domain": [],
        "readonly": true,
        "relation": "res.users",
        "size": 64,
        "string": "Creador",
        "type": "many2one",
        "views": {}
      },
      "delivery_type": {
        "selection": [
          [
            "poweremail",
            "PowerEmail"
          ],
          [
            "email",
            "E-mail"
          ],
          [
            "sms",
            "SMS"
          ],
          [
            "url",
            "URL"
          ]
        ],
        "string": "Modo de envio",
        "type": "selection",
        "views": {}
      },
      "status": {
        "selection": [
          [
            "wait",
            "En Espera"
          ],
          [
            "doing",
            "En Proceso"
          ],
          [
            "completed",
            "Completado"
          ],
          [
            "error",
            "Error"
          ],
          [
            "expired",
            "Expirado"
          ],
          [
            "canceled",
            "Cancelado"
          ]
        ],
        "string": "Estado",
        "type": "selection",
        "views": {}
      },
      "subject": {
        "required": true,
        "size": 256,
        "string": "Asunto",
        "type": "char",
        "views": {}
      }
    },
    "model": "giscedata.signatura.process",
    "name": "giscedata_signatura.tree",
    "search_fields": {
      "primary": [
        "create_date",
        "subject",
        "status",
        "delivery_type"
      ],
      "secondary": [
        "create_uid",
        "all_signed"
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
          "name": "giscedata.signatura.process",
          "res_model": "giscedata.signatura.process",
          "src_model": "giscedata.signatura.process",
          "string": "giscedata.signatura.process",
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
    "view_id": 1825
  },
  form: {
    arch:
      '<form string="Signatura digital">\n                    <notebook>\n                        <page string="General">\n                            <group colspan="4" col="2">\n                                <field name="subject" select="1"/>\n                            </group>\n                            <group colspan="4" col="2">\n                                <separator string="Mensaje" colspan="2"/>\n                                <field name="body" nolabel="1" height="150"/>\n                            </group>\n                            <field name="recipients" colspan="4" nolabel="1" mode="tree,form">\n                                </field>\n                            <field name="files" colspan="4" nolabel="1" mode="tree,form" context="{\'default_process_id\': active_id}">\n                                </field>\n                            <group colspan="4" col="2">\n                                <field name="all_signed" readonly="1"/>\n                            </group>\n                        </page>\n                        <page string="Avanzado">\n                            <field name="delivery_type"/>\n                            <field name="expire_time"/>\n                            <field name="reminders"/>\n                            <field name="type"/>\n                            <field name="lang"/>\n                            <group colspan="4" col="4">\n                                <field name="template_id"/>\n                                <field name="template_res_id"/>\n                            </group>\n                            <field name="cc" colspan="4" nolabel="1"/>\n                        </page>\n                        <page string="Código QR" attrs="{\'invisible\':[(\'signature_url\',\'=\', False)]}">\n                            <field name="signature_url" colspan="3" widget="url" readonly="1"/>\n                            <button string="Generar" type="object" name="generate_qr" icon="gtk-new"/>\n                            <field name="qr" widget="image" colspan="4" nolabel="1"/>\n                        </page>\n                        <page string="Incidencias" attrs="{\'invisible\':[(\'status\',\'!=\', \'error\')]}">\n                            <separator string="Resumen del Error" colspan="4"/>\n                            <field name="traceback" nolabel="1" readonly="1"/>\n                        </page>\n                    </notebook>\n                    <group colspan="3" col="7" attrs="{\'invisible\':[(\'delivery_type\',\'!=\',\'poweremail\')]}">\n                        <separator string="Enviament per E-mail"/>\n                        <field name="enviat" select="2"/>\n                        <field name="enviat_carpeta" select="2"/>\n                        <field name="enviat_data" select="2"/>\n                    </group>\n                    <group colspan="3" col="7">\n                        <field name="signature_id" readonly="1"/>\n                        <button string="Iniciar" type="object" name="start" icon="gtk-execute" attrs="{\'invisible\':[(\'signature_id\',\'!=\', False)]}"/>\n                        <button string="Actualizar" type="object" name="update" icon="gtk-refresh" attrs="{\'invisible\':[(\'signature_id\',\'=\',False)]}"/>\n                        <button string="Cancelar" type="object" name="cancel" icon="gtk-cancel" attrs="{\'invisible\':[(\'signature_id\',\'=\',False)]}" confirm="Se va a cancelar el proceso de firma y enviar un correo al cliente conforme se ha cancelado, ¿está seguro/a?"/>\n                        <button string="Reenviar correu" type="object" icon="gtk-convert" name="send_poweremail_button" states="wait" attrs="{\'invisible\':[(\'delivery_type\',\'!=\',\'poweremail\')]}"/>\n                    </group>\n                    <group colspan="3" col="4">\n                        <field name="status" readonly="1"/>\n                    </group>\n                </form>',
    field_parent: false,
    fields: {
      all_signed: {
        help:
          "Si se marca esta casilla todos los documentos deben de estar firmados para poder continuar con el proceso ya que son bloqueantes.",
        string: "Todos los documentos firmados",
        type: "boolean",
        views: {},
      },
      body: {
        string: "Texto",
        type: "text",
        views: {},
      },
      cc: {
        string: "Copias Carbón",
        type: "text",
        views: {},
      },
      delivery_type: {
        selection: [
          ["poweremail", "PowerEmail"],
          ["email", "E-mail"],
          ["sms", "SMS"],
          ["url", "URL"],
        ],
        string: "Modo de envio",
        type: "selection",
        views: {},
      },
      enviat: {
        readonly: true,
        string: "Enviat per E-mail",
        type: "boolean",
        views: {},
      },
      enviat_carpeta: {
        readonly: true,
        selection: [
          ["inbox", "Inbox"],
          ["drafts", "Drafts"],
          ["outbox", "Outbox"],
          ["trash", "Trash"],
          ["followup", "Follow Up"],
          ["sent", "Sent Items"],
        ],
        string: "Carpeta",
        type: "selection",
        views: {},
      },
      enviat_data: {
        readonly: true,
        string: "Data d'enviament",
        type: "datetime",
        views: {},
      },
      expire_time: {
        string: "Expiración (días)",
        type: "integer",
        views: {},
      },
      files: {
        context: "",
        domain: [],
        inv_field: "process_id",
        relation: "giscedata.signatura.documents",
        string: "Documentos  ",
        type: "one2many",
        views: {
          form: {
            arch:
              '<form>\n                                    <field name="process_id"/>\n                                    <group colspan="4" col="3">\n                                        <field name="model" colspan="3"/>\n                                        <field name="report_id"/>\n                                        <button string="Generar" type="object" name="generate_report" icon="gtk-print"/>\n                                    </group>\n                                    <field name="doc_file" colspan="4" filename="filename" widget="binary"/>\n                                    <field name="filename"/>\n                                    <field name="category_id"/>\n                                    <group colspan="4" col="4" string="Estado">\n                                        <field name="signature_id"/>\n                                        <field name="status"/>\n                                    </group>\n                                </form>\n                                ',
            fields: {
              category_id: {
                context: "",
                domain: [],
                relation: "ir.attachment.category",
                size: 64,
                string: "Categoria del Adjunto",
                type: "many2one",
                views: {},
              },
              doc_file: {
                size: 24,
                string: "Documento",
                type: "char",
                views: {},
              },
              filename: {
                size: 256,
                string: "Nombre fichero",
                type: "char",
                views: {},
              },
              model: {
                selection: [
                  ["payment.mandate", "payment.mandate"],
                  ["giscedata.switching", "giscedata.switching"],
                  ["giscedata.polissa", "Polissa d'un Client"],
                  ["payment.mandate", "payment.mandate"],
                  ["giscedata.polissa", "Polissa d'un Client"],
                ],
                size: 128,
                string: "Model",
                type: "reference",
                views: {},
              },
              process_id: {
                context: "",
                domain: [],
                relation: "giscedata.signatura.process",
                required: true,
                size: 64,
                string: "Signatura",
                type: "many2one",
                views: {},
              },
              report_id: {
                context: "",
                domain: [],
                relation: "ir.actions.report.xml",
                size: 64,
                string: "Report",
                type: "many2one",
                views: {},
              },
              signature_id: {
                readonly: true,
                size: 36,
                string: "Id signatura",
                type: "char",
                views: {},
              },
              status: {
                readonly: true,
                selection: [
                  ["draft", "Borrador"],
                  ["in_queue", "En cola"],
                  ["ready", "Preparado"],
                  ["signing", "Firmando"],
                  ["completed", "Completado"],
                  ["expired", "Caducado"],
                  ["canceled", "Cancelado"],
                  ["declined", "Rechazado"],
                  ["error", "Error"],
                ],
                string: "Status",
                type: "selection",
                views: {},
              },
            },
          },
          tree: {
            arch:
              '<tree string="Documentos">\n                                    <field name="report_id"/>\n                                    <field name="model_str"/>\n                                    <field name="filename"/>\n                                    <field name="status"/>\n                                </tree>\n                            ',
            fields: {
              filename: {
                size: 256,
                string: "Nombre fichero",
                type: "char",
                views: {},
              },
              model_str: {
                digits: [16, 2],
                readonly: 1,
                size: 256,
                string: "Model",
                type: "char",
                views: {},
              },
              report_id: {
                context: "",
                domain: [],
                relation: "ir.actions.report.xml",
                size: 64,
                string: "Report",
                type: "many2one",
                views: {},
              },
              status: {
                readonly: true,
                selection: [
                  ["draft", "Borrador"],
                  ["in_queue", "En cola"],
                  ["ready", "Preparado"],
                  ["signing", "Firmando"],
                  ["completed", "Completado"],
                  ["expired", "Caducado"],
                  ["canceled", "Cancelado"],
                  ["declined", "Rechazado"],
                  ["error", "Error"],
                ],
                string: "Status",
                type: "selection",
                views: {},
              },
            },
          },
        },
      },
      lang: {
        help:
          "Idioma con el que se generará todo lo referente a este proceso de firma digital",
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
      qr: {
        string: "QR",
        type: "binary",
        views: {},
      },
      recipients: {
        context: "",
        domain: [],
        inv_field: "process_id",
        relation: "giscedata.signatura.recipients",
        string: "Destinatarios",
        type: "one2many",
        views: {
          form: {
            arch:
              '<form>\n                                    <field name="partner_address_id" colspan="4" on_change="on_change_partner_address_id(partner_address_id, context)"/>\n                                    <field name="name"/>\n                                    <field name="email"/>\n                                    <field name="phone"/>\n                                    <field name="type"/>\n                                </form>\n                            ',
            fields: {
              email: {
                required: true,
                size: 256,
                string: "E-mail",
                type: "char",
                views: {},
              },
              name: {
                required: true,
                size: 256,
                string: "Nombre",
                type: "char",
                views: {},
              },
              partner_address_id: {
                context: "",
                domain: [],
                relation: "res.partner.address",
                size: 64,
                string: "Partner",
                type: "many2one",
                views: {},
              },
              phone: {
                size: 15,
                string: "Teléfono",
                type: "char",
                views: {},
              },
              type: {
                selection: [
                  ["signer", "Firmante"],
                  ["validator", "Validador"],
                ],
                string: "Tipo",
                type: "selection",
                views: {},
              },
            },
          },
          tree: {
            arch:
              '<tree string="Destinatarios">\n                                    <field name="name"/>\n                                    <field name="email"/>\n                                    <field name="phone"/>\n                                    <field name="type"/>\n                                </tree>\n                                ',
            fields: {
              email: {
                required: true,
                size: 256,
                string: "E-mail",
                type: "char",
                views: {},
              },
              name: {
                required: true,
                size: 256,
                string: "Nombre",
                type: "char",
                views: {},
              },
              phone: {
                size: 15,
                string: "Teléfono",
                type: "char",
                views: {},
              },
              type: {
                selection: [
                  ["signer", "Firmante"],
                  ["validator", "Validador"],
                ],
                string: "Tipo",
                type: "selection",
                views: {},
              },
            },
          },
        },
      },
      reminders: {
        string: "Recordatorio",
        type: "integer",
        views: {},
      },
      signature_id: {
        size: 36,
        string: "Id",
        type: "char",
        views: {},
      },
      signature_url: {
        size: 256,
        string: "URL",
        type: "char",
        views: {},
      },
      status: {
        selection: [
          ["wait", "En Espera"],
          ["doing", "En Proceso"],
          ["completed", "Completado"],
          ["error", "Error"],
          ["expired", "Expirado"],
          ["canceled", "Cancelado"],
        ],
        string: "Estado",
        type: "selection",
        views: {},
      },
      subject: {
        required: true,
        size: 256,
        string: "Asunto",
        type: "char",
        views: {},
      },
      template_id: {
        context: "",
        domain: [],
        relation: "poweremail.templates",
        size: 64,
        string: "Template",
        type: "many2one",
        views: {},
      },
      template_res_id: {
        string: "Template resource",
        type: "integer",
        views: {},
      },
      traceback: {
        readonly: true,
        string: "Resumen del Error",
        type: "text",
        views: {},
      },
      type: {
        selection: [
          ["simple", "Simple"],
          ["advanced", "Avanzado"],
          ["smart", "Automático"],
        ],
        string: "Tipo de firma",
        type: "selection",
        views: {},
      },
    },
    model: "giscedata.signatura.process",
    name: "giscedata_signatura.form",
    search_fields: {
      primary: ["subject"],
      secondary: ["enviat", "enviat_carpeta", "enviat_data"],
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
          name: "giscedata.signatura.process",
          res_model: "giscedata.signatura.process",
          src_model: "giscedata.signatura.process",
          string: "giscedata.signatura.process",
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
    view_id: 1824,
  },
};
