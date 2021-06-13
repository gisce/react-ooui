import React from "react";
import { Reference as ReferenceOoui } from "ooui";
declare type Props = {
    ooui: ReferenceOoui;
    onOpenDetailClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onSearchClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
};
export declare const Reference: (props: Props) => JSX.Element;
interface ReferenceInputProps {
    ooui: ReferenceOoui;
    value?: string;
    onChange?: (value: string | undefined) => void;
}
export declare const ReferenceInput: React.FC<ReferenceInputProps>;
export {};
//# sourceMappingURL=Reference.d.ts.map