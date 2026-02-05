import { ReactElement, useMemo } from "react";
import { Checkbox, ColorPicker, Tooltip } from "antd";
import { parseFloatToString } from "@/helpers/timeHelper";
import { ProgressBarInput } from "../../base/ProgressBar";
import { One2manyValue } from "../../base/one2many/One2manyInputLegacy";
import { Interweave } from "interweave";
import { Many2oneTree } from "../../base/many2one/Many2oneTree";
import { ReferenceTree } from "../../base/ReferenceTree";
import { AvatarInput } from "../../custom/Avatar";
import { TagInput } from "../../custom/Tag";
import { EmailTagsRender } from "@/widgets/custom/EmailTags";
import { ImageRender } from "@/widgets/base/Image";
import {
  Char as CharOOui,
  DateTime,
  Many2one as Many2oneOoui,
} from "@gisce/ooui";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useOne2manyContext } from "@/context/One2manyContext";
import { DateValue, DateTimeValue } from "@gisce/react-formiga-components";
import { useNumberFormatter } from "@/hooks/useNumberFormatter";
import { TagsTreeComponent } from "./TagsTreeComponent";

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
  return <DateValue value={value} />;
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

export const DateTimeComponent = ({
  value,
  ooui,
}: {
  value: any;
  ooui: DateTime;
}): ReactElement => {
  return <DateTimeValue value={value} timezone={ooui.timezone} />;
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

const LocalizedFloat = ({
  value,
  decimalDigits,
}: {
  value: number | false | null | undefined;
  decimalDigits?: number;
}): ReactElement => {
  const formatNumber = useNumberFormatter({
    format: "decimal",
    localized: true,
    decimalDigits,
  });
  return <>{formatNumber(value)}</>;
};

const LocalizedInteger = ({
  value,
}: {
  value: number | false | null | undefined;
}): ReactElement => {
  const formatNumber = useNumberFormatter({
    decimalDigits: 0,
    format: "decimal",
    localized: true,
  });
  return <>{formatNumber(value)}</>;
};

export const FloatComponent = ({
  value,
  ooui,
}: {
  value: number | false | null | undefined;
  ooui?: any;
}): ReactElement => {
  const localized = ooui?.parsedWidgetProps?.localized ?? false;

  return useMemo(
    () => (
      <div style={{ textAlign: "right" }}>
        {localized ? (
          <LocalizedFloat value={value} decimalDigits={ooui?.decimalDigits} />
        ) : (
          value
        )}
      </div>
    ),
    [localized, value, ooui?.decimalDigits],
  );
};

export const IntegerComponent = ({
  value,
  ooui,
}: {
  value: number | false | null | undefined;
  ooui?: any;
}): ReactElement => {
  const localized = ooui?.parsedWidgetProps?.localized ?? false;

  return useMemo(
    () => (
      <div style={{ textAlign: "right" }}>
        {localized ? <LocalizedInteger value={value} /> : value}
      </div>
    ),
    [localized, value],
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
  ooui,
}: {
  value: any;
  key: string;
  ooui: any;
  context: any;
}): ReactElement => {
  return useMemo(
    () => <ColorPicker value={value} disabled showText />,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ooui, value],
  );
};

export const TagComponent = ({
  value,
  ooui,
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
  ooui,
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
      <ReferenceTree value={value} selectionValues={ooui.selectionValues} />
    ),
    [context, ooui.selectionValues, value],
  );
};

export const AvatarComponent = ({
  value,
  ooui,
}: {
  value: any;
  key: string;
  ooui: any;
  context: any;
}): ReactElement => {
  return useMemo(
    () => <AvatarInput ooui={ooui} value={value} />,
    [ooui, value],
  );
};

export const COLUMN_COMPONENTS = {
  boolean: BooleanComponent,
  many2one: Many2OneComponent,
  many2one_lazy: Many2OneComponent,
  text: TextComponent,
  one2many: One2ManyComponent,
  many2many: One2ManyComponent,
  progressbar: ProgressBarComponent,
  float_time: FloatTimeComponent,
  image: ImageComponent,
  integer: IntegerComponent,
  float: FloatComponent,
  reference: ReferenceComponent,
  tag: TagComponent,
  selection: SelectionComponent,
  date: DateComponent,
  datetime: DateTimeComponent,
  avatar: AvatarComponent,
  tags: TagsTreeComponent,
  email: EmailTagsComponent,
  colorPicker: ColorPickerComponent,
  char: CharComponent,
};
