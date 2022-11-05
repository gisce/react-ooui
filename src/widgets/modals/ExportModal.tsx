import ConnectionProvider from "@/ConnectionProvider";
import {
  ExportModal as ExportModalFmg,
  Locale,
} from "@gisce/react-formiga-components";
import { ExportOptions } from "@gisce/react-formiga-components/dist/components/other/ExportModal/ExportModal.types";
import React, { useRef } from "react";

export type ExportModalProps = {
  visible: boolean;
  locale: string;
  onClose: () => void;
  selectedRegistersToExport?: number;
  totalRegisters: number;
  model: string;
  domain: any[];
  limit?: number;
  treeFields?: any;
  context?: any;
};

// export type ExportModalProps = {
//   onCancel: () => void;
//   onSucceed: (options: ExportOptions) => Promise<void>;
//   selectedRegistersToExport?: number;
//   totalRegisters: number;
//   onGetFields: () => Promise<ExportField[]>;
//   onGetFieldChilds: (field: string) => Promise<ExportField[]>;
// };

export const ExportModal = (props: ExportModalProps) => {
  const { visible, locale, onClose, model, context } = props;
  const fields = useRef<any>({});

  return (
    <ExportModalFmg
      visible={visible}
      locale={locale as Locale}
      onSucceed={async (options: ExportOptions) => {
        onClose();
      }}
      onCancel={onClose}
      selectedRegistersToExport={undefined}
      totalRegisters={0}
      onGetFieldChilds={async ({ key, title }) => {
        let fieldDefinition;

        if (key.indexOf("/") === -1) {
          fieldDefinition = fields.current["/"];
        } else {
          fieldDefinition = fields.current[getParentKey(key)];
        }

        const optsForField = fieldDefinition[getChildKey(key)];
        const relation = optsForField.relation;
        const viewData = await ConnectionProvider.getHandler().getFields({
          model: relation,
          context,
          fields: [],
        });

        fields.current[key] = viewData;

        return convertToExportField({
          fields: viewData,
          parentTitle: title,
          parentKey: key,
        });
      }}
      onGetFields={async () => {
        const viewData = await ConnectionProvider.getHandler().getFields({
          model,
          context,
          fields: [],
        });
        fields.current["/"] = viewData;
        return convertToExportField({ fields: viewData });
      }}
    />
  );
};

const convertToExportField = ({
  fields,
  parentKey,
  parentTitle,
}: {
  fields: any;
  parentTitle?: string;
  parentKey?: string;
}) => {
  const exportFields = [];

  for (const key of Object.keys(fields)) {
    const valuesForField = fields[key];
    const relationField =
      valuesForField.type === "many2one" ||
      valuesForField.type === "one2many" ||
      valuesForField.type === "many2many";

    exportFields.push({
      key: `${parentKey ? parentKey + "/" : ""}${key}`,
      title: `${parentTitle ? parentTitle + "/" : ""}${valuesForField.string}`,
      tooltip: valuesForField.help,
      isLeaf: !relationField,
    });
  }
  return exportFields;
};

const getParentKey = (key: string) => {
  if (key.indexOf("/") === -1) {
    return key;
  }
  const items = key.split("/");
  return items.slice(0, -1).join("/");
};

const getChildKey = (key: string) => {
  if (key.indexOf("/") === -1) {
    return key;
  }
  const items = key.split("/");
  return items[items.length - 1];
};
