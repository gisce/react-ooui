import React from "react";
import { Container as ContainerOoui, Widget } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";
import { useMediaQuery } from "react-responsive";
import {
  getTemplateColumns,
  expandLabelsInFields,
  getSpanStyleForItem,
} from "@/helpers/containerHelper";

type Props = {
  container: ContainerOoui;
  formWrapper?: boolean;
};

const Container = (props: Props): React.ReactElement => {
  const responsiveBehaviour = useMediaQuery({ query: "(max-width: 1000px)" });
  const { container, formWrapper = false } = props;
  const { columns, rows } = container;

  const content = rows.map((row: Widget[], i) => {
    const rowWithoutInvisibleFields = row.filter((widget) => {
      return !widget.invisible;
    });

    const rowWithExpandedFields = expandLabelsInFields({
      row: rowWithoutInvisibleFields,
      numberOfColumns: columns,
      mustFillWithEmpties: responsiveBehaviour,
    });

    return rowWithExpandedFields.map((item: Widget, j: number) => {
      return (
        <div
          key={`${i.toString()}-${j.toString()}`}
          className="self-center p-2"
          style={getSpanStyleForItem({ item, responsiveBehaviour })}
        >
          {createReactWidget({
            ooui: item,
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

  return <div style={gridStyle}>{content}</div>;
};

export default Container;
