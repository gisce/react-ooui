import { ConnectionProvider, ConnectionProviderType } from "@gisce/react-ooui";
import {
  mockFormView,
  mockMany2ManyTreeView,
  mockParentRecord,
  mockCategories,
  generateMockCategories,
} from "./Many2Many.mocks";
import { Tree as TreeOoui, Many2one, Selection, Reference } from "@gisce/ooui";

class MockMany2ManyConnectionProvider implements ConnectionProvider {
  private categoryData: any[] = [];

  async fieldsViewGet({ model, viewId, viewType, context }: any) {
    if (model === "sale.order" && viewType === "form") {
      return mockFormView;
    }

    if (model === "product.category" && viewType === "tree") {
      return mockMany2ManyTreeView;
    }

    // Handle specific view ID requests
    if (viewId === 1002 && model === "product.category") {
      return mockMany2ManyTreeView;
    }

    if (model === "product.category" && viewType === "form") {
      // Return a simple form view for categories
      return {
        view_id: 1003,
        type: "form",
        arch: `<?xml version="1.0"?>
          <form string="Product Category">
            <group>
              <field name="name"/>
              <field name="code"/>
              <field name="parent_id"/>
              <field name="priority"/>
              <field name="active"/>
            </group>
          </form>`,
        fields: mockMany2ManyTreeView.fields,
      };
    }

    throw new Error(`View not found for model: ${model}, type: ${viewType}`);
  }

  readObjects = async (params: {
    model: string;
    ids: number[];
    fields?: any;
    fieldsToRetrieve?: string[];
    context?: any;
  }) => {
    const { ids, fieldsToRetrieve } = params;

    if (params.model === "product.category") {
      if (!ids || !fieldsToRetrieve) {
        return this.read(params);
      }

      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      // Find the records that match the requested IDs
      const requestedRecords = this.categoryData.filter((record) =>
        ids.includes(record.id),
      );

      // Generate updated values for function fields
      return requestedRecords.map((record) => {
        const updatedRecord: any = { id: record.id };

        fieldsToRetrieve.forEach((fieldName) => {
          switch (fieldName) {
            case "product_count":
              // Recalculate function field with time-based variation
              updatedRecord[fieldName] = this.calculateProductCount(record);
              break;

            default:
              // For other fields, return the original value
              updatedRecord[fieldName] = (record as any)[fieldName];
              break;
          }
        });

        return updatedRecord;
      });
    }
    return this.read(params);
  };

