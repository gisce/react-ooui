import React, { useState } from "react";
import { Row, Col } from "antd";
import {
  Reference as ReferenceOoui,
  Selection as SelectionOoui,
  Many2one as Many2oneOoui,
} from "ooui";
import Field from "@/common/Field";
import { Many2oneInput } from "./Many2one";
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
  return (
    <Field {...props}>
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
  props: ReferenceInputProps
) => {
  const { value, onChange, ooui } = props;
  const { required, selectionValues, readOnly } = ooui;

  const splittedValue = value?.split(",");
  const model = value && splittedValue && splittedValue[0];
  const id =
    value && splittedValue && splittedValue[1] && parseInt(splittedValue[1]);

  const [many2oneValue, setMany2oneValue] = useState<any[]>([id, undefined]);
  const [selectionValue, setSelectionValue] = useState<string>(model!);

  return (
    <Row gutter={8} wrap={false}>
      <Col flex="1">
        <SelectionInput
          ooui={
            new SelectionOoui({
              name: "model_selection",
              selection: selectionValues,
              readOnly,
              required,
            })
          }
          onChange={(changedValue: string) => {
            setSelectionValue(changedValue);
            setMany2oneValue([]);
            onChange?.(undefined);
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
              readOnly,
              required,
            })
          }
          value={many2oneValue}
          onChange={(changedValue: any[]) => {
            setMany2oneValue(changedValue);
            onChange?.(`${selectionValue},${changedValue[0]}`);
          }}
        />
      </Col>
    </Row>
  );
};
