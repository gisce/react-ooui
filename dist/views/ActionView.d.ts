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
    initialViewType?: ViewType;
    formDefaultValues?: any;
    formForcedValues?: any;
};
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=ActionView.d.ts.map