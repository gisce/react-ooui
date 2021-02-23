import React, { useContext } from "react";

import { Char } from "@/widgets/base/Char";
import { Selection } from "@/widgets/base/Selection";
import { DateRangePicker } from "./DateRangePicker";
import { DateTimeRangePicker } from "./DateTimeRangePicker";
import { PairFields } from "./PairFields";

import { LocalesContext, LocalesContextType } from "@/context/LocalesContext";

import { Field, Selection as SelectionOoui, Char as CharOoui } from "ooui";

type Props = {
  field: Field;
};

const types = {
  text: "Text",
  many2one: "Many2one",
  char: "Char",
  boolean: "Boolean",
  selection: "Selection",
  float: "Float",
  float_time: "FloatTime",
  progressbar: "ProgressBar",
  integer: "Integer",
  date: "Date",
  datetime: "DateTime",
};

export function SearchField(props: Props) {
  const { field } = props;
  field.readOnly = false;

  const { getString } = useContext(LocalesContext) as LocalesContextType;

  const widgetType = field.constructor.name;

  switch (widgetType) {
    case types.boolean: {
      const ooui = new SelectionOoui({
        name: field._id,
        string: field.label,
        selection: [
          ["true", getString("true")],
          ["false", getString("false")],
        ],
      });

      return <Selection layout="vertical" ooui={ooui} />;
    }
    case types.float:
    case types.progressbar:
    case types.float_time:
    case types.integer: {
      return <PairFields ooui={field} />;
    }
    case types.date: {
      return <DateRangePicker ooui={field} layout="vertical" />;
    }
    case types.datetime: {
      return <DateTimeRangePicker ooui={field} layout="vertical" />;
    }
    default: {
      return <Char ooui={field} layout="vertical" />;
    }
  }
}
