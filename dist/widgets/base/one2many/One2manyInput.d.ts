import React from "react";
import { One2many as One2manyOoui } from "@gisce/ooui";
import { Views } from "@/types";
declare type One2manyValue = {
    fields?: any;
    items: Array<One2manyItem>;
};
declare type One2manyItem = {
    operation?: "original" | "pendingRemove" | "pendingUpdate" | "pendingCreate" | "pendingLink";
    id?: number;
    values?: any;
    treeValues?: any;
    defaultValues?: any;
};
interface One2manyInputProps {
    ooui: One2manyOoui;
    value?: One2manyValue;
    onChange?: (value: One2manyValue) => void;
    views: Views;
}
declare const One2manyInput: React.FC<One2manyInputProps>;
export { One2manyInput, One2manyItem, One2manyValue };
//# sourceMappingURL=One2manyInput.d.ts.map