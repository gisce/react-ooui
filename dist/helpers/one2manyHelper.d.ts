import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";
declare type ReadObjectValuesOptions = {
    items: One2manyItem[];
    model: string;
    fields: any;
    arch: string;
};
declare const readObjectValues: (options: ReadObjectValuesOptions) => Promise<One2manyItem[]>;
declare type RemoveItemOptions = {
    model: string;
    parentId: number;
    fieldName: string;
    idsToRemove: number[];
    fields: any;
};
declare const removeItems: (options: RemoveItemOptions) => Promise<void>;
declare type LinkItemOptions = {
    model: string;
    parentId: number;
    fieldName: string;
    id: number;
    fields: any;
};
declare const linkItem: (options: LinkItemOptions) => Promise<void>;
export { readObjectValues, removeItems, linkItem };
//# sourceMappingURL=one2manyHelper.d.ts.map