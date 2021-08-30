import { Char as CharOoui } from "ooui";
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