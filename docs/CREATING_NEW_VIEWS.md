# Creating a New View Type in the ERP Webclient Ecosystem

This guide walks you through the complete process of adding a new view type to the ERP Webclient ecosystem, based on the Kanban view implementation.

## Table of Contents

1. [Overview](#overview)
2. [Phase 1: OOUI Parser](#phase-1-ooui-parser)
3. [Phase 2: React-OOUI Types](#phase-2-react-ooui-types)
4. [Phase 3: React Components](#phase-3-react-components)
5. [Phase 4: Integration](#phase-4-integration)
6. [Phase 5: Testing](#phase-5-testing)
7. [Phase 6: Mock Server (Optional)](#phase-6-mock-server-optional)
8. [Checklist](#checklist)

---

## Overview

The ecosystem consists of three main repositories:
- **@gisce/ooui** - XML parser library (TypeScript)
- **@gisce/react-ooui** - React components and views
- **erp-mitm-mock-server** - Development mock server (optional)

A view type flows through these layers:
```
Backend XML → OOUI Parser → React Components → User Interface
```

---

## Phase 1: OOUI Parser

### 1.1 Create the Parser Class

**Location:** `/Users/marc/development/ooui/src/YourView.ts`

```typescript
import WidgetFactory from "./WidgetFactory";
import Widget from "./Widget";
import Button from "./Button";
import { replaceEntities } from "./helpers/attributeParser";
import { parseBoolAttribute, ParsedNode } from "./helpers/nodeParser";
import * as txml from "txml";
import { parseContext } from "./helpers/contextParser";

class YourView {
  /**
   * Object containing fields specification
   */
  _fields: any;
  get fields() {
    return this._fields;
  }

  _string: string | null = null;
  get string(): string | null {
    return this._string;
  }

  /**
   * Widget type
   */
  _type: string = "yourview";
  get type(): string {
    return this._type;
  }

  // Add your view-specific properties here
  _your_attribute: string | null = null;
  get your_attribute(): string | null {
    return this._your_attribute;
  }

  /**
   * Context for each field
   */
  _contextForFields: Record<string, any> = {};
  get contextForFields(): Record<string, any> {
    return this._contextForFields;
  }

  constructor(fields: Object) {
    this._fields = fields;
  }

  parse(xml: string) {
    const view = txml
      .parse(xml)
      .filter((el: ParsedNode) => el.tagName === "yourview")[0];

    // Parse view attributes
    this._string = view.attributes.string || null;
    if (this._string) {
      this._string = replaceEntities(this._string);
    }

    // Parse your specific attributes
    this._your_attribute = view.attributes.your_attribute || null;

    const widgetFactory = new WidgetFactory();

    // Parse children (fields, buttons, etc.)
    view.children.forEach((element: ParsedNode) => {
      const { tagName, attributes } = element;

      if (tagName === "field") {
        this._parseField(element, attributes, widgetFactory);
      }
      // Handle other child elements...
    });
  }

  private _parseField(
    _element: ParsedNode,
    attributes: any,
    widgetFactory: WidgetFactory
  ) {
    const { name, widget } = attributes;

    if (!name) {
      return;
    }

    if (!this._fields[name]) {
      throw new Error(`Field ${name} doesn't exist in fields definition`);
    }

    const fieldDef = this._fields[name];
    let widgetType = fieldDef.type;

    // Parse context
    const widgetContext = parseContext({
      context: attributes.context || fieldDef.context,
      values: {},
      fields: this._fields,
    });

    const mergedAttrs = {
      ...fieldDef,
      ...attributes,
      fieldsWidgetType: fieldDef?.type,
      context: widgetContext,
    };

    this._contextForFields[name] = widgetContext;

    if (widget) {
      widgetType = widget;
    }

    if (!mergedAttrs.invisible) {
      const fieldWidget = widgetFactory.createWidget(widgetType, mergedAttrs);
      // Store the widget where appropriate
    }
  }

  /**
   * Find widgets by id
   */
  findById(id: string): Widget | null {
    // Implement search logic
    return null;
  }
}

export default YourView;
```

### 1.2 Export the Parser

**File:** `/Users/marc/development/ooui/src/index.ts`

```typescript
// Add import
import YourView from "./YourView";

// Add to exports
export {
  // ... existing exports
  YourView,
};
```

### 1.3 Create Parser Tests

**Location:** `/Users/marc/development/ooui/src/spec/YourView.spec.ts`

```typescript
import { it, expect, describe } from "vitest";
import YourView from "../YourView";

const XML_VIEW = `<?xml version="1.0"?>
<yourview string="Test View" your_attribute="value">
  <field name="name"/>
</yourview>
`;

const FIELDS = {
  name: {
    required: true,
    size: 128,
    string: "Name",
    type: "char",
    views: {},
  },
};

describe("A YourView", () => {
  it("should parse xml", () => {
    const view = new YourView(FIELDS);
    view.parse(XML_VIEW);

    expect(view.type).toBe("yourview");
    expect(view.string).toBe("Test View");
    expect(view.your_attribute).toBe("value");
  });

  // Add more tests...
});
```

### 1.4 Build and Test OOUI

```bash
cd /Users/marc/development/ooui

# Run tests
npm test -- YourView.spec.ts

# Build library
npm run build
```

**✅ Checkpoint:** All tests should pass, no TypeScript errors.

---

## Phase 2: React-OOUI Types

### 2.1 Update ViewType Union

**File:** `/Users/marc/development/react-ooui/src/types/index.ts`

```typescript
// Find ViewType definition (around line 455)
type ViewType =
  | "tree"
  | "form"
  | "dashboard"
  | "graph"
  | "calendar"
  | "yourview";  // Add your view type
```

### 2.2 Create View Type Interface

**File:** `/Users/marc/development/react-ooui/src/types/index.ts`

```typescript
// Add after existing view types (around line 87)
export type YourView = BaseView & {
  arch: string;
  fields: any;
  // Add your view-specific properties
  your_attribute?: string;
  search_fields?: SearchFields;
  toolbar?: any;
  fields_in_conditions?: FieldsInConditions;
};
```

### 2.3 Update View Union Type

**File:** `/Users/marc/development/react-ooui/src/types/index.ts`

```typescript
// Update the View union (around line 101)
export type View =
  | TreeView
  | FormView
  | DashboardView
  | GraphView
  | KanbanView
  | YourView;  // Add your view
```

### 2.4 Update ConnectionProvider Types

**File:** `/Users/marc/development/react-ooui/src/types/index.ts`

```typescript
// Update getView return type (around line 330)
getView: (
  options: GetViewRequest,
  requestConfig?: any,
) => Promise<FormView | TreeView | GraphView | KanbanView | YourView>;
```

---

## Phase 3: React Components

### 3.2 Create Custom Hooks

**Location:** `/Users/marc/development/react-ooui/src/widgets/views/YourView/useYourViewData.ts`

```typescript
import { useCallback, useEffect, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";

export type YourViewRecord = {
  id: number;
  [key: string]: any;
};

type UseYourViewDataParams = {
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  enabled?: boolean;
};

export const useYourViewData = (params: UseYourViewDataParams) => {
  const {
    model,
    domain,
    context,
    searchParams = [],
    enabled = true,
  } = params;

  const [records, setRecords] = useState<YourViewRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [searchRequest, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );

  useEffect(() => {
    return () => {
      cancelSearchRequest();
    };
  }, []);

  const fetchRecords = useDeepCompareCallback(async () => {
    if (!enabled || !model) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const fetchedRecords = await searchRequest({
        model,
        params: domain,
        context,
        limit: 0,
      });

      setRecords(fetchedRecords);
    } catch (err: any) {
      console.error("Error fetching data:", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [enabled, model, domain, context]);

  return {
    records,
    isLoading,
    error,
    fetchRecords,
  };
};
```

### 3.3 Create Main View Component

**Location:** `/Users/marc/development/react-ooui/src/widgets/views/YourView/YourView.tsx`

```typescript
import { useCallback, useEffect, useMemo, useState } from "react";
import { YourView as YourViewType } from "@/types";
import { YourView } from "@gisce/ooui";
import { Alert, Spin } from "antd";
import { useYourViewData } from "./useYourViewData";

type YourViewProps = {
  yourView: YourViewType;
  model: string;
  domain: any[];
  context: any;
  searchParams?: any[];
  onRecordClick?: (record: any) => void;
  onRefresh?: () => void;
};

export const YourViewComponent = (props: YourViewProps) => {
  const { yourView, model, domain, context, searchParams = [], onRecordClick } = props;

  const [viewDef, setViewDef] = useState<YourView | null>(null);
  const [parsingError, setParsingError] = useState<Error | null>(null);

  // Parse view definition
  useEffect(() => {
    if (!yourView.arch || !yourView.fields) {
      return;
    }

    try {
      const view = new YourView(yourView.fields);
      view.parse(yourView.arch);
      setViewDef(view);
      setParsingError(null);
    } catch (err: any) {
      console.error("Error parsing view definition:", err);
      setParsingError(err);
    }
  }, [yourView.arch, yourView.fields]);

  // Fetch data
  const {
    records,
    isLoading,
    error: dataError,
    fetchRecords,
  } = useYourViewData({
    model,
    domain,
    context,
    searchParams,
    enabled: !!viewDef,
  });

  // Show parsing error
  if (parsingError) {
    return (
      <Alert
        message="Error parsing view"
        description={parsingError.message}
        type="error"
        showIcon
      />
    );
  }

  // Show data error
  if (dataError) {
    return (
      <Alert
        message="Error loading data"
        description={dataError.message}
        type="error"
        showIcon
      />
    );
  }

  // Show loading
  if (!viewDef || isLoading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", padding: "40px" }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      {/* Render your view UI here */}
      <h2>{viewDef.string}</h2>
      {records.map((record) => (
        <div key={record.id} onClick={() => onRecordClick?.(record)}>
          {record.name}
        </div>
      ))}
    </div>
  );
};
```

### 3.4 Create Action Bar

**Location:** `/Users/marc/development/react-ooui/src/actionbar/YourViewActionBar.tsx`

**Important:** Action bars should follow a consistent pattern across all views. Include these common buttons in order:

1. **Filter Toggle** - Using `ButtonWithBadge` with badge count
2. **Refresh Button** - Using `ActionButton`
3. **Change View Button** - For switching between available views
4. **Share URL Button** - For sharing the current state
5. **Separators** - Using `ActionBarSeparator` for visual grouping

```typescript
import { useContext } from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { Space } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import ActionButton from "./ActionButton";
import ButtonWithBadge from "./ButtonWithBadge";
import { ShareUrlButton } from "./ShareUrlButton";
import { ActionBarSeparator } from "./ActionBarSeparator";
import { ReloadOutlined, FilterOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { View } from "@/types";

type YourViewActionBarProps = {
  onRefresh?: () => void;
  isLoading?: boolean;
};

const YourViewActionBar = (props: YourViewActionBarProps) => {
  const { onRefresh, isLoading = false } = props;
  const { t } = useLocale();

  const {
    availableViews,
    currentView,
    setCurrentView,
    searchParams,
    searchVisible,
    setSearchVisible,
    previousView,
    setPreviousView,
  } = useContext(ActionViewContext) as ActionViewContextType;

  return (
    <Space wrap={true}>
      {/* Filter Toggle with Badge */}
      <ButtonWithBadge
        icon={
          <FilterOutlined
            style={{ color: searchVisible ? "white" : undefined }}
          />
        }
        tooltip={t("advanced_search")}
        type={searchVisible ? "primary" : "default"}
        onClick={() => setSearchVisible?.(!searchVisible)}
        disabled={isLoading}
        badgeNumber={searchParams?.length}
      />

      {/* Refresh Button */}
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={isLoading}
        onClick={onRefresh}
      />

      {/* Change View Button */}
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={(newView: View) => {
          setPreviousView?.(currentView);
          setCurrentView?.(newView);
        }}
        previousView={previousView}
        disabled={isLoading}
      />

      {/* Separator before utility buttons */}
      <ActionBarSeparator />

      {/* Share URL Button */}
      <ShareUrlButton searchParams={searchParams} />
    </Space>
  );
};

export default YourViewActionBar;
```

**Note:** This is the standard pattern used by Graph and Tree views. Adjust based on your view's specific needs, but maintain the same order and components for consistency.

### 3.5 Create Action View Wrapper

**Location:** `/Users/marc/development/react-ooui/src/views/actionViews/YourViewActionView.tsx`

```typescript
import { Fragment, useCallback, useContext } from "react";
import { FormView, YourView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import YourViewActionBar from "@/actionbar/YourViewActionBar";
import { YourViewComponent } from "@/widgets/views/YourView/YourView";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";

export type YourViewActionViewProps = {
  yourView: YourView;
  visible: boolean;
  model: string;
  domain: any;
  context: any;
  availableViews: View[];
  setCurrentId: (id?: number) => void;
  setCurrentView: (view: View) => void;
  setCurrentItemIndex: (index?: number) => void;
};

export const YourViewActionView = (props: YourViewActionViewProps) => {
  const {
    visible,
    yourView,
    model,
    context,
    domain,
    availableViews,
    setCurrentId,
    setCurrentView,
    setCurrentItemIndex,
  } = props;

  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;

  const {
    searchParams = [],
    setPreviousView,
    currentView,
  } = actionViewContext || {};

  const handleRefresh = useCallback(() => {
    // Implement refresh logic
  }, []);

  const handleRecordClick = useCallback(
    (record: any) => {
      // Open the form view for this record
      setCurrentId(record.id);

      const formView = availableViews.find((v) => v.type === "form") as FormView;

      if (formView) {
        setPreviousView?.(currentView);
        setCurrentView(formView);
        setCurrentItemIndex(undefined);
      }
    },
    [
      availableViews,
      currentView,
      setPreviousView,
      setCurrentId,
      setCurrentView,
      setCurrentItemIndex,
    ],
  );

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <TitleHeader showSummary={false}>
        <YourViewActionBar
          domain={domain}
          toolbar={yourView?.toolbar}
          parentContext={context}
          onRefresh={handleRefresh}
        />
      </TitleHeader>
      <YourViewComponent
        yourView={yourView}
        model={model}
        domain={domain}
        context={context}
        searchParams={searchParams}
        onRecordClick={handleRecordClick}
        onRefresh={handleRefresh}
      />
    </Fragment>
  );
};
```

**✅ Checkpoint:** Components compile without errors.

---

## Phase 4: Integration

### 4.1 Update ActionView Imports

**File:** `/Users/marc/development/react-ooui/src/views/ActionView.tsx`

```typescript
// Add to imports (around line 13)
import {
  DashboardView,
  FormView,
  GraphView,
  InitialViewData,
  KanbanView,
  YourView,  // Add this
  TreeView,
  View,
  ViewType,
} from "@/types/index";

// Add to imports (around line 39)
import { YourViewActionView } from "./actionViews/YourViewActionView";
```

### 4.2 Add View Retrieval Case

**File:** `/Users/marc/development/react-ooui/src/views/ActionView.tsx`

Find the switch statement in `fetchData` function (around line 199) and add:

```typescript
case "yourview": {
  viewDataRetrieved.push({
    ...(viewInfo as YourView),
    type: viewType,
    extra: { action_id, action_type },
  });
  break;
}
```

### 4.3 Add View Rendering Case

**File:** `/Users/marc/development/react-ooui/src/views/ActionView.tsx`

Find the ActionViewContent component and add:

```typescript
case "yourview": {
  return (
    <YourViewActionView
      key={`${view.type}-${view.view_id}`}
      visible={
        currentView!.type === view.type &&
        currentView!.view_id === view.view_id
      }
      yourView={view as YourView}
      model={model}
      context={context}
      domain={domain}
      availableViews={availableViews}
      setCurrentId={setCurrentId}
      setCurrentView={setCurrentView}
      setCurrentItemIndex={setCurrentItemIndex}
    />
  );
}
```

### 4.4 Build and Test TypeScript

```bash
cd /Users/marc/development/react-ooui

# Check TypeScript
npm run build:tsc

# Should complete with no errors
```

**✅ Checkpoint:** No TypeScript errors in react-ooui.

---

## Phase 5: Testing

### 5.1 Manual Testing Steps

1. **Start Development Server from webclient:**
   ```bash
   npm run link
   ```

2. **Test Basic Functionality:**
   - Navigate to an action with your view type
   - Verify view renders correctly
   - Test record interactions
   - Test refresh functionality
   - Test filter toggle
   - Test record click → form view

3. **Test Integration:**
   - Switch between view types
   - Verify search params work
   - Test with different domains
   - Check loading states
   - Verify error handling

### 5.2 Create E2E Tests (Optional)

**Location:** `/Users/marc/development/react-ooui/e2e-test-app/e2e/yourview.spec.ts`

```typescript
import { test, expect } from '@playwright/test';

test('YourView should render records', async ({ page }) => {
  // Test implementation
});
```

---

## Phase 6: Mock Server (Optional)

If you need to develop before backend is ready, create mock interceptors.

### 6.1 Create View Definition Mock

**Location:** `/Users/marc/development/erp-mitm-mock-server/interceptors/yourview-definition.js`

```javascript
export default {
  name: 'yourview-definition',
  description: 'Return yourview definition',

  shouldIntercept(requestBody) {
    if (
      Array.isArray(requestBody) &&
      requestBody[0] === 'execute' &&
      requestBody[5] === 'fields_view_get_json_attrs' &&
      requestBody[7] === 'yourview'
    ) {
      return true;
    }
    return false;
  },

  modifyResponse(responseData) {
    return {
      arch: `<yourview string="Test View" your_attribute="value">
        <field name="name"/>
      </yourview>`,
      fields: {
        name: {
          string: "Name",
          type: "char",
          required: true,
        },
      },
      type: "yourview",
      view_id: 123456,
    };
  }
};
```

### 6.2 Add View to Action

**Location:** `/Users/marc/development/erp-mitm-mock-server/interceptors/add-yourview.js`

```javascript
export default {
  name: 'add-yourview',
  description: 'Add yourview to action',

  shouldIntercept(requestBody) {
    if (
      Array.isArray(requestBody) &&
      requestBody[0] === 'execute' &&
      requestBody[4] === 'ir.actions.act_window' &&
      requestBody[5] === 'read' &&
      requestBody[6].includes(YOUR_ACTION_ID)
    ) {
      return true;
    }
    return false;
  },

  modifyResponse(responseData) {
    if (Array.isArray(responseData) && responseData.length > 0) {
      const item = responseData[0];

      if (item.view_mode && !item.view_mode.includes('yourview')) {
        item.view_mode = item.view_mode + ',yourview';
      }

      if (Array.isArray(item.views)) {
        const hasYourView = item.views.some(view => view[1] === 'yourview');
        if (!hasYourView) {
          item.views.push([123456, 'yourview']);
        }
      }
    }

    return responseData;
  }
};
```

### 6.3 Register Interceptors

**File:** `/Users/marc/development/erp-mitm-mock-server/interceptors/index.js`

```javascript
import addYourView from './add-yourview.js';
import yourViewDefinition from './yourview-definition.js';

const interceptors = [
  // ... existing interceptors
  addYourView,
  yourViewDefinition,
];
```

---

## Checklist

Use this checklist to ensure you haven't missed any steps:

### Phase 1: OOUI Parser
- [ ] Create parser class in `/Users/marc/development/ooui/src/YourView.ts`
- [ ] Implement `parse()` method
- [ ] Add getters for all attributes
- [ ] Export from `index.ts`
- [ ] Create test file `YourView.spec.ts`
- [ ] Write comprehensive tests (at least 15-20 tests)
- [ ] All tests pass
- [ ] Build ooui library successfully
- [ ] No TypeScript errors

### Phase 2: Types
- [ ] Add view type to `ViewType` union
- [ ] Create `YourView` type interface
- [ ] Add to `View` union type
- [ ] Update `ConnectionProviderType.getView` return type
- [ ] No TypeScript errors

### Phase 3: Components
- [ ] Create helper file (if needed)
- [ ] Create custom hooks
- [ ] Create main view component
- [ ] Create action bar component
- [ ] Create action view wrapper
- [ ] All components compile without errors

### Phase 4: Integration
- [ ] Import types in `ActionView.tsx`
- [ ] Import action view component
- [ ] Add view retrieval case
- [ ] Add view rendering case
- [ ] TypeScript build passes

### Phase 5: Testing
- [ ] Manual testing completed
- [ ] All features work as expected
- [ ] No console errors
- [ ] Loading states work
- [ ] Error handling works
- [ ] Integration with other views works

### Phase 6: Mock Server (if applicable)
- [ ] Create view definition interceptor
- [ ] Create add-view interceptor
- [ ] Register interceptors
- [ ] Test with mock server

### Documentation
- [ ] Add comments to complex code
- [ ] Update README if needed
- [ ] Document any new conventions

---

## Common Patterns

### Parsing Boolean Attributes
```typescript
this._drag = view.attributes.drag !== undefined
  ? parseBoolAttribute(view.attributes.drag)
  : true; // default value
```

### Parsing with HTML Entity Decoding
```typescript
this._string = view.attributes.string || null;
if (this._string) {
  this._string = replaceEntities(this._string);
}
```

### Handling Context
```typescript
const widgetContext = parseContext({
  context: attributes.context || fieldDef.context,
  values: {},
  fields: this._fields,
});

this._contextForFields[name] = widgetContext;
```

### Error Handling in Components
```typescript
if (parsingError) {
  return (
    <Alert
      message="Error parsing view"
      description={parsingError.message}
      type="error"
      showIcon
    />
  );
}
```

---

## Tips & Best Practices

1. **Follow Existing Patterns:** Look at Tree, Form, Graph, and Kanban implementations as references.

2. **Type Safety:** Use TypeScript strictly. Avoid `any` unless absolutely necessary.

3. **Test Everything:** Write comprehensive tests for the parser. Include edge cases.

4. **Keep Components Small:** Break down complex components into smaller, reusable parts.

5. **Use Hooks:** Separate data fetching logic into custom hooks.

6. **Error Boundaries:** Always handle parsing and data fetching errors gracefully.

7. **Performance:** Use `useMemo` and `useCallback` to prevent unnecessary re-renders.

8. **Accessibility:** Consider keyboard navigation and screen readers.

9. **Documentation:** Add JSDoc comments to public methods and complex logic.

10. **Build Often:** Run TypeScript build after each phase to catch errors early.

---

## Troubleshooting

### "Module not found" Errors
- Ensure you've built and installed the updated ooui package
- Run `npm run link` in webclient directory

### TypeScript Errors in Parser
- Check that all attributes use proper type annotations
- Ensure unused parameters are prefixed with `_`
- Use `parseBoolAttribute()` for boolean attributes (only takes 1 argument)

### View Not Rendering
- Check that view type is added to all type unions
- Verify the case statement in ActionView.tsx
- Check browser console for errors

### Tests Failing
- Ensure field definitions in tests match expected structure
- Check that widget properties use `raw_props` (e.g., `raw_props.widget`)
- Verify XML structure is valid

---

## Example: Complete Minimal View

Here's a minimal but complete view implementation:

**Parser (ooui):**
```typescript
class MinimalView {
  _fields: any;
  _string: string | null = null;
  _type = "minimal";

  get fields() { return this._fields; }
  get string() { return this._string; }
  get type() { return this._type; }

  constructor(fields: Object) {
    this._fields = fields;
  }

  parse(xml: string) {
    const view = txml.parse(xml).filter(el => el.tagName === "minimal")[0];
    this._string = view.attributes.string || null;
  }
}
```

**Component (react-ooui):**
```typescript
export const MinimalComponent = (props: MinimalProps) => {
  const [viewDef, setViewDef] = useState<MinimalView | null>(null);

  useEffect(() => {
    const view = new MinimalView(props.viewData.fields);
    view.parse(props.viewData.arch);
    setViewDef(view);
  }, [props.viewData]);

  if (!viewDef) return <Spin />;

  return <div>{viewDef.string}</div>;
};
```

This minimal example shows the core structure you need.

---

## Resources

- **OOUI Repository:** `/Users/marc/development/ooui`
- **React-OOUI Repository:** `/Users/marc/development/react-ooui`
- **MITM Server:** `/Users/marc/development/erp-mitm-mock-server`
- **Reference Implementation:** Kanban view (see all files created)
- **Vitest Documentation:** https://vitest.dev
- **React Documentation:** https://react.dev

---

## Support

If you encounter issues:
1. Check existing view implementations (Tree, Form, Graph, Kanban)
2. Run TypeScript build to catch type errors
3. Check browser console for runtime errors
4. Review this guide step by step

Good luck building your new view! 🚀
