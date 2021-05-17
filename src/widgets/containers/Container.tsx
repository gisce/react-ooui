import React from "react";
import {
  Container as ContainerOoui,
  Widget,
  Notebook as NotebookOoui,
} from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";

import {
  getTemplateColumns,
  fillRowWithEmptiesToFit,
  getSpanStyleForItem,
  expandWidgetsIfNeeded,
} from "@/helpers/containerHelper";

type Props = {
  container: ContainerOoui;
  formWrapper?: boolean;
  responsiveBehaviour: boolean;
};

const Container = (props: Props): React.ReactElement => {
  const { container, formWrapper = false, responsiveBehaviour } = props;
  const { rows } = container;
  let { columns } = container;

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

  // TODO: Review this behaviour if it's needed
  if (formWrapper) {
    columns = 4;
    // return content as any;
  }

  const templateColumns = getTemplateColumns(columns);
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
  };

  return <div style={gridStyle}>{content}</div>;
};

export default Container;
