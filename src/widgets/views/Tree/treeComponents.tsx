import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { Checkbox, Spin } from "antd";
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

export const BooleanComponent = ({
  value,
}: {
  value: boolean;
}): ReactElement => {
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

export const Many2OneComponent = ({ value }: { value: any }): ReactElement => {
  return <Many2oneTree m2oField={value} />;
};

export const TextComponent = ({ value }: { value: any }): ReactElement => {
  return (
    <Interweave
      content={value?.toString().replace(/(?:\r\n|\r|\n)/g, "<br>")}
    />
  );
};

export const DateComponent = ({ value }: { value: any }): ReactElement => {
  if (!value || (value && value.length === 0)) return <></>;

  const formattedValue = dayjs(
    value,
    DatePickerConfig.date.dateInternalFormat,
  ).format(DatePickerConfig.date.dateDisplayFormat);
  return <>{formattedValue}</>;
};

export const DateTimeComponent = ({ value }: { value: any }): ReactElement => {
  if (!value || (value && value.length === 0)) return <></>;
  const formattedValue = dayjs(
    value,
    DatePickerConfig.time.dateInternalFormat,
  ).format(DatePickerConfig.time.dateDisplayFormat);
  return <>{formattedValue}</>;
};

export const One2ManyComponent = ({
  value,
}: {
  value: One2manyValue;
}): ReactElement => {
  const length = Array.isArray(value?.items) ? value?.items.length : 0;
  return <>{`( ${length} )`}</>;
};

export const ProgressBarComponent = ({
  value,
}: {
  value: any;
}): ReactElement => {
  return <ProgressBarInput value={value} />;
};

export const FloatTimeComponent = ({ value }: { value: any }): ReactElement => {
  return <>{parseFloatToString(value)}</>;
};

export const NumberComponent = ({ value }: { value: number }): ReactElement => {
  return <div style={{ textAlign: "right" }}>{value}</div>;
};

export const ImageComponent = ({ value }: { value: string }): ReactElement => {
  return (
    <img
      src={`data:image/*;base64,${value}`}
      style={{ maxWidth: "50px", padding: "5px" }}
    />
  );
};

export const TagComponent = ({
  value,
  key,
  ooui,
  context,
}: {
  value: any;
  key: string;
  ooui: any;
  context: any;
}): ReactElement => {
  return <TagInput ooui={ooui} value={value} />;
};

export const SelectionComponent = ({
  value,
  key,
  ooui,
  context,
}: {
  value: any;
  key: string;
  ooui: any;
  context: any;
}): ReactElement => {
  return <>{ooui.selectionValues.get(value)}</>;
};

export const ReferenceComponent = ({
  value,
  key,
  ooui,
  context,
}: {
  value: any;
  key: string;
  ooui: any;
  context: any;
}): ReactElement => {
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

export const AvatarComponent = ({
  value,
  key,
  ooui,
  context,
}: {
  value: any;
  key: string;
  ooui: any;
  context: any;
}): ReactElement => <Avatar ooui={ooui} value={value} />;

export const TagsComponent = ({
  value,
  key,
  ooui,
  context,
}: {
  value: any;
  key: string;
  ooui: any;
  context: any;
}): ReactElement => {
  const [values, setValues] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { relation, field } = ooui;

  const loadValues = useCallback(async () => {
    try {
      setLoading(true);
      const optionsRead = await ConnectionProvider.getHandler().search({
        model: relation,
        params: [["id", "in", value.items.map((v: any) => v.id)]],
        fields: [field],
        context,
      });
      setValues(optionsRead.map((i: any) => i.name));
    } catch (error) {
      console.error("Error loading data", error);
    } finally {
      setLoading(false);
    }
  }, [context, field, relation, value.items]);

  useEffect(() => {
    if (value?.items && value?.items.length > 0) {
      loadValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value?.items]);

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

  if (loading) {
    return <Spin />;
  }

  return (
    <div
      style={{
        maxWidth: "300px",
        whiteSpace: "break-spaces",
        lineHeight: "30px",
      }}
    >
      {tags}
    </div>
  );
};

export const COLUMN_COMPONENTS = {
  boolean: BooleanComponent,
  many2one: Many2OneComponent,
  text: TextComponent,
  one2many: One2ManyComponent,
  many2many: One2ManyComponent,
  progressbar: ProgressBarComponent,
  float_time: FloatTimeComponent,
  image: ImageComponent,
  integer: NumberComponent,
  float: NumberComponent,
  reference: ReferenceComponent,
  tag: TagComponent,
  selection: SelectionComponent,
  date: DateComponent,
  datetime: DateTimeComponent,
  avatar: AvatarComponent,
  tags: TagsComponent,
};
