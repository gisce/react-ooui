import { Image as ImageOoui } from "@gisce/ooui";
declare type Props = {
    ooui: ImageOoui;
};
export declare const Image: (props: Props) => JSX.Element;
interface ImageInputProps {
    ooui: ImageOoui;
    value?: string;
    onChange?: (value: string | undefined) => void;
}
export declare const ImageInput: (props: ImageInputProps) => JSX.Element;
export {};
//# sourceMappingURL=Image.d.ts.map