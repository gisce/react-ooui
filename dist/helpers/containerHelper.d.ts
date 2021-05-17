import { Widget } from "ooui";
declare const getSpanStyleForItem: ({ item, responsiveBehaviour, }: {
    item: Widget;
    responsiveBehaviour: boolean;
}) => {
    gridColumnStart: string;
};
declare const fillRowWithEmptiesToFit: ({ row, mustFillWithEmpties, numberOfColumns, }: {
    row: any;
    mustFillWithEmpties: boolean;
    numberOfColumns: number;
}) => any;
declare const expandWidgetsIfNeeded: ({ row, numberOfColumns, }: {
    row: any;
    numberOfColumns: number;
}) => any;
declare const getTemplateColumns: (columns: number, fieldInRows: boolean) => string;
declare const getMaxColspanForRows: (rows: Widget[][]) => number;
declare const rowsHaveAnyField: (rows: Widget[][]) => boolean;
export { getTemplateColumns, fillRowWithEmptiesToFit, getSpanStyleForItem, expandWidgetsIfNeeded, getMaxColspanForRows, rowsHaveAnyField, };
//# sourceMappingURL=containerHelper.d.ts.map