import { Form } from "@gisce/react-formiga-components";
import { Form as FormOoui } from "@gisce/ooui";
import { useCallback, useMemo, useState } from "react";
import { UseFormOouiProps, useFormOoui } from "./useFormOoui";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { FormInstance } from "antd";
import { useFormData } from "./useFormData";

export type FormOouiProps = UseFormOouiProps & {
  form?: FormInstance;
  children?: React.ReactNode;
  getChildrenForOoui?: (ooui: FormOoui) => React.ReactNode;
  values?: Record<string, any>;
};

export const FormOouiComponent = ({
  arch,
  fields,
  readOnly,
  onTitleChange,
  getChildrenForOoui,
  values,
}: FormOouiProps) => {
  const [antForm, setAntForm] = useState<FormInstance>();
  const { ooui } = useFormOoui({
    arch,
    fields,
    readOnly,
    onTitleChange,
  });

  useFormData({ values, antForm });

  const oouiChilds = useMemo(() => {
    if (!ooui) {
      return null;
    }
    return getChildrenForOoui?.(ooui) || null;
  }, [ooui, getChildrenForOoui]);

  const onMountedCallback = useCallback(
    ({ antForm }: { antForm: FormInstance }) => {
      setAntForm(antForm);
    },
    [],
  );

  return (
    <Form onMounted={onMountedCallback}>
      <ErrorBoundary>{oouiChilds}</ErrorBoundary>
    </Form>
  );
};
