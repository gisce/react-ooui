import { useEffect } from "react";
import { FormInstance } from "antd";
import { usePrevious } from "@/hooks/useEffectDebugger";
import { dequal } from "dequal";

export type UseFormDataProps = {
  antForm?: FormInstance;
  values?: Record<string, any>;
};

export const useFormData = ({ antForm, values }: UseFormDataProps) => {
  const previousValues = usePrevious(values);
  const previousForm = usePrevious(antForm);

  useEffect(() => {
    if (!antForm) {
      return;
    }
    if (!dequal(values, previousValues) || (!previousForm && antForm)) {
      antForm.setFieldsValue(values);
    }
  }, [antForm, previousForm, previousValues, values]);

  return {};
};
