import React from "react";
// Import the TreeActionView stories (now pure React components)
import { Infinite, Paginated, InfiniteSpanish, PaginatedSpanish } from "./stories/TreeActionView.stories";
// Import the One2Many stories
import {
  Infinite as One2ManyInfinite,
  Paginated as One2ManyPaginated,
  InfiniteSpanish as One2ManyInfiniteSpanish,
  PaginatedSpanish as One2ManyPaginatedSpanish,
} from "./stories/One2Many.stories";
// Import the Many2Many stories
import { Infinite as Many2ManyInfinite, Paginated as Many2ManyPaginated } from "./stories/Many2Many.stories";
// Import QRCode demo
import { QRCodeDemo } from "./stories/QRCode.stories";

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
];
