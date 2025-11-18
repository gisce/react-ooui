export const normalizeColumnValue = (
  value: any,
  fieldDefinition: any,
  t: (key: string) => string,
): { id: string; label: string; originalValue: any } | null => {
  if (value === null || value === undefined) {
    if (fieldDefinition?.type !== "boolean") {
      return null;
    }
  }

  const fieldType = fieldDefinition?.type;

  switch (fieldType) {
    case "many2one":
      if (Array.isArray(value) && value.length === 2) {
        return {
          id: value[0],
          label: value[1],
          originalValue: value,
        };
      }
      return null;

    case "selection": {
      let selectionKey: any;
      let selectionLabel: string;

      if (Array.isArray(value) && value.length === 2) {
        selectionKey = value[0];
        selectionLabel = value[1];
      } else {
        selectionKey = value;
        const selectionValues =
          fieldDefinition?.selection || fieldDefinition?.selectionValues;
        if (selectionValues) {
          const found = selectionValues.find(
            ([id]: [any, string]) => id === selectionKey,
          );
          selectionLabel = found ? found[1] : String(selectionKey);
        } else {
          selectionLabel = String(selectionKey);
        }
      }

      return {
        id: selectionKey,
        label: selectionLabel,
        originalValue: selectionKey,
      };
    }

    case "boolean": {
      const boolValue =
        value === true || value === 1 || value === "true" || value === "1";
      return {
        id: String(boolValue),
        label: boolValue ? t("yes") : t("no"),
        originalValue: boolValue,
      };
    }

    case "reference": {
      if (typeof value === "string" && value.includes(",")) {
        const [, idPart] = value.split(",");
        return {
          id: idPart,
          label: value,
          originalValue: value,
        };
      }
      return null;
    }

    default: {
      if (value === null || value === undefined) {
        return null;
      }
      const stringValue = String(value);
      return {
        id: stringValue,
        label: stringValue,
        originalValue: value,
      };
    }
  }
};
