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

export const getUniqueFieldsForParams = (params: any[]) => {
  const uniqueFields: any = {};

  params.forEach((param) => {
    if (Array.isArray(param) && param[0]) {
      uniqueFields[param[0]] = true;
    } else {
      uniqueFields[param] = true;
    }
  });

  return Object.keys(uniqueFields);
};

export const mergeParams = (searchParams: any[], domainParams: any[]) => {
  const finalParams = [...searchParams];
  const uniqueParams = getUniqueFieldsForParams(searchParams);

  domainParams.forEach((element) => {
    if (Array.isArray(element) && element[0]) {
      if (!uniqueParams.includes(element[0])) {
        finalParams.push(element);
      }
    } else if (!uniqueParams.includes(element)) {
      finalParams.push(element);
    }
  });

  return finalParams;
};
