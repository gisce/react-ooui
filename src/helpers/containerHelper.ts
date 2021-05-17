import { Widget, Label, Field } from "ooui";

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

  const isLastItemAndMustFit = (columnIndex: number) => {
    return (
      columnIndex + 1 === row.length &&
      totalColSpan < numberOfColumns &&
      !mustFillWithEmpties
    );
  };

  row.map((item: Widget, columnIndex: number) => {
    totalColSpan += item.colspan;

    if (isLastItemAndMustFit(columnIndex)) {
      const gapsToAdjust = numberOfColumns - totalColSpan;
      item.colspan = item.colspan + gapsToAdjust;
      totalColSpan += gapsToAdjust;
    }

    rowWithEmptiesToFit.push(item);

    if (isLastItemAndMustFit(columnIndex)) {
      const gapsToFill = numberOfColumns - totalColSpan;
      for (let i = 0; i < gapsToFill; i += 1) {
        rowWithEmptiesToFit.push(new Label({ string: "" }));
      }
    }
  });

  return rowWithEmptiesToFit;
};

const expandWidgetsIfNeeded = ({
  row,
  numberOfColumns,
}: {
  row: any;
  numberOfColumns: number;
}) => {
  return row.map((item: Widget) => {
    if ((item as any)._mustExpand) {
      (item as any).colspan = numberOfColumns;
      return item;
    }
    return item;
  });
};

const getTemplateColumns = (columns: number, fieldInRows: boolean) => {
  // We check if we have any label+field inside (fieldInRows) the container.
  // In this scenario, we must format the grid accordingly
  // Otherwise, the grid will divide uniformly (auto)
  const odd = fieldInRows ? "1fr" : "auto";
  const even = "auto";
  let templateColumns = "";
  for (let i = 0; i < columns; i++) {
    templateColumns += i % 2 ? odd : even;
    if (i + 1 < columns) {
      templateColumns += " ";
    }
  }
  return templateColumns;
};

const getMaxColspanForRows = (rows: Widget[][]) => {
  const maxColspan = rows.map((row: Widget[]) => {
    return row.reduce((prev, current) => {
      return prev + current.colspan;
    }, 0);
  });
  return maxColspan.reduce((a, b) => {
    return Math.max(a, b);
  });
};

const rowsHaveAnyField = (rows: Widget[][]) => {
  let found = false;

  rows.map((row: Widget[]) => {
    row.map((item: Widget) => {
      if (item instanceof Field) {
        found = true;
      }
    });
  });

  return found;
};

export {
  getTemplateColumns,
  fillRowWithEmptiesToFit,
  getSpanStyleForItem,
  expandWidgetsIfNeeded,
  getMaxColspanForRows,
  rowsHaveAnyField,
};
