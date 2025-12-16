import dayjs from "@/helpers/dayjs";

const convertBooleanParamIfNeeded = (value: any) => {
  if ((typeof value === "string" && value === "true") || value === "false") {
    return value === "true";
  }
  return value;
};

const optimizeEqualRangeParams = (params: any[]) => {
  // Group params by field name to find >= and <= pairs
  const fieldMap: Record<
    string,
    { gte?: any; lte?: any; index: { gte?: number; lte?: number } }
  > = {};

  params.forEach((param, index) => {
    if (Array.isArray(param) && param.length === 3) {
      const [field, operator, value] = param;
      if (operator === ">=" || operator === "<=") {
        if (!fieldMap[field]) {
          fieldMap[field] = { index: {} };
        }
        if (operator === ">=") {
          fieldMap[field].gte = value;
          fieldMap[field].index.gte = index;
        } else {
          fieldMap[field].lte = value;
          fieldMap[field].index.lte = index;
        }
      }
    }
  });

  // Find fields where gte === lte and replace with =
  const indicesToRemove: number[] = [];
  const replacements: Array<{ index: number; param: any[] }> = [];

  Object.entries(fieldMap).forEach(([field, { gte, lte, index }]) => {
    if (gte !== undefined && lte !== undefined && gte === lte) {
      // Replace >= with = and mark <= for removal
      replacements.push({ index: index.gte!, param: [field, "=", gte] });
      indicesToRemove.push(index.lte!);
    }
  });

  // Apply changes
  const result = params
    .map((param, i) => {
      const replacement = replacements.find((r) => r.index === i);
      return replacement ? replacement.param : param;
    })
    .filter((_, i) => !indicesToRemove.includes(i));

  return result;
};

export const getParamsForFields = (values: any, widgetContainer: any) => {
  const filteredValues = removeUndefinedFields(values);
  const groupedDateTime = groupDateTimeValuesIfNeeded(filteredValues);
  const groupedValues = ungroupDateValuesIfNeeded(
    groupedDateTime,
    widgetContainer,
  );

  const params = [
    ...Object.keys(groupedValues).map((key) => {
      return getParamForField(key, groupedValues[key], widgetContainer);
    }),
  ];

  // This is needed because in case of datetime we receive an array of arrays
  const paramsForFields = params.reduce((acc, curVal) => {
    if (Array.isArray(curVal[0])) {
      return acc.concat(curVal);
    }
    return [...acc, curVal];
  }, []);

  // Optimize equal range values to use = instead of >= and <=
  return optimizeEqualRangeParams(paramsForFields);
};

const getParamForField = (key: string, value: any, widgetContainer: any) => {
  const filteredKey = key.split("#")[0];
  const field = widgetContainer.findById(filteredKey);
  const type = field?.type;
  const originalWidget = field?.raw_props?.widget;

  if (originalWidget === "many2one_lazy") {
    const id = Array.isArray(value) ? value[0] : value;
    return [filteredKey, "=", id];
  }

  if (
    type === "char" ||
    type === "text" ||
    type === "many2one" ||
    type === "many2many" ||
    type === "one2many"
  ) {
    return [key, "ilike", value];
  } else if (
    type === "float" ||
    type === "integer" ||
    type === "float_time" ||
    type === "progressbar"
  ) {
    const operator = key.indexOf("#from") !== -1 ? ">=" : "<=";
    return [filteredKey, operator, value];
  } else if (type === "date") {
    const operator = key.indexOf("#from") !== -1 ? ">=" : "<=";
    return [filteredKey, operator, value.format("YYYY-MM-DD")];
  } else if (type === "datetime") {
    const filteredValues = [];
    if (value[0]) {
      filteredValues.push([filteredKey, ">=", value[0]]);
    }
    if (value[1]) {
      filteredValues.push([filteredKey, "<=", value[1]]);
    }
    return filteredValues;
  } else if (type === "selection") {
    return [
      key,
      "in",
      value.map((valueEntry: string) =>
        convertBooleanParamIfNeeded(valueEntry),
      ),
    ];
  } else if (type === "many2one_lazy") {
    const id = Array.isArray(value) ? value[0] : value;
    return [filteredKey, "=", id];
  } else {
    return [key, "=", convertBooleanParamIfNeeded(value)];
  }
};

const getDatetimeDateFields = (values: any) => {
  return Object.keys(values).filter((key) => {
    return key.indexOf("#date") !== -1;
  });
};

const removeDateTimeSingleFields = (values: any) => {
  const newValues = { ...values };
  Object.keys(newValues).forEach(
    (key) =>
      (key.indexOf("#time") !== -1 || key.indexOf("#date") !== -1) &&
      delete newValues[key],
  );
  return newValues;
};

