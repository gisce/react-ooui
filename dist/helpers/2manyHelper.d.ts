import { One2manyItem } from "@/widgets/base/One2manyInput";
declare const addOrUpdateItem: ({ itemToUpdate, items, }: {
    itemToUpdate: One2manyItem;
    items: Array<One2manyItem>;
}) => Array<One2manyItem>;
declare const getTemporalIdNumber: ({ ids }: {
    ids: number[];
}) => number;
declare const getItemToUpdate: ({ id, items, touchedValues, }: {
    id: number;
    touchedValues: any;
    items: One2manyItem[];
}) => One2manyItem;
export { addOrUpdateItem, getTemporalIdNumber, getItemToUpdate };
//# sourceMappingURL=2manyHelper.d.ts.map