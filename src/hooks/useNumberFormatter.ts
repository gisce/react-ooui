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
      // Handle null/undefined/empty string
      if (value === null || value === undefined || value === "") {
        return "";
      }

      // Convert string values to numbers (ERP backends often return numbers as strings)
      let numericValue: number;
      if (typeof value === "string") {
        numericValue = parseFloat(value);
      } else {
        numericValue = value;
      }

      // Handle NaN after conversion
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
        // Prevent Intl.NumberFormat from rounding (default is 3 decimals)
        formatOptions.maximumFractionDigits = 20;
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
