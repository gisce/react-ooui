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
): (value: number | string | null | undefined) => string {
  const { locale } = useLocale();
  const { localized = false, decimalDigits, currency, format } = options;

  return useCallback(
    (value: number | string | null | undefined): string => {
      if (value === null || value === undefined || value === "") {
        return "";
      }

      const numericValue =
        typeof value === "string" ? parseFloat(value) : value;

      if (isNaN(numericValue)) {
        return "";
      }

      if (!localized) {
        return decimalDigits !== undefined
          ? numericValue.toFixed(decimalDigits)
          : `${numericValue}`;
      }

      const browserLocale = locale.replace("_", "-");
      const formatOptions: Intl.NumberFormatOptions = {
        useGrouping: true,
      };

      if (decimalDigits !== undefined) {
        formatOptions.minimumFractionDigits = decimalDigits;
        formatOptions.maximumFractionDigits = decimalDigits;
      } else {
        const MAX_FRACTION_DIGITS_NO_ROUNDING = 20;
        formatOptions.maximumFractionDigits = MAX_FRACTION_DIGITS_NO_ROUNDING;
      }

      if (format === "currency" && currency) {
        formatOptions.style = "currency";
        formatOptions.currency = currency;
      } else if (format === "percent") {
        formatOptions.style = "percent";
      }

      return numericValue.toLocaleString(browserLocale, formatOptions);
    },
    [locale, decimalDigits, currency, format, localized],
  );
}
