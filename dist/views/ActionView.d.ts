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
    action_id: number;
    action_type: string;
};
export declare type View = {
    id: number;
    type: ViewType;
};
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=ActionView.d.ts.map