import React from "react";
import { ViewType } from "@/types/index";
declare type Props = {
    domain: any;
    context: any;
    model: string;
    views: Array<any>;
    title: string;
    tabKey: string;
    setCanWeClose: (f: any) => void;
    initialView: View;
    formDefaultValues?: any;
    formForcedValues?: any;
    res_id?: number | boolean;
};
export declare type View = {
    id: number;
    type: ViewType;
};
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=ActionView.d.ts.map