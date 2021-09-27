import React, { useContext } from "react";

import { Char } from "@/widgets/base/Char";
import { Selection } from "@/widgets/base/Selection";
import { DateRangePicker } from "./DateRangePicker";
import { DateTimeRangePicker } from "./DateTimeRangePicker";
import { PairFields } from "./PairFields";

import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

import { Field, Selection as SelectionOoui } from "ooui";

type Props = {
  field: Field;
};

const types = {
  text: "text",
  many2one: "many2one",
  char: "char",
  boolean: "boolean",
  selection: "selection",
  float: "float",
  float_time: "float_time",
  progressbar: "progressbar",
  integer: "integer",
  date: "date",
  datetime: "datetime",
};

export function SearchField(props: Props) {
  const { field } = props;
  field.readOnly = false;
  field.required = false;

  const { t } = useContext(LocaleContext) as LocaleContextType;

  const widgetType = field.type;

  switch (widgetType) {
    case types.boolean: {
      const ooui = new SelectionOoui({
        name: field._id,
        string: field.label,
        selection: [
          ["true", t("true")],
          ["false", t("false")],
        ],
      });

      return <Selection layout="vertical" ooui={ooui} showLabel />;
    }
    case types.float:
    case types.progressbar:
    case types.float_time:
    case types.integer: {
      return <PairFields ooui={field} showLabel />;
    }
    case types.date: {
      return <DateRangePicker ooui={field} layout="vertical" showLabel />;
    }
    case types.datetime: {
      return <DateTimeRangePicker ooui={field} layout="vertical" showLabel />;
    }
    default: {
      return <Char ooui={field} layout="vertical" showLabel />;
    }
  }
}
