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
    const is2Many = fields[key]
      ? fields[key].type === "one2many" || fields[key].type === "many2many"
      : false;

    if (is2Many) {
      const sourceValue = JSON.stringify(source[key]);
      const targetValue = JSON.stringify(target[key]);
      if (sourceValue === targetValue) {
        return;
      }

      const nonOriginalItems =
        target[key]?.items?.filter(
          (item: One2manyItem) => item.operation !== "original"
        ) || [];

      if (nonOriginalItems.length > 0) {
        differences[key] = target[key];
      }
    } else if (Array.isArray(target[key])) {
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
    } else if (arg[0] === "'") {
      payload[arg] = arg.replace(/'/g, "");
    } else {
      payload[arg] = false;
    }
  });
  return payload;
};

export const mergeSearchFields = (searchFields: any[]) => {
  const mergedSearchFields = {
    primary: [],
    secondary: [],
  };

  searchFields.forEach((sf) => {
    if (!sf) {
      return;
    }

    mergedSearchFields.primary = mergedSearchFields.primary.concat(sf.primary);
    mergedSearchFields.secondary = mergedSearchFields.secondary.concat(
      sf.secondary
    );
  });

  return {
    primary: mergedSearchFields.primary.filter(onlyUnique),
    secondary: mergedSearchFields.secondary.filter(onlyUnique),
  };
};

function onlyUnique(value: any, index: number, self: any) {
  return self.indexOf(value) === index;
}

export const transformPlainMany2Ones = ({
  values,
  fields,
}: {
  values: any;
  fields: any;
}) => {
  let reformattedValues: { [key: string]: any } = {};

  Object.keys(values).forEach((key) => {
    const value = values[key];

    if (
      fields[key] &&
      fields[key].type === "many2one" &&
      value &&
      Array.isArray(value) &&
      value.length === 2
    ) {
      reformattedValues[key] = value[0];
    } else {
      reformattedValues[key] = value;
    }
  });

  return reformattedValues;
};


export const colorFromString = (text: string) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  let hexColour = '#';
  for (let i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    hexColour += ('00' + value.toString(16)).slice(-2);
  }
  return hexColour;
}
