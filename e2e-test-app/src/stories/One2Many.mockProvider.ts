import { ConnectionProvider, ConnectionProviderType } from "@gisce/react-ooui";
import {
  mockFormView,
  mockOne2ManyTreeView,
  mockParentRecord,
  mockPartners,
  mockProducts,
  generateMockOrderLines,
} from "./One2Many.mocks";
import { Tree as TreeOoui, Many2one, Selection, Reference } from "@gisce/ooui";

class MockConnectionProvider implements ConnectionProvider {
  private orderLineData: any[] = [];

  async fieldsViewGet({ model, viewId, viewType, context }: any) {
    console.log("🔍 fieldsViewGet called:", {
      model,
      viewId,
      viewType,
      context,
    });

    if (model === "sale.order" && viewType === "form") {
      console.log("🔍 Returning form view");
      console.log("🔍 Form view arch:", mockFormView.arch);
      console.log(
        "🔍 Form view fields:",
        JSON.stringify(mockFormView.fields, null, 2),
      );
      return mockFormView;
    }

    if (model === "sale.order.line" && viewType === "tree") {
      console.log("🔍 Returning tree view for One2Many");
      console.log("🔍 Tree view arch:", mockOne2ManyTreeView.arch);
      console.log(
        "🔍 Tree view fields:",
        Object.keys(mockOne2ManyTreeView.fields),
      );
      console.log(
        "🔍 Full tree view:",
        JSON.stringify(mockOne2ManyTreeView, null, 2),
      );
      return mockOne2ManyTreeView;
    }

    // Handle specific view ID requests
    if (viewId === 1002 && model === "sale.order.line") {
      console.log("🔍 Returning tree view by ID 1002");
      return mockOne2ManyTreeView;
    }

    if (model === "sale.order.line" && viewType === "form") {
      console.log("🔍 Returning order line form view");
      // Return a simple form view for order lines
      return {
        view_id: 1003,
        type: "form",
        arch: `<?xml version="1.0"?>
          <form string="Order Line">
            <group>
              <field name="product_id"/>
              <field name="description"/>
              <field name="quantity"/>
              <field name="price_unit"/>
              <field name="discount"/>
            </group>
          </form>`,
        fields: mockOne2ManyTreeView.fields,
      };
    }

    console.error(`View not found for model: ${model}, type: ${viewType}`);
    throw new Error(`View not found for model: ${model}, type: ${viewType}`);
  }

