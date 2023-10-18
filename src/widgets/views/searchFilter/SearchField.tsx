import React, { useContext } from "react";

import { Char } from "@/widgets/base/Char";
import { Selection } from "@/widgets/base/Selection";
import { DateRangePicker } from "./DateRangePicker";
import { DateTimeRangePicker } from "./DateTimeRangePicker";
import { PairFields } from "./PairFields";

import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

import {
  Field,
  SearchFieldTypes,
  Selection as SelectionOoui,
} from "@gisce/ooui";
import { MultiSelection } from "@/widgets/base/MultiSelection";

type Props = {
  field: Field;
};

export function SearchField(props: Props) {
  const { field } = props;
  field.readOnly = false;
  field.required = false;

  const { t } = useContext(LocaleContext) as LocaleContextType;

  const widgetType = field.type;

  switch (widgetType) {
    case SearchFieldTypes.boolean: {
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
    case SearchFieldTypes.float:
    case SearchFieldTypes.progressbar:
    case SearchFieldTypes.float_time:
    case SearchFieldTypes.integer: {
      return <PairFields ooui={field} showLabel />;
    }
    case SearchFieldTypes.date: {
      return <DateRangePicker ooui={field} layout="vertical" showLabel />;
    }
    case SearchFieldTypes.datetime: {
      return <DateTimeRangePicker ooui={field} layout="vertical" showLabel />;
    }
    case SearchFieldTypes.selection: {
      return <MultiSelection layout="vertical" ooui={field} showLabel />;
    }
    default: {
      return <Char ooui={field} layout="vertical" showLabel isSearchField />;
    }
  }
}
