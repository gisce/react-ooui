export default {
  model: "crm.case",
  exampleValues: {
    active: true,
    canal_id: false,
    categ_id: false,
    categ_ids: [2],
    create_date: "2021-09-22 10:56:10",
    create_task: true,
    create_uid: [1, "Administrator"],
    date: "2021-09-22 10:55:45",
    date_action_last: false,
    date_action_next: false,
    date_closed: false,
    date_deadline: false,
    description: false,
    email_cc: false,
    email_from: "3",
    history_line: [],
    id: 194,
    log_ids: [470],
    name: "TEst 4",
    partner_address_id: [
      159,
      "Aguado Ballesteros, Noelia, BD. 123, 12 4  17406",
    ],
    partner_id: [10, "China Export"],
    planned_cost: false,
    planned_revenue: false,
    polissa_id: false,
    priority: "5",
    probability: false,
    ref: false,
    ref2: false,
    section_id: [15, "Contacte Oficina Virtual"],
    som: false,
    stage_id: false,
    state: "done",
    task_id: false,
    user_id: [1, "Administrator"],
    workdones_ids: [],
    integer: 40003.23,
  },
  form: {
    arch: '<form string="Casos">\n      <field name="integer" /> <group col="8" colspan="4">\n                                <field colspan="4" name="partner_id" on_change="onchange_partner_id(partner_id, email_from)" select="1"/>\n                                <field colspan="3" name="partner_address_id" on_change="onchange_partner_address_id(partner_address_id, email_from)" select="2"/>\n                             \n                                <field colspan="3" name="email_from" select="2"/>\n                                <button name="remind_partner" states="open,pending" string="Envia notificaci\u00f3" type="object"/>\n                                <field name="user_id" select="1" domain="[(\'id\',\'!=\', 0)]"/>\n                                <button name="autoassign" string="Assigna-me\'l" type="object"/>\n                                <button name="remind_user" states="open,pending" string="Envia notificaci\u00f3" type="object"/>\n                            </group><field name="state" select="1"/></form>',

    field_parent: false,
    fields: {
      integer: { string: "Integer", type: "integer" },
      active: { string: "Actiu", type: "boolean", views: {} },
      canal_id: {
        context: "",
        domain: [],
        relation: "res.partner.canal",
        size: 64,
        string: "Canal",
        type: "many2one",
        views: {},
      },
      categ_id: {
        context: "",
        domain: "[('section_id','=',section_id)]",
        relation: "crm.case.categ",
        selection: [
          [false, ""],
          [1, "Incid\u00e8ncia"],
          [2, "iojkokj"],
        ],
        size: 64,
        string: "Categoria",
        type: "many2one",
        views: {},
      },
      categ_ids: {
        context: "",
        domain: [],
        relation: "crm.case.categ",
        string: "Categories",
        type: "many2many",
        views: {},
      },
      create_date: {
        readonly: true,
        string: "Creat",
        type: "datetime",
        views: {},
      },
      create_task: { string: "Create a task", type: "boolean", views: {} },
      create_uid: {
        context: "",
        domain: [],
        readonly: true,
        relation: "res.users",
        size: 64,
        string: "Usuari",
        type: "many2one",
        views: {},
      },
      date: { string: "Data", type: "datetime", views: {} },
      date_action_last: {
        readonly: 1,
        string: "\u00daltima acci\u00f3",
        type: "datetime",
        views: {},
      },
      date_action_next: {
        readonly: 1,
        string: "Seg\u00fcent acci\u00f3",
        type: "datetime",
        views: {},
      },
      date_closed: {
        readonly: true,
        string: "Tancat",
        type: "datetime",
        views: {},
      },
      date_deadline: { string: "Data l\u00edmit", type: "datetime", views: {} },
      description: { string: "La vostra acci\u00f3", type: "text", views: {} },
      email_cc: {
        size: 252,
        string: "Observadors emails (CC)",
        type: "char",
        views: {},
      },
      email_from: {
        size: 128,
        string: "Email empresa",
        type: "char",
        views: {},
      },
      history_line: {
        context: "",
        domain: [],
        inv_field: "case_id",
        readonly: 1,
        relation: "crm.case.history",
        string: "Comunicaci\u00f3",
        type: "one2many",
        views: {
          form: {
            arch: '<form string="Historial de comunicaci&#xF3;">\n                                    <group col="6" colspan="4">\n                                        <field name="date" select="1"/>\n                                        <field name="email" select="1"/>\n                                        <field name="canal_id" select="2"/>\n                                    </group>\n                                    <newline/>\n                                    <field colspan="4" name="description" nolabel="1" select="2"/>\n                                </form>\n                                ',
            fields: {
              canal_id: {
                context: "",
                domain: [],
                relation: "res.partner.canal",
                size: 64,
                string: "Canal",
                type: "many2one",
                views: {},
              },
              date: { string: "Data", type: "datetime", views: {} },
              description: {
                string: "Descripci\u00f3",
                type: "text",
                views: {},
              },
              email: { size: 84, string: "Email", type: "char", views: {} },
            },
          },
          tree: {
            arch: '<tree string="Historial de comunicaci&#xF3;">\n                                    <field name="note"/>\n                                </tree>\n                            ',
            fields: {
              note: {
                digits: [16, 2],
                readonly: 1,
                string: "Descripci\u00f3",
                type: "text",
                views: {},
              },
            },
          },
        },
      },
      id: { readonly: true, string: "ID", type: "integer" },
      log_ids: {
        context: "",
        domain: [],
        inv_field: "case_id",
        readonly: 1,
        relation: "crm.case.log",
        string: "Historial del registre",
        type: "one2many",
        views: {
          form: {
            arch: '<form string="Accions">\n                                    <separator colspan="4" string="Informaci\u00f3 de l\'acci\u00f3"/>\n                                    <field colspan="4" name="name"/>\n                                    <field name="date" select="2"/>\n                                    <field name="fefe_id" select="2"/>\n                                    <field name="som" select="2"/>\n                                    <field name="canal_id"/>\n                                </form>\n                            ',
            fields: {
              canal_id: {
                context: "",
                domain: [],
                relation: "res.partner.canal",
                size: 64,
                string: "Canal",
                type: "many2one",
                views: {},
              },
              date: { string: "Data", type: "datetime", views: {} },
              name: { size: 64, string: "Action", type: "char", views: {} },
              som: {
                context: "",
                domain: [],
                relation: "res.partner.som",
                size: 64,
                string: "Grau de satisfacci\u00f3",
                type: "many2one",
                views: {},
              },
              user_id: {
                context: "",
                domain: [],
                readonly: true,
                relation: "res.users",
                size: 64,
                string: "Usuari responsable",
                type: "many2one",
                views: {},
              },
            },
          },
        },
      },
      name: {
        required: true,
        size: 128,
        string: "Descripci\u00f3",
        type: "char",
        views: {},
      },
      partner_address_id: {
        context: "",
        domain: "[('partner_id','=',partner_id)]",
        relation: "res.partner.address",
        size: 64,
        string: "Contacte empresa",
        type: "many2one",
        views: {},
      },
      partner_id: {
        context: "",
        domain: [],
        relation: "res.partner",
        size: 64,
        string: "Empresa",
        type: "many2one",
        views: {},
      },
      planned_cost: { string: "Costos previstos", type: "float", views: {} },
      planned_revenue: { string: "Retorn previst", type: "float", views: {} },
      polissa_id: {
        context: "",
        domain: [],
        relation: "giscedata.polissa",
        size: 64,
        string: "Abonat",
        type: "many2one",
        views: {},
      },
      priority: {
        selection: [
          ["5", "Molt baix"],
          ["4", "Baixa"],
          ["3", "Normal"],
          ["2", "Alta"],
          ["1", "Molt alt"],
        ],
        string: "Prioritat",
        type: "selection",
        views: {},
      },
      probability: { string: "Probabilitat (%)", type: "float", views: {} },
      ref: {
        select: true,
        selection: [
          ["product.product", "Producte"],
          ["project.project", "Projecte"],
          ["giscedata.facturacio.factura", "Factura"],
          ["giscedata.polissa", "P\u00f2lissa"],
          ["project.task", "Tasca del projecte"],
          ["giscedata.polissa", "P\u00f3lissa"],
          ["giscedata.cups.ps", "CUPS"],
          ["account.invoice", "Factura"],
          ["giscedata.polissa", "Polissa"],
          ["giscedata.switching", "Cas ATR"],
          ["giscedata.signatura.process", "Signatura"],
          ["giscegas.polissa", "Contrato"],
          ["stock.production.lot", "Lot de producci\u00f3"],
          ["purchase.order", "Comanda de compra"],
          ["crm.case", "Cas"],
          ["giscedata.crm.lead", "Oferta/Oportunitat"],
        ],
        size: 128,
        string: "Refer\u00e8ncia",
        type: "reference",
        views: {},
      },
      ref2: {
        selection: [
          ["product.product", "Producte"],
          ["project.project", "Projecte"],
          ["giscedata.facturacio.factura", "Factura"],
          ["giscedata.polissa", "P\u00f2lissa"],
          ["project.task", "Tasca del projecte"],
          ["giscedata.polissa", "P\u00f3lissa"],
          ["giscedata.cups.ps", "CUPS"],
          ["account.invoice", "Factura"],
          ["giscedata.polissa", "Polissa"],
          ["giscedata.switching", "Cas ATR"],
          ["giscedata.signatura.process", "Signatura"],
          ["giscegas.polissa", "Contrato"],
          ["stock.production.lot", "Lot de producci\u00f3"],
          ["purchase.order", "Comanda de compra"],
          ["crm.case", "Cas"],
          ["giscedata.crm.lead", "Oferta/Oportunitat"],
        ],
        size: 128,
        string: "Refer\u00e8ncia 2",
        type: "reference",
        views: {},
      },
      section_id: {
        context: "",
        domain: [],
        relation: "crm.case.section",
        required: true,
        select: true,
        size: 64,
        string: "Secci\u00f3",
        type: "many2one",
        views: {},
      },
      som: {
        context: "",
        domain: [],
        relation: "res.partner.som",
        size: 64,
        string: "Grau de satisfacci\u00f3",
        type: "many2one",
        views: {},
      },
      stage_id: {
        context: "",
        domain: "[('section_ids', '=', section_id)]",
        relation: "crm.case.stage",
        size: 64,
        string: "Fase",
        type: "many2one",
        views: {},
      },
      state: {
        selection: [
          ["draft", "Esborrany"],
          ["open", "Obert"],
          ["cancel", "Cancel\u00b7la"],
          ["done", "Tanca"],
          ["pending", "Pendent"],
        ],
        size: 16,
        string: "Status",
        type: "selection",
        views: {},
      },
      task_id: {
        context: "",
        domain: [],
        relation: "project.task",
        size: 64,
        string: "Case Task",
        type: "many2one",
        views: {},
      },
      user_id: {
        context: "",
        domain: [],
        relation: "res.users",
        size: 64,
        string: "Responsable",
        type: "many2one",
        views: {},
      },
      workdones_ids: {
        context: "",
        digits: [16, 2],
        domain: [],
        relation: "project.task.work",
        string: "desconegut",
        type: "one2many",
        views: {
          tree: {
            arch: '<tree editable="top">\n                                <field name="date"/>\n                                <field name="type_id"/>\n                                <field name="hours" sum="Time spent" widget="float_time"/>\n                          \n                                <field name="name"/>    \n                            </tree>\n                        ',
            fields: {
              date: { string: "Data", type: "datetime", views: {} },
              hours: { string: "Temps dedicat", type: "float", views: {} },
              name: {
                size: 512,
                string: "Resum del treball",
                type: "char",
                views: {},
              },
              type_id: {
                context: "",
                domain: [],
                relation: "project.task.work.type",
                size: 64,
                string: "Tipus",
                type: "many2one",
                views: {},
              },
              user_id: {
                context: "",
                domain: [],
                relation: "res.users",
                required: true,
                size: 64,
                string: "Realitzat per",
                type: "many2one",
                views: {},
              },
            },
          },
        },
      },
    },
    model: "crm.case",
    name: "crm.case.form",
    search_fields: {
      primary: [
        "create_uid",
        "name",
        "polissa_id",
        "date",
        "partner_id",
        "user_id",
        "id",
        "state",
        "stage_id",
        "ref",
        "section_id",
      ],
      secondary: [
        "description",
        "categ_ids",
        "partner_address_id",
        "som",
        "date_deadline",
        "active",
        "categ_id",
        "email_from",
      ],
    },
    toolbar: {
      action: [
        {
          auto_refresh: 0,
          context: "{}",
          domain: false,
          groups_id: [],
          id: 2285,
          limit: 80,
          name: "CRM Assignaci\u00f3 M\u00faltiple",
          res_model: "wizard.crm.multi.assign",
          src_model: false,
          string: "CRM Assignaci\u00f3 M\u00faltiple",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[2713, "form"]],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: false,
          groups_id: [],
          id: 1623,
          limit: 80,
          name: "Actualitzar data",
          res_model: "wizard.update.case.date",
          src_model: false,
          string: "Actualitzar data",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[1853, "form"]],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: false,
          groups_id: [126],
          id: 1800,
          limit: 80,
          name: "Tancament m\u00faltiple",
          res_model: "wizard.crm.multi.close",
          src_model: false,
          string: "Tancament m\u00faltiple",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[2087, "form"]],
        },
        {
          auto_refresh: 0,
          context: "{}",
          domain: false,
          groups_id: [126],
          id: 1799,
          limit: 80,
          name: "CRM Canvi d'estat Multiple",
          res_model: "wizard.crm.multi.change",
          src_model: false,
          string: "CRM Canvi d'estat Multiple",
          target: "new",
          type: "ir.actions.act_window",
          usage: false,
          view_id: false,
          view_ids: [],
          view_mode: "form",
          view_type: "form",
          views: [[2086, "form"]],
        },
      ],
      print: [
        {
          attachment: false,
          attachment_use: false,
          auto: true,
          context: "{}",
          groups_id: [],
          header: false,
          id: 1652,
          jasper_file_ids: [],
          jasper_model_id: false,
          jasper_output: false,
          jasper_report: false,
          model: "crm.case",
          multi: false,
          name: "Ordre",
          report_name: "Ordre",
          report_type: "pdf",
          report_webkit: false,
          report_webkit_data: false,
          report_xml: false,
          report_xsl: false,
          signature_in_coordinates: false,
          string: "Ordre",
          type: "ir.actions.report.xml",
          usage: false,
          webkit_debug: false,
          webkit_flags: false,
          webkit_header: [1, "Base Sample"],
          webkit_sign: false,
        },
      ],
      relate: [
        {
          auto_refresh: 0,
          context: "{'active_test': False}",
          domain: "[('id', '=', active_id)]",
          groups_id: [],
          id: -1,
          limit: 0,
          name: "Cas",
          res_model: "crm.case",
          src_model: "crm.case",
          string: "Cas",
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
    view_id: 1624,
  },
};
