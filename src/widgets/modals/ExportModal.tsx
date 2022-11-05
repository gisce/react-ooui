import ConnectionProvider from "@/ConnectionProvider";
import {
  ExportModal as ExportModalFmg,
  Locale,
} from "@gisce/react-formiga-components";
import { ExportOptions } from "@gisce/react-formiga-components/dist/components/other/ExportModal/ExportModal.types";
import React, { useRef } from "react";
import showInfo from "@/ui/InfoDialog";
import { tForLang } from "@/context/LocaleContext";

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

export const ExportModal = (props: ExportModalProps) => {
  const {
    visible,
    locale,
    onClose,
    model,
    context,
    treeFields,
    selectedRegistersToExport,
    totalRegisters,
    domain,
    limit,
  } = props;
  const fields = useRef<any>({});

  return (
    <ExportModalFmg
      visible={visible}
      locale={locale as Locale}
      onSucceed={async (options: ExportOptions) => {
        if (options.selectedKeys.length === 0) {
          showInfo(tForLang("selectAtLeastOneField", locale));
          return;
        }
        onClose();
      }}
      onCancel={onClose}
      selectedRegistersToExport={selectedRegistersToExport}
      totalRegisters={totalRegisters}
      onGetFieldChilds={async ({ key, title }: any) => {
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
      selectedKeys={treeFields ? Object.keys(treeFields) : undefined}
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
