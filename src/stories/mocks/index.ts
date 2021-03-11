import cups from "./models/cups";
import partner from "./models/partner";

const allModels = [cups, partner];

const getMock = (model: string) => {
  const found = allModels.find((item) => {
    return item.model === model;
  });
  return found || allModels[0];
};

export { getMock };