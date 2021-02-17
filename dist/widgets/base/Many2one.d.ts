import React from "react";
import { Many2one as Many2oneOoui } from "ooui";
declare type Props = {
    ooui: Many2oneOoui;
    onOpenDetailClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onSearchClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
};
export declare const Many2one: (props: Props) => JSX.Element;
export {};
//# sourceMappingURL=Many2one.d.ts.map