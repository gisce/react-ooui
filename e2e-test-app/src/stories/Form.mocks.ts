// Fields definition shared between all form views
const formFields = {
  name: {
    type: "char",
    string: "Product Name",
    required: true,
  },
  code: {
    type: "char",
    string: "Product Code",
  },
  // Float fields for price
  list_price: {
    type: "float",
    string: "Sale Price",
    digits: [16, 2],
  },
  cost_price: {
    type: "float",
    string: "Cost Price",
    digits: [16, 2],
  },
  margin_percent: {
    type: "float",
    string: "Margin %",
    digits: [16, 2],
  },
  // Integer fields for inventory
  quantity_available: {
    type: "integer",
    string: "Available Qty",
  },
  quantity_reserved: {
    type: "integer",
    string: "Reserved Qty",
  },
  reorder_point: {
    type: "integer",
    string: "Reorder Point",
  },
  reorder_quantity: {
    type: "integer",
    string: "Reorder Qty",
  },
  // Float fields for measurements
  weight: {
    type: "float",
    string: "Weight (kg)",
    digits: [16, 3],
  },
  volume: {
    type: "float",
    string: "Volume (m³)",
    digits: [16, 4],
  },
  // Integer field for rating
  rating: {
    type: "integer",
    string: "Rating (1-100)",
  },
};

// Mock form view with integer and float fields - DEFAULT (no localization)
export const mockFormView = {
  view_id: 3001,
  type: "form",
  arch: `<?xml version="1.0"?>
    <form string="Product">
      <group>
        <field name="name"/>
        <field name="code"/>
      </group>
      <group string="Pricing">
        <field name="list_price"/>
        <field name="cost_price"/>
        <field name="margin_percent"/>
      </group>
      <group string="Inventory">
        <field name="quantity_available"/>
        <field name="quantity_reserved"/>
        <field name="reorder_point"/>
        <field name="reorder_quantity"/>
      </group>
      <group string="Metrics">
        <field name="weight"/>
        <field name="volume"/>
        <field name="rating"/>
      </group>
    </form>`,
  fields: formFields,
};

// Mock form view with LOCALIZED fields (opt-in localization via widget_props)
export const mockFormViewLocalized = {
  view_id: 3002,
  type: "form",
  arch: `<?xml version="1.0"?>
    <form string="Product (Localized)">
      <group>
        <field name="name"/>
        <field name="code"/>
      </group>
      <group string="Pricing">
        <field name="list_price" widget_props='{"localized": true}'/>
        <field name="cost_price" widget_props='{"localized": true}'/>
        <field name="margin_percent" widget_props='{"localized": true}'/>
      </group>
      <group string="Inventory">
        <field name="quantity_available" widget_props='{"localized": true}'/>
        <field name="quantity_reserved" widget_props='{"localized": true}'/>
        <field name="reorder_point" widget_props='{"localized": true}'/>
        <field name="reorder_quantity" widget_props='{"localized": true}'/>
      </group>
      <group string="Metrics">
        <field name="weight" widget_props='{"localized": true}'/>
        <field name="volume" widget_props='{"localized": true}'/>
        <field name="rating" widget_props='{"localized": true}'/>
      </group>
    </form>`,
  fields: formFields,
};

// Mock product data
export const mockProduct = {
  id: 1,
  name: "Premium Widget Pro",
  code: "PWP-001",
  list_price: 1234.56,
  cost_price: 789.12,
  margin_percent: 36.05,
  quantity_available: 1500,
  quantity_reserved: 250,
  reorder_point: 100,
  reorder_quantity: 500,
  weight: 2.345,
  volume: 0.0156,
  rating: 85,
};

// Additional mock products for variety
export const mockProducts = [
  mockProduct,
  {
    id: 2,
    name: "Basic Widget",
    code: "BW-002",
    list_price: 45.99,
    cost_price: 22.50,
    margin_percent: 51.05,
    quantity_available: 5000,
    quantity_reserved: 120,
    reorder_point: 500,
    reorder_quantity: 2000,
    weight: 0.125,
    volume: 0.0008,
    rating: 72,
  },
  {
    id: 3,
    name: "Enterprise Solution Pack",
    code: "ESP-003",
    list_price: 9999.99,
    cost_price: 6500.00,
    margin_percent: 35.00,
    quantity_available: 25,
    quantity_reserved: 5,
    reorder_point: 10,
    reorder_quantity: 50,
    weight: 15.750,
    volume: 0.2500,
    rating: 95,
  },
];