  readObjects = async (params: {
    model: string;
    ids: number[];
    fields?: any;
    fieldsToRetrieve?: string[];
    context?: any;
  }) => {
    console.log("🔍 readObjects called with params:", params);
    console.log(
      "🔍 this.orderLineData at start:",
      this.orderLineData ? this.orderLineData.length : "undefined",
    );
    console.log("🔍 this context:", this);
    const { ids, fieldsToRetrieve } = params;

    if (params.model === "sale.order.line") {
      console.log(
        "🔍 readObjects for sale.order.line with fieldsToRetrieve:",
        fieldsToRetrieve,
      );

      if (!ids || !fieldsToRetrieve) {
        return this.read(params);
      }

      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log("🔍 Initializing orderLineData from mockParentRecord");
        console.log(
          "🔍 mockParentRecord.order_line available:",
          mockParentRecord.order_line
            ? mockParentRecord.order_line.length
            : "undefined",
        );
        this.orderLineData = mockParentRecord.order_line;
        console.log(
          "🔍 this.orderLineData after re-initialization:",
          this.orderLineData ? this.orderLineData.length : "undefined",
        );
      }

      // Find the records that match the requested IDs
      const requestedRecords = this.orderLineData.filter((record) =>
        ids.includes(record.id),
      );

      // Generate updated values for autorefreshable fields
      return requestedRecords.map((record) => {
        const updatedRecord: any = { id: record.id };

        fieldsToRetrieve.forEach((fieldName) => {
          switch (fieldName) {
            case "last_updated":
              // Generate a random recent timestamp for autorefresh simulation
              const randomMinutesAgo = Math.floor(Math.random() * 60); // 0-59 minutes ago
              updatedRecord[fieldName] = new Date(
                Date.now() - randomMinutesAgo * 60 * 1000,
              ).toISOString();
              break;

            case "price_subtotal":
              // Recalculate function field
              updatedRecord[fieldName] = this.calculateSubtotal(record);
              break;

            case "total_amount":
              // Recalculate function field with time-based variation
              updatedRecord[fieldName] = this.calculateTotalAmount(record);
              break;

            default:
              // For other fields, return the original value with potential minor variations
              if (typeof (record as any)[fieldName] === "number") {
                // Add small random variation to numeric fields
                const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
                updatedRecord[fieldName] = Math.round(
                  (record as any)[fieldName] * (1 + variation),
                );
              } else {
                updatedRecord[fieldName] = (record as any)[fieldName];
              }
              break;
          }
        });

        return updatedRecord;
      });
    }
    return this.read(params);
  };

  async read({ model, ids, fields }: any) {
    console.log("read called:", { model, ids, fields });

    try {
      if (model === "sale.order" && ids.includes(1)) {
        // Calculate totals from order lines
        const lines = this.orderLineData || [];
        console.log(
          "📊 Calculating function fields for",
          lines.length,
          "order lines",
        );

        const subtotals = lines.map((line) => this.calculateSubtotal(line));
        const amount_untaxed = subtotals.reduce(
          (sum, subtotal) => sum + subtotal,
          0,
        );
        const amount_tax = amount_untaxed * 0.21; // 21% tax
        const amount_total = amount_untaxed + amount_tax;

        // Return the one2many field in the correct format for infinite component
        const one2manyValue = {
          fields: mockOne2ManyTreeView.fields,
          items: lines.map((line) => {
            const processedLine = {
              ...line,
              price_subtotal: this.calculateSubtotal(line),
              total_amount: this.calculateTotalAmount(line),
              // Ensure product_id is properly formatted
              product_id: Array.isArray(line.product_id)
                ? line.product_id
                : [line.product_id, line.product_id_name || ""],
              // Ensure order_id is properly formatted
              order_id: Array.isArray(line.order_id)
                ? line.order_id
                : [line.order_id, `SO/2024/000${line.order_id}`],
            };

            return {
              id: line.id,
              operation: "original",
              values: processedLine,
              treeValues: processedLine,
            };
          }),
        };

        const result = [
          {
            id: 1,
            order_line: one2manyValue, // Return structured one2many value
            name: "SO/2024/0001",
            partner_id: [1, "Acme Corporation"],
            date_order: "2024-01-15 10:30:00",
            state: "draft",
            amount_untaxed: amount_untaxed,
            amount_tax: amount_tax,
            amount_total: amount_total,
          },
        ];

        console.log(
          "📋 Order line structured value being returned:",
          one2manyValue.items.length,
          "records",
        );
        console.log(
          "📋 All item IDs:",
          one2manyValue.items.map((item) => item.id),
        );
        console.log(
          "📋 First few items with treeValues:",
          JSON.stringify(one2manyValue.items.slice(0, 2), null, 2),
        );
        console.log("📋 Sample line data:", JSON.stringify(lines[0], null, 2));

        console.log(
          "Returning sales order data:",
          JSON.stringify(result, null, 2),
        );
        return result;
      }
    } catch (error) {
      console.error("Error in read method:", error);
      throw error;
    }

    if (model === "sale.order.line") {
      console.log("🔍 Reading order lines with IDs:", ids);

      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in read",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      const lines = this.orderLineData.filter((line) => ids.includes(line.id));
      console.log(
        "🔍 Found",
        lines.length,
        "order lines:",
        JSON.stringify(lines.slice(0, 2), null, 2),
      );
      return lines;
    }

    if (model === "res.partner") {
      return mockPartners.filter((partner) => ids.includes(partner.id));
    }

    if (model === "product.product") {
      return mockProducts.filter((product) => ids.includes(product.id));
    }

    return [];
  }

  async searchForTree({
    model,
    domain,
    fields,
    limit = 100,
    offset = 0,
    order,
    context,
  }: any) {
    console.log("🔍🔍🔍 searchForTree called:", {
      model,
      domain,
      fields,
      limit,
      offset,
      order,
      context,
    });
    console.log("🔍🔍🔍 THIS IS THE CALL WE'VE BEEN WAITING FOR!");

    try {
      if (model === "sale.order.line") {
        // Ensure orderLineData is initialized
        if (!this.orderLineData || this.orderLineData.length === 0) {
          console.log(
            "🔍 Initializing orderLineData from mockParentRecord in searchForTree",
          );
          this.orderLineData = mockParentRecord.order_line;
        }

        // Filter lines based on domain if needed
        let filteredLines = [...this.orderLineData];

        // Apply domain filters if any
        if (domain && domain.length > 0) {
          console.log("🔍 Applying domain filters:", JSON.stringify(domain));

          // Handle different domain formats
          const flatDomain = domain.flat(Infinity);

          for (let i = 0; i < flatDomain.length; i += 3) {
            const field = flatDomain[i];
            const operator = flatDomain[i + 1];
            const value = flatDomain[i + 2];

            if (field === "id" && operator === "in" && Array.isArray(value)) {
              console.log("🔍 Filtering by IDs:", value);
              filteredLines = filteredLines.filter((line) =>
                value.includes(line.id),
              );
            } else if (field === "order_id" && operator === "=") {
              console.log("🔍 Filtering by order_id:", value);
              filteredLines = filteredLines.filter((line) => {
                const lineOrderId = Array.isArray(line.order_id)
                  ? line.order_id[0]
                  : line.order_id;
                return lineOrderId === value;
              });
            }
          }
        } else {
          console.log("🔍 No domain filters provided, returning all lines");
        }

        // Calculate function fields and ensure all fields are properly formatted
        console.log(
          "🔍 Calculating function fields for",
          filteredLines.length,
          "order lines",
        );

        const processedLines = filteredLines.map((line) => {
          const processed = {
            ...line,
            price_subtotal: this.calculateSubtotal(line),
            total_amount: this.calculateTotalAmount(line),
            // Ensure product_id is properly formatted for many2one field
            product_id: Array.isArray(line.product_id)
              ? line.product_id
              : [line.product_id, line.product_id_name || ""],
            // Ensure order_id is properly formatted
            order_id: Array.isArray(line.order_id)
              ? line.order_id
              : [line.order_id, `SO/2024/000${line.order_id}`],
            // Update last_updated to current time to show autorefresh working
            last_updated: new Date().toISOString(),
          };

          // Remove any undefined/null values that might cause {} errors
          Object.keys(processed).forEach((key) => {
            if (processed[key] === undefined || processed[key] === null) {
              delete processed[key];
            }
          });

          return processed;
        });

        // Apply sorting
        let finalLines = processedLines;
        if (order) {
          finalLines = this.sortResults(processedLines, order);
        }

        // Apply pagination for infinite scroll
        const paginatedLines = finalLines.slice(offset, offset + limit);

        console.log(
          `Returning ${paginatedLines.length} order lines (${offset}-${
            offset + limit
          } of ${finalLines.length})`,
        );
        console.log(
          "Sample paginated line:",
          JSON.stringify(paginatedLines[0], null, 2),
        );

        return {
          items: paginatedLines,
          totalItems: () => finalLines.length,
        };
      }

      return {
        items: [],
        totalItems: () => 0,
      };
    } catch (error) {
      console.error("Error in searchForTree:", error);
      return {
        items: [],
        totalItems: () => 0,
      };
    }
  }

  async search({
    model,
    domain,
    offset,
    limit,
    order,
    context,
    params,
    fieldsToRetrieve,
  }: any) {
    console.log("🔍 search called with params:", {
      model,
      domain,
      offset,
      limit,
      order,
      params,
      fieldsToRetrieve,
    });

    if (model === "sale.order.line") {
      console.log(
        "🔍 Search called for sale.order.line - returning IDs directly",
      );

      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in search",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      // For One2Many, just return the IDs of the lines that belong to order 1
      const filteredLines = this.orderLineData.filter((line) => {
        const lineOrderId = Array.isArray(line.order_id)
          ? line.order_id[0]
          : line.order_id;
        return lineOrderId === 1; // Filter for order ID 1
      });
      console.log("🔍 Found", filteredLines.length, "lines for order 1");

      // Force a read call to demonstrate the flow
      setTimeout(async () => {
        console.log("🔍 FORCING READ CALL after search");
        await this.read({
          model: "sale.order.line",
          ids: filteredLines.map((line) => line.id),
          fields: {},
        });
      }, 100);

      return filteredLines.map((line) => line.id);
    }

    if (model === "res.partner") {
      return mockPartners.map((p) => p.id);
    }

    if (model === "product.product") {
      return mockProducts.map((p) => p.id);
    }

    if (model === "sale.order.line") {
      return this.orderLineData.map((line) => line.id);
    }

    // Handle ir.attachment searches (return empty for now)
    if (model === "ir.attachment") {
      return [];
    }

    return [];
  }

  async nameGet({ model, ids }: any) {
    console.log("nameGet called:", { model, ids });

    if (model === "res.partner") {
      return mockPartners
        .filter((p) => ids.includes(p.id))
        .map((p) => [p.id, p.name]);
    }

    if (model === "product.product") {
      return mockProducts
        .filter((p) => ids.includes(p.id))
        .map((p) => [p.id, p.name]);
    }

    return [];
  }

  async nameSearch({ model, name, args, limit }: any) {
    console.log("nameSearch called:", { model, name, args, limit });

    if (model === "res.partner") {
      const filtered = mockPartners.filter((p) =>
        p.name.toLowerCase().includes((name || "").toLowerCase()),
      );
      return filtered.slice(0, limit || 7).map((p) => [p.id, p.name]);
    }

    if (model === "product.product") {
      const filtered = mockProducts.filter((p) =>
        p.name.toLowerCase().includes((name || "").toLowerCase()),
      );
      return filtered.slice(0, limit || 7).map((p) => [p.id, p.name]);
    }

    return [];
  }

  async create({ model, values }: any) {
    console.log("create called:", { model, values });

    if (model === "sale.order.line") {
      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in create",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      const newId = Math.max(...this.orderLineData.map((l) => l.id)) + 1;
      const newLine = {
        id: newId,
        ...values,
        price_subtotal: undefined,
      };

      // Add product name if product_id is provided
      if (values.product_id) {
        const product = mockProducts.find((p) => p.id === values.product_id);
        if (product) {
          newLine.product_id_name = product.name;
        }
      }

      this.orderLineData.push(newLine);
      return newId;
    }

    return null;
  }

  async write({ model, ids, values }: any) {
    console.log("write called:", { model, ids, values });

    if (model === "sale.order.line") {
      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in write",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      this.orderLineData = this.orderLineData.map((line) => {
        if (ids.includes(line.id)) {
          const updatedLine = { ...line, ...values };

          // Update product name if product_id changed
          if (values.product_id) {
            const product = mockProducts.find(
              (p) => p.id === values.product_id,
            );
            if (product) {
              updatedLine.product_id_name = product.name;
            }
          }

          return updatedLine;
        }
        return line;
      });
      return true;
    }

    return false;
  }

  async unlink({ model, ids }: any) {
    console.log("unlink called:", { model, ids });

    if (model === "sale.order.line") {
      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in unlink",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      this.orderLineData = this.orderLineData.filter(
        (line) => !ids.includes(line.id),
      );
      return true;
    }

    return false;
  }

  // Helper methods
  private calculateSubtotal(line: any): number {
    const baseAmount = line.quantity * line.price_unit;
    const discount = line.discount || 0;
    const subtotal = baseAmount * (1 - discount / 100);
    return Math.round(subtotal * 100) / 100;
  }

  private calculateTotalAmount(line: any): number {
    const quantity = line.quantity || 0;
    const priceUnit = line.price_unit || 0;
    const discount = line.discount || 0;

    // Add some time-based variation to simulate real function field behavior
    const timeVariation = Math.sin(Date.now() / 5000) * 0.05; // ±5% variation
    const baseAmount = quantity * priceUnit;
    const discountAmount = baseAmount * (discount / 100);
    const totalAmount = (baseAmount - discountAmount) * (1 + timeVariation);

    return Math.round(totalAmount * 100) / 100;
  }

  private sortResults(results: any[], orderString: string): any[] {
    const orderParts = orderString.split(",").map((part) => part.trim());
    const sortCriteria = orderParts.map((part) => {
      const [field, direction = "asc"] = part.split(" ");
      return { field, direction: direction.toLowerCase() };
    });

    return [...results].sort((a, b) => {
      for (const { field, direction } of sortCriteria) {
        const aVal = a[field];
        const bVal = b[field];

        if (aVal === bVal) continue;

        const compareResult = aVal < bVal ? -1 : 1;
        return direction === "desc" ? -compareResult : compareResult;
      }
      return 0;
    });
  }

  // Add fields_view_get method (different from fieldsViewGet)
  async fields_view_get({
    model,
    view_id,
    view_type,
    context,
    toolbar,
    submenu,
  }: any) {
    console.log("fields_view_get called:", {
      model,
      view_id,
      view_type,
      context,
    });
    return this.fieldsViewGet({
      model,
      viewId: view_id,
      viewType: view_type,
      context,
    });
  }

  // Add load_views method that might be called by One2Many
  async load_views({ model, views, context }: any) {
    console.log("🔍 load_views called:", { model, views, context });

    const result: any = {};

    for (const [view_id, view_type] of views) {
      console.log(`🔍 Loading view: ${view_type} with ID: ${view_id}`);
      try {
        const view = await this.fieldsViewGet({
          model,
          viewId: view_id,
          viewType: view_type,
          context,
        });
        result[view_type] = view;
      } catch (error) {
        console.error(
          `Failed to load view ${view_type} for model ${model}:`,
          error,
        );
      }
    }

    return result;
  }

  // Methods required by FormActionView
  async getView({ model, type, context }: any) {
    console.log("getView called:", { model, type, context });

    if (model === "sale.order" && type === "form") {
      console.log("Returning form view:", mockFormView);
      return mockFormView;
    }

    if (model === "sale.order.line" && type === "tree") {
      console.log("Returning tree view:", mockOne2ManyTreeView);
      return mockOne2ManyTreeView;
    }

    if (model === "sale.order.line" && type === "form") {
      console.log("Returning order line form view");
      // Return a simple form view for order lines
      return {
        view_id: 1003,
        type: "form",
        arch: `<?xml version="1.0"?>
          <form string="Order Line">
            <group>
              <field name="product_id"/>
              <field name="description"/>
              <field name="quantity"/>
              <field name="price_unit"/>
              <field name="discount"/>
            </group>
          </form>`,
        fields: mockOne2ManyTreeView.fields,
      };
    }

    console.log("No view found for:", { model, type });
    throw new Error(`View not found for model: ${model}, type: ${type}`);
  }

  async defaultGet({ model, fields, context, extraValues }: any) {
    console.log("defaultGet called:", { model, fields, context, extraValues });

    try {
      if (model === "sale.order") {
        return {
          order_line: [],
          ...(extraValues || {}),
        };
      }

      if (model === "sale.order.line") {
        return {
          sequence: 10,
          product_id: null,
          description: "",
          quantity: 1,
          price_unit: 0,
          discount: 0,
          ...(extraValues || {}),
        };
      }

      return extraValues || {};
    } catch (error) {
      console.error("Error in defaultGet:", error);
      throw error;
    }
  }

  async update({ model, id, values, fields, context }: any) {
    console.log("update called:", { model, id, values, fields, context });
    return this.write({ model, ids: [id], values });
  }

  async executeOnChange({ model, action, ids, payload, fields }: any) {
    console.log("executeOnChange called:", {
      model,
      action,
      ids,
      payload,
      fields,
    });

    // Return empty response - no onchange logic for this mock
    return {
      value: {},
      warning: null,
      domain: {},
    };
  }

  // Add search_read method that might be used by infinite scroll
  async search_read({
    model,
    domain,
    fields,
    limit,
    offset,
    order,
    context,
  }: any) {
    console.log("🔍🔍🔍 search_read called:", {
      model,
      domain,
      fields,
      limit,
      offset,
      order,
      context,
    });

    if (model === "sale.order.line") {
      // Use the same logic as searchForTree
      const result = await this.searchForTree({
        model,
        domain,
        fields,
        limit,
        offset,
        order,
        context,
      });
      return result.items || [];
    }

    return [];
  }

  // Add searchRead method (different naming convention)
  async searchRead({
    model,
    domain,
    fields,
    limit,
    offset,
    order,
    context,
  }: any) {
    console.log("🔍🔍🔍 searchRead called:", {
      model,
      domain,
      fields,
      limit,
      offset,
      order,
      context,
    });
    return this.search_read({
      model,
      domain,
      fields,
      limit,
      offset,
      order,
      context,
    });
  }

  // Other required methods with default implementations
  async fieldsGet() {
    return {};
  }
  async getDefaults() {
    return {};
  }
  async getToolbar() {
    return {};
  }

  // Fix the permission method signature that's causing the TypeError
  getPermissions(model: string) {
    console.log("🔍 getPermissions (sync) called for model:", model);
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  }
  async execute() {
    return null;
  }
  async executeButton() {
    return null;
  }
  async executeWorkflow() {
    return null;
  }
  async searchCount({ model, domain }: any) {
    console.log("searchCount called:", { model, domain });

    if (model === "sale.order.line") {
      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in searchCount",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      if (domain && domain.length > 0) {
        const flatDomain = domain.flat(Infinity);
        for (let i = 0; i < flatDomain.length; i += 3) {
          const field = flatDomain[i];
          const operator = flatDomain[i + 1];
          const value = flatDomain[i + 2];

          if (field === "id" && operator === "in" && Array.isArray(value)) {
            return value.length;
          }
        }
      }
      return this.orderLineData.length;
    }

    return 0;
  }

  async readGroup({
    model,
    domain,
    fields,
    groupby,
    offset,
    limit,
    order,
    context,
  }: any) {
    console.log("readGroup called:", { model, domain, fields, groupby });

    if (model === "sale.order.line" && fields.includes("price_subtotal")) {
      // Calculate aggregate for price_subtotal
      let filteredLines = [...this.orderLineData];

      if (domain && domain.length > 0) {
        const flatDomain = domain.flat(Infinity);

        for (let i = 0; i < flatDomain.length; i += 3) {
          const field = flatDomain[i];
          const operator = flatDomain[i + 1];
          const value = flatDomain[i + 2];

          if (field === "id" && operator === "in" && Array.isArray(value)) {
            filteredLines = filteredLines.filter((line) =>
              value.includes(line.id),
            );
          }
        }
      }

      const totalSubtotal = filteredLines.reduce((sum, line) => {
        return sum + this.calculateSubtotal(line);
      }, 0);

      return [
        {
          price_subtotal: totalSubtotal,
          __count: filteredLines.length,
        },
      ];
    }

    return [];
  }
  async export() {
    return "";
  }
  async getTree() {
    return { field_parent: "", name: "" };
  }
  async getXMLViewContent() {
    return "";
  }
  async getActionData() {
    return {};
  }
  async getActionDomain() {
    return [];
  }
  async getDashboardActionData() {
    return {};
  }
  async evalDomain() {
    return [];
  }
  async evalContext() {
    return {};
  }
  async getSessionInfo() {
    return { session_id: "mock" };
  }
  async isConnectionOnline() {
    return true;
  }
  async canCreateNewDatabase() {
    return false;
  }
  async createNewDatabase() {
    return false;
  }
  async getDatabaseList() {
    return [];
  }
  async getDistinctValues() {
    return [];
  }
  async copy() {
    return null;
  }
  async getReportData() {
    return null;
  }
  async printReport() {
    return null;
  }
  async call() {
    return null;
  }
  async callWithContext() {
    return null;
  }
  async getSomeCounters() {
    return {};
  }
  async callWizard() {
    return null;
  }
  async callDefaultGetFunction() {
    return {};
  }
  async getRelatedFieldData() {
    return null;
  }
  async getReferencedModels() {
    return [];
  }
  async getTitleFromId() {
    return "";
  }
  readAggregates = async ({
    model,
    domain,
    aggregateFields,
  }: {
    model: string;
    domain: any[];
    aggregateFields: any;
  }) => {
    console.log("🔍🔍🔍🔍🔍 readAggregates called:", {
      model,
      domain,
      aggregateFields,
    });
    console.log(
      "🔍🔍🔍🔍🔍 AGGREGATES METHOD IS BEING CALLED! This should work now!",
    );
    console.log(
      "🔍🔍🔍🔍🔍 this.orderLineData:",
      this.orderLineData ? this.orderLineData.length : "undefined",
    );

    if (model === "sale.order.line") {
      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in readAggregates",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      // Filter lines based on domain
      let filteredLines = [...this.orderLineData];

      if (domain && domain.length > 0) {
        // Simple domain filtering for ["id", "in", [ids...]] format
        const idInCondition = domain.find(
          (condition) =>
            Array.isArray(condition) &&
            condition.length === 3 &&
            condition[0] === "id" &&
            condition[1] === "in",
        );

        if (idInCondition) {
          const idsToInclude = idInCondition[2];
          filteredLines = filteredLines.filter((line) =>
            idsToInclude.includes(line.id),
          );
        }
      }

      console.log(
        "🔍🔍🔍 Computing aggregates for",
        filteredLines.length,
        "lines",
      );

      const result: any = {};

      // Process each field that needs aggregation
      Object.entries(aggregateFields).forEach(([fieldName, operations]) => {
        const fieldOps = operations as string[];
        result[fieldName] = {};

        // Get field values from filtered results
        const fieldValues = filteredLines
          .map((item) => item[fieldName])
          .filter(
            (value) =>
              value !== undefined && value !== null && !isNaN(Number(value)),
          );

        fieldOps.forEach((operation) => {
          switch (operation) {
            case "sum":
              result[fieldName][operation] = fieldValues.reduce(
                (sum, val) => sum + Number(val),
                0,
              );
              break;
            case "count":
              result[fieldName][operation] = fieldValues.length;
              break;
            case "avg":
              result[fieldName][operation] =
                fieldValues.length > 0
                  ? Math.round(
                      fieldValues.reduce((sum, val) => sum + Number(val), 0) /
                        fieldValues.length,
                    )
                  : 0;
              break;
            case "max":
              result[fieldName][operation] =
                fieldValues.length > 0
                  ? Math.max(...fieldValues.map((val) => Number(val)))
                  : 0;
              break;
            case "min":
              result[fieldName][operation] =
                fieldValues.length > 0
                  ? Math.min(...fieldValues.map((val) => Number(val)))
                  : 0;
              break;
            default:
              result[fieldName][operation] = 0;
          }
        });
      });

      console.log("🔍🔍🔍 readAggregates result:", result);
      return result;
    }

    return {};
  };
  async writeConcurrencyField() {
    return true;
  }
  parseConditions = async (params?: any) => {
    console.log("🔍 parseConditions called with params:", params);
    const { values } = params || {};

    // Use the order line data to generate condition results
    const dataToProcess = values || this.orderLineData || [];
    
    return dataToProcess.map((result: any) => {
      return {
        id: result.id,
        colors: this.evaluateColorCondition(result),
        status: this.evaluateStatusCondition(result),
      };
    });
  }

  parseCondition = async () => {
    return {};
  }

  processSearchResults = async (params: {
    searchIds: number[];
    model: string;
    fieldsToRetrieve: string[];
    context?: any;
    fields?: any;
  }) => {
    console.log("processSearchResults called with params:", params);
    const { searchIds, fieldsToRetrieve } = params;

    if (params.model === "sale.order.line") {
      // Check if we're processing function fields
      const functionFields = fieldsToRetrieve.filter(
        (field) => field === "total_amount" || field === "price_subtotal",
      );

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate processing delay

      if (!searchIds || !fieldsToRetrieve || searchIds.length === 0) {
        return { results: [], attrsEvaluated: [] };
      }

      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in processSearchResults",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      // Find the records that match the requested IDs
      const requestedRecords = this.orderLineData.filter((record) =>
        searchIds.includes(record.id),
      );

      console.log(
        "Found requested records:",
        requestedRecords.map((r) => r.id),
      );

      // Generate updated values for function fields and autorefresh fields
      const results = requestedRecords.map((record) => {
        const updatedRecord: any = { id: record.id };

        fieldsToRetrieve.forEach((fieldName) => {
          switch (fieldName) {
            case "price_subtotal":
              // Recalculate function field based on current values
              updatedRecord[fieldName] = this.calculateSubtotal(record);
              break;

            case "total_amount":
              // Recalculate function field with time-based variation
              updatedRecord[fieldName] = this.calculateTotalAmount(record);
              break;

            case "last_updated":
              // Generate a random recent timestamp for autorefresh simulation
              const randomMinutesAgo = Math.floor(Math.random() * 60); // 0-59 minutes ago
              updatedRecord[fieldName] = new Date(
                Date.now() - randomMinutesAgo * 60 * 1000,
              ).toISOString();
              break;

            default:
              // For other fields, return the original value with potential minor variations
              if (typeof (record as any)[fieldName] === "number") {
                // Add small random variation to numeric fields
                const variation = (Math.random() - 0.5) * 0.02; // ±1% variation
                updatedRecord[fieldName] = Math.round(
                  (record as any)[fieldName] * (1 + variation),
                );
              } else {
                updatedRecord[fieldName] = (record as any)[fieldName];
              }
              break;
          }
        });

        return updatedRecord;
      });

      // Generate attributes evaluation for the updated records
      const attrsEvaluated = results.map((result: any) => {
        // Find the original record to get all fields for condition evaluation
        const originalRecord =
          this.orderLineData.find((r) => r.id === result.id) || {};
        const mergedRecord = { ...originalRecord, ...result };

        return {
          id: result.id,
          colors: this.evaluateColorCondition(mergedRecord),
          status: this.evaluateStatusCondition(mergedRecord),
        };
      });

      return { results, attrsEvaluated };
    }

    return { results: [], attrsEvaluated: [] };
  };

  // User view preferences methods for saving/restoring column order and state
  private userViewPrefs: { [key: string]: any } = {};

  async readUserViewPrefs({ key }: { key: string }) {
    console.log("🔍 readUserViewPrefs called with key:", key);
    const prefs = this.userViewPrefs[key];
    if (!prefs) {
      console.log("🔍 No preferences found for key:", key);
      return false; // Return false to indicate no stored preferences
    }
    console.log("🔍 Returning stored preferences:", prefs);
    return prefs;
  }

  async saveUserViewPrefs({
    key,
    preferences,
  }: {
    key: string;
    preferences: any;
  }) {
    console.log(
      "🔍🔍🔍 saveUserViewPrefs called with key:",
      key,
      "preferences:",
      preferences,
    );

    // If preferences is null, undefined, or empty array, clear the stored preferences (RESET)
    if (
      !preferences ||
      (Array.isArray(preferences) && preferences.length === 0)
    ) {
      console.log("🔍🔍🔍 RESET: Clearing preferences for key:", key);
      delete this.userViewPrefs[key];
      return true;
    }

    // Store the preferences
    this.userViewPrefs[key] = preferences;
    console.log("🔍🔍🔍 Preferences saved for key:", key);
    return true;
  }

  // Comprehensive permission methods to fix TypeError: e is not a function
  checkPermission = (model: string) => {
    console.log("🔍 checkPermission (singular) called for model:", model);
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  };

  checkPermissions = (model: string) => {
    console.log("🔍 checkPermissions (plural) called for model:", model);
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  };

  permissions = (model: string) => {
    console.log("🔍 permissions (arrow function) called for model:", model);
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  };

  // Removed duplicate getPermissions arrow function

  // Also try bound methods
  async checkPermissionsAsync({ model }: any) {
    console.log("🔍 checkPermissionsAsync called for model:", model);
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  }

  async getPermissionsAsync({ model }: any) {
    console.log("🔍 getPermissionsAsync called for model:", model);
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  }

  // Helper function to process data like getTableItems does
  private getTableItems(treeOoui: TreeOoui, results: any[]): any[] {
    console.log("🔍🔍🔍 getTableItems processing", results.length, "results");

    return results.map((item: any, index: number) => {
      try {
        const parsedItem: any = {};
        Object.keys(item).forEach((key) => {
          if (key === "id") {
            parsedItem[key] = item[key];
          } else {
            const widget = treeOoui.findById(key);
            console.log(
              `🔍🔍🔍 Processing field ${key}, widget:`,
              widget?.constructor.name,
              widget?.type,
            );

            if (widget instanceof Reference) {
              parsedItem[key] = item[key];
            } else if (widget instanceof Selection) {
              parsedItem[key] = item[key];
            } else if (widget instanceof Many2one) {
              // Handle many2one fields - convert [id, name] to {model, id, value}
              if (Array.isArray(item[key]) && item[key].length === 2) {
                parsedItem[key] = {
                  model: widget.relation,
                  id: item[key][0],
                  value: item[key][1],
                };
              } else {
                parsedItem[key] = item[key];
              }
            } else {
              // For other field types, use the value directly
              parsedItem[key] = item[key];
            }
          }
        });
        return parsedItem;
      } catch (error) {
        console.error(`🚨🚨🚨 Error processing item ${index}:`, error);
        console.error("🚨🚨🚨 Item data:", item);
        throw error;
      }
    });
  }

  // Add the missing methods that One2manyTree component needs
  async readEvalUiObjects({ model, ids, arch, fields, context, attrs }: any) {
    console.log("🔍🔍🔍 readEvalUiObjects called (THIS IS THE KEY METHOD!):", {
      model,
      ids,
      arch,
      fields,
      context,
      attrs,
    });
    console.log("🔍🔍🔍 Requested IDs:", ids);
    console.log(
      "🔍🔍🔍 Available order line IDs:",
      this.orderLineData.map((l) => l.id),
    );

    try {
      if (model === "sale.order.line") {
        // Ensure orderLineData is initialized
        if (!this.orderLineData || this.orderLineData.length === 0) {
          console.log(
            "🔍 Initializing orderLineData from mockParentRecord in readEvalUiObjects",
          );
          this.orderLineData = mockParentRecord.order_line;
        }

        // This is the main method that One2manyTree uses to fetch data
        const lines = this.orderLineData.filter((line) =>
          ids.includes(line.id),
        );
        console.log(
          "🔍🔍🔍 Found",
          lines.length,
          "matching lines for IDs:",
          ids,
        );

        // Process lines with proper formatting - ensure ALL fields are present
        const processedLines = lines.map((line) => {
          const processed = {
            id: line.id,
            sequence: line.sequence,
            product_id: Array.isArray(line.product_id)
              ? line.product_id
              : [line.product_id, line.product_id_name || ""],
            description: line.description || "",
            quantity: line.quantity || 0,
            price_unit: line.price_unit || 0,
            discount: line.discount || 0,
            price_subtotal: this.calculateSubtotal(line),
            total_amount: this.calculateTotalAmount(line),
            order_id: Array.isArray(line.order_id)
              ? line.order_id
              : [line.order_id, `SO/2024/000${line.order_id}`],
            last_updated: new Date(
              Date.now() - Math.random() * 60 * 60 * 1000,
            ).toISOString(), // Random timestamp within last hour for autorefresh
          };

          // Ensure no undefined values
          Object.keys(processed).forEach((key) => {
            if ((processed as any)[key] === undefined) {
              (processed as any)[key] = null;
            }
          });

          return processed;
        });

        console.log(
          "🔍🔍🔍 About to create TreeOoui with fields:",
          Object.keys(fields),
        );
        console.log(
          "🔍🔍🔍 Field definitions:",
          JSON.stringify(fields, null, 2),
        );
        console.log("🔍🔍🔍 About to parse arch:", arch);

        // Create TreeOoui instance to process the data correctly
        const treeOoui = new TreeOoui(fields);
        treeOoui.parse(arch);

        console.log("🔍🔍🔍 TreeOoui created successfully, processing data...");
        console.log(
          "🔍🔍🔍 TreeOoui columns:",
          treeOoui.columns.map((col) => ({
            id: col.id,
            type: col.type,
            string: col.string,
            _sum: col._sum,
            sum: col.sum,
            allProps: Object.keys(col),
          })),
        );

        // Process the data using the same logic as getTableItems
        const tableItems = this.getTableItems(treeOoui, processedLines);

        console.log(
          "🔍🔍🔍 readEvalUiObjects returning",
          tableItems.length,
          "records",
        );
        console.log(
          "🔍🔍🔍 Sample processed record:",
          JSON.stringify(tableItems[0], null, 2),
        );

        // Return in the format expected by the One2manyTree component
        // First element is the data, second is attributes for UI evaluation
        // The second element should be an array of objects with id, colors, status properties
        const attributes = tableItems.map((item) => {
          // Get the original processed line data for condition evaluation
          const lineData = processedLines.find((line) => line.id === item.id);

          return {
            id: item.id,
            colors: this.evaluateColorCondition(lineData),
            status: this.evaluateStatusCondition(lineData),
          };
        });

        return [
          tableItems,
          attributes, // Array of attribute objects with proper colors and status
        ];
      }

      return [[], {}];
    } catch (error) {
      console.error("🚨🚨🚨 Error in readEvalUiObjects:", error);
      console.error("🚨🚨🚨 Stack trace:", error.stack);
      throw error;
    }
  }

  async searchAllIds({ model, params, context, order }: any) {
    console.log("🔍🔍🔍 searchAllIds called:", {
      model,
      params,
      context,
      order,
    });

    if (model === "sale.order.line") {
      // Ensure orderLineData is initialized
      if (!this.orderLineData || this.orderLineData.length === 0) {
        console.log(
          "🔍 Initializing orderLineData from mockParentRecord in searchAllIds",
        );
        this.orderLineData = mockParentRecord.order_line;
      }

      // This is called when sorting is applied
      let filteredLines = [...this.orderLineData];

      // Apply domain filters from params if any
      if (params && params.length > 0) {
        const [field, operator, value] = params[0];
        if (field === "id" && operator === "in" && Array.isArray(value)) {
          filteredLines = filteredLines.filter((line) =>
            value.includes(line.id),
          );
        }
      }

      // Apply sorting using the improved sort method
      if (order) {
        console.log("🔍 Applying sorting with order:", order);
        filteredLines = this.sortResultsAdvanced(filteredLines, order);
      }

      const ids = filteredLines.map((line) => line.id);
      console.log(
        "🔍 searchAllIds returning",
        ids.length,
        "IDs:",
        ids.slice(0, 10),
      );

      return ids;
    }

    return [];
  }

  // Enhanced sorting method similar to TreeActionView
  private sortResultsAdvanced(results: any[], order?: string): any[] {
    if (!order || !order.trim()) {
      return results;
    }

    console.log("🔍 Sorting results with order:", order);

    // Parse order string like "name asc, department desc"
    const orderClauses = order.split(",").map((clause) => clause.trim());

    const sorted = [...results].sort((a, b) => {
      for (const clause of orderClauses) {
        const [fieldName, direction = "asc"] = clause.split(/\s+/);
        const isDesc = direction.toLowerCase() === "desc";

        let aValue = a[fieldName];
        let bValue = b[fieldName];

        // Handle many2one fields - extract the display value
        if (Array.isArray(aValue) && aValue.length === 2) {
          aValue = aValue[1]; // Use the display name
        }
        if (Array.isArray(bValue) && bValue.length === 2) {
          bValue = bValue[1]; // Use the display name
        }

        // Handle null/undefined values
        if (aValue == null && bValue == null) continue;
        if (aValue == null) return isDesc ? 1 : -1;
        if (bValue == null) return isDesc ? -1 : 1;

        let comparison = 0;

        // Handle different data types
        if (typeof aValue === "string" && typeof bValue === "string") {
          comparison = aValue.localeCompare(bValue);
        } else if (typeof aValue === "number" && typeof bValue === "number") {
          comparison = aValue - bValue;
        } else {
          // Convert to strings for comparison
          comparison = String(aValue).localeCompare(String(bValue));
        }

        if (comparison !== 0) {
          return isDesc ? -comparison : comparison;
        }
      }
      return 0;
    });

    return sorted;
  }

  // Evaluate color condition based on XML colors attribute
  // colors="red:discount>20;orange:discount>10;green:quantity>=5;blue:price_unit>300;purple:price_unit>400"
  private evaluateColorCondition(lineData: any): string | null {
    if (!lineData) return null;

    const { discount, quantity, price_unit } = lineData;

    // Check conditions in order of priority - return hex color codes
    // Only use non-function fields to ensure colors remain stable
    if (discount > 20) return "#c62828"; // Red - high discount
    if (price_unit > 400) return "#7b1fa2"; // Purple - expensive items
    if (price_unit > 300) return "#1976d2"; // Blue - moderately expensive
    if (discount > 10) return "#ef6c00"; // Orange - medium discount
    if (quantity >= 5) return "#388e3c"; // Green - high quantity

    return null; // No color condition met
  }

  // Evaluate status condition based on XML status attribute
  // status="green:quantity>=8;red:discount>20;orange:discount>10;blue:price_unit>300"
  private evaluateStatusCondition(lineData: any): string | null {
    if (!lineData) return null;

    const { discount, quantity, price_unit } = lineData;

    // Check conditions in order of priority - return hex color codes
    // Only use non-function fields to ensure status remains stable
    if (quantity >= 8) return "#4caf50"; // Green - high quantity
    if (discount > 20) return "#c62828"; // Red - high discount
    if (price_unit > 300) return "#2196f3"; // Blue - expensive items
    if (discount > 10) return "#ff9800"; // Orange - medium discount

    return null; // No status condition met
  }

  constructor() {
    // Initialize with mock data
    console.log("🔍 MockConnectionProvider constructor called");
    console.log(
      "🔍 mockParentRecord.order_line:",
      mockParentRecord.order_line
        ? mockParentRecord.order_line.length
        : "undefined",
    );
    this.orderLineData = mockParentRecord.order_line;
    console.log(
      "🔍 this.orderLineData after assignment:",
      this.orderLineData ? this.orderLineData.length : "undefined",
    );
  }
}

