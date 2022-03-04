import React from "react";
import { DashboardGridProps } from "./DashboardGrid.types";
import { WidthProvider, Responsive } from "react-grid-layout";
import "react-resizable/css/styles.css";
import "react-grid-layout/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const DashboardGrid = (props: DashboardGridProps) => {
  const { children = [] } = props;

  const items = React.Children.map(
    children,
    (
      child:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
    ) => {
      const { parms, id } = (child as any).props;
      return (
        <div key={id} data-grid={parms}>
          {child}
        </div>
      );
    }
  );

  return (
    <ResponsiveReactGridLayout
      className="layout"
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={30}
      onLayoutChange={(layout, layouts) => {
        // console.log();
      }}
    >
      {items}
    </ResponsiveReactGridLayout>
  );
};
