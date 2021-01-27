const convertBooleanParamIfNeeded = (value: any) => {
  if ((typeof value === "string" && value === "true") || value === "false") {
    return value === "true";
  }
  return value;
};

const getParamsForFields = (values: any, fields: any) => {
  return Object.keys(values).map((key) => {
    return getParamForField(key, values[key], fields);
  });
};

const getParamForField = (key: string, value: any, fields: any) => {
  const type = fields[key].type;

  if (type === "char" || type === "text" || type === "many2one") {
    return [key, "ilike", value];
  } else if (
    type === "float" ||
    type === "integer" ||
    type === "float_time" ||
    type === "progressbar"
  ) {
    const fromValue = value[0];
    const toValue = value[1];
    return [
      [key, ">=", fromValue],
      [key, "<=", toValue],
    ];
  } else if (type === "date") {
    const fromValue = value[0].format("YYYY-MM-DD");
    const toValue = value[1].format("YYYY-MM-DD");
    return [
      [key, ">=", fromValue],
      [key, "<=", toValue],
    ];
  } else {
    return [key, "=", convertBooleanParamIfNeeded(value)];
  }
};

const groupRangeValues = (values: any) => {
  const newValues: any = {};

  Object.keys(values).forEach((key) => {
    let baseKey;
    if (key.indexOf("_from") !== -1) {
      baseKey = key.replace("_from", "");
    } else if (key.indexOf("_to") !== -1) {
      baseKey = key.replace("_to", "");
    } else {
      newValues[key] = values[key];
      return;
    }

    if (!newValues[baseKey]) {
      newValues[baseKey] = [];
    }
    newValues[baseKey].push(values[key]);
  });

  return newValues;
};

const removeUndefinedFields = (values: any) => {
  const newValues = { ...values };
  Object.keys(newValues).forEach(
    (key) => newValues[key] === undefined && delete newValues[key]
  );
  return newValues;
};

export { removeUndefinedFields, groupRangeValues, getParamsForFields };
