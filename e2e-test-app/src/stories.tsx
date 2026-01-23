import React from "react";
// Import the TreeActionView stories (now pure React components)
import {
  Infinite,
  Paginated,
  InfiniteSpanish,
  PaginatedSpanish,
  InfiniteFrench,
  InfiniteNoLocale,
} from "./stories/TreeActionView.stories";
// Import the One2Many stories
import {
  Infinite as One2ManyInfinite,
  Paginated as One2ManyPaginated,
  InfiniteSpanish as One2ManyInfiniteSpanish,
  PaginatedSpanish as One2ManyPaginatedSpanish,
  InfiniteFrench as One2ManyInfiniteFrench,
  InfiniteNoLocale as One2ManyInfiniteNoLocale,
} from "./stories/One2Many.stories";
// Import the Many2Many stories
import {
  Infinite as Many2ManyInfinite,
  Paginated as Many2ManyPaginated,
} from "./stories/Many2Many.stories";
// Import QRCode demo
import { QRCodeDemo } from "./stories/QRCode.stories";
// Import Form stories
import {
  Default as FormDefault,
  Spanish as FormSpanish,
  French as FormFrench,
  SpanishLocalized as FormSpanishLocalized,
  FrenchLocalized as FormFrenchLocalized,
  EnglishLocalized as FormEnglishLocalized,
} from "./stories/Form.stories";
// Import False Values test story (non-localized path)
import { FalseValuesInfinite } from "./stories/TreeActionViewFalseValues.stories";
// Import Localized Decimals test story (localized path)
import { TreeActionViewLocalizedDecimals } from "./stories/TreeActionViewLocalizedDecimals.stories";
// Import Expense Infinite story (Bug #2903 reproduction)
import { ExpenseInfinite } from "./stories/ExpenseInfinite.stories";

export interface Story {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  args?: any;
  description?: string;
}

