import { GenerateReportOptions } from "@/types";
import React from "react";
export declare type ContentRootContextType = {
    generateReport: (options: GenerateReportOptions) => Promise<void>;
};
export declare const ContentRootContext: React.Context<ContentRootContextType | null>;
declare type ContentRootProviderProps = {
    children: React.ReactNode;
};
declare const ContentRootProvider: (props: ContentRootProviderProps) => any;
export default ContentRootProvider;
//# sourceMappingURL=ContentRootContext.d.ts.map