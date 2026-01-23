import { TreeView, FormView, View } from "@gisce/react-ooui";

/**
 * Mock data for reproducing bug #2903 - Infinite table render glitches
 * Issue: https://github.com/gisce/webclient/issues/2903
 *
 * Bug symptoms:
 * - Duplicate rows appearing in infinite tree views
 * - Fields not showing until scroll
 * - Wrong selection behavior - selecting more records than intended
 *
 * Key characteristics from the issue:
 * - Model: hr.expense.expense with 130 records
 * - View has a function field (amount with is_function: true, is_sortable: false)
 * - Only happens in infinite scroll mode (paginated works correctly)
 */

// TREE VIEW - exact structure from issue comment
export const mockExpenseTreeView: TreeView = {
  view_id: 2005,
  type: "tree",
  // @ts-expect-error - name property exists in API response but not in TS type
  name: "hr.expense.expense.tree",
  model: "hr.expense.expense",
  arch: `<tree string="Despeses" infinite="1">
    <field name="date"/>
    <field name="employee_id"/>
    <field name="name"/>
    <field name="ref"/>
    <field name="amount"/>
    <field name="state"/>
  </tree>`,
  field_parent: false,
  // Empty object from actual API response - this is NOT undefined!
  // {} !== undefined → shouldMakeDeferredFunctionRead = true
  // So function fields ARE deferred via processSearchResults
  fields_in_conditions: {},
  fields: {
    amount: {
      digits: [16, 2],
      is_function: true, // KEY: Function field causing issues
      is_sortable: false, // KEY: Not sortable
      readonly: 1,
      string: "Import total",
      type: "float",
      views: {},
    },
    date: {
      is_function: false,
      is_sortable: true,
      string: "Data",
      type: "date",
      views: {},
    },
    employee_id: {
      context: "",
      domain: [],
      is_function: false,
      is_sortable: true,
      relation: "hr.employee",
      required: true,
      size: 64,
      string: "Empleat",
      type: "many2one",
      views: {},
    },
    name: {
      is_function: false,
      is_sortable: true,
      required: true,
      size: 128,
      string: "Full de despeses",
      type: "char",
      views: {},
    },
    ref: {
      is_function: false,
      is_sortable: true,
      size: 32,
      string: "Referència",
      type: "char",
      views: {},
    },
    state: {
      is_function: false,
      is_sortable: true,
      readonly: true,
      selection: [
        ["draft", "Esborrany"],
        ["confirm", "Esperant confirmació"],
        ["accepted", "Acceptat"],
        ["invoiced", "Facturat"],
        ["paid", "Reintegrat"],
        ["cancelled", "Cancel·lat"],
      ],
      string: "Estat",
      type: "selection",
      views: {},
    },
  },
  search_fields: { primary: [], secondary: [] },
};

