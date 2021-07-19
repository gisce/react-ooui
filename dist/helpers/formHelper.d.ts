import { FormInstance } from "antd";
export declare const processValues: (values: any, fields: any) => any;
export declare const getTouchedValues: (antForm: FormInstance, fields: any) => any;
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
//# sourceMappingURL=formHelper.d.ts.map