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

function detectDecimalSeparator(value: string): {
  decimal: string | null;
  thousands: string | null;
} {
  const cleanValue = value.replace(/\s/g, "");

  const hasDot = cleanValue.includes(".");
  const hasComma = cleanValue.includes(",");

  if (!hasDot && !hasComma) {
    return { decimal: null, thousands: null };
  }

  if (hasDot && hasComma) {
    const lastDot = cleanValue.lastIndexOf(".");
    const lastComma = cleanValue.lastIndexOf(",");

    const trailingMatch = cleanValue.match(/[.,](\d+)$/);
    if (trailingMatch && /^0+$/.test(trailingMatch[1])) {
      const trailingSep =
        cleanValue[cleanValue.length - trailingMatch[0].length];
      if (trailingSep === "," && lastDot < lastComma) {
        return { decimal: ".", thousands: null };
      }
      if (trailingSep === "." && lastComma < lastDot) {
        return { decimal: ",", thousands: null };
      }
    }

    if (lastDot > lastComma) {
      return { decimal: ".", thousands: "," };
    }
    return { decimal: ",", thousands: "." };
  }

  const separator = hasDot ? "." : ",";
  const parts = cleanValue.split(separator);

  if (parts.length > 2) {
    const isValidThousandsPattern = parts
      .slice(1)
      .every((p) => /^\d{3}$/.test(p));
    if (isValidThousandsPattern) {
      return { decimal: null, thousands: separator };
    }
    return { decimal: separator, thousands: null };
  }

  return { decimal: separator, thousands: null };
}

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

      if (localized) {
        const detected = detectDecimalSeparator(cleanValue);

        if (detected.thousands) {
          cleanValue = cleanValue.split(detected.thousands).join("");
        }

        if (detected.decimal && detected.decimal !== ".") {
          cleanValue = cleanValue.split(detected.decimal).join(".");
        }
      } else {
        if (separators.thousands) {
          cleanValue = cleanValue.split(separators.thousands).join("");
        }
        cleanValue = cleanValue.split(separators.decimal).join(".");
      }

      cleanValue = cleanValue.replace(/[^0-9.]/g, "");

      if (isNegative) {
        cleanValue = "-" + cleanValue;
      }

      const result = parseFloat(cleanValue);
      return isNaN(result) ? "" : result;
    },
    [localized, separators],
  );

  return {
    formatter,
    parser,
    decimalSeparator: separators.decimal,
    thousandsSeparator: separators.thousands,
  };
}
