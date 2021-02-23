import { Widget, Field, Label, Button, Text } from "ooui";

const clone = function clone<T>(instance: T): T {
  const copy = new ((instance as any).constructor as { new (): T })();
  Object.assign(copy, instance);
  return copy;
};

const getSpanStyleForItem = ({
  item,
  responsiveBehaviour,
}: {
  item: Widget;
  responsiveBehaviour: boolean;
}) => {
  return {
    gridColumnStart: "span " + (responsiveBehaviour ? 1 : item.colspan),
  };
};

const expandLabelsInFields = ({
  row,
  mustFillWithEmpties,
  numberOfColumns,
}: {
  row: any;
  mustFillWithEmpties: boolean;
  numberOfColumns: number;
}) => {
  const rowWithExpandedLabels: any = [];
  let totalColSpan = 0;

  row.map((item: Widget, columnIndex: number) => {
    if (
      item instanceof Field &&
      !(item instanceof Button) &&
      !(item instanceof Label)
    ) {
      if (item instanceof Text && item.nolabel) {
        rowWithExpandedLabels.push(item);
        return;
      }

      totalColSpan += 1;
      totalColSpan += item.colspan - 1;

      const label = new Label({ string: item.label });
      label.align = mustFillWithEmpties ? "left" : "right";
      rowWithExpandedLabels.push(label);

      const newItem = clone(item);
      newItem._colspan = item._colspan - 1;
      newItem._nolabel = true;
      rowWithExpandedLabels.push(newItem);

      if (
        columnIndex + 1 === row.length &&
        totalColSpan < numberOfColumns &&
        !mustFillWithEmpties
      ) {
        const gapsToFill = numberOfColumns - totalColSpan;
        for (let i = 0; i < gapsToFill; i += 1) {
          rowWithExpandedLabels.push(new Label({ string: "" }));
        }
      }
    } else {
      totalColSpan += item.colspan;
      rowWithExpandedLabels.push(item);
    }
  });

  return rowWithExpandedLabels;
};

const getTemplateColumns = (columns: number) => {
  const odd = "1fr";
  const even = "auto";
  let templateColumns = "";
  for (let i = 0; i < columns; i++) {
    templateColumns += i % 2 ? odd : even;
    if (i < columns) {
      templateColumns += " ";
    }
  }
  return templateColumns;
};

export { getTemplateColumns, expandLabelsInFields, getSpanStyleForItem };
