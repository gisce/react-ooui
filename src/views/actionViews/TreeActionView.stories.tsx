import type { Meta, StoryObj } from "@storybook/react";
import { useState, createContext } from "react";
import { TreeActionView, TreeActionViewProps } from "./TreeActionView";
import {
  FormView,
  TreeView,
  View,
  ConnectionProviderType,
  ViewData,
  SearchResponse,
} from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import ActionViewProvider from "@/context/ActionViewContext";
import { ConfigContextProvider } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { NotificationProvider } from "@gisce/react-formiga-components";
import { StorybookTitleHeaderWrapper } from "../../../.storybook/StorybookTitleHeaderWrapper";

// Create a context for Storybook window dimensions
const StorybookDimensionsContext = createContext<{
  width: number;
  height: number;
  modalWidth: number;
  modalHeight: number;
} | null>(null);

const mockTreeView: TreeView = {
  view_id: 2,
  type: "tree",
  arch: '<tree status="green:status==\'active\' and performance_score&gt;=95 and is_vip==True and department==\'Engineering\';red:status==\'terminated\' and priority==\'critical\' and department==\'Finance\'"><field name="name"/><field name="email"/><field name="department"/><field name="company"/><field name="position"/><field name="status" statusbar_visible="active,pending,on_leave"/><field name="last_login" autorefresh="30"/><field name="annual_bonus" type="function"/><field name="salary" sum="Total Salary"/></tree>',
  fields_in_conditions: {
    status: ["status", "performance_score", "is_vip", "department", "priority"],
  },
  fields: {
    name: { type: "char", string: "Name" },
    email: { type: "char", string: "Email" },
    department: { type: "char", string: "Department" },
    company: { type: "char", string: "Company" },
    position: { type: "char", string: "Position" },
    phone: { type: "char", string: "Phone" },
    salary: { type: "integer", string: "Salary" },
    hire_date: { type: "date", string: "Hire Date" },
    status: {
      type: "selection",
      string: "Status",
      selection: [
        ["active", "Active"],
        ["inactive", "Inactive"],
        ["pending", "Pending"],
        ["on_leave", "On Leave"],
        ["terminated", "Terminated"],
      ],
    },
    priority: {
      type: "selection",
      string: "Priority",
      selection: [
        ["low", "Low"],
        ["medium", "Medium"],
        ["high", "High"],
        ["critical", "Critical"],
      ],
    },
    is_vip: { type: "boolean", string: "VIP" },
    performance_score: { type: "integer", string: "Performance Score" },
    annual_bonus: { type: "function", string: "Annual Bonus" },
    last_login: { type: "datetime", string: "Last Login" },
    years_of_service: { type: "integer", string: "Years of Service" },
    id: { type: "integer", string: "ID" },
  },
  search_fields: {
    primary: ["name"],
    secondary: ["email", "department", "company", "status"],
  },
  isExpandable: false,
};

const mockTreeViewExpandable: TreeView = {
  ...mockTreeView,
  isExpandable: true,
  field_parent: "parent_id",
};

const mockTreeViewInfinite: TreeView = {
  ...mockTreeView,
  arch: '<tree infinite="1" status="green:status==\'active\' and performance_score&gt;=95 and is_vip==True and department==\'Engineering\';red:status==\'terminated\' and priority==\'critical\' and department==\'Finance\'"><field name="name"/><field name="email"/><field name="department"/><field name="company"/><field name="position"/><field name="status" statusbar_visible="active,pending,on_leave"/><field name="last_login" autorefresh="30"/><field name="annual_bonus" type="function"/><field name="salary" sum="Total Salary"/></tree>',
};

const mockTreeViewPaginated: TreeView = {
  ...mockTreeView,
  arch: '<tree infinite="0" status="green:status==\'active\' and performance_score&gt;=95 and is_vip==True and department==\'Engineering\';red:status==\'terminated\' and priority==\'critical\' and department==\'Finance\'"><field name="name"/><field name="email"/><field name="department"/><field name="company"/><field name="position"/><field name="status" statusbar_visible="active,pending,on_leave"/><field name="last_login" autorefresh="30"/><field name="annual_bonus" type="function"/><field name="salary" sum="Total Salary"/></tree>',
};

