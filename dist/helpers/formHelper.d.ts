export declare const processValues: (values: any, fields: any) => any;
export declare const getTouchedValues: ({ source, target, fields, }: {
    source: any;
    target: any;
    fields: any;
}) => any;
export declare const checkFieldsType: ({ changedFields, fields, types, }: {
    changedFields: string[];
    fields: any;
    types: string[];
}) => boolean;
export declare const mergeFieldsDomain: ({ fieldsDomain, fields, }: {
    fieldsDomain: any;
    fields: any;
}) => any;
export declare const getValuesForDomain: (domain: any[]) => any;
export declare const getOnChangePayload: ({ onChangeFieldActionArgs, values, }: {
    onChangeFieldActionArgs: any[];
    values: any;
}) => any;
export declare const mergeSearchFields: (searchFields: any[]) => {
    primary: never[];
    secondary: never[];
};
export declare const transformPlainMany2Ones: ({ values, fields, }: {
    values: any;
    fields: any;
}) => {
    [key: string]: any;
};
//# sourceMappingURL=formHelper.d.ts.map