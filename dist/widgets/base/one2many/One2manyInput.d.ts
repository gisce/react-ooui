import React from "react";
import { One2many as One2manyOoui } from "ooui";
import { Views } from "@/types";
declare type One2manyItem = {
    operation?: "original" | "pendingRemove" | "pendingUpdate" | "pendingCreate" | "pendingLink";
    id?: number;
    values?: any;
    treeValues?: any;
    defaultValues?: any;
};
interface One2manyInputProps {
    ooui: One2manyOoui;
    value?: Array<One2manyItem>;
    onChange?: (value: any[]) => void;
    views: Views;
}
declare const One2manyInput: React.FC<One2manyInputProps>;
export { One2manyInput, One2manyItem };
//# sourceMappingURL=One2manyInput.d.ts.map