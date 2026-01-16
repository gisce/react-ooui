import { TreeView, View } from "@gisce/react-ooui";

export const mockTreeView: TreeView = {
  view_id: 2,
  type: "tree",
  arch: '<tree colors="gold:is_vip==True and annual_bonus&gt;8000;green:computed_rating&gt;=4;blue:annual_bonus&gt;6000;orange:computed_rating&lt;=2;red:priority==\'critical\';orange:priority==\'high\';purple:is_vip==True;gray:status==\'inactive\' or status==\'terminated\'" status="green:status==\'active\' and performance_score&gt;=95 and is_vip==True and department==\'Engineering\';red:status==\'terminated\' and priority==\'critical\' and department==\'Finance\';gold:is_vip==True and annual_bonus&gt;8000;blue:annual_bonus&gt;6000;orange:computed_rating&lt;=2"><field name="name"/><field name="email"/><field name="department"/><field name="company"/><field name="position"/><field name="status" statusbar_visible="active,pending,on_leave"/><field name="last_login" autorefresh="1"/><field name="annual_bonus"/><field name="computed_rating"/><field name="salary" sum="Total Salary"/></tree>',
  fields_in_conditions: {
    status: ["status", "performance_score", "is_vip", "department", "priority"],
    colors: ["annual_bonus", "computed_rating", "is_vip", "priority", "status"], // Include function fields in colors
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
    annual_bonus: {
      type: "integer",
      string: "Annual Bonus",
      is_function: true,
    },
    last_login: { type: "datetime", string: "Last Login" },
    years_of_service: { type: "integer", string: "Years of Service" },
    computed_rating: {
      type: "integer",
      string: "Computed Rating",
      is_function: true,
    },
    id: { type: "integer", string: "ID" },
  },
  search_fields: {
    primary: ["name"],
    secondary: ["email", "department", "company", "status"],
  },
  isExpandable: false,
};

export const mockTreeViewExpandable: TreeView = {
  ...mockTreeView,
  isExpandable: true,
  field_parent: "parent_id",
};

export const mockTreeViewInfinite: TreeView = {
  ...mockTreeView,
  arch: '<tree infinite="1" colors="gold:is_vip==True and annual_bonus&gt;8000;green:computed_rating&gt;=4;blue:annual_bonus&gt;6000;orange:computed_rating&lt;=2;red:priority==\'critical\';orange:priority==\'high\';purple:is_vip==True;gray:status==\'inactive\' or status==\'terminated\'" status="green:status==\'active\' and performance_score&gt;=95 and is_vip==True and department==\'Engineering\';red:status==\'terminated\' and priority==\'critical\' and department==\'Finance\';gold:is_vip==True and annual_bonus&gt;8000;blue:annual_bonus&gt;6000;orange:computed_rating&lt;=2"><field name="name"/><field name="email"/><field name="department"/><field name="company"/><field name="position"/><field name="status" statusbar_visible="active,pending,on_leave"/><field name="last_login" autorefresh="1"/><field name="annual_bonus"/><field name="computed_rating"/><field name="salary" sum="Total Salary"/></tree>',
};

export const mockTreeViewPaginated: TreeView = {
  ...mockTreeView,
  arch: '<tree infinite="0" colors="gold:is_vip==True and annual_bonus&gt;8000;green:computed_rating&gt;=4;blue:annual_bonus&gt;6000;orange:computed_rating&lt;=2;red:priority==\'critical\';orange:priority==\'high\';purple:is_vip==True;gray:status==\'inactive\' or status==\'terminated\'" status="green:status==\'active\' and performance_score&gt;=95 and is_vip==True and department==\'Engineering\';red:status==\'terminated\' and priority==\'critical\' and department==\'Finance\';gold:is_vip==True and annual_bonus&gt;8000;blue:annual_bonus&gt;6000;orange:computed_rating&lt;=2"><field name="name"/><field name="email"/><field name="department"/><field name="company"/><field name="position"/><field name="status" statusbar_visible="active,pending,on_leave"/><field name="last_login" autorefresh="1"/><field name="annual_bonus"/><field name="computed_rating"/><field name="salary" sum="Total Salary"/></tree>',
};

// Generate a larger dataset for proper infinite scroll and pagination demonstration
export const generateMockData = (count: number) => {
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
      annual_bonus: undefined,
      last_login: new Date(
        Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      years_of_service: new Date().getFullYear() - (2015 + (i % 9)),
      computed_rating: undefined,
    };
  });
};

export const mockResults = generateMockData(250);

export const generateMockDataWithStringNumbers = (count: number) => {
  return generateMockData(count).map((record) => ({
    ...record,
    salary: String(record.salary),
    performance_score: String(record.performance_score),
    years_of_service: String(record.years_of_service),
  }));
};

export const mockResultsWithStringNumbers = generateMockDataWithStringNumbers(250);

export const mockAvailableViews: View[] = [mockTreeView];
