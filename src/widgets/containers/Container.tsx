import React from "react";
import { Container as ContainerOoui, Widget } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";
import useDimensions from "react-cool-dimensions";

import {
  getTemplateColumns,
  fillRowWithEmptiesToFit,
  getSpanStyleForItem,
} from "@/helpers/containerHelper";

type Props = {
  container: ContainerOoui;
  formWrapper?: boolean;
};

const Container = (props: Props): React.ReactElement => {
  const { width, observe } = useDimensions();
  const responsiveBehaviour = width < 1000;

  const { container, formWrapper = false } = props;
  const { columns, rows } = container;

  const content = rows.map((row: Widget[], i) => {
    const rowWithoutInvisibleFields = row.filter((widget) => {
      return !widget.invisible;
    });

    const rowWithEmptiesToFit = fillRowWithEmptiesToFit({
      row: rowWithoutInvisibleFields,
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

  if (formWrapper) {
    return content as any;
  }

  const templateColumns = getTemplateColumns(columns);
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: responsiveBehaviour ? "auto" : templateColumns,
  };

  return (
    <div ref={observe as any} style={gridStyle}>
      {content}
    </div>
  );
};

export default Container;