export const stories: Story[] = [
  {
    id: "qrcode-demo",
    title: "QR Code Widget Demo",
    component: QRCodeDemo,
    description:
      "Interactive demo of the QR Code widget showing how to generate QR codes from text/URLs. Features include customizable size, colors, border settings, and examples for different use cases like websites, contact information, WiFi credentials, and plain text.",
  },
  {
    id: "tree-action-view-infinite",
    title: "TreeActionView - Infinite",
    component: Infinite,
    description:
      "The infinite tree view with advanced features including: autorefreshable fields (Last Login refreshes every 30s), function fields (Annual Bonus calculated from salary × performance), dynamic row coloring based on function field values combined with static properties (golden for VIP employees with high bonuses >$8K, green for high-rated employees with rating ≥4, blue for good bonus earners >$6K, orange for low performers with rating ≤2, red for critical priority, purple for VIP status, gray for inactive/terminated), status indicators with colored dots, and aggregate summaries showing total/average salary and bonus calculations.",
  },
  {
    id: "tree-action-view-paginated",
    title: "TreeActionView - Paginated",
    component: Paginated,
    description:
      "The paginated tree view with enhanced features demonstrating: autorefreshable Last Login field, calculated Annual Bonus function field, sophisticated row coloring that combines function field values with static properties (golden color for VIP employees with high bonuses >$8K, green for high-rated employees with computed rating ≥4, blue for employees with good bonuses >$6K, orange for low performers with rating ≤2, plus existing priority and status-based colors), status indicators with colored dots, and aggregate summaries. Navigate through 13+ pages to see different employees with varying bonuses, ratings, and the resulting dynamic color combinations.",
  },
  {
    id: "one2many-infinite",
    title: "One2Many - Infinite Scroll",
    component: One2ManyInfinite,
    description:
      "A form view with a One2Many widget displaying order lines with infinite scroll. The One2Many field shows product details, quantities, prices, and automatically calculates subtotals. The form demonstrates parent-child relationships with 200+ line items for testing infinite scroll functionality. Features include: dynamic subtotal calculations, sum fields showing totals, product selection with many2one fields, and proper handling of large datasets with smooth scrolling.",
  },
  {
    id: "one2many-paginated",
    title: "One2Many - Paginated",
    component: One2ManyPaginated,
    description:
      "A form view with a One2Many widget displaying order lines with pagination controls. The One2Many field shows product details, quantities, prices, and automatically calculates subtotals. The form demonstrates parent-child relationships with proper pagination navigation. Features include: dynamic subtotal calculations, sum fields showing totals, product selection with many2one fields, autorefreshable timestamp columns (Last Updated), function columns (Total Amount), and pagination controls for easy navigation through large datasets.",
  },
  {
    id: "many2many-infinite",
    title: "Many2Many - Infinite Scroll",
    component: Many2ManyInfinite,
    description:
      "A form view with a Many2Many widget displaying related records with infinite scroll. The Many2Many field shows product details, quantities, prices, and automatically calculates subtotals. Unlike One2Many, this demonstrates many-to-many relationships where records can be associated with multiple parents. Features include: dynamic subtotal calculations, sum fields showing totals, product selection with many2one fields, and proper handling of large datasets with smooth scrolling for many-to-many relationships.",
  },
  {
    id: "many2many-paginated",
    title: "Many2Many - Paginated",
    component: Many2ManyPaginated,
    description:
      "A form view with a Many2Many widget displaying related records with pagination controls. The Many2Many field shows product details, quantities, prices, and automatically calculates subtotals for many-to-many relationships. Features include: dynamic subtotal calculations, sum fields showing totals, product selection with many2one fields, autorefreshable timestamp columns (Last Updated), function columns (Total Amount), and pagination controls for easy navigation through large datasets in many-to-many contexts.",
  },
  {
    id: "tree-action-view-infinite-spanish",
    title: "TreeActionView - Infinite (Spanish)",
    component: InfiniteSpanish,
    description:
      "The infinite tree view with Spanish locale (es_ES) for testing number localization. Numbers should display with comma as decimal separator (e.g., 1.234,56).",
  },
  {
    id: "tree-action-view-paginated-spanish",
    title: "TreeActionView - Paginated (Spanish)",
    component: PaginatedSpanish,
    description:
      "The paginated tree view with Spanish locale (es_ES) for testing number localization. Numbers should display with comma as decimal separator (e.g., 1.234,56).",
  },
  {
    id: "one2many-infinite-spanish",
    title: "One2Many - Infinite (Spanish)",
    component: One2ManyInfiniteSpanish,
    description:
      "One2Many with infinite scroll using Spanish locale (es_ES) for testing number localization. Numbers should display with comma as decimal separator.",
  },
  {
    id: "one2many-paginated-spanish",
    title: "One2Many - Paginated (Spanish)",
    component: One2ManyPaginatedSpanish,
    description:
      "One2Many with pagination using Spanish locale (es_ES) for testing number localization. Numbers should display with comma as decimal separator.",
  },
  // French locale stories
  {
    id: "tree-action-view-infinite-french",
    title: "TreeActionView - Infinite (French)",
    component: InfiniteFrench,
    description:
      "TreeActionView with French locale (fr_FR). Numbers display with space for thousands, comma for decimal (e.g., 1 234,56).",
  },
  {
    id: "one2many-infinite-french",
    title: "One2Many - Infinite (French)",
    component: One2ManyInfiniteFrench,
    description:
      "One2Many with French locale (fr_FR). Numbers display with space for thousands, comma for decimal.",
  },
  // No locale (fallback) stories
  {
    id: "tree-action-view-infinite-no-locale",
    title: "TreeActionView - Infinite (No Locale)",
    component: InfiniteNoLocale,
    description:
      "TreeActionView without explicit locale. Should fallback to English formatting (comma for thousands, period for decimal).",
  },
  {
    id: "one2many-infinite-no-locale",
    title: "One2Many - Infinite (No Locale)",
    component: One2ManyInfiniteNoLocale,
    description:
      "One2Many without explicit locale. Should fallback to English formatting.",
  },
  // Form stories for testing form input number localization
  {
    id: "form-default",
    title: "Form - Default (English)",
    component: FormDefault,
    description:
      "Form view with integer and float fields using English locale (en_US). Numbers display with period as decimal separator (e.g., 1,234.56).",
  },
  {
    id: "form-spanish",
    title: "Form - Spanish",
    component: FormSpanish,
    description:
      "Form view with integer and float fields using Spanish locale (es_ES). Numbers should display with comma as decimal separator (e.g., 1.234,56).",
  },
  {
    id: "form-french",
    title: "Form - French",
    component: FormFrench,
    description:
      "Form view with integer and float fields using French locale (fr_FR). Default behavior shows period decimal separator.",
  },
  // Localized Form stories (opt-in localization via widget_props)
  {
    id: "form-spanish-localized",
    title: "Form - Spanish (Localized)",
    component: FormSpanishLocalized,
    description:
      "Form view with localized=true fields using Spanish locale (es_ES). Numbers display with comma as decimal separator (e.g., 1.234,56).",
  },
  {
    id: "form-french-localized",
    title: "Form - French (Localized)",
    component: FormFrenchLocalized,
    description:
      "Form view with localized=true fields using French locale (fr_FR). Numbers display with space for thousands, comma for decimal (e.g., 1 234,56).",
  },
  {
    id: "form-english-localized",
    title: "Form - English (Localized)",
    component: FormEnglishLocalized,
    description:
      "Form view with localized=true fields using English locale (en_US). Numbers display with comma for thousands, period for decimal (e.g., 1,234.56).",
  },
  // False values test (non-localized path) - verifies React renders falsy values correctly
  {
    id: "tree-false-values",
    title: "TreeActionView - False Values (Non-Localized)",
    component: FalseValuesInfinite,
    description:
      "Tests non-localized path with false/null/undefined values. Verifies rows render without errors when ERP returns 'false' for empty values.",
  },
  // Localized number formatting test - verifies decimal preservation and false/null/undefined handling
  {
    id: "tree-localized-decimals",
    title: "TreeActionView - Localized Decimals",
    component: TreeActionViewLocalizedDecimals,
    description:
      "Tests that localized numbers preserve server decimal places. Field with digits:[16,6] should show 18.87 as '18,87' not '18,870000'. Also tests false/null/undefined handling in localized mode.",
  },
  // Bug #2903 reproduction - Infinite table render glitches
  {
    id: "expense-infinite",
    title: "Expense - Infinite (Bug #2903)",
    component: ExpenseInfinite,
    description:
      "Reproduces infinite table render glitches from issue #2903. 130 expense records with a function field (amount). Test for duplicate rows, missing fields on scroll, and wrong selection behavior.",
  },
];
