/// <reference types="react" />
import { Char as CharOoui } from "@gisce/ooui";
interface LinkInputProps {
    ooui: CharOoui;
    value?: string;
    onChange?: (value: string) => void;
    valueValidator: (value?: string) => boolean;
    linkPrefix?: string;
}
export declare const LinkInput: (props: LinkInputProps) => JSX.Element;
export {};
//# sourceMappingURL=LinkInput.d.ts.map