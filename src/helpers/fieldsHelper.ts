export const mergeFieldsContext = (fields: any, contextFields: any) => {
  const output: any = {};

  Object.keys(fields).forEach((key) => {
    output[key] = fields[key];
    if (contextFields?.[key]) {
      output[key].context = contextFields[key];
    }
  });

  return output;
};