// Generate a larger dataset for proper infinite scroll and pagination demonstration
const generateMockData = (count: number) => {
  const firstNames = [
    "John",
    "Jane",
    "Bob",
    "Alice",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Isabel",
    "Jack",
    "Kate",
    "Liam",
    "Mia",
    "Noah",
    "Olivia",
    "Paul",
    "Quinn",
    "Rachel",
    "Sam",
    "Tina",
    "Ulysses",
    "Vera",
    "Will",
    "Xara",
    "Yolanda",
    "Zach",
    "Anna",
    "Ben",
    "Chloe",
    "Daniel",
    "Eva",
    "Felix",
    "Gina",
    "Hugo",
    "Ivy",
    "James",
    "Karen",
    "Leo",
    "Maya",
    "Nick",
    "Oscar",
    "Penny",
    "Ruby",
    "Steve",
    "Tara",
    "Uma",
    "Victor",
    "Wendy",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts",
  ];

  const departments = [
    "Engineering",
    "Marketing",
    "Sales",
    "HR",
    "Finance",
    "Operations",
    "Legal",
    "IT Support",
    "Product",
    "Design",
    "Research",
    "Customer Service",
    "Quality Assurance",
    "Business Development",
  ];

  const companies = [
    "TechCorp",
    "InnovateInc",
    "GlobalSolutions",
    "DataSystems",
    "CloudWorks",
    "NextGen",
    "DigitalFirst",
    "SmartTech",
    "FutureLabs",
    "AgileWorks",
    "CoreSystems",
    "PrimeTech",
  ];

  const statuses = ["active", "inactive", "pending", "on_leave", "terminated"];
  const priorities = ["low", "medium", "high", "critical"];

  return Array.from({ length: count }, (_, i) => {
    const firstName = firstNames[i % firstNames.length];
    const lastName =
      lastNames[Math.floor(i / firstNames.length) % lastNames.length];
    let department = departments[i % departments.length];
    const company = companies[i % companies.length];
    let status = statuses[i % statuses.length];
    let priority = priorities[i % priorities.length];
    const salary = Math.floor(Math.random() * 80000) + 40000;
    let isVip = i % 7 === 0; // Every 7th employee is VIP
    let performanceScore = Math.floor(Math.random() * 40) + 60; // 60-100

    // Ensure we have some records that match our XML status conditions
    // Green condition: status=='active' and performance_score>=95 and is_vip==True and department=='Engineering'
    if (i === 10) {
      // Make employee #11 match green condition
      status = "active";
      performanceScore = 97;
      isVip = true;
      department = "Engineering"; // Force Engineering department
    }
    // Red condition: status=='terminated' and priority=='critical' and department=='Finance'
    if (i === 24) {
      // Make employee #25 match red condition
      status = "terminated";
      priority = "critical";
      department = "Finance"; // Force Finance department
    }

    return {
      id: i + 1,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${company.toLowerCase()}.com`,
      department,
      company,
      phone: `+1-${String(Math.floor(Math.random() * 900) + 100)}-${String(
        Math.floor(Math.random() * 900) + 100,
      )}-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      position: `${department} ${
        ["Specialist", "Manager", "Director", "Analyst", "Coordinator"][i % 5]
      }`,
      salary,
      hire_date: new Date(2015 + (i % 9), i % 12, (i % 28) + 1)
        .toISOString()
        .split("T")[0],
      status,
      priority,
      is_vip: isVip,
      performance_score: performanceScore,
      // Function field - calculated field
      annual_bonus: Math.floor(salary * 0.1 * (performanceScore / 100)),
      // Autorefreshable field - last login timestamp
      last_login: new Date(
        Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      // Additional computed field
      years_of_service: new Date().getFullYear() - (2015 + (i % 9)),
    };
  });
};

const mockResults = generateMockData(250); // Generate 250 records for testing

const mockAvailableViews: View[] = [mockTreeView];

// Mock ConnectionProvider
const mockConnectionProvider: Partial<ConnectionProviderType> = {
  getActionStringForModel: async () => "mock_action",
  getViewsForAction: async (): Promise<ViewData> => ({
    views: new Map([
      ["tree", [2, "tree"]],
      ["form", [1, "form"]],
    ]),
    limit: 80,
    model: "demo.model",
    domain: [],
    context: {},
  }),
  getView: async () => mockTreeView,
  getFields: async () => ({}),
  searchAllIds: async () => mockResults.map((r) => r.id),
  searchCount: async (params) => {
    console.log("searchCount called with params:", params);
    return mockResults.length;
  },
  search: async (params: any) => {
    console.log("search called with params:", params);
    const { limit = 80, offset = 0 } = params || {};
    return mockResults.slice(offset, offset + limit);
  },
  searchForTree: async (params): Promise<SearchResponse> => {
    console.log("searchForTree called with params:", params);
    const { limit = 80, offset = 0 } = params || {};
    const results = mockResults.slice(offset, offset + limit);
    console.log(
      "searchForTree returning results with status:",
      results.map((r) => ({ id: r.id, hasStatus: r.id % 2 === 1 })),
    );
    return {
      results,
      totalItems: () => Promise.resolve(mockResults.length),
      attrsEvaluated: results.map((result) => {
        // Generate colors based on priority and status
        let colors = undefined;
        if (result.priority === "critical") {
          colors = "#c62828"; // Red text for critical
        } else if (result.priority === "high") {
          colors = "#ef6c00"; // Orange text for high
        } else if (result.is_vip) {
          colors = "#7b1fa2"; // Purple text for VIP
        } else if (
          result.status === "inactive" ||
          result.status === "terminated"
        ) {
          colors = "#757575"; // Gray text for inactive
        }

        // Simple status logic: show green dot for odd ID numbers
        let status = undefined;
        if (result.id % 2 === 1) {
          status = "#4caf50"; // Green color code
        }

        return {
          id: result.id,
          colors,
          status,
        };
      }),
    };
  },
  update: async () => ({}),
  create: async () => ({}),
  deleteObjects: async () => ({}),
  execute: async () => ({}),
  readObjects: async () => [],
  readEvalUiObjects: async () => [
    mockResults,
    mockResults.map((result) => {
      // Generate colors based on priority and status
      let colors = undefined;
      if (result.priority === "critical") {
        colors = "#c62828"; // Red text for critical
      } else if (result.priority === "high") {
        colors = "#ef6c00"; // Orange text for high
      } else if (result.is_vip) {
        colors = "#7b1fa2"; // Purple text for VIP
      } else if (
        result.status === "inactive" ||
        result.status === "terminated"
      ) {
        colors = "#757575"; // Gray text for inactive
      }

      // Simple status logic: show green dot for odd ID numbers
      let status = undefined;
      if (result.id % 2 === 1) {
        status = "#4caf50"; // Green color code
      }

      return {
        id: result.id,
        colors,
        status,
      };
    }),
  ],
  parseConditions: async (params) => {
    console.log("parseConditions called with params:", params);
    const { values } = params || {};

    return (values || mockResults).map((result: any) => {
      // Generate colors based on priority and status
      let colors = undefined;
      if (result.priority === "critical") {
        colors = "#c62828"; // Red text for critical
      } else if (result.priority === "high") {
        colors = "#ef6c00"; // Orange text for high
      } else if (result.is_vip) {
        colors = "#7b1fa2"; // Purple text for VIP
      } else if (
        result.status === "inactive" ||
        result.status === "terminated"
      ) {
        colors = "#757575"; // Gray text for inactive
      }

      // Simple status logic: show green dot for odd ID numbers
      let status = undefined;
      if (result.id % 2 === 1) {
        status = "#4caf50"; // Green color code
      }

      return {
        id: result.id,
        colors,
        status,
      };
    });
  },
  parseCondition: async () => ({}),
  executeWorkflow: async () => ({}),
  createReport: async () => ({}),
  getReport: async () => ({}),
  executeOnChange: async () => ({}),
  // Add all other required methods as no-ops
  defaultGet: async () => ({}),
  getActionData: async () => ({}),
  nameSearch: async (params) => {
    console.log("nameSearch called with params:", params);
    return mockResults.map((result) => [result.id, result.name]);
  },
  duplicate: async () => ({}),
  evalDomain: async () => [],
  getLogInfo: async () => [],
  isShortcutFavorite: async () => false,
  removeFavourite: async () => {},
  addFavourite: async () => {},
  treeButOpen: async () => [],
  exportData: async () => "",
  readForView: async () => ({}),
  readAggregates: async () => {
    // Calculate aggregates for the salary field
    const totalSalary = mockResults.reduce((sum, item) => sum + item.salary, 0);
    const avgSalary = Math.round(totalSalary / mockResults.length);
    const maxSalary = Math.max(...mockResults.map((item) => item.salary));
    const minSalary = Math.min(...mockResults.map((item) => item.salary));

    const totalBonus = mockResults.reduce(
      (sum, item) => sum + item.annual_bonus,
      0,
    );
    const avgBonus = Math.round(totalBonus / mockResults.length);

    return {
      salary: {
        sum: totalSalary,
        avg: avgSalary,
        max: maxSalary,
        min: minSalary,
        count: mockResults.length,
      },
      annual_bonus: {
        sum: totalBonus,
        avg: avgBonus,
        count: mockResults.length,
      },
    };
  },
  saveUserViewPrefs: async () => ({}),
  readUserViewPrefs: async () => ({}),
  processSearchResults: async () => ({ results: [], attrsEvaluated: {} }),
  getToolbar: async () => ({}),
  logAction: async () => ({}),
  checkPermission: async () => true,
};

// Initialize the mock connection provider
ConnectionProvider.init(mockConnectionProvider as ConnectionProviderType);

// Wrapper component with context providers and proper dimensions
const TreeActionViewWrapper = (props: TreeActionViewProps) => {
  const [currentView, setCurrentView] = useState<View>(props.treeView);
  const [currentId, setCurrentId] = useState<number | undefined>(
    props.results && props.results.length > 0 ? props.results[0].id : undefined,
  );
  const [currentItemIndex, setCurrentItemIndex] = useState<number | undefined>(
    props.results && props.results.length > 0 ? 0 : undefined,
  );
  const [results, setResults] = useState(props.results || []);
  const [searchTreeNameSearch, setSearchTreeNameSearch] = useState<string>(
    props.searchTreeNameSearch || "",
  );
  const [sorter, setSorter] = useState<any>();
  const [totalItems, setTotalItems] = useState<number>(mockResults.length);
  const [selectedRowItems, setSelectedRowItems] = useState<any[]>([]);

  // Mock refs for proper context
  const formRef = { current: null };
  const searchTreeRef = { current: null };

  console.log("TreeActionViewWrapper rendered with props:", {
    model: props.model,
    visible: props.visible,
    results: props.results?.length,
    treeView: props.treeView?.type,
  });

  const goToResourceId = async (ids: number[], openInSameTab?: boolean) => {
    console.log("goToResourceId called with:", ids, openInSameTab);
    // Mock implementation for storybook
    if (ids.length > 0) {
      const foundItem = mockResults.find((item) => item.id === ids[0]);
      if (foundItem) {
        const foundIndex = mockResults.findIndex((item) => item.id === ids[0]);
        setCurrentId(ids[0]);
        setCurrentItemIndex(foundIndex);
      }
    }
  };

  return (
    <StorybookDimensionsContext.Provider
      value={{
        width: 1200,
        height: 800,
        modalWidth: 840,
        modalHeight: 800,
      }}
    >
      <NotificationProvider>
        <ConfigContextProvider
          locale="en_US"
          erpFeatures={{}}
          userFeatures={{ features: {}, canWriteFeatureFlags: false }}
          globalValues={{}}
          rootContext={{}}
          devMode={false}
          title="Storybook Demo"
          treeMaxLimit={100}
        >
          <ActionViewProvider
            title="Employee Management"
            currentView={currentView}
            setCurrentView={setCurrentView}
            availableViews={props.availableViews || [props.treeView]}
            formRef={formRef}
            searchTreeRef={searchTreeRef}
            onNewClicked={() => {
              console.log("New button clicked");
            }}
            currentId={currentId}
            setCurrentId={setCurrentId}
            setCurrentItemIndex={setCurrentItemIndex}
            currentItemIndex={currentItemIndex}
            results={results}
            setResults={setResults}
            currentModel={props.model}
            sorter={sorter}
            setSorter={setSorter}
            totalItems={totalItems}
            setTotalItems={setTotalItems}
            selectedRowItems={selectedRowItems}
            setSelectedRowItems={setSelectedRowItems}
            setSearchTreeNameSearch={(searchString?: string) =>
              setSearchTreeNameSearch(searchString || "")
            }
            searchTreeNameSearch={searchTreeNameSearch}
            goToResourceId={goToResourceId}
            limit={props.limit || DEFAULT_SEARCH_LIMIT}
            isActive={true}
            initialSearchParams={[]}
            initialCurrentPage={1}
            initialOrder={[]}
            permissions={{
              create: false,
              write: false,
              unlink: false,
              read: true,
            }}
            permissionsLoading={false}
            permissionsError={null}
          >
            <div
              className="tree-action-view-container"
              style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              <StorybookTitleHeaderWrapper>
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "relative",
                  }}
                >
                  <TreeActionView
                    {...props}
                    setCurrentView={setCurrentView}
                    setCurrentId={(id) => {
                      setCurrentId(id);
                      props.setCurrentId?.(id);
                    }}
                    setCurrentItemIndex={(index) => {
                      setCurrentItemIndex(index);
                      props.setCurrentItemIndex?.(index);
                    }}
                  />
                </div>
              </StorybookTitleHeaderWrapper>
            </div>
          </ActionViewProvider>
        </ConfigContextProvider>
      </NotificationProvider>
    </StorybookDimensionsContext.Provider>
  );
};

