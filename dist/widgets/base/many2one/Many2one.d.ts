import React from "react";
import { Many2one as Many2oneOoui } from "@gisce/ooui";
declare type Props = {
    ooui: Many2oneOoui;
    onOpenDetailClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onSearchClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
};
export declare const Many2one: (props: Props) => JSX.Element;
interface Many2oneInputProps {
    ooui: Many2oneOoui;
    value?: any[];
    onChange?: (value: any[]) => void;
}
export declare const Many2oneInput: React.FC<Many2oneInputProps>;
export {};
//# sourceMappingURL=Many2one.d.ts.map