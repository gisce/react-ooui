import { DatePicker, TimePicker, Row, Col } from "antd";
import Field from "@/common/Field";
import { Field as FieldOoui, Label as LabelOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Label from "@/widgets/base/Label";

export const DateTimeRangePicker = (props: WidgetProps) => {
  const { ooui, showLabel = false } = props;
  const { label, id } = ooui;

  const fields = [
    new FieldOoui({
      name: id + "#date",
      label: "",
    }),
    new FieldOoui({
      name: id + "#time",
      label: "",
    }),
  ];

  return (
    <>
      {showLabel && (
        <Label
          ooui={
            new LabelOoui({
              name: id + "_label",
              string: label,
              help: ooui.tooltip,
              fieldForLabel: id,
            })
          }
          align={"left"}
        />
      )}
      <Row align={"bottom"} className="p-0">
        <Col className="mr-2">
          <Field {...props} ooui={fields[0]} showLabel={false}>
            <DatePicker.RangePicker
              className="w-60"
              allowEmpty={[true, true]}
              format={"DD/MM/YYYY"}
            ></DatePicker.RangePicker>
          </Field>
        </Col>
        <Col>
          <Field {...props} ooui={fields[1]} showLabel={false}>
            <TimeRangePicker />
          </Field>
        </Col>
      </Row>
    </>
  );
};

const TimeRangePicker = ({
  value,
  onChange,
}: {
  value?: any;
  onChange?: (newValue: any) => void;
}) => {
  return (
    <div style={{ marginTop: 5 }}>
      <TimePicker
        placeholder="Start time"
        style={{ width: 115, marginRight: 10 }}
        format={"HH:mm"}
        value={value?.[0]}
        onChange={(newValue) => {
          onChange?.([newValue, value?.[1]]);
        }}
      />
      <TimePicker
        placeholder="End time"
        style={{ width: 115 }}
        format={"HH:mm"}
        value={value?.[1]}
        onChange={(newValue) => {
          onChange?.([value?.[0], newValue]);
        }}
      />
    </div>
  );
};
