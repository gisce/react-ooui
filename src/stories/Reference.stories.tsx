import React from "react";

import { ReferenceInput } from "../widgets/base/Reference";
import { Reference as ReferenceOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Reference",
};

const selectionValues = [
  ["product.product", "Product"],
  ["purchase.order", "Purchase Order"],
  ["account.invoice", "Invoice"],
  ["stock.production.lot", "Production Lot"],
  ["giscedata.polissa", "Pòlissa"],
  ["giscegas.polissa", "Contrato"],
  ["giscedata.signatura.process", "Firma"],
  ["giscedata.crm.lead", "Oferta/Oportunidad"],
  ["crm.case", "Case"],
  ["giscedata.switching", "Caso ATR"],
];

export const Default = (): React.ReactElement => {
  const ooui = new ReferenceOoui({
    name: "selcontext_langection",
    string: "Lorem ipsum",
    selection: selectionValues,
  });

  return (
    <ReferenceInput
      ooui={ooui}
      value={"product.product,5"}
      onChange={(newValue: any) => {
        console.log(newValue);
      }}
    />
  );
};
