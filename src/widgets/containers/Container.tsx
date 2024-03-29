import React from "react";
import { Container as ContainerOoui, Widget, Label } from "@gisce/ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";

import {
  getTemplateColumns,
  fillRowWithEmptiesToFit,
  getSpanStyleForItem,
  expandWidgetsIfNeeded,
  getMaxColspanForRows,
  getSingleRowTemplateColumns,
} from "@/helpers/containerHelper";

type Props = {
  container: ContainerOoui;
  responsiveBehaviour: boolean;
};

const Container = (props: Props): React.ReactElement => {
  const { container, responsiveBehaviour } = props;
  const { rows } = container;
  let { columns } = container;

  // We check for the largest colspan for each row
  // And if the value is smaller than the columns value
  // We adjust the columns value
  const maxColspanForRows = getMaxColspanForRows(rows);
  if (maxColspanForRows < columns) {
    columns = maxColspanForRows;
  }

  let fieldInRows = false;
  let firstRow: Widget[] = [];

  const content = rows.map((row: Widget[], i) => {
    const rowWithoutInvisibleFields = row.filter((widget) => {
      return !widget.invisible;
    });

    const rowWithExpandedItems = expandWidgetsIfNeeded({
      row: rowWithoutInvisibleFields,
      numberOfColumns: columns,
    });

    let rowWithEmptiesToFit = rowWithExpandedItems;
    if (
      i === 0 ||
      !(row.length === 1 && row.some((widget) => widget.type === "group"))
    ) {
      rowWithEmptiesToFit = fillRowWithEmptiesToFit({
        row: rowWithExpandedItems,
        numberOfColumns: columns,
        mustFillWithEmpties: responsiveBehaviour,
      });

      firstRow = firstRow.concat(rowWithEmptiesToFit);
    }

    return rowWithEmptiesToFit.map((item: Widget) => {
      // We check if we have any label+field inside the container.
      // In this scenario, we must format the grid accordingly
      // Otherwise, the grid will divide uniformly
      if (item instanceof Label && (item as Label).fieldForLabel) {
        fieldInRows = true;
      }

      return (
        <div
          key={item.key}
          style={{
            ...getSpanStyleForItem({ item, responsiveBehaviour }),
            minWidth: 0,
          }}
        >
          {createReactWidget({
            ooui: item,
            responsiveBehaviour,
          })}
        </div>
      );
    });
  });

  const templateColumns =
    rows.length === 1
      ? getSingleRowTemplateColumns(firstRow, columns)
      : getTemplateColumns(columns, fieldInRows);
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
    gap: "1rem",
    minHeight: 0,
    minWidth: 0,
  };

  return <div style={gridStyle}>{content}</div>;
};

export default Container;