  async read({ model, ids, fields }: any) {
    try {
      if (model === "sale.order" && ids.includes(1)) {
        // Ensure categoryData is initialized
        if (!this.categoryData || this.categoryData.length === 0) {
          this.categoryData = generateMockCategories(100);
        }

        // Get selected categories for many2many field
        const selectedCategories = this.categoryData.filter((cat) =>
          mockParentRecord.category_ids.includes(cat.id),
        );

        // Return the many2many field in the correct format
        const many2manyValue = {
          fields: mockMany2ManyTreeView.fields,
          items: selectedCategories.map((category) => {
            const processedCategory = {
              ...category,
              product_count: this.calculateProductCount(category),
              // Ensure parent_id is properly formatted
              parent_id: Array.isArray(category.parent_id)
                ? category.parent_id
                : category.parent_id
                ? [category.parent_id, `Category ${category.parent_id}`]
                : false,
            };

            return {
              id: category.id,
              operation: "original",
              values: processedCategory,
              treeValues: processedCategory,
            };
          }),
        };

        const result = [
          {
            id: 1,
            category_ids: many2manyValue, // Return structured many2many value
            name: "SO/2024/0001",
            partner_id: [1, "Acme Corporation"],
            date_order: "2024-01-15 10:30:00",
            state: "draft",
          },
        ];

        return result;
      }
    } catch (error) {
      throw error;
    }

    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      const categories = this.categoryData.filter((cat) => ids.includes(cat.id));
      return categories;
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
    try {
      if (model === "product.category") {
        // Ensure categoryData is initialized
        if (!this.categoryData || this.categoryData.length === 0) {
          this.categoryData = generateMockCategories(100);
        }

        // Filter categories based on domain if needed
        let filteredCategories = [...this.categoryData];

        // Apply domain filters if any
        if (domain && domain.length > 0) {
          // Handle different domain formats
          const flatDomain = domain.flat(Infinity);

          for (let i = 0; i < flatDomain.length; i += 3) {
            const field = flatDomain[i];
            const operator = flatDomain[i + 1];
            const value = flatDomain[i + 2];

            if (field === "id" && operator === "in" && Array.isArray(value)) {
              filteredCategories = filteredCategories.filter((cat) =>
                value.includes(cat.id),
              );
            }
          }
        }

        // Calculate function fields and ensure all fields are properly formatted
        const processedCategories = filteredCategories.map((category) => {
          const processed = {
            ...category,
            product_count: this.calculateProductCount(category),
            // Ensure parent_id is properly formatted for many2one field
            parent_id: Array.isArray(category.parent_id)
              ? category.parent_id
              : category.parent_id
              ? [category.parent_id, `Category ${category.parent_id}`]
              : false,
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
        let finalCategories = processedCategories;
        if (order) {
          finalCategories = this.sortResults(processedCategories, order);
        }

        // Apply pagination for infinite scroll
        const paginatedCategories = finalCategories.slice(offset, offset + limit);

        return {
          items: paginatedCategories,
          totalItems: () => finalCategories.length,
        };
      }

      return {
        items: [],
        totalItems: () => 0,
      };
    } catch (error) {
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
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      return this.categoryData.map((cat) => cat.id);
    }

    return [];
  }

  async nameGet({ model, ids }: any) {
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      return this.categoryData
        .filter((cat) => ids.includes(cat.id))
        .map((cat) => [cat.id, cat.name]);
    }

    return [];
  }

  async nameSearch({ model, name, args, limit }: any) {
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      const filtered = this.categoryData.filter((cat) =>
        cat.name.toLowerCase().includes((name || "").toLowerCase()),
      );
      return filtered.slice(0, limit || 7).map((cat) => [cat.id, cat.name]);
    }

    return [];
  }

  async create({ model, values }: any) {
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      const newId = Math.max(...this.categoryData.map((c) => c.id)) + 1;
      const newCategory = {
        id: newId,
        ...values,
        product_count: 0,
      };

      this.categoryData.push(newCategory);
      return newId;
    }

    return null;
  }

  async write({ model, ids, values }: any) {
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      this.categoryData = this.categoryData.map((category) => {
        if (ids.includes(category.id)) {
          return { ...category, ...values };
        }
        return category;
      });
      return true;
    }

