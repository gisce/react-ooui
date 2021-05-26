import { One2manyItem } from "@/widgets/base/One2manyInput";
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

export const getTouchedValues = (antForm: FormInstance, fields: any) => {
  const values = antForm.getFieldsValue(true);
  const touchedValues: any = {};
  Object.keys(values).map((key) => {
    const is2Many = fields[key]
      ? fields[key].type === "one2many" || fields[key].type === "many2many"
      : false;

    if (antForm.isFieldTouched(key) && is2Many) {
      // We ensure the field is really touched by filtering by original items
      const nonOriginalItems = values[key].filter(
        (item: One2manyItem) => item.operation !== "original"
      );
      if (nonOriginalItems.length > 0) {
        touchedValues[key] = values[key];
      }
    } else if (antForm.isFieldTouched(key)) {
      touchedValues[key] = values[key];
    }
  });
  return touchedValues;
};
