import { Char } from "@/widgets/base/Char";
import { Selection } from "@/widgets/base/Selection";
import { DateRangePicker } from "./DateRangePicker";
import { DateTimeRangePicker } from "./DateTimeRangePicker";
import { PairFields } from "./PairFields";
import { useLocale } from "@gisce/react-formiga-components";

import {
  Field,
  Char as CharOoui,
  SearchFieldTypes,
  Selection as SelectionOoui,
  Many2one as Many2oneOoui,
} from "@gisce/ooui";
import { MultiSelection } from "@/widgets/base/MultiSelection";
import { Many2oneLazyInput } from "@/widgets/base/many2one/Many2oneLazy";
import FieldWrapper from "@/common/Field";
import { useUserFeatureIsEnabled } from "@/context/ConfigContext";
import { UserFeatureKeys } from "@/models/userFeature";

type Props = {
  field: Field;
};

export function SearchField(props: Props) {
  const { field } = props;
  field.readOnly = false;
  field.required = false;

  const { t } = useLocale();
  const selectionToLazy = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_SELECTION_TO_LAZY,
  );

  const widgetType = field.type;
  const originalWidget = (field as any).raw_props?.widget;
  const fieldType = (field as any).fieldType;
  const m2oField = field as any;
  const fieldRelation = m2oField.relation || m2oField.raw_props?.relation;

  // Only use lazy M2O if we have a relation to query
  const shouldUseLazyM2o =
    fieldRelation &&
    (originalWidget === "many2one_lazy" ||
      (selectionToLazy &&
        originalWidget === "selection" &&
        fieldType === "many2one"));

  if (shouldUseLazyM2o) {
    const m2oOoui = new Many2oneOoui({
      name: field._id,
      string: field.label,
      relation: fieldRelation,
      context: field.context,
      domain: field.domain,
    });
    m2oOoui.parsedWidgetProps = {
      showCreate: false,
      showAdvancedSearch: true,
    };

    return (
      <FieldWrapper ooui={m2oOoui} layout="vertical" showLabel>
        <Many2oneLazyInput ooui={m2oOoui} allowMultiSelect />
      </FieldWrapper>
    );
  }

  switch (widgetType) {
    case SearchFieldTypes.boolean: {
      const ooui = new SelectionOoui({
        name: field._id,
        string: field.label,
        selection: [
          [true, t("true")],
          [false, t("false")],
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
      return (
        <Char
          ooui={field as CharOoui}
          layout="vertical"
          showLabel
          isSearchField
        />
      );
    }
  }
}
