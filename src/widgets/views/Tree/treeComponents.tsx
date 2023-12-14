import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Checkbox } from "antd";
import { parseFloatToString } from "@/helpers/timeHelper";
import { ProgressBarInput } from "../../base/ProgressBar";
import { One2manyValue } from "../../base/one2many/One2manyInput";
import { Interweave } from "interweave";
import { Many2oneTree } from "../../base/many2one/Many2oneTree";
import { ReferenceTree } from "../../base/ReferenceTree";
import dayjs from "@/helpers/dayjs";
import Avatar from "../../custom/Avatar";
import { CustomTag, TagInput } from "../../custom/Tag";
import { DatePickerConfig } from "@/common/DatePicker";
import ConnectionProvider from "@/ConnectionProvider";
import { colorFromString } from "@/helpers/formHelper";

export const BooleanComponent = (value: boolean): React.ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Checkbox checked={value} disabled />
    </div>
  );
};

export const Many2OneComponent = (m2oField: any): React.ReactElement => {
  return <Many2oneTree m2oField={m2oField} />;
};

export const TextComponent = (value: any): React.ReactElement => {
  return (
    <Interweave
      content={value?.toString().replace(/(?:\r\n|\r|\n)/g, "<br>")}
    />
  );
};

export const DateComponent = (value: any): React.ReactElement => {
  if (!value || (value && value.length === 0)) return <></>;

  const formattedValue = dayjs(
    value,
    DatePickerConfig.date.dateInternalFormat,
  ).format(DatePickerConfig.date.dateDisplayFormat);
  return <>{formattedValue}</>;
};

export const DateTimeComponent = (value: any): React.ReactElement => {
  if (!value || (value && value.length === 0)) return <></>;
  const formattedValue = dayjs(
    value,
    DatePickerConfig.time.dateInternalFormat,
  ).format(DatePickerConfig.time.dateDisplayFormat);
  return <>{formattedValue}</>;
};

export const One2ManyComponent = (value: One2manyValue): React.ReactElement => {
  const length = Array.isArray(value?.items) ? value?.items.length : 0;
  return <>{`( ${length} )`}</>;
};

export const ProgressBarComponent = (value: any): React.ReactElement => {
  return <ProgressBarInput value={value} />;
};

export const FloatTimeComponent = (value: number): React.ReactElement => {
  return <>{parseFloatToString(value)}</>;
};

export const NumberComponent = (value: number): React.ReactElement => {
  return <div style={{ textAlign: "right" }}>{value}</div>;
};

export const ImageComponent = (value: string): React.ReactElement => {
  return (
    <img
      src={`data:image/*;base64,${value}`}
      style={{ maxWidth: "50px", padding: "5px" }}
    />
  );
};

export const TagComponent = (
  value: any,
  key: string,
  ooui: any,
  context: any,
): React.ReactElement => {
  return <TagInput ooui={ooui} value={value} />;
};

export const SelectionComponent = (
  value: any,
  key: string,
  ooui: any,
  context: any,
): React.ReactElement => {
  return <>{ooui.selectionValues.get(value)}</>;
};

export const ReferenceComponent = (
  value: any,
  key: string,
  ooui: any,
  context: any,
): React.ReactElement => {
  return (
    <>
      <ReferenceTree
        value={value}
        selectionValues={ooui.selectionValues}
        context={context}
      />
    </>
  );
};

export const AvatarComponent = (
  value: any,
  key: string,
  ooui: any,
  context: any,
): React.ReactElement => <Avatar ooui={ooui} value={value} />;

export const TagsComponent = (
  value: any,
  key: string,
  ooui: any,
  context: any,
): React.ReactElement => {
  const [values, setValues] = useState<string[]>([]);
  const { relation, field } = ooui;

  const loadValues = useCallback(async () => {
    try {
      const optionsRead = await ConnectionProvider.getHandler().search({
        model: relation,
        params: [["id", "in", value.items.map((v: any) => v.id)]],
        fields: [field],
        context,
      });
      setValues(optionsRead.map((i: any) => i.name));
    } catch (error) {
      console.error("Error loading data", error);
    }
  }, [context, field, relation, value.items]);

  useEffect(() => {
    if (value) {
      loadValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const tags = useMemo(
    () =>
      values.map((v) => {
        const color = colorFromString(v);
        return (
          <CustomTag key={v} color={color}>
            {v}
          </CustomTag>
        );
      }),
    [values],
  );

  return (
    <div style={{ maxWidth: "300px", whiteSpace: "break-spaces" }}>{tags}</div>
  );
};