let mockProviderInstance: MockConnectionProvider | null = null;

export function initializeMockProvider() {
  const provider = new MockConnectionProvider();

  // Wrap in a Proxy to catch any missing method calls
  mockProviderInstance = new Proxy(provider, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      // Return the value directly for existing methods (arrow functions are already bound)
      if (value !== undefined) {
        return value;
      }

      if (
        value === undefined &&
        typeof prop === "string" &&
        prop !== "constructor"
      ) {
        console.log("🚨 Missing method called:", prop);
        // Return a function that logs and returns a default value
        return function (...args: any[]) {
          console.log("🚨 Missing method", prop, "called with args:", args);

          // Handle specific missing methods
          if (prop === "readUserViewPrefs") {
            return target.readUserViewPrefs.bind(target);
          }
          if (prop === "saveUserViewPrefs") {
            return target.saveUserViewPrefs.bind(target);
          }
          if (prop === "readEvalUiObjects") {
            return target.readEvalUiObjects.bind(target);
          }
          if (prop === "searchForTree") {
            return target.searchForTree.bind(target);
          }
          if (prop === "searchRead" || prop === "search_read") {
            return target.search_read.bind(target);
          }
          if (prop === "searchAllIds") {
            return target.searchAllIds.bind(target);
          }
          if (prop === "readAggregates") {
            return target.readAggregates.bind(target);
          }
          if (prop === "processSearchResults") {
            return target.processSearchResults.bind(target);
          }
          if (prop === "readObjects") {
            return target.readObjects.bind(target);
          }

          return {
            read: true,
            write: true,
            create: true,
            unlink: true,
          };
        };
      }
      return value;
    },
  });

  // Set this as the global provider for this story
  ConnectionProvider.init(mockProviderInstance as ConnectionProviderType);
  return mockProviderInstance;
}