const meta: Meta<typeof TreeActionView> = {
  title: "Views/TreeActionView",
  component: TreeActionView,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "responsive",
    },
    docs: {
      description: {
        component: `
The TreeActionView component displays data in a tree format with three different rendering modes:
- **Legacy**: Traditional tree view
- **Infinite**: Infinite scroll tree view
- **Paginated**: Paginated tree view

The component automatically determines the tree type based on the view configuration and supports expandable trees, filtering, and various toolbar actions.

**Note**: This component requires full viewport height to function properly with sticky headers and scroll behavior.
        `,
      },
    },
  },
  argTypes: {
    visible: {
      control: "boolean",
      description: "Whether the tree view is visible",
    },
    model: {
      control: "text",
      description: "The model name for the tree data",
    },
    limit: {
      control: "number",
      description: "Number of records to display per page/batch",
    },
    searchTreeNameSearch: {
      control: "text",
      description: "Search string for filtering records",
    },
  },
  render: (args) => <TreeActionViewWrapper {...args} />,
};

export default meta;

type Story = StoryObj<typeof meta>;

const defaultArgs: Partial<TreeActionViewProps> = {
  treeView: mockTreeView,
  visible: true,
  searchTreeRef: { current: null },
  model: "demo.model",
  domain: [],
  context: {},
  results: mockResults,
  availableViews: mockAvailableViews,
  setCurrentItemIndex: () => {},
  setCurrentId: () => {},
  setCurrentView: () => {},
  limit: DEFAULT_SEARCH_LIMIT,
};

export const Infinite: Story = {
  args: {
    ...defaultArgs,
    treeView: mockTreeViewInfinite,
    limit: 0, // Infinite scroll doesn't use limit
  },
  parameters: {
    docs: {
      description: {
        story:
          "The infinite tree view with advanced features including: autorefreshable fields (Last Login refreshes every 30s), function fields (Annual Bonus calculated from salary × performance), colored rows (VIP employees in purple, critical priority in red, high priority in orange), status indicators (green dots for active employees, different colors for various statuses), and aggregate summaries at the bottom showing total/average salary and bonus calculations.",
      },
    },
  },
};

export const Paginated: Story = {
  args: {
    ...defaultArgs,
    treeView: mockTreeViewPaginated,
    limit: 20,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The paginated tree view with enhanced features demonstrating: autorefreshable Last Login field, calculated Annual Bonus function field, dynamic row coloring based on employee priority and VIP status, status indicators with colored dots, and aggregate summaries. Navigate through 13+ pages to see different employees with varying statuses, priorities, and calculated bonuses.",
      },
    },
  },
};
