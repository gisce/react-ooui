/**
 * This function calculate the width of a string based on its length
 * @param {String} text
 * @param {String} font
 */
const getTextWidth = (text: string, font = "14px -apple-system") => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context!.font = font;
  const metrics = context!.measureText(text);
  return Math.round((metrics.width + 80) * 1.5);
};

/**
 * This function calculates the width of each column based in all CELL VALUES
 * @param {Array} columns
 * @param {Array} source
 * @param {Number} maxWidthPerCell
 */
export const calculateColumnsWidth = (
  columns: any,
  source: any,
  maxWidthPerCell = 500,
) => {
  if (columns.length === 0) {
    return { columns };
  }

  // First we calculate the width for each column
  // The column width is based on its string length

  const columnsWithWidth = columns.map((column: any) =>
    Object.assign(column, {
      width: getTextWidth(column.title),
    }),
  );

  // Since we have a minimum width (column's width already calculated),
  // now we are going to verify if the cell value is bigger
  // than the column width which is already set

  source.map((entry: any) => {
    columnsWithWidth.map((column: any, indexColumn: number) => {
      const columnWidth = column.width;
      const cellValue = (entry[column.key] as string) || "";

      // Get the string width based on chars length
      let cellWidth = getTextWidth(cellValue);

      // Verify if the cell value is smaller than column's width
      if (cellWidth < columnWidth) cellWidth = columnWidth;

      // Verify if the cell value width is bigger than our max width flag
      if (cellWidth > maxWidthPerCell) cellWidth = maxWidthPerCell;

      // Update the column width
      columnsWithWidth[indexColumn].width = cellWidth;
    });
  });

  // Sum of all columns width to determine the table max width
  const tableWidth = columnsWithWidth
    .map((column: any) => column.width)
    .reduce((a: any, b: any) => {
      return a + b;
    });

  return {
    columns: columnsWithWidth,
    source,
    tableWidth,
  };
};
