import cups from "./models/cups";
import partner from "./models/partner";
import butlleti from "./models/butlleti";
import modcontractual from "./models/modcontractual";
import hist_autoconsum from "./models/hist_autoconsum";
import signatura from "./models/signatura";
import polissa from "./models/polissa";
import factura from "./models/factura";
import lead from "./models/lead";
import document from "./models/document";
import company from "./models/company";
import switching from "./models/switching";
import attachment from "./models/attachment";
import crm_case from "./models/crm_case";
import form_with_gridfiber from "./models/form_with_gridfiber";
import partner_category from "./models/res_partner_category";

const allModels = [
  cups,
  partner,
  butlleti,
  modcontractual,
  hist_autoconsum,
  signatura,
  polissa,
  factura,
  lead,
  document,
  company,
  switching,
  attachment,
  crm_case,
  form_with_gridfiber,
  partner_category,
];

const getMock = (model: string) => {
  const found = allModels.find((item) => {
    return item.model === model;
  });
  return found || allModels[0];
};

export { getMock };
