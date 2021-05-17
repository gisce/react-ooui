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
declare const getTemplateColumns: (columns: number) => string;
declare const getMaxColspanForRows: (rows: Widget[][]) => number;
export { getTemplateColumns, fillRowWithEmptiesToFit, getSpanStyleForItem, expandWidgetsIfNeeded, getMaxColspanForRows, };
//# sourceMappingURL=containerHelper.d.ts.map