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

export function SearchField(props: Props): React.ReactElement {
  const { field } = props;
  field.readOnly = false;

  const { getString } = useContext(LocalesContext) as LocalesContextType;

  const widgetType = field.constructor.name;

  switch (widgetType) {
    case types.text:
    case types.many2one:
    case types.char: {
      const char = field as CharOoui;
      return <Char ooui={char} layout="vertical" />;
    }
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
    case types.selection: {
      const selection = field as SelectionOoui;
      return <Selection layout="vertical" ooui={selection} />;
    }
    case types.float:
    case types.progressbar:
    case types.float_time:
    case types.integer: {
      return <PairFields ooui={field} id={field._id} label={field.label} />;
    }
    case types.date: {
      return (
        <DateRangePicker id={field._id} label={field.label} layout="vertical" />
      );
    }
    case types.datetime: {
      return (
        <DateTimeRangePicker
          id={field._id}
          label={field.label}
          layout="vertical"
        />
      );
    }
    default: {
      const char = field as CharOoui;
      return <Char ooui={char} layout="vertical" />;
    }
  }
}
