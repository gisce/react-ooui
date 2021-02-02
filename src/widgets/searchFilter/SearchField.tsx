import React, { useContext } from "react";

import { Char } from "../base/Char";
import { Selection } from "../base/Selection";
import { DateRangePicker } from "./DateRangePicker";
import { DateTimeRangePicker } from "./DateTimeRangePicker";
import { PairFields } from "./PairFields";

import {
  LocalesContext,
  LocalesContextType,
} from "../../context/LocalesContext";

import { Field, Selection as SelectionOoui } from "ooui";

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

  const { getString } = useContext(LocalesContext) as LocalesContextType;

  const widgetType = field.constructor.name;

  switch (widgetType) {
    case types.text:
    case types.many2one:
    case types.char: {
      return <Char id={field._id} label={field.label} />;
    }
    case types.boolean: {
      return (
        <Selection
          id={field._id}
          label={field.label}
          values={[
            { id: "true", name: getString("true") },
            { id: "false", name: getString("false") },
          ]}
        />
      );
    }
    case types.selection: {
      const selection = field as SelectionOoui;
      return (
        <Selection
          id={selection._id}
          label={selection.label}
          values={Array.from(selection.selectionValues).map(([name, value]) => {
            return { id: name, name: value };
          })}
        />
      );
    }
    case types.float:
    case types.progressbar:
    case types.float_time: {
      return (
        <PairFields
          id={field._id}
          label={field.label}
          defaultValue={0.0}
          type="float"
        />
      );
    }
    case types.integer: {
      return (
        <PairFields
          id={field._id}
          label={field.label}
          defaultValue={0}
          type="integer"
        />
      );
    }
    case types.date: {
      return <DateRangePicker id={field._id} label={field.label} />;
    }
    case types.datetime: {
      return <DateTimeRangePicker id={field._id} label={field.label} />;
    }
    default: {
      return <Char id={field._id} label={field.label || field._id} />;
    }
  }
}