export function getMockProvider(): MockConnectionProvider {
  if (!mockProviderInstance) {
    throw new Error(
      "Mock provider not initialized. Call initializeMockProvider first.",
    );
  }
  return mockProviderInstance;
}

// Export a simple instance for direct use in ActionViewProvider
export const mockConnectionProvider = new MockConnectionProvider();

// Paginated mock form view - use infinite: '0' to force paginated mode
const mockPaginatedFormView = {
  ...mockFormView,
  arch: `<?xml version="1.0"?>
    <form string="Sales Order">
        <field name="order_line"
        widget_props="{'infinite': '0'}"
        context="{'default_order_id': active_id}"/>
    </form>`,
  fields: {
    ...mockFormView.fields,
    order_line: {
      ...mockFormView.fields.order_line,
      infinite: false, // Explicitly set to false for paginated mode
    },
  },
};

class PaginatedMockConnectionProvider extends MockConnectionProvider {
  async fieldsViewGet({ model, viewId, viewType, context }: any) {
    console.log("🔍 [PAGINATED] fieldsViewGet called:", {
      model,
      viewId,
      viewType,
      context,
    });

    if (model === "sale.order" && viewType === "form") {
      console.log("🔍 [PAGINATED] Returning paginated form view");
      console.log("🔍 [PAGINATED] Form view arch:", mockPaginatedFormView.arch);
      return mockPaginatedFormView;
    }

    // For other views, use the parent class method
    return super.fieldsViewGet({ model, viewId, viewType, context });
  }

