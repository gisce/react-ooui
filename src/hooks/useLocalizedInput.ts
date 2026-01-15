import { useCallback, useMemo } from "react";
import { useLocale } from "@gisce/react-formiga-components";

export type UseLocalizedInputOptions = {
  decimalDigits?: number;
  isInteger?: boolean;
  localized?: boolean;
};

type LocaleSeparators = {
  decimal: string;
  thousands: string;
};

function getLocaleSeparators(locale: string): LocaleSeparators {
  const browserLocale = locale.replace("_", "-");
  const formatted = new Intl.NumberFormat(browserLocale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    useGrouping: true,
  }).format(1234.5);

  const decimalMatch = formatted.match(/(\D)5$/);
  const thousandsMatch = formatted.match(/1(\D)234/);

  return {
    decimal: decimalMatch?.[1] ?? ".",
    thousands: thousandsMatch?.[1] ?? ",",
  };
}

export function useLocalizedInput(options: UseLocalizedInputOptions = {}): {
  formatter: (value: number | string | undefined) => string;
  parser: (displayValue: string | undefined) => number | string;
  decimalSeparator: string;
  thousandsSeparator: string;
} {
  const { decimalDigits, isInteger = false, localized = false } = options;
  const { locale } = useLocale();

  const separators = useMemo(
    () =>
      localized ? getLocaleSeparators(locale) : { decimal: ".", thousands: "" },
    [locale, localized],
  );

  const formatter = useCallback(
    (value: number | string | undefined): string => {
      if (value === undefined || value === "" || value === null) {
        return "";
      }

      const numValue = typeof value === "string" ? parseFloat(value) : value;

      if (isNaN(numValue)) {
        return "";
      }

      if (!localized) {
        if (isInteger) {
          return `${Math.trunc(numValue)}`.replace(/[^0-9-]+/g, "");
        }
        return `${numValue}`.replace(/[^0-9.-]+/g, "");
      }

      const browserLocale = locale.replace("_", "-");
      const formatOptions: Intl.NumberFormatOptions = {
        useGrouping: true,
      };

      if (isInteger) {
        formatOptions.minimumFractionDigits = 0;
        formatOptions.maximumFractionDigits = 0;
      } else if (decimalDigits !== undefined) {
        formatOptions.minimumFractionDigits = decimalDigits;
        formatOptions.maximumFractionDigits = decimalDigits;
      } else {
        // Prevent Intl.NumberFormat from rounding (default is 3 decimals)
        formatOptions.maximumFractionDigits = 20;
      }

      return numValue.toLocaleString(browserLocale, formatOptions);
    },
    [locale, decimalDigits, isInteger, localized],
  );

  const parser = useCallback(
    (displayValue: string | undefined): number | string => {
      if (!displayValue) {
        return "";
      }

      const isNegative = displayValue.startsWith("-");
      let cleanValue = isNegative ? displayValue.slice(1) : displayValue;

      if (separators.thousands) {
        cleanValue = cleanValue.split(separators.thousands).join("");
      }
      cleanValue = cleanValue.split(separators.decimal).join(".");
      cleanValue = cleanValue.replace(/[^0-9.]/g, "");

      if (isNegative) {
        cleanValue = "-" + cleanValue;
      }

      const result = parseFloat(cleanValue);
      return isNaN(result) ? "" : result;
    },
    [separators],
  );

  return {
    formatter,
    parser,
    decimalSeparator: separators.decimal,
    thousandsSeparator: separators.thousands,
  };
}
