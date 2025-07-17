export const mockFormView = {
  view_id: 1001,
  type: "form",
  arch: `<?xml version="1.0"?>
    <form string="Sales Order">
        <field name="order_line"
        widget_props="{'infinite': '1'}"
        context="{'default_order_id': active_id}"/>
    </form>`,
  fields: {
    order_line: {
      type: "one2many",
      string: "Order Lines",
      relation: "sale.order.line",
      relation_field: "order_id",
      infinite: true, // Add infinite property directly to field definition
    },
  },
};

// Mock tree view for one2many field (embedded in form)
export const mockOne2ManyTreeView = {
  view_id: 1002,
  type: "tree",
  arch: `<?xml version="1.0"?>
    <tree string="Order Lines"
          colors="red:discount>20;orange:discount>10;green:quantity>=5;blue:price_unit>300;purple:price_unit>400"
          status="green:quantity>=8;red:discount>20;orange:discount>10;blue:price_unit>300">
      <field name="sequence" widget="handle"/>
      <field name="description"/>
      <field name="quantity" sum="Total Qty"/>
      <field name="price_unit" sum="Avg Price"/>
      <field name="discount"/>
      <field name="total_amount" sum="Total Amount"/>
      <field name="last_updated" autorefresh="1"/>
    </tree>`,
  fields_in_conditions: {
    status: ["quantity", "discount", "price_unit"],
    colors: ["discount", "quantity", "price_unit"],
  },
  fields: {
    sequence: {
      type: "integer",
      string: "Sequence",
    },
    order_id: {
      type: "many2one",
      string: "Order",
      relation: "sale.order",
      required: true,
    },
    product_id: {
      type: "many2one",
      string: "Product",
      relation: "product.product",
      required: true,
    },
    description: {
      type: "text",
      string: "Description",
    },
    quantity: {
      type: "float",
      string: "Quantity",
      required: true,
    },
    price_unit: {
      type: "float",
      string: "Unit Price",
      required: true,
    },
    discount: {
      type: "float",
      string: "Discount (%)",
    },
    price_subtotal: {
      type: "float",
      string: "Subtotal",
      is_function: true,
    },
    total_amount: {
      type: "float",
      string: "Total Amount",
      is_function: true,
    },
    last_updated: {
      type: "datetime",
      string: "Last Updated",
    },
  },
};

// Mock partner data
export const mockPartners = [
  { id: 1, name: "Acme Corporation" },
  { id: 2, name: "Tech Solutions Ltd" },
  { id: 3, name: "Global Industries" },
  { id: 4, name: "Smart Systems Inc" },
  { id: 5, name: "Digital Partners" },
];

// Mock product data
export const mockProducts = [
  {
    id: 1,
    name: "[DESK001] Office Desk",
    default_code: "DESK001",
    list_price: 450.0,
  },
  {
    id: 2,
    name: "[CHAIR001] Ergonomic Chair",
    default_code: "CHAIR001",
    list_price: 250.0,
  },
  {
    id: 3,
    name: '[MON001] Computer Monitor 27"',
    default_code: "MON001",
    list_price: 350.0,
  },
  {
    id: 4,
    name: "[KEY001] Mechanical Keyboard",
    default_code: "KEY001",
    list_price: 120.0,
  },
  {
    id: 5,
    name: "[MOUSE001] Wireless Mouse",
    default_code: "MOUSE001",
    list_price: 45.0,
  },
  {
    id: 6,
    name: "[LAMP001] Desk Lamp LED",
    default_code: "LAMP001",
    list_price: 75.0,
  },
  {
    id: 7,
    name: "[STAND001] Monitor Stand",
    default_code: "STAND001",
    list_price: 85.0,
  },
  {
    id: 8,
    name: "[HDD001] External HDD 2TB",
    default_code: "HDD001",
    list_price: 150.0,
  },
  {
    id: 9,
    name: "[USB001] USB Hub 7-Port",
    default_code: "USB001",
    list_price: 35.0,
  },
  {
    id: 10,
    name: "[CAB001] Filing Cabinet",
    default_code: "CAB001",
    list_price: 320.0,
  },
];

// Generate mock order line data
export function generateMockOrderLines(orderId: number, count: number = 200) {
  const lines = [];

  for (let i = 1; i <= count; i++) {
    // Use deterministic product selection for consistent sorting tests
    const product = mockProducts[(i - 1) % mockProducts.length];

    // Use deterministic values based on index for consistent testing
    const quantity = (i % 10) + 1; // 1-10
    const discount = i % 5 === 0 ? i % 25 : 0; // Every 5th item has discount
    const priceUnit = product.list_price * (1 + ((i % 10) - 5) * 0.02); // Small variation based on index

    lines.push({
      id: i,
      sequence: i * 10,
      order_id: [orderId, `SO/2024/000${orderId}`], // Use proper many2one format
      product_id: [product.id, product.name], // Use proper many2one format
      product_id_name: product.name, // Add separate name field
      description: `${product.name}\nStandard configuration`,
      quantity: quantity,
      price_unit: Math.round(priceUnit * 100) / 100,
      discount: discount,
      price_subtotal: 0, // Will be calculated as function field
      total_amount: undefined, // Function field - initially undefined to trigger loading
      last_updated: new Date(
        Date.now() - Math.random() * 24 * 60 * 60 * 1000,
      ).toISOString(), // Random timestamp within last 24 hours
    });
  }

  return lines;
}

// Mock parent record (sales order)
export const mockParentRecord = {
  id: 1,
  name: "SO/2024/0001",
  partner_id: 1,
  partner_id_name: "Acme Corporation",
  date_order: "2024-01-15 10:30:00",
  state: "draft",
  order_line: generateMockOrderLines(1, 50), // Generate 50 lines to trigger infinite scroll
  amount_untaxed: 0, // Will be calculated
  amount_tax: 0, // Will be calculated
  amount_total: 0, // Will be calculated
};

// Available views for the action
export const mockAvailableViews = {
  form: { view_id: 1001 },
  tree: { view_id: 1002 },
};
