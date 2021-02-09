const convertBooleanParamIfNeeded = (value: any) => {
  if ((typeof value === "string" && value === "true") || value === "false") {
    return value === "true";
  }
  return value;
};

const getParamsForFields = (values: any, fields: any) => {
  const filteredValues = removeUndefinedFields(values);
  const groupedDateTime = groupDateTimeValuesIfNeeded(filteredValues);
  const groupedValues = ungroupDateValuesIfNeeded(groupedDateTime, fields);

  const params = [
    ...Object.keys(groupedValues).map((key) => {
      return getParamForField(key, groupedValues[key], fields);
    }),
  ];

  // This is needed because in case of datetime we receive an array of arrays
  return params.reduce((acc, curVal) => {
    if (Array.isArray(curVal[0])) {
      return acc.concat(curVal);
    }
    return [...acc, curVal];
  }, []);
};

const getParamForField = (key: string, value: any, fields: any) => {
  const filteredKey = key.split("#")[0];
  const type = fields[filteredKey].type;

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
    const from = value[0];
    const to = value[1];
    return [
      [filteredKey, ">=", from],
      [filteredKey, "<=", to],
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
      delete newValues[key]
  );
  return newValues;
};

const groupDateTimeValuesIfNeeded = (values: any) => {
  const newValues: any = { ...removeDateTimeSingleFields(values) };

  const datetimeDateFields = getDatetimeDateFields(values);

  datetimeDateFields.forEach((field) => {
    const datePair = values[field];
    const baseKey = field.split("#")[0];
    const timeKey = baseKey + "#time";
    const timePair = values[timeKey];
    const dateValueFrom = datePair[0].format("YYYY-MM-DD");
    const dateValueTo = datePair[1].format("YYYY-MM-DD");
    const timeValueFrom = timePair[0].format("HH:mm");
    const timeValueTo = timePair[1].format("HH:mm");
    const from = dateValueFrom + " " + timeValueFrom;
    const to = dateValueTo + " " + timeValueTo;
    newValues[baseKey + "#datetime"] = [from, to];
  });

  return newValues;
};

const ungroupDateValuesIfNeeded = (values: any, fields: any) => {
  const dateFields = Object.keys(values).filter((key) => {
    return fields[key] && fields[key].type === "date";
  });

  let newValues: any = { ...values };

  dateFields.forEach((key) => {
    delete newValues[key];
    newValues[key + "#from"] = values[key][0];
    newValues[key + "#to"] = values[key][1];
  });

  return newValues;
};

const removeUndefinedFields = (values: any) => {
  const newValues = { ...values };
  Object.keys(newValues).forEach(
    (key) =>
      (newValues[key] === undefined ||
        newValues[key] === null ||
        newValues[key] === "") &&
      delete newValues[key]
  );
  return newValues;
};

export {
  removeUndefinedFields,
  groupDateTimeValuesIfNeeded,
  getParamsForFields,
};
