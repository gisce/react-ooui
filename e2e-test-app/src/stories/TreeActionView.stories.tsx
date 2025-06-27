import React from "react";
import { TreeActionView, DEFAULT_SEARCH_LIMIT } from "@gisce/react-ooui";

type TreeActionViewProps = React.ComponentProps<typeof TreeActionView>;
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

// Default args for stories
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

// Infinite story component
export const Infinite: React.FC = () => {
  const args = {
    ...defaultArgs,
    treeView: mockTreeViewInfinite,
    limit: 0, // Infinite scroll doesn't use limit
  } as TreeActionViewProps;

  return <TreeActionViewWrapper {...args} />;
};

// Paginated story component
export const Paginated: React.FC = () => {
  const args = {
    ...defaultArgs,
    treeView: mockTreeViewPaginated,
    limit: 20,
  } as TreeActionViewProps;

  return <TreeActionViewWrapper {...args} />;
};

// Story metadata for our custom story viewer
export const meta = {
  title: "Views/TreeActionView",
  component: TreeActionView,
  render: (args: TreeActionViewProps) => <TreeActionViewWrapper {...args} />,
};

export default meta;
