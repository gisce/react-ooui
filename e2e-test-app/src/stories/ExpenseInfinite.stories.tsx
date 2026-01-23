import React, { memo } from "react";
import { TreeActionView, DEFAULT_SEARCH_LIMIT } from "@gisce/react-ooui";

type TreeActionViewProps = React.ComponentProps<typeof TreeActionView>;
import {
  mockExpenseTreeView,
  mockExpenseResults,
  mockExpenseAvailableViews,
} from "./ExpenseInfinite.mocks";
import { ExpenseInfiniteWrapper } from "./ExpenseInfinite.wrapper";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

// Default args for stories
const defaultArgs: Partial<TreeActionViewProps> = {
  treeView: mockExpenseTreeView,
  visible: true,
  searchTreeRef: { current: null },
  model: "hr.expense.expense",
  domain: [],
  context: {},
  results: mockExpenseResults,
  availableViews: mockExpenseAvailableViews,
  setCurrentItemIndex: () => {},
  setCurrentId: () => {},
  setCurrentView: () => {},
  limit: DEFAULT_SEARCH_LIMIT,
};

/**
 * ExpenseInfinite Story - Bug #2903 Reproduction
 *
 * This story reproduces the infinite table render glitches from issue #2903:
 * https://github.com/gisce/webclient/issues/2903
 *
 * Bug symptoms to test:
 * 1. Duplicate rows - scroll down and look for repeated row IDs
 * 2. Fields not showing - scroll and observe if fields appear/disappear
 * 3. Wrong selection - select rows and verify correct count is selected
 *
 * Key characteristics:
 * - Model: hr.expense.expense with 130 records (exact count from issue)
 * - Has function field 'amount' (is_function: true, is_sortable: false)
 * - Uses infinite scroll mode (infinite="1" in arch)
 *
 * Test steps:
 * 1. Open this story at http://localhost:6006/story/expense-infinite
 * 2. Scroll down slowly and watch for duplicate rows
 * 3. Scroll quickly up and down to trigger timing issues
 * 4. Select multiple rows using Ctrl+click and verify selection count
 * 5. Compare behavior with paginated mode (via 3-dot menu)
 */
const ExpenseInfiniteComponent: React.FC = () => {
  const args = {
    ...defaultArgs,
    treeView: mockExpenseTreeView,
    limit: 0, // Infinite scroll doesn't use limit
  } as TreeActionViewProps;

  return (
    <ErrorBoundary>
      <ExpenseInfiniteWrapper {...args} locale="ca_ES" />
    </ErrorBoundary>
  );
};

export const ExpenseInfinite = memo(ExpenseInfiniteComponent);

// Story metadata for our custom story viewer
export const meta = {
  title: "Bug Reproductions/ExpenseInfinite",
  component: TreeActionView,
  render: (args: TreeActionViewProps) => (
    <ExpenseInfiniteWrapper {...args} locale="ca_ES" />
  ),
};

export default meta;
