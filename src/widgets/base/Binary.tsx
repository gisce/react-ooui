import React, { useRef, useContext } from "react";
import { Row, Col, Button, Input, Space, theme } from "antd";
import Field from "@/common/Field";
import { Binary as BinaryOoui } from "@gisce/ooui";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import {
  FolderOpenOutlined,
  DownloadOutlined,
  ClearOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import { FormContext, FormContextType } from "@/context/FormContext";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

import {
  getFilesize,
  getMimeType,
  openBase64InNewTab,
  toBase64,
} from "@/helpers/filesHelper";
const { useToken } = theme;

type Props = {
  ooui: BinaryOoui;
};

export const Binary = (props: Props) => {
  const { ooui } = props;
  const { required } = ooui;

  return (
    <Field required={required} {...props}>
      <BinaryInput ooui={ooui} />
    </Field>
  );
};

interface BinaryInputProps {
  ooui: BinaryOoui;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export const BinaryInput = (props: BinaryInputProps) => {
  const { ooui, value, onChange } = props;
  const { readOnly, required, filenameField } = ooui as BinaryOoui;
  const { token } = useToken();
  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;
  const inputFile = useRef(null);
  const { setFieldValue, getFieldValue } =
    (useContext(FormContext) as FormContextType) || {};
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const filesize = value ? getFilesize(value) : "";

  const triggerChange = (changedValue?: string) => {
    onChange?.(changedValue);
  };

  async function downloadFile() {
    const fileType = await getMimeType(value!);
    const linkSource = `data:${fileType?.mime};base64,${value}`;
    const downloadLink = document.createElement("a");
    const fileName = getFieldValue(filenameField);
    const name = getFieldValue("name");

    downloadLink.href = linkSource;
    downloadLink.download = fileName || name;
    downloadLink.click();
  }

  async function openFile() {
    const fileType: any = await getMimeType(value!);
    openBase64InNewTab(value!, fileType.mime);
  }

  async function onChangeFile(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const b64: string = await toBase64(file);
    triggerChange(b64);

    if (filenameField) {
      setFieldValue(filenameField, file.name);
    }
  }

  function clearFile() {
    setFieldValue(filenameField, undefined);
    triggerChange(undefined);
  }

  return (
    <Row gutter={8}>
      <Col style={{ paddingBottom: 5 }}>
        <input
          type="file"
          id="file"
          ref={inputFile}
          style={{ display: "none" }}
          onChange={onChangeFile}
        />
        <Input
          type="text"
          disabled={true}
          style={requiredStyle}
          value={filesize}
        />
      </Col>
      <Col>
        <Space>
          <Button
            icon={<FolderOpenOutlined />}
            disabled={readOnly}
            onClick={() => {
              const fileUploadField = inputFile.current as any;
              fileUploadField.click();
            }}
          >
            Select
          </Button>
          <Button icon={<EyeOutlined />} disabled={!value} onClick={openFile}>
            {t("open")}
          </Button>
          <ButtonWithTooltip
            tooltip={t("download")}
            disabled={!value}
            onClick={downloadFile}
            icon={<DownloadOutlined />}
          />
          <ButtonWithTooltip
            tooltip={t("clear")}
            disabled={readOnly || !value}
            onClick={clearFile}
            icon={<ClearOutlined />}
          />
        </Space>
      </Col>
    </Row>
  );
};
