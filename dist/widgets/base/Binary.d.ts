import { Binary as BinaryOoui } from "ooui";
declare type Props = {
    ooui: BinaryOoui;
};
export declare const Binary: (props: Props) => JSX.Element;
interface BinaryInputProps {
    ooui: BinaryOoui;
    value?: string;
    onChange?: (value: string | undefined) => void;
}
export declare const BinaryInput: (props: BinaryInputProps) => JSX.Element;
export {};
//# sourceMappingURL=Binary.d.ts.map