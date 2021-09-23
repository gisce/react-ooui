export declare function getFilesize(base64string: string): string;
export declare function getMimeType(base64string: string): Promise<{
    mime: string;
    ext: string;
}>;
export declare const toBase64: (file: File) => Promise<string>;
export declare function openBase64InNewTab(data: string, mimeType: string): void;
//# sourceMappingURL=filesHelper.d.ts.map