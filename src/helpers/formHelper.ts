import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";

const filteredValues = (values: any, fields: any) => {
  if (!fields) {
    return values;
  }
  const filteredValues: any = {};
  Object.keys(values).forEach((key) => {
    if (fields[key] === undefined) {
      // console.log(`${key} is not in fields`);
      filteredValues[key] = values[key];
    } else if (values[key] === false && fields[key].type !== "boolean") {
      // Do nothing - filter the field.
    } else if (fields[key].type === "boolean") {
      const boolValue = values[key];
      if (boolValue === 0) {
        filteredValues[key] = false;
      } else if (boolValue === 1) {
        filteredValues[key] = true;
      } else {
        filteredValues[key] = values[key];
      }
    } else {
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
    if (Array.isArray(target[key])) {
      const is2Many = fields[key]
        ? fields[key].type === "one2many" || fields[key].type === "many2many"
        : false;

      if (source[key] === undefined) {
        differences[key] = target[key];
      } else if (fields[key].type === "many2one") {
        if (!Array.isArray(source[key])) {
          // This will mean the source many2one value is a numeric id
          const numericId = source[key];
          const [targetNumericId] = target[key];
          if (numericId !== targetNumericId) {
            differences[key] = target[key];
          }
        } else {
          const sourceValue = JSON.stringify(source[key]);
          const targetValue = JSON.stringify(target[key]);
          if (sourceValue !== targetValue) {
            differences[key] = target[key];
          }
        }
      } else if (is2Many) {
        const nonOriginalItems = target[key].filter(
          (item: One2manyItem) => item.operation !== "original"
        );
        if (nonOriginalItems.length > 0) {
          differences[key] = target[key];
        }
      } else {
        const sourceValue = JSON.stringify(source[key]);
        const targetValue = JSON.stringify(target[key]);
        if (sourceValue !== targetValue) {
          differences[key] = target[key];
        }
      }
    } else if (source[key] !== target[key]) {
      if (target[key] === undefined) {
        differences[key] = null;
      } else {
        differences[key] = target[key];
      }
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

  if (!domain || !Array.isArray(domain) || domain?.length === 0) {
    return {};
  }

  domain.forEach((entry) => {
    if (entry?.[1] === "=") {
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