// FORM VIEW - exact structure from issue comment
// The SearchTreeInfinite component uses useFetchTreeViews which fetches both views
// Fields from both are merged: fields: { ...formView?.fields, ...treeView?.fields }
export const mockExpenseFormView: FormView = {
  view_id: 2006,
  type: "form",
  // @ts-expect-error - name/model properties exist in API response but not in TS type
  name: "hr.expense.form",
  model: "hr.expense.expense",
  arch: `<form string="Full de despeses">
    <group colspan="4" col="6">
      <field name="name" select="1"/>
      <field name="employee_id" select="1"/>
      <field name="id" select="2"/>
      <field name="date" select="1"/>
      <field name="amount"/>
      <field name="currency_id"/>
    </group>
  </form>`,
  field_parent: false,
  fields: {
    amount: {
      digits: [16, 2],
      is_function: true,
      is_sortable: false,
      readonly: 1,
      string: "Import total",
      type: "float",
      views: {},
    },
    currency_id: {
      context: "",
      domain: [],
      is_function: false,
      is_sortable: true,
      relation: "res.currency",
      required: true,
      size: 64,
      string: "Moneda",
      type: "many2one",
      views: {},
    },
    date: {
      is_function: false,
      is_sortable: true,
      string: "Data",
      type: "date",
      views: {},
    },
    date_confirm: {
      is_function: false,
      is_sortable: true,
      string: "Data confirmació",
      type: "date",
      views: {},
    },
    date_valid: {
      is_function: false,
      is_sortable: true,
      string: "Data validació",
      type: "date",
      views: {},
    },
    employee_id: {
      context: "",
      domain: [],
      is_function: false,
      is_sortable: true,
      relation: "hr.employee",
      required: true,
      size: 64,
      string: "Empleat",
      type: "many2one",
      views: {},
    },
    id: { readonly: true, string: "ID", type: "integer" },
    invoice_id: {
      context: "",
      domain: [],
      is_function: false,
      is_sortable: true,
      relation: "account.invoice",
      size: 64,
      string: "Factura",
      type: "many2one",
      views: {},
    },
    journal_id: {
      context: "",
      domain: [],
      is_function: false,
      is_sortable: true,
      relation: "account.journal",
      size: 64,
      string: "Diari forçat",
      type: "many2one",
      views: {},
    },
    name: {
      is_function: false,
      is_sortable: true,
      required: true,
      size: 128,
      string: "Full de despeses",
      type: "char",
      views: {},
    },
    note: {
      is_function: false,
      is_sortable: true,
      string: "Nota",
      type: "text",
      views: {},
    },
    ref: {
      is_function: false,
      is_sortable: true,
      size: 32,
      string: "Referència",
      type: "char",
      views: {},
    },
    state: {
      is_function: false,
      is_sortable: true,
      readonly: true,
      selection: [
        ["draft", "Esborrany"],
        ["confirm", "Esperant confirmació"],
        ["accepted", "Acceptat"],
        ["invoiced", "Facturat"],
        ["paid", "Reintegrat"],
        ["cancelled", "Cancel·lat"],
      ],
      string: "Estat",
      type: "selection",
      views: {},
    },
    user_valid: {
      context: "",
      domain: [],
      is_function: false,
      is_sortable: true,
      relation: "res.users",
      size: 64,
      string: "Validació usuari",
      type: "many2one",
      views: {},
    },
  },
  search_fields: {
    primary: ["name", "employee_id", "date"],
    secondary: [
      "invoice_id",
      "id",
      "state",
      "date_valid",
      "user_valid",
      "ref",
      "date_confirm",
    ],
  },
};

// Employee names for generating realistic expense records
const employeeNames = [
  "Anna Garcia",
  "Pere López",
  "Marta Fernández",
  "Joan Martínez",
  "Carla Sánchez",
  "Jordi Rodríguez",
  "Laura González",
  "Marc Pérez",
  "Núria Díaz",
  "David Ruiz",
  "Elena Moreno",
  "Sergi Jiménez",
  "Cristina Álvarez",
  "Xavier Romero",
  "Sònia Navarro",
];

// Expense states from the view
const expenseStates = [
  "draft",
  "confirm",
  "accepted",
  "invoiced",
  "paid",
  "cancelled",
];

/**
 * Generate 130 mock expense records (exact count from issue)
 * The bug specifically occurs with this dataset size
 */
export const generateExpenseMockData = (count: number = 130) => {
  return Array.from({ length: count }, (_, i) => {
    const employeeIndex = i % employeeNames.length;
    const employeeName = employeeNames[employeeIndex];
    const stateIndex = i % expenseStates.length;
    const state = expenseStates[stateIndex];

    // Generate a date within the last 2 years
    const baseDate = new Date(2024, 0, 1);
    const daysOffset = Math.floor((i * 5.6) % 730); // Spread over ~2 years
    const date = new Date(
      baseDate.getTime() + daysOffset * 24 * 60 * 60 * 1000,
    );
    const dateStr = date.toISOString().split("T")[0];

    // Generate expense name pattern
    const expenseTypes = [
      "Viatge Barcelona",
      "Material oficina",
      "Despeses transport",
      "Formació",
      "Representació",
      "Manutenció",
      "Allotjament",
      "Serveis",
      "Equipament",
      "Comunicacions",
    ];
    const expenseType = expenseTypes[i % expenseTypes.length];
    const expenseName = `${expenseType} - ${dateStr.substring(0, 7)}`;

    // Generate reference
    const ref = `EXP/${date.getFullYear()}/${String(i + 1).padStart(4, "0")}`;

    // Amount will be computed by function field - initially undefined to trigger loading
    // This is the KEY behavior that causes the bug: function fields that arrive async
    return {
      id: i + 1,
      date: dateStr,
      employee_id: [employeeIndex + 1, employeeName] as [number, string],
      name: expenseName,
      ref,
      amount: undefined, // Function field - will be computed async
      state,
      // Extra fields for the form view that may be needed
      currency_id: [1, "EUR"] as [number, string],
    };
  });
};

// Generate the exact 130 records from the issue
export const mockExpenseResults = generateExpenseMockData(130);

// Available views array for the story
export const mockExpenseAvailableViews: View[] = [
  mockExpenseTreeView,
  mockExpenseFormView,
];
