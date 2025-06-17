import type { Meta, StoryObj } from "@storybook/react";
import {
  TreeActionView,
  TreeActionViewProps,
} from "../views/actionViews/TreeActionView";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import {
  mockTreeView,
  mockTreeViewInfinite,
  mockTreeViewPaginated,
  mockResults,
  mockAvailableViews,
} from "./TreeActionView.mocks";
import { TreeActionViewWrapper } from "./TreeActionView.wrapper";
import { initializeMockProvider } from "./TreeActionView.mockProvider";

// Initialize the mock connection provider
initializeMockProvider();

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
