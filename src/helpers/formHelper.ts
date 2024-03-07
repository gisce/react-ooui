import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";
import { Form as FormOoui } from "@gisce/ooui";

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
          (item: One2manyItem) => item.operation !== "original",
        ) || [];

      if (nonOriginalItems.length > 0) {
        differences[key] = target[key];
      }
    } else if (Array.isArray(target[key])) {
      if (fields[key].type === "many2one") {
        if (
          !isValidMany2OneValue(source[key]) &&
          !isValidMany2OneValue(target[key])
        ) {
          // eslint-disable-next-line no-useless-return
          return;
        } else if (!Array.isArray(source[key])) {
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
    } else if (source[key] === undefined && target[key] !== undefined) {
      differences[key] = target[key];
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
  formOoui,
  types,
}: {
  changedFields: string[];
  formOoui: FormOoui;
  types: string[];
}) => {
  const valuesChecked = changedFields.map((key) => {
    const fieldType = formOoui?.findById(key)?.type!;
    return types.includes(fieldType);
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
  parentValues = {},
}: {
  onChangeFieldActionArgs: any[];
  values: any;
  parentValues?: any;
}) => {
  const payload: any = {};
  onChangeFieldActionArgs.forEach((arg: string) => {
    const splittedArg = arg.split("");

    if (arg === "True") {
      payload[arg] = true;
    } else if (arg === "False") {
      payload[arg] = false;
    } else if (values[arg]) {
      payload[arg] = values[arg];
    } else if (
      splittedArg[0] === "'" &&
      splittedArg[splittedArg.length - 1] === "'" &&
      splittedArg.filter((i: string) => i === "'").length === 2
    ) {
      payload[arg] = arg.replace(/'/g, "");
    } else if (splittedArg.includes("'")) {
      // This is a string with a variable in it.
      // TODO: pending implement.
      payload[arg] = arg;
    } else if (arg.indexOf("parent.") !== -1) {
      const parentKey = arg.replace("parent.", "");
      payload[arg] = parentValues[parentKey] || false;
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
      sf.secondary,
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
  const reformattedValues: { [key: string]: any } = {};

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
  text = text.toString().padEnd(10, "0");
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  let hexColour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    hexColour += ("00" + value.toString(16)).slice(-2);
  }
  return hexColour;
};

export const colorTextFromBackground = (color: string) => {
  function getRGB(c: string): number {
    return parseInt(c, 16) || parseInt(c);
  }

  function getsRGB(c: string) {
    return getRGB(c) / 255 <= 0.03928
      ? getRGB(c) / 255 / 12.92
      : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
  }

  function getLuminance(hexColor: string) {
    return (
      0.2126 * getsRGB(hexColor.substr(1, 2)) +
      0.7152 * getsRGB(hexColor.substr(3, 2)) +
      0.0722 * getsRGB(hexColor.substr(-2))
    );
  }

  function getContrast(f: string, b: string) {
    const L1 = getLuminance(f);
    const L2 = getLuminance(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }

  function getTextColor(bgColor: string) {
    const whiteContrast = getContrast(bgColor, "#ffffff");
    const blackContrast = getContrast(bgColor, "#000000");

    return whiteContrast > blackContrast ? "#ffffff" : "#000000";
  }

  return getTextColor(color);
};

export const stringFormat = (text: string, values: any): string => {
  return text.replace(/\{([^}]+)\}/g, (match, key) =>
    values[key] !== undefined ? values[key] : match,
  );
};

const isValidMany2OneValue = (value: any) => {
  if (!Array.isArray(value)) {
    return false;
  }

  if (value.length !== 2) {
    return false;
  }

  if (value[0] === undefined && value[1] === "") {
    return false;
  }

  return true;
};
