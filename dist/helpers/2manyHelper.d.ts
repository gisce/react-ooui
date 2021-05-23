import { Item } from "@/widgets/base/One2many";
declare const addOrUpdateItem: ({ itemToUpdate, items, }: {
    itemToUpdate: Item;
    items: Array<Item>;
}) => Array<Item>;
declare const getTemporalIdNumber: ({ ids }: {
    ids: number[];
}) => number;
declare const getItemToUpdate: ({ id, items, touchedValues, }: {
    id: number;
    touchedValues: any;
    items: Item[];
}) => Item;
export { addOrUpdateItem, getTemporalIdNumber, getItemToUpdate };
//# sourceMappingURL=2manyHelper.d.ts.map