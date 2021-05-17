import React from "react";
import { Container as ContainerOoui, Widget } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";

import {
  getTemplateColumns,
  fillRowWithEmptiesToFit,
  getSpanStyleForItem,
  expandWidgetsIfNeeded,
  getMaxColspanForRows,
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

  const content = rows.map((row: Widget[], i) => {
    const rowWithoutInvisibleFields = row.filter((widget) => {
      return !widget.invisible;
    });

    const rowWithExpandedItems = expandWidgetsIfNeeded({
      row: rowWithoutInvisibleFields,
      numberOfColumns: columns,
    });

    const rowWithEmptiesToFit = fillRowWithEmptiesToFit({
      row: rowWithExpandedItems,
      numberOfColumns: columns,
      mustFillWithEmpties: responsiveBehaviour,
    });

    return rowWithEmptiesToFit.map((item: Widget, j: number) => {
      return (
        <div
          key={`${i.toString()}-${j.toString()}`}
          className="self-center p-2"
          style={getSpanStyleForItem({ item, responsiveBehaviour })}
        >
          {createReactWidget({
            ooui: item,
            responsiveBehaviour,
          })}
        </div>
      );
    });
  });

  const templateColumns = getTemplateColumns(columns);
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
  };

  return <div style={gridStyle}>{content}</div>;
};

export default Container;
