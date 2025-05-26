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

// Invalid date handling
export const InvalidDate = Template.bind({});
InvalidDate.args = {
  ooui: new DateOoui({}),
  value: "invalid-date", // Should show error state
  showTime: true,
};

// Timezone in OOUI - Madrid
export const TimezoneInOouiMadrid = Template.bind({});
TimezoneInOouiMadrid.args = {
  ooui: new DateOoui({
    timezone: "Europe/Madrid",
  }),
  value: "2025-05-26 12:00:00",
  showTime: true,
};

// Timezone in OOUI - Tokyo
export const TimezoneInOouiTokyo = Template.bind({});
TimezoneInOouiTokyo.args = {
  ooui: new DateOoui({
    timezone: "Asia/Tokyo",
  }),
  value: "2025-05-26 21:00:00",
  showTime: true,
};

// Timezone in OOUI - UTC
export const TimezoneInOouiUTC = Template.bind({});
TimezoneInOouiUTC.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2025-05-26 12:00:00",
  showTime: true,
};

// DST Edge Cases - Madrid (Start of DST)
export const DSTStartMadrid = Template.bind({});
DSTStartMadrid.args = {
  ooui: new DateOoui({
    timezone: "Europe/Madrid",
  }),
  value: "2025-03-30 01:59:59", // Just before DST starts
  showTime: true,
};

// DST Edge Cases - Madrid (End of DST)
export const DSTEndMadrid = Template.bind({});
DSTEndMadrid.args = {
  ooui: new DateOoui({
    timezone: "Europe/Madrid",
  }),
  value: "2025-10-26 02:59:59", // Just before DST ends
  showTime: true,
};

// DST Edge Cases - UTC Reference
export const UTCReference = Template.bind({});
UTCReference.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2025-03-30 00:59:59", // Reference time in UTC
  showTime: true,
};

// DST Transition - Madrid Spring Forward (Missing Hour)
export const DSTMadridSpringForward = Template.bind({});
DSTMadridSpringForward.args = {
  ooui: new DateOoui({
    timezone: "Europe/Madrid",
  }),
  value: "2025-03-30 02:00:00", // This hour doesn't exist due to spring forward
  showTime: true,
};

// DST Transition - Madrid Fall Back (Ambiguous First Hour)
export const DSTMadridFallBackFirst = Template.bind({});
DSTMadridFallBackFirst.args = {
  ooui: new DateOoui({
    timezone: "Europe/Madrid",
  }),
  value: "2025-10-26 02:00:00", // First occurrence of 2 AM
  showTime: true,
};

// DST Transition - Madrid Fall Back (Ambiguous Second Hour)
export const DSTMadridFallBackSecond = Template.bind({});
DSTMadridFallBackSecond.args = {
  ooui: new DateOoui({
    timezone: "Europe/Madrid",
  }),
  value: "2025-10-26 02:00:00", // Second occurrence of 2 AM
  showTime: true,
};

// DST Transition - UTC Reference for Madrid Spring Forward
export const DSTUtcSpringForward = Template.bind({});
DSTUtcSpringForward.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2025-03-30 01:00:00", // UTC time during Madrid's spring forward
  showTime: true,
};

// DST Transition - UTC Reference for Madrid Fall Back
export const DSTUtcFallBack = Template.bind({});
DSTUtcFallBack.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2025-10-26 01:00:00", // UTC time during Madrid's fall back
  showTime: true,
};

// UTC Edge Case - Specific UTC Time
export const SpecificUTCTime = Template.bind({});
SpecificUTCTime.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2023-03-26 02:00:00", // Specific UTC time
  showTime: true,
};

// UTC Edge Case - UTC to Madrid DST Transition
export const UTCToMadridDST = Template.bind({});
UTCToMadridDST.args = {
  ooui: new DateOoui({
    timezone: "Europe/Madrid",
  }),
  value: "2023-03-26 02:00:00", // UTC time during Madrid's DST transition
  showTime: true,
};

// UTC Edge Case - UTC Midnight Transition
export const UTCMidnightTransition = Template.bind({});
UTCMidnightTransition.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2023-03-26 00:00:00", // UTC midnight
  showTime: true,
};

// UTC Edge Case - UTC to Tokyo (Next Day)
export const UTCToTokyoNextDay = Template.bind({});
UTCToTokyoNextDay.args = {
  ooui: new DateOoui({
    timezone: "Asia/Tokyo",
  }),
  value: "2023-03-26 15:00:00", // UTC time that results in next day in Tokyo
  showTime: true,
};

// UTC Edge Case - UTC Last Second of Day
export const UTCLastSecond = Template.bind({});
UTCLastSecond.args = {
  ooui: new DateOoui({
    timezone: "UTC",
  }),
  value: "2023-03-26 23:59:59", // Last second of the UTC day
  showTime: true,
};
