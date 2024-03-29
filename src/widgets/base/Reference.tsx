import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import {
  Reference as ReferenceOoui,
  Selection as SelectionOoui,
  Many2one as Many2oneOoui,
} from "@gisce/ooui";
import Field from "@/common/Field";
import { Many2oneInput } from "./many2one/Many2one";
import { SelectionInput } from "./Selection";

type Props = {
  ooui: ReferenceOoui;
  onOpenDetailClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  onSearchClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
};

export const Reference = (props: Props) => {
  const { ooui } = props;
  const { required } = ooui;

  return (
    <Field required={required} {...props}>
      <ReferenceInput ooui={ooui} />
    </Field>
  );
};

interface ReferenceInputProps {
  ooui: ReferenceOoui;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export const ReferenceInput: React.FC<ReferenceInputProps> = (
  props: ReferenceInputProps,
) => {
  const { value, onChange, ooui } = props;
  const { required, selectionValues, readOnly, domain } = ooui;

  const splittedValue = value?.split(",");

  const [many2oneValue, setMany2oneValue] = useState<any[]>([]);
  const [selectionValue, setSelectionValue] = useState<string>();

  useEffect(() => {
    if (!value) {
      setSelectionValue(undefined);
      setMany2oneValue([]);
      return;
    }

    const model = value && splittedValue && splittedValue[0];
    const id =
      value && splittedValue && splittedValue[1] && parseInt(splittedValue[1]);
    setMany2oneValue([id, undefined]);
    setSelectionValue(model!);
  }, [value]);

  return (
    <Row gutter={8} wrap={false}>
      <Col flex="1">
        <SelectionInput
          ooui={
            new SelectionOoui({
              name: "model_selection",
              selection: selectionValues,
              readonly: readOnly,
              required,
            })
          }
          onChange={(changedValue: string) => {
            setSelectionValue(changedValue);
            let m2oValue = many2oneValue[0] || 0;
            if (changedValue !== selectionValue) {
              setMany2oneValue([]);
              m2oValue = 0;
            }
            const referenceValue = `${changedValue},${m2oValue}`;
            if (referenceValue === value) {
              return;
            }
            onChange?.(referenceValue);
          }}
          value={selectionValue}
        />
      </Col>
      <Col flex="3">
        <Many2oneInput
          ooui={
            new Many2oneOoui({
              name: "object_value",
              relation: selectionValue,
              readonly: readOnly,
              required,
              domain,
            })
          }
          value={many2oneValue}
          onChange={(changedValue: any[]) => {
            setMany2oneValue(changedValue);
            const referenceValue = `${selectionValue},${changedValue[0] || 0}`;
            if (referenceValue === value) {
              return;
            }
            onChange?.(referenceValue);
          }}
        />
      </Col>
    </Row>
  );
};
