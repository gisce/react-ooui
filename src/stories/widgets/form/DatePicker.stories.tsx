import React, { useEffect, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import DatePicker, { DatePickerInput } from "@/common/DatePicker";
import { Form } from "antd";
import { Date as DateOoui } from "@gisce/ooui";
import dayjs from "@/helpers/dayjs";
import { WidgetProps } from "@/types";

type DatePickerStoryProps = WidgetProps & {
  showTime?: boolean;
  value?: string;
};

export default {
  title: "Widgets/Form/DateTime",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof DatePicker>;

const Template: StoryFn<DatePickerStoryProps> = (args) => {
  const [form] = Form.useForm();
  const fieldName = (args.ooui as DateOoui).id;
  const [currentValue, setCurrentValue] = useState<string | undefined>(
    args.value,
  );

  // Set initial values when args.value changes
  useEffect(() => {
    if (args.value) {
      form.setFieldsValue({ [fieldName]: args.value });
      setCurrentValue(args.value);
    }
  }, [args.value, form, fieldName]);

  return (
    <div style={{ width: 300 }}>
      <Form
        form={form}
        initialValues={{ [fieldName]: args.value }}
        onFieldsChange={() => {
          const newValue = form.getFieldValue(fieldName);
          setCurrentValue(newValue);
        }}
      >
        <Form.Item name={fieldName} label="Date">
          <DatePickerInput
            ooui={args.ooui as DateOoui}
            showTime={args.showTime}
            value={form.getFieldValue(fieldName)}
            onChange={(value) => form.setFieldValue(fieldName, value)}
          />
        </Form.Item>
        <div style={{ marginTop: 20 }}>
          <strong>Debug Information:</strong>
          <pre>String value: {currentValue}</pre>
          {(args.ooui as DateOoui).timezone && (
            <pre>timezone from ooui: {(args.ooui as DateOoui).timezone}</pre>
          )}
        </div>
      </Form>
    </div>
  );
};

// Date picker with time
export const Basic = Template.bind({});
Basic.args = {
  ooui: new DateOoui({}),
  value: "2024-03-10 14:30:00",
  showTime: true,
};

// Required field
export const Required = Template.bind({});
Required.args = {
  ooui: new DateOoui({
    required: true,
  }),
  value: "2024-03-10 14:30:00",
  showTime: true,
};

// Read-only field
export const ReadOnly = Template.bind({});
ReadOnly.args = {
  ooui: new DateOoui({
    readonly: true,
  }),
  value: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  showTime: true,
};

// UTC Timezone
export const UTCTimezone = Template.bind({});
UTCTimezone.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2024-03-10 14:30:00",
  showTime: true,
};

// New York Timezone (for DST edge cases)
export const NewYorkTimezone = Template.bind({});
NewYorkTimezone.args = {
  ooui: new DateOoui({
    timezone: "America/New_York",
  }),
  value: "2024-03-10 14:30:00",
  showTime: true,
};

// Invalid date handling
export const InvalidDate = Template.bind({});
InvalidDate.args = {
  ooui: new DateOoui({}),
  value: "invalid-date", // Should show error state
  showTime: true,
};
