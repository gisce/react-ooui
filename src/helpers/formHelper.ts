import { One2manyItem } from "@/widgets/base/one2many/One2manyInput";
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

export const prepareWriteValues = ({
  values,
  fields,
}: {
  values: any;
  fields: any;
}): any => {
  const processedTouchedValues: any = {};

  Object.entries(values).forEach((item: any) => {
    const [name, value] = item;

    if (
      fields[name] &&
      fields[name].type === "many2one" &&
      Array.isArray(value)
    ) {
      processedTouchedValues[name] = value[0] || null;
      return;
    }

    if (
      fields[name] &&
      (fields[name].type === "one2many" || fields[name].type === "many2many")
    ) {
      const items: One2manyItem[] = (value as unknown) as One2manyItem[];

      const itemsToUpdate = items.filter(
        (item) => item.operation !== "original"
      );

      if (itemsToUpdate.length === 0) {
        processedTouchedValues[name] = undefined;
        return;
      }

      processedTouchedValues[name] = itemsToUpdate.map((item) => {
        if (item.operation === "pendingLink") {
          return [4, item.id];
        }
      });
      return;
    }

    processedTouchedValues[name] = value;
  });
  return processedTouchedValues;
};
