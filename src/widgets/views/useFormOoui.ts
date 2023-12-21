import { Form as FormOoui } from "@gisce/ooui";
import { Fields } from "./FormOoui.types";
import { useCallback, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

export type UseFormOouiProps = {
  arch: string;
  fields: Fields;
  readOnly?: boolean;
  onTitleChange?: (title: string) => void;
  values?: Record<string, any>;
};

export const useFormOoui = ({
  arch,
  fields,
  readOnly,
  onTitleChange,
  values,
}: UseFormOouiProps) => {
  const [ooui, setOoui] = useState<FormOoui>();
  const [error, setError] = useState();

  useDeepCompareEffect(() => {
    parseForm();
  }, [arch, fields, readOnly, values]);

  const parseForm = useCallback(() => {
    try {
      const ooui = new FormOoui(fields);
      ooui.parse(arch, {
        readOnly,
        values,
      });
      setOoui(ooui);

      if (ooui?.string) {
        onTitleChange?.(ooui.string);
      }
    } catch (err) {
      setError(err);
    }
  }, [arch, fields, onTitleChange, readOnly, values]);

  return {
    error,
    ooui,
  };
};
