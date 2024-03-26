import React from "react";
import Field from "@/common/Field";
import { HTMLPreview as HTMLPreviewInput } from "@gisce/react-formiga-components";
import { WidgetProps } from "@/types";

export const HTMLPreview = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <HTMLPreviewInput />
    </Field>
  );
};
