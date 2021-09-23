import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";

const filteredValues = (values: any, fields: any) => {
  if (!fields) {
    return values;
  }
  const filteredValues: any = {};
  Object.keys(values).forEach((key) => {
    if (
      values[key] !== false ||
      (fields[key] && fields[key].type === "boolean")
    ) {
      filteredValues[key] = values[key];
    }
  });
  return filteredValues;
};

export const processValues = (values: any, fields: any) => {
  const filterBooleans = filteredValues(values, fields);
  return filterBooleans;
};

export const getTouchedValues = ({
  source,
  target,
  fields,
}: {
  source: any;
  target: any;
  fields: any;
}) => {
  const differences: any = {};
  Object.keys(target).forEach((key) => {
    if (!target[key]) {
      return;
    }
    if (Array.isArray(target[key])) {
      const is2Many = fields[key]
        ? fields[key].type === "one2many" || fields[key].type === "many2many"
        : false;

      if (is2Many) {
        const nonOriginalItems = target[key].filter(
          (item: One2manyItem) => item.operation !== "original"
        );
        if (nonOriginalItems.length > 0) {
          differences[key] = target[key];
        }
      } else if (!source[key]) {
        differences[key] = target[key];
      } else {
        const sourceValue = JSON.stringify(source[key]);
        const targetValue = JSON.stringify(target[key]);
        if (sourceValue !== targetValue) {
          differences[key] = target[key];
        }
      }
    } else if (source[key] !== target[key]) {
      differences[key] = target[key];
    }
  });
  return differences;
};

export const checkFieldsType = ({
  changedFields,
  fields,
  types,
}: {
  changedFields: string[];
  fields: any;
  types: string[];
}) => {
  const valuesChecked = changedFields.map((key) => {
    return types.includes(fields[key]?.type);
  });
  return valuesChecked.some((i) => i === true);
};

export const mergeFieldsDomain = ({
  fieldsDomain,
  fields,
}: {
  fieldsDomain: any;
  fields: any;
}) => {
  const output: any = {};

  Object.keys(fields).forEach((key) => {
    output[key] = fields[key];

    if (fieldsDomain[key]) {
      output[key].domain = fieldsDomain[key];
    }
  });

  return output;
};

export const getValuesForDomain = (domain: any[]) => {
  const values: any = {};

  domain.forEach((entry) => {
    if (entry[1] === "=") {
      values[entry[0]] = entry[2];
    }
  });

  return values;
};

export const getOnChangePayload = ({
  onChangeFieldActionArgs,
  values,
}: {
  onChangeFieldActionArgs: any[];
  values: any;
}) => {
  const payload: any = {};
  onChangeFieldActionArgs.forEach((arg: string) => {
    if (values[arg]) {
      payload[arg] = values[arg];
    } else {
      payload[arg] = false;
    }
  });
  return payload;
};
