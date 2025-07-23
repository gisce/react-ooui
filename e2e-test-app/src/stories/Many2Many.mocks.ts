export const mockFormView = {
  view_id: 1001,
  type: "form",
  arch: `<?xml version="1.0"?>
    <form string="Sales Order">
        <field name="category_ids"
        widget_props="{'infinite': '1'}"
        context="{}"/>
    </form>`,
  fields: {
    category_ids: {
      type: "many2many",
      string: "Product Categories",
      relation: "product.category",
      infinite: true,
    },
  },
};

// Mock tree view for many2many field (embedded in form) - infinite mode
export const mockMany2ManyTreeView = {
  view_id: 1002,
  type: "tree",
  arch: `<?xml version="1.0"?>
    <tree string="Product Categories"
          infinite="1"
          colors="red:priority>8;orange:priority>5;green:active=True;blue:parent_id;purple:code"
          status="green:active=True;red:priority>8;orange:priority>5;blue:parent_id">
      <field name="name"/>
      <field name="code"/>
      <field name="parent_id"/>
      <field name="priority"/>
      <field name="active"/>
      <field name="product_count" sum="Total Products"/>
    </tree>`,
  fields_in_conditions: {
    status: ["active", "priority", "parent_id"],
    colors: ["priority", "active", "parent_id", "code"],
  },
  fields: {
    name: {
      type: "char",
      string: "Category Name",
      required: true,
    },
    code: {
      type: "char",
      string: "Code",
    },
    parent_id: {
      type: "many2one",
      string: "Parent Category",
      relation: "product.category",
    },
    priority: {
      type: "integer",
      string: "Priority",
    },
    active: {
      type: "boolean",
      string: "Active",
    },
    product_count: {
      type: "integer",
      string: "Product Count",
      is_function: true,
    },
  },
};

// Mock category data
export const mockCategories = [
  {
    id: 1,
    name: "Office Furniture",
    code: "OFFICE",
    parent_id: false,
    priority: 5,
    active: true,
    product_count: 25,
  },
  {
    id: 2,
    name: "Electronics",
    code: "ELEC",
    parent_id: false,
    priority: 8,
    active: true,
    product_count: 45,
  },
  {
    id: 3,
    name: "Storage Solutions",
    code: "STORAGE",
    parent_id: [1, "Office Furniture"],
    priority: 3,
    active: true,
    product_count: 12,
  },
  {
    id: 4,
    name: "Computers",
    code: "COMP",
    parent_id: [2, "Electronics"],
    priority: 9,
    active: true,
    product_count: 30,
  },
  {
    id: 5,
    name: "Accessories",
    code: "ACC",
    parent_id: [2, "Electronics"],
    priority: 4,
    active: true,
    product_count: 18,
  },
  {
    id: 6,
    name: "Lighting",
    code: "LIGHT",
    parent_id: [1, "Office Furniture"],
    priority: 2,
    active: true,
    product_count: 8,
  },
  {
    id: 7,
    name: "Audio Equipment",
    code: "AUDIO",
    parent_id: [2, "Electronics"],
    priority: 6,
    active: false,
    product_count: 0,
  },
  {
    id: 8,
    name: "Monitors",
    code: "MON",
    parent_id: [4, "Computers"],
    priority: 7,
    active: true,
    product_count: 15,
  },
  {
    id: 9,
    name: "Keyboards & Mice",
    code: "INPUT",
    parent_id: [5, "Accessories"],
    priority: 5,
    active: true,
    product_count: 22,
  },
  {
    id: 10,
    name: "Cables & Adapters",
    code: "CABLE",
    parent_id: [5, "Accessories"],
    priority: 1,
    active: true,
    product_count: 35,
  },
];

// Generate additional mock categories for testing
export function generateMockCategories(count: number = 50) {
  const categories = [...mockCategories];
  
  for (let i = 11; i <= count; i++) {
    const parentCategory = mockCategories[Math.floor(Math.random() * mockCategories.length)];
    
    categories.push({
      id: i,
      name: `Category ${i}`,
      code: `CAT${i.toString().padStart(3, '0')}`,
      parent_id: Math.random() > 0.3 ? [parentCategory.id, parentCategory.name] : false,
      priority: Math.floor(Math.random() * 10) + 1,
      active: Math.random() > 0.1, // 90% active
      product_count: Math.floor(Math.random() * 50),
    });
  }
  
  return categories;
}

// Mock parent record (sales order with selected categories)
export const mockParentRecord = {
  id: 1,
  name: "SO/2024/0001",
  partner_id: [1, "Acme Corporation"],
  date_order: "2024-01-15 10:30:00",
  state: "draft",
  category_ids: [1, 2, 4, 5, 8], // Selected category IDs for many2many
};

// Available views for the action
export const mockAvailableViews = {
  form: { view_id: 1001 },
  tree: { view_id: 1002 },
};