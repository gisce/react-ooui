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

const fillRowWithEmptiesToFit = ({
  row,
  mustFillWithEmpties,
  numberOfColumns,
}: {
  row: any;
  mustFillWithEmpties: boolean;
  numberOfColumns: number;
}) => {
  const rowWithEmptiesToFit: any = [];
  let totalColSpan = 0;

  row.map((item: Widget, columnIndex: number) => {
    totalColSpan += item.colspan;
    rowWithEmptiesToFit.push(item);

    if (
      columnIndex + 1 === row.length &&
      totalColSpan < numberOfColumns &&
      !mustFillWithEmpties
    ) {
      const gapsToFill = numberOfColumns - totalColSpan;
      for (let i = 0; i < gapsToFill; i += 1) {
        rowWithEmptiesToFit.push(new Label({ string: "" }));
      }
    }
  });

  return rowWithEmptiesToFit;
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

export { getTemplateColumns, fillRowWithEmptiesToFit, getSpanStyleForItem };
