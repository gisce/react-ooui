//
// Since the format we have to send when we'll write an object (create or update)
// Is different than the one that we get when reading, we must convert certain fields
//
const getErpValues = ({
  values,
  touchedValues,
  fields,
}: {
  values: any;
  touchedValues: any;
  fields: any;
}): any => {
  const processedTouchedValues: any = {};

  Object.entries(touchedValues).forEach((item: any) => {
    const [name, value] = item;

    if (
      fields[name] &&
      fields[name].type === "many2one" &&
      Array.isArray(value)
    ) {
      processedTouchedValues[name] = value[0] || null;
      return;
    }

    processedTouchedValues[name] = value;
  });
  return processedTouchedValues;
};

const formatX2ManyValues = ({
  values,
  fields,
}: {
  values: any;
  fields: any;
}): any => {
  const processedValues: any = {};

  Object.entries(values).forEach((item: any) => {
    const [name, value] = item;

    if (
      fields[name] &&
      (fields[name].type === "many2many" || fields[name].type === "one2many") &&
      Array.isArray(value) &&
      value.length > 0 &&
      typeof value[0] == "number"
    ) {
      processedValues[name] = value.map((itemId: string) => {
        return {
          operation: "original",
          id: itemId,
        };
      });
      return;
    }

    processedValues[name] = value;
  });
  return processedValues;
};

export { getErpValues, formatX2ManyValues };
