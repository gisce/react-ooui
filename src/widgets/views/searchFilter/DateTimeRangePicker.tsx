import { Row, Col } from "antd";
import Field from "@/common/Field";
import { Field as FieldOoui, Label as LabelOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Label from "@/widgets/base/Label";
import { TimePicker } from "../../../common/TimePicker";
import dayjs from "@/helpers/dayjs";
import { useMemo } from "react";
import { DateRangePicker } from "./DateRangePicker";

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
      <div className="flex flex-col gap-2 w-full">
        <Row className="w-full">
          <Col span={24}>
            <DateRangePicker {...props} ooui={fields[0]} showLabel={false} />
          </Col>
        </Row>
        <Row className="w-full">
          <Col span={24}>
            <Field {...props} ooui={fields[1]} showLabel={false}>
              <TimeRangePicker />
            </Field>
          </Col>
        </Row>
      </div>
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
  const defaultOpenValue = useMemo(
    () => dayjs().hour(0).minute(0).second(0),
    [],
  );

  return (
    <Row gutter={8}>
      <Col span={12}>
        <TimePicker
          placeholder="Start time"
          format={"HH:mm"}
          style={{ width: "100%" }}
          value={value?.[0]}
          defaultOpenValue={defaultOpenValue}
          onChange={(newValue) => {
            onChange?.([newValue, value?.[1]]);
          }}
        />
      </Col>
      <Col span={12}>
        <TimePicker
          placeholder="End time"
          style={{ width: "100%" }}
          format={"HH:mm"}
          value={value?.[1]}
          defaultOpenValue={defaultOpenValue}
          onChange={(newValue) => {
            onChange?.([value?.[0], newValue]);
          }}
        />
      </Col>
    </Row>
  );
};
