import { ReactElement, useCallback, useEffect, useMemo, useState } from "react";
import { Checkbox, Spin, ColorPicker, Tooltip, Popover } from "antd";
import { parseFloatToString } from "@/helpers/timeHelper";
import { ProgressBarInput } from "../../base/ProgressBar";
import { One2manyValue } from "../../base/one2many/One2manyInput";
import { Interweave } from "interweave";
import { Many2oneTree } from "../../base/many2one/Many2oneTree";
import { ReferenceTree } from "../../base/ReferenceTree";
import dayjs from "@/helpers/dayjs";
import Avatar from "../../custom/Avatar";
import { CustomTag, TagInput } from "../../custom/Tag";
import ConnectionProvider from "@/ConnectionProvider";
import { colorFromString } from "@/helpers/formHelper";
import { EmailTagsRender } from "@/widgets/custom/EmailTags";
import { ImageRender } from "@/widgets/base/Image";
import { Char as CharOOui, Many2one as Many2oneOoui } from "@gisce/ooui";
import { DatePickerConfig } from "@/common/DatePicker.helpers";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useOne2manyContext } from "@/context/One2manyContext";

export const BooleanComponent = ({
  value,
}: {
  value: boolean;
}): ReactElement => {
  return useMemo(
    () => (
      <div
        style={{
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Checkbox checked={value} disabled />
      </div>
    ),
    [value],
  );
};

export const EmailTagsComponent = ({
  value,
}: {
  value: string;
}): ReactElement => {
  return useMemo(() => <EmailTagsRender emails={value} />, [value]);
};

export const Many2OneComponent = ({
  value,
  ooui,
}: {
  value: any;
  ooui: Many2oneOoui;
}): ReactElement => {
  return useMemo(
    () => <Many2oneTree m2oField={value} ooui={ooui} />,
    [value, ooui],
  );
};

export const TextComponent = ({ value }: { value: any }): ReactElement => {
  const { treeType } = useActionViewContext();
  const { treeType: one2manyTreeType } = useOne2manyContext() || {};
  const mustHaveAHover = (one2manyTreeType || treeType) === "infinite";

  return useMemo(() => {
    const contentWithNewlines = (
      <Interweave
        content={value?.toString().replace(/(?:\r\n|\r|\n)/g, "<br>")}
      />
    );
    const contentSingleLine = (
      <Interweave
        content={value?.toString().replace(/(?:\r\n|\r|\n|<br\s*\/?>)/g, " ")}
      />
    );

    if (mustHaveAHover) {
      return (
        <Tooltip
          title={contentWithNewlines}
          color={"white"}
          placement="top"
          mouseEnterDelay={0.5}
          overlayStyle={{
            maxWidth: "500px",
            maxHeight: "300px",
            overflow: "auto",
            boxShadow:
              "0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08), 0 9px 28px 8px rgba(0,0,0,.05)",
          }}
          overlayInnerStyle={{
            color: "rgba(0, 0, 0, 0.88)",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            {contentSingleLine}
          </div>
        </Tooltip>
      );
    }

    return contentWithNewlines;
  }, [value, mustHaveAHover]);
};

export const DateComponent = ({ value }: { value: any }): ReactElement => {
  return useMemo(() => {
    if (!value || (value && value.length === 0)) return <></>;

    const formattedValue = dayjs(
      value,
      DatePickerConfig.date.dateInternalFormat,
    ).format(DatePickerConfig.date.dateDisplayFormat);
    return <>{formattedValue}</>;
  }, [value]);
};

export const CharComponent = ({
  value,
  ooui,
}: {
  value: any;
  ooui: CharOOui;
}): ReactElement => {
  return useMemo(() => {
    if (!value) {
      return <></>;
    }
    if (ooui.fieldType === "many2one") {
      return <>{value[1]}</>;
    } else {
      return <>{value}</>;
    }
  }, [value, ooui.fieldType]);
};

export const DateTimeComponent = ({ value }: { value: any }): ReactElement => {
  return useMemo(() => {
    if (!value || (value && value.length === 0)) return <></>;
    const formattedValue = dayjs(
      value,
      DatePickerConfig.time.dateInternalFormat,
    ).format(DatePickerConfig.time.dateDisplayFormat);
    return <>{formattedValue}</>;
  }, [value]);
};

export const One2ManyComponent = ({
  value,
}: {
  value: One2manyValue;
}): ReactElement => {
  return useMemo(() => {
    const length = Array.isArray(value?.items) ? value?.items.length : 0;
    return <>{`( ${length} )`}</>;
  }, [value]);
};

export const ProgressBarComponent = ({
  value,
}: {
  value: any;
}): ReactElement => {
  return useMemo(() => <ProgressBarInput value={value} />, [value]);
};

export const FloatTimeComponent = ({ value }: { value: any }): ReactElement => {
  return useMemo(() => <>{parseFloatToString(value)}</>, [value]);
};

export const NumberComponent = ({ value }: { value: number }): ReactElement => {
  return useMemo(
    () => <div style={{ textAlign: "right" }}>{value}</div>,
    [value],
  );
};

export const ImageComponent = ({ value }: { value: string }): ReactElement => {
  return useMemo(
    () => <ImageRender value={value} style={{ maxHeight: "30px" }} />,
    [value],
  );
};

export const ColorPickerComponent = ({
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
  return useMemo(
    () => <ColorPicker value={value} disabled showText />,
    [ooui, value],
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
  return useMemo(() => <TagInput ooui={ooui} value={value} />, [ooui, value]);
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
  return useMemo(() => {
    let selectionKey = value;

    if (Array.isArray(value) && value.length === 2) {
      selectionKey = value[0];
    }
    return <>{ooui.selectionValues.get(selectionKey)}</>;
  }, [ooui, value]);
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
  return useMemo(
    () => (
      <ReferenceTree
        value={value}
        selectionValues={ooui.selectionValues}
        context={context}
      />
    ),
    [context, ooui.selectionValues, value],
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
}): ReactElement => {
  return useMemo(() => <Avatar ooui={ooui} value={value} />, [ooui, value]);
};

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
  const [values, setValues] = useState<Array<{ id: number; name: string }>>([]);
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
      setValues(
        optionsRead.map((i: any) => {
          return { id: i.id, name: i[field] };
        }),
      );
    } catch (error) {
      console.error("Error loading data", error);
    } finally {
      setLoading(false);
    }
  }, [context, field, relation, value?.items]);

  useEffect(() => {
    if (value?.items && value?.items.length > 0) {
      loadValues();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value?.items]);

  const tags = useMemo(
    () =>
      values.map((entry) => {
        const { id, name } = entry;
        const color = colorFromString(name);
        return (
          <CustomTag key={`${id}`} color={color}>
            {name}
          </CustomTag>
        );
      }),
    [values],
  );

  return useMemo(() => {
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
  }, [tags, loading]);
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
  email: EmailTagsComponent,
  colorPicker: ColorPickerComponent,
  char: CharComponent,
};