  async getView({ model, type, context }: any) {
    console.log("[PAGINATED] getView called:", { model, type, context });

    if (model === "sale.order" && type === "form") {
      console.log("[PAGINATED] Returning paginated form view:", mockPaginatedFormView);
      return mockPaginatedFormView;
    }

    // For other views, use the parent class method
    return super.getView({ model, type, context });
  }
}

let paginatedMockProviderInstance: PaginatedMockConnectionProvider | null = null;

export function initializePaginatedMockProvider() {
  const provider = new PaginatedMockConnectionProvider();

  // Wrap in a Proxy to catch any missing method calls (same as infinite version)
  paginatedMockProviderInstance = new Proxy(provider, {
    get(target, prop, receiver) {
      const value = Reflect.get(target, prop, receiver);

      // Return the value directly for existing methods
      if (value !== undefined) {
        return value;
      }

      if (
        value === undefined &&
        typeof prop === "string" &&
        prop !== "constructor"
      ) {
        console.log("🚨 [PAGINATED] Missing method called:", prop);
        // Return a function that logs and returns a default value
        return function (...args: any[]) {
          console.log("🚨 [PAGINATED] Missing method", prop, "called with args:", args);

          // Handle specific missing methods (same as infinite version)
          if (prop === "readUserViewPrefs") {
            return target.readUserViewPrefs.bind(target);
          }
          if (prop === "saveUserViewPrefs") {
            return target.saveUserViewPrefs.bind(target);
          }
          if (prop === "readEvalUiObjects") {
            return target.readEvalUiObjects.bind(target);
          }
          if (prop === "searchForTree") {
            return target.searchForTree.bind(target);
          }
          if (prop === "searchRead" || prop === "search_read") {
            return target.search_read.bind(target);
          }
          if (prop === "searchAllIds") {
            return target.searchAllIds.bind(target);
          }
          if (prop === "readAggregates") {
            return target.readAggregates.bind(target);
          }
          if (prop === "processSearchResults") {
            return target.processSearchResults.bind(target);
          }
          if (prop === "readObjects") {
            return target.readObjects.bind(target);
          }

          return {
            read: true,
            write: true,
            create: true,
            unlink: true,
          };
        };
      }
      return value;
    },
  });

  // Set this as the global provider for the paginated story
  ConnectionProvider.init(paginatedMockProviderInstance as ConnectionProviderType);
  return paginatedMockProviderInstance;
}
