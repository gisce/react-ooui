import cups from "./models/cups";
import partner from "./models/partner";
import butlleti from "./models/butlleti";
import polisses from "./models/polisses";
import hist_autoconsum from "./models/hist_autoconsum";

const allModels = [cups, partner, butlleti, polisses, hist_autoconsum];

const getMock = (model: string) => {
  const found = allModels.find((item) => {
    return item.model === model;
  });
  return found || allModels[0];
};

export { getMock };
