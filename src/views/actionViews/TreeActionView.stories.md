# TreeActionView Storybook Stories

This file documents the TreeActionView component stories and the mocking strategy used.

## Component Overview

The `TreeActionView` component is a complex React component that displays data in a tree format with three different rendering modes:

- **Legacy**: Traditional tree view with basic functionality
- **Infinite**: Infinite scroll tree view for better performance with large datasets
- **Paginated**: Paginated tree view with navigation controls

## Mocking Strategy

### Network Requests

The component relies heavily on network requests through the `ConnectionProvider`. We've created a comprehensive mock that implements all the required methods:

```typescript
const mockConnectionProvider: ConnectionProviderType = {
  getActionStringForModel: async () => "mock_action",
  getViewsForAction: async () => ({ views: [], initialView: mockFormView }),
  getView: async () => mockFormView,
  // ... all other methods
};
```

### Context Providers

The component requires two main context providers:

1. **ConfigContextProvider**: Provides configuration and feature flags
2. **ActionViewProvider**: Manages the action view state and provides tree-specific functionality

### Mock Data Structure

We provide realistic mock data that matches the expected types:

- `FormView` and `TreeView` objects with proper field definitions
- Sample result data with consistent structure
- Different variations for testing different tree modes

## Available Stories

### Legacy

The default tree view mode with traditional table-like interface.

### Infinite

Tree view with infinite scrolling capability, automatically triggered when `limit: 0` or when the tree arch contains `infinite="1"`.

### Paginated

Tree view with pagination controls, triggered when the tree arch contains `infinite="0"` or when dealing with expandable trees.

### Expandable

Hierarchical tree view that supports parent-child relationships through the `field_parent` property.

### WithSearch

Demonstrates the search functionality with filtered results.

### LargeDataset

Shows performance with a larger dataset (100 records).

### Hidden

Tests the component behavior when `visible={false}`.

### EmptyResults

Tests how the component handles empty data states.

## Running the Stories

1. Ensure Storybook is configured in your project
2. Run `npm run storybook` or `yarn storybook`
3. Navigate to "Views" → "TreeActionView" in the Storybook interface

## Customization

You can customize the stories by:

1. **Modifying mock data**: Update the `mockResults`, `mockFormView`, or `mockTreeView` objects
2. **Adding new tree types**: Create additional tree view configurations with different `arch` properties
3. **Testing edge cases**: Add new stories for specific scenarios like error states or loading states
4. **Network simulation**: Enhance the mock connection provider to simulate loading delays or errors

## Notes

- The component automatically determines the tree type based on the view configuration
- Network requests are completely mocked, so no actual backend is required
- The wrapper component provides all necessary context and state management
- Stories are designed to be interactive and demonstrate real component behavior
