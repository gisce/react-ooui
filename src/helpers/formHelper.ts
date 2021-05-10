import { FormInstance } from "antd";

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

export const getTouchedValues = (antForm: FormInstance) => {
  const values = antForm.getFieldsValue(true);
  const touchedValues: any = {};
  Object.keys(values).map((key) => {
    if (antForm.isFieldTouched(key)) {
      touchedValues[key] = values[key];
    }
  });
  return touchedValues;
};
