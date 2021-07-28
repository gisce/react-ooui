import React, { useRef } from "react";
import { Row, Space } from "antd";
import Field from "@/common/Field";
import { Image as ImageOoui } from "ooui";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import {
  FolderOpenOutlined,
  DownloadOutlined,
  ClearOutlined,
} from "@ant-design/icons";

import { toBase64, getMimeType } from "@/helpers/filesHelper";

type Props = {
  ooui: ImageOoui;
};

export const Image = (props: Props) => {
  const { ooui } = props;
  const { required } = ooui;

  return (
    <Field required={required} {...props}>
      <ImageInput ooui={ooui} />
    </Field>
  );
};

interface ImageInputProps {
  ooui: ImageOoui;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export const ImageInput = (props: ImageInputProps) => {
  const { ooui, value, onChange } = props;
  const { readOnly } = ooui as ImageOoui;
  const inputFile = useRef(null);

  const triggerChange = (changedValue?: string) => {
    onChange?.(changedValue);
  };

  async function downloadFile() {
    const fileType = await getMimeType(value!);
    const linkSource = `data:${fileType?.mime};base64,${value}`;
    const downloadLink = document.createElement("a");

    downloadLink.href = linkSource;
    downloadLink.download = `image.${fileType?.ext}`;
    downloadLink.click();
  }

  async function onChangeFile(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const b64: string = await toBase64(file);
    triggerChange(b64);
  }

  function clearFile() {
    triggerChange(undefined);
  }

  return (
    <>
      <Row gutter={8} wrap={false} justify="center">
        {value && (
          <img
            src={`data:image/*;base64,${value}`}
            style={{ maxWidth: "100px" }}
          />
        )}
        <input
          type="file"
          id="file"
          ref={inputFile}
          accept="image/*"
          style={{ display: "none" }}
          onChange={onChangeFile}
        />
      </Row>
      <Row gutter={8} wrap={false} justify="center" className="pt-5">
        <Space>
          <ButtonWithTooltip
            tooltip={"Upload new image"}
            icon={<FolderOpenOutlined />}
            disabled={readOnly}
            onClick={() => {
              const fileUploadField = inputFile.current as any;
              fileUploadField.click();
            }}
          />
          <ButtonWithTooltip
            tooltip={"Download"}
            disabled={!value}
            onClick={downloadFile}
            icon={<DownloadOutlined />}
          />
          <ButtonWithTooltip
            tooltip={"Clear"}
            disabled={readOnly || !value}
            onClick={clearFile}
            icon={<ClearOutlined />}
          />
        </Space>
      </Row>
    </>
  );
};
