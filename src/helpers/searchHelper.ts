import dayjs from "@/helpers/dayjs";

const convertBooleanParamIfNeeded = (value: any) => {
  if ((typeof value === "string" && value === "true") || value === "false") {
    return value === "true";
  }
  return value;
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

  return paramsForFields;
};

const getParamForField = (key: string, value: any, widgetContainer: any) => {
  const filteredKey = key.split("#")[0];
  const type = widgetContainer.findById(filteredKey)?.type;

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

export const mergeParams = (
  searchParams?: any[] | null,
  domainParams?: any[] | null,
) => {
  if (!searchParams || searchParams.length === 0) {
    return domainParams;
  }

  if (!domainParams || domainParams.length === 0) {
    return searchParams;
  }

  // Special case: search params with complex domain structure starting with &
  // and containing both conditions and operators (like |)
  if (
    domainParams.length > 2 &&
    domainParams[0] === "&" &&
    domainParams
      .slice(1)
      .some(
        (item) => typeof item === "string" && (item === "|" || item === "&"),
      )
  ) {
    if (searchParams.length === 1) {
      // Single search param: insert it after the first domain condition
      const [firstDomainOp, firstDomainCondition, ...restDomain] = domainParams;
      return ["&", "&", firstDomainCondition, ...searchParams, ...restDomain];
    } else {
      // Multiple search params: create nested & structure
      // For n search params, we need n-1 additional & operators
      const additionalAnds = Array(searchParams.length - 1).fill("&");
      return ["&", ...additionalAnds, ...domainParams, ...searchParams];
    }
  }

  // Default behavior: simple merge with domain params first, then search params
  return ["&", ...domainParams, ...searchParams];
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
