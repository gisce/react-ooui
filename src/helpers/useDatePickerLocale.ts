import enUS from "antd/es/date-picker/locale/en_US";
import esES from "antd/es/date-picker/locale/es_ES";
import caES from "antd/es/date-picker/locale/ca_ES";
import { useLocale } from "@gisce/react-formiga-components";

const antdLocales = {
  en_US: enUS,
  es_ES: esES,
  ca_ES: caES,
};

export const useDatePickerLocale = () => {
  const { locale } = useLocale();
  return antdLocales[locale];
};
