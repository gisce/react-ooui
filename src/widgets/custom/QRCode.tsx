import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { QRCode as AntdQRCode, Space, Typography } from "antd";
import { QRCode as OOUIQRCode } from "@gisce/ooui";
import type { QRCodeProps } from "antd";

const DEFAULT_QRCODE_WIDTH = 200;

export interface QRCodeWidgetProps extends Omit<WidgetProps, "ooui"> {
  ooui: OOUIQRCode;
  value?: any;
}

export interface QRCodeInputProps {
  ooui: OOUIQRCode;
  value?: any;
}

export const QRCode = (props: QRCodeWidgetProps) => {
  return (
    <Field {...props}>
      <QRCodeInput ooui={props.ooui} value={props.value} />
    </Field>
  );
};

export const QRCodeInput = (props: QRCodeInputProps) => {
  const { value, ooui } = props;

  if (!value) {
    return null;
  }

  // Extract the ID and display text from the value
  // If it's a many2one (array), use the first element as ID and the second as text
  // Otherwise, use the value directly
  const qrValue = Array.isArray(value) ? String(value[0]) : String(value);
  const displayValue = Array.isArray(value) ? value[1] : value;

  const qrCodeProps: QRCodeProps = {
    value: qrValue,
    size: ooui.width || DEFAULT_QRCODE_WIDTH,
    bordered: ooui.border !== false,
  };

  return (
    <Space direction="vertical" align="center">
      <AntdQRCode {...qrCodeProps} />
      {ooui.showValue && (
        <Typography.Text type="secondary">{displayValue}</Typography.Text>
      )}
    </Space>
  );
};