export const groupDateTimeValuesIfNeeded = (values: any) => {
  const newValues: any = { ...removeDateTimeSingleFields(values) };

  const datetimeDateFields = getDatetimeDateFields(values);

  datetimeDateFields.forEach((field) => {
    const datePair = values[field];
    const baseKey = field.split("#")[0];
    const timeKey = baseKey + "#time";
    const timePair = values[timeKey];

    let from, to;

    if (datePair[0] !== null) {
      const dateValueFrom = datePair[0].format("YYYY-MM-DD");
      from = dateValueFrom;

      if (timePair && timePair[0] !== null) {
        const timeValueFrom = timePair[0].format("HH:mm:ss");
        from = from + " " + timeValueFrom;
      }
    }

    if (datePair[1] !== null) {
      const dateValueTo = datePair[1].format("YYYY-MM-DD");
      to = dateValueTo;

      if (timePair && timePair[1] !== null) {
        const timeValueTo = timePair[1].format("HH:mm:ss");
        to = to + " " + timeValueTo;
      }
    }

    newValues[baseKey + "#datetime"] = [from, to];
  });

  return newValues;
};

const ungroupDateValuesIfNeeded = (values: any, widgetContainer: any) => {
  const dateFields = Object.keys(values).filter((key) => {
    const widget = widgetContainer.findById(key);
    return widget && widget.type === "date";
  });

  const newValues: any = { ...values };

  dateFields.forEach((key) => {
    delete newValues[key];
    if (values[key][0] !== null) {
      newValues[key + "#from"] = values[key][0];
    }

    if (values[key][1] !== null) {
      newValues[key + "#to"] = values[key][1];
    }
  });

  return newValues;
};

export const removeUndefinedFields = (values: any) => {
  const newValues = { ...values };
  Object.keys(newValues).forEach(
    (key) =>
      (newValues[key] === undefined ||
        newValues[key] === null ||
        newValues[key] === "") &&
      delete newValues[key],
  );
  return newValues;
};

// Helper function to check if domain contains any OR operators
const containsOrOperator = (domain: any[]): boolean => {
  if (!Array.isArray(domain)) {
    return false;
  }

  return domain.some((item) => {
    if (item === "|") {
      return true;
    }
    if (Array.isArray(item)) {
      return containsOrOperator(item);
    }
    return false;
  });
};

export const mergeParams = (searchParams: any[], domainParams: any[]) => {
  if (!searchParams || searchParams.length === 0) {
    return domainParams;
  }

  if (!domainParams || domainParams.length === 0) {
    return searchParams;
  }

  // Only add '&' operator if there are '|' operators in the domain
  // This is for MongoDB ORM compatibility - MongoDB doesn't support explicit '&'
  // but works fine with implicit AND when there are no OR operations
  if (containsOrOperator(domainParams)) {
    return ["&", ...searchParams, ...domainParams];
  } else {
    return [...searchParams, ...domainParams];
  }
};

export const normalizeValues = (values: any) => {
  // values object should be converted: fields that are empty strings should be undefined
  return Object.keys(values).reduce((acc: any, key) => {
    const value = values[key];
    if (value !== "" && value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
};

export const convertParamsToValues = (params: any[], fields?: any) => {
  if (!params || !Array.isArray(params) || !fields) return {};

  const values = params.reduce((acc: any, param) => {
    // Handle array format [field, operator, value]
    if (Array.isArray(param)) {
      const [field, operator, value] = param;
      const baseField = field.split("#")[0];
      const type = fields?.[baseField]?.type;

      if (type === "date") {
        // Initialize array if not exists
        if (!acc[baseField]) {
          acc[baseField] = [null, null];
        }
        // Set the appropriate value in the array based on operator
        if (operator === ">=") {
          acc[baseField][0] = dayjs(value);
        } else if (operator === "<=") {
          acc[baseField][1] = dayjs(value);
        }
      } else if (type === "datetime") {
        // For datetime, we need to split into date and time components
        const dateObj = dayjs(value);
        const baseKey = field.split("#")[0];

        // Initialize arrays if they don't exist
        if (!acc[baseKey + "#date"]) {
          acc[baseKey + "#date"] = [null, null];
        }
        if (!acc[baseKey + "#time"]) {
          acc[baseKey + "#time"] = [null, null];
        }

        // Set the appropriate values based on operator
        if (operator === ">=") {
          acc[baseKey + "#date"][0] = dateObj;
          acc[baseKey + "#time"][0] = dateObj;
        } else if (operator === "<=") {
          acc[baseKey + "#date"][1] = dateObj;
          acc[baseKey + "#time"][1] = dateObj;
        }
      } else if (
        type === "float" ||
        type === "integer" ||
        type === "float_time" ||
        type === "progressbar"
      ) {
        // Handle numeric range operators
        if (operator === ">=") {
          acc[field + "#from"] = value;
        } else if (operator === "<=") {
          acc[field + "#to"] = value;
        } else {
          // For other operators (=, !=, etc.), just set the value
          acc[field] = value;
        }
      } else {
        // For other types, just set the value
        acc[field] = value;
      }
    } else {
      // Keep existing object format support
      acc[param.id] = param.value;
    }
    return acc;
  }, {});

  return normalizeValues(values);
};
