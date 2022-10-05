export default {
  model: "giscedata.polissa.crear.contracte",
  exampleValues: {
    id: 6,
    accio: "nou",
    data_final: undefined,
    duracio: undefined,
    data_firma_contracte: "2017-06-01 00:00:00",
    data_inici: "2022-10-05",
    first_onchange: true,
    observacions:
      "Cambios realizados detectados autom\u00e1ticamente:\n\u2022 C\u00f3digo DH: E2 \u2192 G0\n\u2022 C\u00f3digo Tarifa: 2A \u2192 2T\n",
    state: "ok",
    parent_id: undefined,
  },
  form: {
    // arch: '<form string="Activaci\u00f3n del contrato">\n          <field name="state" invisible="1"/>\n                <field name="first_onchange" invisible="1"/>\n          <group colspan="4" col="4" >\n            <field name="accio"/>\n            <group colspan="4" col="4" >\n              <label string="Solo cambiar para fechas inferiores a la fecha mostrada, si no se escoger\u00e1 \u00e9sta, ya que es la fecha final del contrato vigente" colspan="4"/>\n              <field name="data_inici" attrs="{\'required\': [(\'accio\', \'=\', \'nou\')]}" on_change="onchange_duracio_first(data_inici, duracio, first_onchange, context)"/>\n              <field name="duracio" attrs="{\'required\': [(\'accio\', \'=\', \'nou\')]}" on_change="onchange_duracio_first(data_inici, duracio, first_onchange, context)"/>\n              <field name="data_final" attrs="{\'required\': [(\'accio\', \'=\', \'nou\')]}"/>\n              <field name="data_firma_contracte"/>\n            </group>\n            <separator colspan="4" string="Observaciones"/>\n            <field name="observacions" colspan="4" required="1" nolabel="1" width="600" height="120"/>\n            <group col="2" colspan="4">\n              <button icon="gtk-cancel" special="cancel" string="Cancelar" name="action_cancel" type="object"/>\n              <button icon="gtk-ok" name="action_crear_contracte" string="Crear contrato" type="object"/>\n            </group>\n          </group>\n          <group colspan="4" col="4" attrs="{\'invisible\': [(\'state\', \'=\', \'ok\')]}">\n            <group col="1" colspan="1" rowspan="2">\n              <image name="gtk-dialog-warning"/>\n            </group>\n            <group colspan="3" col="3">\n              <label colspan="3" string="&lt;b&gt;Atenci\u00f3n!&lt;/b&gt;"/>\n              <label colspan="3" string="Este contrato tiene modificaciones contractuales en estado &lt;b&gt;pendiente&lt;/b&gt;. No se puede crear otra sin cancelarlas"/>\n              <button icon="gtk-close" special="cancel" string="Cerrar" name="action_cancel" type="object"/>\n            </group>\n          </group>\n        </form>',
    arch: `<form string="Activaci\u00f3n del contrato">
    <group colspan="4" col="4" attrs="{\'invisible\': [(\'state\', \'=\', \'fail\')]}">
      <field name="accio" />
      <label attrs="{\'invisible\': [(\'accio\', \'=\', \'modificar\')]}" string="Solo cambiar para fechas inferiores a la fecha mostrada, si no se escoger\u00e1 \u00e9sta, ya que es la fecha final del contrato vigente" colspan="4" />
      <field name="observacions" colspan="4" required="1" nolabel="1" width="600" height="120" />
    </group>
  </form>`,
    field_parent: false,
    fields: {
      accio: {
        required: true,
        selection: [
          ["modificar", "Modificar el contrato existente"],
          ["nou", "Crear una modificaci\u00f3n contractual nueva"],
        ],
        string: "Acci\u00f3n",
        type: "selection",
        views: {},
      },
      data_final: { string: "Fecha final", type: "date", views: {} },
      data_firma_contracte: {
        string: "Fecha firma",
        type: "datetime",
        views: {},
      },
      data_inici: {
        string: "Fecha de activaci\u00f3n",
        type: "date",
        views: {},
      },
      duracio: {
        selection: [
          ["actual", "Final del contrato actual"],
          ["nou", "Nuevo periodo completo de contrato"],
        ],
        string: "Duraci\u00f3n",
        type: "selection",
        views: {},
      },
      first_onchange: { string: "First onchange", type: "boolean", views: {} },
      observacions: {
        required: true,
        string: "Observaciones",
        type: "text",
        views: {},
      },
      state: {
        selection: [
          ["ok", "OK"],
          ["fail", "Error"],
        ],
        string: "Estado",
        type: "selection",
        views: {},
      },
    },
    model: "giscedata.polissa.crear.contracte",
    name: "giscedata.polissa.crear.contracte.form",
    search_fields: { primary: [], secondary: [] },
    toolbar: {
      action: [],
      print: [
        {
          datas: { model: "giscedata.polissa.crear.contracte" },
          id: -1,
          model: "giscedata.polissa.crear.contracte",
          name: "Export to XLSX",
          report_name: "printscreen.list",
          string: "Export to XLSX",
          type: "ir.actions.report.xml",
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
          name: "giscedata.polissa.crear.contracte",
          res_model: "giscedata.polissa.crear.contracte",
          src_model: "giscedata.polissa.crear.contracte",
          string: "giscedata.polissa.crear.contracte",
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
    view_id: 476,
  },
};
