import cups from "./models/cups";
import partner from "./models/partner";
import butlleti from "./models/butlleti";
import modcontractual from "./models/modcontractual";
import hist_autoconsum from "./models/hist_autoconsum";
import signatura from "./models/signatura";
import polissa from "./models/polissa";
import factura from "./models/factura";

const allModels = [cups, partner, butlleti, modcontractual, hist_autoconsum, signatura, polissa, factura];

const getMock = (model: string) => {
  const found = allModels.find((item) => {
    return item.model === model;
  });
  return found || allModels[0];
};

export { getMock };
