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

  const qrCodeProps: QRCodeProps = {
    value,
    size: ooui.width || DEFAULT_QRCODE_WIDTH,
    bordered: ooui.border !== false,
  };

  return (
    <Space direction="vertical" align="center">
      <AntdQRCode {...qrCodeProps} />
      {ooui.showValue && (
        <Typography.Text type="secondary">{value}</Typography.Text>
      )}
    </Space>
  );
};
