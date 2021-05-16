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
      processedTouchedValues[name] = value[0];
      return;
    }

    processedTouchedValues[name] = value;
  });
  return processedTouchedValues;
};

export default getErpValues;