    return false;
  }

  async unlink({ model, ids }: any) {
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      this.categoryData = this.categoryData.filter(
        (category) => !ids.includes(category.id),
      );
      return true;
    }

    return false;
  }

  // Helper methods
  private calculateProductCount(category: any): number {
    // Add some time-based variation to simulate real function field behavior
    const timeVariation = Math.sin(Date.now() / 10000) * 5; // ±5 variation
    const baseCount = category.product_count || 0;
    const finalCount = Math.max(0, baseCount + Math.floor(timeVariation));
    return finalCount;
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
    return this.fieldsViewGet({
      model,
      viewId: view_id,
      viewType: view_type,
      context,
    });
  }

  // Add load_views method that might be called by Many2Many
  async load_views({ model, views, context }: any) {
    const result: any = {};

    for (const [view_id, view_type] of views) {
      try {
        const view = await this.fieldsViewGet({
          model,
          viewId: view_id,
          viewType: view_type,
          context,
        });
        result[view_type] = view;
      } catch (error) {
        // silently continue
      }
    }

    return result;
  }

  // Methods required by FormActionView
  async getView({ model, type, context }: any) {
    if (model === "sale.order" && type === "form") {
      return mockFormView;
    }

    if (model === "product.category" && type === "tree") {
      return mockMany2ManyTreeView;
    }

    if (model === "product.category" && type === "form") {
      return {
        view_id: 1003,
        type: "form",
        arch: `<?xml version="1.0"?>
          <form string="Product Category">
            <group>
              <field name="name"/>
              <field name="code"/>
              <field name="parent_id"/>
              <field name="priority"/>
              <field name="active"/>
            </group>
          </form>`,
        fields: mockMany2ManyTreeView.fields,
      };
    }

    throw new Error(`View not found for model: ${model}, type: ${type}`);
  }

  async defaultGet({ model, fields, context, extraValues }: any) {
    try {
      if (model === "sale.order") {
        return {
          category_ids: [],
          ...(extraValues || {}),
        };
      }

      if (model === "product.category") {
        return {
          name: "",
          code: "",
          parent_id: null,
          priority: 5,
          active: true,
          ...(extraValues || {}),
        };
      }

      return extraValues || {};
    } catch (error) {
      throw error;
    }
  }

  async update({ model, id, values, fields, context }: any) {
    return this.write({ model, ids: [id], values });
  }

  async executeOnChange({ model, action, ids, payload, fields }: any) {
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
    if (model === "product.category") {
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
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
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
      return this.categoryData.length;
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
    if (model === "product.category" && fields.includes("product_count")) {
      // Calculate aggregate for product_count
      let filteredCategories = [...this.categoryData];

      if (domain && domain.length > 0) {
        const flatDomain = domain.flat(Infinity);

        for (let i = 0; i < flatDomain.length; i += 3) {
          const field = flatDomain[i];
          const operator = flatDomain[i + 1];
          const value = flatDomain[i + 2];

          if (field === "id" && operator === "in" && Array.isArray(value)) {
            filteredCategories = filteredCategories.filter((cat) =>
              value.includes(cat.id),
            );
          }
        }
      }

      const totalProductCount = filteredCategories.reduce((sum, cat) => {
        return sum + this.calculateProductCount(cat);
      }, 0);

      return [
        {
          product_count: totalProductCount,
          __count: filteredCategories.length,
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
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      // Filter categories based on domain
      let filteredCategories = [...this.categoryData];

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
          filteredCategories = filteredCategories.filter((cat) =>
            idsToInclude.includes(cat.id),
          );
        }
      }

      const result: any = {};

      // Process each field that needs aggregation
      Object.entries(aggregateFields).forEach(([fieldName, operations]) => {
        const fieldOps = operations as string[];
        result[fieldName] = {};

        // Get field values from filtered results
        const fieldValues = filteredCategories
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

      return result;
    }

    return {};
  };

  async writeConcurrencyField() {
    return true;
  }

  parseConditions = async (params?: any) => {
    const { values } = params || {};

    // Use the category data to generate condition results
    const dataToProcess = values || this.categoryData || [];
    
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
    const { searchIds, fieldsToRetrieve } = params;

    if (params.model === "product.category") {
      // Check if we're processing function fields
      const functionFields = fieldsToRetrieve.filter(
        (field) => field === "product_count",
      );

      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate processing delay

      if (!searchIds || !fieldsToRetrieve || searchIds.length === 0) {
        return { results: [], attrsEvaluated: [] };
      }

      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      // Find the records that match the requested IDs
      const requestedRecords = this.categoryData.filter((record) =>
        searchIds.includes(record.id),
      );

      // Generate updated values for function fields
      const results = requestedRecords.map((record) => {
        const updatedRecord: any = { id: record.id };

        fieldsToRetrieve.forEach((fieldName) => {
          switch (fieldName) {
            case "product_count":
              // Recalculate function field based on current values
              updatedRecord[fieldName] = this.calculateProductCount(record);
              break;

            default:
              // For other fields, return the original value
              updatedRecord[fieldName] = (record as any)[fieldName];
              break;
          }
        });

        return updatedRecord;
      });

      // Generate attributes evaluation for the updated records
      const attrsEvaluated = results.map((result: any) => {
        // Find the original record to get all fields for condition evaluation
        const originalRecord =
          this.categoryData.find((r) => r.id === result.id) || {};
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
    const prefs = this.userViewPrefs[key];
    if (!prefs) {
      return false; // Return false to indicate no stored preferences
    }
    return prefs;
  }

  async saveUserViewPrefs({
    key,
    preferences,
  }: {
    key: string;
    preferences: any;
  }) {
    // If preferences is null, undefined, or empty array, clear the stored preferences (RESET)
    if (
      !preferences ||
      (Array.isArray(preferences) && preferences.length === 0)
    ) {
      delete this.userViewPrefs[key];
      return true;
    }

    // Store the preferences
    this.userViewPrefs[key] = preferences;
    return true;
  }

  // Comprehensive permission methods to fix TypeError: e is not a function
  checkPermission = (model: string) => {
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  };

  checkPermissions = (model: string) => {
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  };

  permissions = (model: string) => {
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  };

  // Also try bound methods
  async checkPermissionsAsync({ model }: any) {
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  }

  async getPermissionsAsync({ model }: any) {
    return {
      read: true,
      write: true,
      create: true,
      unlink: true,
    };
  }

  // Helper function to process data like getTableItems does
  private getTableItems(treeOoui: TreeOoui, results: any[]): any[] {
    return results.map((item: any, index: number) => {
      try {
        const parsedItem: any = {};
        Object.keys(item).forEach((key) => {
          if (key === "id") {
            parsedItem[key] = item[key];
          } else {
            const widget = treeOoui.findById(key);

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
        throw error;
      }
    });
  }

  // Add the missing methods that Many2many component needs
  async readEvalUiObjects({ model, ids, arch, fields, context, attrs }: any) {
    try {
      if (model === "product.category") {
        // Ensure categoryData is initialized
        if (!this.categoryData || this.categoryData.length === 0) {
          this.categoryData = generateMockCategories(100);
        }

        // This is the main method that Many2many uses to fetch data
        const categories = this.categoryData.filter((cat) =>
          ids.includes(cat.id),
        );

        // Process categories with proper formatting - ensure ALL fields are present
        const processedCategories = categories.map((category) => {
          const processed = {
            id: category.id,
            name: category.name,
            code: category.code,
            parent_id: Array.isArray(category.parent_id)
              ? category.parent_id
              : category.parent_id
              ? [category.parent_id, `Category ${category.parent_id}`]
              : false,
            priority: category.priority,
            active: category.active,
            product_count: this.calculateProductCount(category),
          };

          // Ensure no undefined values
          Object.keys(processed).forEach((key) => {
            if ((processed as any)[key] === undefined) {
              (processed as any)[key] = null;
            }
          });

          return processed;
        });

        // Create TreeOoui instance to process the data correctly
        const treeOoui = new TreeOoui(fields);
        treeOoui.parse(arch);

        // Process the data using the same logic as getTableItems
        const tableItems = this.getTableItems(treeOoui, processedCategories);

        // Return in the format expected by the Many2many component
        // First element is the data, second is attributes for UI evaluation
        const attributes = tableItems.map((item) => {
          // Get the original processed category data for condition evaluation
          const categoryData = processedCategories.find((cat) => cat.id === item.id);

          return {
            id: item.id,
            colors: this.evaluateColorCondition(categoryData),
            status: this.evaluateStatusCondition(categoryData),
          };
        });

        return [
          tableItems,
          attributes, // Array of attribute objects with proper colors and status
        ];
      }

      return [[], {}];
    } catch (error) {
      throw error;
    }
  }

  async searchAllIds({ model, params, context, order }: any) {
    if (model === "product.category") {
      // Ensure categoryData is initialized
      if (!this.categoryData || this.categoryData.length === 0) {
        this.categoryData = generateMockCategories(100);
      }

      // This is called when sorting is applied
      let filteredCategories = [...this.categoryData];

      // Apply domain filters from params if any
      if (params && params.length > 0) {
        const [field, operator, value] = params[0];
        if (field === "id" && operator === "in" && Array.isArray(value)) {
          filteredCategories = filteredCategories.filter((cat) =>
            value.includes(cat.id),
          );
        }
      }

      // Apply sorting using the improved sort method
      if (order) {
        filteredCategories = this.sortResultsAdvanced(filteredCategories, order);
      }

      const ids = filteredCategories.map((cat) => cat.id);
      return ids;
    }

    return [];
  }

  // Enhanced sorting method similar to TreeActionView
  private sortResultsAdvanced(results: any[], order?: string): any[] {
    if (!order || !order.trim()) {
      return results;
    }

    // Parse order string like "name asc, parent_id desc"
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
  // colors="red:priority>8;orange:priority>5;green:active=True;blue:parent_id;purple:code"
  private evaluateColorCondition(categoryData: any): string | null {
    if (!categoryData) return null;

    const { priority, active, parent_id, code } = categoryData;

    // Check conditions in order of priority - return hex color codes
    if (priority > 8) return "#c62828"; // Red - high priority
    if (code) return "#7b1fa2"; // Purple - has code
    if (parent_id && parent_id !== false) return "#1976d2"; // Blue - has parent
    if (priority > 5) return "#ef6c00"; // Orange - medium priority
    if (active === true) return "#388e3c"; // Green - active

    return null; // No color condition met
  }

  // Evaluate status condition based on XML status attribute
  // status="green:active=True;red:priority>8;orange:priority>5;blue:parent_id"
  private evaluateStatusCondition(categoryData: any): string | null {
    if (!categoryData) return null;

    const { priority, active, parent_id } = categoryData;

    // Check conditions in order of priority - return hex color codes
    if (active === true) return "#4caf50"; // Green - active
    if (priority > 8) return "#c62828"; // Red - high priority
    if (parent_id && parent_id !== false) return "#2196f3"; // Blue - has parent
    if (priority > 5) return "#ff9800"; // Orange - medium priority

    return null; // No status condition met
  }

  constructor() {
    // Initialize with mock data
    this.categoryData = generateMockCategories(100);
  }
}

let mockProviderInstance: MockMany2ManyConnectionProvider | null = null;

export function initializeMockProvider() {
  const provider = new MockMany2ManyConnectionProvider();

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
        // Return a function that logs and returns a default value
        return function (...args: any[]) {
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

export function getMockProvider(): MockMany2ManyConnectionProvider {
  if (!mockProviderInstance) {
    throw new Error(
      "Mock provider not initialized. Call initializeMockProvider first.",
    );
  }
  return mockProviderInstance;
}

// Export a simple instance for direct use in ActionViewProvider
export const mockConnectionProvider = new MockMany2ManyConnectionProvider();

// Paginated mock tree view - use infinite: '0' to force paginated mode
const mockPaginatedMany2ManyTreeView = {
  ...mockMany2ManyTreeView,
  arch: `<?xml version="1.0"?>
    <tree string="Product Categories"
          infinite="0"
          colors="red:priority>8;orange:priority>5;green:active=True;blue:parent_id;purple:code"
          status="green:active=True;red:priority>8;orange:priority>5;blue:parent_id">
      <field name="name"/>
      <field name="code"/>
      <field name="parent_id"/>
      <field name="priority"/>
      <field name="active"/>
      <field name="product_count" sum="Total Products"/>
    </tree>`,
};

// Paginated mock form view - use infinite: '0' to force paginated mode
const mockPaginatedFormView = {
  ...mockFormView,
  arch: `<?xml version="1.0"?>
    <form string="Sales Order">
        <field name="category_ids"
        widget_props="{'infinite': '0'}"
        context="{}"/>
    </form>`,
  fields: {
    ...mockFormView.fields,
    category_ids: {
      ...mockFormView.fields.category_ids,
      infinite: false, // Explicitly set to false for paginated mode
    },
  },
};

class PaginatedMockMany2ManyConnectionProvider extends MockMany2ManyConnectionProvider {
  async fieldsViewGet({ model, viewId, viewType, context }: any) {
    if (model === "sale.order" && viewType === "form") {
      return mockPaginatedFormView;
    }

    if (model === "product.category" && viewType === "tree") {
      return mockPaginatedMany2ManyTreeView;
    }

    // Handle specific view ID requests
    if (viewId === 1002 && model === "product.category") {
      return mockPaginatedMany2ManyTreeView;
    }

    // For other views, use the parent class method
    return super.fieldsViewGet({ model, viewId, viewType, context });
  }

  async getView({ model, type, context }: any) {
    if (model === "sale.order" && type === "form") {
      return mockPaginatedFormView;
    }

    if (model === "product.category" && type === "tree") {
      return mockPaginatedMany2ManyTreeView;
    }

    // For other views, use the parent class method
    return super.getView({ model, type, context });
  }
}

let paginatedMockProviderInstance: PaginatedMockMany2ManyConnectionProvider | null = null;

export function initializePaginatedMockProvider() {
  const provider = new PaginatedMockMany2ManyConnectionProvider();

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
        // Return a function that logs and returns a default value
        return function (...args: any[]) {
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