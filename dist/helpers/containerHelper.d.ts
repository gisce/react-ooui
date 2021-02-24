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
declare const getTemplateColumns: (columns: number) => string;
export { getTemplateColumns, fillRowWithEmptiesToFit, getSpanStyleForItem };
//# sourceMappingURL=containerHelper.d.ts.map