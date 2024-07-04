import { FormView } from "@/types";
import Form from "@/widgets/views/Form";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { useContext } from "react";
import { One2manyItem } from "./One2manyInput";
import { filterDuplicateItems } from "@/helpers/one2manyHelper";
import { useLocale } from "@gisce/react-formiga-components";

export type One2manyFormProps = {
  formView: FormView;
  items: One2manyItem[];
  context: any;
  relation: string;
  readOnly: boolean;
  onChange: (items: One2manyItem[]) => void;
};

export const One2manyForm = ({
  formView,
  items,
  context,
  relation,
  readOnly,
  onChange,
}: One2manyFormProps) => {
  const { itemIndex } = useContext(One2manyContext) as One2manyContextType;

  const { t } = useLocale();

  if (items.length === 0) {
    return t("noCurrentEntries");
  }

  return (
    <Form
      formView={formView}
      values={items[itemIndex]?.values}
      parentContext={context}
      model={relation}
      id={items[itemIndex]?.id}
      submitMode={"values"}
      onFieldsChange={(values: any) => {
        const currentItemId = items[itemIndex]?.id;

        const updatedItems = items.map((item) => {
          if (item.id === currentItemId) {
            return {
              ...item,
              operation:
                item.operation === "original"
                  ? "pendingUpdate"
                  : item.operation,
              values: { ...values, id: currentItemId },
              treeValues: { ...values, id: currentItemId },
            };
          }
          return item;
        });

        onChange(filterDuplicateItems(updatedItems));
      }}
      readOnly={readOnly}
    />
  );
};
