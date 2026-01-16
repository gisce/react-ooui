import { useCallback } from "react";
import { useLocale } from "@gisce/react-formiga-components";

export type NumberFormatType = "decimal" | "currency" | "percent";

export type UseNumberFormatterOptions = {
  decimalDigits?: number;
  currency?: string;
  format?: NumberFormatType;
  localized?: boolean;
};

export function useNumberFormatter(
  options: UseNumberFormatterOptions = {},
): (value: number | false | null | undefined) => string {
  const { locale } = useLocale();
  const { localized = false, decimalDigits, currency, format } = options;

  return useCallback(
    (value: number | false | null | undefined): string => {
      if (value === false || value === null || value === undefined) {
        return "";
      }

      if (typeof value !== "number" || isNaN(value)) {
        return "";
      }

      if (!localized) {
        return decimalDigits !== undefined
          ? value.toFixed(decimalDigits)
          : `${value}`;
      }

      const browserLocale = locale.replace("_", "-");
      const formatOptions: Intl.NumberFormatOptions = {
        useGrouping: true,
      };

      if (decimalDigits !== undefined) {
        formatOptions.minimumFractionDigits = decimalDigits;
        formatOptions.maximumFractionDigits = decimalDigits;
      } else {
        formatOptions.maximumFractionDigits = 20;
      }

      if (format === "currency" && currency) {
        formatOptions.style = "currency";
        formatOptions.currency = currency;
      } else if (format === "percent") {
        formatOptions.style = "percent";
      }

      return value.toLocaleString(browserLocale, formatOptions);
    },
    [locale, decimalDigits, currency, format, localized],
  );
}
