import { useCallback, useMemo } from "react";
import { useLocale } from "@gisce/react-formiga-components";

export type UseLocalizedInputOptions = {
  decimalDigits?: number;
  isInteger?: boolean;
};

type LocaleSeparators = {
  decimal: string;
  thousands: string;
};

const getLocaleSeparators = (locale: string): LocaleSeparators => {
  const browserLocale = locale.replace("_", "-");

  const formatted = new Intl.NumberFormat(browserLocale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
    useGrouping: true,
  }).format(1234.5);

  const decimalMatch = formatted.match(/(\D)5$/);
  const decimal = decimalMatch ? decimalMatch[1] : ".";

  const thousandsMatch = formatted.match(/1(\D)234/);
  const thousands = thousandsMatch ? thousandsMatch[1] : ",";

  return { decimal, thousands };
};

export const useLocalizedInput = (options: UseLocalizedInputOptions = {}) => {
  const { decimalDigits, isInteger = false } = options;
  const { locale } = useLocale();

  const separators = useMemo(() => getLocaleSeparators(locale), [locale]);

  const formatter = useCallback(
    (value: number | string | undefined): string => {
      if (value === undefined || value === "" || value === null) {
        return "";
      }

      const numValue = typeof value === "string" ? parseFloat(value) : value;

      if (isNaN(numValue)) {
        return "";
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
      }

      return numValue.toLocaleString(browserLocale, formatOptions);
    },
    [locale, decimalDigits, isInteger],
  );

  const parser = useCallback(
    (displayValue: string | undefined): number | string => {
      if (!displayValue || displayValue === "") {
        return "";
      }

      const isNegative = displayValue.startsWith("-");
      let cleanValue = isNegative ? displayValue.slice(1) : displayValue;

      const escapedThousands = separators.thousands.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      );
      cleanValue = cleanValue.replace(new RegExp(escapedThousands, "g"), "");

      const escapedDecimal = separators.decimal.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      );
      cleanValue = cleanValue.replace(new RegExp(escapedDecimal, "g"), ".");

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
};
