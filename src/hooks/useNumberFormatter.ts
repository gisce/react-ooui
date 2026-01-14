import { useCallback } from "react";
import { useLocale } from "@gisce/react-formiga-components";

export type NumberFormatType = "decimal" | "currency" | "percent";

export type UseNumberFormatterOptions = {
  decimalDigits?: number;
  currency?: string;
  format?: NumberFormatType;
  localized?: boolean;
};

export const useNumberFormatter = (options: UseNumberFormatterOptions = {}) => {
  const { locale } = useLocale();
  const { localized = false } = options;

  return useCallback(
    (value: number | null | undefined): string => {
      if (value === null || value === undefined || isNaN(value)) {
        return "";
      }

      if (!localized) {
        if (options.decimalDigits !== undefined) {
          return value.toFixed(options.decimalDigits);
        }
        return `${value}`;
      }

      const browserLocale = locale.replace("_", "-");
      const formatOptions: Intl.NumberFormatOptions = {
        useGrouping: true,
      };

      if (options.decimalDigits !== undefined) {
        formatOptions.minimumFractionDigits = options.decimalDigits;
        formatOptions.maximumFractionDigits = options.decimalDigits;
      }

      if (options.format === "currency" && options.currency) {
        formatOptions.style = "currency";
        formatOptions.currency = options.currency;
      } else if (options.format === "percent") {
        formatOptions.style = "percent";
      }

      return value.toLocaleString(browserLocale, formatOptions);
    },
    [
      locale,
      options.decimalDigits,
      options.currency,
      options.format,
      localized,
    ],
  );
};
