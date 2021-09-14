import React from "react";
export declare type ContentRootContextType = {
    processAction: ({ actionData, fields, values, context, }: {
        actionData: any;
        fields: any;
        values: any;
        context?: any;
        onRefreshParentValues?: () => void;
    }) => Promise<any>;
};
export declare const ContentRootContext: React.Context<ContentRootContextType | null>;
declare type ContentRootProviderProps = {
    children: React.ReactNode;
};
declare const ContentRootProvider: (props: ContentRootProviderProps) => any;
export default ContentRootProvider;
//# sourceMappingURL=ContentRootContext.d.ts.map